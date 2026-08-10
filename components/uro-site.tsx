"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent, type HTMLAttributes, type HTMLInputTypeAttribute } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Mail,
  MapPin,
  Menu,
  Mic2,
  MoveUpRight,
  Navigation,
  Send,
  Sparkles,
  UserPlus,
  UsersRound,
  X
} from "lucide-react";
import {
  copy,
  faculty,
  langs,
  mapUrl,
  nav,
  overview,
  pagePath,
  localizeProgramLabel,
  programDetails,
  sponsorLogos,
  venueFacts,
  venueImage,
  type Lang,
  type PageKey
} from "@/lib/uroplenum-data";

const pageKeys: PageKey[] = ["home", "program", "faculty", "venue"];
type SitePageKey = PageKey | "registration";

const registrationCloseAt = Date.parse("2026-07-02T12:00:00+05:00");
const researchSurveys = [
  {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfpKiNFc5iGUQBBRyydfGGncDCOfCgZJxa14s2n5CtXdvnOng/viewform?usp=dialog",
    content: {
      en: {
        eyebrow: "Research survey",
        title: "Invitation to participate in a study!",
        greeting: "Dear colleagues!",
        description:
          "A short survey is being conducted to estimate the approximate volume of procedures in Kazakhstan in which a Ureteral Access Sheath is used during endourological interventions.",
        collaboration:
          "Specialists who complete the questionnaire in full may be included among the co-authors or collaborators of a future scientific publication or presentation based on the study results.",
        button: "Take the survey"
      },
      ru: {
        eyebrow: "Научное исследование",
        title: "Приглашение участвовать в исследовании!",
        greeting: "Здравствуйте, коллеги!",
        description:
          "Проводится короткий опрос для оценки примерного объёма операций, в которых используется Ureteral Access Sheath при эндоурологических вмешательствах в Казахстане.",
        collaboration:
          "Все специалисты, полностью ответившие на вопросы опросника, могут быть включены в список соавторов или коллаборации будущей научной публикации или презентации по итогам исследования.",
        button: "Пройти опрос"
      },
      kz: {
        eyebrow: "Ғылыми зерттеу",
        title: "Зерттеуге қатысуға шақырамыз!",
        greeting: "Құрметті әріптестер!",
        description:
          "Қазақстандағы эндоурологиялық араласулар кезінде Ureteral Access Sheath қолданылатын операциялардың шамамен көлемін бағалау үшін қысқаша сауалнама жүргізілуде.",
        collaboration:
          "Сауалнама сұрақтарына толық жауап берген мамандар зерттеу нәтижелері бойынша болашақ ғылыми жарияланымның немесе презентацияның бірлескен авторлары не коллабораторлары тізіміне енгізілуі мүмкін.",
        button: "Сауалнамаға өту"
      }
    }
  },
  {
    url: "https://forms.gle/Gx1NXc5g2fYrMTGEA",
    content: {
      en: {
        eyebrow: "Multicenter study",
        title: "Care for patients with renal colic",
        greeting: "Dear colleagues!",
        description:
          "A multicenter study is being conducted on the delivery of care to patients with renal colic in urological hospitals of the Republic of Kazakhstan.",
        collaboration:
          "Your responses will help assess current clinical pathways and support future analysis of inpatient urological care.",
        button: "Open questionnaire"
      },
      ru: {
        eyebrow: "Многоцентровое исследование",
        title: "Оказание помощи пациентам с почечной коликой",
        greeting: "Здравствуйте, коллеги!",
        description:
          "Проводится многоцентровое исследование: оказание помощи пациентам с почечной коликой в урологических стационарах Республики Казахстан.",
        collaboration:
          "Ваши ответы помогут оценить текущие клинические маршруты и поддержать дальнейший анализ стационарной урологической помощи.",
        button: "Открыть опросник"
      },
      kz: {
        eyebrow: "Көпорталықты зерттеу",
        title: "Бүйрек шаншуы бар пациенттерге көмек көрсету",
        greeting: "Құрметті әріптестер!",
        description:
          "Қазақстан Республикасының урологиялық стационарларында бүйрек шаншуы бар пациенттерге көмек көрсету бойынша көпорталықты зерттеу жүргізілуде.",
        collaboration:
          "Жауаптарыңыз қолданыстағы клиникалық маршруттарды бағалауға және стационарлық урологиялық көмекті одан әрі талдауға көмектеседі.",
        button: "Сауалнаманы ашу"
      }
    }
  }
] satisfies Array<{ url: string; content: Record<Lang, Record<string, string>> }>;


const resolutionTextRu = {
  eyebrow: "Пост-релиз",
  title: "Резолюция Пленума урологов Республики Казахстан",
  announcement:
    "3 июля в городе Астана состоялся пленум урологов Казахстана, в котором приняло участие более 200 делегатов пленума. По итогам которого была принята данная резолюция.",
  preamble: [
    "Участники Пленума урологов Республики Казахстан, объединившего ведущих специалистов в области урологии, онкоурологии, детской урологии, андрологии, реконструктивной урологии, эндоурологии, трансплантологии, представителей медицинских университетов, научных организаций, практического здравоохранения, профессиональных ассоциаций, а также зарубежных экспертов, обсудив современное состояние урологической службы Республики Казахстан, достижения отечественной и мировой урологии, перспективы развития высокотехнологичной медицинской помощи, медицинского образования и научных исследований,",
    "отмечают, что урологическая служба Республики Казахстан обладает высоким кадровым и научно-практическим потенциалом, активно внедряет современные малоинвазивные технологии, расширяет международное сотрудничество и демонстрирует устойчивое развитие. Вместе с тем сохраняется необходимость дальнейшей консолидации профессионального сообщества, совершенствования клинических протоколов, повышения доступности современных хирургических технологий, развития научного потенциала молодых специалистов и интеграции отечественной урологии в мировое научное пространство.",
    "В целях дальнейшего развития урологической службы Республики Казахстан участники Пленума считают необходимым рекомендовать следующее."
  ],
  sections: [
    {
      title: "1. Развитие профессионального сообщества",
      items: [
        "1.1. Проводить Национальный конгресс урологов Республики Казахстан на ежегодной основе как главную профессиональную площадку страны.",
        "1.2. Формировать единую научную программу Конгресса с обязательным участием специалистов всех основных направлений современной урологии: онкоурологии; эндоурологии; детской урологии; андрологии и реконструктивной урологии; урологической трансплантологии; женской и функциональной урологии; урогенитальной реконструкции и других профильных секций.",
        "1.3. Продолжить развитие междисциплинарного взаимодействия между урологами, онкологами, нефрологами, трансплантологами, радиологами, репродуктологами, гинекологами, хирургами и специалистами смежных специальностей."
      ]
    },
    {
      title: "2. Международное сотрудничество",
      items: [
        "2.1. Активно развивать научное и образовательное сотрудничество с профессиональными обществами стран тюркского мира, а также государств Центральной Азии и других соседних стран.",
        "2.2. Расширять совместные образовательные программы, обмен специалистами, проведение международных мастер-классов, школ, симпозиумов и совместных научных мероприятий.",
        "2.3. Поддерживать участие казахстанских урологов в деятельности ведущих международных профессиональных организаций, способствовать реализации совместных исследовательских проектов и обмену современными технологиями."
      ]
    },
    {
      title: "3. Совершенствование клинической практики",
      items: [
        "3.1. Обеспечить постоянную работу экспертных групп по пересмотру, актуализации и внедрению клинических протоколов диагностики и лечения урологических заболеваний на основе принципов доказательной медицины и современных международных рекомендаций.",
        "3.2. Ускорить внедрение современных высокотехнологичных методов диагностики и лечения в практическое здравоохранение Республики Казахстан.",
        "3.3. Продолжить работу с Министерством здравоохранения Республики Казахстан, Фондом социального медицинского страхования и другими заинтересованными государственными органами по включению современных урологических технологий в систему финансирования в рамках обязательного социального медицинского страхования. В качестве приоритетных технологий считать: лазерную энуклеацию доброкачественной гиперплазии предстательной железы; гибкую уретерореноскопию при лечении мочекаменной болезни; иные современные малоинвазивные эндоскопические вмешательства, эффективность которых подтверждена международными клиническими рекомендациями и принципами доказательной медицины."
      ]
    },
    {
      title: "4. Развитие молодых специалистов",
      items: [
        "4.1. Считать развитие молодых урологов одним из стратегических направлений деятельности профессионального сообщества.",
        "4.2. Организовать систему выявления и поддержки наиболее талантливых молодых урологов, ординаторов, магистрантов, докторантов и молодых ученых Республики Казахстан.",
        "4.3. Разработать механизмы финансирования зарубежных стажировок перспективных молодых специалистов за счет средств профессионального сообщества, спонсорской поддержки, образовательных грантов и международных партнерских программ с прохождением обучения в ведущих мировых урологических центрах.",
        "4.4. Расширить проведение школ молодых урологов, образовательных курсов, хирургических мастер-классов, программ наставничества и регулярных научно-практических семинаров."
      ]
    },
    {
      title: "5. Развитие науки",
      items: [
        "5.1. Содействовать повышению публикационной активности казахстанских урологов, прежде всего молодых специалистов, путем организации образовательных программ по клиническим исследованиям, медицинской статистике, академическому письму и подготовке научных публикаций.",
        "5.2. Стимулировать публикацию результатов отечественных исследований в высокорейтинговых международных рецензируемых научных журналах.",
        "5.3. Активно развивать многоцентровые клинические исследования с участием ведущих урологических центров Республики Казахстан.",
        "5.4. Расширять участие отечественных учреждений в международных научных проектах, регистрах пациентов и клинических исследованиях.",
        "5.5. Создать условия для формирования национальных научных консорциумов по приоритетным направлениям урологии и андрологии."
      ]
    },
    {
      title: "6. Заключительные положения",
      items: [
        "Участники Пленума выражают уверенность, что реализация настоящей резолюции позволит обеспечить дальнейшее развитие урологической службы Республики Казахстан, повысить доступность современных высокотехнологичных методов лечения, укрепить международный авторитет отечественной урологии, создать эффективную систему подготовки молодых специалистов и обеспечить устойчивое развитие научного потенциала страны.",
        "Профессиональное урологическое сообщество Республики Казахстан подтверждает свою готовность к конструктивному взаимодействию с Министерством здравоохранения Республики Казахстан, медицинскими университетами, научными организациями, международными профессиональными обществами и всеми заинтересованными сторонами для достижения стратегической цели — повышения качества, доступности и эффективности урологической помощи населению Республики Казахстан."
      ]
    }
  ]
};


