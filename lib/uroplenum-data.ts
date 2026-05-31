export type Lang = "en" | "ru" | "kz";
export type PageKey = "home" | "program" | "faculty" | "venue";

type LocalText = Record<Lang, string>;

export const langs: { id: Lang; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "ru", label: "RU", name: "Русский" },
  { id: "kz", label: "KZ", name: "Қазақша" }
];

export const nav: Record<Lang, Record<PageKey, string>> = {
  en: { home: "Home", program: "Program", faculty: "Faculty", venue: "Venue" },
  ru: { home: "Главная", program: "Программа", faculty: "Спикеры", venue: "Место" },
  kz: { home: "Басты бет", program: "Бағдарлама", faculty: "Спикерлер", venue: "Өтетін орны" }
};

export const pagePath: Record<PageKey, string> = {
  home: "/",
  program: "/program",
  faculty: "/faculty",
  venue: "/venue"
};

export const mapUrl = "https://2gis.kz/astana/firm/70000001033293245";

export const sponsorLogos = [
  { src: "/sponsors/sponsor-1.png", alt: "Astana Medical University" },
  { src: "/sponsors/sponsor-2.png", alt: "Astana Urologists and Andrologists Society" },
  { src: "/sponsors/sponsor-3.png", alt: "KAUA" }
];

