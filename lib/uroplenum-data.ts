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

export const copy = {
  en: {
    brand: "UROPLENUM 2026",
    congress: "Plenum of Urologists of Kazakhstan 2026",
    eyebrow: "National urology congress",
    dateCity: "July 3, 2026 | Astana, Kazakhstan",
    site: "uroplenum.vercel.app",
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
    organizersText: "Partner and organizer logos can be replaced when the final list is confirmed.",
    contactTitle: "Planning to attend UROPLENUM 2026?",
    contactText: "Registration and participant information will be published by the organizing committee.",
    viewProgram: "View Program",
    meetFaculty: "Meet the Faculty",
    programTitle: "Scientific Program",
    programIntro: "Preliminary schedule based on the submitted Word program files.",
    programNote: "Times and halls may be refined before publication of the final congress program.",
    dayOne: "July 3, 2026",
    dayTwo: "Program Tracks",
    facultyTitle: "Faculty and Invited Guests",
    facultyIntro: "Officials, Kazakhstan faculty, moderators and international experts participating in the plenum.",
    officialGuests: "Invited Officials",
    kazakhstanFaculty: "Kazakhstan Faculty",
    internationalFaculty: "International Faculty",
    moderators: "Moderators",
    venueTitle: "Congress-center QazExpoCongress",
    venueIntro: "Congress-center QazExpoCongress, Astana. Address: 55/13 Mangilik El Avenue, Astana.",
    venueAbout: "About the Venue",
    venueAboutText:
      "QazExpoCongress is a multifunctional congress venue in Astana with a main hall, conference halls and an exhibition lobby for plenary sessions, parallel sections and professional networking.",
    gettingThere: "How to Get There",
    gettingThereText: "Located on Mangilik El Avenue, the venue is accessible by city transport, taxi and organized congress transfers.",
    accommodation: "Accommodation",
    accommodationText: "Recommended hotel options and congress rates can be added after partner hotels are confirmed.",
    map: "Map Placeholder",
    contact: "Contact",
    email: "info@uroplenum.kz",
    footerRights: "© 2026 UROPLENUM 2026. All rights reserved."
  },
  ru: {
    brand: "UROPLENUM 2026",
    congress: "Пленум урологов Казахстана 2026",
    eyebrow: "Национальный урологический конгресс",
    dateCity: "3 июля 2026 | Астана, Казахстан",
    site: "uroplenum.vercel.app",
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
    organizersText: "Логотипы партнеров и организаторов можно заменить после утверждения финального списка.",
    contactTitle: "Планируете участие в UROPLENUM 2026?",
    contactText: "Информация о регистрации и участии будет опубликована организационным комитетом.",
    viewProgram: "Смотреть программу",
    meetFaculty: "Спикеры",
    programTitle: "Научная программа",
    programIntro: "Предварительное расписание на основе предоставленных Word-файлов программы.",
    programNote: "Время и залы могут быть уточнены перед публикацией финальной программы.",
    dayOne: "3 июля 2026",
    dayTwo: "Треки программы",
    facultyTitle: "Спикеры и приглашенные гости",
    facultyIntro: "Официальные гости, казахстанские эксперты, модераторы и международные спикеры пленума.",
    officialGuests: "Приглашенные официальные лица",
    kazakhstanFaculty: "Казахстанские спикеры",
    internationalFaculty: "Международные спикеры",
    moderators: "Модераторы",
    venueTitle: "Конгресс-центр QazExpoCongress",
    venueIntro: "Конгресс-центр QazExpoCongress, Астана. Адрес: проспект Мәңгілік Ел, 55/13, Астана.",
    venueAbout: "О площадке",
    venueAboutText:
      "QazExpoCongress — многофункциональная конгресс-площадка в Астане с главным залом, конференц-залами и выставочным фойе для пленарных заседаний, параллельных секций и профессионального нетворкинга.",
    gettingThere: "Как добраться",
    gettingThereText: "Площадка расположена на проспекте Мәңгілік Ел и доступна на городском транспорте, такси и организованных трансферах.",
    accommodation: "Проживание",
    accommodationText: "Рекомендованные отели и специальные условия можно добавить после подтверждения партнерских гостиниц.",
    map: "Карта",
    contact: "Контакты",
    email: "info@uroplenum.kz",
    footerRights: "© 2026 UROPLENUM 2026. Все права защищены."
  },
  kz: {
    brand: "UROPLENUM 2026",
    congress: "Қазақстан урологтарының пленумы 2026",
    eyebrow: "Ұлттық урологиялық конгресс",
    dateCity: "2026 жылғы 3 шілде | Астана, Қазақстан",
    site: "uroplenum.vercel.app",
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
    organizersText: "Серіктестер мен ұйымдастырушылардың логотиптерін финалдық тізім бекітілгеннен кейін ауыстыруға болады.",
    contactTitle: "UROPLENUM 2026 қатысуды жоспарлайсыз ба?",
    contactText: "Тіркеу және қатысу туралы ақпаратты ұйымдастыру комитеті жариялайды.",
    viewProgram: "Бағдарламаны көру",
    meetFaculty: "Спикерлер",
    programTitle: "Ғылыми бағдарлама",
    programIntro: "Ұсынылған Word файлдары негізіндегі алдын ала кесте.",
    programNote: "Уақыты мен залдары финалдық бағдарлама жарияланғанға дейін нақтылануы мүмкін.",
    dayOne: "2026 жылғы 3 шілде",
    dayTwo: "Бағдарлама тректері",
    facultyTitle: "Спикерлер және шақырылған қонақтар",
    facultyIntro: "Пленумға қатысатын ресми қонақтар, қазақстандық сарапшылар, модераторлар және халықаралық спикерлер.",
    officialGuests: "Шақырылған ресми тұлғалар",
    kazakhstanFaculty: "Қазақстандық спикерлер",
    internationalFaculty: "Халықаралық спикерлер",
    moderators: "Модераторлар",
    venueTitle: "QazExpoCongress конгресс-орталығы",
    venueIntro: "QazExpoCongress конгресс-орталығы, Астана. Мекенжайы: Мәңгілік Ел даңғылы, 55/13, Астана.",
    venueAbout: "Өтетін орын туралы",
    venueAboutText:
      "QazExpoCongress — Астанадағы көпфункционалды конгресс алаңы. Негізгі зал, конференц-залдар және көрме фойесі пленарлық отырыстарға, параллель секцияларға және кәсіби байланысқа қолайлы.",
    gettingThere: "Қалай жетуге болады",
    gettingThereText: "Өтетін орын Мәңгілік Ел даңғылында орналасқан, қалалық көлікпен, таксимен және ұйымдастырылған трансфермен жетуге болады.",
    accommodation: "Қонақ үй",
    accommodationText: "Ұсынылатын қонақ үйлер мен арнайы шарттарды серіктес қонақ үйлер бекітілгеннен кейін қосуға болады.",
    map: "Карта",
    contact: "Байланыс",
    email: "info@uroplenum.kz",
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

export const sessions = [
  {
    time: "09:00-09:30",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: {
      en: "Official Opening and Welcome Remarks",
      ru: "Официальное открытие и приветственные слова",
      kz: "Ресми ашылу және құттықтау сөздер"
    },
    moderators: ["Timur Muratov", "Anar Turmukhambetova", "Ainur Tuleuova", "Mirzakarim Alchinbayev"],
    talks: {
      en: ["Welcome addresses by invited officials and the organizing committee"],
      ru: ["Приветственные слова приглашенных официальных лиц и организационного комитета"],
      kz: ["Шақырылған ресми тұлғалар мен ұйымдастыру комитетінің құттықтау сөздері"]
    }
  },
  {
    time: "09:30-13:15",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Endourology Session", ru: "Секция «Эндоурология»", kz: "Эндоурология секциясы" },
    moderators: ["Chingis Baimenov", "Yongda Liu", "Kemal Sarica"],
    talks: {
      en: ["AI in urolithiasis detection", "BPH management", "RIRS and PCNL complications", "Complex renal stones"],
      ru: ["Искусственный интеллект в диагностике мочекаменной болезни", "Лечение ДГПЖ", "Осложнения RIRS и PCNL", "Сложные камни почек"],
      kz: ["Уролитиаз диагностикасындағы жасанды интеллект", "Қуықасты безі гиперплазиясын емдеу", "RIRS және PCNL асқынулары", "Күрделі бүйрек тастары"]
    }
  },
  {
    time: "09:30-12:00",
    room: { en: "Caspian Hall", ru: "Зал «Каспий»", kz: "«Каспий» залы" },
    title: { en: "Uro-oncology Session", ru: "Секция «Онкоурология»", kz: "Онкоурология секциясы" },
    moderators: ["Khusan Umurzakov", "Evgeny Bezrukov", "Anvar Davranov"],
    talks: {
      en: ["Upper urinary tract tumors", "Muscle-invasive bladder cancer", "Kidney-sparing surgery"],
      ru: ["Опухоли верхних мочевых путей", "Мышечно-инвазивный рак мочевого пузыря", "Органосохраняющая хирургия почки"],
      kz: ["Жоғарғы несеп жолдарының ісіктері", "Бұлшықетке инвазияланған қуық обыры", "Бүйректі сақтайтын хирургия"]
    }
  },
  {
    time: "14:00-16:30",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Men's Health Session", ru: "Секция «Мужское здоровье»", kz: "Ерлер денсаулығы секциясы" },
    moderators: ["Bulat Shalekenov", "Ege Can Serefoglu", "Kasymkhan Sultanbekov"],
    talks: {
      en: ["Male infertility", "Regenerative medicine", "Premature ejaculation", "Implant surgery troubleshooting"],
      ru: ["Мужское бесплодие", "Регенеративная медицина", "Преждевременная эякуляция", "Решение проблем имплантационной хирургии"],
      kz: ["Ерлер бедеулігі", "Регенеративті медицина", "Ерте эякуляция", "Имплантациялық хирургиядағы күрделі жағдайлар"]
    }
  },
  {
    time: "13:45-15:45",
    room: { en: "Caspian Hall", ru: "Зал «Каспий»", kz: "«Каспий» залы" },
    title: { en: "Pediatric Urology Session", ru: "Секция «Детская урология»", kz: "Балалар урологиясы секциясы" },
    moderators: ["Ardak Ainakulov", "Gilvydas Verkauskas", "Alimzhan Kalimkulov"],
    talks: {
      en: ["Kidney transplantation in children", "Cryptorchidism", "Bladder disorders", "Pediatric urolithiasis"],
      ru: ["Трансплантация почки у детей", "Крипторхизм", "Нарушения функции мочевого пузыря", "Мочекаменная болезнь у детей"],
      kz: ["Балалардағы бүйрек трансплантациясы", "Крипторхизм", "Қуық функциясының бұзылыстары", "Балалардағы уролитиаз"]
    }
  },
  {
    time: "16:30-18:20",
    room: { en: "Aspan Hall", ru: "Зал «Аспан»", kz: "«Аспан» залы" },
    title: { en: "Young Urologists Session", ru: "Секция молодых урологов", kz: "Жас урологтар секциясы" },
    moderators: ["Gilvydas Verkauskas", "Wang Jianye", "Kemal Sarica", "Yongda Liu", "Sam Ward", "Ege Can Serefoglu"],
    talks: {
      en: ["11 presentations", "7 minutes presentation + 3 minutes discussion", "Best Young Urologist Presentation Award"],
      ru: ["11 докладов", "7 минут доклад + 3 минуты обсуждение", "Награда за лучший доклад молодого уролога"],
      kz: ["11 баяндама", "7 минут баяндама + 3 минут талқылау", "Жас урологтың үздік баяндамасы марапаты"]
    }
  }
];

export const faculty = [
  {
    name: "Timur Muratov",
    ruName: "Муратов Тимур Муратович",
    role: {
      en: "Vice Minister of Healthcare of the Republic of Kazakhstan",
      ru: "Вице-министр здравоохранения Республики Казахстан",
      kz: "Қазақстан Республикасы Денсаулық сақтау вице-министрі"
    },
    city: { en: "Kazakhstan", ru: "Казахстан", kz: "Қазақстан" },
    topic: { en: "Welcome remarks", ru: "Приветственное слово", kz: "Құттықтау сөзі" },
    group: "official"
  },
  {
    name: "Anar Turmukhambetova",
    ruName: "Турмухамбетова Анар Акылбековна",
    role: { en: "Rector of Astana Medical University", ru: "Ректор Медицинского университета Астана", kz: "Астана медицина университетінің ректоры" },
    city: { en: "Astana", ru: "Астана", kz: "Астана" },
    topic: { en: "Academic welcome", ru: "Академическое приветствие", kz: "Академиялық құттықтау" },
    group: "official"
  },
  {
    name: "Ainur Tuleuova",
    ruName: "Тулеуова Айнур Сакеновна",
    role: { en: "Head of Astana City Health Department", ru: "Глава Управления здравоохранения г. Астана", kz: "Астана қаласы Денсаулық сақтау басқармасының басшысы" },
    city: { en: "Astana", ru: "Астана", kz: "Астана" },
    topic: { en: "Healthcare leadership", ru: "Развитие здравоохранения", kz: "Денсаулық сақтауды дамыту" },
    group: "official"
  },
  {
    name: "Mirzakarim Alchinbayev",
    ruName: "Алчинбаев Мирзакарим Каримович",
    role: { en: "Chief Urologist of the Republic of Kazakhstan", ru: "Главный уролог Республики Казахстан", kz: "Қазақстан Республикасының бас урологы" },
    city: { en: "Kazakhstan", ru: "Казахстан", kz: "Қазақстан" },
    topic: { en: "Modern urology in Kazakhstan", ru: "Современная урология Казахстана", kz: "Қазақстандағы заманауи урология" },
    group: "kazakhstan"
  },
  ...[
    "Chingis Baimenov",
    "Khusan Umurzakov",
    "Anvar Davranov",
    "Bulat Shalekenov",
    "Kasymkhan Sultanbekov",
    "Ardak Ainakulov",
    "Alimzhan Kalimkulov"
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
