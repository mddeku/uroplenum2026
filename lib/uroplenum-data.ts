export type Lang = "en" | "ru" | "kz";
export type PageKey = "home" | "program" | "faculty" | "venue";

type LocalText = Record<Lang, string>;
type Group = "official" | "kazakhstan" | "international";

const programDictionary: Record<string, { en: string; kz: string }> = {
  "Registration": {
    en: "Registration",
    kz: "Тіркеу"
  },
  "Aspan Hall": {
    en: "Aspan Hall",
    kz: "«Аспан» залы"
  },
  "Closing Ceremony": {
    en: "Closing Ceremony",
    kz: "Жабылу рәсімі"
  },
  "Зал «Аспан»": {
    en: "Aspan Hall",
    kz: "«Аспан» залы"
  },
  "Зал «Шанырак»": {
    en: "Shanyrak Hall",
    kz: "«Шанырақ» залы"
  },
  "Официальное открытие и приветственные слова": {
    en: "Official Opening and Welcome Remarks",
    kz: "Ресми ашылу және құттықтау сөздер"
  },
  "Секция «Мужское Здоровье» 09:20 – 11:50": {
    en: "Men's Health Session",
    kz: "Ерлер денсаулығы секциясы"
  },
  "Секция «Детская урология» 11:50 – 13:20": {
    en: "Pediatric Urology Session",
    kz: "Балалар урологиясы секциясы"
  },
  "Секция «Онкоурология» 09:20 – 13:00": {
    en: "Uro-oncology Session",
    kz: "Онкоурология секциясы"
  },
  "Секция «Эндоурология» 14:00 – 17:30": {
    en: "Endourology Session",
    kz: "Эндоурология секциясы"
  },
  "Секция молодых урологов 15:10 – 17:30": {
    en: "Young Urologists Session",
    kz: "Жас урологтар секциясы"
  },
  "Регистрация и доступ в выставочную зону": {
    en: "Registration and access to the exhibition area",
    kz: "Тіркеу және көрме аймағына кіру"
  },
  "Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович": {
    en: "Timur Muratov, Vice Minister of Healthcare of the Republic of Kazakhstan",
    kz: "Тимур Мұратов, Қазақстан Республикасы Денсаулық сақтау вице-министрі"
  },
  "Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна": {
    en: "Anar Turmukhambetova, Rector of Astana Medical University",
    kz: "Анар Тұрмұхамбетова, Астана медицина университетінің ректоры"
  },
  "Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна": {
    en: "Ainur Tuleuova, Head of Astana City Health Department",
    kz: "Айнұр Төлеуова, Астана қаласы Денсаулық сақтау басқармасының басшысы"
  },
  "Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович": {
    en: "Mirzakarim Alchinbayev, Chief Urologist of the Republic of Kazakhstan",
    kz: "Мирзакарим Алчинбаев, Қазақстан Республикасының бас урологы"
  },
  "Мужское здоровье – междисциплинарный подход": {
    en: "Men's health: an interdisciplinary approach",
    kz: "Ерлер денсаулығы: пәнаралық тәсіл"
  },
  "Роль фитотерапии в комплексном лечении ДГПЖ": {
    en: "The role of phytotherapy in comprehensive BPH treatment",
    kz: "ҚБҚГ кешенді еміндегі фитотерапияның рөлі"
  },
  "Мужское бесплодие: новые и перспективные варианты лечения": {
    en: "Male infertility: new and promising treatment options",
    kz: "Ерлер бедеулігі: емдеудің жаңа және перспективалы нұсқалары"
  },
  "Регенеративная медицина": {
    en: "Regenerative medicine",
    kz: "Регенеративті медицина"
  },
  "Troubleshooting в имплантационной хирургии": {
    en: "Troubleshooting in implant surgery",
    kz: "Имплантациялық хирургиядағы күрделі жағдайларды шешу"
  },
  "Хирургическое лечение преждевременной эякуляции": {
    en: "Surgical treatment of premature ejaculation",
    kz: "Ерте эякуляцияны хирургиялық емдеу"
  },
  "Социальные сети и мужское здоровье": {
    en: "Social media and men's health",
    kz: "Әлеуметтік желілер және ерлер денсаулығы"
  },
  "Современный пациент с ДГПЖ": {
    en: "The modern patient with BPH",
    kz: "ҚБҚГ бар заманауи пациент"
  },
  "Современная диагностика мужского бесплодия": {
    en: "Modern diagnosis of male infertility",
    kz: "Ерлер бедеулігінің заманауи диагностикасы"
  },
  "Трансплантация почек у детей в аугментированный мочевой пузырь": {
    en: "Kidney transplantation in children into an augmented bladder",
    kz: "Балаларда аугментацияланған қуыққа бүйрек трансплантациясы"
  },
  "Гонадотропины и функция яичек у мальчиков с крипторхизмом": {
    en: "Gonadotropins and testicular function in boys with cryptorchidism",
    kz: "Крипторхизмі бар ұл балалардағы гонадотропиндер және аталық без функциясы"
  },
  "Choice of videosurgery technique for pyeloureteroplasty": {
    en: "Choice of videosurgery technique for pyeloureteroplasty",
    kz: "Пиелоуретеропластика үшін видеохирургия техникасын таңдау"
  },
  "Актуальная онкоурологическая ситуация за 2025 год по Республике Казахстан": {
    en: "Current uro-oncological situation in the Republic of Kazakhstan in 2025",
    kz: "Қазақстан Республикасындағы 2025 жылғы өзекті онкоурологиялық жағдай"
  },
  "Клиническая карта страны: пациенты с мГЧРПЖ": {
    en: "Country clinical map: patients with metastatic hormone-sensitive prostate cancer",
    kz: "Елдің клиникалық картасы: метастатикалық гормонға сезімтал қуықасты безі обыры бар пациенттер"
  },
  "Клинический случай г. Астана": {
    en: "Clinical case, Astana",
    kz: "Астана қаласындағы клиникалық жағдай"
  },
  "Клинический случай г. Караганда": {
    en: "Clinical case, Karaganda",
    kz: "Қарағанды қаласындағы клиникалық жағдай"
  },
  "Клинический случай г. Костанай": {
    en: "Clinical case, Kostanay",
    kz: "Қостанай қаласындағы клиникалық жағдай"
  },
  "Клинический случай г. Актау": {
    en: "Clinical case, Aktau",
    kz: "Ақтау қаласындағы клиникалық жағдай"
  },
  "Клинический случай г. Уральск": {
    en: "Clinical case, Uralsk",
    kz: "Орал қаласындағы клиникалық жағдай"
  },
  "Клинический случай г. Кызылорда": {
    en: "Clinical case, Kyzylorda",
    kz: "Қызылорда қаласындағы клиникалық жағдай"
  },
  "Сессия вопросов и ответов": {
    en: "Question and answer session",
    kz: "Сұрақ-жауап сессиясы"
  },
  "ПЕРЕРЫВ НА ОБЕД": {
    en: "Lunch break",
    kz: "Түскі үзіліс"
  },
  "Текущее состояние лечения доброкачественной гиперплазии предстательной железы в Китае": {
    en: "Current status of BPH treatment in China",
    kz: "Қытайдағы қуықасты безінің қатерсіз гиперплазиясын емдеудің қазіргі жағдайы"
  },
  "Осложнения ПНЛ: как предупредить и устранить?": {
    en: "PNL complications: how to prevent and manage them?",
    kz: "ПНЛ асқынулары: қалай алдын алып, жоюға болады?"
  },
  "Beyond IPSS: What Really Matters When Choosing a BPE Procedure?": {
    en: "Beyond IPSS: What Really Matters When Choosing a BPE Procedure?",
    kz: "IPSS-тен тыс: ҚБҚГ процедурасын таңдауда шын мәнінде не маңызды?"
  },
  "Узкая уретра и аденома простаты. Варианты решения проблемы?": {
    en: "Narrow urethra and prostate adenoma. What are the possible solutions?",
    kz: "Тар уретра және қуық асты безінің аденомасы. Мүмкін болатын шешімдер қандай?"
  },
  "Лечение сложных камней почек": {
    en: "How to manage complex renal stones?",
    kz: "Күрделі бүйрек тастарын емдеу"
  },
  "Актуальные аспекты неосложненной инфекции мочевых путей": {
    en: "Current aspects of uncomplicated urinary tract infection",
    kz: "Асқынбаған несеп жолдары инфекциясының өзекті аспектілері"
  },
  "Активная аспирация в лечении МКБ: эволюция методики": {
    en: "Active aspiration in urolithiasis treatment: evolution of the technique",
    kz: "Несеп-тас ауруын емдеудегі белсенді аспирация: әдістеменің эволюциясы"
  },
  "Новые технологии в амбулаторной урологии": {
    en: "New technologies in outpatient urology",
    kz: "Амбулаторлық урологиядағы жаңа технологиялар"
  },
  "Современные тенденции в лечении МКБ": {
    en: "Modern trends in urolithiasis treatment",
    kz: "Несеп-тас ауруын емдеудегі заманауи үрдістер"
  },
  "Когда начинать PARP ингибитор: сейчас или позже? Новые данные и нерешённые вопросы": {
    en: "When to start a PARP inhibitor: now or later? New data and unresolved questions",
    kz: "PARP тежегішін қашан бастау керек: қазір ме, кейін бе? Жаңа деректер және шешілмеген сұрақтар"
  },
  "Непростой цистит. Как повысить эффективность лечения?": {
    en: "Difficult cystitis: how to improve treatment effectiveness?",
    kz: "Күрделі цистит: ем тиімділігін қалай арттыруға болады?"
  },
  "Ретроградная интраренальная хирургия": {
    en: "Retrograde intrarenal surgery",
    kz: "Ретроградты интрареналдық хирургия"
  },
  "Нейрогенная дисфункция мочевого пузыря у детей": {
    en: "Neurogenic bladder dysfunction in children",
    kz: "Балалардағы қуықтың нейрогендік дисфункциясы"
  },
  "Общественное объединение «Мужское здоровье»: достижения и перспективы": {
    en: "Men's Health Public Association: achievements and prospects",
    kz: "«Ерлер денсаулығы» қоғамдық бірлестігі: жетістіктері мен перспективалары"
  },
  "Изменения уровня половых гормонов и параметров спермограммы при синдроме MOSH у мужчин с морбидным ожирением": {
    en: "Changes in sex hormone levels and spermogram parameters in MOSH syndrome in men with morbid obesity",
    kz: "Морбидті семіздігі бар ерлердегі MOSH синдромы кезінде жыныстық гормондар деңгейі мен спермограмма параметрлерінің өзгеруі"
  },
  "Супер мини-ПНЛТ и РИРХ у детей": {
    en: "Super mini-PCNL and RIRS in children",
    kz: "Балалардағы супер мини-ПНЛТ және РИРХ"
  },
  "Выбор методики видеохирургического вмешательства при пиелоуретеропластике": {
    en: "Choice of videosurgical technique for pyeloureteroplasty",
    kz: "Пиелоуретеропластика кезіндегі видеохирургиялық әдісті таңдау"
  },
  "За пределами IPSS: что на самом деле важно при выборе метода лечения ДГПЖ?": {
    en: "Beyond IPSS: what really matters when choosing a BPH treatment method?",
    kz: "IPSS-тен тыс: ҚБҚГ емдеу әдісін таңдауда шын мәнінде не маңызды?"
  },
  "Доказательная урология: цифровая логика преодоления фундаментальных пробелов": {
    en: "Evidence-based urology: digital logic for overcoming fundamental gaps",
    kz: "Дәлелді урология: іргелі олқылықтарды еңсерудің цифрлық логикасы"
  },
  "Современные аспекты диагностики и лечения СНМП": {
    en: "Modern aspects of diagnosis and treatment of lower urinary tract symptoms",
    kz: "Төменгі несеп жолдары симптомдарын диагностикалау және емдеудің заманауи аспектілері"
  },
  "Fluid Dynamics in Endourology: Why Flow Matters": {
    en: "Fluid Dynamics in Endourology: Why Flow Matters",
    kz: "Эндоурологиядағы сұйықтық динамикасы: ағын неге маңызды"
  },
  "Evolution of PCNL: Suction as an Essential Standard of Care": {
    en: "Evolution of PCNL: Suction as an Essential Standard of Care",
    kz: "PCNL эволюциясы: аспирация емдеудің маңызды стандарты ретінде"
  },
  "XX — не всегда женщина: клинический случай": {
    en: "XX is not always female: a clinical case",
    kz: "XX әрдайым әйел емес: клиникалық жағдай"
  },
  "Редкий клинический случай из амбулаторной урологии. Болезнь Мондора": {
    en: "A rare clinical case in outpatient urology: Mondor disease",
    kz: "Амбулаторлық урологиядағы сирек клиникалық жағдай: Мондор ауруы"
  },
  "Эндоскопическая коррекция пузырно-мочеточникового рефлюкса у детей": {
    en: "Endoscopic correction of vesicoureteral reflux in children",
    kz: "Балалардағы қуық-несепағар рефлюксін эндоскопиялық түзету"
  },
  "Реконструктивно-пластическая хирургия при 46XX DSD CAH": {
    en: "Reconstructive plastic surgery for 46XX DSD CAH",
    kz: "46XX DSD CAH кезіндегі реконструктивті-пластикалық хирургия"
  },
  "Современные хирургические технологии в лечении рака почки с опухолевым тромбозом почечной вены": {
    en: "Modern surgical technologies in the treatment of kidney cancer with renal vein tumor thrombosis",
    kz: "Бүйрек венасының ісіктік тромбозы бар бүйрек обырын емдеудегі заманауи хирургиялық технологиялар"
  },
  "Робот-ассистированная и лапароскопическая хирургия опухолей почки: современные возможности, преимущества и ограничения": {
    en: "Robot-assisted and laparoscopic surgery for kidney tumors: current capabilities, advantages and limitations",
    kz: "Бүйрек ісіктеріндегі робот-ассистентті және лапароскопиялық хирургия: қазіргі мүмкіндіктері, артықшылықтары және шектеулері"
  },
  "Хирургические методы лечения рака предстательной железы: современные возможности и перспективы": {
    en: "Surgical treatment methods for prostate cancer: current capabilities and prospects",
    kz: "Қуықасты безі обырын хирургиялық емдеу әдістері: қазіргі мүмкіндіктері мен перспективалары"
  },
  "Влияние анаболических андрогенных стероидов на сперматогенез в условиях растущего злоупотребления среди молодёжи и спортсменов": {
    en: "Impact of anabolic androgenic steroids on spermatogenesis amid increasing misuse among youth and athletes",
    kz: "Жастар мен спортшылар арасында қолданудың өсуі жағдайында анаболикалық андрогенді стероидтардың сперматогенезге әсері"
  },
  "Эффективность антибактериальной терапии хронического простатита с учетом мониторинга микробиологического пейзажа": {
    en: "Effectiveness of antibacterial therapy for chronic prostatitis with microbiological monitoring",
    kz: "Микробиологиялық көріністі мониторингтеу арқылы созылмалы простатиттің антибактериялық терапиясының тиімділігі"
  },
  "Erectile dysfunction as an early marker of cardiovascular diseases: literature review and clinical observations": {
    en: "Erectile dysfunction as an early marker of cardiovascular diseases: literature review and clinical observations",
    kz: "Эректильді дисфункция жүрек-қантамыр ауруларының ерте маркері ретінде: әдеби шолу және клиникалық бақылаулар"
  },
  "Алчинбаев Мырзакарим Каримович": { en: "Myrzakarim Alchinbayev", kz: "Алчинбаев Мырзакарим Каримович" },
  "Курмангалиев Олег Маратович": { en: "Oleg Kurmangaliev", kz: "Курмангалиев Олег Маратович" },
  "Кызласов Павел Сергеевич": { en: "Pavel Kyzlasov", kz: "Кызласов Павел Сергеевич" },
  "Шалекенов Булат Уахитович": { en: "Bulat Shalekenov", kz: "Шалекенов Булат Уахитович" },
  "Касымов Бахтияр Галыулы": { en: "Bakhtiyar Kasymov", kz: "Касымов Бахтияр Галыулы" },
  "Омарбаев Рустам Токенович": { en: "Rustam Omarbaev", kz: "Омарбаев Рустам Токенович" },
  "Нугманов Чингиз Аскарович": { en: "Chingiz Nugmanov", kz: "Нугманов Чингиз Аскарович" },
  "Даукенов Багдат Азимбаевич": { en: "Bagdat Daukenov", kz: "Даукенов Багдат Азимбаевич" },
  "Леонтьев Андриан Олегович": { en: "Andrian Leontyev", kz: "Леонтьев Андриан Олегович" },
  "Гульманов Еркебулан Манасович": { en: "Erkebulan Gulmanov", kz: "Гульманов Еркебулан Манасович" },
  "Конакбаев Ескендир Жандаралыевич": { en: "Eskendir Konakbaev", kz: "Конакбаев Ескендир Жандаралыевич" },
  "Айнакулов Ардак Джаксылыкович": { en: "Ardak Ainakulov", kz: "Айнакулов Ардак Джаксылыкович" },
  "Жанабек Асет": { en: "Aset Zhanabek", kz: "Жанабек Асет" },
  "Багитжанов Темирлан Женисович": { en: "Temirlan Bagitzhanov", kz: "Багитжанов Темирлан Женисович" },
  "Тасжуреков Аскар Онгарович": { en: "Askar Taszhurekov", kz: "Тасжуреков Аскар Онгарович" },
  "Калимкулов Алимжан Мейрамбекулы": { en: "Alimzhan Kalimkulov", kz: "Калимкулов Алимжан Мейрамбекулы" },
  "Сатанов Бауыржан Ермекович": { en: "Bauyrzhan Satanov", kz: "Сатанов Бауыржан Ермекович" },
  "Умурзаков Хусан Талипбаевич": { en: "Khusan Umurzakov", kz: "Умурзаков Хусан Талипбаевич" },
  "Нургалиев Нуржан Серикович": { en: "Nurzhan Nurgaliev", kz: "Нургалиев Нуржан Серикович" },
  "Омарбеков Арман Капарович": { en: "Arman Omarbekov", kz: "Омарбеков Арман Капарович" },
  "Божченко Дмитрий Александрович": { en: "Dmitry Bozhchenko", kz: "Божченко Дмитрий Александрович" },
  "Дисаенко Ксения Сергеевна": { en: "Ksenia Disaenko", kz: "Дисаенко Ксения Сергеевна" },
  "Ахметов Ернар Ерболатович": { en: "Ernar Akhmetov", kz: "Ахметов Ернар Ерболатович" },
  "Ирисматов Даврон Розматович": { en: "Davron Irismatov", kz: "Ирисматов Даврон Розматович" },
  "Кулмаханов Нурлыбек Бурибаевич": { en: "Nurlybek Kulmakhanov", kz: "Кулмаханов Нурлыбек Бурибаевич" },
  "Нургалиев НуржанСерикович": { en: "Nurzhan Nurgaliev", kz: "Нургалиев Нуржан Серикович" },
  "Аканов Азамат Ержанович": { en: "Azamat Akanov", kz: "Ақанов Азамат Ержанұлы" },
  "Дуйсенбинов Еркин Разаевич": { en: "Yerkin Duysenbinov", kz: "Дуйсенбинов Еркин Разаевич" },
  "Все участники": { en: "All participants", kz: "Барлық қатысушылар" },
  "Давранов Анвар Жангирович": { en: "Anvar Davranov", kz: "Давранов Анвар Жангирович" },
  "Оспанов Даулет Серикович": { en: "Daulet Ospanov", kz: "Оспанов Даулет Серикович" },
  "Казгалиев Мерей Талгатович": { en: "Merey Kazgaliev", kz: "Казгалиев Мерей Талгатович" },
  "Гасанов Зиё Бахшиевич": { en: "Ziyo Hasanov", kz: "Гасанов Зиё Бахшиевич" },
  "Закарья Олжас Мұратұлы": { en: "Oljas Zakarya", kz: "Закарья Олжас Мұратұлы" },
  "Хаирли Гафур Зинурович": { en: "Gafur Khairli", kz: "Хаирли Гафур Зинурович" },
  "Искаков Ербол Амангельдинович": { en: "Erbol Iskakov", kz: "Искаков Ербол Амангельдинович" },
  "Шадеркина Виктория Анатольевна": { en: "Victoria Shaderkina", kz: "Шадеркина Виктория Анатольевна" },
  "Байменов Чингис Булатович": { en: "Chingis Baymenov", kz: "Байменов Чингис Булатович" },
  "Талышинский Али Эльманович": { en: "Ali Talyshinskii", kz: "Талышинский Али Эльманович" },
  "Горелов Дмитрий Сергеевич": { en: "Dmitry Gorelov", kz: "Горелов Дмитрий Сергеевич" },
  "Амиржанов Жаслан Нурланович": { en: "Zhaslan Amirzhanov", kz: "Амиржанов Жаслан Нурланович" },
  "Жанбырбекулы Уланбек": { en: "Ulanbek Zhanbyrbekuly", kz: "Жанбырбекулы Уланбек" },
  "Шерханов Равиль Таирханович": { en: "Ravil Sherkhanov", kz: "Шерханов Равиль Таирханович" },
  "Байков Николай Александрович": { en: "Nikolay Baykov", kz: "Байков Николай Александрович" },
  "Али Станислав Хусейнович": { en: "Stanislav Ali", kz: "Али Станислав Хусейнович" },
  "Амдий Рефат Эльдарович": { en: "Refat Amdiy", kz: "Амдий Рефат Эльдарович" },
  "Калыкбаева Ардак": { en: "Ardak Kalykbaeva", kz: "Калыкбаева Ардак" },
  "Андреев Роман Юрьевич": { en: "Roman Andreev", kz: "Андреев Роман Юрьевич" },
  "Каримов Адиль Муслимович": { en: "Adil Karimov", kz: "Каримов Адиль Муслимович" },
  "Нургалиев Асылан Асылбекович": { en: "Asylan Nurgaliev", kz: "Нургалиев Асылан Асылбекович" },
  "Асанбек Даулет": { en: "Daulet Asanbek", kz: "Асанбек Даулет" },
  "Мухамбетов Еркебулан Жанатович": { en: "Yerkebulan Mukhambetov", kz: "Мухамбетов Еркебулан Жанатович" },
  "Абдалим Рабат Канатулы": { en: "Rabat Abdalim", kz: "Абдалим Рабат Канатулы" },
  "Абдрашитова Наиля Рафаильевна": { en: "Nailya Abdrashitova", kz: "Абдрашитова Наиля Рафаильевна" },
  "Искаков Ержан Асылбекович": { en: "Yerzhan Iskakov", kz: "Искаков Ержан Асылбекович" },
  "Базарбаев Ануар Алмасович": { en: "Anuar Bazarbayev", kz: "Базарбаев Ануар Алмасович" },
  "Тельман Амирхан Канапьяулы": { en: "Amirkhan Telman", kz: "Тельман Амирхан Канапьяулы" },
  "Мелдеш Сагынбек Ахметалиұлы": { en: "Sagynbek Meldesh", kz: "Мелдеш Сагынбек Ахметалиұлы" },
  "Берекетов Бахадыр Ахметұлы": { en: "Bakhadyr Bereketov", kz: "Берекетов Бахадыр Ахметұлы" },
  "Әбдікамал Азамат Мейірбекұлы": { en: "Azamat Abdikamal", kz: "Әбдікамал Азамат Мейірбекұлы" },
  "Умиртаев Асет Олжасуғли": { en: "Asset Umirtayev", kz: "Умиртаев Асет Олжасуғли" },
  "Остемиров Багдат Умирзақұлы": { en: "Bagdat Ostemirov", kz: "Остемиров Багдат Умирзақұлы" },
  "Саркулов Таир Маратович": { en: "Tair Sarkulov", kz: "Саркулов Таир Маратович" },
  "Рустем Бекарыс Рустемулы": { en: "Bekarys Rustem", kz: "Рустем Бекарыс Рустемулы" },
  "Сравнительная эффективность и безопасность интракавернозной PRP-терапии и аутологичных мезенхимальных стволовых клеток костного мозга у пациентов с умеренной и тяжелой эректильной дисфункцией": {
    en: "Comparative efficacy and safety of intracavernous PRP therapy and autologous bone marrow-derived mesenchymal stem cells in patients with moderate to severe erectile dysfunction",
    kz: "Орташа және ауыр эректильді дисфункциясы бар науқастарда кавернаішілік PRP терапиясының және аутологиялық сүйек кемігінен алынған мезенхималық бағаналы жасушалардың салыстырмалы тиімділігі мен қауіпсіздігі"
  },
  "Инновационный метод лечения ДГПЖ-REZUM. Обзор технологии и собственный опыт применения.": {
    en: "An innovative treatment method for BPH: REZUM. A review of the technology and our own experience.",
    kz: "ҚБГ емдеудің инновациялық әдісі: REZUM. Технологияға және біздің жеке тәжірибемізге шолу."
  },
  "Стриктуры уретры: роль различных вариантов укладки буккального графта и его значение для эффективности реконструкции": {
    en: "Urethral strictures: the role of different buccal graft placement options and its significance for the effectiveness of reconstruction",
    kz: "Несеп шығару жолдарының тарылуы: ауыз қуысына трансплантатты орналастырудың әртүрлі нұсқаларының рөлі және оның қалпына келтіру тиімділігі үшін маңызы"
  },
  "Гипоспадия у взрослых: реконструктивные, сексуальные, репродуктивные и психоэмоциональные аспекты нерешённой проблемы": {
    en: "Hypospadias in adults: reconstructive, sexual, reproductive and psycho-emotional aspects of an unresolved problem",
    kz: "Ересектердегі гипоспадия: шешілмеген мәселенің реконструктивті, жыныстық, репродуктивті және психоэмоционалды аспектілері"
  },
  "Результаты применения миниинвазивных эндовизуальных технологий в урологии детского возраста": {
    en: "Results of the application of minimally invasive endovisual technologies in pediatric urology",
    kz: "Балалар урологиясында минималды инвазивті эндовизуалды технологияларды қолдану нәтижелері"
  },
  "Дифференцированный подход хирургического лечения структурно функциональных изменений мочевого пузыря у детей": {
    en: "Differentiated approach to surgical treatment of structural and functional changes in the urinary bladder in children",
    kz: "Балалардағы қуықтың құрылымдық-функционалдық өзгерістерін хирургиялық емдеудің сараланған тәсілі"
  },
  "Хирургическое лечение детей с комплексом экстрофия эписпадия": {
    en: "Surgical management of children with exstrophy-epispadias complex",
    kz: "Экстрофия-эписпадия кешені бар балаларды хирургиялық емдеу"
  },
  "Дифференцированный подход лечения мочекаменной болезни у детей": {
    en: "Differentiated approach to the treatment of pediatric urolithiasis",
    kz: "Балалардағы несеп-тас ауруын емдеудің сараланған тәсілі"
  },
  "Обструктивные уропатии у детей – современный взгляд": {
    en: "Obstructive uropathies in children: a modern perspective",
    kz: "Балалардағы обструктивті уропатиялар: заманауи көзқарас"
  },
  "Место иммунотерапии в современной стратегии лечения уротелиальной карциномы": {
    en: "The place of immunotherapy in the modern strategy of treatment of urothelial carcinoma",
    kz: "Иммунотерапияның уротелеиальды карциноманы емдеудің заманауи стратегиясындағы орны"
  },
  "Хирургическое лечение двусторонних опухолей надпочечников": {
    en: "Surgical treatment of bilateral adrenal tumors",
    kz: "Бүйрек үсті безінің екі жақты ісіктерін хирургиялық емдеу"
  },
  "Персонализированная внутрипузырная терапия при неинвазивном раке мочевого пузыря на основе платформы с элементами ИИ.": {
    en: "Personalized intravesical therapy for noninvasive bladder cancer based on an AI platform",
    kz: "Инвазивті емес қуық обырына арналған жасанды интеллектпен күшейтілген платформаға негізделген жекелендірілген везикулярлық терапия"
  },
  "Органосохраняющие операции при раке почки": {
    en: "Organ-sparing operations for kidney cancer",
    kz: "Бүйрек қатерлі ісігіне арналған мүшені сақтайтын хирургия"
  },
  "Современные методы диагностики и лечения рака мочевого пузыря.": {
    en: "Modern methods of diagnosis and treatment of bladder cancer",
    kz: "Қуық асты безінің қатерлі ісігін диагностикалау және емдеудің заманауи әдістері"
  },
  "Тримодальная терапия при мышечно-инвазивном раке мочевого пузыря: опыт применения в реальной клинической практике КазНИИОиР": {
    en: "Trimodal therapy for MIBC: real-world clinical experience at the Kazakh Institute of Oncology and Radiology",
    kz: "Бұлшықет-инвазивті қуық обырын емдеудегі үшмодальды терапия: ҚазҚСҒЗИ нақты клиникалық тәжірибеде қолдану тәжірибесі"
  },
  "Современные стандарты лечения мКРРПЖ: интеграция данных ASCO, ESMO и EAU в клиническую практику": {
    en: "Current treatment standards for mCRPC: integration of ASCO, ESMO and EAU data into clinical practice",
    kz: "mCRPC емдеудің қазіргі стандарттары: ASCO, ESMO және EAU деректерін клиникалық тәжірибеге интеграциялау"
  },
  "PARP ингибирование при мКРРПЖ: данные TALAPRO-2 и актуальные обновления.": {
    en: "PARP inhibition in mCRPC: data from TALAPRO-2 and current updates",
    kz: "mCRPC-дегі PARP тежелуі: TALAPRO-2 деректері және жаңартулары"
  },
  "Персонализация терапии PARP: выбор пациентов и управление нежелательными явлениями в клинической практике.": {
    en: "Personalization of PARP therapy: patient selection and management of adverse events in clinical practice",
    kz: "PARP терапиясын дербестендіру: пациенттерді таңдау және клиникалық тәжірибеде жағымсыз құбылыстарды басқару"
  },
  "Портрет пациента для терапии талазопарибом: клинические и молекулярные критерии выбора": {
    en: "Patient profile for talazoparib therapy: clinical and molecular criteria for selection",
    kz: "Талазопариб терапиясына арналған пациенттің профилі: клиникалық және молекулалық іріктеу критерийлері"
  },
  "Наш опыт применения стентов «Allium» при стриктурах мочеточника и уретры: показания, техника и результаты": {
    en: "Our experience with the use of Allium stents for ureteral and urethral strictures: indications, technique and results",
    kz: "Несепағар мен уретральды стриктураларға арналған Allium стенттерін қолдану тәжірибеміз: көрсеткіштері, техникасы және нәтижелері"
  },
  "Клинические рекомендации и стандарты ведения пациентов с инфекцией нижних мочевых путей": {
    en: "Clinical guidelines and standards for the management of patients with lower urinary tract infection",
    kz: "Төменгі зәр шығару жолдарының инфекциясы бар науқастарды емдеуге арналған клиникалық нұсқаулар мен стандарттар"
  },
  "Анализ результатов применения техники en-bloc в лечении пациентов НМИ РМП.": {
    en: "Analysis of the results of using the en-bloc technique in the treatment of patients with NMIBC",
    kz: "БИЕҚІ бар пациенттерді емдеуде en-bloc техникасын қолдану нәтижелерін талдау"
  },
  "Снижение частоты рецидивирующих ИМП: возможности мукозальной иммунотерапии": {
    en: "Reducing the incidence of recurrent UTIs: the potential of mucosal immunotherapy",
    kz: "Қайталанатын несеп жолдары инфекцияларының жиілігін азайту: мукозальды иммунотерапия мүмкіндіктері"
  },
  "Рецидивирующие ИМП: неантибактериальные тренды в долгосрочной профилактике": {
    en: "Recurrent UTIs: non-antibiotic trends in long-term prevention",
    kz: "Қайталанатын НЖИ: ұзақ мерзімді профилактикадағы антибактериалды емес трендтер"
  },
  "Лазерная хирургия в урологии 2026: литотрипсия, ДГПЖ, опухоли": {
    en: "Laser surgery in urology 2026: lithotripsy, benign prostatic hyperplasia, tumors",
    kz: "Урологиядағы лазерлік хирургия 2026: литотрипсия, қатерсіз қуық асты безінің гиперплазиясы, ісіктер"
  },
  "Лапароскопия \\\"с нуля\\\": YouTube как личный ассистент хирурга. Личный опыт": {
    en: "Laparoscopy from scratch: YouTube as a surgeon's personal assistant. Personal experience",
    kz: "Нөлден бастап лапароскопия: Хирургтың жеке көмекшісі ретінде YouTube. Жеке тәжірибе"
  },
  "Сравнительная эффективность и безопасность мини ПНЛ при крупных и коралловидных камнях": {
    en: "Comparative efficacy and safety of mini-PNL for large and coral stones",
    kz: "Үлкен және маржан тастары үшін мини-PNL салыстырмалы тиімділігі мен қауіпсіздігі"
  },
  "Официальное закрытие": {
    en: "Official closing",
    kz: "Ресми жабылу"
  }
};