export const copy = {
  en: {
    brand: "UROPLENUM 2026",
    congress: "Plenum of Urologists of Kazakhstan 2026",
    eyebrow: "Plenum of Urologists of Kazakhstan 2026",
    dateCity: "July 3, 2026 | Astana",
    site: "",
    subtitle:
      "A national scientific and educational meeting bringing together leading urologists, researchers, healthcare leaders and international faculty.",
    aboutEyebrow: "About the Plenum",
    aboutTitle: "A focused national platform for modern urology.",
    about:
      "The 2026 Plenum brings together healthcare leaders, clinical experts and young specialists for an intensive day of scientific sessions, professional dialogue and international exchange.",
    highlights: "Key Highlights",
    highlightsText: "Scientific updates, practical clinical exchange and a dedicated competition for young urologists.",
    scientificSessions: "Scientific Sessions",
    scientificText: "Endourology, uro-oncology, men's health, pediatric urology and case-based discussions.",
    collaboration: "Professional Collaboration",
    collaborationText: "A collegial forum for national societies, universities, hospitals and industry partners.",
    organizers: "Organizers / Partners",
    organizersText: "Official organizers and partners of the plenum.",
    contactTitle: "Planning to attend UROPLENUM 2026?",
    contactText: "Registration and participant information will be published by the organizing committee.",
    viewProgram: "View Program",
    meetFaculty: "Meet the Faculty",
    programTitle: "Scientific Program",
    programIntro: "",
    programNote: "Detailed schedule by hall, time, speaker and presentation topic.",
    dayOne: "July 3, 2026",
    dayTwo: "Program Tracks",
    facultyTitle: "Faculty and Invited Guests",
    facultyIntro: "Officials, Kazakhstan faculty, moderators and international experts participating in the plenum.",
    officialGuests: "Invited Officials",
    kazakhstanFaculty: "Kazakhstan Faculty",
    internationalFaculty: "International Faculty",
    moderators: "Moderators",
    venueTitle: "Congress-center QazExpoCongress",
    venueIntro: "Congress-center QazExpoCongress, Astana. Address: 12 Heydar Aliyev Street.",
    venueAbout: "About the Venue",
    venueAboutText:
      "QazExpoCongress is a multifunctional congress venue in Astana with a main hall, conference halls and an exhibition lobby for plenary sessions, parallel sections and professional networking.",
    gettingThere: "How to Get There",
    gettingThereText: "Located at 12 Heydar Aliyev Street, the venue is accessible by city transport, taxi and organized congress transfers.",
    accommodation: "Accommodation",
    accommodationText: "Recommended hotel options and congress rates can be added after partner hotels are confirmed.",
    map: "2GIS Map",
    contact: "Contact",
    email: "uroplenum2026@mail.ru",
    footerRights: "© 2026 UROPLENUM 2026. All rights reserved."
  },
  ru: {
    brand: "UROPLENUM 2026",
    congress: "Пленум урологов Казахстана 2026",
    eyebrow: "Пленум урологов Казахстана 2026",
    dateCity: "3 июля 2026 | Астана",
    site: "",
    subtitle:
      "Национальная научно-образовательная встреча, объединяющая ведущих урологов, исследователей, руководителей здравоохранения и международных экспертов.",
    aboutEyebrow: "О пленуме",
    aboutTitle: "Национальная площадка для современной урологии.",
    about:
      "Пленум 2026 объединяет представителей здравоохранения, клинических экспертов и молодых специалистов для насыщенного дня научных секций, профессионального диалога и международного обмена.",
    highlights: "Ключевые акценты",
    highlightsText: "Научные обновления, практический клинический обмен и отдельный конкурс молодых урологов.",
    scientificSessions: "Научные секции",
    scientificText: "Эндоурология, онкоурология, мужское здоровье, детская урология и клинические дискуссии.",
    collaboration: "Профессиональное сотрудничество",
    collaborationText: "Коллегиальная площадка для обществ, университетов, клиник и индустриальных партнеров.",
    organizers: "Организаторы / Партнеры",
    organizersText: "Официальные организаторы и партнеры пленума.",
    contactTitle: "Планируете участие в UROPLENUM 2026?",
    contactText: "Информация о регистрации и участии будет опубликована организационным комитетом.",
    viewProgram: "Смотреть программу",
    meetFaculty: "Спикеры",
    programTitle: "Научная программа",
    programIntro: "",
    programNote: "Подробное расписание по залам, времени, спикерам и темам докладов.",
    dayOne: "3 июля 2026",
    dayTwo: "Треки программы",
    facultyTitle: "Спикеры и приглашенные гости",
    facultyIntro: "Официальные гости, казахстанские эксперты, модераторы и международные спикеры пленума.",
    officialGuests: "Приглашенные официальные лица",
    kazakhstanFaculty: "Казахстанские спикеры",
    internationalFaculty: "Международные спикеры",
    moderators: "Модераторы",
    venueTitle: "Конгресс-центр QazExpoCongress",
    venueIntro: "Конгресс-центр QazExpoCongress, Астана. Адрес: ул. Гейдар Алиева 12.",
    venueAbout: "О площадке",
    venueAboutText:
      "QazExpoCongress — многофункциональная конгресс-площадка в Астане с главным залом, конференц-залами и выставочным фойе для пленарных заседаний, параллельных секций и профессионального нетворкинга.",
    gettingThere: "Как добраться",
    gettingThereText: "Площадка расположена по адресу ул. Гейдар Алиева 12 и доступна на городском транспорте, такси и организованных трансферах.",
    accommodation: "Проживание",
    accommodationText: "Рекомендованные отели и специальные условия можно добавить после подтверждения партнерских гостиниц.",
    map: "Карта 2GIS",
    contact: "Контакты",
    email: "uroplenum2026@mail.ru",
    footerRights: "© 2026 UROPLENUM 2026. Все права защищены."
  },
  kz: {
    brand: "UROPLENUM 2026",
    congress: "Қазақстан урологтарының пленумы 2026",
    eyebrow: "Қазақстан урологтарының пленумы 2026",
    dateCity: "2026 жылғы 3 шілде | Астана",
    site: "",
    subtitle:
      "Жетекші урологтарды, зерттеушілерді, денсаулық сақтау басшыларын және халықаралық сарапшыларды біріктіретін ұлттық ғылыми-білім беру кездесуі.",
    aboutEyebrow: "Пленум туралы",
    aboutTitle: "Заманауи урологияға арналған ұлттық алаң.",
    about:
      "2026 жылғы пленум денсаулық сақтау өкілдерін, клиникалық сарапшыларды және жас мамандарды ғылыми секциялар, кәсіби диалог және халықаралық тәжірибе алмасу үшін біріктіреді.",
    highlights: "Негізгі бағыттар",
    highlightsText: "Ғылыми жаңалықтар, практикалық клиникалық алмасу және жас урологтарға арналған арнайы конкурс.",
    scientificSessions: "Ғылыми секциялар",
    scientificText: "Эндоурология, онкоурология, ерлер денсаулығы, балалар урологиясы және клиникалық талқылаулар.",
    collaboration: "Кәсіби ынтымақтастық",
    collaborationText: "Қоғамдар, университеттер, клиникалар және индустриялық серіктестер үшін әріптестік алаңы.",
    organizers: "Ұйымдастырушылар / Серіктестер",
    organizersText: "Пленумның ресми ұйымдастырушылары мен серіктестері.",
    contactTitle: "UROPLENUM 2026 қатысуды жоспарлайсыз ба?",
    contactText: "Тіркеу және қатысу туралы ақпаратты ұйымдастыру комитеті жариялайды.",
    viewProgram: "Бағдарламаны көру",
    meetFaculty: "Спикерлер",
    programTitle: "Ғылыми бағдарлама",
    programIntro: "",
    programNote: "Залдар, уақыт, спикерлер және баяндама тақырыптары бойынша толық кесте.",
    dayOne: "2026 жылғы 3 шілде",
    dayTwo: "Бағдарлама тректері",
    facultyTitle: "Спикерлер және шақырылған қонақтар",
    facultyIntro: "Пленумға қатысатын ресми қонақтар, қазақстандық сарапшылар, модераторлар және халықаралық спикерлер.",
    officialGuests: "Шақырылған ресми тұлғалар",
    kazakhstanFaculty: "Қазақстандық спикерлер",
    internationalFaculty: "Халықаралық спикерлер",
    moderators: "Модераторлар",
    venueTitle: "QazExpoCongress конгресс-орталығы",
    venueIntro: "QazExpoCongress конгресс-орталығы, Астана. Мекенжайы: Гейдар Алиев көшесі, 12.",
    venueAbout: "Өтетін орын туралы",
    venueAboutText:
      "QazExpoCongress — Астанадағы көпфункционалды конгресс алаңы. Негізгі зал, конференц-залдар және көрме фойесі пленарлық отырыстарға, параллель секцияларға және кәсіби байланысқа қолайлы.",
    gettingThere: "Қалай жетуге болады",
    gettingThereText: "Өтетін орын Гейдар Алиев көшесі, 12 мекенжайында орналасқан, қалалық көлікпен, таксимен және ұйымдастырылған трансфермен жетуге болады.",
    accommodation: "Қонақ үй",
    accommodationText: "Ұсынылатын қонақ үйлер мен арнайы шарттарды серіктес қонақ үйлер бекітілгеннен кейін қосуға болады.",
    map: "2GIS картасы",
    contact: "Байланыс",
    email: "uroplenum2026@mail.ru",
    footerRights: "© 2026 UROPLENUM 2026. Барлық құқықтар қорғалған."
  }
} satisfies Record<Lang, Record<string, string>>;