const resolutionText: Record<Lang, typeof resolutionTextRu> = {
  ru: resolutionTextRu,
  en: {
    eyebrow: "Post-release",
    title: "Resolution of the Plenum of Urologists of the Republic of Kazakhstan",
    announcement:
      "On 3 July, the Plenum of Urologists of Kazakhstan took place in Astana, bringing together more than 200 delegates. The following resolution was adopted as a result of the meeting.",
    preamble: [
      "The participants of the Plenum of Urologists of the Republic of Kazakhstan - leading specialists in urology, oncourology, paediatric urology, andrology, reconstructive urology, endourology and transplantation, representatives of medical universities, research institutions, practical healthcare, professional associations and international experts - discussed the current state of urological care in Kazakhstan, achievements in domestic and global urology, and prospects for high-tech care, medical education and research.",
      "They note that Kazakhstan's urological service has strong professional and scientific potential, actively adopts modern minimally invasive technologies, expands international cooperation and shows steady development. At the same time, further consolidation of the professional community, improved clinical protocols, broader access to modern surgical technology, development of young specialists and integration into the global scientific community remain necessary.",
      "To further develop urological care in the Republic of Kazakhstan, the participants recommend the following."
    ],
    sections: [
      { title: "1. Development of the professional community", items: [
        "1.1. Hold the National Congress of Urologists of the Republic of Kazakhstan annually as the country's principal professional platform.",
        "1.2. Establish a unified scientific programme for the Congress with mandatory participation from all major fields of contemporary urology: oncourology, endourology, paediatric urology, andrology and reconstructive urology, urological transplantation, female and functional urology, urogenital reconstruction and other specialised sections.",
        "1.3. Continue building interdisciplinary collaboration among urologists, oncologists, nephrologists, transplant specialists, radiologists, reproductive specialists, gynaecologists, surgeons and other related professionals."
      ]},
      { title: "2. International cooperation", items: [
        "2.1. Actively develop scientific and educational cooperation with professional societies in the Turkic world, Central Asia and neighbouring countries.",
        "2.2. Expand joint educational programmes, specialist exchanges, international masterclasses, schools, symposia and joint scientific events.",
        "2.3. Support the participation of Kazakhstani urologists in leading international professional organisations, joint research projects and exchanges of modern technologies."
      ]},
      { title: "3. Improving clinical practice", items: [
        "3.1. Ensure the ongoing work of expert groups to review, update and implement clinical protocols for diagnosing and treating urological diseases, based on evidence-based medicine and current international guidelines.",
        "3.2. Accelerate the introduction of modern high-tech diagnostic and treatment methods into practical healthcare in Kazakhstan.",
        "3.3. Continue work with the Ministry of Health, the Social Health Insurance Fund and other public bodies to include modern urological technologies in compulsory social health insurance funding. Priority technologies include laser enucleation for benign prostatic hyperplasia, flexible ureterorenoscopy for urolithiasis, and other contemporary minimally invasive endoscopic interventions supported by international guidelines and evidence-based medicine."
      ]},
      { title: "4. Development of young specialists", items: [
        "4.1. Recognise the development of young urologists as a strategic priority for the professional community.",
        "4.2. Establish a system to identify and support the most talented young urologists, residents, master's and doctoral students, and early-career researchers in Kazakhstan.",
        "4.3. Develop mechanisms to fund overseas placements for promising young specialists through professional-community resources, sponsorship, educational grants and international partnerships at leading global urology centres.",
        "4.4. Expand schools for young urologists, educational courses, surgical masterclasses, mentorship programmes and regular scientific and practical seminars."
      ]},
      { title: "5. Development of science", items: [
        "5.1. Promote publication activity among Kazakhstani urologists, especially young specialists, through training in clinical research, medical statistics, academic writing and scientific publishing.",
        "5.2. Encourage publication of domestic research findings in highly ranked international peer-reviewed journals.",
        "5.3. Actively develop multicentre clinical research involving leading urology centres in Kazakhstan.",
        "5.4. Expand the participation of national institutions in international scientific projects, patient registries and clinical research.",
        "5.5. Create conditions for national scientific consortia in priority areas of urology and andrology."
      ]},
      { title: "6. Final provisions", items: [
        "The participants are confident that implementation of this resolution will further develop urological care in Kazakhstan, improve access to modern high-tech treatment, strengthen the international standing of domestic urology, establish an effective training system for young specialists and ensure sustainable scientific development.",
        "The professional urological community of Kazakhstan confirms its readiness for constructive cooperation with the Ministry of Health, medical universities, research institutions, international professional societies and all interested parties to achieve the strategic goal of improving the quality, accessibility and effectiveness of urological care for the population."
      ]}
    ]
  },
  kz: {
    eyebrow: "Баспасөз релизі",
    title: "Қазақстан Республикасы урологтары пленумының қарары",
    announcement:
      "3 шілде күні Астана қаласында Қазақстан урологтарының пленумы өтіп, оған 200-ден астам делегат қатысты. Пленум қорытындысы бойынша осы қарар қабылданды.",
    preamble: [
      "Қазақстан Республикасы урологтары пленумына урология, онкоурология, балалар урологиясы, андрология, реконструктивті урология, эндоурология, трансплантология салаларының жетекші мамандары, медициналық университеттер, ғылыми ұйымдар, практикалық денсаулық сақтау, кәсіби қауымдастықтар өкілдері және шетелдік сарапшылар қатысып, еліміздегі урологиялық қызметтің қазіргі жай-күйін, отандық және әлемдік урология жетістіктерін, жоғары технологиялық көмекті, медициналық білім мен ғылыми зерттеулерді дамыту перспективаларын талқылады.",
      "Қатысушылар Қазақстан Республикасының урологиялық қызметі кадрлық, ғылыми және практикалық әлеуеті жоғары екенін, заманауи аз инвазиялық технологияларды белсенді енгізіп, халықаралық ынтымақтастықты кеңейтіп, тұрақты дамып келе жатқанын атап өтті. Сонымен қатар кәсіби қауымдастықты одан әрі біріктіру, клиникалық хаттамаларды жетілдіру, заманауи хирургиялық технологиялардың қолжетімділігін арттыру, жас мамандардың ғылыми әлеуетін дамыту және отандық урологияны әлемдік ғылыми кеңістікке кіріктіру қажет.",
      "Қазақстан Республикасының урологиялық қызметін одан әрі дамыту мақсатында пленум қатысушылары төмендегіні ұсынады."
    ],
    sections: [
      { title: "1. Кәсіби қауымдастықты дамыту", items: [
        "1.1. Қазақстан Республикасы урологтарының Ұлттық конгресін елдің басты кәсіби алаңы ретінде жыл сайын өткізу.",
        "1.2. Қазіргі урологияның барлық негізгі бағыттары: онкоурология, эндоурология, балалар урологиясы, андрология және реконструктивті урология, урологиялық трансплантология, әйелдер және функционалдық урология, урогениталдық реконструкция және басқа да бейінді секциялар мамандары міндетті түрде қатысатын Конгрестің бірыңғай ғылыми бағдарламасын қалыптастыру.",
        "1.3. Урологтар, онкологтар, нефрологтар, трансплантологтар, радиологтар, репродуктологтар, гинекологтар, хирургтар және аралас мамандықтар мамандары арасындағы пәнаралық өзара іс-қимылды дамытуды жалғастыру."
      ]},
      { title: "2. Халықаралық ынтымақтастық", items: [
        "2.1. Түркі әлемі елдерінің, Орталық Азия мемлекеттерінің және басқа көршілес елдердің кәсіби қоғамдарымен ғылыми және білім беру ынтымақтастығын белсенді дамыту.",
        "2.2. Бірлескен білім беру бағдарламаларын, мамандар алмасуын, халықаралық шеберлік сабақтарын, мектептерді, симпозиумдар мен бірлескен ғылыми іс-шараларды кеңейту.",
        "2.3. Қазақстандық урологтардың жетекші халықаралық кәсіби ұйымдардың жұмысына қатысуын, бірлескен зерттеу жобаларын және заманауи технологиялар алмасуын қолдау."
      ]},
      { title: "3. Клиникалық практиканы жетілдіру", items: [
        "3.1. Дәлелді медицина қағидаттары мен заманауи халықаралық ұсынымдар негізінде урологиялық ауруларды диагностикалау және емдеу клиникалық хаттамаларын қайта қарау, жаңарту және енгізу жөніндегі сарапшылық топтардың тұрақты жұмысын қамтамасыз ету.",
        "3.2. Қазақстан Республикасының практикалық денсаулық сақтау жүйесіне заманауи жоғары технологиялық диагностика және емдеу әдістерін енгізуді жеделдету.",
        "3.3. Денсаулық сақтау министрлігімен, Әлеуметтік медициналық сақтандыру қорымен және басқа мемлекеттік органдармен заманауи урологиялық технологияларды міндетті әлеуметтік медициналық сақтандыру шеңберіндегі қаржыландыру жүйесіне енгізу жөніндегі жұмысты жалғастыру. Басым технологиялар: қуықасты безінің қатерсіз гиперплазиясын лазерлік энуклеациялау, несеп-тас ауруын емдеудегі икемді уретерореноскопия және халықаралық ұсынымдар мен дәлелді медицина қағидаттарымен расталған өзге де заманауи аз инвазиялық эндоскопиялық араласулар."
      ]},
      { title: "4. Жас мамандарды дамыту", items: [
        "4.1. Жас урологтарды дамытуды кәсіби қауымдастық қызметінің стратегиялық бағыттарының бірі деп санау.",
        "4.2. Қазақстанның ең талантты жас урологтарын, резиденттерін, магистранттарын, докторанттарын және жас ғалымдарын анықтау мен қолдау жүйесін ұйымдастыру.",
        "4.3. Перспективалы жас мамандардың әлемдік жетекші урологиялық орталықтарда тағылымдамадан өтуін кәсіби қауымдастық қаражаты, демеушілік қолдау, білім беру гранттары және халықаралық серіктестік бағдарламалары есебінен қаржыландыру тетіктерін әзірлеу.",
        "4.4. Жас урологтар мектептерін, білім беру курстарын, хирургиялық шеберлік сабақтарын, тәлімгерлік бағдарламаларын және тұрақты ғылыми-практикалық семинарларды кеңейту."
      ]},
      { title: "5. Ғылымды дамыту", items: [
        "5.1. Клиникалық зерттеулер, медициналық статистика, академиялық жазу және ғылыми жарияланымдарды дайындау бойынша білім беру бағдарламаларын ұйымдастыру арқылы, ең алдымен жас мамандардың, қазақстандық урологтардың жарияланымдық белсенділігін арттыруға жәрдемдесу.",
        "5.2. Отандық зерттеулердің нәтижелерін жоғары рейтингті халықаралық рецензияланатын ғылыми журналдарда жариялауды ынталандыру.",
        "5.3. Қазақстан Республикасының жетекші урологиялық орталықтары қатысатын көпорталықты клиникалық зерттеулерді белсенді дамыту.",
        "5.4. Отандық мекемелердің халықаралық ғылыми жобаларға, пациенттер тізілімдеріне және клиникалық зерттеулерге қатысуын кеңейту.",
        "5.5. Урология мен андрологияның басым бағыттары бойынша ұлттық ғылыми консорциумдарды қалыптастыруға жағдай жасау."
      ]},
      { title: "6. Қорытынды ережелер", items: [
        "Қатысушылар осы қарарды іске асыру Қазақстандағы урологиялық қызметтің одан әрі дамуын қамтамасыз етіп, заманауи жоғары технологиялық емдеу әдістерінің қолжетімділігін арттырады, отандық урологияның халықаралық беделін нығайтады, жас мамандарды даярлаудың тиімді жүйесін құрады және елдің ғылыми әлеуетінің тұрақты дамуын қамтамасыз етеді деп сенеді.",
        "Қазақстанның кәсіби урологиялық қауымдастығы халыққа урологиялық көмектің сапасын, қолжетімділігін және тиімділігін арттыру стратегиялық мақсатына жету үшін Денсаулық сақтау министрлігімен, медициналық университеттермен, ғылыми ұйымдармен, халықаралық кәсіби қоғамдармен және барлық мүдделі тараптармен сындарлы ынтымақтастыққа дайын екенін растайды."
      ]}
    ]
  }
};

const generalSponsorImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAB9A3oDASIAAhEBAxEB/8QAHQABAAIBBQEAAAAAAAAAAAAAAAgJBwEDBAUGAv/EAFoQAAECBQIDAwcFBw8JBwUAAAECAwAEBQYRBwgSITETQVEJFCJhcYGRFRcyodEWUoKxsrPBGCMkMzc4QldydHWSlKLhGTRDU1VWYoPSJTY5Y5PD8EVUZHPC/8QAHAEBAAIDAQEBAAAAAAAAAAAAAAQFAgMGAQcI/8QAQBEAAQMDAgMFBgMFCAEFAAAAAQACAwQFERIhBjFBEyJRYXEHFDKBkaEVsdEjM8Hh8RYkNUJScoKS0kNik7Lw/9oADAMBAAIRAxEAPwC1OEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEI04k/fD4wRawjQKSeigffGnGj74fGCL6hHzxo++Hxhxo++Hxgi+oR88aPvh8Y1yMZyMeMEWsIQgiQjTI6ZjTjT98PjBF9Qj540ffD4w40ffD4wRfUI0CknkFD4wKgOpAgi1hHzxo++Hxhxo++Hxgi+oRoFJPIKB98awRIQhBEhCEESEIQRIQhBEhCEESNCQASTgCNY6e8FrbtKtrbUUqTTpkpUOoIaVzjxx0glbImdo9rPEgLsW56UdWG25ltSj0AVzjfisPbNcdfm9x1IlZmtzzrJqLgLa5hakkdqO4nEWdjpFVaLoLrC6UN04OOeV13G3CLuDq2OjdL2mtgdnGMZJ25nwWsI0yI1i2XGr4ddbZQXHVhKR1JPKPlmal5jPYPIXjrwnOIwlvJnZyQ0LrkzIzTrDqUpwttZSoemnvEYi8nfW6rVmLoFSqMxNcKWVJ7Z1S8ekrpmKmW6CK4MoNPxDOc+v6LsaThF9Vw1PxEJQBE8N0Y55075z5+CmfCNAQehjWLZcckI0zAkDqYItYQhBEhGmQY1giQhGmR4wRawhGmcQRawjTPfDOYItYQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEI+VEgcvGCKP26Dd1a+3mVbpzcqmq3DMo42ZLOEoGOSl8xy5joYgxPeUW14m51+Zlp2VlWnVlSGUJylseAyMx5XfNUp2o7hrgM5MOO9iGm0cZzhITgAerlGZtnmzfRvWjTtVz3hcs1N1NxznJyD6WlyiemFhSVZz1yMDmI+jUtBbbVb2VVWzUXAZOM89/kuLnq664VjoKd2kDON8cl7nahux1V1Umr2RdFRQ6mi2+9PywCQAl1LbigenikRgZ/yhWvzbq0prDOAsgZQPH2RPnSzZxpJpA7WnrUXWCa7ILp00JmZSsdkpKknhwgYOFnnHhXfJr7d1qK1OXJlSsn9mt9//LiuiudkbUSPfF3Tpx3eWBv1UySguhhY1sneGc7/AEUPP8odr9/tlj+oPsh/lDtf/wDbDH9QfZGF9b7EkNN9UK9ZlMfcdlabM9k0pw5UUlIIz8Ylrs52X6Vaz6Wm9L5eqq5xydcYQmUmEtpSlKUkZBSefMx0dXFaaKmFVJENJxjA335Klp33GqmMEch1DPXwXndNt4e6bVS55a1bXnWXH3zl15SAG5dv+E4s45AZz4xkDWDygdVsSiIsGy5xi4K/LoLNRrrmQ2HefF2QGM8J9HmnuMdRunktPNpFkO6V6RNLbq10pUalNzKw5MJl/vCpIGAQs49kQZodEq911uWolGlHJufn3Q2y0gZUtRjRSW+huQFX2QbGOQxjPmfLwHzW6orKuiJp+0Jeee+ceQ8/Er2Fza+6vXfUTVK5flVffxwgpdCAE5JxhIA746xjVrUmVfbmGb0qyXGlhxB84JwodDE1NF/JmOTcoxVdYayuX7ZIUafJLAcR6iv0kn4RkW8vJlaSTlJW3ZdYqshP4PC5NvB1HwSkH64zfxBaIX9iMY8Q3ZYts9ylb2h5+Z3Ud9EfKJ6l2O43S9QAbmpyyEqecwmYaT/w44Un3xkbWTc5rzasnLagaf3QzXLLrJ7SWmm0AqlD/qXRwjCh16Y5jnERdcNA760JuH5Fu2nqDLpUZebbHE06kHkeIZAPqzmPV7WdWpC0bkXYd7S7lTs+6SJKekFK9ALUcJcAIICgrh5+qM5rZRPHv1NG1w5kdHDy8D4fQrGKuqmn3Wd5aeh6g+fiF64+UN3ADkawx/UH2Rp/lDtfv9ssf1B9kSxq/k59u7FFnKtKO3Copl3JhrM63jknI/0fSKwK9TJenXJUKXL8XYy048wjJyeFKykZ9wjC2i0XXV2EI7uM5bjmva78St+O1lO/gVJqkeUa10p1Tl52emJSfYaXlyWcThLg8CRg/XEhJXeJdWu1pk6ST6KDedLZXMPUd/BRPoCcqDJ58xwnkSOojGlT2GW3X9vlL1LsqqzEvWTSjPzTM0sKbdwVcQTgDh5DvJiHWnt2VOyLzo9z0l5aH6fNtPgJOOIJWCUn1HGIwZQWy5hz6RgD2HHLbPgRyIKzdV19CQ2ocS1wzz6eR8QpDzvlAdxNOm3pGdqTbMxLuKadbUgZQtJwQeXcRGx/lDdf/wDbDH9QfZExVbDdB9TW5fUKsM1qXnbilWKjMNS00hDSXXWwtRSOA4yVE9YxhuL2V7ddGdJ61fDCq65OSjQEo05PtjtHCpIwBwc8A5wPCIUFxsc0jYRB3iQMaRz+qky0V1iYZDL3Rvz6LFVheUg1dplyyj90iSqdMW4luYadBHAgnCljhxzAOR7Is+tmvSlz29TbhkFBTFRlWppsjwWgKx9cUJWvb85dVxU63aa2tUxUJlqWQAknmtQTnl3c4vb03oD1r2Fb9vzKsuyFNlmHD/xJbSD9YiBxbQ0lIIzA0Ncc5x4KZw7VVFQXiVxIGOa9LCEI4pdOkIQgiQhCCJCEIIkIRxKpVadRKe/VKtONSspLIK3XnVBKUJHUkmPCQBkr1rS8hrRklcuOmvP/ALn13+jJr80qPL2lrtppfFxLti16+ioTqElZ7LCkYzj6QMeovP8A7n13+jJr80qNPaxzRl0ZBG/JT/c6ihq2RVLCx2QcEEHBPmqydrv75aj/ANJL/OiJ8a+a/wBuaF28ieqSDNVGbymUlUH0lnnzPq5GIEbXTjctR/XUl/nRHP3fXXP3huBmaJNLWuXpcw1JMNlWQEnhUfrUY+fW24vttpkfF8RfgepC/S3FXDEHFPGdPT1f7qOAPdjmQCdvmSPks7WRfO7rWqScu+1/kyjUl7JlUOZSHBjIwCvPeOfSN2wt393WdfitNdeqS3JzCHOx8+aBCEnOApWScgjnkRJzTGjytBsChUmTYDLUtJNtpQBjGBEJvKNUSTlrwt6tS6UJmJmVdS8R1VwlATn3Rd18dTa6MVscrnPGNQJyDnnt0XAcOTWri++PsNRRxxwvDhGWDD2FoJB1Z72QN89VIPeTNy8/t7rE7JvJdYfZQ42tJyFJKk4MRN2l6oXJZslXKDYNumsXJVkIRLIUCG2gCSVLPLl39R0jJ1Zu6buvYup6ecLkxKMJl3FE5Jw6MfViNryb9IkFTFz1dTIM0hplCVnqlOVgj64h1MhrbxTyQnTqZnPUZB+6vrZBFw/wRcqetYJeyn04OwcQW4zjfG2SPkujvXcTuq0grco/fknLJlphXGEYK2lDllOQrA6xLbTDWSQ1R0rVfVJSluZallqfZJz2TqQTg/AH3xiHyhUow5pHKTSmwXWqgylKu8AhefxR5nYk6teit6tqUSlLrmB/yExLpp6ihurqF0hewtyM8wqa6UFt4g4Ojv8AHTMhmZIGO0DDXAkDl8146yN8+pDt7Gn3FKS83JK7RtmXlWV9o46QQ2kcz1VgdI7rUfV3eHblPevibobFNo37YGmzxFps8xxgKz06xhTaxIStT3F0uXnWUutoU88lKhkBSU5B9xEWOa1SrE1pPdLD7aVoVTXspUMjpES1CrudFJLJO4FpOMenXyVzxgbLwpfqWkprfG4SNZq1AkYJx3RnAPid+ixftS3Mua3SM5R7glmpat01AccKDhLqMgcQBJPU+PdHntZd0V2M6lI0b0jpstMVtbwlnJmYPoIWVYOOYxjqTmMCbEE8OtNSZbJSlUqtOB0x2kdTr5I3vohuLn79k5VfA/PKnJOYcby24hSuacnlnH44x/GKt1qjncT8WHOHPH6rZ/YizR8ZVVBExpxFrijce6XkDY+IHPH6LOl93DvF0robl6VWdplTkZL05ppsFQQnGScceSOUZe227hpDXOgTDjsmZOrU7Am2seienpJ9XMDGYwPRt/tqXPR3Lf1Js1bUtONlibWwvtApJ5E8PCIzzppWNGpXTiq3RpLLSLcu3KuLfLSEpeCscg5jnnp19UWduqY5ajXS1GqPG7Xbn5ZXJ8UWyppLaYLxbBFUawGSRgBmD0djIPlyK8XuJ3fyem1XFiWNJpqtxrUG15BU20pRwByxlWe4GPMmo72G7a+7NJpzg7LzrzDmVFBHEABx9cd3WI06AcOpW5Gnz1wlLy5qacnVlfPK0+mOvrEWphCQkICQAOWAOWI1Wx8197SofI5rQcNDTj5nxUviynt/s891tlPTRyyuYHyOkGrOeg8BseW6jftz3cSWqdScs28ZJFJuFklKEfRQ8odQAeh69T3RwN4O4a+NFpujy1pCUAnwvtC+hSsYAxjBERL1aW9ppuhnp2h/rKpOsMutjGAOJKM+48RjK3lA6j8sfcdUSAPOWFuYHrSIgyXiqNvqGOd+0icBkdRnC6ODge0N4nt1RFEDS1cZfoO4a7TnHjjcEL2VubjdfNVbOlJbTC3GJmospPyhUXUltsK7ko4lDn1zzPSPH2xvG1k0/v8AFr6uU9tbPbJZmEFCgtvOPSSrJBHMRIzZpSZGm6B0Nco2lK5lb7jpCcZV2qvjyiK3lB5ZiW1ZpEww2EOOyPGtQHNR7Q8z8IzrnVlLQR3ATHV3cjpg+SjcPssd44kquGXUDBDmQB2+sFpO+c/QAbbKw+kVSTrdMlqtIOByWm2w60sfwknoY5kY024TL81onaLswsrWaayCT/JEZLjs4JO1ibJ4gFfCbhTCiq5aYHIY4j6HCQhCNqhpCEIIkIQgiQhGEN0u4qmaD2eXGSHa7UUlEgznoefpn1cj742wQPqZBFGMkrxzg0ZKyhdl+WfY8oZ67LhkqYyBnimHQjPszGF63vw280VxxgXFNzi0HhzKy4cSr2EKxFYGoGql8alVl+t3XX5qbefUSUleEAeASMD6o9toltb1M1yZcqFuyaJWmtq4TOTIIbUe8DAJzy8I6xvDUFND2tdLj0/mDn6KH705zsRhT1p3lCNAJpfBNTtVYJOATKDHx44ypZG4XSDUEITbV60955zGJdbqUuj1FOTFfOoPk+9XbMobtdkZmRq6JdsuOsyylFwAeGUgRGVmbq9BnSJeYmJOZZXz4FlCkqB9UZR8P0Fcwuo5iT5/0BR1TJGe+1XzAgjIjx99auad6bPS0ve10yVJcm0lbKZhwJKxnGRk+qIZ7Md49YnqrJ6XajThmhMkNSM84fSCugQrp4gRwPKdLzcdpqSrIMisjHT9sMUjLNKK5tFN3c9ee3kt5naYy9qll+qr0C/jMo/9oR9sZAtW8bcvaiIuK16qzUKe4SlL7KgpJI68x7RFE6VqyDk8/XFtmxEJO3mljr+y3858fRiZdrC22QCYPLt8csLCGo7V2nC9nP7ndDaXOvU6oaiUpiZl1lt1tb6QpCgcEEZjdo25TRGv1OXo9K1DpMxNzSuBlpL6cqV4DnEOfKA7d00CojVm1ZNYlJ1XBUGm08m14+n7MJ+uIVUqqztGqUtU5J5TT8q6l1tQOCFA5iZQ8P0twphNFIc+G2xWuSpdE7S4K+mPJ31qnYOmyJdd7XLJ0kTRwz5w4E8fszHgNs+uVN1R0flbmqU82mdpTHZ1MqVzSpCfSWfUefwiuTdprXM6xapz07Lvq+SqctUrJNhXogJwFK95GffFRQWWasqXU7u6G8z4f1W6SdrGah1Vln6qvQLr85lH5f8A5CPtjsJvcZozI0iUrs3flNakJ9Sky76nkhLhTgnBzz6j4xUvobpRW9Yr+p9q0tpxTS3UrmnQPRbaHMk+3GPfElfKC2dR9PrcsC0rel0syVPbeabAGM4QgZPrOIsJbBBHVx0glJc7ntyC1ipcWF+OSmF+qs0B/jMo/wDaEfbHv7QvS2L7pCK7adYl6lIrOEvMLCkk+0RRRxLz9I/GJzeTf1gTT6tUtLqvN4ancTEjxH/SeiCge4ExtufDbKOmM8LiSOefBYxVRe/S5WGx4++tW9PNNnZZm9rpkqUubBUymYdCSsDrjJ9cesfealmXJh9YS20krWo9AkDJMVC7xtX1aravz8xJvKNNpJMlLJzyBThKz71JzFLabY+6TdmDgDmVImlETcqyT9VXoD/GZR/7Qj7Y9bI6rWBUrOcv2SuaTdoLRKVzyXAWwRjPPOO8RRyla+IczE/9Nf8Aw/6v/OnPyW4trhw42iYxwkzqcBy8VojqjISMKTP6qzQH+Myj+P8AnCPtjX9VXoD/ABm0b+0I+2KaFqUVZyY9vploxqHq25Nt2PQ36kqSTxPBv+COX2iLB/CtLCzXLKQBzOwC1iscTgBWwfqq9Av4zKP/AGhH2xzaVuU0PrE23JSGpFGcedOEp85RzPxisWobPNwVOkX59+wKkW5dBWv0MYSBz6mMNuJn6XNuS7pdl5iXWULTkhSFA4I5d+Y0M4apKnJp5849D/FZGqe34mq+SWnpSclUzsrMNusLTxpcQcpI8QYxtVNzGh9GqMzSqlqJSZeblHC080t9IUhQ6g84hNsT3E3JT7sRpZcVQcnadVkKbku2XxKZdxnAJ54wFRHLXUqTq9dackf9pOfoiLBw059U+nlfjABBA5grN1UAwOAVtdC3HaL3LV5ahUS/qXOT04sNsstvpKlqJxgDPrjJcU17TyTrzaQJJ/Z7X5aYuUiuvFsba5GxtdqyMrZBKZQSvFXxrLprpxOs0+9LskaVMPo42233UpKk8+fM+ox5n9VZoDji+cyj4/nCPtiHXlMUqRqFQ14ICqejB/CXELULV0yfjFtQcNR1tKyftCCfLK0yVRjeW4V8lGrNMuCmMVijzaJmTmUBbTqDlKknvBjoL01W0909b47wuun0w4yEPvJSpXsBiMt96+TWiW1m110JP/bVVk0MSq/9UMHK/dj64rsuW8blu+ovVS4KxNTr8wsrUXXCRn1DoIjW7h19bqe92GgkeZws5akR8hurU6hvx27U9bjarjnX1NkAFiVCwv2EKxGshvv26z5bQi5ptlThwQ9K8AR6ySrGPfEFNCdnGoWt9C+6aQnZSnUztC2l2YKsrIxnGAfERw9cNompOirDFQn+xqkjML4EvSYUrhPcFZA8Il/gdrM/YCc6vDb6clh7xLp1adlaXZer+m+oWE2hd1PqTmMltl4KWPcIaj6lU7T6RaefZMxMvqIbaBwMDGSo9w5xTRQE6g2vPM1GhtVaSfYUFoU0Fjn6x0MWDaF1y4tyWnrDF0pWxctvuBDrkwgpRNsnAwrA5E8J6DviLcLCyhxLryzr4hZx1Bk2xupD6a6sUjUIPSzTfm86xzU1nIUnxSe8dI95GMtK9IjYs9M1aefaU+4ktsMskltlB+kATzOcDrGTY56ZsbXkRnIUhpJG6QhCNSySEIQRIQhBEhCEESEIQRI0IzGsIIq5fKE7XK8a7Na1WlLOTcg6ykVNlOSpgpTjjA+95KJPLHKIk6M6331oZc6a/aM+WiSA/Luc2nk+Cknl3DniLyZ2SlKjKuSU9LtvsPJKHG3EhSVA9xB5GIC7u9hLU6ZvUTSNliVDDSpifpuVen4lvkefTlyHWO6sd/hlhFvrxtyBPIjwP6rk7raJGSGspOfMjr6hSU247obJ16t6UMtPy8pcXZ/sulqcHaJUBklI6qT1547jGa1d3tihnTO/K7pje9NuejzTkvMSMyguAEjiRxekk+ojIi8XT+6pe9rLol0y6kEVOTZmVBB5JUpAUR7iYquIrK21yCSH4HfY+CsbLczXsLJPib9/NU4buP3wd3fz1P5tMWFeToONvTBB6VJ3P9REV67uP3wd3fz1P5tMWE+TpGdvLIIyDUnQR+AiOh4h/wAFi/4f/VUtm/xST/l+agdvcvE3juAuCZ8/amkySkyKVN4wnsyU8PLvGMRmbyZGltKuK7azqJU5Vp9VB4WJXjOS2+oJUFgezIz64wFu5tiUtbXq6ZOUbWhExOLmyFffOKUo/jiSnktr4pcjVbnsSYcQibqHDPMlR5q4QlHCPjE645jsWIP9LfptlRqLD7t+2/1H674WWd8W7e4dEJuQsex0tNVicYE07MOthYQ0SQMA9+UmMK7a/KA6gPX9KW/qm+1UqbVnUSyHWWAhbDhOEnA6jJ5+yPb+UN216h6h3NTdSLJpbtXaZk0yL8rLjLqOFSjxYPd6fj3RgHbts91ir+pNInK9as9RaZTZxmZmZiZSAOFKgcDGeZAMVlvp7S+06pdOrByf82fz9FNrJri24YjzjIx4Y/JTy3p6fUDUfb9W6jO4Q7RpX5Uk3Qj0goDAHsIWYp2l3XJGfbfYWUuMOBaCDggpOQc+6Llt3t10Gwtu1xylWmSkz8h8myieXE45gYHwSYpmSC/NgIHNa8D3mJXBpeaN4Pw6tvoMrRxKGipaRzxurptELumr0230itTqFCYNELLilLKytSWhlRJ7zmKcbwWEXnWVq6CpTP51UXCbf7bnLY2y0WRnnG1uOUUzI4M4CVtAgHPfFPF7DN31rH+0Zn86qMOFwwVNV2fLVt9Ssr8XGCAv54/gFOCo757ItbbnSdPLTln5+uqpJkJjtW+BtkqKsnPPPIxB+y7eqF1XVS7fpbK3Jifm2mGwkZ5qUBn646d1p5khDzakEjIChiLKvJ26FabqthrV1M2mrVpZVLhp1IKZJYHpYHic9T4RZVHu3DtLJPGCS459SeXoFCh7e8zsieRho+g/VTQs6nP0e0aJSZkYekabLS7n8pDSUn6xFdPlN9WUVm66TpnSaipUvSkGYnW0nAEweIcJx19EpMWJXxddPse0qrdtVcCJSlSy5l1R7kpijXVG86jqbqRWrunVFyYq06VgD3JSB7gI5bhKiNRVuq3jZv5n+Sv+IqkQ07advN35BSQ8nLpAu89Unb2qkkpVNt9rjSpQ9FTygoJx4kEAxatEe9j+lMvpnodSXHpZxFRraRPzJdGFJ40pIRjwBB+MSEip4hrvfq57h8Ldh8v1KsLPS+6UjQeZ3PzSEIRSK0SEIQRIQhBEhCEESMd7hKPOV7Rq66ZIAl96mvBAHUnhPKMiR8OtNvNqadQFoUMKSehEa5YxLG6M9QQpNHUuo6mOobzY4O+hyq2NiE2xS9aX5GefS066wppAWcFSwrmPqMWEahVCUpli1+bnHkttopkyCVHHMtKiK2quymvyl5/ODoxW006b7fzgSp5FtZHMoPIAH1+JjgXPpPvH1GpX3LXRcSGKa4UpeV2qSHBnqoBWY5S3e9WimfRvhc4gnSRjBz477L7LxOLNxtc4b5DXRxNLW9o1+Q9pbzwMHV5YKwttBpz9c3FyE5KNqWzLvuzS1AcgkOA/pjk7x7NnbN15duKYQtMpVn2p1pwjkQnhSRn8ExNPbttuoGhdKcWH0z9ZmwO3nCjGB3pT4D7I9BrZohamttt/ItfZ7OZYPHKTaAONpfPvx05mNUfDsxtXu7iBJq1eWfD6KTP7T6JvGQucYJpez7EnG5bz1Aeu+OeF3WlNekbk07oNZp7yXWZmSbWCDnqOhiFHlFrglJ29rft+VUlx+TlXFPBPMp4ygpH4495bmim6nSKUctnT+75Wfo/GewCxwhoHlkAkc+nwjs9NdmtVnLz+cbWqvprlRLvbebYykkHICs5yB6jEqu98udIKFsRa441E4wMc8eKquHvwThK8uv76xksbNZjY3VrcXAgAggacA75Xl7is6ds7Y15pUGS1MzLCX3EnqCXRjPuxH35N7/NbpB+8Z/KVEjdfNMp/U3S6fsegvsyjswhKGlLTlKQFJOMD1CPDbT9vtyaGIrTdfqMvNfKKUBBaSU44STzyT4x6bbLFdYHxt/ZsbjPyK0/2qo63hC4U9TIBUzTaw3fcEtJ6Y2XQeUH/AHG2P6SY/EuPI7ESfmZvbl/pXPzCYzfuf0drWtNht2vRJ1mWfRNtvlbqSRhIV4H1x0W23QC4dILAuC1q1UWJiYqzi1NrbSQEgthPPn4iNktFO+9CoDe5pxnz3Wqjv9ug4Cfa3SjtzMHad84y3fljp4qGu0n98lTf5Mz+QYsZ1i/ctuj+jXvxRGjRHZ1eum2rMrfVTrcm/KMdrltDZCjxJwOeYlVflBmLns2sW9KOJbeqEothClDIBUOsY2ChqKOhlilbhxJx9Fn7R+ILdeuIKWroZQ+NjWAnfYhxJ5joFX1sYeRLaz1N9zkhqUcWr2BeTEl1bg9FNXL9Z0oqFA8/U52ifOJppPAFJHRKs5BOI8ztw2oXdpJqBN3RXarKTUrMMKa7NtBB5qz3nwjb1e2WTtRvBeoulNwJpFUVMCaUwpPohzizlJGMc/GIlBTXGht7WMjB7x1NOMkeXRXfEd14X4h4lmnmqS0GNojkbkNa8DHewM4812+qWx/SetUeoT9ssLos8lpS21IWVI4gO/iJwIwRsiZrDl33tZIdcep71MeZcSOaeMLACvbyEZfmrG3k3VSnbWq9yyVPk30di7NpOVrRjBPJX6Iy9oDt7oGhtKmW5WbVUKpUDxTc4tOCs8uQHcMjMbG25tTXx1FPCY2tzqzgZ8gAok3FD7Vw7VW241zaqSTT2YaS7Rg5Li4gfIbnKgLocPmn3KU+n3FhhUrOLkVlzkApZ4AfZkxagl1tTYdS4koI4goHljxiPm4PaRQdW58Xbb04mjXG3hRmAnKXSk5BUBzznPPMeDc033lP0Q2Qq75dNPLQl/PgocfZgYA+lnp6o2W2GosfaQGMvYTlpbj6HcYWniittftC92uIqmQTMYGSNkyOX+ZpAOeZ258lGvU5qY1T3Qz0nREl0zdXbbQUc+SEp4j/AHTGWPKC05NKXZ9PSciXZW2PckRn/b1tRoWj0w5clZm01e4HxkzCk8mievDnmD9pjq9122659cZ2kTNAqktKiQCwsPIKs5AHcR4RAfZaoW+dxbmWVwOB0GeS6CDj20Hia3RskxSUkZZrIPeJbjOOeNgAvV7QCk6B2/jxez7e0MRS8ob+6pRP5h/7qomtoVYFQ0z0ypVm1SYbfmZLtONaBhJ4lk8vjGFt0m1m7Na7yp1w0Krysq1KS3YqS6gkk8ZOeRHjFjc6Gons7KeNuXgN29MZXLcIcQ22g44mulTLpgc6UhxzycTjkM7rLO2j9w+0P6Oa/JEZQjx+kdnzlhad0O0qg+h6YpkqhhxaBgKIAGRHsI6ClYY4GMdzAH5L5teJmVFwnmiOWue4g+IJOEhCESFWpCEIIkIQgiRUzvwvmburXWp0h1Z7GhYlGk55YKQv/wDoxbNFVPlANPZm1daZm4ky6hK3AgTKV45cQARjPj6Bjo+FywV2Hc8HHr/TKjVWez2UaKfKmdnmJQdXnUNj8I4i6/Qq1KfZ+k9s0iQl0tJ+TmHnAMc3FtpKiffFJ0nMrlJpmaRniZWlY9xz+iLoNuF/0nUHSO36lTJtDy5WTZlJhIWFKQ4hCQc+8GLji4P7KMj4cn+S0UWNR8Vkx1tt1tTbiQpKgQQe8RULvVsyQsvXmtytNZQ0zPETqUJGAniJGP7sW7zc1LyUu5NTTqW2mkla1qOAAPExTzu9v6Q1F1wrlWpjyXZWWc81ZcSchaEkkEHv6xWcKB/vhI5Y3W2sxoWJKLVpuh1WVq0k4W5iUdS82oHmFJOQYlnvsr67noGmdecQpJm6EkqCjk8QUQT74ipa9vT903BIW9TWVOzNQfRLtpSM5Uo4H44ljv4t8WtSdNrfAUDJUJLa0qOSF8RKuftjqK4x/iFMD8Xe+mFEiB7J59FDpPURbfsSSE7eKQR/Cmnyf7o/RFSCeoi2zYisJ290wLUB+y3sZPdhMQ+Kz/c2/wC4fxWdH+8WbbxtSkXvbc/bFclkvyc+0WnEqGevfFN+v+j1U0X1DqFrTqFrlg4Vyj5SQl1onkQfj8Iuo7Rv79PxiN+9/R6iajaWTdxqLbVUoCO2ZfxklOQCk+rBPxjmeH7iaGpDHfC7Y/wKl1EXaNyOYVaFk6tXlYNDrVAt2oLYlK8z5vNpBPNOFDl/WMeRYl5iemUS7CVOvPK4UpSMlSjG0pODgGJTbBdH6PqHqUu4K5wOy1vgPol1JyFuAgjPq6x9Aq5orfC+pI9fPoFXMBkcGZUvdlu3tnR+xEV2rsj5erjQcmMjm0jlhH1Z98YQ8p9+32h7X/yURP5CEtoS2gAJSAAB3CIA+U+/b7Q9r/5KI4Sz1L6u7Nmk5nP5KwnaGQ6QoIS0tMTkw3KyrZcdcPClI6kx6PT26atp7fVLuGScXLTNPmkKUehA6K+omPjTggXzRSRn9mN8vfGUN3mlS9M9TVvSsutFOrTDc5LHh9EApAIz06gmO7mnYZhSv/zNP9FXNBDdY6Kem4HcFIW9tyF80aZQt+5ZQS8pwq5jtU8KiPWAsGKouxqFYmZiYQ2t93C5h4gZIGcqUfjHf13U26bis6jWLUZ5S6XRFrXKtc8JKgkHv/4RGa9C9Jku6B6l6sz7JBlaS/JyKiOvEk8RHsKBFZRUrLFTuLty52PqcALdI41Dh5KNSU4UM9cxP/TX/wAP+sfzpz8luIA5JXn1xP7TU48n/WP505+S3Gy+/uov97VjT8z6KAJ6xInaZuaou3t2srrFBm6iKkkBHYLSnhI4eufZEdVcozvtj2xvbh3Kshq4m6X8mpB9Jor488PgR4xOuXu5pnCq+Dr9fJa4tWsaOakvU/KaWm/TplmUsKpdu40tDfG62UhRBAzz6RAO6K45ctx1KvutBtVRmnZkoHRJWoqx9cTh/wAmHPfxhsf2VX/XHY0XyYkk1OIdrd/h6WBHG01LKQpQ78K4jj4RQ0dfZbdqdTuOT6lSXxzy7OCjtsrs2r3JrhRapIS61S1GWqamXOE8KUhJHXx9IR4DXc8WsF2K8ai5+iLcdLtDrB0Wt56lWVSgyp5s9vMLwp104/hKwMxUbruC3rBdiFclJqTgP1RvtVyFzrpJGDADQB9VjNEYowF6Tad+7zaf8/a/LTFykUv7YqpKUnW+1JudeQ00KgyCpRwBlae+Lnm3EOoS62oKSsBSSOhB6RTcXD+8Rn/2/wAVvo/hKrf8pj+6JRRn/wCno/KXELU4zEy/KWT8m/qZSJVmabcdap6O0QlQJQeJfI+EQ0H0o6exf4fF6fxUSo/elWD616N3HqXtXs6sWw0Zmaokqh1yXA9JbeDkj15IiAE5T5+mvqlp6UeYdQcFDiCkg+wxbLpdrhplp7pha1Du642ZGbNOQvsljmUkD7Y8ze9f2TagPrnLjcpC5tzJXMMtoQ4o+JVziht11noy6J8TnMySCB5qRJC1+CDuoJaUbm9VtHqeqk2rWyJBS+MSrpJbCj1OBiM9W75SW5TLtyt82VIVJtOOIsJwo+v0lGMqO7DNBtRKI3cWnlcnWWJvJZe7ftG/ZgAeMR41+2M3Xo7bc5eslXpap0qTILoCezWhOCc4KjnpEsVNmuMmmRuHnxGDn1HVYFk8TdjspK2Bvt0IumYakq/bnyE46oIC320rT/dBiUlrT9r1mmt1m1nZN6UmUhSXZfGFD3e2KJQeeMxOXybGotxuXPUtP5qedepZl/OGGlElLSwFE47hnA+EQrxw/FTwOqKckY5g7rZBUlztLlYfCEI4tTkhCEESEIQRIQhBEhCEESEIQRIQjQwRYx1C3J6OaW1/7mb3u5unVHskvdiWHF+iQCDlKSOhEYn1U38aF0S0J122K4a9PvMraalWmVt81AjJK0gYjA+/LQnVHUPW1dctG1JyoSRkGGw602pSeJLaQRkDxERuTtK17WoI+b+pDiIHNlf2R3NtsVrlhjnml3IBIyBv4eK5WtutfHK+GKPYEgHB/osXOOTNz3EVNtAP1GZCUIQOXEtQAAHvi8LQu25u1NJbVok+sKmJemy/aYSRgltORg+ERM2p+T/mrQrkpfmr7cs9NSoS7KU1CgtLbg5haj0JHIgY5ERPDhAASkAAd0ReKbtDWllPTnIbzPTPkt9gt0tKHTTDBd0VJ+7j98Hd389T+bTFhfk5v3vjH9IvfkIiIe5TbZrFdetl0V2h2VUJqSmZpK2XUMqKVDs0jIOOfSJtbGLHuawdEmKHdVLekJ0TzjhZdSUqCShABwfYYsb9UQyWeJjHAnu7Z35KFaIZGXJ7nNIHe6eawH5SrQSp1B2X1poiC8202iUqDSEEqAAAQvl3AA5MQV081AuXTC6pO7LXn3JSeknAtKkn6Q8D6ovjrFHplfpkxR6xJNTcnNtlp5l1IUlaSMEEGKzt0ewW47TqM7eGlcoupUZ50umQbHE9L5GSEgc1DPgI84cvkL4RQVZAxsCeRHgV7erVK2X3umHmccwfFSB0f8olpLeFHS3qA45blRl2wl0uILjbyu8oCQSB7Y9hce+3brQKNMVKm3X8qPtDKJViXcQtw+AKk4+MVEVW3a9QJpyRrNJm5F9s+m3MMqQpPtB6RxG5WafPCy0tZ8EgkxYu4Rt0j+0aSAegO35KG3iOsY3QQCfHG6zfuh3S3JuGr4yHZC3pRWZSnlWcH79fcVdenjHW7WdEqzrRqlSqSxJuimSr6ZiemSk9m2hPpAE+sgDHrjlaObRtX9XKqwzI23MU6n8SVPzc62WUhs96eLHF16AxavoNoFZ2glr/ACDbDLinpjC5yYdXxKdcwMkeA5DlGN1u1LZqX3WjxqxgAdPM+a9oLfUXOf3iozp5knr5BewrFNlKRZk3S5BoNS0rT3GWkDolCUEARRVdnK9qv/SUx+dVF8dxy7s1Q5+XYQVLclXUJA7yUnAine5NrGuM3dFVn2LBqa2XZ99xCgwvmkukgjl4RVcHVEcRmMrgM45nHip/EsL5OzEbScZ5D0Xr90ejnmOk2nOrVGp3AzUKWJeoFpPLtQtZ7RXtHCI9J5NnWB22NR5jTmozJEhXWitrjVhKHUAkY9aiQImlS9H0Xjtbp+md2U4tzPyMWy2tPpNPJUVJ69DkCK4KNtm3DWHdzFaoVmVNUxR5xLrTzbKwFltQIIwOhxE6jrILpRTUM7wCCQCT0zkH5KLU00tBVRVULSQQCcem/wBVMfykur0zamnMrp7TFBMxcZJfXxjkwnKVJx15kg+6K89DmrRe1SoCr5qcvT6M1NB6affbUtCQkFQyE8+ZAHvidW8TQzUHXLT20NRKPbDpr1PkksVGSVkPEkDiUBjJ5p6Y74h5+pK15ByNPal/6K/+mJFgdSQ27se0DXHIO4znl+XJabw2olrO0DCQMY2OMKzpneptmlWksM6hS6G2xwpSmUewB4fRjNdFrNOuClStapMwH5OdZQ+w4ARxoUAQcHn0IilsbTdehk/N/Uxy/wBSv7IuA0fpc9RdMbYpVSZUzNStLlmnW1DBStLSQQfeI5S+Wuit7GOpZNRJOdwfyXQWqvqaxzmzs0geRH5r2MIQjm1dpCEIIkIQgiQhCCJCEcWqJmF0+YTKH9eLZ4PbBegZOFGrVfd69TL0TpppTQTXa8XuxWvOW0qwTgDBz7fbHQ3Rrdus00pf3U3xZdLmKSlaeNMpgrQCf4WE8usRw0PveR033HqqN6NlKF1F5l51wZLRJVg8/aB74nVuXu+3KXovV35ubYeRUmPN5QZB7VaxwpKfeoRx9JVzXCCapfMWFhOAMYAHLORvlfbbxZaHhi4UFrioWzsmawl7tRc8u56SCA3HTbzK7rQ3W229b7TTX6KSzMsENzcqr6TS+fxBwTmMkRDvYrbDenVvVKfuqsS8lNVx1tUvJuOYXwpChxEevII9sTCQtLiQtCgpJGQQeRjoLXUS1VIyWYYcRuvm/GFrpLReqikoCXQtcdJPh4Z64O2fJfUadI1jQ93tiwXMqHdyb27gourExp63bDTjLNQRJh7tQCQQOeOH1xMRJ4kg46xU7qFn9U3UMHn8ttfiTFrq32ZWVVMTDqW2m0Fa1qOAAOZMc5YK6esfUCd2Q12B5DdfT/aPw/QWRludQR6TLC1ztycuON9/Vb0IwXeG8fRq0p16npqz1UfYJStMigOcKh1ByRHZ2Duq0g1AnmqVIV7zKeeOG5acAQtZ8AATFsLjSOk7ISN1eGQuOfwveo6f3t1LII8ZzpOMePosk3dWl25bFUrrTQcXISb0ylJ/hFCCrH1RGvb5vBrWsWo4sqet1uUaLDrvapcCvoqSPAeMSB1TIVpxchByPkqa6f8A6VRXVsoqtOoet7lXrE61JyUtITK3n3VcKEJCkcyYqrrXTU1dTRMdhric/Zdfwjw/Q3Thu6Vs8eqWIN0HfIJz0HNWfjxjWI8VDfFovTqqaYqanXUBZR5y22ktHn1B4ukZpsu97Z1AoTNxWrVGp6SfHJbZzg+B9fOLiGtpqlxZC8OI8CuJr7BdLXE2atp3xtdyLmkBd9CMQz26TSen3aqzJisLFRTM+alGBjjzjHXxEdVe28TR2yai5S36m/UH2VBLvmaAsNkjOCSR3GMHXKkaC50jcDY79VIj4Wvcr2sZSyEuGod07jx9FnOEY90v12051cS4m0K0l6YaHEuWcwHUjxIGfX8I72+tRbQ04pKqzd9aYp8v0SXFYKj4CN7aiJ8fbNcC3xzsq6W11sFV7lJE4S8tJB1fTmvSwiOa99GjqJ3zbs6spkHHnAl09n7c8XSMv6eapWTqhTDVLOrbE82jk4lB9Js+BEaoK+lqXaIZAT4AqZcOHbtaou3rad7GeJBx9V62EdXclzUG0aU9W7jqbEjJMDLjzqsJEYMqW+LRmQnRKS71RnkcRSX5dkKbHrzmPaitp6UgTPDc+JWu22G53cF1DA6QDmQCR9eSkPCPAaba46c6qJUi06+y/MtjK5ZRAcSPWPjHa6jak2xpdQPujuubMvJ9qlniAB9I5x19hjYKiEx9sHDT452Wh9rrY6oUL4nCUnGnB1Z9F6qEYgkN1Gjs/bU3dCLkQiUlXewPHjiW5gHhSB1ODHm6Jve0VrFXTSXZ6bkCtYQl2ZQlKMk4HMExHdcqNmA6Vu/LdWMXCl8nDzHSSHR8XdOykHCNmTnJaoSrU7JvJeYfQlxtaTkKSRkEe6N6JyoCCDgpCEILxIxbuC0Lt7XSzHaDU2Uon2AVyMyBhTTnt8ME8vXGUoRsilfC8SRnBC8IDhgql/VzbfqfpFVJiUr9Aedk21HgnWElbK0+PFgR1GmmtepGkcwt2yq+7KJcOVMr9Nonx4Dyz7outn6VTao0WKlIS802oYKXmkrH1iMb1zbHodcLq5ip6f09Tzh4itHEjB9iSBHWRcUtkj7Osi1en6FQnUhBzGVWdfm8XXPUKjuUKr3KhmUdRwOCVZSypQ/lIAMYqtqzLrvWfEnbdHm6lMOLCcMtlZyT3xblTtoWgNPWHBYUo6oK4gVrc5f3oyPblhWdacsJW3rckJJtPTs2Rn4nnGY4lpaVhZSQ4+gH2T3V7zl7lFLZ/swe07m2NRNR2UGtpTmUk/pJYB/hHP8AC6d3KPBeU5acXclqcCSf2CsDA/8AMMWEx1NZtW3bhW25W6LJzymhhBfaCykerMUcV3l9+bWzd4jp8sKQYR2fZt2VE3msyD+1K+EekpV/6jUKSRTaLddckZVBylmXnXW0A/yUqAi6T5s7B/3QpP8AZUfZGvzaWD/uhSf7Kj7Ivn8WRyDD4cj1/kopoieqpnGq+rf+/ty4/pN//qiT23a57nuTQPU9Vw12pVJbbA4DNzK3ik5RyHETiJ8/NpYX+6FJ/sqPsjnSVnWvTpV+SkaDIsMTP7c22ylKV+0Ac+kQ6q/wTx6I4dO4PToc+CzjpNDtWVRSZaYJyGlY9kTl8mU2tuvXMFJI/Wk9fYInF82Vgf7n0n+yo+yOzo1q27b6lrotFk5JTn0yw0EcXtxHtx4kFdTugEeM9c/yXsdKY3B2V2sQB8p2y449aJQgqwX+n8lET+jq6zbFv3D2ZrdHlJ7svodu0F8PszFHbqz3CpbPjOOikSs7RulUkacy7yL4ohU2ofs1sdPXFkO9/SM6gaKSlxyEt2lQtxhuYTw/SU2UhJT7BxExIVrTexGXEPNWnS0LQeJKkyyAQfEco79+UlpqWVJzDCHGFp4FNqTlJHhiLau4gNTURTxt0lnnzWllNpaWk81RJQ6BP1ysSNHkmFKenphthsBOea1AD8cWj6hacyWmOyuu2jIMBC2aEtx8Acy8tviX/eJjO8tp1Y0o+3My1qUtt1ohSFplkApI6Eco7uekJOpSjkhPyzb8u6nhW04kFKh4ERjcr+a98ZDcNac4zzXsVMIwd+aoa81f4v2pXwifWmyFHyf9XBSc+cuH+6iJmfNlYP8AuhSf7Kj7I7Ni2aBL0pVEZo8oiQVzMuloBs/g9I3V/EYrWNaI8aXA8/D5LGKl7Mk5VEq5Z/IKWlEEZ6RPDyYoDc5djS+S+BJweuPQia/zZ2B0+4+k/wBlR9kdjRrVt23luOUSiycip0YWWGgjiHrxGdx4kbX0zqfs8E43z5+i8ipTG7VldtCEI5RTFooBQKSMgjEV3b1dotzC6JzU/T+mO1CUqSy9PSzKCVtOd6gBnl08OkWJR8uNtuoLbqErSrkUqGQYnW+4S26btYvmPFa5IxKMFUMPy1Tos/2bqHpSal1Z55QtCh9YMZ0oW93Xy36PLUWWuNhxmWa7JtTssha+H1qIJMWeXTohpVeiiu47Jpsyo9VBvsyfenEeBmtlWgMzNpmUWe20En6CXFkflR07+JKKqAFTBnHoVEFK9nwOVTl2XVcV9V6YuG4592dn5tfEtxZJ5nuA7h6hGWtvm1m/NX7lk1P0aYk6AhxK5qcdQUpU3nmEnvJGe+LL7f2y6H2y+iapNgSCHkcwtfEvn7FEiMkyVPkKayJenyTEs2OQQy2ED4CNdTxUOz7Olj07cz0+QXrKTfLyoi7uNob982rSKtp5LhVTt2STKebAYMw2kDny6q5DuiuS4rXuS055dOuGkzMhMoJSpt9spP1xe7Hmbl00sO72lM3Fa1PnAv6RUyAo/hDnEO2cSS0LOylbqb91slpWyHIOFUVplud1e0mozlAtO4A3IuFRDL7YdCCe9PFnHujd1H3S6wap24m1rpr6HJAHK22mkt9p1+kU4yOfQxY/ceyvQKvthKLQbkiDklhxeT8VRx7e2Q6BUMq7W1hO8X+ucWMfBUWH4/bS7tjB3/l+a1mml+EO2VTtBtqv3RPoptApcxPzThAS0w2VKJ9giy3Y3torWktMmryvKWMvWKo2lDcuScst4PXPQniPL1RIm1NLdP7JZDFs2rISaU9CGgpQ/CVkx6oADkIr7rxFJXxmGNulp5+JWyGmEZ1E5K1hCEc0pSQhCCJCEIIkIQgiQhCCJCEIIo7L3uaWNWxW7lelqohFGq/yL2BZT2j8xwhWEDi5jBj0+oe5e09MdL6VqfdNLqLEpVuDspUNDt08WOqSodOLxivG17SuO1ryqmstRth6sUChXetqcpTjLnpAtZD4HLIHEB7oypuDuuuboNQ6TQdNLIrF0W/RqaX1ySWgwhEw4lSf9JwZKeFJ6+yO0fYqQTsDf3e5cc8sAd3yPmfFcw27VBicT8ewaMc9+fp5KXt87lbCsrR+n6zzSZucotQWw2hMqgKcSt1JUARkDIwQeceWtrenpZc1p3RdEtJ1dhdqSiZ2dknmUpf7JS0JCkp4ufNxPfEO6zUrumNpNY0kr9FqcpXrduqWWzLOsFRSysvn0SkEEJHCOsb9o0atUuwdbqVfcnVHr7m6FLDtTLjsnpcLlilKOAc1ABPwMG2GlZG7XkkPwMHm3LcH0wdyvTdqhz26dhp3yOuDt65HJWS2BeVN1Bsuj3vSG3W5KsyqJphLyeFYSrpkZPOMUXZu+06trUE6dyslVavOtPNsTD0iwlxplxX8FSuIYIOc8u6PNbL9a6NdNgUHTJug1WTn7bo7KJl2ZZKG1KHFnhyPVEdNX5+UoOoFeunQa4Lnk72n6wmUdpDkilTM16agpSFKbIAz3lQ6xApbQx1ZLTztIx8PhudiSM4GOv1UyouDhTRzREb8/HluANt8qQU3v50zlbubs561rmE+88Gkp80Tg+v6fSO6vTe9pTZ1dmKGxK1eseZLCJqYkGEutMq7wVcQ6Ri++aFVajus01XN0VQmH7fKZpQl/QQ+pBzxEDGcmPJ6U6j29tzoV0aXalaaVGo3CudmS5Mole1am0rQEpyrmcEg9MRKFso5GNfHGXO0g6Q7nkkE5xyGPuoxrqlji17wBkjJHgAcfPP2UgL83taV2RSbcrAl6pVZe5kKVKeZMJcIUnhylQ4hg+kBiOXIbwdN61prN6i06nVabYkJoSk7INy6TMsLIJAWji5ZAz17xEArqsDVJtNiTFHos/R5+s16cm6LKFrjbkUuPIU0RnOBgjko90Zp0Q1JZ0W0a1AfuehVebvl2fKZhh6UCg+/wkBbYSnHDwgde+N09jo4oGuiBc7VjGefexv4Dz8VqiutS+Utk7rceHln/wDDwWX7M170O3JXa/YUjpDNzU2PTnZiYpLSOwSOYK3ASoZIxGbbf0G0gtqbVO0uxqQlxQ4cuy6HBj2KBxEUNiN324ifqNJfpddavS6+1em5+ZlQhtohJUAk8IxjhiU3zf6lHn86k9z/AOBH/RFXdYvdag08bixoA5knPn6eCn2+T3iETSNDneQG3l6r0953PQ9NbLqt2zUnwyFHljMOtSrQB4BgYCRgd8YHpe/bTaqUCo3Gi2bkakqdLpmFuuSaQlaVL4Bwnj5849PrTa120zQe/wBqsXPNV1cxSlhltSASk5TyASkExB6i1iZn9ttXsxFYu6ZnZanSyVUmYkWkybX7JGQ2Uthw8ufNRjdarZT1ULnyd46gMgkbHGen5rXcK+anlDGbDSTjbmPmp8tbndOJ3R5zWWlTL07SWEAvMtJBeaWRzQpOcBQ6HnGPajv20rp1wfIL1CuFbiZdmaddblUqQ224hKwVHj7goRFTUXTfULQrRWnTNpMzFUta/KVLOT8ktpRck5rgyThIGMlZx16c45mm2o9O0j1Or9TuyyqnU2ahbknLMNtyZWFOebNDHMeoxPjsdGWOkjBkGTpAODtgYPmN1EfdakOax+GHbO2Rvnf0OynPXtzukNAsCS1Ceudl+nVH0JNDJCnX3PvEpzzV6sx5TTnefpTf1yi1n2apQZ1xHGympshkOew8RiJdJ0u1B0wsey9VLjsybqFIka07UZqmtgLcYYWkpSSknHUjpHrtVbwoW6K+rRo+n2nM3JGnTKpuqT8zLqZU3JpKFLSCnAIKUq7s+EaRZaMZa3Lm97LwRhuOQI6/x6LZ+J1JwTgO2w3By7PUHopCW5vQ06uy8puzaJRK9Mqk33GHJtEsksBSFFJ9Lj6ZB7o5D+8PTCWsOWvd5ipDz+cMjJyAaBmJh0HGEJ4uff390Q1U6/pveTEptuqVcnvluamG6xRp+Tw2hSHCkHj4AeEjJGFZwRnnHT2JaF+WQxaGs1VkKhVaPIzswxMya2cinrWlxPGlOATgrBBOecSDYaIjWMgbYBOCTg7HI2yRt9lpF2qgdJ3O+SBsOW48cA7qZl0b3tOrVn0Uect64JipoYD05KS0sFuSZOfQcHGOFQwciOyr+9PSujWLS77lGqjUZSpP+bdjLMpU8y7kgoWniGDlJ7+6I16LazUDRW4Lz+7ezK9XRXJtc3I1ZcmFqnWSpRSVcuWR3YHWPBSVi3zN0Vi6KbSXqWi6L1TO0tqYYUQwguPEFSQDgekIxFkpNWHtIAxvq2dkbgDmMf1WRulRpy1wJOdsfDg7euVMaT3zaRT1k1G72E1IO0pSRNU1bKRNIBKQFcPF0yoDrGTtGtYaNrRbK7nolKqMjLofUxwTrIbWSnHMAE8ucQo1g203XptYN3ah3PcyazWLjXLoUmnS6uFtIU0eLhKBzHB3DESn2kT8vP6XsLYu2p14ocUha5+WSythQCctgJQjIHjg9esVtwoaKOkNRS5PexnJ22G3LxzucKdR1VU+p7Go22z08T5rN8IQjm1dJCEIIkIQgiRszk3LSEs5OTj6GWWklS1rOEpHiTG9Eb99V61W1dHXZKlOqZVVZlEq64k4PZqCgoe+I1ZUto4Hzu5NGVa2O1Pvdxht0ZwZHBufDJ5qLm422aHqhftcu7Rmhzc5LUxHa1eYZADXaAhOUDkSeafHvMdNoPXLV1BuORsrWmv1RySZQmXpQU6A0wvoAQRnn6IiUmwaUos5pBUmA1LuPPzqhN8gVKyhIwr1YAjDG7ra1OWJUHtR7Ak3DSHHO0mGGUkmVXn6QA6JyR3csRwlRQTNibeIgHau89vTHp1x1891+i7fxDQvq5eCKx5iMX7OGYnvhwGOZ5E9MY7vdXstw20Gg2xYM5fWnlZn0P0pozLjSnsocbAJJGO/kO/vjJGxjUW6L400m5O55pc0uizIlGHV/SLfCk4J7+ajEeLL3aVSq6J1rSm5mnp6szUsZGlvpBUXEqSQEq69PRESz29aaTGkui4lXOEVWbYcn5kgdHSk4+oJi2tZp6mubU0GzCzvDpnoPVcVxfHc7Zw++1cRYfOJgInnGSwDvEHnp3A36nHRZnU42ggLcSknoCcZjU93tiuTSHXDU+89faVS7ruudclEvuI827Qpaz3DhzFjZ7vbF7bblHc2OfGCADjdfPeKuFKrhKeKnq3tc57Q7u5wATy3AVTuoZCdzdQUf9ttfiTEpd+esdTtW3JHT+35t2WmaoOObcbOCGeWB78KERcv1lc1ucnmmRxKXW2wPgmMp+URkJlvUWk1BTagw7T22kq7itJUT9REcJHPJBRVpj5l+PkSV+h6i2Utx4gsAqgCBT5weRLWtI+5+yzFso0TtiT01avWvUmXnatVnFntXk8RQ2FEADPiMR4ffdpBR7XlaRqTZ8k3TZkTHYzXm/o8RAUoL9v0REi9rM5Lz2iFuvyxTwdkUEA9Ck8J+sGMfb+5phjR9hp1xKVPTvCgHqTwk/ojoqqigZY8Bo2aCD1zzyvl9mvtwqPaCHvkJ1zOYW5205LdOOWAFwNB9XJ3U3bTcEvXH1v1WkUybl3nFnJcQGSEqPrPOIk7WbDkNR9ZZe26u4v5PKHH5lpJwHkJUkFB9RzGZNm8hNt6QakVJbREs/TH2kL7ipLa8j6xHhdiQA3AJ/mMx+WiKWR7qw28z75znPXcL6DTQMscXErbcdIZpLcdCWknHhgk48FJfdBt/wBL5TRqr1ejWvKU6do7KXZd5hJCvpJTg5zywoxiTyc1z1hdz3BbC5lS5BMs28lsnkheV5I9uB8IlFui/cIu3+Zj84iIkeTl/dHuH+Ytfjciyr2Mp77TdkNOQc42zzXH8PVc9y9nt1FY8yaHNLdRJxnTyysTarU6Zq+4epUyUmFMPTFWU2hxJ5oJWcGJ/SO2bSKXsD5IftKUffckip2bcBLq3CnPETnrEFLy/fSu/wBO/wDuGLQU8rfT/M//AG41cOU8U0tS6RoJ1Y338VO9qF1rKGjtMdLKWAxgnSSMkBuM4546KsLQyan9OdycnRqNOOdm3UjT1c+S0KUEHPuJjIu/aszTestGkqsXnKPLyiHAznCVZ4SvHj3fGMb2i52W6tp0AEouJKsHof11MTv1+0Z0z1kk5eRuiqylPqrB7OTme2Sl1JV/BxkFQOBy9UQbdSS1ttqKeE4IfsDy26fNdDxPeqOw8U266VzC5roCHEDLhkY1eoz677Lp7OuvbjqDZbFCprtDCX5IMKl3k9mUK4f+LHfzjz233avUdJrzfvGn3uy/T31ONpkpbJQpog8GTzBIyYwRdfk/NSqJ2s9aVdk6mhnLjfEQysjuxzOTG5tW1l1GsDVZvSu9Jqcdk3HFyzkrMqJLDo5Dhz0GcfCLFlaW1UQuVPocDhrhyz8v5rmamxNktNbLwrc+3jc3VJE8ZdpG/XkR44B25rrd4+qNc1I1XTp5RZt1FMkFpl0shWEuPHAUT7CD8YmlpfodYNnWJT6E1bsm8tcqnzl5beVOqUMkn4xXhqLKv0jcpOCoLLJTWS9xK5YQpwkH4GLU6QQqlSagcgy7fPx9ERssH98rKmecZcDjfoN9govtIJsljtVvt7i2Is1nG2p2BuSOfMqtjcNQJ3bnr61XLGcXT5N4tzrLTKsJAK1cTePDAx74zru0u9m+trNIudrAM7MSi3B4OdmriHxzGMPKIzTC9RaVKoWkuokkKUAeYBKgPxGO61Up83TNkVvS86lQcVPNOjP3qgsj6jFa5xgkr6WP4NJOPArq4mNuFNw5danecva0u6lvn44x911exLSG2NQmqvXrvkxUZamPhuXlXT+t9pwpPEQO/CiI7HflozZll02iXhadJl6Y7MvLln22E8KV8IBCvb6Uet8m/wD9zbm/pAfm0R2flGP3N6B/SC/yUxu91hHDZk0jVjOeucqqnvlez2oNpxK7s+0DNOTp0lu+3Lz9V7LY9ctVuPRCSXVX1PLlJh1hC1HJ4AtQA9wAESEiM2wH9w5Gf/vnvzi4kzHVWdxfb4XO56QvknHMTIOJK6OMYAkdgD1SEIRZLlEjgLrdLbWpC51lKknBBV0jnx1L9rUGZdU89TGVrV1JSOcQa81rWD3ENLuuokDHyBWyPs8/tM/Jff3RUfOPP2vjHyu6KG2PSn2+XhkxxXLJt5YwJLg/kHH6I0NkUAp4fNljljkofZFA+XirV3I4Mebn/wDipIFH1LvoFyTddCABM+gA+oxtrvO3UdZ7PsQo/ojaTZFDSCA07z8Vj7I+fuFoRPND/wD6n+ERXzcZjdsVP/2k/Re6aLPN32Wpvu2wcGex+Ar7I0XfltI6z/wSr7I2HdO6C5zBmB/zP8I216bUFQxxzP8A6n+EQZZ+PgToipT/AMpP0W5rbaeZf9At46iWwDjz4/1D9kbLmo9BT+1rWv2HH6I2vmwoBBBVMH8ONo6V0Enkt8fhxWzT+0lw/ZxUw+bz+a2tbaupf9lvJ1Ko5BJZcB8OIR8jUyklWDLOgePGI2jpXRwPQed95zHx81kgBgTXPx4YrJKj2pD4Y4Pl/MraG2fxcuQrU2lA4Eq6fYsRx3tVJFBITTXCO49oMn6o2H9KEK/aZ9se1uPj5pgEACpoKu8lrH6Yiuqfaw74Yod/Nv8AFyzDbN1Lvut752JLgyaY7/XEbSdW5QqOaW7ju9IRsjSR3JJqbfTlhv8AxjivaS1Hi/W59ojP3uP0xWVNT7XIf/TYf9ojP8Vua2yu6n55XOOrkuDypbg9qhGnztNK+jI49pjhK0lqI6T7SvVw4/TGnzTVDGfO2x6v/hiulrPa44/uyPQR/qtgZZR1/Ncw6rkD0ZVvPrzG38681n/NmcewxxvmqqWCA83/AFhHx81VXz9JvHjxiK99Z7Wwfgk+QjWwR2XxH3XPGqysZVLNn4x9jVltP0pHPsMcD5qqj07VHt4hH1809QHPzps+r/4YkR1XtcxnQ75iNYlll8R91zhq5LE4NMc9yhH0dWpXiAFLdx/KEdenSWoE5NQaT+Dn9MGtJqjxfrk81jP3uf0xNbW+1x2G9l9o/wBVgY7KOv5rtTqxJBPo017P8oRvMaqU1z9skHU/hiOvGkjmRmqN47/1r/GNxzSVJA7OpoBz3tf4xNZV+1yM5MTD/wDH+q1lllOwJ+67JOplKPWVdH4YjU6mUkK4RLOkePGI69rSlCf22oNn2NxvjSyQxgzPv4Ymx1PtZeN44h66f4ErAtsw6n7rlq1KoyU5DThPhxCPtrUegL5uLU37Tn9EcT5qqMfpvOn2HEajSqggjK3z+HFlDN7UQcvZT+h/ktTm2joXLsBqJa5z+zjn+Qfsjdbvy2ljIn/ilX2R1/zX2/jHE/8A1/8ACN5Gm9ASMZmD/wAz/CLKKo9pGcPhpvq9aS21dHP+y5Yvq2j0n/7ivsjeRedurVwifxyzkoUB+KOEzp5QGjkh9WfFf+Eb33DUIHIbf5f+Z/hFhHLx8Bl8dN/2k/RanNt3Qu+y5YuqhEFQn0YHPoYMXXQ5hOUTqU92FAgxx1WVQ1J4Sy7j+WPsgLJoIGPNl+0qH2RMjn4zz34qf/tJ/wCKw00Pi76Bcz7o6PnHn7XxjeZrFNmHEtMzjS1K6AK5mOuRZNvIGDIhf8s5jlSls0OReS/K01ltxHRSUjIixpJOJXPHvTIQ3O+HPJx1x3ea1PFLjuF30C7SEIR1CiJCEIIkIQgiQhCCJCEIIkIQgi4oplPDTjIk2uzdOVp4eSj641labISKlLk5Vtkq+lwDGY5MI9yV5gLiOUqnPKWt2TaWpwgqJT1x0jRdIpbjheckWVLUOEqKeZEcyENR8UwFxpWmyEkoqlJRpokYJQnHKNDS6eZgTRlG+2ByHOH0sxyoQyUwFsrk5Vb6ZpbCFPIGErI5iNt6mU+Yd7d+Tacc++UnJjlQhkpgLjuyEm+ttx6WbWpo5QVDJT7I47tAorz3nDtMl1uffFAzHYQgHEcimAVxJelU2UcDstJNNLHQpTgxy4QgSTzXuML4dabebU06gLQoYKT0McVNFpKElKaewAoYICOsc2EASOS8wCuO9IScwwmVflm1spxhChkDHSNpVFpK1caqewVYAzwRzYQDiOSYC23Jdl5ksOthTZGCk9CI2ZemSEosrlpRtpRGCUpxyjlQhkpgLhopFMaeMw3JNJdPVYTzMfYpsiJcyglWwyrq3w+iY5MIaj4pgLhGjUstoZMgyUNjCElPJI9Ubq5CTcS2lyXQoNEFsEfRx0xHIhDUfFMBbUxKy8212MyyhxB/gqGRGktKSsmgtyrCGkk5ISMDMb0IZPJe46pCEI8RIQhBEhCEESMXbjNIxrFprO2zLFKJ9BExKKV07VIOAfVkxlGEap4WVEbopBkEYKmW+untlVHWUxw9hDgfMKrvTW+dYdqN1TtPnLafMpMr4ZmVfQQlzHRSDjl0ESMTui1E1YpLlAsjRh2fcnmyy6uYz2LaVDBJyDkDPhErJyj0mf8A89pss+fFxoExuS1PkJJITKSbDIAx+tthP4opKSzVFG3sY6g9n4YGR8z+i7+88d229yiuqbYz3nbL9bgCRjBLRjPL/UqxNV9qOq2nTsnc0nIGdM64qYc+TwSJVxR4gjoMYyR7ol1ta1Xu+8beNmajUCbkqnJM9m2+63hMw305+vmfhEhnGWnk8LrSFjwUkER8Nykq0rjalmkK8UoAMZ0VjZb6gzU7yGnm3mCtF+9oU/E9sZQ3SBrpGHuyDZw8scsY2/mq99eNBtQtI9WvnUsCjuztKE6ifR2KeLslBfEUKGOScAD4xkaa36vO2+ZSQsWe+6NTQSEFs9kHMczn2+qJiustPJKHmkOJPUKSCPrjhJt6hNv+copEml378Mpz+KPG2aWmke6jl0NeckYzv4jlhey8c0t0poI75RCeSEaWvDywlo5B2xz9lAzbPt1vq+dSxqtqHTHpGRZmVTiEvpIVMLIwMDwGfqiT25vQeX1vsrzGUWhmryBU9JukdTyykn14x74zGhttpPA2hKEjuSMCPqN9NZaanpXUp7wf8RPMlQLtx5dLnd4buwiN0OBG1vJoHTfnnr4qB+iWq2om2SlzVgakWHVHaey8pyWfabKiMkk46ZBJzHVauVPVbd5clKo1qWbPU+35FYWHn0lKcnIK19cclEfCJ/uyUm+SX5VlzIweNsHl74MykrLcpeWaaH/AgJ/FEZ1ke+EUj5iYh0wM46DP8laR+0Cngr3XmGgY2rOTr1OLQ4jBcGcgfnjyWI7f0jldKtAqnYtIb85mRS5kurSn0nnlMkH4kCImbK9P70t7XJNSrdtz0nLeZzCe1dbwnJUjAixQgKBCgCD1BjbblZZpXG1LtoV4pQAYkVFnimlgkacCLkPp+irbbxzV0NFX0sjA91X8TiTkHfcfVY23I0yeq+it0U6nSrkxMvSgS202MqUeNPSIubA7Hu22L/rs1X6DNyLTsk2lC3kcIJyv7YnetCVpKFpCknqCMiPhqWl2SVMsNoJ70oA/FGdTa21NbHWl2Czoo9r4ultdhqrEyMFs5BLsnIxjkOXRVqXbpzfD+5NysNWxPqkzW+0Dwb9Ep4zzzFj4bX8hBvhPF5pw4789nHLMpKlfGZZoq654BmN3AxiFutTLc6RzXE6zn0WXFHGE3E8dLHLGG9g3SME78tz9FWfa+m96t7mGavM2zUESBr6XFP8AZcg32qcq+EZL3XaKasUvUVvVCxF1KqyAUh7sG3Fq83cSB/B6YPOJwCUlQvtBLNcWc54BmNxaEOJKFpCknuIyIgs4chbA+EvPedqzyIKv5valWyXGCvbAzEcfZFpyQ5vXPUH0UUqJvWYYokvTKvYFc+XWmQ2tpqXygrAx1z7O6PL6G6NX1qLrhPa533QHKLIOvuTMvLuJwpalZKccugOOcTNFLpiVFQp0sCeRIZTk/VHIQhDaQhtASkdABgRK/CpJnsdVS6ww5AwBv0J8VUf2xp6GGojs9IIXTgtc7WXkNO5DQQAM/M46qI28Pa1Wb+nhqNYEv2lVabCZmUbGFPBIABTjvAT9ccOxd3lxWXa8ra2odgVn5bkW/N0KQzkOkdOLmMH7ImMQDyMcZymU14gu0+WWQcgqaSefj0g+0llQ6ppZNDnc9sg+ePFeQcaCe2RWm8U4qI4j3DqLXNHhkZyPIj5qAFH0Z1Q3Qavq1Dvahv0ahdqkjtkkAsoUVJbT49SPfGeN51n1Cd0KlrctekuzKpSalm22WEZIQhChnHwiRzbTTKeBptKEjuSkAfVBxpt1PC62lY8FDIjGOyRR08sJcS6T4nHmt1Vx/V1Nzo60RNbFS47OMZ0gDHM8yTgZKid5P21Lita07il7go8zIOOzwUhLyOHiHAjmPhHYb+7ar1zaf0OVoNLmJ55ufWpSWU8RAwnmYlC2yyyCGmkIB68KQPxQcZaeHC60hYHQKSD+OMzaGfh34dqOMYz155UKTjGaTiYcSmIaw8P05ONhjGeajzsboFZtzRtNPrlOek5gTryuzdThWC4rBiRMfDbTTKeFptKB4JAAj7ifR0wo6dkAOQ0YVFfLo+93Ga4vbpMri4gchlIQhElVSQhCCJCEIIkIQgiQhCCJCEIIkIQgiQhCCLTAhGsIItIYEawgi0wPCNYQgi0wPAQwPCNYQRI0jWEEWmB4RrCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBEhCEESEIQRIQhBF//Z";
const sponsorImage = "data:image/jpeg;base64,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";