const cyrillicToLatin: Record<string, string> = {
  А: "A",
  а: "a",
  Ә: "A",
  ә: "a",
  Б: "B",
  б: "b",
  В: "V",
  в: "v",
  Г: "G",
  г: "g",
  Ғ: "G",
  ғ: "g",
  Д: "D",
  д: "d",
  Е: "E",
  е: "e",
  Ё: "Yo",
  ё: "yo",
  Ж: "Zh",
  ж: "zh",
  З: "Z",
  з: "z",
  И: "I",
  и: "i",
  І: "I",
  і: "i",
  Й: "Y",
  й: "y",
  К: "K",
  к: "k",
  Қ: "K",
  қ: "k",
  Л: "L",
  л: "l",
  М: "M",
  м: "m",
  Н: "N",
  н: "n",
  Ң: "N",
  ң: "n",
  О: "O",
  о: "o",
  Ө: "O",
  ө: "o",
  П: "P",
  п: "p",
  Р: "R",
  р: "r",
  С: "S",
  с: "s",
  Т: "T",
  т: "t",
  У: "U",
  у: "u",
  Ұ: "U",
  ұ: "u",
  Ү: "U",
  ү: "u",
  Ф: "F",
  ф: "f",
  Х: "Kh",
  х: "kh",
  Һ: "H",
  һ: "h",
  Ц: "Ts",
  ц: "ts",
  Ч: "Ch",
  ч: "ch",
  Ш: "Sh",
  ш: "sh",
  Щ: "Shch",
  щ: "shch",
  Ы: "Y",
  ы: "y",
  Э: "E",
  э: "e",
  Ю: "Yu",
  ю: "yu",
  Я: "Ya",
  я: "ya",
  Ь: "",
  ь: "",
  Ъ: "",
  ъ: ""
};

