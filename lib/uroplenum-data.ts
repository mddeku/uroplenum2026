export type Lang = "en" | "ru" | "kz";
export type PageKey = "home" | "program" | "faculty" | "venue";

type LocalText = Record<Lang, string>;
type Group = "official" | "kazakhstan" | "international";

const text = (en: string, ru: string, kz: string): LocalText => ({ en, ru, kz });
const talk = (time: string, speaker: LocalText, topic: LocalText) => ({ time, speaker, topic });

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
  { value: "43,200 m²", label: text("Total area", "Общая площадь", "Жалпы аумағы") },
  { value: "2,102", label: text("Main hall seats", "Мест в главном зале", "Негізгі зал орны") },
  { value: "8", label: text("Conference halls", "Конференц-залов", "Конференц-зал") },
  { value: "2,300 m²", label: text("Lobby area", "Площадь фойе", "Фойе аумағы") }
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
    room: text("Aspan Hall", "Зал «Аспан»", "«Аспан» залы"),
    title: text("Official Opening and Welcome Remarks", "Официальное открытие и приветственные слова", "Ресми ашылу және құттықтау сөздер"),
    moderators: [],
    talks: [
      talk("09:00-09:30", text("Timur Muratov", "Муратов Тимур Муратович", "Тимур Мұратов"), text("Vice Minister of Healthcare of the Republic of Kazakhstan", "Вице-министр здравоохранения Республики Казахстан", "Қазақстан Республикасы Денсаулық сақтау вице-министрі")),
      talk("09:00-09:30", text("Anar Turmukhambetova", "Турмухамбетова Анар Акылбековна", "Анар Тұрмұхамбетова"), text("Rector of Astana Medical University", "Ректор Медицинского университета Астана", "Астана медицина университетінің ректоры")),
      talk("09:00-09:30", text("Ainur Tuleuova", "Тулеуова Айнур Сакеновна", "Айнұр Төлеуова"), text("Head of Astana City Health Department", "Глава Управления здравоохранения г. Астана", "Астана қаласы Денсаулық сақтау басқармасының басшысы")),
      talk("09:00-09:30", text("Mirzakarim Alchinbayev", "Алчинбаев Мирзакарим Каримович", "Мирзакарим Алчинбаев"), text("Chief Urologist of the Republic of Kazakhstan", "Главный уролог Республики Казахстан", "Қазақстан Республикасының бас урологы"))
    ]
  },
  {
    time: "09:30-13:15",
    room: text("Aspan Hall", "Зал «Аспан»", "«Аспан» залы"),
    title: text("Endourology Session", "Секция «Эндоурология»", "Эндоурология секциясы"),
    moderators: ["Chingis Baimenov", "Yongda Liu", "Kemal Sarica"],
    talks: [
      talk("09:30-09:45", text("Ali Talyshinskii", "Талышинский Али Эльманович", "Али Талышинский"), text("Effectiveness of Artificial Intelligence in Detection and Classification of Urolithiasis on Computed Tomography: Analysis of Global Evidence", "Эффективность искусственного интеллекта в выявлении и классификации уролитиаза по данным компьютерной томографии: анализ мировых данных", "Компьютерлік томографияда уролитиазды анықтау және жіктеудегі жасанды интеллект тиімділігі: әлемдік деректерді талдау")),
      talk("09:45-10:00", text("Wang Jianye", "Wang Jianye", "Wang Jianye"), text("Current Status of BPH Management in China", "Современное состояние лечения доброкачественной гиперплазии предстательной железы в Китае", "Қытайдағы қуықасты безінің қатерсіз гиперплазиясын емдеудің қазіргі жағдайы")),
      talk("10:00-10:15", text("Ali Talyshinskii", "Талышинский Али Эльманович", "Али Талышинский"), text("Clinical Effectiveness and Limitations of Citrate Therapy for Uric Acid Stones: New Perspectives on Traditional Approaches", "Клиническая эффективность и ограничения цитратной терапии уратных камней: новые взгляды на традиционные подходы", "Урат тастарына цитрат терапиясының клиникалық тиімділігі мен шектеулері: дәстүрлі тәсілдерге жаңа көзқарас")),
      talk("10:15-10:30", text("Asylan Nurgaliyev", "Нургалиев Асылан Асылбекович", "Асылан Нұрғалиев"), text("Retrograde intrarenal surgery", "Ретроградная интраренальная хирургия", "Ретроградты интрареналдық хирургия")),
      talk("10:30-10:45", text("Adil Karimov", "Каримов Адиль Муслимович", "Әділ Каримов"), text("Laparoscopy from Scratch: YouTube as a Personal Surgical Assistant. Personal Experience", "Лапароскопия с нуля: YouTube как личный хирургический ассистент. Личный опыт", "Лапароскопияны нөлден бастау: YouTube жеке хирургиялық ассистент ретінде. Жеке тәжірибе")),
      talk("10:45-11:00", text("Zhaslan Amirzhanov", "Амиржанов Жаслан Нурланович", "Жаслан Әміржанов"), text("Radiation safety during percutaneous nephrolithotomy", "Рентгенбезопасность при чрескожной нефролитотомии", "Перкутандық нефролитотомия кезіндегі радиациялық қауіпсіздік")),
      talk("11:00-11:15", text("Dmitry Gorelov", "Горелов Дмитрий Сергеевич", "Дмитрий Горелов"), text("Active Suction in Stone Disease Treatment: Evolution of the Technique", "Активная аспирация в лечении мочекаменной болезни: эволюция методики", "Несеп-тас ауруын емдеудегі белсенді аспирация: әдістеменің эволюциясы")),
      talk("11:15-11:30", text("Viktoria Shaderkina", "Шадеркина Виктория Анатольевна", "Виктория Шадеркина"), text("New Technologies in Outpatient Urology", "Новые технологии в амбулаторной урологии", "Амбулаторлық урологиядағы жаңа технологиялар")),
      talk("11:30-11:45", text("Kemal Sarica", "Kemal Sarica", "Kemal Sarica"), text("Complications of PNL: How to prevent and manage?", "Осложнения ПНЛ: как предупредить и устранить?", "ПНЛ асқынулары: қалай алдын алу және басқару керек?")),
      talk("11:45-12:00", text("Nikolay Baykov", "Байков Николай Александрович", "Николай Байков"), text("Analysis of En-bloc Technique Outcomes in Patients with NMIBC", "Анализ результатов применения техники en-bloc у пациентов с немышечно-инвазивным раком мочевого пузыря", "Бұлшықетке инвазияланбаған қуық обыры бар пациенттерде en-bloc техникасының нәтижелерін талдау")),
      talk("12:00-12:15", text("Yongda Liu", "Yongda Liu", "Yongda Liu"), text("How to Manage Complex Renal Stones", "Лечение сложных камней почек", "Күрделі бүйрек тастарын емдеу")),
      talk("12:15-12:30", text("Stanislav Ali", "Али Станислав Хусейнович", "Станислав Али"), text("Modern trends in urolithiasis treatment", "Современные тенденции в лечении мочекаменной болезни", "Несеп-тас ауруын емдеудегі заманауи үрдістер")),
      talk("12:30-12:45", text("Evgeny Bezrukov", "Безруков Евгений Алексеевич", "Евгений Безруков"), text("Innovations and Modern Trends in Urology", "Инновации и современные тренды в урологии", "Урологиядағы инновациялар және заманауи трендтер")),
      talk("12:45-13:00", text("Zhaslan Amirzhanov", "Амиржанов Жаслан Нурланович", "Жаслан Әміржанов"), text("Clinical Guidelines and Standards for Managing Lower Urinary Tract Infections", "Клинические рекомендации и стандарты ведения пациентов с инфекцией нижних мочевых путей", "Төменгі несеп жолдарының инфекциясы бар пациенттерді жүргізу бойынша клиникалық ұсынымдар мен стандарттар")),
      talk("13:00-13:15", text("Ulanbek Zhanbyrbekuly", "Жанбырбекулы Уланбек", "Ұланбек Жанбырбекұлы"), text("Narrow Urethra and Benign Prostatic Hyperplasia: Treatment Options", "Узкая уретра и аденома простаты: варианты решения проблемы", "Тар уретра және қуықасты безінің аденомасы: мәселені шешу нұсқалары"))
    ]
  },
  {
    time: "09:30-12:00",
    room: text("Caspian Hall", "Зал «Каспий»", "«Каспий» залы"),
    title: text("Uro-oncology Session", "Секция «Онкоурология»", "Онкоурология секциясы"),
    moderators: ["Khusan Umurzakov", "Evgeny Bezrukov", "Anvar Davranov"],
    talks: [
      talk("09:30-09:45", text("Anvar Davranov", "Давранов Анвар Жангирович", "Анвар Давранов"), text("New and Unusual Clinical Cases in Upper Urinary Tract Tumor Surgery", "Новые и нестандартные клинические случаи в хирургии опухолей верхних мочевых путей", "Жоғарғы несеп жолдары ісіктері хирургиясындағы жаңа және стандартты емес клиникалық жағдайлар")),
      talk("09:45-10:00", text("Olzhas Zakarya", "Закарья Олжас Муратулы", "Олжас Закарья"), text("Trimodal Therapy for Muscle-Invasive Bladder Cancer: Real-World Experience of KazIOR", "Тримодальная терапия при мышечно-инвазивном раке мочевого пузыря: опыт реальной клинической практики КазНИИОиР", "Бұлшықетке инвазияланған қуық обырындағы тримодалды терапия: ҚазҒЗИОиР нақты клиникалық тәжірибесі")),
      talk("10:00-10:15", text("Merey Kazgaliyev", "Казгалиев Мерей Талгатович", "Мерей Қазғалиев"), text("Kidney-Sparing Surgery for Kidney Cancer", "Органосохраняющие операции при раке почки", "Бүйрек обырындағы ағзаны сақтайтын операциялар")),
      talk("10:15-12:00", text("Speakers", "Спикеры", "Спикерлер"), text("Topics to be confirmed", "Темы уточняются", "Тақырыптар нақтыланады"))
    ]
  },
  {
    time: "14:00-16:30",
    room: text("Aspan Hall", "Зал «Аспан»", "«Аспан» залы"),
    title: text("Men's Health Session", "Секция «Мужское здоровье»", "Ерлер денсаулығы секциясы"),
    moderators: ["Bulat Shalekenov", "Ege Can Serefoglu", "Kasymkhan Sultanbekov"],
    talks: [
      talk("14:00-14:15", text("Ege Can Serefoglu", "Ege Can Serefoglu", "Ege Can Serefoglu"), text("Male infertility: new and promising treatment options", "Мужское бесплодие: новые и перспективные варианты лечения", "Ерлер бедеулігі: емдеудің жаңа және перспективалы нұсқалары")),
      talk("14:15-14:30", text("Mirzakarim Alchinbayev", "Алчинбаев Мирзакарим Каримович", "Мирзакарим Алчинбаев"), text("Topic to be confirmed", "Тема уточняется", "Тақырып нақтыланады")),
      talk("14:30-14:45", text("Sam Ward", "Sam Ward", "Sam Ward"), text("Regenerative Medicine", "Регенеративная медицина", "Регенеративті медицина")),
      talk("14:45-15:00", text("Bagdat Daukenov", "Даукенов Багдат Азимбаевич", "Бағдат Дәукенов"), text("Urethral Strictures: The Role of Different Buccal Graft Placement Techniques and Their Impact on Reconstruction Outcomes", "Стриктуры уретры: роль различных вариантов укладки буккального графта и их влияние на результаты реконструкции", "Уретра стриктуралары: буккалды графтты орналастыру әдістерінің реконструкция нәтижелеріне әсері")),
      talk("15:00-15:15", text("Ege Can Serefoglu", "Ege Can Serefoglu", "Ege Can Serefoglu"), text("Surgical Treatment of Premature Ejaculation", "Хирургическое лечение преждевременной эякуляции", "Ерте эякуляцияны хирургиялық емдеу")),
      talk("15:15-15:30", text("Sam Ward", "Sam Ward", "Sam Ward"), text("Social Media and Men's Health", "Социальные сети и мужское здоровье", "Әлеуметтік желілер және ерлер денсаулығы")),
      talk("15:30-15:45", text("Yerkebulan Gulmanov", "Гульманов Еркебулан Манасович", "Еркебұлан Гүлманов"), text("Adult Hypospadias: Reconstructive, Sexual, Reproductive and Psychosocial Aspects of an Unresolved Problem", "Гипоспадия у взрослых: реконструктивные, сексуальные, репродуктивные и психосоциальные аспекты нерешенной проблемы", "Ересектердегі гипоспадия: шешілмеген мәселенің реконструктивті, сексуалдық, репродуктивті және психоәлеуметтік аспектілері")),
      talk("15:45-16:00", text("Andrian Leontyev", "Леонтьев Андриан Олегович", "Андриан Леонтьев"), text("Modern Diagnostics of Male Infertility", "Современная диагностика мужского бесплодия", "Ерлер бедеулігінің заманауи диагностикасы")),
      talk("16:00-16:15", text("Rustam Omarbayev", "Омарбаев Рустам Токенович", "Рустам Омарбаев"), text("Comparative Efficacy and Safety of Intracavernosal PRP Therapy and Autologous Bone Marrow Mesenchymal Stem Cells in Moderate and Severe Erectile Dysfunction", "Сравнительная эффективность и безопасность интракавернозной PRP-терапии и аутологичных мезенхимальных стволовых клеток костного мозга при умеренной и тяжелой эректильной дисфункции", "Орташа және ауыр эректильді дисфункцияда интракавернозды PRP-терапия мен сүйек кемігінің аутологиялық мезенхималық бағаналы жасушаларының тиімділігі мен қауіпсіздігін салыстыру")),
      talk("16:15-16:30", text("Pavel Kyzlasov", "Кызласов Павел Сергеевич", "Павел Кызласов"), text("Troubleshooting in Implant Surgery", "Troubleshooting в имплантационной хирургии", "Имплантациялық хирургиядағы күрделі жағдайларды шешу"))
    ]
  },
  {
    time: "13:45-15:45",
    room: text("Caspian Hall", "Зал «Каспий»", "«Каспий» залы"),
    title: text("Pediatric Urology Session", "Секция «Детская урология»", "Балалар урологиясы секциясы"),
    moderators: ["Ardak Ainakulov", "Gilvydas Verkauskas", "Alimzhan Kalimkulov"],
    talks: [
      talk("14:00-14:15", text("Ardak Ainakulov", "Айнакулов Ардак Жаксылыкович", "Ардақ Айнакулов"), text("Kidney Transplantation into an Augmented Bladder in Children", "Трансплантация почек у детей в аугментированный мочевой пузырь", "Балаларда аугментацияланған қуыққа бүйрек трансплантациясы")),
      talk("14:15-14:30", text("Gilvydas Verkauskas", "Gilvydas Verkauskas", "Gilvydas Verkauskas"), text("Gonadotropins and testicular function in boys with cryptorchidism", "Гонадотропины и функция яичек у мальчиков с крипторхизмом", "Крипторхизмі бар ұл балалардағы гонадотропиндер және аталық без функциясы")),
      talk("14:30-14:45", text("Temirlan Bagitzhanov", "Багитжанов Темирлан Женисович", "Темірлан Бағытжанов"), text("Differentiated Surgical Approach to Structural and Functional Bladder Disorders in Children", "Дифференцированный хирургический подход к структурным и функциональным нарушениям мочевого пузыря у детей", "Балалардағы қуықтың құрылымдық және функционалдық бұзылыстарына сараланған хирургиялық тәсіл")),
      talk("14:45-15:00", text("Askar Taszhurekov", "Тасжуреков Аскар Онгарович", "Асқар Тасжүреков"), text("Surgical Management of Children with Exstrophy-Epispadias Complex", "Хирургическое лечение детей с комплексом экстрофия-эписпадия", "Экстрофия-эписпадия кешені бар балаларды хирургиялық емдеу")),
      talk("15:00-15:15", text("Alimzhan Kalimkulov", "Калимкулов Алимжан Мейрамбекулы", "Әлімжан Қалимқұлов"), text("Differentiated Approach to the Treatment of Pediatric Urolithiasis", "Дифференцированный подход к лечению мочекаменной болезни у детей", "Балалардағы несеп-тас ауруын емдеуге сараланған тәсіл")),
      talk("15:15-15:30", text("Asset Zhanabek", "Жанабек Асет", "Әсет Жанабек"), text("Super Mini-PCNL and RIRS FANS in Children", "Супер мини-ПНЛ и RIRS FANS у детей", "Балалардағы супер мини-ПНЛ және RIRS FANS")),
      talk("15:30-15:45", text("Bauyrzhan Satanov", "Сатанов Бауыржан Ермекович", "Бауыржан Сатанов"), text("Obstructive Uropathies in Children: A Modern Perspective", "Обструктивные уропатии у детей: современный взгляд", "Балалардағы обструктивті уропатиялар: заманауи көзқарас")),
      talk("15:45-16:00", text("Gilvydas Verkauskas", "Gilvydas Verkauskas", "Gilvydas Verkauskas"), text("Choice of videosurgery technique for pyeloureteroplasty", "Выбор техники видеохирургии для пиелоуретеропластики", "Пиелоуретеропластика үшін видеохирургия техникасын таңдау"))
    ]
  },
  {
    time: "16:30-18:40",
    room: text("Aspan Hall", "Зал «Аспан»", "«Аспан» залы"),
    title: text("Young Urologists Session and Closing", "Секция молодых урологов и закрытие", "Жас урологтар секциясы және жабылу"),
    moderators: ["Gilvydas Verkauskas", "Wang Jianye", "Kemal Sarica", "Yongda Liu", "Sam Ward", "Ege Can Serefoglu"],
    talks: [
      talk("16:30-16:40", text("Yerkebulan Mukhambetov", "Мухамбетов Еркебулан Жанатович", "Еркебұлан Мұхамбетов"), text("Fluid Dynamics in Endourology: Why Flow Matters", "Динамика жидкости в эндоурологии: почему поток имеет значение", "Эндоурологиядағы сұйықтық динамикасы: ағын неге маңызды")),
      talk("16:40-16:50", text("Rabat Abdalim", "Абдалим Рабат Канатулы", "Рабат Абдалим"), text("Evolution of PCNL: Suction as an Essential Standard of Care", "Эволюция PCNL: аспирация как важный стандарт лечения", "PCNL эволюциясы: аспирация емдеудің маңызды стандарты ретінде")),
      talk("16:50-17:00", text("Dinmukhammed Bekturgan", "Бектурган Дінмұхаммед Нұрболатұлы", "Дінмұхаммед Бектұрған"), text("PCNL in the Treatment of Pediatric Urolithiasis", "ПНЛ в лечении мочекаменной болезни у детей", "Балалардағы несеп-тас ауруын емдеудегі ПНЛ")),
      talk("17:00-17:10", text("Nailya Abdrashitova", "Абдрашитова Наиля Рафаильевна", "Наиля Абдрашитова"), text("XX Is Not Always Female: A Clinical Case", "XX — не всегда женщина: клинический случай", "XX әрдайым әйел емес: клиникалық жағдай")),
      talk("17:10-17:20", text("Yerzhan Iskakov", "Искаков Ержан Асылбекович", "Ержан Ысқақов"), text("A Rare Clinical Case in Outpatient Urology: Mondor's Disease", "Редкий клинический случай в амбулаторной урологии: болезнь Мондора", "Амбулаторлық урологиядағы сирек клиникалық жағдай: Мондор ауруы")),
      talk("17:20-17:30", text("Anuar Bazarbayev", "Базарбаев Ануар Алмасович", "Ануар Базарбаев"), text("Neurogenic Bladder Dysfunction in Children", "Нейрогенная дисфункция мочевого пузыря у детей", "Балалардағы қуықтың нейрогендік дисфункциясы")),
      talk("17:30-17:40", text("Amirkhan Telman", "Тельман Амирхан Канапьяулы", "Амирхан Тельман"), text("Endoscopic Correction of Vesicoureteral Reflux in Children", "Эндоскопическая коррекция пузырно-мочеточникового рефлюкса у детей", "Балалардағы қуық-несепағар рефлюксін эндоскопиялық түзету")),
      talk("17:40-17:50", text("Sagynbek Meldesh", "Мелдеш Сагынбек Ахметалиұлы", "Сағынбек Мелдеш"), text("Reconstructive Surgery for 46 XX DSD due to Congenital Adrenal Hyperplasia", "Реконструктивная хирургия при 46XX DSD вследствие врожденной гиперплазии надпочечников", "Туа біткен бүйрекүсті безі гиперплазиясына байланысты 46XX DSD кезіндегі реконструктивті хирургия")),
      talk("17:50-18:00", text("Bakhadyr Bereketov", "Берекетов Бахадыр Ахметұлы", "Баһадыр Берекетов"), text("Modern Surgical Technologies in the Treatment of Kidney Cancer with Renal Vein Tumor Thrombus", "Современные хирургические технологии в лечении рака почки с опухолевым тромбозом почечной вены", "Бүйрек венасының ісіктік тромбозы бар бүйрек обырын емдеудегі заманауи хирургиялық технологиялар")),
      talk("18:00-18:10", text("Azamat Abdikamal", "Абдикамал Азамат Мейірбекұлы", "Азамат Әбдікамал"), text("Robot-Assisted and Laparoscopic Surgery for Renal Tumors: Current Opportunities, Advantages and Limitations", "Робот-ассистированная и лапароскопическая хирургия опухолей почки: современные возможности, преимущества и ограничения", "Бүйрек ісіктеріндегі робот-ассистирленген және лапароскопиялық хирургия: қазіргі мүмкіндіктер, артықшылықтар және шектеулер")),
      talk("18:10-18:20", text("Asset Umirtayev", "Умиртаев Асет Олжасұлы", "Әсет Умиртаев"), text("Surgical Treatment of Prostate Cancer: Current Opportunities and Future Perspectives", "Хирургические методы лечения рака предстательной железы: современные возможности и перспективы", "Қуықасты безі обырын хирургиялық емдеу: қазіргі мүмкіндіктер және перспективалар")),
      talk("18:20-18:30", text("Award Ceremony", "Церемония награждения", "Марапаттау рәсімі"), text("Best Young Urologist Presentation Award", "Награждение за лучший доклад молодого уролога", "Жас урологтың үздік баяндамасы үшін марапат")),
      talk("18:30-18:40", text("Organizing Committee", "Организационный комитет", "Ұйымдастыру комитеті"), text("Official Closing Ceremony", "Официальное закрытие пленума", "Пленумның ресми жабылуы"))
    ]
  }
];