export const venueImage =
  "https://visitastana.kz/upload/iblock/f50/wdwiqpzsboi0iac6ixw2m4sg6oa0z0j8.jpeg";

export const venueFacts: { value: string; label: LocalText }[] = [
  { value: "43,200 m²", label: { en: "Total area", ru: "Общая площадь", kz: "Жалпы аумағы" } },
  { value: "2,102", label: { en: "Main hall seats", ru: "Мест в главном зале", kz: "Негізгі зал орны" } },
  { value: "8", label: { en: "Conference halls", ru: "Конференц-залов", kz: "Конференц-зал" } },
  { value: "2,300 m²", label: { en: "Lobby area", ru: "Площадь фойе", kz: "Фойе аумағы" } }
];

export const overview: Record<Lang, string[][]> = {
  en: [
    ["08:00-09:00", "Registration", "Exhibition zone"],
    ["09:00-09:30", "Opening Ceremony", "Aspan Hall"],
    ["09:30-13:15", "Endourology / Uro-oncology", "Aspan & Caspian Halls"],
    ["13:15-14:00", "Lunch break", "Lobby"],
    ["14:00-16:30", "Men's Health / Pediatric Urology", "Aspan & Caspian Halls"],
    ["16:30-18:20", "Young Urologists Session", "Aspan Hall"],
    ["18:20-18:40", "Awards and Closing Ceremony", "Aspan Hall"]
  ],
  ru: [
    ["08:00-09:00", "Регистрация", "Выставочная зона"],
    ["09:00-09:30", "Торжественное открытие", "Зал «Аспан»"],
    ["09:30-13:15", "Эндоурология / Онкоурология", "Залы «Аспан» и «Каспий»"],
    ["13:15-14:00", "Обед", "Фойе"],
    ["14:00-16:30", "Мужское здоровье / Детская урология", "Залы «Аспан» и «Каспий»"],
    ["16:30-18:20", "Секция молодых урологов", "Зал «Аспан»"],
    ["18:20-18:40", "Награждение и закрытие", "Зал «Аспан»"]
  ],
  kz: [
    ["08:00-09:00", "Қатысушыларды тіркеу", "Көрме аймағы"],
    ["09:00-09:30", "Ашылу рәсімі", "«Аспан» залы"],
    ["09:30-13:15", "Эндоурология / Онкоурология", "«Аспан» және «Каспий» залдары"],
    ["13:15-14:00", "Түскі ас", "Фойе"],
    ["14:00-16:30", "Ерлер денсаулығы / Балалар урологиясы", "«Аспан» және «Каспий» залдары"],
    ["16:30-18:20", "Жас урологтар секциясы", "«Аспан» залы"],
    ["18:20-18:40", "Марапаттау және жабылу", "«Аспан» залы"]
  ]
};

