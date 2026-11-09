// dmbtgroup.com: translates the page (English is in index.html, French and Arabic are here), plays the
// logo intro once per browser session, fades sections in on scroll and runs the phone menu.
// The language and whether to play the intro are decided by the small script in <head>.
(function () {
  var TEXT = {
    fr: {
      "meta.title": "DMBT — Génie industriel et opérations",
      skip: "Passer ›",
      "nav.services": "Services",
      "nav.approach": "Démarche",
      "nav.industries": "Secteurs",
      "nav.products": "Produits",
      "nav.contact": "Nous contacter",
      "hero.eyebrow": "Génie industriel et opérations",
      "hero.t1": "L'ingénierie d'opérations",
      "hero.t2": "efficaces.",
      "hero.t3": "",
      "hero.lead": "DMBT aide les industriels, les ateliers et les sites à mieux fonctionner. Nous mesurons la façon dont le travail circule réellement, repensons les processus et les implantations, et créons les outils numériques qui font durer les améliorations.",
      "hero.cta1": "Parlons de votre projet",
      "hero.cta2": "Nos services",
      "p.d.t": "Développement",
      "p.d.b": "Des processus, des implantations et des logiciels conçus autour de votre terrain.",
      "p.m.t": "Management",
      "p.m.b": "Une planification, des standards et des indicateurs réellement utilisés par les équipes.",
      "p.b.t": "Business",
      "p.b.b": "Chaque changement relié au coût, au délai et à la qualité.",
      "p.t.t": "Tact",
      "p.t.b": "Le changement mené avec les personnes qui font le travail.",
      "services.kicker": "Ce que nous faisons",
      "services.title": "Services de génie industriel",
      "s1.t": "Optimisation des processus",
      "s1.b": "Cartographie des flux de valeur, études de temps et méthodes lean pour éliminer gaspillages et goulots.",
      "s2.t": "Implantation et conception d'usine",
      "s2.b": "Implantations, flux matières et postes de travail pour des parcours plus courts et plus sûrs.",
      "s3.t": "Planification de la production",
      "s3.b": "Capacité, ordonnancement et politiques de stock alignés sur la demande réelle.",
      "s4.t": "Qualité et amélioration continue",
      "s4.b": "Analyse des causes racines, standards de travail et maîtrise statistique des procédés pour que les problèmes restent résolus.",
      "s5.t": "Chaîne logistique",
      "s5.b": "Organisation d'entrepôt, réapprovisionnement et flux de distribution.",
      "s6.t": "Outils numériques et données",
      "s6.b": "Tableaux de bord et logiciels sur mesure qui collectent les données utiles à vos décisions.",
      "approach.kicker": "Notre démarche",
      "approach.title": "Du terrain à des résultats durables",
      "a1.t": "Observer",
      "a1.b": "Nous allons sur le terrain, cartographions le flux et mesurons ce qui se passe vraiment.",
      "a2.t": "Analyser",
      "a2.b": "Les données et les causes racines montrent où se perdent temps, coûts et qualité.",
      "a3.t": "Concevoir",
      "a3.b": "Nous concevons le nouveau processus, l'implantation ou l'outil avec votre équipe.",
      "a4.t": "Déployer et pérenniser",
      "a4.b": "Nous déployons, formons les équipes et suivons les indicateurs pour que les gains durent.",
      "industries.kicker": "Nos secteurs",
      "industries.title": "Pour des opérations de toutes tailles",
      "i1.t": "Industrie manufacturière",
      "i1.b": "Assemblage, usinage et industries de procédés.",
      "i2.t": "Laboratoires et ateliers",
      "i2.b": "Laboratoires techniques, ateliers de réparation et de production.",
      "i3.t": "Entrepôts et logistique",
      "i3.b": "Stockage, préparation de commandes et centres de distribution.",
      "i4.t": "Bâtiments et copropriétés",
      "i4.b": "Exploitation des bâtiments, maintenance et gestion de copropriété.",
      "products.kicker": "Nos logiciels",
      "products.title": "Des outils que nous concevons et exploitons",
      tactlab: "La gestion de laboratoire et d'atelier pour votre équipe.",
      domora: "Une gestion plus intelligente pour votre copropriété.",
      "contact.title": "Étudions ensemble votre activité.",
      "contact.lead": "Parlez-nous de votre processus, de votre site ou de votre projet. Nous vous répondrons avec une première analyse et les prochaines étapes.",
      "contact.cta": "Écrivez-nous",
      "footer.tag": "Développement. Management. Business. Tact.",
      "footer.rights": "Tous droits réservés."
    },
    ar: {
      "meta.title": "DMBT — الهندسة الصناعية والعمليات",
      skip: "تخطي ‹",
      "nav.services": "الخدمات",
      "nav.approach": "منهجيتنا",
      "nav.industries": "القطاعات",
      "nav.products": "منتجاتنا",
      "nav.contact": "تواصل معنا",
      "hero.eyebrow": "الهندسة الصناعية والعمليات",
      "hero.t1": "هندسة عمليات",
      "hero.t2": "أكثر كفاءة.",
      "hero.t3": "",
      "hero.lead": "تساعد DMBT المصانع والورش والمنشآت على العمل بشكل أفضل. نقيس كيف يسير العمل فعليًا، ونعيد تصميم العمليات والمخططات، ونبني الأدوات الرقمية التي تحافظ على التحسينات.",
      "hero.cta1": "ناقش مشروعك معنا",
      "hero.cta2": "خدماتنا",
      "p.d.t": "التطوير",
      "p.d.b": "عمليات ومخططات وبرمجيات مصممة حول واقع موقع عملك.",
      "p.m.t": "الإدارة",
      "p.m.b": "تخطيط ومعايير ومؤشرات تستخدمها الفرق فعلًا.",
      "p.b.t": "الأعمال",
      "p.b.b": "كل تغيير مرتبط بالتكلفة ومدة التنفيذ والجودة.",
      "p.t.t": "اللباقة",
      "p.t.b": "تغيير يُنجز مع الأشخاص الذين يقومون بالعمل.",
      "services.kicker": "ما نقوم به",
      "services.title": "خدمات الهندسة الصناعية",
      "s1.t": "تحسين العمليات",
      "s1.b": "رسم خرائط تدفق القيمة ودراسات الوقت وأساليب الإنتاج الرشيق للتخلص من الهدر والاختناقات.",
      "s2.t": "تخطيط المصانع وتصميم المنشآت",
      "s2.b": "مخططات وتدفق للمواد وتصميم لمحطات العمل من أجل مسارات أقصر وأكثر أمانًا.",
      "s3.t": "تخطيط الإنتاج",
      "s3.b": "سعة وجدولة وسياسات مخزون تتوافق مع الطلب الفعلي.",
      "s4.t": "الجودة والتحسين المستمر",
      "s4.b": "تحليل الأسباب الجذرية والعمل القياسي والضبط الإحصائي للعمليات كي تبقى المشكلات محلولة.",
      "s5.t": "سلسلة الإمداد والخدمات اللوجستية",
      "s5.b": "تنظيم المستودعات وإعادة التموين وتدفقات التوزيع.",
      "s6.t": "الأدوات الرقمية والبيانات",
      "s6.b": "لوحات متابعة وبرمجيات مخصصة تجمع البيانات التي تحتاجها قراراتك.",
      "approach.kicker": "طريقة عملنا",
      "approach.title": "من موقع العمل إلى نتائج مستدامة",
      "a1.t": "الملاحظة",
      "a1.b": "ننزل إلى موقع العمل ونرسم التدفق ونقيس ما يحدث فعلًا.",
      "a2.t": "التحليل",
      "a2.b": "تكشف البيانات والأسباب الجذرية أين يُهدر الوقت والتكلفة والجودة.",
      "a3.t": "التصميم",
      "a3.b": "نصمم العملية أو المخطط أو الأداة الجديدة بالتعاون مع فريقك.",
      "a4.t": "التنفيذ والاستدامة",
      "a4.b": "نطبّق الحل وندرّب الفرق ونتابع المؤشرات لتدوم المكاسب.",
      "industries.kicker": "أين نعمل",
      "industries.title": "لعمليات بجميع الأحجام",
      "i1.t": "التصنيع",
      "i1.b": "التجميع والتشغيل الآلي والصناعات التحويلية.",
      "i2.t": "المختبرات والورش",
      "i2.b": "المختبرات التقنية وورش الإصلاح والإنتاج.",
      "i3.t": "المستودعات والخدمات اللوجستية",
      "i3.b": "التخزين وتجهيز الطلبات ومراكز التوزيع.",
      "i4.t": "المرافق والعقارات",
      "i4.b": "تشغيل المباني والصيانة وإدارة المباني السكنية.",
      "products.kicker": "برمجياتنا",
      "products.title": "أدوات نطورها ونشغّلها",
      tactlab: "إدارة المختبر والورشة لفريقك.",
      domora: "إدارة أذكى لمبناك السكني.",
      "contact.title": "لندرس عملياتك معًا.",
      "contact.lead": "أخبرنا عن عمليتك أو موقعك أو مشروعك، وسنرد عليك بتقييم أولي والخطوات التالية.",
      "contact.cta": "راسلنا",
      "footer.tag": "التطوير. الإدارة. الأعمال. اللباقة.",
      "footer.rights": "جميع الحقوق محفوظة."
    }
  };

  var root = document.documentElement;
  var lang = root.lang;

  // ---- Language ----
  if (TEXT[lang]) {
    var t = TEXT[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (k in t) el.textContent = t[k];
    });
    document.title = t["meta.title"];
  }
  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-lang");
      if (next === lang) return;
      document.cookie = "lang=" + next + "; path=/; max-age=31536000; samesite=lax";
      location.reload();
    });
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Intro: the big centred logo flies onto the header logo, then the page appears ----
  var intro = document.getElementById("intro");
  var introLogo = document.getElementById("introLogo");
  var brandLogo = document.getElementById("brandLogo");
  var finished = false;

  function showPage() {
    if (finished) return;
    finished = true;
    var played = root.classList.contains("play-intro");
    root.classList.remove("play-intro");
    if (played) root.classList.add("ready");
    intro.remove();
    introLogo.remove();
    watchSections();
  }

  function land() {
    if (finished) return;
    var from = introLogo.getBoundingClientRect();
    var to = brandLogo.getBoundingClientRect();
    // transform-origin is the top-left corner, so undo the -50%/-50% centring in pixels.
    introLogo.style.transition = "transform 1s cubic-bezier(0.7, 0, 0.2, 1)";
    introLogo.style.transform = "translate(" + (to.left - from.left - from.width / 2) + "px," +
      (to.top - from.top - from.height / 2) + "px) scale(" + to.width / from.width + ")";
    intro.classList.add("leaving");
    setTimeout(showPage, 1050);
  }

  if (root.classList.contains("play-intro")) {
    try { sessionStorage.setItem("dmbt-intro", "1"); } catch (e) {}
    setTimeout(land, 1900);
    document.getElementById("skip").addEventListener("click", showPage);
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") showPage(); });
  } else {
    showPage();
  }

  // ---- Sections fade in as they scroll into view ----
  function watchSections() {
    var els = document.querySelectorAll(".inview");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("seen"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("seen"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });
  }

  // ---- Phone menu ----
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  toggle.addEventListener("click", function () {
    toggle.setAttribute("aria-expanded", nav.classList.toggle("open") ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });
})();