const registrationText = {
  en: {
    nav: "Register",
    title: "Participant Registration",
    subtitle: "Registration is open until July 2, 2026, 12:00",
    intro: "Please complete all required fields to register for UROPLENUM 2026.",
    closedTitle: "Registration is closed",
    closedText: "Participant registration closed on July 2, 2026 at 12:00.",
    warningTitle: "Important notice",
    warningText:
      "Registration for the event closes on July 2 at 12:00.\n\nDear participants, please be extremely attentive when completing this form.\n\nAll certificates are generated and sent automatically. If there is an error in your full name or email address, the system may not send the document correctly, or the certificate may contain typos.\n\nBefore submitting the form, please carefully check that your data is written correctly.",
    fullName: "Full name",
    iin: "Individual Identification Number (IIN)",
    workplace: "Place of work",
    phone: "Phone number",
    email: "Email for certificates",
    submit: "Submit registration",
    submitting: "Submitting...",
    success: "Registration submitted successfully.",
    required: "Please fill in all required fields.",
    iinError: "IIN must contain 12 digits.",
    emailError: "Please enter a valid email address.",
    error: "Registration could not be submitted. Please try again later.",
    note: "All fields are required."
  },
  ru: {
    nav: "Регистрация",
    title: "Регистрация участников",
    subtitle: "Регистрация открыта до 2 июля 2026 года, 12:00",
    intro: "Заполните все обязательные поля для регистрации на UROPLENUM 2026.",
    closedTitle: "Регистрация закрыта",
    closedText: "Регистрация участников закрыта 2 июля 2026 года в 12:00.",
    warningTitle: "Обратите внимание!",
    warningText:
      "Регистрация на мероприятие закрывается 2 июля в 12:00.\n\nУважаемые участники!\nПожалуйста, будьте предельно внимательны при заполнении данной формы.\n\nВсе сертификаты генерируются и рассылаются автоматически. Если вы допустите ошибку в ФИО или адресе электронной почты, система не сможет корректно отправить документ, либо в самом сертификате будут опечатки.\n\nПеред отправкой формы обязательно перепроверьте правильность написания ваших данных.",
    fullName: "ФИО",
    iin: "Индивидуальный идентификационный номер (ИИН)",
    workplace: "Место работы",
    phone: "Номер телефона",
    email: "Электронная почта для сертификатов",
    submit: "Отправить регистрацию",
    submitting: "Отправка...",
    success: "Регистрация успешно отправлена.",
    required: "Пожалуйста, заполните все обязательные поля.",
    iinError: "ИИН должен содержать 12 цифр.",
    emailError: "Пожалуйста, укажите корректный адрес электронной почты.",
    error: "Не удалось отправить регистрацию. Попробуйте позже.",
    note: "Все поля обязательны к заполнению."
  },
  kz: {
    nav: "Тіркеу",
    title: "Қатысушыларды тіркеу",
    subtitle: "Тіркеу 2026 жылғы 2 шілде, сағат 12:00-ге дейін ашық",
    intro: "UROPLENUM 2026 қатысу үшін барлық міндетті өрістерді толтырыңыз.",
    closedTitle: "Тіркеу жабылды",
    closedText: "Қатысушыларды тіркеу 2026 жылғы 2 шілде сағат 12:00-де жабылды.",
    warningTitle: "Назар аударыңыз!",
    warningText:
      "Іс-шараға тіркеу 2 шілде күні сағат 12:00-де жабылады.\n\nҚұрметті қатысушылар!\nОсы форманы толтырғанда өте мұқият болыңыз.\n\nБарлық сертификаттар автоматты түрде қалыптастырылып, жіберіледі. Егер Т.А.Ә. немесе электрондық пошта мекенжайында қате жіберілсе, жүйе құжатты дұрыс жібере алмауы мүмкін немесе сертификатта қате жазулар болуы ықтимал.\n\nФорманы жібермес бұрын деректеріңіздің дұрыс жазылғанын міндетті түрде қайта тексеріңіз.",
    fullName: "Т.А.Ә.",
    iin: "Жеке сәйкестендіру нөмірі (ЖСН)",
    workplace: "Жұмыс орны",
    phone: "Телефон нөмірі",
    email: "Сертификат жіберілетін электрондық пошта",
    submit: "Тіркеуді жіберу",
    submitting: "Жіберілуде...",
    success: "Тіркеу сәтті жіберілді.",
    required: "Барлық міндетті өрістерді толтырыңыз.",
    iinError: "ЖСН 12 цифрдан тұруы керек.",
    emailError: "Дұрыс электрондық пошта мекенжайын енгізіңіз.",
    error: "Тіркеуді жіберу мүмкін болмады. Кейінірек қайталап көріңіз.",
    note: "Барлық өрістер міндетті."
  }
} satisfies Record<Lang, Record<string, string>>;