export const programDetails = [
  {
    time: "09:00-09:30",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Official Opening and Welcome Remarks", ru: "Официальное открытие и приветственные слова", kz: "Ресми ашылу және құттықтау сөздер" },
    moderators: [],
    talks: [
      { time: "09:00-09:30", speaker: "Timur Muratov", topic: "Vice Minister of Healthcare of the Republic of Kazakhstan" },
      { time: "09:00-09:30", speaker: "Anar Turmukhambetova", topic: "Rector of Astana Medical University" },
      { time: "09:00-09:30", speaker: "Ainur Tuleuova", topic: "Head of Astana City Health Department" },
      { time: "09:00-09:30", speaker: "Mirzakarim Alchinbayev", topic: "Chief Urologist of the Republic of Kazakhstan" }
    ]
  },
  {
    time: "09:30-13:15",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Endourology Session", ru: "Секция «Эндоурология»", kz: "Эндоурология секциясы" },
    moderators: ["Chingis Baimenov", "Yongda Liu", "Kemal Sarica"],
    talks: [
      { time: "09:30-09:45", speaker: "Ali Talyshinskii", topic: "Effectiveness of Artificial Intelligence in Detection and Classification of Urolithiasis on Computed Tomography: Analysis of Global Evidence" },
      { time: "09:45-10:00", speaker: "Wang Jianye", topic: "Current Status of BPH Management in China" },
      { time: "10:00-10:15", speaker: "Ali Talyshinskii", topic: "Clinical Effectiveness and Limitations of Citrate Therapy for Uric Acid Stones: New Perspectives on Traditional Approaches" },
      { time: "10:15-10:30", speaker: "Asylan Nurgaliyev", topic: "Retrograde intrarenal surgery" },
      { time: "10:30-10:45", speaker: "Adil Muslimovich Karimov", topic: "Laparoscopy from Scratch: YouTube as a Personal Surgical Assistant. Personal Experience" },
      { time: "10:45-11:00", speaker: "Zhaslan Amirzhanov", topic: "Radiation safety during percutaneous nephrolithotomy" },
      { time: "11:00-11:15", speaker: "Dmitry Gorelov", topic: "Active Suction in Stone Disease Treatment: Evolution of the Technique" },
      { time: "11:15-11:30", speaker: "Viktoria Shaderkina", topic: "New Technologies in Outpatient Urology" },
      { time: "11:30-11:45", speaker: "Kemal Sarica", topic: "Complications of PNL: How to prevent and manage?" },
      { time: "11:45-12:00", speaker: "Nikolay Alexandrovich Baykov", topic: "Analysis of En-bloc Technique Outcomes in Patients with NMIBC" },
      { time: "12:00-12:15", speaker: "Yongda Liu", topic: "How to Manage Complex Renal Stones" },
      { time: "12:15-12:30", speaker: "Stanislav Ali", topic: "Modern trends in urolithiasis treatment" },
      { time: "12:30-12:45", speaker: "Evgeny Bezrukov", topic: "Innovations and Modern Trends in Urology" },
      { time: "12:45-13:00", speaker: "Zhaslan Amirzhanov", topic: "Clinical Guidelines and Standards for Managing Lower Urinary Tract Infections" },
      { time: "13:00-13:15", speaker: "Ulanbek Zhanbyrbekuly", topic: "Narrow Urethra and Benign Prostatic Hyperplasia: Treatment Options" }
    ]
  },
  {
    time: "09:30-12:00",
    room: { en: "Caspian Hall", ru: "Зал «Каспий»", kz: "«Каспий» залы" },
    title: { en: "Uro-oncology Session", ru: "Секция «Онкоурология»", kz: "Онкоурология секциясы" },
    moderators: ["Khusan Umurzakov", "Evgeny Bezrukov", "Anvar Davranov"],
    talks: [
      { time: "09:30-09:45", speaker: "Anvar Davranov", topic: "New and Unusual Clinical Cases in Upper Urinary Tract Tumor Surgery" },
      { time: "09:45-10:00", speaker: "Olzhas Zakarya", topic: "Trimodal Therapy for Muscle-Invasive Bladder Cancer: Real-World Experience of KazIOR" },
      { time: "10:00-10:15", speaker: "Merey Kazgaliyev", topic: "Kidney-Sparing Surgery for Kidney Cancer" },
      { time: "10:15-12:00", speaker: "Speakers", topic: "Topics to be confirmed" }
    ]
  },
  {
    time: "14:00-16:30",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Men's Health Session", ru: "Секция «Мужское здоровье»", kz: "Ерлер денсаулығы секциясы" },
    moderators: ["Bulat Shalekenov", "Ege Can Serefoglu", "Kasymkhan Sultanbekov"],
    talks: [
      { time: "14:00-14:15", speaker: "Ege Can Serefoglu", topic: "Male infertility: new and promising treatment options" },
      { time: "14:15-14:30", speaker: "Mirzakarim Alchinbayev", topic: "Topic to be confirmed" },
      { time: "14:30-14:45", speaker: "Sam Ward", topic: "Regenerative Medicine" },
      { time: "14:45-15:00", speaker: "Bagdat Daukenov", topic: "Urethral Strictures: The Role of Different Buccal Graft Placement Techniques and Their Impact on Reconstruction Outcomes" },
      { time: "15:00-15:15", speaker: "Ege Can Serefoglu", topic: "Surgical Treatment of Premature Ejaculation" },
      { time: "15:15-15:30", speaker: "Sam Ward", topic: "Social Media and Men's Health" },
      { time: "15:30-15:45", speaker: "Yerkebulan Gulmanov", topic: "Adult Hypospadias: Reconstructive, Sexual, Reproductive and Psychosocial Aspects of an Unresolved Problem" },
      { time: "15:45-16:00", speaker: "Andrian Leontyev", topic: "Modern Diagnostics of Male Infertility" },
      { time: "16:00-16:15", speaker: "Rustam Omarbayev", topic: "Comparative Efficacy and Safety of Intracavernosal PRP Therapy and Autologous Bone Marrow Mesenchymal Stem Cells in Moderate and Severe Erectile Dysfunction" },
      { time: "16:15-16:30", speaker: "Pavel Kyzlasov", topic: "Troubleshooting in Implant Surgery" }
    ]
  },
  {
    time: "13:45-15:45",
    room: { en: "Caspian Hall", ru: "Зал «Каспий»", kz: "«Каспий» залы" },
    title: { en: "Pediatric Urology Session", ru: "Секция «Детская урология»", kz: "Балалар урологиясы секциясы" },
    moderators: ["Ardak Ainakulov", "Gilvydas Verkauskas", "Alimzhan Kalimkulov"],
    talks: [
      { time: "14:00-14:15", speaker: "Ardak Ainakulov", topic: "Kidney Transplantation into an Augmented Bladder in Children" },
      { time: "14:15-14:30", speaker: "Gilvydas Verkauskas", topic: "Gonadotropins and testicular function in boys with cryptorchidism" },
      { time: "14:30-14:45", speaker: "Temirlan Bagitzhanov", topic: "Differentiated Surgical Approach to Structural and Functional Bladder Disorders in Children" },
      { time: "14:45-15:00", speaker: "Askar Taszhurekov", topic: "Surgical Management of Children with Exstrophy-Epispadias Complex" },
      { time: "15:00-15:15", speaker: "Alimzhan Kalimkulov", topic: "Differentiated Approach to the Treatment of Pediatric Urolithiasis" },
      { time: "15:15-15:30", speaker: "Asset Zhanabek", topic: "Super Mini-PCNL and RIRS FANS in Children" },
      { time: "15:30-15:45", speaker: "Bauyrzhan Satanov", topic: "Obstructive Uropathies in Children: A Modern Perspective" },
      { time: "15:45-16:00", speaker: "Gilvydas Verkauskas", topic: "Choice of videosurgery technique for pyeloureteroplasty" }
    ]
  },
  {
    time: "16:30-18:40",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Young Urologists Session and Closing", ru: "Секция молодых урологов и закрытие", kz: "Жас урологтар секциясы және жабылу" },
    moderators: ["Gilvydas Verkauskas", "Wang Jianye", "Kemal Sarica", "Yongda Liu", "Sam Ward", "Ege Can Serefoglu"],
    talks: [
      { time: "16:30-16:40", speaker: "Yerkebulan Mukhambetov", topic: "Fluid Dynamics in Endourology: Why Flow Matters" },
      { time: "16:40-16:50", speaker: "Rabat Abdalim", topic: "Evolution of PCNL: Suction as an Essential Standard of Care" },
      { time: "16:50-17:00", speaker: "Dinmukhammed Bekturgan", topic: "PCNL in the Treatment of Pediatric Urolithiasis" },
      { time: "17:00-17:10", speaker: "Nailya Abdrashitova", topic: "XX Is Not Always Female: A Clinical Case" },
      { time: "17:10-17:20", speaker: "Yerzhan Iskakov", topic: "A Rare Clinical Case in Outpatient Urology: Mondor's Disease" },
      { time: "17:20-17:30", speaker: "Anuar Bazarbayev", topic: "Neurogenic Bladder Dysfunction in Children" },
      { time: "17:30-17:40", speaker: "Amirkhan Telman", topic: "Endoscopic Correction of Vesicoureteral Reflux in Children" },
      { time: "17:40-17:50", speaker: "Sagynbek Meldesh", topic: "Reconstructive Surgery for 46 XX DSD due to Congenital Adrenal Hyperplasia" },
      { time: "17:50-18:00", speaker: "Bakhadyr Bereketov", topic: "Modern Surgical Technologies in the Treatment of Kidney Cancer with Renal Vein Tumor Thrombus" },
      { time: "18:00-18:10", speaker: "Azamat Abdikamal", topic: "Robot-Assisted and Laparoscopic Surgery for Renal Tumors: Current Opportunities, Advantages and Limitations" },
      { time: "18:10-18:20", speaker: "Asset Umirtayev", topic: "Surgical Treatment of Prostate Cancer: Current Opportunities and Future Perspectives" },
      { time: "18:20-18:30", speaker: "Award Ceremony", topic: "Best Young Urologist Presentation Award" },
      { time: "18:30-18:40", speaker: "Organizing Committee", topic: "Official Closing Ceremony" }
    ]
  }
];

