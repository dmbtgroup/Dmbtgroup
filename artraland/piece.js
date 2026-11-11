// ARTRA — a piece's own page (/piece?p=<slug>), filled from products.js.
(function () {
  "use strict";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  ARTRA_ART.mount(document);
  $("#year").textContent = new Date().getFullYear();

  // ---- Header menu ----
  var top = $("#top"), burger = $("#burger"), nav = $("#nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });

  // ---- Which piece ----
  var PRODUCTS = ARTRA_ART.products();
  var slug = (new URLSearchParams(location.search).get("p") || "").toLowerCase();
  var p = PRODUCTS.filter(function (x) { return x.slug === slug; })[0];
  if (!p) {
    $$("#main > section").forEach(function (s) { s.hidden = s.id !== "missing"; });
    $("#pbar").hidden = true;
    top.classList.add("scrolled");
    return;
  }
  document.title = p.name + " — ARTRA";
  var canon = document.createElement("link");
  canon.rel = "canonical";
  canon.href = "https://artraland.com/piece?p=" + encodeURIComponent(p.slug);
  document.head.appendChild(canon);
  var meta = document.querySelector('meta[name="description"]');
  if (meta && p.description) meta.content = p.description;

  // The piece's art: its cut-out photo when it has one, else its photo (when preferred, or when it has no
  // drawing), else its animated drawing. "scene" asks for the full photo, background and all.
  function art(preferPhoto, scene) {
    var src = scene ? p.photo : (p.cutout || ((preferPhoto || !ARTRA_ART.has(p.key)) ? p.photo : ""));
    if (src) {
      var img = new Image(); img.src = src; img.alt = preferPhoto ? p.name : "";
      img.className = src === p.cutout ? "photo cutout" : "photo";
      return img;
    }
    return ARTRA_ART.make(p.key) || document.createElement("div");
  }
  // Put the art in a container, marking photos (framed and feathered) and cut-outs (free-standing).
  function place(sel, preferPhoto, scene) {
    var box = $(sel), a = art(preferPhoto, scene), cut = a.classList.contains("cutout");
    box.appendChild(a);
    box.classList.toggle("is-photo", a.tagName === "IMG" && !cut);
    box.classList.toggle("is-cutout", cut);
  }

  // ---- Hero ----
  $("#pCat").textContent = p.category || "";
  $("#pName").textContent = p.name;
  $("#pbarName").textContent = p.name;
  place("#heroArt", true);
  if (p.photo && !p.cutout) {
    // A soft, darkened copy of the photo fills the hero behind the sharp one.
    $(".p-hero-ambient").style.backgroundImage = "url(\"" + p.photo.replace(/"/g, "%22") + "\")";
    $("#overview").classList.add("has-photo");
  }
  var facts = [["Product ID", p.id], ["Medium", p.medium], ["Origin", p.origin]].filter(function (f) { return f[1]; });
  $("#heroFacts").innerHTML = facts.map(function (f) { return "<div>" + f[0] + "<b>" + esc(f[1]) + "</b></div>"; }).join("");

  // ---- Statement: the description, lit word by word ----
  var words = String(p.description || p.name).split(/\s+/);
  $("#statement").innerHTML = words.map(function (w, i) {
    // A few words in gold italics, for rhythm.
    var gold = i > 0 && /^(gold|gilded|silk|silver|hand|light|lamp|stars?|water|lace|seam\.?)/i.test(w);
    return '<span class="' + (gold ? "gold" : "") + '">' + esc(w) + "</span>";
  }).join(" ");
  var wordEls = $$("#statement span");

  // ---- Story chapters: only the fields the piece has ----
  var chapters = [];
  if (p.history) chapters.push({ title: "Heritage", body: "<p>" + esc(p.history) + "</p>" });
  if (p.artist || p.origin) chapters.push({ title: p.artist ? "The artist" : "Origin",
    body: (p.artist ? '<p class="big">' + esc(p.artist) + "</p>" : "") + (p.origin ? "<p>" + (p.artist ? "Made in " : "") + esc(p.origin) + "</p>" : "") });
  if (p.medium) chapters.push({ title: "The material", body: '<p class="big">' + esc(p.medium) + "</p>" + (p.dimensions ? "<p>" + esc(p.dimensions) + "</p>" : "") });
  if (!chapters.length) { $("#story").hidden = true; $('[data-needs="story"]').hidden = true; }
  $("#chapters").innerHTML = chapters.map(function (c, i) {
    return '<article class="chapter"><div class="inner"><p class="num">' + ["I", "II", "III", "IV"][i] + "</p><h2>" + c.title + "</h2>" + c.body + "</div></article>";
  }).join("");
  $("#storyDots").innerHTML = chapters.map(function () { return "<span></span>"; }).join("");
  place("#storyArt", false);
  var chapterEls = $$(".chapter"), dotEls = $$("#storyDots span");

  // ---- Up close ----
  place("#closeArt", true, true);
  if (p.photo) $("#closeup").classList.add("has-photo");
  $("#closeText").textContent = p.medium
    ? p.medium + (p.artist ? ", worked by " + p.artist : "") + ". Come closer: every motif was drawn, cut and finished by hand, and no two pieces are quite alike."
    : "Every motif was drawn, cut and finished by hand, and no two pieces are quite alike.";

  // ---- Specifications ----
  $("#specName").textContent = p.name;
  place("#specArt", false);
  var specs = [
    ["Product ID", p.id], ["Category", p.category], ["Artist", p.artist], ["Origin", p.origin], ["Medium", p.medium, true],
    ["Dimensions", p.dimensions, true], ["Packaging dimensions", p.packaging, true], ["Last update", p.updated]
  ].filter(function (f) { return f[1]; });
  $("#specList").innerHTML = specs.map(function (f) {
    return '<div class="' + (f[2] && String(f[1]).length > 26 ? "wide" : "") + '"><dt>' + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>";
  }).join("");

  // ---- Care, returns, more ----
  var acc = [["Care instructions", p.care], ["Returns and exchanges", p.returns], ["Additional information", p.additional]].filter(function (f) { return f[1]; });
  if (!acc.length) { $("#care").hidden = true; $('[data-needs="care"]').hidden = true; }
  $("#accordion").innerHTML = acc.map(function (f, i) {
    return "<details" + (i === 0 ? " open" : "") + "><summary>" + f[0] + '</summary><div class="body">' + esc(f[1]) + "</div></details>";
  }).join("");

  // ---- Other pieces ----
  var track = $("#moreTrack");
  PRODUCTS.filter(function (x) { return x !== p; }).forEach(function (x) {
    var a = document.createElement("a");
    a.className = "more-card";
    a.href = x.url;
    a.innerHTML = '<div class="m-art"></div><div class="m-info"><span></span><b></b></div>';
    var d = ARTRA_ART.make(x.key);
    if (d) $(".m-art", a).appendChild(d);
    else if (x.cutout || x.photo) { var img = new Image(); img.src = x.cutout || x.photo; img.alt = ""; img.loading = "lazy"; if (x.cutout) img.className = "cutout"; $(".m-art", a).appendChild(img); }
    $(".m-info span", a).textContent = x.category || "";
    $(".m-info b", a).textContent = x.name || "";
    track.appendChild(a);
  });
  if (!track.children.length) $(".p-more").hidden = true;
  function slide(dir) { track.scrollBy({ left: dir * Math.min(track.clientWidth * 0.8, 728), behavior: reduced ? "auto" : "smooth" }); }
  $("#morePrev").addEventListener("click", function () { slide(-1); });
  $("#moreNext").addEventListener("click", function () { slide(1); });

  // ---- Enquire ----
  $("#ctaTitle").textContent = "Enquire about " + p.name;
  place("#ctaArt", false);
  var subject = "Enquiry — " + p.name + (p.id ? " (" + p.id + ")" : "");
  var body = "Hello ARTRA,\n\nI would like to know more about " + p.name + (p.id ? " (product ID " + p.id + ")" : "") + ".\n\n" + location.href + "\n";
  $("#ctaMail").href = "mailto:" + ARTRA_ART.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // ---- Pause looping drawings that are off screen ----
  var pauseIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle("paused", !e.isIntersecting); });
  });
  $$(".art").forEach(function (n) { pauseIO.observe(n); });

  // ---- Scroll-led motion ----
  var hero = $("#overview"), heroArt = $("#heroArt"), heroTitle = $("#heroTitle"), heroFoot = $("#heroFoot");
  var intro = $("#intro"), story = $("#story"), storyArt = $("#storyArt"), ring = $(".p-story-ring");
  var close = $("#closeup"), closeArt = $("#closeArt"), pbar = $("#pbar");
  var links = $$("#pbarLinks a").filter(function (a) { return !a.hidden; });
  var sections = links.map(function (a) { return $(a.getAttribute("href")); });
  var ticking = false;

  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  // 0 when the element's top reaches the bottom of the screen, 1 when its bottom reaches the top.
  function through(elm) { var r = elm.getBoundingClientRect(); return clamp((innerHeight - r.top) / (r.height + innerHeight)); }

  function frame() {
    ticking = false;
    var vh = innerHeight, y = scrollY;

    // Hero: the piece rises and the title drifts away.
    var h = clamp(y / (hero.offsetHeight * 0.9));
    if (!reduced) {
      heroArt.style.transform = "translateY(" + (-h * 14) + "vh) scale(" + (1 + h * 0.18) + ")";
      heroTitle.style.transform = "translateY(" + (-h * 22) + "vh)";
      heroTitle.style.opacity = 1 - h * 1.4;
      heroFoot.style.opacity = 1 - h * 2.5;
    }

    // Product bar after the hero.
    var showBar = y > hero.offsetHeight - 140;
    pbar.classList.toggle("show", showBar);
    top.classList.toggle("scrolled", y > 30);
    top.classList.toggle("over-bar", showBar);

    // Statement words.
    if (!reduced) {
      var ir = intro.getBoundingClientRect(), wp = clamp((vh * 0.85 - ir.top) / (ir.height * 0.75));
      var lit = Math.round(wp * wordEls.length);
      for (var i = 0; i < wordEls.length; i++) wordEls[i].classList.toggle("lit", i < lit);
    }

    // Story: the chapter nearest the middle of the screen sets the piece's pose.
    if (chapterEls.length) {
      var best = 0, bestD = Infinity;
      chapterEls.forEach(function (c, i) {
        var r = c.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - vh / 2);
        if (d < bestD) { bestD = d; best = i; }
      });
      chapterEls.forEach(function (c, i) { c.classList.toggle("on", i === best); });
      dotEls.forEach(function (d, i) { d.classList.toggle("on", i === best); });
      storyArt.setAttribute("data-step", String(best + 1));
      ring.style.setProperty("--turn", (through(story) * 300).toFixed(1) + "deg");
    }

    // Up close: the enlarged piece pans as the section passes.
    if (!reduced) {
      var cp = through(close);
      closeArt.style.setProperty("--pan", ((0.5 - cp) * 36).toFixed(2) + "%");
      closeArt.style.setProperty("--tilt", ((cp - 0.5) * 6).toFixed(2) + "deg");
    }

    // Product bar: highlight the section in view.
    var on = -1;
    sections.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < vh * 0.45) on = i; });
    links.forEach(function (a, i) { a.classList.toggle("on", i === on); });
  }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", request);
  frame();
  if (reduced) wordEls.forEach(function (w) { w.classList.add("lit"); });
})();
