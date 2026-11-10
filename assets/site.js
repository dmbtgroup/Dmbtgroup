// dmbtgroup.com: translates the page (English is in index.html, French and Arabic are here), moves the DMBT
// logo between the middle of the first screen and the header as the page scrolls, plays the intro once per
// browser session, fades sections in on scroll and runs the phone menu.
// The language and whether to play the intro are decided by the small script in <head>.
(function () {
  var TEXT = {
    fr: {
      "meta.title": "DMBT — Génie industriel et opérations",
      skip: "Passer ›",
      cue: "Défiler",
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
      tacthr: "La gestion des ressources humaines et de la paie pour votre entreprise.",
      "nav.experts": "Experts",
      "experts.kicker": "Nos experts",
      "experts.title": "Les personnes derrière le travail",
      "e1.name": "Dr Hadi Shirouyehzad",
      "e1.role": "Professeur associé en génie industriel",
      "e1.org": "Université islamique Azad, campus de Najafabad · Ispahan, Iran",
      "e.cv": "Voir le CV",
      "e.back": "Retour aux experts",
      "meta.experts": "Nos experts — DMBT",
      "experts.lead": "Ingénieurs industriels, chercheurs et consultants qui accompagnent les projets de DMBT, du terrain jusqu'aux résultats.",
      "e1.bio": "Enseignant-chercheur en génie industriel depuis 2001 et responsable du programme de master et doctorat du département, il a aussi occupé des fonctions de direction dans l'industrie, en planification et technologie, en génie industriel et en amélioration de la productivité. Il conseille les entreprises en planification stratégique, structure organisationnelle, gestion des processus et productivité, et a été rédacteur en chef de l'International Journal of Applied Research on Industrial Engineering (2014–2019).",
      "e1.f1": "ans d'expérience en industrie et en enseignement",
      "e1.f2": "articles scientifiques",
      "e1.f3": "ouvrages écrits ou traduits",
      "e1.f4": "missions de conseil",
      "e.expertise": "Domaines d'expertise",
      "e.education": "Formation",
      "e1.x1": "Planification stratégique",
      "e1.x2": "Amélioration de la productivité et étude du travail",
      "e1.x3": "Planification de la production et gestion des opérations",
      "e1.x4": "Gestion et contrôle de la qualité",
      "e1.x5": "Gestion d'entrepôt et contrôle des stocks",
      "e1.x6": "Aide à la décision multicritère",
      "e1.x7": "Analyse d'enveloppement des données (DEA)",
      "e1.x8": "Recherche opérationnelle",
      "e1.x9": "Implantation des unités industrielles",
      "e1.x10": "Structure organisationnelle et excellence",
      "e1.x11": "Évaluation de la performance",
      "e1.x12": "Gestion et pilotage de projet",
      "e1.d1": "Doctorat en génie industriel",
      "e1.d1u": "Université islamique Azad, campus Sciences et Recherche, Téhéran",
      "e1.d2": "Master en génie industriel",
      "e1.d2u": "Université islamique Azad, campus de Najafabad",
      "e1.d3": "Licence en génie industriel (production industrielle)",
      "e1.d3u": "Université islamique Azad, campus de Najafabad",
      "e2.name": "Dr Reza Dabestani",
      "e2.role": "Professeur adjoint, Centre de marketing et de gestion de la chaîne logistique",
      "e2.org": "Nyenrode Business University · Pays-Bas",
      "e2.bio": "Professeur adjoint à la Nyenrode Business University, il mène des recherches sur les modèles d'affaires fondés sur les données, l'innovation technologique et l'excellence opérationnelle, et enseigne les systèmes d'information et les technologies émergentes. Auparavant, il a passé sept ans dans l'industrie pharmaceutique : responsable du génie industriel et de la productivité chez Tolidaru Pharmaceutical, puis expert senior en développement de projets et investissement chez Alborz Investment Group, où il a piloté des programmes d'excellence (EFQM) et siégé aux conseils d'administration de deux laboratoires pharmaceutiques.",
      "e2.f1": "ans en entreprise et à l'université",
      "e2.f2": "ans dans l'industrie pharmaceutique",
      "e2.f3": "mandats d'administrateur",
      "e2.f4": "articles internationaux sélectionnés",
      "e2.x1": "Modèles d'affaires fondés sur les données",
      "e2.x2": "Innovation technologique",
      "e2.x3": "Excellence opérationnelle",
      "e2.x4": "Gestion de projet lean et agile",
      "e2.x5": "Excellence des organisations (EFQM)",
      "e2.x6": "Analyse d'enveloppement des données",
      "e2.x7": "Qualité de service",
      "e2.x8": "Aide à la décision multicritère",
      "e2.x9": "Productivité et étude du travail",
      "e2.x10": "Optimisation du portefeuille de produits",
      "e2.x11": "Analyse des systèmes et des méthodes",
      "e2.x12": "Gestion et pilotage de projet",
      "e2.d1": "Doctorat en gestion de la production et des opérations",
      "e2.d1u": "Université Tarbiat Modares, Téhéran",
      "e2.d2": "Master en management industriel (production)",
      "e2.d2u": "Université d'Ispahan",
      "e2.d3": "Diplôme d'ingénieur en génie industriel (production industrielle)",
      "e2.d3u": "Université islamique Azad, campus de Najafabad",
      "industries.cta": "Parlez-nous de votre activité",
      "prod.visit": "Découvrir",
      "tactlab.for": "Pour les laboratoires d'essais et les ateliers d'usinage",
      "tactlab.f1": "Offres de service avec estimation des coûts, envoyées en PDF et transformées en commandes en un clic",
      "tactlab.f2": "Ordres de travail avec gammes et étapes, et un code-barres pour chaque pièce",
      "tactlab.f3": "Temps d'atelier par lecture de code-barres, chronomètre ou saisie rapide, avec validation du responsable",
      "tactlab.f4": "Rapports par employé, travail et étape, avec export CSV pour la paie et la facturation",
      "domora.for": "Pour les conseils de copropriété, les copropriétaires et les résidents",
      "domora.f1": "Charges de copropriété, cotisations spéciales et paiements pour chaque lot",
      "domora.f2": "Demandes de réparation, projets budgétés et travaux récurrents avec rappels",
      "domora.f3": "Votes des copropriétaires en ligne, pondérés selon la quote-part de chaque lot",
      "domora.f4": "Documents, attestations d'assurance et avis, en anglais et en français",
      "tacthr.for": "Pour les entreprises qui veulent une rémunération juste et transparente",
      "tacthr.f1": "Évaluations de la performance du personnel deux fois par an, avec des indicateurs pondérés",
      "tacthr.f2": "Salaires et primes fixés selon la formation, l'expérience, les compétences, la pénibilité, la classe d'emploi et la performance",
      "tacthr.f3": "Chaque entreprise dispose de son propre espace, accessible par son nom ou son adresse",
      "contact.sales": "Ventes",
      "contact.phone": "Téléphone",
      "form.title": "Réservez un premier échange",
      "form.name": "Nom",
      "form.company": "Entreprise",
      "form.country": "Pays",
      "form.problem": "Que souhaitez-vous améliorer ?",
      "form.send": "Envoyer la demande",
      "form.note": "Votre messagerie s'ouvre avec votre demande prête à être envoyée à sales@dmbtgroup.com.",
      "form.subject": "Demande de premier échange",
      "footer.explore": "Explorer",
      "footer.contact": "Contact",
      "footer.support": "Assistance",
      "contact.lead": "Parlez-nous de votre processus, de votre site ou de votre projet. Nous vous répondrons avec une première analyse et les prochaines étapes.",
      "e3.name": "Dr Mostafa Badakhshian",
      "e3.role": "Ingénieur industriel, conception d'ERP",
      "e3.org": "Invera · Montréal, Canada",
      "e3.bio": "Ingénieur industriel titulaire d'un doctorat de l'Université Concordia, il conçoit des systèmes ERP chez Invera à Montréal (planification de la production, ordonnancement des travaux et planification des transports), après avoir déployé des systèmes ERP et MRP dans la sidérurgie. Ses recherches avec R et D pour la défense Canada et MDA portaient sur des réseaux logistiques qui continuent de fonctionner en cas de perturbation : localisation fiable des installations, tournées et plus courts chemins. Auparavant, il a planifié les transports publics pour la municipalité d'Ispahan, a été consultant chez DMBT et a travaillé dans le conseil en génie industriel et l'assurance qualité automobile.",
      "e3.f1": "ans en entreprise, en recherche et en enseignement",
      "e3.f2": "ans de conception et de déploiement d'ERP",
      "e3.f3": "articles de revues",
      "e3.f4": "communications en conférence",
      "e3.x1": "Conception et déploiement d'ERP",
      "e3.x2": "Planification de la production et ordonnancement",
      "e3.x3": "Conception de réseaux logistiques",
      "e3.x4": "Localisation et tournées en cas de perturbation",
      "e3.x5": "Planification des transports",
      "e3.x6": "Recherche opérationnelle et optimisation",
      "e3.x7": "Gestion des stocks et MRP",
      "e3.x8": "Gestion de la chaîne logistique",
      "e3.x9": "Assurance qualité et normes ISO",
      "e3.x10": "AMDEC et maîtrise statistique des procédés",
      "e3.x11": "Algorithmes génétiques et logique floue",
      "e3.x12": "Gestion de la maintenance assistée par ordinateur (GMAO)",
      "e3.d1": "Doctorat en génie industriel",
      "e3.d1u": "Université Concordia, Montréal, Canada",
      "e3.d2": "Master en génie industriel et des systèmes",
      "e3.d2u": "Université Putra Malaysia",
      "e3.d3": "Licence en génie industriel",
      "e3.d3u": "Université islamique Azad, campus de Najafabad",
      "e3.f5": "articles de revues et communications",
      "e2.link": "Profil sur le site de Nyenrode",
      "contact.title": "Étudions ensemble votre activité.",
      "footer.tag": "Développement. Management. Business. Tact.",
      "footer.rights": "Tous droits réservés."
    },
    ar: {
      "meta.title": "DMBT — الهندسة الصناعية والعمليات",
      skip: "تخطي ‹",
      cue: "مرّر للأسفل",
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
      tacthr: "إدارة الموارد البشرية والرواتب لشركتك.",
      "nav.experts": "خبراؤنا",
      "experts.kicker": "خبراؤنا",
      "experts.title": "الأشخاص وراء العمل",
      "e1.name": "د. هادي شيرويه زاد",
      "e1.role": "أستاذ مشارك في الهندسة الصناعية",
      "e1.org": "جامعة آزاد الإسلامية، فرع نجف آباد · أصفهان، إيران",
      "e.cv": "عرض السيرة الذاتية",
      "e.back": "العودة إلى الخبراء",
      "meta.experts": "خبراؤنا — DMBT",
      "experts.lead": "مهندسون صناعيون وباحثون ومستشارون يرافقون مشاريع DMBT من موقع العمل حتى النتائج.",
      "e1.bio": "عضو هيئة التدريس في الهندسة الصناعية منذ عام 2001 ومدير برنامج الدراسات العليا في القسم، وشغل أيضًا مناصب إدارية في الصناعة في مجالات التخطيط والتكنولوجيا والهندسة الصناعية وتحسين الإنتاجية. يقدّم الاستشارات للشركات في التخطيط الاستراتيجي والهيكل التنظيمي وإدارة العمليات والإنتاجية، وكان رئيس تحرير المجلة الدولية للبحوث التطبيقية في الهندسة الصناعية (2014–2019).",
      "e1.f1": "عامًا من الخبرة في الصناعة والتدريس",
      "e1.f2": "بحثًا علميًا",
      "e1.f3": "كتب تأليفًا أو ترجمةً",
      "e1.f4": "مشروعًا استشاريًا",
      "e.expertise": "مجالات الخبرة",
      "e.education": "التعليم",
      "e1.x1": "التخطيط الاستراتيجي",
      "e1.x2": "تحسين الإنتاجية ودراسة العمل",
      "e1.x3": "تخطيط الإنتاج وإدارة العمليات",
      "e1.x4": "إدارة الجودة وضبطها",
      "e1.x5": "إدارة المستودعات وضبط المخزون",
      "e1.x6": "اتخاذ القرار متعدد المعايير",
      "e1.x7": "تحليل مغلف البيانات",
      "e1.x8": "بحوث العمليات",
      "e1.x9": "تخطيط المنشآت الصناعية",
      "e1.x10": "الهيكل التنظيمي والتميز المؤسسي",
      "e1.x11": "تقييم الأداء",
      "e1.x12": "إدارة المشاريع ومراقبتها",
      "e1.d1": "دكتوراه في الهندسة الصناعية",
      "e1.d1u": "جامعة آزاد الإسلامية، فرع العلوم والبحوث، طهران",
      "e1.d2": "ماجستير في الهندسة الصناعية",
      "e1.d2u": "جامعة آزاد الإسلامية، فرع نجف آباد",
      "e1.d3": "بكالوريوس في الهندسة الصناعية (الإنتاج الصناعي)",
      "e1.d3u": "جامعة آزاد الإسلامية، فرع نجف آباد",
      "e2.name": "د. رضا دبستاني",
      "e2.role": "أستاذ مساعد، مركز التسويق وإدارة سلسلة الإمداد",
      "e2.org": "جامعة نيينرود للأعمال · هولندا",
      "e2.bio": "أستاذ مساعد في جامعة نيينرود للأعمال، يبحث في نماذج الأعمال القائمة على البيانات والابتكار التكنولوجي والتميز التشغيلي، ويدرّس نظم المعلومات والتقنيات الناشئة. وقبل ذلك أمضى سبع سنوات في الصناعة الدوائية: مديرًا للهندسة الصناعية والإنتاجية في شركة توليدارو للأدوية، وخبيرًا أول في تطوير المشاريع والاستثمار في مجموعة البرز الاستثمارية، حيث قاد برامج التميز المؤسسي (EFQM) وشغل عضوية مجلسي إدارة شركتين دوائيتين.",
      "e2.f1": "عامًا في الصناعة والجامعة",
      "e2.f2": "سنوات في الصناعة الدوائية",
      "e2.f3": "عضوية في مجالس إدارة الشركات",
      "e2.f4": "أبحاث دولية مختارة",
      "e2.x1": "نماذج الأعمال القائمة على البيانات",
      "e2.x2": "الابتكار التكنولوجي",
      "e2.x3": "التميز التشغيلي",
      "e2.x4": "إدارة المشاريع الرشيقة والمرنة",
      "e2.x5": "التميز المؤسسي (EFQM)",
      "e2.x6": "تحليل مغلف البيانات",
      "e2.x7": "جودة الخدمة",
      "e2.x8": "اتخاذ القرار متعدد المعايير",
      "e2.x9": "الإنتاجية ودراسة العمل",
      "e2.x10": "تحسين محفظة المنتجات",
      "e2.x11": "تحليل النظم والأساليب",
      "e2.x12": "إدارة المشاريع ومراقبتها",
      "e2.d1": "دكتوراه في إدارة الإنتاج والعمليات",
      "e2.d1u": "جامعة تربيت مدرس، طهران",
      "e2.d2": "ماجستير في الإدارة الصناعية (الإنتاج)",
      "e2.d2u": "جامعة أصفهان",
      "e2.d3": "بكالوريوس الهندسة الصناعية (الإنتاج الصناعي)",
      "e2.d3u": "جامعة آزاد الإسلامية، فرع نجف آباد",
      "industries.cta": "أخبرنا عن عملياتك",
      "prod.visit": "زيارة",
      "tactlab.for": "لمختبرات الاختبار وورش التشغيل",
      "tactlab.f1": "عروض خدمات مع تقدير التكلفة، تُرسل بصيغة PDF وتتحول إلى طلبات بنقرة واحدة",
      "tactlab.f2": "أوامر عمل بمسارات وخطوات، ورمز شريطي لكل قطعة",
      "tactlab.f3": "تسجيل وقت العمل بمسح الرمز الشريطي أو المؤقت أو الإدخال السريع، مع موافقة المدير",
      "tactlab.f4": "تقارير حسب الموظف والعمل والخطوة، مع تصدير CSV للرواتب والفوترة",
      "domora.for": "لمجالس إدارة المباني السكنية والمالكين والسكان",
      "domora.f1": "رسوم الملكية المشتركة والمساهمات الخاصة والمدفوعات لكل وحدة",
      "domora.f2": "طلبات الإصلاح والمشاريع بميزانياتها والأعمال الدورية مع التذكيرات",
      "domora.f3": "تصويت المالكين عبر الإنترنت، مرجّح بحصة كل وحدة",
      "domora.f4": "المستندات وشهادات التأمين والإشعارات، بالإنجليزية والفرنسية",
      "tacthr.for": "للشركات التي تريد أجورًا عادلة وشفافة",
      "tacthr.f1": "تقييم أداء الموظفين مرتين في السنة بمؤشرات مرجّحة",
      "tacthr.f2": "تحديد الرواتب والمكافآت بناءً على التعليم والخبرة والمهارة وصعوبة العمل والدرجة الوظيفية والأداء",
      "tacthr.f3": "لكل شركة مساحتها الخاصة، يُوصل إليها باسمها أو عنوانها",
      "contact.sales": "المبيعات",
      "contact.phone": "الهاتف",
      "form.title": "احجز مكالمة تعارف",
      "form.name": "الاسم",
      "form.company": "الشركة",
      "form.country": "البلد",
      "form.problem": "ما الذي تودّ تحسينه؟",
      "form.send": "إرسال الطلب",
      "form.note": "سيفتح تطبيق البريد لديك وفيه طلبك جاهزًا للإرسال إلى sales@dmbtgroup.com.",
      "form.subject": "طلب مكالمة تعارف",
      "footer.explore": "استكشف",
      "footer.contact": "تواصل",
      "footer.support": "الدعم",
      "contact.lead": "أخبرنا عن عمليتك أو موقعك أو مشروعك، وسنرد عليك بتقييم أولي والخطوات التالية.",
      "e3.name": "د. مصطفى بدخشيان",
      "e3.role": "مهندس صناعي، تصميم أنظمة ERP",
      "e3.org": "Invera · مونتريال، كندا",
      "e3.bio": "مهندس صناعي حاصل على الدكتوراه من جامعة كونكورديا، يصمّم أنظمة ERP في شركة Invera في مونتريال، في مجالات تخطيط الإنتاج وجدولة الأعمال وتخطيط النقل، بعد أن طبّق أنظمة ERP وMRP في صناعة الصلب. تركّزت أبحاثه مع هيئة البحث والتطوير الدفاعي الكندية وشركة MDA على شبكات لوجستية تبقى عاملة عند حدوث الاضطرابات: تحديد مواقع المنشآت الموثوقة، وتخطيط المسارات، وأقصر الطرق. وقبل ذلك خطّط للنقل العام في بلدية أصفهان، وعمل مستشارًا في DMBT، وفي الاستشارات الهندسية الصناعية وضمان الجودة في صناعة السيارات.",
      "e3.f1": "عامًا في الصناعة والبحث والتدريس",
      "e3.f2": "سنوات في تصميم أنظمة ERP وتطبيقها",
      "e3.f3": "بحثًا في مجلات علمية",
      "e3.f4": "بحثًا في مؤتمرات",
      "e3.x1": "تصميم أنظمة ERP وتطبيقها",
      "e3.x2": "تخطيط الإنتاج وجدولة الأعمال",
      "e3.x3": "تصميم الشبكات اللوجستية",
      "e3.x4": "تحديد المواقع والمسارات في ظل الاضطرابات",
      "e3.x5": "تخطيط النقل",
      "e3.x6": "بحوث العمليات والتحسين",
      "e3.x7": "إدارة المخزون وتخطيط الاحتياجات (MRP)",
      "e3.x8": "إدارة سلسلة الإمداد",
      "e3.x9": "ضمان الجودة ومعايير ISO",
      "e3.x10": "تحليل أنماط الفشل والضبط الإحصائي للعمليات",
      "e3.x11": "الخوارزميات الجينية والمنطق الضبابي",
      "e3.x12": "أنظمة إدارة الصيانة المحوسبة (CMMS)",
      "e3.d1": "دكتوراه في الهندسة الصناعية",
      "e3.d1u": "جامعة كونكورديا، مونتريال، كندا",
      "e3.d2": "ماجستير في الهندسة الصناعية وهندسة النظم",
      "e3.d2u": "جامعة بوترا الماليزية",
      "e3.d3": "بكالوريوس في الهندسة الصناعية",
      "e3.d3u": "جامعة آزاد الإسلامية، فرع نجف آباد",
      "e3.f5": "بحثًا في المجلات والمؤتمرات",
      "e2.link": "صفحته في جامعة نيينرود",
      "contact.title": "لندرس عملياتك معًا.",
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
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (k in t) el.alt = t[k];
    });
    document.title = t[root.getAttribute("data-title") || "meta.title"];
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

  // ---- The logo: in the middle of the first screen at the top, in the header corner once scrolled ----
  // Only the home page has the logo screen; other pages just show the header logo.
  var stage = document.getElementById("stage");
  var header = document.querySelector(".site-header");
  var logo = document.getElementById("floatLogo");
  var slot = document.getElementById("brandLogo");
  var geo = null;
  if (stage && logo) homeLogo(); else watchSections();

  function homeLogo() {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  // Where the logo sits at both ends, and how far the page scrolls between them.
  function measure() {
    var w = logo.offsetWidth, h = logo.offsetHeight;
    var y0 = scrollY;
    var s = stage.getBoundingClientRect();
    var to = slot.getBoundingClientRect();
    geo = {
      x0: s.left + s.width / 2 - w / 2,
      y0: s.top + y0 + s.height / 2 - h / 2,       // page coordinates; the page is at the top when it applies
      x1: to.left,
      y1: to.top,                                   // the header is sticky, so this spot does not move
      s1: to.width / w,
      end: Math.max(1, s.top + y0 + s.height - header.offsetHeight)
    };
    place();
  }

  function place() {
    if (!geo) return;
    var p = Math.min(1, Math.max(0, scrollY / geo.end));
    var e = p * p * (3 - 2 * p);                    // ease in and out
    var x = geo.x0 + (geo.x1 - geo.x0) * e;
    var y = geo.y0 + (geo.y1 - geo.y0) * e;
    var k = 1 + (geo.s1 - 1) * e;
    logo.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) scale(" + k.toFixed(4) + ")";
    root.style.setProperty("--p", p.toFixed(3));
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; place(); });
  }, { passive: true });
  window.addEventListener("resize", measure);
  window.addEventListener("load", measure);
  measure();

  // Scroll the page to `top` over `ms` milliseconds, then call `done`.
  var scrollAnim = null;
  function glideTo(top, ms, done) {
    var from = scrollY, t0 = performance.now();
    root.style.scrollBehavior = "auto";
    function step(now) {
      var t = Math.min(1, (now - t0) / ms);
      var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, from + (top - from) * e);
      if (t < 1) scrollAnim = requestAnimationFrame(step);
      else { scrollAnim = null; root.style.scrollBehavior = ""; if (done) done(); }
    }
    scrollAnim = requestAnimationFrame(step);
  }

  document.getElementById("cue").addEventListener("click", function () { glideTo(geo.end, 900); });
  // The header logo takes the page back to the top, where the logo returns to the middle.
  document.querySelector(".brand").addEventListener("click", function (e) {
    e.preventDefault();
    glideTo(0, Math.min(1400, 500 + scrollY / 6));
  });

  var finished = false;
  function showPage() {
    if (finished) return;
    finished = true;
    if (scrollAnim) { cancelAnimationFrame(scrollAnim); scrollAnim = null; root.style.scrollBehavior = ""; }
    if (root.classList.contains("play-intro")) {
      root.classList.add("ready");
      root.classList.remove("play-intro");
      if (scrollY < geo.end) window.scrollTo(0, geo.end);
    }
    watchSections();
  }

  if (root.classList.contains("play-intro")) {
    // First visit in this session: the logo appears in the middle, then the page scrolls down by itself
    // and the logo travels into the header corner.
    try { sessionStorage.setItem("dmbt-intro", "1"); } catch (e) {}
    window.scrollTo(0, 0);
    place();
    setTimeout(function () {
      if (finished) return;
      root.classList.add("ready");
      glideTo(geo.end, 1200, showPage);
    }, 1500);
    document.getElementById("skip").addEventListener("click", showPage);
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") showPage(); });
  } else {
    // Later visits open straight on the content; scrolling back to the top brings the logo to the middle.
    // Done again once the page has loaded, because a reload can put the page back at the top afterwards.
    var touched = false;
    ["wheel", "touchstart", "keydown", "pointerdown"].forEach(function (ev) {
      window.addEventListener(ev, function () { touched = true; }, { once: true, passive: true });
    });
    var toContent = function () {
      if (location.hash || touched || scrollY > 1) return;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, geo.end);
      root.style.scrollBehavior = "";
      place();
    };
    toContent();
    window.addEventListener("load", function () { setTimeout(toContent, 0); });
    showPage();
  }
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

  // ---- Experts: building an expert's full CV from assets/cv.js ----
  var LI = { en: 0, fr: 1, ar: 2 }[lang] || 0;
  var PRESENT = ["present", "aujourd'hui", "حتى الآن"];
  function tx(v) { return v == null ? "" : typeof v === "string" ? v : v[LI]; }
  function node(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function years(s) {
    // In Arabic, "2001–present" reads as "منذ 2001" (since 2001).
    var ongoing = /–present$/.test(s);
    var n = node("span", "yr", LI === 2 && ongoing ? "منذ " + s.replace("–present", "") : s.replace("present", PRESENT[LI]));
    n.dir = LI === 2 && ongoing ? "rtl" : "ltr";
    return n;
  }
  function renderCV(sections, box) {
    sections.forEach(function (sec) {
      var wrap = node("section", "cv-sec cv-" + sec.type);
      wrap.appendChild(node("h4", null, tx(sec.title)));
      if (sec.intro) wrap.appendChild(node("p", "cv-intro", tx(sec.intro)));
      if (sec.type === "chips") {
        sec.groups.forEach(function (g) {
          if (g.title) wrap.appendChild(node("h5", null, tx(g.title)));
          var ul = node("ul", "chips");
          g.items.forEach(function (c) { ul.appendChild(node("li", null, tx(c))); });
          wrap.appendChild(ul);
        });
      } else {
        var ul = node("ul", sec.type === "list" ? "cv-list" : "cv-tl");
        sec.items.forEach(function (it) {
          var li = node("li");
          if (sec.type === "list") { li.textContent = tx(it); ul.appendChild(li); return; }
          var body = node("div");
          var main = sec.type === "books" ? it[1] : (it[1] || it[2]);
          var sub = sec.type === "books" ? it[2] : (it[1] ? it[2] : null);
          body.appendChild(node("strong", null, tx(main)));
          if (sub) body.appendChild(node("span", null, tx(sub)));
          li.appendChild(body);
          if (it[0]) li.appendChild(years(it[0]));
          ul.appendChild(li);
        });
        wrap.appendChild(ul);
      }
      if (sec.links) {
        var row = node("div", "cv-links");
        sec.links.forEach(function (l) {
          var a = node("a", "btn btn-ghost btn-sm");
          a.href = l[1]; a.target = "_blank"; a.rel = "noopener";
          a.appendChild(node("span", null, tx(l[0])));
          a.appendChild(document.createTextNode(" "));
          a.appendChild(node("span", "arrow", "→"));
          row.appendChild(a);
        });
        wrap.appendChild(row);
      }
      box.appendChild(wrap);
    });
  }
  // ---- Experts page: "View CV" opens the expert's profile and CV in an overlay with a back button ----
  // Each overlay is <div class="sheet" id="…">; its address is /experts#id, so it can be shared, and the
  // browser's back button, the overlay's back button and Esc all close it.
  var sheets = document.querySelectorAll(".sheet");
  var opener = null, pushed = false;
  function openSheet(sheet) {
    var box = sheet.querySelector(".cv[data-cv]");
    var data = box && window.DMBT_CV && window.DMBT_CV[box.getAttribute("data-cv")];
    if (data && !box.childElementCount) renderCV(data, box);
    sheets.forEach(function (s) { if (s !== sheet) s.classList.remove("open"); });
    sheet.classList.add("open");
    sheet.scrollTop = 0;
    root.classList.add("sheet-open");
    var back = sheet.querySelector(".sheet-back");
    if (back) back.focus({ preventScroll: true });
  }
  function closeSheets() {
    sheets.forEach(function (s) { s.classList.remove("open"); });
    root.classList.remove("sheet-open");
    if (opener) { opener.focus({ preventScroll: true }); opener = null; }
  }
  function syncSheet() {
    var id = decodeURIComponent(location.hash.slice(1));
    var sheet = id && document.getElementById(id);
    if (sheet && sheet.classList.contains("sheet")) openSheet(sheet); else closeSheets();
  }
  if (sheets.length) {
    document.querySelectorAll("[data-sheet]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        opener = a;
        var id = a.getAttribute("data-sheet");
        if (location.hash !== "#" + id) { history.pushState(null, "", "#" + id); pushed = true; }
        syncSheet();
      });
    });
    document.querySelectorAll(".sheet-back").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        if (pushed) { pushed = false; history.back(); }
        else { history.replaceState(null, "", location.pathname + location.search); closeSheets(); }
      });
    });
    window.addEventListener("popstate", function () { pushed = false; syncSheet(); });
    window.addEventListener("hashchange", syncSheet);
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("sheet-open")) {
        var back = document.querySelector(".sheet.open .sheet-back");
        if (back) back.click();
      }
    });
    syncSheet();
  }

  // ---- Contact form: opens the visitor's email app with the request addressed to sales ----
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lines = [], name = form.elements.name.value.trim(), company = form.elements.company.value.trim();
      form.querySelectorAll("label").forEach(function (l) {
        var f = l.querySelector("input, textarea");
        var q = l.querySelector("span").textContent.trim();
        if (f && f.value.trim()) lines.push(/[?؟]$/.test(q) ? q + "\n" + f.value.trim() : q + ": " + f.value.trim());
      });
      var subject = (TEXT[lang] ? TEXT[lang]["form.subject"] : "Discovery call request") + " — " + (company || name);
      location.href = "mailto:sales@dmbtgroup.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n\n"));
    });
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