export const sessions = programDetails.map((session) => ({
  time: session.time,
  room: session.room,
  title: session.title,
  moderators: session.moderators,
  talks: {
    en: session.talks.map((talk) => `${talk.time} · ${talk.speaker}: ${talk.topic}`),
    ru: session.talks.map((talk) => `${talk.time} · ${talk.speaker}: ${talk.topic}`),
    kz: session.talks.map((talk) => `${talk.time} · ${talk.speaker}: ${talk.topic}`)
  }
}));

const officialFaculty = [
  ["Timur Muratov", "Муратов Тимур Муратович", "Vice Minister of Healthcare of the Republic of Kazakhstan", "Вице-министр здравоохранения Республики Казахстан", "Қазақстан Республикасы Денсаулық сақтау вице-министрі", "official"],
  ["Anar Turmukhambetova", "Турмухамбетова Анар Акылбековна", "Rector of Astana Medical University", "Ректор Медицинского университета Астана", "Астана медицина университетінің ректоры", "official"],
  ["Ainur Tuleuova", "Тулеуова Айнур Сакеновна", "Head of Astana City Health Department", "Глава Управления здравоохранения г. Астана", "Астана қаласы Денсаулық сақтау басқармасының басшысы", "official"],
  ["Mirzakarim Alchinbayev", "Алчинбаев Мирзакарим Каримович", "Chief Urologist of the Republic of Kazakhstan", "Главный уролог Республики Казахстан", "Қазақстан Республикасының бас урологы", "kazakhstan"]
] as const;

