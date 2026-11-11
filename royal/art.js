// ARTRA — the animated drawings of each piece, shared by the collection page and the piece pages.
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";

  // Gold gradients and patterns every drawing uses.
  var DEFS = "<svg class=\"defs\" aria-hidden=\"true\" width=\"0\" height=\"0\">\n  <defs>\n    <linearGradient id=\"gGold\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0\" stop-color=\"#f6e3a1\"/>\n      <stop offset=\".35\" stop-color=\"#c9a24a\"/>\n      <stop offset=\".65\" stop-color=\"#8a6a24\"/>\n      <stop offset=\"1\" stop-color=\"#e8c873\"/>\n    </linearGradient>\n    <linearGradient id=\"gGoldV\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop offset=\"0\" stop-color=\"#f1d98e\"/>\n      <stop offset=\".5\" stop-color=\"#b48a35\"/>\n      <stop offset=\"1\" stop-color=\"#6e531c\"/>\n    </linearGradient>\n    <linearGradient id=\"gCylinder\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0\" stop-color=\"#000\" stop-opacity=\".78\"/>\n      <stop offset=\".3\" stop-color=\"#000\" stop-opacity=\"0\"/>\n      <stop offset=\".42\" stop-color=\"#fff3d0\" stop-opacity=\".28\"/>\n      <stop offset=\".55\" stop-color=\"#000\" stop-opacity=\"0\"/>\n      <stop offset=\"1\" stop-color=\"#000\" stop-opacity=\".82\"/>\n    </linearGradient>\n    <linearGradient id=\"gSheen\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">\n      <stop offset=\"0\" stop-color=\"#fff\" stop-opacity=\"0\"/>\n      <stop offset=\".5\" stop-color=\"#fff6d8\" stop-opacity=\".55\"/>\n      <stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/>\n    </linearGradient>\n    <radialGradient id=\"gGlow\" cx=\".5\" cy=\".5\" r=\".5\">\n      <stop offset=\"0\" stop-color=\"#ffe3a0\" stop-opacity=\".95\"/>\n      <stop offset=\".5\" stop-color=\"#d9a441\" stop-opacity=\".35\"/>\n      <stop offset=\"1\" stop-color=\"#d9a441\" stop-opacity=\"0\"/>\n    </radialGradient>\n    <radialGradient id=\"gBrass\" cx=\".38\" cy=\".32\" r=\".75\">\n      <stop offset=\"0\" stop-color=\"#f3dc98\"/>\n      <stop offset=\".45\" stop-color=\"#b98f3b\"/>\n      <stop offset=\"1\" stop-color=\"#4f3b12\"/>\n    </radialGradient>\n    <pattern id=\"pEnamel\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\">\n      <rect width=\"40\" height=\"40\" fill=\"#15110c\"/>\n      <circle cx=\"20\" cy=\"20\" r=\"9\" fill=\"none\" stroke=\"#d4af5a\" stroke-width=\"1.4\"/>\n      <circle cx=\"20\" cy=\"20\" r=\"3\" fill=\"#d4af5a\"/>\n      <path d=\"M20 8 q4 6 0 12 q-4 -6 0 -12 M20 32 q4 -6 0 -12 q-4 6 0 12 M8 20 q6 4 12 0 q-6 -4 -12 0 M32 20 q-6 4 -12 0 q6 -4 12 0\" fill=\"#7a2a24\" opacity=\".85\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"2.4\" fill=\"#d4af5a\"/><circle cx=\"40\" cy=\"0\" r=\"2.4\" fill=\"#d4af5a\"/>\n      <circle cx=\"0\" cy=\"40\" r=\"2.4\" fill=\"#d4af5a\"/><circle cx=\"40\" cy=\"40\" r=\"2.4\" fill=\"#d4af5a\"/>\n      <circle cx=\"20\" cy=\"0\" r=\"1.2\" fill=\"#2f5f5a\"/><circle cx=\"20\" cy=\"40\" r=\"1.2\" fill=\"#2f5f5a\"/>\n    </pattern>\n    <pattern id=\"pKhatam\" width=\"16\" height=\"16\" patternUnits=\"userSpaceOnUse\">\n      <rect width=\"16\" height=\"16\" fill=\"#2a2119\"/>\n      <polygon points=\"8,1 9.8,6.2 15,8 9.8,9.8 8,15 6.2,9.8 1,8 6.2,6.2\" fill=\"#d6b56a\"/>\n      <polygon points=\"8,4.5 9,7 11.5,8 9,9 8,11.5 7,9 4.5,8 7,7\" fill=\"#1a140e\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"1.6\" fill=\"#efe2c2\"/><circle cx=\"16\" cy=\"0\" r=\"1.6\" fill=\"#efe2c2\"/>\n      <circle cx=\"0\" cy=\"16\" r=\"1.6\" fill=\"#efe2c2\"/><circle cx=\"16\" cy=\"16\" r=\"1.6\" fill=\"#efe2c2\"/>\n    </pattern>\n    <pattern id=\"pWeave\" width=\"14\" height=\"14\" patternUnits=\"userSpaceOnUse\">\n      <rect width=\"14\" height=\"14\" fill=\"#5a1f1b\"/>\n      <path d=\"M7 1 L13 7 L7 13 L1 7 Z\" fill=\"none\" stroke=\"#c9a24a\" stroke-width=\"1\"/>\n      <circle cx=\"7\" cy=\"7\" r=\"1.4\" fill=\"#e8d6a8\"/>\n    </pattern>\n    <clipPath id=\"cVase\">\n      <path d=\"M86 22 h28 v6 c0 10 -6 14 -6 24 c0 14 46 34 46 86 c0 40 -28 62 -36 70 h12 v12 h-60 v-12 h12 c-8 -8 -36 -30 -36 -70 c0 -52 46 -72 46 -86 c0 -10 -6 -14 -6 -24 z\"/>\n    </clipPath>\n    <clipPath id=\"cTray\"><circle cx=\"100\" cy=\"120\" r=\"88\"/></clipPath>\n  </defs>\n</svg>";

  // One drawing per product "key" in products.js.
  var PIECES = {
    "vase": "<svg viewBox=\"0 0 200 240\" class=\"art art-vase\">\n            <ellipse cx=\"100\" cy=\"226\" rx=\"56\" ry=\"6\" fill=\"#000\" opacity=\".5\"/>\n            <g clip-path=\"url(#cVase)\">\n              <g class=\"spin\"><rect x=\"40\" y=\"0\" width=\"170\" height=\"240\" fill=\"url(#pEnamel)\"/></g>\n              <rect x=\"40\" y=\"56\" width=\"120\" height=\"5\" fill=\"url(#gGoldV)\"/>\n              <rect x=\"40\" y=\"96\" width=\"120\" height=\"3\" fill=\"url(#gGoldV)\"/>\n              <rect x=\"40\" y=\"182\" width=\"120\" height=\"4\" fill=\"url(#gGoldV)\"/>\n              <rect x=\"40\" y=\"0\" width=\"120\" height=\"240\" fill=\"url(#gCylinder)\"/>\n              <rect class=\"sheen\" x=\"-60\" y=\"0\" width=\"50\" height=\"240\" fill=\"url(#gSheen)\"/>\n            </g>\n            <path d=\"M86 22 h28 v6 c0 10 -6 14 -6 24 c0 14 46 34 46 86 c0 40 -28 62 -36 70 h12 v12 h-60 v-12 h12 c-8 -8 -36 -30 -36 -70 c0 -52 46 -72 46 -86 c0 -10 -6 -14 -6 -24 z\" fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"2\"/>\n            <rect x=\"82\" y=\"16\" width=\"36\" height=\"7\" rx=\"2\" fill=\"url(#gGold)\"/>\n          </svg>",
    "box": "<svg viewBox=\"0 0 200 240\" class=\"art art-box\">\n            <ellipse cx=\"100\" cy=\"206\" rx=\"72\" ry=\"7\" fill=\"#000\" opacity=\".5\"/>\n            <g class=\"box-glow\"><ellipse cx=\"100\" cy=\"112\" rx=\"58\" ry=\"22\" fill=\"url(#gGlow)\"/></g>\n            <rect x=\"38\" y=\"120\" width=\"124\" height=\"80\" fill=\"url(#pKhatam)\"/>\n            <rect x=\"38\" y=\"120\" width=\"124\" height=\"80\" fill=\"url(#gCylinder)\" opacity=\".55\"/>\n            <rect x=\"38\" y=\"120\" width=\"124\" height=\"80\" fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"2.5\"/>\n            <rect x=\"92\" y=\"130\" width=\"16\" height=\"20\" rx=\"3\" fill=\"url(#gGold)\"/>\n            <circle cx=\"100\" cy=\"140\" r=\"2.4\" fill=\"#1a140e\"/>\n            <g class=\"lid\">\n              <polygon points=\"34,120 166,120 156,98 44,98\" fill=\"url(#pKhatam)\"/>\n              <polygon points=\"34,120 166,120 156,98 44,98\" fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"2.5\"/>\n              <rect x=\"30\" y=\"118\" width=\"140\" height=\"6\" fill=\"url(#gGold)\"/>\n              <circle cx=\"100\" cy=\"94\" r=\"6\" fill=\"url(#gGold)\"/>\n            </g>\n            <rect x=\"36\" y=\"198\" width=\"128\" height=\"5\" fill=\"url(#gGold)\"/>\n          </svg>",
    "tray": "<svg viewBox=\"0 0 200 240\" class=\"art art-tray\">\n            <ellipse cx=\"100\" cy=\"216\" rx=\"70\" ry=\"7\" fill=\"#000\" opacity=\".5\"/>\n            <circle cx=\"100\" cy=\"120\" r=\"90\" fill=\"url(#gBrass)\"/>\n            <g clip-path=\"url(#cTray)\">\n              <g class=\"tray-outer\"></g>\n              <circle cx=\"100\" cy=\"120\" r=\"62\" fill=\"none\" stroke=\"#3a2a0c\" stroke-width=\"1.2\"/>\n              <g class=\"tray-inner\"></g>\n              <circle cx=\"100\" cy=\"120\" r=\"34\" fill=\"none\" stroke=\"#3a2a0c\" stroke-width=\"1.2\"/>\n              <path d=\"M100 92 L108 112 L128 120 L108 128 L100 148 L92 128 L72 120 L92 112 Z\" fill=\"none\" stroke=\"#3a2a0c\" stroke-width=\"1.6\"/>\n              <circle cx=\"100\" cy=\"120\" r=\"5\" fill=\"#3a2a0c\"/>\n              <g class=\"tray-sheen\"><path d=\"M100 120 L100 20 A100 100 0 0 1 160 40 Z\" fill=\"#fff6d8\" opacity=\".22\"/></g>\n            </g>\n            <circle cx=\"100\" cy=\"120\" r=\"88\" fill=\"none\" stroke=\"#f5e2a6\" stroke-width=\"2\"/>\n          </svg>",
    "lantern": "<svg viewBox=\"0 0 200 240\" class=\"art art-lantern\">\n            <g class=\"swing\">\n              <line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"40\" stroke=\"url(#gGold)\" stroke-width=\"2\"/>\n              <circle cx=\"100\" cy=\"44\" r=\"5\" fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"2\"/>\n              <ellipse class=\"flame\" cx=\"100\" cy=\"132\" rx=\"58\" ry=\"64\" fill=\"url(#gGlow)\"/>\n              <path d=\"M84 52 h32 l10 22 h-52 z\" fill=\"url(#gGold)\"/>\n              <path d=\"M74 74 h52 c14 28 14 84 0 112 h-52 c-14 -28 -14 -84 0 -112 z\" fill=\"#1b1610\" stroke=\"url(#gGold)\" stroke-width=\"2.5\"/>\n              <g fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"1.4\" class=\"filigree\">\n                <path d=\"M100 82 c18 16 18 34 0 50 c-18 -16 -18 -34 0 -50 z\"/>\n                <path d=\"M100 132 c18 16 18 34 0 48 c-18 -14 -18 -32 0 -48 z\"/>\n                <path d=\"M78 96 c10 8 10 18 0 26 M122 96 c-10 8 -10 18 0 26 M78 142 c10 8 10 18 0 26 M122 142 c-10 8 -10 18 0 26\"/>\n                <circle cx=\"100\" cy=\"132\" r=\"6\"/>\n              </g>\n              <ellipse class=\"flame-core\" cx=\"100\" cy=\"132\" rx=\"5\" ry=\"9\" fill=\"#ffe7a8\"/>\n              <path d=\"M74 186 h52 l-8 14 h-36 z\" fill=\"url(#gGold)\"/>\n              <path d=\"M96 200 h8 l-4 16 z\" fill=\"url(#gGold)\"/>\n            </g>\n          </svg>",
    "mirror": "<svg viewBox=\"0 0 200 240\" class=\"art art-mirror\">\n            <ellipse cx=\"100\" cy=\"222\" rx=\"60\" ry=\"6\" fill=\"#000\" opacity=\".5\"/>\n            <circle cx=\"100\" cy=\"120\" r=\"92\" fill=\"#16130f\" stroke=\"url(#gGold)\" stroke-width=\"3\"/>\n            <g class=\"shards\"></g>\n            <circle cx=\"100\" cy=\"120\" r=\"92\" fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"1\" stroke-dasharray=\"1 5\"/>\n          </svg>",
    "carpet": "<svg viewBox=\"0 0 200 240\" class=\"art art-carpet\">\n            <defs>\n              <clipPath id=\"cWeave\"><rect class=\"weave-mask\" x=\"30\" y=\"30\" width=\"140\" height=\"180\"/></clipPath>\n            </defs>\n            <g stroke=\"#d8c7a0\" stroke-width=\"1\" opacity=\".7\">\n              <path d=\"M40 30 v-10 M50 30 v-10 M60 30 v-10 M70 30 v-10 M80 30 v-10 M90 30 v-10 M100 30 v-10 M110 30 v-10 M120 30 v-10 M130 30 v-10 M140 30 v-10 M150 30 v-10 M160 30 v-10\"/>\n              <path d=\"M40 210 v10 M50 210 v10 M60 210 v10 M70 210 v10 M80 210 v10 M90 210 v10 M100 210 v10 M110 210 v10 M120 210 v10 M130 210 v10 M140 210 v10 M150 210 v10 M160 210 v10\"/>\n            </g>\n            <rect x=\"30\" y=\"30\" width=\"140\" height=\"180\" fill=\"#231c15\" stroke=\"#4a3e2e\" stroke-width=\"1\"/>\n            <g clip-path=\"url(#cWeave)\">\n              <rect x=\"30\" y=\"30\" width=\"140\" height=\"180\" fill=\"#1a2430\"/>\n              <rect x=\"40\" y=\"40\" width=\"120\" height=\"160\" fill=\"url(#pWeave)\"/>\n              <rect x=\"40\" y=\"40\" width=\"120\" height=\"160\" fill=\"none\" stroke=\"url(#gGold)\" stroke-width=\"3\"/>\n              <path d=\"M100 70 L140 120 L100 170 L60 120 Z\" fill=\"#1a2430\" stroke=\"url(#gGold)\" stroke-width=\"2\"/>\n              <path d=\"M100 92 L118 120 L100 148 L82 120 Z\" fill=\"#c9a24a\"/>\n              <circle cx=\"100\" cy=\"120\" r=\"6\" fill=\"#5a1f1b\"/>\n              <path d=\"M40 40 l18 0 l-18 18 z M160 40 l-18 0 l18 18 z M40 200 l18 0 l-18 -18 z M160 200 l-18 0 l18 -18 z\" fill=\"#c9a24a\"/>\n            </g>\n            <line class=\"shuttle\" x1=\"26\" x2=\"174\" y1=\"30\" y2=\"30\" stroke=\"#f6e3a1\" stroke-width=\"2\"/>\n          </svg>"
};

  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  // Engraving on the brass tray and the mirror mosaic are generated.
  function buildTray(svg) {
    var outer = svg.querySelector(".tray-outer"), inner = svg.querySelector(".tray-inner"), ink = "#3a2a0c";
    if (!outer || outer.childNodes.length) return;
    for (var i = 0; i < 20; i++) {
      el("path", { d: "M100 34 C110 46 110 58 100 64 C90 58 90 46 100 34 Z", fill: "none", stroke: ink, "stroke-width": 1.3, transform: "rotate(" + i * 18 + " 100 120)" }, outer);
      el("circle", { cx: 100, cy: 40, r: 1.6, fill: ink, transform: "rotate(" + (i * 18 + 9) + " 100 120)" }, outer);
    }
    for (var j = 0; j < 12; j++) {
      el("path", { d: "M100 64 Q112 74 100 86 Q88 74 100 64", fill: "none", stroke: ink, "stroke-width": 1.2, transform: "rotate(" + j * 30 + " 100 120)" }, inner);
    }
  }
  function buildShards(svg) {
    var g = svg.querySelector(".shards");
    if (!g || g.childNodes.length) return;
    var fills = ["#efe9dc", "#c9a24a", "#9a9389", "#e6c97a", "#5b5650", "#d8d0bf"];
    var rings = [{ r0: 0, r1: 26, n: 8 }, { r0: 26, r1: 54, n: 16 }, { r0: 54, r1: 86, n: 24 }], idx = 0;
    rings.forEach(function (ring) {
      for (var i = 0; i < ring.n; i++) {
        var a0 = (i / ring.n) * Math.PI * 2, a1 = ((i + 1) / ring.n) * Math.PI * 2, am = (a0 + a1) / 2;
        var p = function (r, a) { return (100 + Math.cos(a) * r).toFixed(1) + "," + (120 + Math.sin(a) * r).toFixed(1); };
        var pts = ring.r0 === 0 ? [p(0, 0), p(ring.r1, a0), p(ring.r1, a1)]
          : [p(ring.r0, am), p(ring.r1, a0 + 0.02), p(ring.r1 + 4, am), p(ring.r1, a1 - 0.02)];
        var poly = el("polygon", { points: pts.join(" "), fill: fills[(idx * 7) % fills.length], stroke: "#16130f", "stroke-width": 1.2 }, g);
        poly.style.setProperty("--d", ((idx * 0.37) % 3.4).toFixed(2) + "s");
        idx++;
      }
    });
  }

  var uid = 0;
  // A fresh drawing for a key, with ids of its own so several copies can animate on one page.
  function make(key) {
    if (!PIECES[key]) return null;
    var tmp = document.createElement("div");
    tmp.innerHTML = PIECES[key];
    var svg = tmp.firstElementChild, tag = "-" + (++uid);
    Array.prototype.forEach.call(svg.querySelectorAll("[id]"), function (n) {
      var old = n.id;
      n.id = old + tag;
      Array.prototype.forEach.call(svg.querySelectorAll('[clip-path="url(#' + old + ')"]'), function (r) { r.setAttribute("clip-path", "url(#" + n.id + ")"); });
    });
    svg.setAttribute("aria-hidden", "true");
    buildTray(svg);
    buildShards(svg);
    return svg;
  }

  // Products from products.js, with a page slug and Google Drive photo links turned into direct image links.
  function products() {
    return (window.ARTRA_PRODUCTS || []).map(function (p, i) {
      p.slug = String(p.key || p.id || "piece-" + (i + 1)).toLowerCase().replace(/[^a-z0-9]+/g, "-");
      // drive.google.com/file/d/<id>/view or ...open?id=<id>; the file must be shared as "Anyone with the link".
      var drive = String(p.photo || "").match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]+)/);
      if (drive) p.photo = "https://lh3.googleusercontent.com/d/" + drive[1];
      p.url = "/royal/piece?p=" + encodeURIComponent(p.slug);
      return p;
    });
  }

  // Put the shared defs on the page and fill every [data-art] slot.
  function mount(root) {
    if (!document.getElementById("gGold")) document.body.insertAdjacentHTML("afterbegin", DEFS);
    Array.prototype.forEach.call((root || document).querySelectorAll("[data-art]"), function (slot) {
      var svg = make(slot.getAttribute("data-art"));
      if (svg) slot.parentNode.replaceChild(svg, slot);
    });
  }

  // Where enquiries and commission requests go (the site has no server, so links open the visitor's email app).
  var EMAIL = "sales@dmbtgroup.com";

  window.ARTRA_ART = { email: EMAIL, make: make, mount: mount, products: products, has: function (k) { return !!PIECES[k]; } };
})();