export const faculty = [
  {
    name: "Timur Muratov",
    ruName: "Муратов Тимур Муратович",
    kzName: "Мұратов Тимур Мұратұлы",
    role: text("Vice Minister of Healthcare of the Republic of Kazakhstan", "Вице-министр здравоохранения Республики Казахстан", "Қазақстан Республикасы Денсаулық сақтау вице-министрі"),
    city: text("Astana", "Астана", "Астана"),
    topic: text("Welcome remarks", "Приветственное слово", "Құттықтау сөзі"),
    group: "official"
  },
  {
    name: "Anar Turmukhambetova",
    ruName: "Турмухамбетова Анар Акылбековна",
    kzName: "Тұрмұхамбетова Анар Ақылбекқызы",
    role: text("Rector of Astana Medical University", "Ректор Медицинского университета Астана", "Астана медицина университетінің ректоры"),
    city: text("Astana", "Астана", "Астана"),
    topic: text("Academic welcome", "Академическое приветствие", "Академиялық құттықтау"),
    group: "official"
  },
  {
    name: "Ainur Tuleuova",
    ruName: "Тулеуова Айнур Сакеновна",
    kzName: "Төлеуова Айнұр Сәкенқызы",
    role: text("Head of Astana City Health Department", "Глава Управления здравоохранения г. Астана", "Астана қаласы Денсаулық сақтау басқармасының басшысы"),
    city: text("Astana", "Астана", "Астана"),
    topic: text("Healthcare leadership", "Развитие здравоохранения", "Денсаулық сақтауды дамыту"),
    group: "official"
  },
  {
    name: "Mirzakarim Alchinbayev",
    ruName: "Алчинбаев Мирзакарим Каримович",
    kzName: "Алчинбаев Мирзакарим Каримұлы",
    role: text("Chief Urologist of the Republic of Kazakhstan", "Главный уролог Республики Казахстан", "Қазақстан Республикасының бас урологы"),
    city: text("Kazakhstan", "Казахстан", "Қазақстан"),
    topic: text("Modern urology in Kazakhstan", "Современная урология Казахстана", "Қазақстандағы заманауи урология"),
    group: "kazakhstan"
  },
  ...[
    ["Chingis Baimenov", "Байменов Чингис Болатович", "Байменов Шыңғыс Болатұлы"],
    ["Khusan Umurzakov", "Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбайұлы"],
    ["Anvar Davranov", "Давранов Анвар Жангирович", "Давранов Анвар Жангирұлы"],
    ["Bulat Shalekenov", "Шалекенов Булат Уахитович", "Шалекенов Болат Уахитұлы"],
    ["Kasymkhan Sultanbekov", "Султанбеков Касымхан Адылханович", "Сұлтанбеков Қасымхан Әділханұлы"],
    ["Ardak Ainakulov", "Айнакулов Ардак Жаксылыкович", "Айнакулов Ардақ Жақсылықұлы"],
    ["Alimzhan Kalimkulov", "Калимкулов Алимжан Мейрамбекович", "Қалимқұлов Әлімжан Мейрамбекұлы"],
    ["Ali Talyshinskii", "Талышинский Али Эльманович", "Талышинский Али Эльманұлы"],
    ["Asylan Nurgaliyev", "Нургалиев Асылан Асылбекович", "Нұрғалиев Асылан Асылбекұлы"],
    ["Zhaslan Amirzhanov", "Амиржанов Жаслан Нурланович", "Әміржанов Жаслан Нұрланұлы"]
  ].map(([name, ruName, kzName]) => ({
    name,
    ruName,
    kzName,
    role: text("Kazakhstan Faculty / Moderator", "Казахстанский спикер / модератор", "Қазақстандық спикер / модератор"),
    city: text("Kazakhstan", "Казахстан", "Қазақстан"),
    topic: text("Scientific session", "Научная секция", "Ғылыми секция"),
    group: "kazakhstan" as const
  })),
  ...[
    ["Yongda Liu", "Yongda Liu", "Yongda Liu"],
    ["Kemal Sarica", "Kemal Sarica", "Kemal Sarica"],
    ["Evgeny Bezrukov", "Безруков Евгений Алексеевич", "Безруков Евгений Алексеевич"],
    ["Ege Can Serefoglu", "Ege Can Serefoglu", "Ege Can Serefoglu"],
    ["Gilvydas Verkauskas", "Gilvydas Verkauskas", "Gilvydas Verkauskas"],
    ["Wang Jianye", "Wang Jianye", "Wang Jianye"],
    ["Sam Ward", "Sam Ward", "Sam Ward"]
  ].map(([name, ruName, kzName]) => ({
    name,
    ruName,
    kzName,
    role: text("International Faculty", "Международный спикер", "Халықаралық спикер"),
    city: text("International", "Международный эксперт", "Халықаралық сарапшы"),
    topic: text("Specialty lecture / moderation", "Профильный доклад / модерация", "Бейінді баяндама / модерация"),
    group: "international" as const
  }))
] satisfies {
  name: string;
  ruName: string;
  kzName: string;
  role: LocalText;
  city: LocalText;
  topic: LocalText;
  group: Group;
}[];