export const faculty = [
  ...officialFaculty.map(([name, ruName, roleEn, roleRu, roleKz, group]) => ({
    name,
    ruName,
    role: { en: roleEn, ru: roleRu, kz: roleKz },
    city: { en: group === "official" ? "Astana" : "Kazakhstan", ru: group === "official" ? "Астана" : "Казахстан", kz: group === "official" ? "Астана" : "Қазақстан" },
    topic: { en: "Plenum participation", ru: "Участие в пленуме", kz: "Пленумға қатысу" },
    group
  })),
  ...[
    "Chingis Baimenov", "Khusan Umurzakov", "Anvar Davranov", "Bulat Shalekenov", "Kasymkhan Sultanbekov",
    "Ardak Ainakulov", "Alimzhan Kalimkulov", "Ali Talyshinskii", "Asylan Nurgaliyev", "Zhaslan Amirzhanov"
  ].map((name) => ({
    name,
    ruName: name,
    role: { en: "Kazakhstan Faculty / Moderator", ru: "Казахстанский спикер / модератор", kz: "Қазақстандық спикер / модератор" },
    city: { en: "Kazakhstan", ru: "Казахстан", kz: "Қазақстан" },
    topic: { en: "Scientific session", ru: "Научная секция", kz: "Ғылыми секция" },
    group: "kazakhstan" as const
  })),
  ...["Yongda Liu", "Kemal Sarica", "Evgeny Bezrukov", "Ege Can Serefoglu", "Gilvydas Verkauskas", "Wang Jianye", "Sam Ward"].map((name) => ({
    name,
    ruName: name,
    role: { en: "International Faculty", ru: "Международный спикер", kz: "Халықаралық спикер" },
    city: { en: "International", ru: "Международный эксперт", kz: "Халықаралық сарапшы" },
    topic: { en: "Specialty lecture / moderation", ru: "Профильный доклад / модерация", kz: "Бейінді баяндама / модерация" },
    group: "international" as const
  }))
] satisfies {
  name: string;
  ruName: string;
  role: LocalText;
  city: LocalText;
  topic: LocalText;
  group: "official" | "kazakhstan" | "international";
}[];
