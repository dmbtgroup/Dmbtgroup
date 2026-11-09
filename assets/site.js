// dmbtgroup.com: shows the page in the visitor's language (English, French or Arabic) and makes the
// spotlight follow the pointer while the logo tilts gently towards it.
(function () {
  var TEXT = {
    fr: {
      tactlab: "Découvrez {TactLab} · la gestion de laboratoire et d'atelier pour votre équipe",
      domora: "Découvrez {Domora} · une gestion plus intelligente pour votre copropriété"
    },
    ar: {
      tactlab: "اكتشف {TactLab} · إدارة المختبر والورشة لفريقك",
      domora: "اكتشف {Domora} · إدارة أذكى لمبناك السكني"
    }
  };

  function chooseLang() {
    var m = document.cookie.match(/(?:^|; )lang=(en|fr|ar)/);
    if (m) return m[1];
    var prefs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (code === "en" || code === "fr" || code === "ar") return code;
    }
    return "en";
  }

  var lang = chooseLang();
  if (TEXT[lang]) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var name = el.querySelector(".brand-product-name").textContent;
      var parts = TEXT[lang][el.getAttribute("data-i18n")].split("{" + name + "}");
      el.textContent = "";
      el.appendChild(document.createTextNode(parts[0]));
      var strong = document.createElement("strong");
      strong.className = "brand-product-name";
      strong.textContent = name;
      el.appendChild(strong);
      el.appendChild(document.createTextNode(parts[1] || ""));
    });
  }

  var stage = document.getElementById("stage");
  stage.addEventListener("pointermove", function (e) {
    var r = stage.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width;
    var y = (e.clientY - r.top) / r.height;
    stage.style.setProperty("--mx", x * 100 + "%");
    stage.style.setProperty("--my", y * 100 + "%");
    stage.style.setProperty("--rx", (0.5 - y) * 8 + "deg");
    stage.style.setProperty("--ry", (x - 0.5) * 10 + "deg");
  });
})();
