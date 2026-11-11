// Zarrin Atelier — motion and interaction.
(function () {
  "use strict";

  // Where commission requests are sent (the site has no server, so the form opens the visitor's email app).
  var ATELIER_EMAIL = "sales@dmbtgroup.com";

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

  function buildTray(scope) {
    var outer = $(".tray-outer", scope), inner = $(".tray-inner", scope);
    if (!outer) return;
    var ink = "#3a2a0c";
    for (var i = 0; i < 20; i++) {
      el("path", { d: "M100 34 C110 46 110 58 100 64 C90 58 90 46 100 34 Z", fill: "none", stroke: ink, "stroke-width": 1.3,
        transform: "rotate(" + i * 18 + " 100 120)" }, outer);
      el("circle", { cx: 100, cy: 40, r: 1.6, fill: ink, transform: "rotate(" + (i * 18 + 9) + " 100 120)" }, outer);
    }
    for (var j = 0; j < 12; j++) {
      el("path", { d: "M100 64 Q112 74 100 86 Q88 74 100 64", fill: "none", stroke: ink, "stroke-width": 1.2,
        transform: "rotate(" + j * 30 + " 100 120)" }, inner);
    }
  }

  function buildShards(scope) {
    var g = $(".shards", scope);
    if (!g || g.childNodes.length) return;
    var fills = ["#efe9dc", "#c9a24a", "#9a9389", "#e6c97a", "#5b5650", "#d8d0bf"];
    var rings = [{ r0: 0, r1: 26, n: 8 }, { r0: 26, r1: 54, n: 16 }, { r0: 54, r1: 86, n: 24 }];
    var idx = 0;
    rings.forEach(function (ring) {
      for (var i = 0; i < ring.n; i++) {
        var a0 = (i / ring.n) * Math.PI * 2, a1 = ((i + 1) / ring.n) * Math.PI * 2, am = (a0 + a1) / 2;
        var p = function (r, a) { return (100 + Math.cos(a) * r).toFixed(1) + "," + (120 + Math.sin(a) * r).toFixed(1); };
        var pts = ring.r0 === 0
          ? [p(0, 0), p(ring.r1, a0), p(ring.r1, a1)]
          : [p(ring.r0, am), p(ring.r1, a0 + 0.02), p(ring.r1 + 4, am), p(ring.r1, a1 - 0.02)];
        var poly = el("polygon", { points: pts.join(" "), fill: fills[(idx * 7) % fills.length], stroke: "#16130f", "stroke-width": 1.2 }, g);
        poly.style.setProperty("--d", ((idx * 0.37) % 3.4).toFixed(2) + "s");
        idx++;
      }
    });
  }

  buildMedallion();
  buildTray(document);
  buildShards(document);

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

  // ---- Showcase ----
  var PIECES = {
    vase: { story: "Raised from a single sheet of copper, fired in enamel seven times and banded with burnished gold leaf. The pattern turns all the way round without a seam.", mat: "Copper, enamel, gold", hours: "640", ed: "1 of 7" },
    box: { story: "Thousands of slivers of walnut, bone and brass are bundled, sliced and laid into stars. Lift the lid and the lining glows like a lamp.", mat: "Walnut, bone, brass", hours: "420", ed: "1 of 12" },
    tray: { story: "A court tray chased with a hammer and steel point, ring within ring, until the brass catches light like water.", mat: "Brass, hand-chased", hours: "260", ed: "1 of 9" },
    lantern: { story: "Silver wire twisted by hand into vines and teardrops, then gilded, so candlelight falls through it as lace.", mat: "Silver, gold gilding", hours: "380", ed: "1 of 10" },
    mirror: { story: "Hundreds of hand-cut mirror facets set in gilded plaster, each angled a little differently to scatter a single flame across a room.", mat: "Mirror, plaster, gold", hours: "520", ed: "1 of 5" },
    carpet: { story: "Silk on a silk foundation, dyed with madder, indigo and saffron and knotted row by row on a vertical loom.", mat: "Silk, natural dyes", hours: "1,200", ed: "Unique" }
  };
  var order = Object.keys(PIECES), current = 0;
  var stageArt = $("#stageArt"), copy = $(".stage-copy");

  function show(i, scroll) {
    current = (i + order.length) % order.length;
    var key = order[current], card = $('.piece[data-piece="' + key + '"]'), data = PIECES[key];
    var clone = $(".art", card).cloneNode(true);
    clone.classList.remove("paused");
    // Give the copy its own ids (and point its references at them) so it animates on its own.
    $$("[id]", clone).forEach(function (n) {
      var old = n.id;
      n.id = old + "-stage";
      $$('[clip-path="url(#' + old + ')"]', clone).forEach(function (r) { r.setAttribute("clip-path", "url(#" + n.id + ")"); });
    });
    stageArt.innerHTML = "";
    stageArt.appendChild(clone);
    stageArt.classList.remove("swap"); void stageArt.offsetWidth; stageArt.classList.add("swap");

    $("#sCraft").textContent = $(".piece-craft", card).textContent;
    $("#sName").textContent = $("h3", card).textContent;
    $("#sStory").textContent = data.story;
    $("#sMat").textContent = data.mat;
    $("#sHours").textContent = data.hours;
    $("#sEd").textContent = data.ed;
    $("#sCount").textContent = String(current + 1).padStart(2, "0") + " / " + String(order.length).padStart(2, "0");
    copy.classList.remove("fade"); void copy.offsetWidth; copy.classList.add("fade");
    $$(".piece").forEach(function (p) { p.classList.toggle("is-active", p === card); });
    if (scroll) $("#showcase").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }

  $$(".piece").forEach(function (card) {
    card.addEventListener("click", function () { show(order.indexOf(card.getAttribute("data-piece")), true); });
  });
  $("#prev").addEventListener("click", function () { show(current - 1); });
  $("#next").addEventListener("click", function () { show(current + 1); });
  $("#sAsk").addEventListener("click", function () {
    var sel = $('#form select[name="craft"]'), craft = $("#sCraft").textContent;
    $$("option", sel).forEach(function (o, i) { if (o.textContent === craft) sel.selectedIndex = i; });
  });
  show(0);

  // Turn through the pieces by themselves while the showcase is in view and idle.
  var auto = null, stage = $("#stage");
  new IntersectionObserver(function (entries) {
    var vis = entries[0].isIntersecting;
    clearInterval(auto);
    if (vis && !reduced) auto = setInterval(function () { show(current + 1); }, 7000);
  }, { threshold: 0.4 }).observe(stage);
  $$("#prev, #next").forEach(function (b) { b.addEventListener("click", function () { clearInterval(auto); }); });

  // ---- Commission form ----
  $("#form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var f = ev.target;
    var body = "Name: " + f.name.value + "\nEmail: " + f.email.value + "\nCraft: " + f.craft.value + "\n\n" + f.idea.value;
    location.href = "mailto:" + ATELIER_EMAIL + "?subject=" + encodeURIComponent("Commission request — " + f.craft.value) + "&body=" + encodeURIComponent(body);
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