const hasCyrillic = (value: string) => /[А-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]/.test(value);

const transliterateProgramLabel = (value: string) =>
  value
    .split("")
    .map((letter) => cyrillicToLatin[letter] ?? letter)
    .join("");

export const localizeProgramLabel = (value: string, lang: Lang): string => {
  const translated = programDictionary[value];

  if (translated) {
    return lang === "en" ? translated.en : lang === "kz" ? translated.kz : value;
  }

  if (lang === "en" && hasCyrillic(value)) {
    return transliterateProgramLabel(value);
  }

  return value;
};

const text = (en: string, ru: string, kz: string): LocalText => {
  return {
    en: hasCyrillic(en) ? localizeProgramLabel(en, "en") : en,
    ru,
    kz: kz === ru ? localizeProgramLabel(ru, "kz") : kz
  };
};
const same = (value: string): LocalText => text(value, value, value);
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
  { src: "/sponsors/sponsor-4-aoqa.png", alt: "AOQa" },
  { src: "/sponsors/sponsor-2.png", alt: "Astana Urologists and Andrologists Society" },
  { src: "/sponsors/sponsor-ministry-health.webp", alt: "Ministry of Health of the Republic of Kazakhstan" },
  { src: "/sponsors/sponsor-astana-health.webp", alt: "Astana Public Health Department" }
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
    contactText: "Participant registration is open until July 2, 2026 at 12:00.",
    viewProgram: "View Program",
    meetFaculty: "Meet the Faculty",
    programTitle: "Scientific Program",
    programIntro: "",
    programNote: "Detailed schedule by hall, time, speaker and presentation topic.",
    dayOne: "July 3, 2026",
    dayTwo: "Program Tracks",
    facultyTitle: "Faculty and Invited Guests",
    facultyIntro: "Official guests, international speakers and Kazakhstan speakers participating in the plenum.",
    officialGuests: "Official Guests",
    kazakhstanFaculty: "Kazakhstan Faculty",
    internationalFaculty: "International Faculty",
    venueTitle: "QazExpoCongress Congress Center",
    venueIntro: "QazExpoCongress Congress Center, Astana. Address: 12 Heydar Aliyev Street.",
    venueAbout: "About the Venue",
    venueAboutText:
      "QazExpoCongress is a multifunctional congress venue in Astana with a main hall, conference halls and an exhibition lobby for plenary sessions, parallel sections and professional networking.",
    gettingThere: "How to Get There",
    gettingThereText: "Located at 12 Heydar Aliyev Street, the venue is accessible by city transport, taxi and organized congress transfers.",
    accommodation: "Accommodation",
    accommodationText: "Recommended hotel options and congress rates can be added after partner hotels are confirmed.",
    map: "2GIS Map",
    contact: "Contact",
    emailLabel: "Email",
    venueLabel: "Venue",
    liveCongress: "Live congress",
    menuToggle: "Open or close navigation",
    venueImageAlt: "QazExpoCongress Congress Center in Astana",
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
    contactText: "Регистрация участников открыта до 2 июля 2026 года, 12:00.",
    viewProgram: "Смотреть программу",
    meetFaculty: "Спикеры",
    programTitle: "Научная программа",
    programIntro: "",
    programNote: "Подробное расписание по залам, времени, спикерам и темам докладов.",
    dayOne: "3 июля 2026",
    dayTwo: "Треки программы",
    facultyTitle: "Спикеры и приглашенные гости",
    facultyIntro: "Официальные гости, международные и казахстанские спикеры пленума.",
    officialGuests: "Официальные гости",
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
    emailLabel: "Электронная почта",
    venueLabel: "Место проведения",
    liveCongress: "Пленум в цифрах",
    menuToggle: "Открыть или закрыть навигацию",
    venueImageAlt: "Конгресс-центр QazExpoCongress в Астане",
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
    contactText: "Қатысушыларды тіркеу 2026 жылғы 2 шілде сағат 12:00-ге дейін ашық.",
    viewProgram: "Бағдарламаны көру",
    meetFaculty: "Спикерлер",
    programTitle: "Ғылыми бағдарлама",
    programIntro: "",
    programNote: "Залдар, уақыт, спикерлер және баяндама тақырыптары бойынша толық кесте.",
    dayOne: "2026 жылғы 3 шілде",
    dayTwo: "Бағдарлама тректері",
    facultyTitle: "Спикерлер және шақырылған қонақтар",
    facultyIntro: "Пленумға қатысатын ресми қонақтар, халықаралық және қазақстандық спикерлер.",
    officialGuests: "Ресми қонақтар",
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
    emailLabel: "Электрондық пошта",
    venueLabel: "Өтетін орны",
    liveCongress: "Пленум көрсеткіштері",
    menuToggle: "Навигацияны ашу немесе жабу",
    venueImageAlt: "Астанадағы QazExpoCongress конгресс-орталығы",
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
    ["09:00-09:20", "Opening Ceremony", "Aspan Hall"],
    ["09:20-13:20", "Parallel sessions", "Aspan and Shanyrak Halls"],
    ["13:20-14:00", "Lunch break", "Lobby"],
    ["14:00-17:30", "Endourology / Uro-oncology / Young urologists", "Aspan and Shanyrak Halls"],
    ["17:30-18:00", "Awards and Closing Ceremony", "Aspan Hall"]
  ],
  ru: [
    ["08:00-09:00", "Регистрация", "Выставочная зона"],
    ["09:00-09:20", "Официальное открытие и приветственные слова", "Зал «Аспан»"],
    ["09:20-13:20", "Секция «Мужское Здоровье» 09:20 – 11:50 / Секция «Онкоурология» 09:20 – 13:00", "Зал «Аспан» / Зал «Шанырак»"],
    ["13:20-14:00", "Перерыв на обед", ""],
    ["14:00-17:30", "Секция «Эндоурология» 14:00 – 17:30 / Секция молодых урологов 15:10 – 17:20", "Зал «Аспан» / Зал «Шанырак»"],
    ["17:30-18:00", "Церемония закрытия", "Зал «Аспан»"]
  ],
  kz: [
    ["08:00-09:00", "Қатысушыларды тіркеу", "Көрме аймағы"],
    ["09:00-09:20", "Ресми ашылу және құттықтау сөздері", "«Аспан» залы"],
    ["09:20-13:20", "Ерлер денсаулығы секциясы 09:20 – 11:50 / Онкоурология секциясы 09:20 – 13:00", "«Аспан» залы / «Шанырақ» залы"],
    ["13:20-14:00", "Түскі асқа үзіліс", ""],
    ["14:00-17:30", "Эндоурология секциясы 14:00 – 17:30 / Жас урологтар секциясы 15:10 – 17:20", "«Аспан» залы / «Шанырақ» залы"],
    ["17:30-18:00", "Жабылу рәсімі", "«Аспан» залы"]
  ]
};