export function UroSitePage({ page }: { page: SitePageKey }) {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    if (requested === "ru" || requested === "kz" || requested === "en") {
      setLang(requested);
    }
  }, []);

  const t = copy[lang];

  function setLanguage(next: Lang) {
    setLang(next);
    setMenuOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url.toString());
  }

  useEffect(() => {
    document.documentElement.lang = lang === "kz" ? "kk" : lang;
  }, [lang]);

  return (
    <div lang={lang === "kz" ? "kk" : lang} data-lang={lang} className="min-h-screen overflow-x-hidden bg-[#f4f7fb] text-ink">
      <Navbar page={page} lang={lang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setLanguage={setLanguage} />
      {page === "home" && <HomePage lang={lang} />}
      {page === "program" && <ProgramPage lang={lang} />}
      {page === "faculty" && <FacultyPage lang={lang} />}
      {page === "venue" && <VenuePage lang={lang} />}
      {page === "registration" && <RegistrationPage lang={lang} />}
      <Footer lang={lang} />
    </div>
  );
}

function Navbar({
  page,
  lang,
  menuOpen,
  setMenuOpen,
  setLanguage
}: {
  page: SitePageKey;
  lang: Lang;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  setLanguage: (lang: Lang) => void;
}) {
  const t = copy[lang];
  const rt = registrationText[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-[#061e3d] text-white shadow-[0_14px_42px_rgba(3,15,32,0.28)]">
      <div className="site-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href={`/?lang=${lang}`}
            className="flex min-w-0 max-w-[calc(100%-3.75rem)] items-center gap-3 lg:max-w-none"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/uroplenum-site-logo.png"
              alt="UROPLENUM 2026 Kazakhstan"
              className="h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[300px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {pageKeys.map((key) => (
              <Link
                key={key}
                href={`${pagePath[key]}?lang=${lang}`}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  key === page ? "bg-white text-ink shadow-[0_10px_24px_rgba(255,255,255,0.12)]" : "bg-white/5 text-white hover:bg-white/12 hover:text-white"
                }`}
              >
                {nav[lang][key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={`/registration?lang=${lang}`}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-black transition ${
                page === "registration" ? "bg-gold-500 text-ink" : "bg-gold-500/90 text-ink hover:bg-gold-500"
              }`}
            >
              <UserPlus className="h-4 w-4" />
              {rt.nav}
            </Link>
            {langs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLanguage(item.id)}
                className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                  lang === item.id ? "bg-gold-500 text-ink shadow-[0_10px_24px_rgba(199,161,74,0.22)]" : "bg-white/10 text-white hover:bg-white/15"
                }`}
                aria-label={item.name}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="fixed right-4 top-[18px] z-[60] flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menuToggle}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="grid gap-3 border-t border-white/10 py-4 lg:hidden">
            {pageKeys.map((key) => (
              <Link
                key={key}
                href={`${pagePath[key]}?lang=${lang}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                  key === page ? "bg-white text-ink" : "bg-white/8 text-white"
                }`}
              >
                {nav[lang][key]}
              </Link>
            ))}
            <Link
              href={`/registration?lang=${lang}`}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-black ${
                page === "registration" ? "bg-gold-500 text-ink" : "bg-gold-500/90 text-ink"
              }`}
            >
              {rt.nav}
            </Link>
            <div className="flex gap-2 pt-2">
              {langs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLanguage(item.id)}
                  className={`flex-1 rounded-lg px-3 py-3 text-xs font-bold ${
                    lang === item.id ? "bg-gold-500 text-ink" : "bg-white/8 text-white/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const highlights = [
    { icon: Award, title: t.highlights, text: t.highlightsText },
    { icon: Mic2, title: t.scientificSessions, text: t.scientificText },
    { icon: UsersRound, title: t.collaboration, text: t.collaborationText }
  ];

  return (
    <>
      <Hero
        lang={lang}
        title={t.brand}
        subtitle={t.congress}
        text={t.subtitle}
        eyebrow={t.eyebrow}
        meta={t.dateCity}
        primary={{ href: `/program?lang=${lang}`, label: t.viewProgram }}
        secondary={{ href: `/faculty?lang=${lang}`, label: t.meetFaculty }}
        tertiary={{ href: `/registration?lang=${lang}`, label: registrationText[lang].nav }}
      />

      <section className="section-pad bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.about} />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["1", lang === "en" ? "Congress day" : lang === "ru" ? "День пленума" : "Пленум күні"],
              ["5", lang === "en" ? "Scientific sections" : lang === "ru" ? "Научных секций" : "Ғылыми секциялар"],
              ["40+", lang === "en" ? "Speakers" : lang === "ru" ? "Спикеров" : "Спикерлер"],
              [lang === "en" ? "Astana" : "Астана", lang === "en" ? "Host city" : lang === "ru" ? "Город проведения" : "Өтетін қала"]
            ].map(([value, label]) => (
              <div key={label} className="metric-card surface-card p-6">
                <div className="text-4xl font-black tracking-tight text-ink">{value}</div>
                <div className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist section-motion">
        <div className="site-shell">
          <SectionTitle eyebrow="UROPLENUM 2026" title={t.highlights} align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <ResearchSurvey lang={lang} />

      <ResolutionSection lang={lang} />

      <VenueFeature lang={lang} />

      <OrganizersSection lang={lang} />

      <ContactBand lang={lang} />
    </>
  );
}

function ResearchSurvey({ lang }: { lang: Lang }) {
  return (
    <section className="research-survey section-pad text-white section-motion">
      <div className="site-shell relative z-10 grid gap-5 lg:grid-cols-2">
        {researchSurveys.map((item) => {
          const survey = item.content[lang];

          return (
            <article key={item.url} className="research-survey-card rounded-lg border border-white/14 bg-white/8 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
              <div className="fine-label text-gold-500">{survey.eyebrow}</div>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">{survey.title}</h2>
              <p className="mt-6 text-lg font-bold text-white">{survey.greeting}</p>
              <p className="mt-3 text-base leading-7 text-white/78">{survey.description}</p>
              <p className="mt-3 text-base leading-7 text-white/78">{survey.collaboration}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="action-button mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-gold-500 px-7 py-4 text-sm font-black text-ink transition hover:bg-gold-100"
              >
                <ClipboardList className="h-5 w-5" />
                {survey.button}
                <MoveUpRight className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}


function ResolutionSection({ lang }: { lang: Lang }) {
  const resolution = resolutionText[lang];
  return (
    <section className="section-pad bg-white section-motion">
      <div className="site-shell">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow={resolution.eyebrow} title={resolution.title} text={resolution.announcement} align="center" />
          <article className="mt-10 rounded-lg border border-slate-200 bg-mist p-6 shadow-card sm:p-10">
            <div className="space-y-5 text-base leading-8 text-slate">
              {resolution.preamble.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 space-y-8">
              {resolution.sections.map((section) => (
                <section key={section.title} className="border-l-4 border-gold-500 pl-5">
                  <h3 className="text-xl font-black text-ink">{section.title}</h3>
                  <div className="mt-4 space-y-4 text-base leading-8 text-slate">
                    {section.items.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-slate-200 pt-10">
              <div className="text-center">
                <div className="fine-label">{lang === "en" ? "Partners" : lang === "kz" ? "Серіктестер" : "Партнёры"}</div>
                <h3 className="mt-3 text-2xl font-black text-ink sm:text-3xl">{lang === "en" ? "General sponsors" : lang === "kz" ? "Бас демеушілер" : "Генеральные спонсоры"}</h3>
              </div>
              <img src={generalSponsorImage} alt={lang === "en" ? "General sponsors of the Plenum" : lang === "kz" ? "Пленумның бас демеушілері" : "Генеральные спонсоры Пленума"} className="mx-auto mt-7 w-full max-w-4xl" />
              <div className="mt-10 text-center">
                <h3 className="text-2xl font-black text-ink sm:text-3xl">{lang === "en" ? "Sponsors" : lang === "kz" ? "Демеушілер" : "Спонсоры"}</h3>
              </div>
              <img src={sponsorImage} alt={lang === "en" ? "Sponsors of the Plenum" : lang === "kz" ? "Пленум демеушілері" : "Спонсоры Пленума"} className="mx-auto mt-7 w-full max-w-4xl" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProgramPage({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <Hero
        lang={lang}
        title={t.programTitle}
        subtitle={t.dayOne}
        text={t.programIntro}
        eyebrow={t.congress}
        meta={t.dateCity}
        compact
      />
      <section className="section-pad bg-white">
        <div className="site-shell">
          <SectionTitle eyebrow={t.dayTwo} title={t.programTitle} text={t.programNote} />
          <div className="program-strip mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
            {overview[lang].map(([time, title, room]) => (
              <div key={`${time}-${title}`} className="grid gap-3 border-b border-slate-100 p-5 last:border-b-0 md:grid-cols-[150px_1fr_220px]">
                <div className="font-black text-brand-700">{time}</div>
                <div className="font-bold text-ink">{title}</div>
                <div className="text-sm font-semibold text-slate">{room}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {programDetails.map((session) => (
              <ProgramCard key={`${session.time}-${session.title.en}`} lang={lang} session={session} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FacultyPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const groups = [
    { id: "official", title: t.officialGuests },
    { id: "international", title: t.internationalFaculty },
    { id: "kazakhstan", title: t.kazakhstanFaculty }
  ] as const;

  return (
    <>
      <Hero
        lang={lang}
        title={t.facultyTitle}
        subtitle={t.congress}
        text={t.facultyIntro}
        eyebrow={nav[lang].faculty}
        meta={t.dateCity}
        compact
      />
      {groups.map((group, index) => (
        <section key={group.id} className={`section-pad section-motion ${index % 2 ? "bg-mist" : "bg-white"}`}>
          <div className="site-shell">
            <SectionTitle eyebrow={nav[lang].faculty} title={group.title} />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {faculty
                .filter((person) => person.group === group.id)
                .map((person, personIndex) => (
                  <FacultyCard key={`${group.id}-${person.name}`} lang={lang} person={person} index={personIndex} />
                ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function VenuePage({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <Hero
        lang={lang}
        title={t.venueTitle}
        subtitle={t.venueTitle}
        text={t.venueIntro}
        eyebrow={nav[lang].venue}
        meta={lang === "en" ? "12 Heydar Aliyev Street | Astana" : lang === "ru" ? "ул. Гейдар Алиева 12 | Астана" : "Гейдар Алиев көшесі, 12 | Астана"}
        compact
        venue
      />

      <VenueFeature lang={lang} />

      <section className="section-pad bg-mist section-motion">
        <div className="site-shell grid gap-5 lg:grid-cols-3">
          <InfoCard icon={Building2} title={t.venueAbout} text={t.venueAboutText} />
          <InfoCard icon={Navigation} title={t.gettingThere} text={t.gettingThereText} />
          <InfoCard icon={CheckCircle2} title={t.accommodation} text={t.accommodationText} />
        </div>
      </section>

      <section className="section-pad bg-white section-motion">
        <div className="site-shell">
          <SectionTitle eyebrow={t.map} title={t.venueTitle} text={t.venueIntro} />
          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
            <div className="map-grid flex min-h-[420px] items-center justify-center p-8">
              <div className="max-w-md rounded-lg bg-white p-7 text-center shadow-soft">
                <MapPin className="mx-auto h-10 w-10 text-gold-600" />
                <h2 className="mt-4 text-2xl font-black">{t.venueTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-slate">{t.venueIntro}</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-gold-500 px-4 py-3 text-sm font-black text-ink"
                >
                  {t.map}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBand lang={lang} />
    </>
  );
}

function RegistrationPage({ lang }: { lang: Lang }) {
  const rt = registrationText[lang];
  const [form, setForm] = useState({
    fullName: "",
    iin: "",
    workplace: "",
    phone: "",
    email: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const isClosed = Date.now() >= registrationCloseAt;

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "submitting") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function submitRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      fullName: form.fullName.trim(),
      iin: form.iin.replace(/\D/g, ""),
      workplace: form.workplace.trim(),
      phone: form.phone.trim(),
      email: form.email.trim()
    };

    if (!payload.fullName || !payload.iin || !payload.workplace || !payload.phone || !payload.email) {
      setStatus("error");
      setMessage(rt.required);
      return;
    }

    if (!/^\d{12}$/.test(payload.iin)) {
      setStatus("error");
      setMessage(rt.iinError);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("error");
      setMessage(rt.emailError);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(rt.error);
      }

      setStatus("success");
      setMessage(rt.success);
      setForm({ fullName: "", iin: "", workplace: "", phone: "", email: "" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : rt.error);
    }
  }

  return (
    <>
      <Hero
        lang={lang}
        title={rt.title}
        subtitle={rt.subtitle}
        text={rt.intro}
        eyebrow={copy[lang].congress}
        meta={copy[lang].dateCity}
        compact
      />
      <section className="section-pad bg-white">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="surface-card p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-50 text-gold-700">
              {isClosed ? <X className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
            </div>
            <h2 className="mt-6 text-2xl font-black">{isClosed ? rt.closedTitle : rt.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate">{isClosed ? rt.closedText : rt.note}</p>
            <div className="mt-6 rounded-lg bg-mist p-4 text-sm font-bold text-slate">
              {rt.subtitle}
            </div>
          </div>

          <form onSubmit={submitRegistration} className="surface-card grid gap-5 p-6 sm:p-8">
            <div className="rounded-lg border border-gold-200 bg-gold-50 p-5 text-sm leading-7 text-ink">
              <div className="font-black text-gold-700">{rt.warningTitle}</div>
              <p className="mt-2 whitespace-pre-line font-semibold text-slate">{rt.warningText}</p>
            </div>
            <RegistrationField
              label={rt.fullName}
              value={form.fullName}
              onChange={(value) => updateField("fullName", value)}
              disabled={isClosed || status === "submitting"}
              autoComplete="name"
            />
            <RegistrationField
              label={rt.iin}
              value={form.iin}
              onChange={(value) => updateField("iin", value.replace(/\D/g, "").slice(0, 12))}
              disabled={isClosed || status === "submitting"}
              inputMode="numeric"
            />
            <RegistrationField
              label={rt.workplace}
              value={form.workplace}
              onChange={(value) => updateField("workplace", value)}
              disabled={isClosed || status === "submitting"}
              autoComplete="organization"
            />
            <RegistrationField
              label={rt.phone}
              value={form.phone}
              onChange={(value) => updateField("phone", value)}
              disabled={isClosed || status === "submitting"}
              autoComplete="tel"
              inputMode="tel"
            />
            <RegistrationField
              label={rt.email}
              value={form.email}
              onChange={(value) => updateField("email", value)}
              disabled={isClosed || status === "submitting"}
              autoComplete="email"
              inputMode="email"
              type="email"
            />

            {message && (
              <div className={`rounded-lg p-4 text-sm font-bold ${status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isClosed || status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-4 text-sm font-black text-ink transition hover:bg-gold-100 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate"
            >
              {status === "submitting" ? rt.submitting : rt.submit}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function RegistrationField({
  label,
  value,
  onChange,
  disabled,
  autoComplete,
  inputMode,
  type = "text"
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  type?: HTMLInputTypeAttribute;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-ink">{label} *</span>
      <input
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        autoComplete={autoComplete}
        inputMode={inputMode}
        type={type}
        className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-semibold text-ink outline-none transition placeholder:text-slate focus:border-brand-500 focus:ring-4 focus:ring-brand-50 disabled:bg-slate-50 disabled:text-slate"
      />
    </label>
  );
}

function Hero({
  lang,
  title,
  subtitle,
  text,
  eyebrow,
  meta,
  primary,
  secondary,
  tertiary,
  compact = false,
  venue = false
}: {
  lang: Lang;
  title: string;
  subtitle: string;
  text: string;
  eyebrow: string;
  meta: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  tertiary?: { href: string; label: string };
  compact?: boolean;
  venue?: boolean;
}) {
  const image = venue ? venueImage : "/images/uroplenum-hero.png";
  const imageTone = venue
    ? "opacity-35"
    : "opacity-100";
  const overlay = venue
    ? "bg-[linear-gradient(115deg,rgba(7,26,51,0.98),rgba(10,31,68,0.86)_48%,rgba(13,74,121,0.62))]"
    : "bg-[linear-gradient(115deg,rgba(7,26,51,0.34),rgba(10,31,68,0.22)_42%,rgba(13,74,121,0.08))]";

  return (
    <section className={`hero-stage relative overflow-hidden bg-ink text-white ${compact ? "py-20 sm:py-24" : "py-20 sm:py-28 lg:py-32"}`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className={`hero-image h-full w-full object-cover ${imageTone}`} />
        <div className={`absolute inset-0 ${overlay}`} />
        <div className="motion-grid absolute inset-0" />
        <div className="motion-scan absolute inset-x-0 top-0 h-full" />
      </div>
      <div className="site-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
        <div className="reveal-up w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] sm:w-auto sm:max-w-4xl">
          <div className="fine-label max-w-[320px] whitespace-normal break-words text-gold-500 tracking-[0.16em] sm:max-w-full sm:tracking-[0.22em]" style={{ overflowWrap: "anywhere" }}>
            {eyebrow}
          </div>
          <h1
            className={`mt-5 max-w-full whitespace-normal break-words text-3xl font-black tracking-tight sm:text-6xl lg:text-7xl ${
              title === copy[lang].brand ? "brand-wordmark" : ""
            }`}
            style={{ overflowWrap: "anywhere" }}
          >
            {title}
          </h1>
          <p className="mt-4 max-w-full whitespace-normal break-words text-xl font-bold text-white/88 sm:text-3xl" style={{ overflowWrap: "anywhere" }}>
            {subtitle}
          </p>
          {text && (
            <p className="mt-6 max-w-3xl whitespace-normal break-words text-base leading-8 text-white/72 sm:text-lg" style={{ overflowWrap: "anywhere" }}>
              {text}
            </p>
          )}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold text-white/82">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3">
              <CalendarDays className="h-4 w-4 text-gold-500" />
              {meta}
            </span>
          </div>
          {(primary || secondary || tertiary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && <ButtonLink href={primary.href} label={primary.label} primary />}
              {secondary && <ButtonLink href={secondary.href} label={secondary.label} />}
              {tertiary && <ButtonLink href={tertiary.href} label={tertiary.label} accent />}
            </div>
          )}
        </div>
        <div className="hero-dashboard hidden lg:block">
          <div className="dashboard-card dashboard-card-main">
            <div className="flex items-center justify-between">
              <span className="fine-label text-gold-500">{copy[lang].liveCongress}</span>
              <Sparkles className="h-5 w-5 text-gold-500" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <HeroMetric value="40+" label={lang === "en" ? "Speakers" : lang === "ru" ? "Спикеров" : "Спикерлер"} />
              <HeroMetric value="5" label={lang === "en" ? "Sections" : lang === "ru" ? "Секций" : "Секциялар"} />
              <HeroMetric value="1" label={lang === "en" ? "Day" : lang === "ru" ? "День" : "Күн"} />
              <HeroMetric value={lang === "en" ? "Astana" : "Астана"} label={lang === "en" ? "City" : lang === "ru" ? "Город" : "Қала"} />
            </div>
          </div>
          <div className="dashboard-card dashboard-card-small">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">QazExpoCongress</div>
            <div className="mt-3 text-lg font-black">{meta}</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/8 p-4">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/48">{label}</div>
    </div>
  );
}

function VenueFeature({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section className="section-pad bg-white section-motion">
      <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="venue-frame overflow-hidden rounded-lg shadow-soft">
          <img src={venueImage} alt={t.venueImageAlt} className="aspect-[16/10] w-full object-cover" />
        </div>
        <div>
          <SectionTitle eyebrow={nav[lang].venue} title={t.venueTitle} text={t.venueAboutText} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {venueFacts.map((fact) => (
              <div key={fact.value} className="metric-card rounded-lg border border-slate-200 bg-mist p-5">
                <div className="text-3xl font-black text-ink">{fact.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate">{fact.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrganizersSection({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section className="section-pad bg-mist section-motion">
      <div className="site-shell">
        <SectionTitle eyebrow="UROPLENUM 2026" title={t.organizers} text={t.organizersText} align="center" />
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {sponsorLogos.map((logo) => (
            <div
              key={logo.src}
              className="sponsor-tile flex min-h-52 items-center justify-center rounded-lg border border-slate-200 bg-white p-7 shadow-card"
            >
              <SponsorLogo src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ lang, session }: { lang: Lang; session: (typeof programDetails)[number] }) {
  const moderatorLabel =
    "moderatorLabel" in session && session.moderatorLabel
      ? session.moderatorLabel[lang]
      : lang === "en"
        ? "Moderators"
        : lang === "ru"
          ? "Модераторы"
          : "Модераторлар";

  return (
    <article className="program-card surface-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-lg bg-brand-50 px-3 py-2 text-xs font-black text-brand-700">{session.time}</span>
        <span className="rounded-lg bg-gold-50 px-3 py-2 text-xs font-black text-gold-700">{session.room[lang]}</span>
      </div>
      <h2 className="mt-5 text-2xl font-black tracking-tight">{session.title[lang]}</h2>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-slate">
        {moderatorLabel}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate">
        {session.moderators.map((moderator) => localizeProgramLabel(moderator, lang)).join(", ")}
      </p>
      {"note" in session && session.note ? <p className="mt-3 text-sm font-semibold leading-6 text-brand-700">{session.note[lang]}</p> : null}
      <div className="mt-5 grid gap-3">
        {session.talks.map((talk) => (
          <div key={`${talk.time}-${talk.speaker.en}-${talk.topic.en}`} className="talk-row rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-black text-brand-700">{talk.time}</div>
            <div className="mt-1 font-black text-ink">{talk.speaker[lang]}</div>
            <div className="mt-2 text-sm leading-6 text-slate">{talk.topic[lang]}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function FacultyCard({ lang, person }: { lang: Lang; person: (typeof faculty)[number]; index: number }) {
  const displayName = lang === "ru" ? person.ruName : lang === "kz" ? person.kzName : person.name;

  return (
    <article className="faculty-card surface-card overflow-hidden border-t-4 border-brand-600 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="p-6">
        <h3 className="text-xl font-black">{displayName}</h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-slate">{person.role[lang]}</p>
        <p className="mt-4 inline-flex rounded-lg bg-brand-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand-700">
          {person.city[lang]}
        </p>
        <p className="mt-4 text-sm leading-6 text-slate">{person.topic[lang]}</p>
      </div>
    </article>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: typeof Award; title: string; text: string }) {
  return (
    <article className="info-card surface-card p-7">
      <div className="icon-tile flex h-12 w-12 items-center justify-center rounded-lg bg-gold-50 text-gold-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{text}</p>
    </article>
  );
}

function SponsorLogo({ src, alt }: { src: string; alt: string }) {
  if (false && alt === "AOQa") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2" aria-label={alt}>
        <div className="font-sans text-4xl font-black tracking-tight">
          <span className="text-[#39afd8]">AO</span>
          <span className="text-[#cf1f35]">Qa</span>
        </div>
        <div className="max-w-[220px] text-center text-[11px] font-bold uppercase tracking-[0.12em] text-slate">
          Ассоциация онкоурологов Казахстана
        </div>
      </div>
    );
  }

  if (alt === "Alkaloid") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2" aria-label={alt}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2d2f87] text-[#2d2f87]">
          <span className="font-sans text-2xl font-black">A</span>
        </div>
        <div className="font-sans text-xl font-black uppercase tracking-[0.08em] text-[#2d2f87]">Alkaloid</div>
      </div>
    );
  }

  return <img src={src} alt={alt} className="max-h-28 max-w-full object-contain" />;
}

function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="fine-label">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate">{text}</p>}
    </div>
  );
}

function ContactBand({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section className="section-pad bg-white section-motion">
      <div className="site-shell">
        <div className="contact-panel rounded-lg bg-ink p-8 text-white shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="fine-label text-gold-500">{t.contact}</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.contactTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">{t.contactText}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white/8 p-5">
                <Mail className="h-5 w-5 text-gold-500" />
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">{t.emailLabel}</div>
                <div className="mt-1 text-sm font-bold">{t.email}</div>
              </div>
              <div className="rounded-lg bg-white/8 p-5">
                <MapPin className="h-5 w-5 text-gold-500" />
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">{t.venueLabel}</div>
                <div className="mt-1 text-sm font-bold">QazExpoCongress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ButtonLink({
  href,
  label,
  primary = false,
  accent = false
}: {
  href: string;
  label: string;
  primary?: boolean;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`action-button inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-black transition ${
        primary
          ? "bg-gold-500 text-ink hover:bg-gold-100"
          : accent
            ? "border border-white/20 bg-brand-600 text-white hover:bg-brand-500"
            : "bg-white text-ink hover:bg-white/88"
      }`}
    >
      {label}
      {primary || accent ? <MoveUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

function KidneyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M30.7 5.7c6.2 1.8 10.1 7.9 9.1 15.2-.8 5.9-4.7 9.5-8.1 12.6-2.9 2.7-5.5 5.1-5.8 8.7-.1 1.5-1.4 2.6-2.9 2.4-8.6-1.1-14.8-8.3-14.8-17.4 0-10.5 8.5-23.9 22.5-21.5Z"
        fill="currentColor"
      />
      <path
        d="M30.5 14.1c-4.4.9-7.3 4.3-7.3 8.2 0 2.5 1.1 4.4 2.7 6"
        stroke="#0A1F44"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M20.7 6.1c-5.9 3.7-9.3 11.2-9.3 18.7 0 7.6 4.3 13.7 10.8 15.7"
        stroke="#0A1F44"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="site-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex rounded-lg bg-[#061e3d] px-3 py-2">
              <img src="/images/uroplenum-site-logo.png" alt="UROPLENUM 2026 Kazakhstan" className="h-12 w-auto max-w-[260px] object-contain" />
            </div>
            <div className="mt-2 text-sm text-slate">{t.congress}</div>
            <div className="mt-2 text-sm font-semibold text-slate">{t.email}</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {pageKeys.map((key) => (
              <Link key={key} href={`${pagePath[key]}?lang=${lang}`} className="text-sm font-bold text-slate hover:text-ink">
                {nav[lang][key]}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate">{t.footerRights}</div>
      </div>
    </footer>
  );
}
