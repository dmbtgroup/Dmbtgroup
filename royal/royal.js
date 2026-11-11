// ARTRA — motion and interaction.
(function () {
  "use strict";

  // Where commission requests are sent (the site has no server, so the form opens the visitor's email app).
  var ATELIER_EMAIL = ARTRA_ART.email; // set in art.js

  var NS = "http://www.w3.org/2000/svg";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  // ---- Ornament built in code: hero medallion rings, tray engraving, mirror shards ----
  function buildMedallion() {
    var dots = $("#ringDots"), petals = $("#ringPetals"), arcs = $("#ringArcs");
    if (!dots) return;
    for (var i = 0; i < 72; i++) {
      var a = (i / 72) * Math.PI * 2;
      el("circle", { cx: (Math.cos(a) * 180).toFixed(2), cy: (Math.sin(a) * 180).toFixed(2), r: i % 6 === 0 ? 3.2 : 1.4, fill: "url(#gGold)" }, dots);
    }
    for (var j = 0; j < 24; j++) {
      el("path", { d: "M0 -164 C10 -150 10 -134 0 -124 C-10 -134 -10 -150 0 -164 Z", fill: j % 2 ? "none" : "url(#gGold)",
        stroke: "url(#gGold)", "stroke-width": 1, transform: "rotate(" + j * 15 + ")", opacity: j % 2 ? 1 : .85 }, petals);
    }
    for (var k = 0; k < 16; k++) {
      el("path", { d: "M-18 -108 Q0 -86 18 -108", fill: "none", stroke: "url(#gGold)", "stroke-width": 1.4, transform: "rotate(" + k * 22.5 + ")" }, arcs);
      el("circle", { cx: 0, cy: -100, r: 2, fill: "url(#gGold)", transform: "rotate(" + (k * 22.5 + 11.25) + ")" }, arcs);
    }
  }

  ARTRA_ART.mount(document);
  buildMedallion();

  // ---- Header ----
  var top = $("#top"), burger = $("#burger"), nav = $("#nav");
  function onScroll() { top.classList.toggle("scrolled", scrollY > 30); }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }); });

  // ---- Reveal on scroll, staggered within each group ----
  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      revealIO.unobserve(e.target);
      var c = e.target.querySelector("[data-count]") ? e.target : null;
      if (c) countUp(c);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach(function (n) {
    var sibs = $$(".reveal", n.parentElement).filter(function (s) { return s.parentElement === n.parentElement; });
    n.style.setProperty("--delay", (sibs.indexOf(n) * 0.09).toFixed(2) + "s");
    revealIO.observe(n);
  });

  function countUp(scope) {
    $$("[data-count]", scope).forEach(function (n) {
      var end = +n.getAttribute("data-count"), t0 = null, dur = 1800;
      if (reduced) { n.textContent = end.toLocaleString("en"); return; }
      requestAnimationFrame(function step(t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
        n.textContent = Math.round(end * eased).toLocaleString("en");
        if (p < 1) requestAnimationFrame(step);
      });
    });
  }

  // ---- Pause looping SVG motion while off screen ----
  var pauseIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { e.target.classList.toggle("paused", !e.isIntersecting); });
  });
  $$(".art, .medallion").forEach(function (n) { pauseIO.observe(n); });

  // ---- 3D tilt and light that follow the pointer on each piece ----
  if (!reduced && matchMedia("(hover: hover)").matches) {
    $$(".piece").forEach(function (card) {
      card.addEventListener("pointermove", function (ev) {
        var r = card.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        card.style.setProperty("--ry", ((x - 0.5) * 10).toFixed(2) + "deg");
        card.style.setProperty("--rx", ((0.5 - y) * 8).toFixed(2) + "deg");
        card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  // ---- Products (from products.js, which mirrors the ARTRA Product Detail form) ----
  var PRODUCTS = ARTRA_ART.products();
  var grid = $("#grid");
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  // An old #piece-<slug> link opens that piece's page.
  var old = location.hash.match(/^#piece-(.+)$/);
  if (old) location.replace("/royal/piece?p=" + old[1]);

  // Fill each drawn card from its product, and add a photo card for any product without a drawing.
  PRODUCTS.forEach(function (p) {
    var card = $('.piece[data-piece="' + p.key + '"]');
    if (!card) {
      card = document.createElement("a");
      card.className = "piece reveal in";
      card.innerHTML = '<div class="piece-art piece-photo"></div><div class="piece-info"><span class="piece-craft"></span><h3></h3><span class="piece-meta"></span></div>';
      if (p.photo) {
        var img = new Image(); img.src = p.photo; img.alt = p.name; img.loading = "lazy";
        $(".piece-art", card).appendChild(img);
      }
      grid.appendChild(card);
    }
    card.setAttribute("data-piece", p.slug);
    card.href = p.url;
    $(".piece-craft", card).textContent = p.category || "";
    $("h3", card).textContent = p.name || "";
    $(".piece-meta", card).textContent = p.medium || "";
    p.card = card;
  });
  $$(".piece").forEach(function (c) { if (!PRODUCTS.some(function (p) { return p.card === c; })) c.hidden = true; });

  // ---- Showcase ----
  var current = 0, stageArt = $("#stageArt"), copy = $(".stage-copy");

  function show(i) {
    if (!PRODUCTS.length) return;
    current = (i + PRODUCTS.length) % PRODUCTS.length;
    var p = PRODUCTS[current], art = ARTRA_ART.make(p.key);
    stageArt.innerHTML = "";
    if (art) stageArt.appendChild(art);
    else if (p.photo) { var img = new Image(); img.src = p.photo; img.alt = p.name; img.className = "photo"; stageArt.appendChild(img); }
    stageArt.classList.remove("swap"); void stageArt.offsetWidth; stageArt.classList.add("swap");

    $("#sCraft").textContent = p.category || "";
    $("#sName").textContent = p.name || "";
    $("#sStory").textContent = p.description || "";
    var specs = [["Medium", p.medium], ["Origin", p.origin], ["Dimensions", p.dimensions], ["Product ID", p.id]]
      .filter(function (f) { return f[1]; }).slice(0, 3);
    $("#sSpecs").innerHTML = specs.map(function (f) { return "<div><dt>" + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("");
    $("#sSpecs").hidden = !specs.length;
    $("#sMore").href = p.url;
    $("#sCount").textContent = String(current + 1).padStart(2, "0") + " / " + String(PRODUCTS.length).padStart(2, "0");
    copy.classList.remove("fade"); void copy.offsetWidth; copy.classList.add("fade");
  }

  function preselect(craft) {
    var sel = $('#form select[name="craft"]');
    $$("option", sel).forEach(function (o, i) { if (o.textContent === craft) sel.selectedIndex = i; });
  }

  $("#prev").addEventListener("click", function () { show(current - 1); });
  $("#next").addEventListener("click", function () { show(current + 1); });
  $("#sAsk").addEventListener("click", function () { preselect(PRODUCTS[current].category); });
  show(0);

  // Turn through the pieces by themselves while the showcase is in view and idle.
  var auto = null, stage = $("#stage");
  new IntersectionObserver(function (entries) {
    clearInterval(auto);
    if (entries[0].isIntersecting && !reduced) auto = setInterval(function () { show(current + 1); }, 7000);
  }, { threshold: 0.4 }).observe(stage);
  $$("#prev, #next").forEach(function (b) { b.addEventListener("click", function () { clearInterval(auto); }); });

  // ---- Commission form ----
  $("#form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var f = ev.target;
    var body = "Name: " + f.name.value + "\nEmail: " + f.email.value + "\nCraft: " + f.craft.value + "\n\n" + f.idea.value;
    location.href = "mailto:" + ATELIER_EMAIL + "?subject=" + encodeURIComponent("ARTRA commission request — " + f.craft.value) + "&body=" + encodeURIComponent(body);
    $("#formNote").textContent = "Thank you — your email app should now open with the request.";
  });

  $("#year").textContent = new Date().getFullYear();

  // ---- Gold dust drifting across the page ----
  var cv = $("#dust");
  if (cv && !reduced) {
    var ctx = cv.getContext("2d"), W, H, dpr, motes = [];
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr;
      var n = Math.round(Math.min(70, innerWidth / 18));
      motes = [];
      for (var i = 0; i < n; i++) motes.push(mote(true));
    }
    function mote(any) {
      return { x: Math.random() * W, y: any ? Math.random() * H : H + 10, r: (Math.random() * 1.6 + 0.4) * dpr,
        vy: -(Math.random() * 0.25 + 0.08) * dpr, vx: (Math.random() - 0.5) * 0.15 * dpr, ph: Math.random() * 6.28, tw: Math.random() * 0.02 + 0.005 };
    }
    var running = true;
    document.addEventListener("visibilitychange", function () { running = !document.hidden; if (running) requestAnimationFrame(frame); });
    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < motes.length; i++) {
        var m = motes[i];
        m.x += m.vx + Math.sin(m.ph) * 0.12 * dpr; m.y += m.vy; m.ph += m.tw;
        if (m.y < -10) motes[i] = m = mote(false);
        var a = 0.25 + Math.abs(Math.sin(m.ph)) * 0.55;
        ctx.beginPath();
        ctx.fillStyle = "rgba(230, 201, 122," + a.toFixed(3) + ")";
        ctx.shadowColor = "rgba(230, 190, 100, .8)"; ctx.shadowBlur = 6 * dpr;
        ctx.arc(m.x, m.y, m.r, 0, 6.283);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    addEventListener("resize", size);
    size();
    requestAnimationFrame(frame);
  }
})();