export const programDetails = [
  {
    time: "08:00-09:00",
    room: text("", "", ""),
    title: text("Participant Registration", "Регистрация", "Қатысушыларды тіркеу"),
    moderators: [],
    talks: [
      talk("08:00-09:00", text("Registration", "Регистрация", "Қатысушыларды тіркеу"), text("Registration", "Регистрация", "Қатысушыларды тіркеу"))
    ]
  },
  {
    time: "09:00-09:20",
    room: text("Aspan Hall", "Зал «Аспан»", "«Аспан» залы"),
    title: text("Official Opening and Welcome Remarks", "Официальное открытие и приветственные слова", "Ресми ашылу және құттықтау сөздері"),
    moderators: [],
    talks: [
      talk("09:00-09:20", text("Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович", "Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович", "Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович"), text("Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович", "Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович", "Вице-министр здравоохранения Республики Казахстан Муратов Тимур Муратович")),
      talk("09:00-09:20", text("Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна", "Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна", "Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна"), text("Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна", "Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна", "Ректор Медицинского университета Астана Турмухамбетова Анар Акылбековна")),
      talk("09:00-09:20", text("Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна", "Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна", "Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна"), text("Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна", "Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна", "Глава Управления Здравоохранения г. Астана Тулеуова Айнур Сакеновна")),
      talk("09:00-09:20", text("Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович", "Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович", "Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович"), text("Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович", "Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович", "Главный уролог Республики Казахстан Алчинбаев Мирзакарим Каримович")),
      talk(
        "09:00-09:20",
        text(
          "Official announcement of the establishment of the scientific-practical journal Journal of Urology and Andrology Research. Editors-in-chief: Professor Selcuk Guven and Professor Abduzhappar Gaipov, NUSOM",
          "Официальное объявление об учреждении научно-практического журнала «Journal of Urology and Andrology Research». Главные редакторы журнала: Selcuk Guven и Гаипов Абдужаппар Эркинович, профессор ШМНУ",
          "«Journal of Urology and Andrology Research» ғылыми-тәжірибелік журналының құрылуы туралы ресми хабарландыру. Журналдың бас редакторлары — профессор Selcuk Guven және NUSOM профессоры Гаипов Абдужаппар Эркинович"
        ),
        text(
          "Official announcement of the establishment of the scientific-practical journal Journal of Urology and Andrology Research. Editors-in-chief: Professor Selcuk Guven and Professor Abduzhappar Gaipov, NUSOM",
          "Официальное объявление об учреждении научно-практического журнала «Journal of Urology and Andrology Research». Главные редакторы журнала: Selcuk Guven и Гаипов Абдужаппар Эркинович, профессор ШМНУ",
          "«Journal of Urology and Andrology Research» ғылыми-тәжірибелік журналының құрылуы туралы ресми хабарландыру. Журналдың бас редакторлары — профессор Selcuk Guven және NUSOM профессоры Гаипов Абдужаппар Эркинович"
        )
      )
    ]
  },
  {
    time: "09:20-11:50",
    room: text("Зал «Аспан»", "Зал «Аспан»", "Зал «Аспан»"),
    title: text("Men's Health Session", "Секция «Мужское Здоровье» 09:20 – 11:50", "Секция «Мужское Здоровье» 09:20 – 11:50"),
    moderators: ["Алчинбаев Мырзакарим Каримович", "Курмангалиев Олег Маратович", "Ege Can Serefoglu", "Sam Ward"],
    talks: [
      talk("09:20–09:30", text("Алчинбаев Мырзакарим Каримович", "Алчинбаев Мырзакарим Каримович", "Алчинбаев Мырзакарим Каримович"), text("Мужское здоровье – междисциплинарный подход", "Мужское здоровье – междисциплинарный подход", "Мужское здоровье – междисциплинарный подход")),
      talk("09:30–09:40", text("Курмангалиев Олег Маратович", "Курмангалиев Олег Маратович", "Курмангалиев Олег Маратович"), text("Роль фитотерапии в комплексном лечении ДГПЖ", "Роль фитотерапии в комплексном лечении ДГПЖ", "Роль фитотерапии в комплексном лечении ДГПЖ")),
      talk("09:40–09:50", text("Ege Can Serefoglu", "Ege Can Serefoglu", "Ege Can Serefoglu"), text("Мужское бесплодие: новые и перспективные варианты лечения", "Мужское бесплодие: новые и перспективные варианты лечения", "Мужское бесплодие: новые и перспективные варианты лечения")),
      talk("09:50–10:00", text("Sam Ward", "Sam Ward", "Sam Ward"), text("Регенеративная медицина", "Регенеративная медицина", "Регенеративная медицина")),
      talk("10:00–10:10", text("Кызласов Павел Сергеевич", "Кызласов Павел Сергеевич", "Кызласов Павел Сергеевич"), text("Troubleshooting в имплантационной хирургии", "Troubleshooting в имплантационной хирургии", "Troubleshooting в имплантационной хирургии")),
      talk("10:10–10:20", text("Ege Can Serefoglu", "Ege Can Serefoglu", "Ege Can Serefoglu"), text("Хирургическое лечение преждевременной эякуляции", "Хирургическое лечение преждевременной эякуляции", "Хирургическое лечение преждевременной эякуляции")),
      talk("10:20–10:30", text("Шалекенов Булат Уахитович", "Шалекенов Булат Уахитович", "Шалекенов Булат Уахитович"), text("Общественное объединение «Мужское здоровье»: достижения и перспективы", "Общественное объединение «Мужское здоровье»: достижения и перспективы", "Общественное объединение «Мужское здоровье»: достижения и перспективы")),
      talk("10:30–10:40", text("Sam Ward", "Sam Ward", "Sam Ward"), text("Социальные сети и мужское здоровье", "Социальные сети и мужское здоровье", "Социальные сети и мужское здоровье")),
      talk("10:40–10:50", text("Касымов Бахтияр Галыулы", "Касымов Бахтияр Галыулы", "Касымов Бахтияр Галыулы"), text("Современный пациент с ДГПЖ", "Современный пациент с ДГПЖ", "Современный пациент с ДГПЖ")),
      talk("10:50–11:00", text("Омарбаев Рустам Токенович", "Омарбаев Рустам Токенович", "Омарбаев Рустам Токенович"), text("Сравнительная эффективность и безопасность интракавернозной PRP-терапии и аутологичных мезенхимальных стволовых клеток костного мозга у пациентов с умеренной и тяжелой эректильной дисфункцией", "Сравнительная эффективность и безопасность интракавернозной PRP-терапии и аутологичных мезенхимальных стволовых клеток костного мозга у пациентов с умеренной и тяжелой эректильной дисфункцией", "Сравнительная эффективность и безопасность интракавернозной PRP-терапии и аутологичных мезенхимальных стволовых клеток костного мозга у пациентов с умеренной и тяжелой эректильной дисфункцией")),
      talk("11:00–11:10", text("Нугманов Чингиз Аскарович", "Нугманов Чингиз Аскарович", "Нугманов Чингиз Аскарович"), text("Инновационный метод лечения ДГПЖ-REZUM. Обзор технологии и собственный опыт применения.", "Инновационный метод лечения ДГПЖ-REZUM. Обзор технологии и собственный опыт применения.", "Инновационный метод лечения ДГПЖ-REZUM. Обзор технологии и собственный опыт применения.")),
      talk("11:10–11:20", text("Даукенов Багдат Азимбаевич", "Даукенов Багдат Азимбаевич", "Даукенов Багдат Азимбаевич"), text("Стриктуры уретры: роль различных вариантов укладки буккального графта и его значение для эффективности реконструкции", "Стриктуры уретры: роль различных вариантов укладки буккального графта и его значение для эффективности реконструкции", "Стриктуры уретры: роль различных вариантов укладки буккального графта и его значение для эффективности реконструкции")),
      talk("11:20–11:30", text("Леонтьев Андриан Олегович", "Леонтьев Андриан Олегович", "Леонтьев Андриан Олегович"), text("Современная диагностика мужского бесплодия", "Современная диагностика мужского бесплодия", "Современная диагностика мужского бесплодия")),
      talk("11:30–11:40", text("Гульманов Еркебулан Манасович", "Гульманов Еркебулан Манасович", "Гульманов Еркебулан Манасович"), text("Гипоспадия у взрослых: реконструктивные, сексуальные, репродуктивные и психоэмоциональные аспекты нерешённой проблемы", "Гипоспадия у взрослых: реконструктивные, сексуальные, репродуктивные и психоэмоциональные аспекты нерешённой проблемы", "Гипоспадия у взрослых: реконструктивные, сексуальные, репродуктивные и психоэмоциональные аспекты нерешённой проблемы")),
      talk("11:40–11:50", text("Конакбаев Ескендир Жандаралыевич", "Конакбаев Ескендир Жандаралыевич", "Конакбаев Ескендир Жандаралыевич"), text("Изменения уровня половых гормонов и параметров спермограммы при синдроме MOSH у мужчин с морбидным ожирением", "Изменения уровня половых гормонов и параметров спермограммы при синдроме MOSH у мужчин с морбидным ожирением", "Изменения уровня половых гормонов и параметров спермограммы при синдроме MOSH у мужчин с морбидным ожирением"))
    ]
  },
  {
    time: "11:50-13:20",
    room: text("Зал «Аспан»", "Зал «Аспан»", "Зал «Аспан»"),
    title: text("Pediatric Urology Session", "Секция «Детская урология» 11:50 – 13:20", "Секция «Детская урология» 11:50 – 13:20"),
    moderators: ["Айнакулов Ардак Джаксылыкович", "Gilvydas Verkauskas", "Калимкулов Алимжан Мейрамбекович", "Mavlyanov Farkhod"],
    talks: [
      talk("11:50–12:00", text("Айнакулов Ардак Джаксылыкович", "Айнакулов Ардак Джаксылыкович", "Айнакулов Ардак Джаксылыкович"), text("Трансплантация почек у детей в аугментированный мочевой пузырь", "Трансплантация почек у детей в аугментированный мочевой пузырь", "Трансплантация почек у детей в аугментированный мочевой пузырь")),
      talk("12:00–12:10", text("Gilvydas Verkauskas", "Gilvydas Verkauskas", "Gilvydas Verkauskas"), text("Гонадотропины и функция яичек у мальчиков с крипторхизмом", "Гонадотропины и функция яичек у мальчиков с крипторхизмом", "Гонадотропины и функция яичек у мальчиков с крипторхизмом")),
      talk("12:10–12:20", text("Жанабек Асет", "Жанабек Асет", "Жанабек Асет"), text("Супер мини-ПНЛТ и РИРХ у детей", "Супер мини-ПНЛТ и РИРХ у детей", "Супер мини-ПНЛТ и РИРХ у детей")),
      talk("12:20–12:30", text("Mavlyanov Farkhod", "Mavlyanov Farkhod", "Mavlyanov Farkhod"), text("Результаты применения миниинвазивных эндовизуальных технологий в урологии детского возраста", "Результаты применения миниинвазивных эндовизуальных технологий в урологии детского возраста", "Результаты применения миниинвазивных эндовизуальных технологий в урологии детского возраста")),
      talk("12:30–12:40", text("Gilvydas Verkauskas", "Gilvydas Verkauskas", "Gilvydas Verkauskas"), text("Выбор методики видеохирургического вмешательства при пиелоуретеропластике", "Выбор методики видеохирургического вмешательства при пиелоуретеропластике", "Выбор методики видеохирургического вмешательства при пиелоуретеропластике")),
      talk("12:40–12:50", text("Багитжанов Темирлан Женисович", "Багитжанов Темирлан Женисович", "Багитжанов Темирлан Женисович"), text("Дифференцированный подход хирургического лечения структурно функциональных изменений мочевого пузыря у детей", "Дифференцированный подход хирургического лечения структурно функциональных изменений мочевого пузыря у детей", "Дифференцированный подход хирургического лечения структурно функциональных изменений мочевого пузыря у детей")),
      talk("12:50–13:00", text("Тасжуреков Аскар Онгарович", "Тасжуреков Аскар Онгарович", "Тасжуреков Аскар Онгарович"), text("Хирургическое лечение детей с комплексом экстрофия эписпадия", "Хирургическое лечение детей с комплексом экстрофия эписпадия", "Хирургическое лечение детей с комплексом экстрофия эписпадия")),
      talk("13:00–13:10", text("Калимкулов Алимжан Мейрамбекулы", "Калимкулов Алимжан Мейрамбекулы", "Калимкулов Алимжан Мейрамбекулы"), text("Дифференцированный подход лечения мочекаменной болезни у детей", "Дифференцированный подход лечения мочекаменной болезни у детей", "Дифференцированный подход лечения мочекаменной болезни у детей")),
      talk("13:10–13:20", text("Сатанов Бауыржан Ермекович", "Сатанов Бауыржан Ермекович", "Сатанов Бауыржан Ермекович"), text("Обструктивные уропатии у детей – современный взгляд", "Обструктивные уропатии у детей – современный взгляд", "Обструктивные уропатии у детей – современный взгляд"))
    ]
  },
  {
    time: "09:20-15:10",
    room: text("Зал «Шанырак»", "Зал «Шанырак»", "Зал «Шанырак»"),
    title: text("Uro-oncology Session", "Секция «Онкоурология» 09:20 – 13:00", "Секция «Онкоурология» 09:20 – 13:00"),
    moderators: ["Умурзаков Хусан Талипбаевич", "Нургалиев Нуржан Серикович"],
    talks: [
      talk("09:20–09:30", text("Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбаевич"), text("Актуальная онкоурологическая ситуация за 2025 год по Республике Казахстан", "Актуальная онкоурологическая ситуация за 2025 год по Республике Казахстан", "Актуальная онкоурологическая ситуация за 2025 год по Республике Казахстан")),
      talk("09:30–09:45", text("Омарбеков Арман Капарович", "Омарбеков Арман Капарович", "Омарбеков Арман Капарович"), text("Клинический случай г. Астана", "Клинический случай г. Астана", "Клинический случай г. Астана")),
      talk("09:45–10:00", text("Божченко Дмитрий Александрович", "Божченко Дмитрий Александрович", "Божченко Дмитрий Александрович"), text("Клинический случай г. Караганда", "Клинический случай г. Караганда", "Клинический случай г. Караганда")),
      talk("10:00–10:15", text("Дисаенко Ксения Сергеевна", "Дисаенко Ксения Сергеевна", "Дисаенко Ксения Сергеевна"), text("Клинический случай г. Костанай", "Клинический случай г. Костанай", "Клинический случай г. Костанай")),
      talk("10:15–11:00", text("Ахметов Ернар Ерболатович", "Ахметов Ернар Ерболатович", "Ахметов Ернар Ерболатович"), text("Клинический случай г. Актау", "Клинический случай г. Актау", "Клинический случай г. Актау")),
      talk("11:00–11:15", text("Ирисматов Даврон Розматович", "Ирисматов Даврон Розматович", "Ирисматов Даврон Розматович"), text("Клинический случай г. Уральск", "Клинический случай г. Уральск", "Клинический случай г. Уральск")),
      talk("11:15–11:30", text("Кулмаханов Нурлыбек Бурибаевич", "Кулмаханов Нурлыбек Бурибаевич", "Кулмаханов Нурлыбек Бурибаевич"), text("Клинический случай г. Кызылорда", "Клинический случай г. Кызылорда", "Клинический случай г. Кызылорда")),
      talk("11:30–11:45", text("Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбаевич"), text("Современные стандарты лечения мКРРПЖ: интеграция данных ASCO, ESMO и EAU в клиническую практику", "Современные стандарты лечения мКРРПЖ: интеграция данных ASCO, ESMO и EAU в клиническую практику", "Современные стандарты лечения мКРРПЖ: интеграция данных ASCO, ESMO и EAU в клиническую практику")),
      talk("11:45–12:00", text("Нургалиев НуржанСерикович", "Нургалиев НуржанСерикович", "Нургалиев НуржанСерикович"), text("PARP ингибирование при мКРРПЖ: данные TALAPRO-2 и актуальные обновления.", "PARP ингибирование при мКРРПЖ: данные TALAPRO-2 и актуальные обновления.", "PARP ингибирование при мКРРПЖ: данные TALAPRO-2 и актуальные обновления.")),
      talk("12:00–12:15", text("Дисаенко Ксения Сергеевна", "Дисаенко Ксения Сергеевна", "Дисаенко Ксения Сергеевна"), text("Персонализация терапии PARP: выбор пациентов и управление нежелательными явлениями в клинической практике.", "Персонализация терапии PARP: выбор пациентов и управление нежелательными явлениями в клинической практике.", "Персонализация терапии PARP: выбор пациентов и управление нежелательными явлениями в клинической практике.")),
      talk("12:15–12:30", text("Аканов Азамат Ержанович", "Аканов Азамат Ержанович", "Ақанов Азамат Ержанұлы"), text("Портрет пациента для терапии талазопарибом: клинические и молекулярные критерии выбора", "Портрет пациента для терапии талазопарибом: клинические и молекулярные критерии выбора", "Портрет пациента для терапии талазопарибом: клинические и молекулярные критерии выбора")),
      talk("12:30–12:45", text("Дуйсенбинов Еркин Разаевич", "Дуйсенбинов Еркин Разаевич", "Дуйсенбинов Еркин Разаевич"), text("Когда начинать PARP ингибитор: сейчас или позже? Новые данные и нерешённые вопросы", "Когда начинать PARP ингибитор: сейчас или позже? Новые данные и нерешённые вопросы", "Когда начинать PARP ингибитор: сейчас или позже? Новые данные и нерешённые вопросы")),
      talk("12:45–13:00", text("Все участники", "Все участники", "Все участники"), text("Сессия вопросов и ответов", "Сессия вопросов и ответов", "Сессия вопросов и ответов")),
      talk("13:20–14:00", text("ПЕРЕРЫВ НА ОБЕД", "ПЕРЕРЫВ НА ОБЕД", "ПЕРЕРЫВ НА ОБЕД"), text("ПЕРЕРЫВ НА ОБЕД", "ПЕРЕРЫВ НА ОБЕД", "ПЕРЕРЫВ НА ОБЕД")),
      talk("14:00–14:20", text("Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбаевич"), text("Место иммунотерапии в современной стратегии лечения уротелиальной карциномы", "Место иммунотерапии в современной стратегии лечения уротелиальной карциномы", "Место иммунотерапии в современной стратегии лечения уротелиальной карциномы")),
      talk("14:20–14:30", text("Давранов Анвар Жангирович", "Давранов Анвар Жангирович", "Давранов Анвар Жангирович"), text("Хирургическое лечение двусторонних опухолей надпочечников", "Хирургическое лечение двусторонних опухолей надпочечников", "Хирургическое лечение двусторонних опухолей надпочечников")),
      talk("14:30–14:40", text("Оспанов Даулет Серикович", "Оспанов Даулет Серикович", "Оспанов Даулет Серикович"), text("Персонализированная внутрипузырная терапия при неинвазивном раке мочевого пузыря на основе платформы с элементами ИИ.", "Персонализированная внутрипузырная терапия при неинвазивном раке мочевого пузыря на основе платформы с элементами ИИ.", "Персонализированная внутрипузырная терапия при неинвазивном раке мочевого пузыря на основе платформы с элементами ИИ.")),
      talk("14:40–14:50", text("Казгалиев Мерей Талгатович", "Казгалиев Мерей Талгатович", "Казгалиев Мерей Талгатович"), text("Органосохраняющие операции при раке почки", "Органосохраняющие операции при раке почки", "Органосохраняющие операции при раке почки")),
      talk("14:50–15:00", text("Гасанов Зиё Бахшиевич", "Гасанов Зиё Бахшиевич", "Гасанов Зиё Бахшиевич"), text("Современные методы диагностики и лечения рака мочевого пузыря.", "Современные методы диагностики и лечения рака мочевого пузыря.", "Современные методы диагностики и лечения рака мочевого пузыря.")),
      talk("15:00–15:10", text("Закарья Олжас Мұратұлы", "Закарья Олжас Мұратұлы", "Закарья Олжас Мұратұлы"), text("Тримодальная терапия при мышечно-инвазивном раке мочевого пузыря: опыт применения в реальной клинической практике КазНИИОиР", "Тримодальная терапия при мышечно-инвазивном раке мочевого пузыря: опыт применения в реальной клинической практике КазНИИОиР", "Тримодальная терапия при мышечно-инвазивном раке мочевого пузыря: опыт применения в реальной клинической практике КазНИИОиР"))
    ]
  },
  {
    time: "14:00-17:30",
    room: text("Зал «Аспан»", "Зал «Аспан»", "Зал «Аспан»"),
    title: text("Endourology Session", "Секция «Эндоурология» 14:00 – 17:30", "Секция «Эндоурология» 14:00 – 17:30"),
    moderators: ["Kemal Sarica", "Хаирли Гафур Зинурович", "Yongda Liu", "Али Станислав Хусейнович"],
    talks: [
      talk("14:00–14:10", text("Wang Jianye", "Wang Jianye", "Wang Jianye"), text("Текущее состояние лечения доброкачественной гиперплазии предстательной железы в Китае", "Текущее состояние лечения доброкачественной гиперплазии предстательной железы в Китае", "Текущее состояние лечения доброкачественной гиперплазии предстательной железы в Китае")),
      talk("14:10–14:20", text("Kemal Sarica", "Kemal Sarica", "Kemal Sarica"), text("Осложнения ПНЛ: как предупредить и устранить?", "Осложнения ПНЛ: как предупредить и устранить?", "Осложнения ПНЛ: как предупредить и устранить?")),
      talk("14:20–14:30", text("Selcuk Guven", "Selcuk Guven", "Selcuk Guven"), text("Beyond IPSS: what really matters when choosing a BPH treatment method?", "За пределами IPSS: что на самом деле важно при выборе метода лечения ДГПЖ?", "IPSS-тен тыс: ҚБҚГ емдеу әдісін таңдауда шын мәнінде не маңызды?")),
      talk("14:30–14:40", text("Искаков Ербол Амангельдинович", "Искаков Ербол Амангельдинович", "Искаков Ербол Амангельдинович"), text("Наш опыт применения стентов «Allium» при стриктурах мочеточника и уретры: показания, техника и результаты", "Наш опыт применения стентов «Allium» при стриктурах мочеточника и уретры: показания, техника и результаты", "Наш опыт применения стентов «Allium» при стриктурах мочеточника и уретры: показания, техника и результаты")),
      talk("14:40–14:50", text("Yongda Liu", "Yongda Liu", "Yongda Liu"), text("Лечение сложных камней почек", "Лечение сложных камней почек", "Лечение сложных камней почек")),
      talk("14:50–15:00", text("Шадеркина Виктория Анатольевна", "Шадеркина Виктория Анатольевна", "Шадеркина Виктория Анатольевна"), text("Новые технологии в амбулаторной урологии", "Новые технологии в амбулаторной урологии", "Новые технологии в амбулаторной урологии")),
      talk("15:00–15:10", text("Байменов Чингис Булатович", "Байменов Чингис Булатович", "Байменов Чингис Булатович"), text("Актуальные аспекты неосложненной инфекции мочевых путей", "Актуальные аспекты неосложненной инфекции мочевых путей", "Актуальные аспекты неосложненной инфекции мочевых путей")),
      talk("15:10–15:20", text("Талышинский Али Эльманович", "Талышинский Али Эльманович", "Талышинский Али Эльманович"), text("Доказательная урология: цифровая логика преодоления фундаментальных пробелов", "Доказательная урология: цифровая логика преодоления фундаментальных пробелов", "Доказательная урология: цифровая логика преодоления фундаментальных пробелов")),
      talk("15:20–15:30", text("Горелов Дмитрий Сергеевич", "Горелов Дмитрий Сергеевич", "Горелов Дмитрий Сергеевич"), text("Активная аспирация в лечении МКБ: эволюция методики", "Активная аспирация в лечении МКБ: эволюция методики", "Активная аспирация в лечении МКБ: эволюция методики")),
      talk("15:30–15:40", text("Амиржанов Жаслан Нурланович", "Амиржанов Жаслан Нурланович", "Амиржанов Жаслан Нурланович"), text("Клинические рекомендации и стандарты ведения пациентов с инфекцией нижних мочевых путей", "Клинические рекомендации и стандарты ведения пациентов с инфекцией нижних мочевых путей", "Клинические рекомендации и стандарты ведения пациентов с инфекцией нижних мочевых путей")),
      talk("15:40–15:50", text("Жанбырбекулы Уланбек", "Жанбырбекулы Уланбек", "Жанбырбекулы Уланбек"), text("Узкая уретра и аденома простаты. Варианты решения проблемы?", "Узкая уретра и аденома простаты. Варианты решения проблемы?", "Узкая уретра и аденома простаты. Варианты решения проблемы?")),
      talk("15:50–16:00", text("Шерханов Равиль Таирханович", "Шерханов Равиль Таирханович", "Шерханов Равиль Таирханович"), text("Современные аспекты диагностики и лечения СНМП", "Современные аспекты диагностики и лечения СНМП", "Современные аспекты диагностики и лечения СНМП")),
      talk("16:00–16:10", text("Байков Николай Александрович", "Байков Николай Александрович", "Байков Николай Александрович"), text("Анализ результатов применения техники en-bloc в лечении пациентов НМИ РМП.", "Анализ результатов применения техники en-bloc в лечении пациентов НМИ РМП.", "Анализ результатов применения техники en-bloc в лечении пациентов НМИ РМП.")),
      talk("16:10–16:20", text("Али Станислав Хусейнович", "Али Станислав Хусейнович", "Али Станислав Хусейнович"), text("Современные тенденции в лечении МКБ", "Современные тенденции в лечении МКБ", "Современные тенденции в лечении МКБ")),
      talk("16:20–16:30", text("Амдий Рефат Эльдарович", "Амдий Рефат Эльдарович", "Амдий Рефат Эльдарович"), text("Непростой цистит. Как повысить эффективность лечения?", "Непростой цистит. Как повысить эффективность лечения?", "Непростой цистит. Как повысить эффективность лечения?")),
      talk("16:30–16:40", text("Калыкбаева Ардак", "Калыкбаева Ардак", "Калыкбаева Ардак"), text("Снижение частоты рецидивирующих ИМП: возможности мукозальной иммунотерапии", "Снижение частоты рецидивирующих ИМП: возможности мукозальной иммунотерапии", "Снижение частоты рецидивирующих ИМП: возможности мукозальной иммунотерапии")),
      talk("16:40–16:50", text("Касымов Бахтияр Галыулы", "Касымов Бахтияр Галыулы", "Касымов Бахтияр Галыулы"), text("Рецидивирующие ИМП: неантибактериальные тренды в долгосрочной профилактике", "Рецидивирующие ИМП: неантибактериальные тренды в долгосрочной профилактике", "Рецидивирующие ИМП: неантибактериальные тренды в долгосрочной профилактике")),
      talk("16:50–17:00", text("Андреев Роман Юрьевич", "Андреев Роман Юрьевич", "Андреев Роман Юрьевич"), text("Лазерная хирургия в урологии 2026: литотрипсия, ДГПЖ, опухоли", "Лазерная хирургия в урологии 2026: литотрипсия, ДГПЖ, опухоли", "Лазерная хирургия в урологии 2026: литотрипсия, ДГПЖ, опухоли")),
      talk("17:00–17:10", text("Каримов Адиль Муслимович", "Каримов Адиль Муслимович", "Каримов Адиль Муслимович"), text("Лапароскопия \\\"с нуля\\\": YouTube как личный ассистент хирурга. Личный опыт", "Лапароскопия \\\"с нуля\\\": YouTube как личный ассистент хирурга. Личный опыт", "Лапароскопия \\\"с нуля\\\": YouTube как личный ассистент хирурга. Личный опыт")),
      talk("17:10–17:20", text("Нургалиев Асылан Асылбекович", "Нургалиев Асылан Асылбекович", "Нургалиев Асылан Асылбекович"), text("Ретроградная интраренальная хирургия", "Ретроградная интраренальная хирургия", "Ретроградная интраренальная хирургия")),
      talk("17:20–17:30", text("Асанбек Даулет", "Асанбек Даулет", "Асанбек Даулет"), text("Сравнительная эффективность и безопасность мини ПНЛ при крупных и коралловидных камнях", "Сравнительная эффективность и безопасность мини ПНЛ при крупных и коралловидных камнях", "Сравнительная эффективность и безопасность мини ПНЛ при крупных и коралловидных камнях"))
    ]
  },
  {
    time: "15:10-17:20",
    room: text("Зал «Шанырак»", "Зал «Шанырак»", "Зал «Шанырак»"),
    title: text("Young Urologists Session", "Секция молодых урологов 15:10 – 17:20", "Жас урологтар секциясы 15:10 – 17:20"),
    moderatorLabel: text("Jury", "Жюри", "Қазылар алқасы"),
    moderators: ["Wang Jianye", "Kemal Sarica", "Yongda Liu", "Selcuk Guven", "Шадеркина Виктория Анатольевна", "Шалекенов Булат Уахитович"],
    note: text("Format: 14 presentations - 7 minutes per presentation + 3 minutes for questions", "Формат: 14 докладов - 7 минут на выступление + 3 минуты на вопросы", "Форматы: 14 презентация - әр презентацияға 7 минут + сұрақтарға 3 минут"),
    talks: [
      talk("15:10–15:20", text("Мухамбетов Еркебулан Жанатович", "Мухамбетов Еркебулан Жанатович", "Мухамбетов Еркебулан Жанатович"), text("Fluid Dynamics in Endourology: Why Flow Matters", "Гидродинамика в эндоурологии: Почему важен поток жидкости", "Эндоурологиядағы сұйықтық динамикасы: Неліктен ағын маңызды")),
      talk("15:20–15:30", text("Абдалим Рабат Канатулы", "Абдалим Рабат Канатулы", "Абдалим Рабат Канатулы"), text("Evolution of PCNL: Suction as an Essential Standard of Care", "Эволюция чрескожной нефролитотомии: аспирация как важнейший стандарт лечения", "PCNL эволюциясы: сору күтімнің маңызды стандарты ретінде")),
      talk("15:30–15:40", text("Абдрашитова Наиля Рафаильевна", "Абдрашитова Наиля Рафаильевна", "Абдрашитова Наиля Рафаильевна"), text("XX is not always female: a clinical case", "XX — не всегда женщина: клинический случай", "XX әрқашан әйел емес: клиникалық жағдай")),
      talk("15:40–15:50", text("Искаков Ержан Асылбекович", "Искаков Ержан Асылбекович", "Искаков Ержан Асылбекович"), text("A rare clinical case in outpatient urology: Mondor disease", "Редкий клинический случай из амбулаторной урологии. Болезнь Мондора", "Амбулаториялық урологиядан сирек кездесетін клиникалық жағдай. Мондор ауруы")),
      talk("15:50–16:00", text("Базарбаев Ануар Алмасович", "Базарбаев Ануар Алмасович", "Базарбаев Ануар Алмасович"), text("Neurogenic bladder dysfunction in children", "Нейрогенная дисфункция мочевого пузыря у детей", "Балалардағы қуықтың нейрогендік дисфункциясы")),
      talk("16:00–16:10", text("Тельман Амирхан Канапьяулы", "Тельман Амирхан Канапьяулы", "Тельман Амирхан Канапьяулы"), text("Endoscopic correction of vesicoureteral reflux in children", "Эндоскопическая коррекция пузырно-мочеточникового рефлюкса у детей", "Балалардағы везикоуретральды рефлюксті эндоскопиялық түзету")),
      talk("16:10–16:20", text("Мелдеш Сагынбек Ахметалиұлы", "Мелдеш Сагынбек Ахметалиұлы", "Мелдеш Сагынбек Ахметалиұлы"), text("Reconstructive plastic surgery for 46XX DSD CAH", "Реконструктивно-пластическая хирургия при 46XX DSD CAH", "46XX DSD CAH үшін реконструктивті пластикалық хирургия")),
      talk("16:20–16:30", text("Берекетов Бахадыр Ахметұлы", "Берекетов Бахадыр Ахметұлы", "Берекетов Бахадыр Ахметұлы"), text("Modern surgical technologies in the treatment of kidney cancer with renal vein tumor thrombosis", "Современные хирургические технологии в лечении рака почки с опухолевым тромбозом почечной вены", "Бүйрек венасының ісік тромбозымен бірге бүйрек қатерлі ісігін емдеудегі заманауи хирургиялық технологиялар")),
      talk("16:30–16:40", text("Әбдікамал Азамат Мейірбекұлы", "Әбдікамал Азамат Мейірбекұлы", "Әбдікамал Азамат Мейірбекұлы"), text("Robot-assisted and laparoscopic surgery for kidney tumors: current capabilities, advantages and limitations", "Робот-ассистированная и лапароскопическая хирургия опухолей почки: современные возможности, преимущества и ограничения", "Бүйрек ісіктерінің робот көмегімен және лапароскопиялық хирургиясы: қазіргі мүмкіндіктері, артықшылықтары мен шектеулері")),
      talk("16:40–16:50", text("Умиртаев Асет Олжасуғли", "Умиртаев Асет Олжасуғли", "Умиртаев Асет Олжасуғли"), text("Surgical treatment methods for prostate cancer: current capabilities and prospects", "Хирургические методы лечения рака предстательной железы: современные возможности и перспективы", "Қуық асты безі қатерлі ісігін емдеудің хирургиялық әдістері: қазіргі мүмкіндіктері мен болашағы")),
      talk("16:50–17:00", text("Остемиров Багдат Умирзақұлы", "Остемиров Багдат Умирзақұлы", "Остемиров Багдат Умирзақұлы"), text("Impact of anabolic androgenic steroids on spermatogenesis amid increasing misuse among youth and athletes", "Влияние анаболических андрогенных стероидов на сперматогенез в условиях растущего злоупотребления среди молодёжи и спортсменов", "Жастар мен спортшылар арасында теріс пайдаланудың артуы аясында анаболикалық андрогендік стероидтардың сперматогенезге әсері")),
      talk("17:00–17:10", text("Саркулов Таир Маратович", "Саркулов Таир Маратович", "Саркулов Таир Маратович"), text("Effectiveness of antibacterial therapy for chronic prostatitis with microbiological monitoring", "Эффективность антибактериальной терапии хронического простатита с учетом мониторинга микробиологического пейзажа", "Микробиологиялық ландшафтты бақылауды ескере отырып, созылмалы простатитке қарсы бактерияға қарсы терапияның тиімділігі")),
      talk("17:10–17:20", text("Рустем Бекарыс Рустемулы", "Рустем Бекарыс Рустемулы", "Рустем Бекарыс Рустемулы"), text("Erectile dysfunction as an early marker of cardiovascular diseases: literature review and clinical observations", "Эректильная дисфункция как ранний маркер сердечно-сосудистых заболеваний: обзор литературы и клинические наблюдения.", "Эректильді дисфункция жүрек-қан тамырлары ауруларының ерте белгісі ретінде: әдеби шолу және клиникалық бақылаулар"))
    ]
  },
  {
    time: "17:30-18:00",
    room: text("Aspan Hall", "Зал «Аспан»", "«Аспан» залы"),
    title: text("Awards and Closing Ceremony", "Церемония закрытия", "Жабылу рәсімі"),
    moderators: [],
    talks: [
      talk("17:30–17:40", text("Award for the best young urologist presentation and letters of appreciation from the organizing committee", "Награждение за лучший доклад молодого уролога и вручение благодарственных писем от оргкомитета", "Жас урологтың үздік баяндамасын марапаттау және ұйымдастыру комитетінің алғыс хаттарын табыстау"), text("Award for the best young urologist presentation and letters of appreciation from the organizing committee", "Награждение за лучший доклад молодого уролога и вручение благодарственных писем от оргкомитета", "Жас урологтың үздік баяндамасын марапаттау және ұйымдастыру комитетінің алғыс хаттарын табыстау")),
      talk("17:40–18:00", text("Официальное закрытие", "Официальное закрытие", "Официальное закрытие"), text("Официальное закрытие", "Официальное закрытие", "Официальное закрытие"))
    ]
  }
];

const facultyCountries = {
  kazakhstan: text("Kazakhstan", "Казахстан", "Қазақстан"),
  belgium: text("Belgium", "Бельгия", "Бельгия"),
  turkey: text("Türkiye", "Турция", "Түркия"),
  lithuania: text("Lithuania", "Литва", "Литва"),
  china: text("China", "Китай", "Қытай"),
  uzbekistan: text("Uzbekistan", "Узбекистан", "Өзбекстан"),
  russia: text("Russia", "Россия", "Ресей")
} as const;

export const faculty = [
  {
    name: "Timur Muratov",
    ruName: "Муратов Тимур Муратович",
    kzName: "Мұратов Тимур Мұратұлы",
    role: text("Vice Minister of Healthcare of the Republic of Kazakhstan", "Вице-министр здравоохранения Республики Казахстан", "Қазақстан Республикасы Денсаулық сақтау вице-министрі"),
    city: facultyCountries.kazakhstan,
    topic: text("Welcome remarks", "Приветственное слово", "Құттықтау сөзі"),
    group: "official"
  },
  {
    name: "Anar Turmukhambetova",
    ruName: "Турмухамбетова Анар Акылбековна",
    kzName: "Тұрмұхамбетова Анар Ақылбекқызы",
    role: text("Rector of Astana Medical University", "Ректор Медицинского университета Астана", "Астана медицина университетінің ректоры"),
    city: facultyCountries.kazakhstan,
    topic: text("Academic welcome", "Академическое приветствие", "Академиялық құттықтау"),
    group: "official"
  },
  {
    name: "Ainur Tuleuova",
    ruName: "Тулеуова Айнур Сакеновна",
    kzName: "Төлеуова Айнұр Сәкенқызы",
    role: text("Head of Astana City Health Department", "Глава Управления здравоохранения г. Астана", "Астана қаласы Денсаулық сақтау басқармасының басшысы"),
    city: facultyCountries.kazakhstan,
    topic: text("Healthcare leadership", "Развитие здравоохранения", "Денсаулық сақтауды дамыту"),
    group: "official"
  },
  {
    name: "Mirzakarim Alchinbayev",
    ruName: "Алчинбаев Мирзакарим Каримович",
    kzName: "Алчинбаев Мирзакарим Каримұлы",
    role: text("Chief Urologist of the Republic of Kazakhstan", "Главный уролог Республики Казахстан", "Қазақстан Республикасының бас урологы"),
    city: facultyCountries.kazakhstan,
    topic: text("Modern urology in Kazakhstan", "Современная урология Казахстана", "Қазақстандағы заманауи урология"),
    group: "kazakhstan"
  },
  ...[
    ["Айнакулов Ардак Джаксылыкович", "Айнакулов Ардақ Жақсылықұлы"],
    ["Аканов Азамат Ержанович"],
    ["Амиржанов Жаслан Нурланович", "Әміржанов Жаслан Нұрланұлы"],
    ["Асанбек Даулет"],
    ["Ахметов Ернар Ерболатович"],
    ["Багитжанов Темирлан Женисович"],
    ["Байменов Чингис Булатович", "Байменов Шыңғыс Болатұлы"],
    ["Божченко Дмитрий Александрович"],
    ["Гасанов Зиё Бахшиевич"],
    ["Гульманов Еркебулан Манасович"],
    ["Давранов Анвар Жангирович", "Давранов Анвар Жангирұлы"],
    ["Даукенов Багдат Азимбаевич"],
    ["Дисаенко Ксения Сергеевна"],
    ["Дуйсенбинов Еркин Разаевич"],
    ["Жанабек Асет"],
    ["Жанбырбекулы Уланбек"],
    ["Закарья Олжас Мұратұлы"],
    ["Ирисматов Даврон Розматович"],
    ["Искаков Ербол Амангельдинович"],
    ["Калимкулов Алимжан Мейрамбекулы", "Қалимқұлов Әлімжан Мейрамбекұлы"],
    ["Калыкбаева Ардак"],
    ["Каримов Адиль Муслимович"],
    ["Касымов Бахтияр Галыулы"],
    ["Конакбаев Ескендир Жандаралыевич"],
    ["Кулмаханов Нурлыбек Бурибаевич"],
    ["Курмангалиев Олег Маратович"],
    ["Леонтьев Андриан Олегович"],
    ["Нугманов Чингиз Аскарович"],
    ["Нургалиев Асылан Асылбекович", "Нұрғалиев Асылан Асылбекұлы"],
    ["Нургалиев Нуржан Серикович"],
    ["Омарбаев Рустам Токенович"],
    ["Омарбеков Арман Капарович"],
    ["Оспанов Даулет Серикович"],
    ["Сатанов Бауыржан Ермекович"],
    ["Султанбеков Касымхан Адылханович", "Сұлтанбеков Қасымхан Әділханұлы"],
    ["Талышинский Али Эльманович", "Талышинский Али Эльманұлы"],
    ["Тасжуреков Аскар Онгарович"],
    ["Умурзаков Хусан Талипбаевич", "Умурзаков Хусан Талипбайұлы"],
    ["Хайрли Гафур Зинурович"],
    ["Шалекенов Булат Уахитович", "Шалекенов Болат Уахитұлы"],
    ["Шерханов Равиль Таирханович"]
  ].map(([ruName, kzName]) => ({
    name: localizeProgramLabel(ruName, "en"),
    ruName,
    kzName: kzName ?? localizeProgramLabel(ruName, "kz"),
    role: text("Speaker", "Спикер", "Спикер"),
    city: facultyCountries.kazakhstan,
    topic: text("Scientific session", "Научная секция", "Ғылыми секция"),
    group: "kazakhstan" as const
  })),
  ...([
    ["Yongda Liu", "Yongda Liu", "Yongda Liu", facultyCountries.china],
    ["Kemal Sarica", "Kemal Sarica", "Kemal Sarica", facultyCountries.turkey],
    ["Ege Can Serefoglu", "Ege Can Serefoglu", "Ege Can Serefoglu", facultyCountries.turkey],
    ["Gilvydas Verkauskas", "Gilvydas Verkauskas", "Gilvydas Verkauskas", facultyCountries.lithuania],
    ["Wang Jianye", "Wang Jianye", "Wang Jianye", facultyCountries.china],
    ["Sam Ward", "Sam Ward", "Sam Ward", facultyCountries.belgium],
    ["Mavlyanov Farkhod", "Mavlyanov Farkhod", "Mavlyanov Farkhod", facultyCountries.uzbekistan],
    ["Selcuk Guven", "Selcuk Guven", "Selcuk Guven", facultyCountries.turkey],
    ["Viktoria Shaderkina", "Шадеркина Виктория Анатольевна", "Шадеркина Виктория Анатольевна", facultyCountries.russia],
    ["Stanislav Ali", "Али Станислав Хусейнович", "Али Станислав Хусейнович", facultyCountries.russia],
    ["Dmitry Gorelov", "Горелов Дмитрий Сергеевич", "Горелов Дмитрий Сергеевич", facultyCountries.russia],
    ["Nikolay Baykov", "Байков Николай Александрович", "Байков Николай Александрович", facultyCountries.russia],
    ["Pavel Kyzlasov", "Кызласов Павел Сергеевич", "Кызласов Павел Сергеевич", facultyCountries.russia],
    ["Refat Amdiy", "Амдий Рефат Эльдарович", "Амдий Рефат Эльдарович", facultyCountries.russia],
    ["Roman Andreev", "Андреев Роман Юрьевич", "Андреев Роман Юрьевич", facultyCountries.russia]
  ] satisfies [string, string, string, LocalText][]).map(([name, ruName, kzName, country]) => ({
    name,
    ruName,
    kzName,
    role: text("Speaker", "Спикер", "Спикер"),
    city: country,
    topic: text("Specialty lecture", "Профильный доклад", "Бейінді баяндама"),
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
