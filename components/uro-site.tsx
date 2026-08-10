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

const generalSponsorImage = "data:image/jpeg;base64,Exit code: 0
Wall time: 0.4 seconds
Output:
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";
const sponsorImage = "data:image/jpeg;base64,Exit code: 0
Wall time: 0.4 seconds
Output:
/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAGkA3UDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQYDBAkBAv/EAGcQAAEDBAEDAQQFBAoMCAoFDQECAwQABQYRBwgSITETIkFRCRRhgZEVIzJxFhcYM0JSYqGxsyQ3OFdydXaSlLTR1DZTgpOVssHSQ1RVVmRzdIOj0zQ1RmOiw+HwJSdHhbUZJkSE8f/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQECAwYH/8QASREAAQQBAgMFBQQHBQUIAwEAAQACAxEEBSESMUEGE1FhcRQigZGhFTKx0QczQlLB4fAWI1NioiRygpKTFzQ1Q2NzwvE2dNKy/9oADAMBAAIRAxEAPwD1TpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKVAPJnU5Pg8nx+C+GMUYyvNnQVTFypJZgWxIT3EvLSCpRSnRUBrWwNlR7a7lxyzqxwiEq/5JgWCZlb2ElcmDi0qXGnoQPJU2mSFJeIG/dGlK9APNWI0ufha55DS4WASASOh35A9Lq1D9ui4nBtnh2JAJAP9eFqcqVD3T51EWzqDdye4WCyy7da7I/FjMInNpRKUtbalOFwJWpIAUNAA+g2fXQwPUhz1yh0/WVGYKwTHb3j788QUON3R5qS0VBSmy4gtduiEEEpUdHXz3WG6ZkuyfY6qTbYkDmLrfqhzoBB7Tds8QCfJT/Sqe8PdZfM3Ocq6w+P+E7DKfs7Lb8ht/ISwVJWSEhJU1onaT6kVz2/6Qa2Y7mT+C828UXfCp8N4MSnGpQmpYJ0QtaAhCuzRBCkd+wQRsGpbuz2oNe6MMBc3cgOaSB6A39FHbrOG5oeXU08iQQPnVK3dK6tquttvlsi3mzzmJsGcyiRGkMLC23WlDaVpUPBBBB3UOc/9WfGvAITa7sp685G82HGrPCUnvQk/oqeWfDST8NgqPqEkearMfEny5RBC0l3h/XJTpsiLHj72VwDfFTbSoAwbPerHkiwM5dA4+wHFLfPbD8GHfJsx2WttQ2lS/YpAQCNHyAr+SK1a49Z994mzlvAeo/jI46t9IcYvNmlGZDeaJ17VKFJC+wEHeipY9CjdTW6NkyPdHFTnDmA4E/K9/hajO1KBjQ+S2tPIkED+XxpWopWPtN7tmSWSPf8auMW4wp7AfhyWXO9l5JG0kKHwqrPPPV7y/0+ZBFs2X8QWOVFuTanYFxh3h5TEkJIC0juZBStPcnuSR/CBBIINcMLTsjPl7iADi8CQD9aXXJzYcSPvZT7viAT+CttSq89LvV7YuoV242C5WhnH8kg/n2oIk+1RKjeNuNqISSpJOlJ14BSRvz2zblTuXs2v2mEwrRKuIX+9XSS6wypHaf4baFkHfb/AAda3WmTgz4c5x8gcLh4/nypbQZUWTF30Jtv9dFmaVAHCXN/NXLWQ3233Di/H8ft+K3hVmuz714dcd+sNq/OoYSlrSylOjtSkpPcnROzrY+oPqNxjgO0wRLtz97yK9LLVpssVXa5IVsDuUrR7EbIG9EkkAA+ddHaZkjIGKBbz0BB8+YNct1oM6AwnIJpo6kEfjupcpUGwbt1mv29F8k4txUz3oD35EXLnCWlPr7MyB3Mhz4eElO/jWOwDqsfzjl628M3Hji7YtkLTUt2+RrmUOJYLbQU2I7iFfnAre+8oAKda3vY2+y53Nc6MtcGgk04GgP65jbzWvt8QLWvBaXEAWCLv+uXNWDpSqw8odcuK4/l7fGvEmLyeQMoekiElER8NREvk67EuAKLpB9e0BI8+/4OuOHg5Ge8sx22RuegA8STsPiuuTlw4jeKZ1Xy8T6DmVZ6lQmLr1iizi7KxLi1Urs9obSLhND/AKfvfttey7/h/F/lVqnFnXBiOU5e5xryjjMrAMrZkmEWJjwdirkA9vs/a6SW1E+gUntPjSiSN9xpOTIxz4aeG8+Egkedc68xsuJ1CFjmtktpdysEX8eXwVl6V0L2q+otjqsbZgO3AdvskTnFtsnyN9ykJUoeN60D51VMeT+v3kPibPLvx5k/EdkVcrO6ht1ca8uqacSttLiFpJZB0pC0nyAfPkVrgaXk6m4sxQCRvVgGvHcrbLz4MEB05oHrRP4K7tKr1YOYepzJsKtmeWDgrF7lBu8Fq4RY7WUluQtpxAWkacZCQrR9O6tMwn6Q/DpuVqw3lbArngs5uSYbzzsgSWYzwV2kP7Q2tsA+Ce1WvjobNdm6JmyBxiaHcPMNc0kfAG/ouZ1TFYWh5LeLlYIB+JFK3FK/LbjbzaXmXErbWkKSpJ2FA+hB+IqA+TOpyfB5Pj8F8MYoxlebOgqmLlSSzAtiQnuJeWkFSilOioDWtgbKj21CxcSbMeWRDkLPQADmSTsApM+RHjtDpDz2HUk+AHVT9SoNuOWdWOEQlX/JMCwTMrewkrkwcWlS409CB5Km0yQpLxA37o0pXoB5rI9PnURbOoN3J7hYLLLt1rsj8WMwic2lEpS1tqU4XAlakgBQ0AD6DZ9dDs/TpmxOnbTmN5kEGrNev0XNubE6QRGw48gQR/JTDSlKgKWlKrvzx1qce8OXhWGWW2ycvyxKw0u3QXAhuO4fAbdd0rSySPcSlSvge3xWXsl+6wr7ZUXx3C+M7G4+gOtWq4Tpq5KAfIS4tpJQlX6t6+OqsfsrIbE2aWmNdy4iBfoOdedUoXt8LpDFHbiOdC69Ty+HNTjSqtWDrhg49nj3GHUFgj+B3thxLRmIkiVBV3eUrUrQKG1AjSx3p+JKRvVomH2ZLLcmM8h1p1IW24hQUlaSNggjwQR8a5ZeBkYJAnbQO4PMEeRGxXTHy4coHunXXMciPUHcL90qr3UT1Scq9Oci0HIeOMausK9h4RZMO7vgpW1296FoWyCDpaSCCQfPyrocNdVnOXO9vuVzwHhnG3GbS8hiR9byJbJClpKhoFk78A1MboeY7HGWAO7PXibXOvHx2UY6rjCb2ezx+HCb8fBWwpVX+Seobqe4ssr2SZJ0321+0xk98iZb8g+soYT8VLSlvvSkfFRT2j4mps4Z5Af5U4vx7kKTbG7e7e4pkKitulxLR71J0FEAn9H5VGyNNnxoRkOosJqw5rt+dbErvDmxTSmFthwF0QRt8Qt0pSlQFLSlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpRF5HY1y9lXT31Q5Hmt0thuExq83KJeIryuxchtx9Rc7VedK2ErSryDoeoNek3EHUVxPzdDS5hGTNKuAR3vWmXpmaz89tk+8B8VIKk/bUYdS3R3iXUJrPcMvMS05S4yB9cT+ch3JCRpAe7NkKAAAcTs6GiFaGvPTkTiHlvgbIGBl1iuNkktPd0G5xnD7FxafIUzIbOu7462FD4gV9HOPpvaqJhD+7naAK9PLqPTfx8F4rvs3s/I4FvHETd+vn0Prt4L1h494qY4/5C5Aya1ojM23MpMK4ojtbCm5SG1pkEjWgFqKV7BOypXp4qIvpGP7nf/8Aj0L/AKrtYHoZ6qsi5YXL4w5FlCZfrZE+uQLkQAuZHSpKVod14Lie5JCh5UkknyklWe+kY/ud/wD+PQv+q7VBj42Th67FDlfeDm7+IAAB+QVvNPBk6TJJj/dId8CdyPmoX+i+/wCFeef4uhf1jlaj9JObYeeraIXs/rIxqL9c7PX2nt5Hb3fyuzs+7tr8dA9l5Qvd+zFjjHN7XjUhMGL9afm2r693pK19vYkrSEkHZ87B36VYG2/R9WnIM1fzzm3lS75vPmPCRKbbiCCh9Q0AhagtauwAABKOzQAA0BXo8rKxdM12XMyJKpoAaASTsPKvqqXHx8jO0lmNCzqdyQANz539F96cOQLtxP0LL5BvzSnBZ2bg/amn9gOJVIUiOg/HtU+rX+CfHwql/BNqm839SuMsZpKcur18vRuFzW/7xkpaSqQ6lX8lSWynQ8AHQ1XoL1qY81G6T8ns2OwG40O1tW72UWOgIQ3Halse6lI8BKUjevgE1RfoVeaZ6pMN9qQO8XFCST6KMCRr8fT76aNK2XAztSjFPcXn0AbY+p+KanG6PLxcJ5trQ3470fwXrV6eBVUPpIMNhXrhKFlpYT9exy7MlD2veDD4LbiP1FfsT/yBVsKrz17utN9MOTIcI7nZNuQj7VfXGj/QDXitCkdHqcBb+8B8zR+hXqNWYH4Mod+6fpuq/fRtcw3OPkV04Wu0tbtumRnLpaUrVv2D6CPbNo+QWk9+vQFsn1UanLqq4xsfMXJ3FnHmQuOsxbpEyUJfaPvsPIisLbcA+PatKTo+CAR8apx0B2+XM6m8fkxkqLcCHcJEgj0DZiuNjf2d7iPv1V9+Tf7pDhT/ANTk3+ps16bXWjD1wywGnGNztujuB+/0BVFpLjk6V3cu4D2t+HE3815gZJj/ACR00ct/UnnnbXkeNykyIctnfs30eex1BPhbS07BB9QVJUN7FeqPTnzzYOf+P2Mnt/s412idse8W4K2qLI16jfktr0VIV8tj1SoDX+q/pttnUBhJ/J6GY2W2dC3LRMVpIc+Kozh/iL+B/gq0fTuB83eHOVs36aeVPyu3DkMvQnlQL5aH9t/WGkq04ysH9FaSNpV8FAeo2DMkbF2vwONtDIj+v8j08D9Y7DJ2czOF28L/AKfzHXxC9MOnEAXDl/QA/wD2l3T/AFWHVMvpAp2T411M2rJkrWj6na7fLs7i09yE+ydWrQ+B06FEj7R86tt0g5XZ86svJOY4+6ty23nkCfNjKcQUK9muHDICkn0I3oj5ito534JwDqIxtzF8hkBi52pZVDuEUpVIt7q0g6Un4oUO0qQrXcNEEEBQosPOZpOsGTIb7tcLvKwOn4q1ycR2oaaGQne7HnuVpXA/W1xVy7FiWi/XFjFspWlKHIM5wIYfd9D9XePuqBPohRC/OgFa2ZFybipi7cy4by3b0RmplhjTrfcFq2HJEV5o+yA0D3FDhJAJHhxfr4FeZXNnSJzBwmqRcblZ/wAtY80SRebYkuNIR83kfps/DZUO3Z0FGpI6N+rjMMMy+y8X5xdnrrit3kN2+KuUsrdtjqyEtFCz5LXcUpKCdJB7k60QqzzOzsRidnaNJxNo23nsRuAfTod/O1BxtZk7xuJqbKNijy3B2v49RsrK9fXMdz4x4kYx3HZi4t2zF9yAH21dq2oiEgyFIPwUe5tG/gHCRogVXv6NDCYV55MyTN5jCXV43bW2IxUN+zelKUO8fb7Np1P6lmtt+lGgSyeOroEqVFT+VI6j/BQ4fqygP1kA/wCbX6+i3ea7OSY+wHN2hfr5Kf7LH8x/prfHY3G7Kvli+8/mf+Ph/BazOM+vtjk5N5f8t/ir415q/SU4bCsvLlky6EwlpWR2nUrtH74/HX2d5+32amk/8gV6VVQD6UV1o3fjtgEe0RGua1D+SVRwP+qapeyEjmaswDqHA/In8QFZ9o2B2nvJ6EfjX8VOPQnzDc+VeGkwMilrlXnFJP5LffcV3OPsdgUw4o/E9pKCT5Ps9nyapH12f3U2Z/4Nt/8A5fHqw/0Xlvlt4/yDdVpV9VkTLfHbPwLjaHlL19unUfiKrx12f3U2Z/4Nt/8A5fHr0ukQR43aTJji5cJPzLCfqVR6jK+bRIXyc+IfQOC9I+nD+0Bx1/kzbv8AV0V5v9dptR6nMq/Jfs9+zg/WvZ617f6q13enx127+3e/NS5mfJXVPwp078d5FjWVWhzFbrZIcduRFsyRJtncwktNuKcKwolOwHNAdyT4BKd6P0Ycf8S84clXNXMN0ud0yZLhukWFJkD6vdfPc6p1RHe4tKveKO4BSSSdgKFctIxPsqTI1iRwcz3hTbJ+9vd1VV/Hkumo5H2gyHTWN4XbG3bDl058/wCXNXv6Wfy2enjAf2Qe1+ufkVnXtP0vYefYf/C9nXnFjXL2VdPfVDkea3S2G4TGrzcol4ivK7FyG3H1FztV50rYStKvIOh6g163NNNsNoZZbS222kJQhI0EgeAAB6Cq0dS3R3iXUJrPcMvMS05S4yB9cT+ch3JCRpAe7NkKAAAcTs6GiFaGqPQ9VxY8qcZrajmsHysk1t036eStdV0/IfBEcZ3vx8vOgPqpP4g6iuJ+boaXMIyZpVwCO960y9MzWfntsn3gPipBUn7a5+PeKmOP+QuQMmtaIzNtzKTCuKI7WwpuUhtaZBI1oBailewTsqV6eK8nuROIeW+BsgYGXWK42SS093QbnGcPsXFp8hTMhs67vjrYUPiBV5uhnqqyLlhcvjDkWUJl+tkT65AuRAC5kdKkpWh3XguJ7kkKHlSSSfKSVStV7PHCxn5enyccLhuOe1g2CNjRHqPmuGn6yMqduPmM4ZAdvWiOXTb5q39Q51Z8uTeGeErxk9ndDV4mqRa7W4f/AAch7f5wfahtLix8NoG/FTHVSPpLYEuTwfZJjCVKZh5Mwp8D0SlUaQkKP/KIH/Krz2iwR5OoQxS/dLhfn5fFXGpyvgw5JI+YBVXehHEGc86kbdcb0DMFiiyb857YlZceQUobWonySHXkL380ivVmvNH6M95pHOV+ZWQFu4rI7CT66lxSQP6fur0uq57aSOdqXAeQaK+pVZ2YYG4PEOZJVEvpPcNhfU8L5AZYSiWHZFnkuAeXGykOtA/4JD2v8M1sf0cPMNzyrD7xxXfpa5DuLhuTa1uK2r6k4SFNf4LawNfIOADwkCux9Js60OH8YYJHtF5KhaR/JEV8H/rCoh+jIt8tzlfKrqhKvqsfHvq7h+AccktKRv7dNL/A1aRMbk9lSZf2CaPh738yFBe90GvgR/tVfy/la3/6UP8A4OYB/wC2z/6tmuf6MD/gbnP+M4n9UuuD6UP/AIOYB/7bP/q2a0Doe485HzvBM1awHmW44OpuZHbcRFtzMhL6y0rSlLVpxGvT3FD13W0MbZOywa9waL5m6+/5An6LWR7ma+XNbxGuQr93zICvVYs8tmZ59m3HbbEWVFxiLb2ZhPv970pD6nGlg+CA2hrx81qB+VdninA2+MeP7RgjMpMhq0IcZacCSNtl1akjz8QlQH3VXXoZwDMOMsy5gxDO3zJvMafa3X5ftVOiWHESVpfC1e8rvCu7Z87JB8g1bevIapG3DmdiwutnuG/E8I3+Nn5r0eA92TE2eVtO94envcvoEpSlVanpSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiqX0UdQlhvUK48KZJc2ot+stymfklLywn69EU8tfYgn1cbKlDt9eztI3pWrLZ1j2I5TiN1smeQ4cmwvxl/XkyyA0hoAkuFR/QKddwXsFJGwRqtAHSb0/rx4Y/K45t0jTy5JuJSW7gp5SysrMpvtd3s+AFADQAGhXRl9J2BXeMm15PmfIt/sySD+SLnlcp2GoD0SUBQJA8a2rxV7mTafk5RyYXOjs3VA7+INjnzo8vFVWNHmQQCGRrX7Vzr4HY/Pr4Kp30d/Glwn8x3vkS3JfVjOPx5MGNNcQUiS86oBCB6bIa7lq1+jtGx7wqefpGnW2+nlCFrCVOX+GlAJ/SPY6dD7gT91WQxvGcew+yxccxazRLVbISOxiLFaDbaB6nQHxJ2ST5JJJ81ome9NvEHKEv65n9iu17UHVvttSskuZYZWr9ItMiQG2h8NISBrx6VJk1yPK1ZuoTghraoAAmh47gbrgzSn4+nuw4iC512TYFn4FVC+i/dbGYZ0yVgLVbYagnfkgOrBP8AOPxr0LqGsa6Qen/DLmL1iGIXOyT0oLYlW/JrrHd7Drae5EkHR0Nj0OqmFhlEZhuO2VlLSAhJccUtRAGvKlElR+0kk/GoevZ8Gp5jsqCwDWxAHIV0JUnSMSXBxhBLW18iepvqAuhk+OWrL8cumK32P7e3XeI7ClN/FTbiSlWj8Do+D8Do15OXzC8z6PuoKy3G/QX34llurc6DMQjTdzghel9h9AstkpUne0qPy0T67Vg8wwfEOQLM5j2bY5AvVucPcWJjIcCVfBSSfKVDfhSSCPnW+ia0dKL45G8UTxTh/Ef1utNU0wZ4a9h4Xt3B/NdnG8kseX2GDk+N3JmfbLkwmRGkMq2laFD+Y/Ag+QQQfIql/wBJLy3a1WSy8L2aYiRc35iLpdG2ldxYbQhSWWlgeilqWV69dISfRQ3N0Do54wx/2zWEZNn2JQ5CityHZMplR2FE/MEqJ+81nePulvhLja7/ALJbJh6Zl89oXfyrdZDk2SHN770qdJCF/wApIB+2t8DI07TskZYLn8O7W0Bv04jZ5eQO6xlw5ubAcchrb5mydutChz81E3QX05XXirGpvIubW9cPIskZSzHiOp07CgghWlj1StxQSopPoEI3o9wEgcq3i2ROp3hC3yJrTch1nJO1ClAH34jQRv5dxSoD5kECpudbS62tpZUErSUkpUUnR+RHkH7R5qIb10k8DZJe0ZLkGL3e53dspLc+XlF2dkI7TtPa4qSVDR8jR8fCuX2mzMzJMvNJBcHAcIBq2lo5kbC/it/YXY2MzHxQKBB3JHIgnkDzr4KYap5109K/7PrW/wAwYBbe7JLYzu7Q2Ue9cYyB++JA9Xm0j9akDXqlINsrBYYON2xu02564OsNElKp9xkTnvPzdkLW4f1FR18KyNQ8DPl0zJGRjnl9R4H1UnLxGZ0BhmHP6HxCqT9Gf/aIvv8AlbK/1OHXJP6gLLxJ1n5TiGZXBELH8qt1rSJbqtNRJjbOm1LP8FCwpSVK9AQgnQBIsZg3HOJ8cN3pjELcIMe/XZ29SY6D+bRJcbbQstp/gJPsknt9ASdaGgMJe+AuI8oye85flmD2y+3K+MsR33LlHRIDTbSO1KWQofmvmSnRJ158DVk/UsTIzciedpLJBVCrBtp+lKE3CyIcWGGJw4mHn0Io/ja30FiUwFJKHWXUbBGlJWkj8CCK8y854XseTdcRwLiOG2m2MXOHPuaIY/se2hHY5L0R4SEnYCfAC1BA14Aue10pYHbmFW3Gcz5Ex6zq2PyRa8rltQ0g+qUoUpRSD8ga3fjXiDjniK2O2vj/ABiPbESVBcl7uU7IkqHxcdWStfqdAnQ2dAU07UodH7yTHeXOc2gCKA8zudx0A+aZmFJqXAyZoaGmybs+g2HP+gtX6nuEWueeKZ2JR1tM3iIsXCzvOeEplIBAQo/BK0qUgn4dwVo9uqov0W50/wAB9QE3COSY7tiRe2TZ5iZo9l9VmJWFsKWT6JJ7kBXp+dCt6816hVofJnBnFHMDKEchYXBujzSexqX7zMltPrpLzZSsJ357d6+yml603GxZNPyml0T/AA5tPiL5+NeKZ+mOmnZmY5Akb48iPA/mt7JAHcSNa3uvLnq9zGb1G9RkfEeMIrl+RaWEWSAIfvpkvhalvOpV6dgUrtK99va13b15q6J6PePlWz9j6s65JVYuz2f5HOVyPqXs/wCJ7P07fsrf+NOE+LeIIrkbjzDINpU8nsekpCnZLo9dLecKnFDfnt7tD4CttMz8PRpHZMZMklU2xwgX1O5PwHzWufiZOpsED6Yy7O9k+Q2Hz+ixPTpw3E4L4qteDNutvz/emXSQ2PdemOAd5HptKQEoSSNlKE7815wddDrbvVLmpbWFBP5OSSD8Rb44I+4+K9Xb3ZoeQW120z3pzTD3b3Lgz34bw0QR2vMLQ4nyPOlDY2D4JFQ5cOibpmu01+53TjuRMmSnFOvyJGQXNxx1ZOypSlSCVEn1J8110PW4cDNkzszic54I2A6kG9yPDlS56rpcmXjMxcag1pHMnoCPA+KyHD2KY5yJ0q4dh+SQ251pu2Jwoklrf/3CRtJ/grSobB9QpIPqK80OTsBzvpa5m+oRp70edZpKLjZLo2ntEmP3Etugeh3opWnyNhaTsevq1x7wzx/xW0iLgkK7W6I0laW4S7/cJMRHcdqKY7zy2kknzsJ36+fNfjlDg/izmdmAzyViTV5FsUtURZkvR3Gu8AKAWytCiDobSSRsA62K30vX49Ny5SQXQyEkihe/ldeR33Hotc/SH5uOwCmysqjZr51fmNljOnrm+x89ccw8vtpaYuLQEa7wEq2YkoD3h8+xX6SD8Un5ggQx0UdQlhvUK48KZJc2ot+stymfklLywn69EU8tfYgn1cbKlDt9eztI3pWphwDpi4U4svQyHj/Fp1lm+AtUe/XEtvAb0l1tT5Q6nyT2rSRvzquqOk3p/Xjwx+VxzbpGnlyTcSkt3BTyllZWZTfa7vZ8AKAGgANCoRyNLAmiaH8Dy0t2FtIv/NuN65ix81KEOfcTyW8TQQdzTrry25XyW/51j2I5TiN1smeQ4cmwvxl/XkyyA0hoAkuFR/QKddwXsFJGwRqqA/R38aXCfzHe+RLcl9WM4/HkwY01xBSJLzqgEIHpshruWrX6O0bHvCrYy+k7ArvGTa8nzPkW/wBmSQfyRc8rlOw1AeiSgKBIHjW1eKljG8Zx7D7LFxzFrNEtVshI7GIsVoNtoHqdAfEnZJPkkknzWYdSj0/CmxYHFxkobigB16myeXT4rEuC/Myo8iVoaGedknp0Gw/qlk607l/jS08v8cXzjy8L9k1do/Y0+E9xjvpIW06B8e1aUnXjY2PjW40qjikfC8SRmiDYPmFaSMbK0seLB2K8meG52Q9JfU5bGOTLe7bGozrluuSikltcN8FAkNq/htBXY5seoQRrexXrDFlRp0ZqbCkNSI76EutOtLC0OIUNhSVDwQQdgitZ5B4r475VtibRyFiVvvUdvfsi+gh1kn1LbqSFtk/EpUKjWH0e8d2iEqz47mvI9ltC97tdvyuS1E0fUdmz4++vRanqWLrZZNNccoFGhbT5jcEH5+qp8HByNL4ooqewmxZoj6EH+tlVv6Q3kyPyLyLjvEOFld2fx9TglNw0l0uXB8pSlhITsqWhKACB8XCn1BAs90ccASOCeM1IyBpCcnyJxE26hJCvq4AIaj9w8HsClEn07lr0SNGty4x6dOG+IHjOwbCosW4qSUquMha5Ms7/AEtOuFSkA/EJ0D8qkmuefrLH4LNNwwRG3mTzcefIXQverPTwW2Jpjm5Ts7JILzyA5Acvia2VG/pQ3WxYePmSsd6plxUE78kBDGz/ADj8a7H0X7iDiOdtBQ703GGop35ALS9H+Y/hU/ZX0ncFZ3NbuWa4xd77KZR7Np245RdZCm0b32pK5J7RvzoeK/WI9KXBmAzXLjhGM3exSXkhDrlvye6sF1IOwlfZJHcN/A7FS/tnC+xfsz3uLnfCK+9xfvfBR/s3K+0/bvdrws3yr91SPExu1wcjuWVR21pn3aLFiSj3e6pEdTxbOvn+fWCfiAn5VlaUryjnFxt39UvQABuwSlKVhZSlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUpREpSlESlKURKUrjffZisOSZDqW2mUFxxajoJSBsk/YBRFyUqMP3T/Tz/fjxX/pFH+2n7p/p5/vx4r/ANIo/wBtS/YMv/Cd/wAp/JR/a8f/ABG/MKT6VGH7p/p5/vx4r/0ij/bWdicycW3DGlZjAzu0SbIiUYSp7L4Wyl8I7y2VDwCE+f1Vq7DyWbujcPgVluTA77rwfiFuVKjD90/08/348V/6RR/trYcd5b41y2JKn4xmdsukaDHXKkPRXfaIbaR+kokeNCj8PJjHE+NwHmCstyYXmmvB+IW3UqNJPUrwFDfXFmct4yw82e1bbs5KVJPyIPkVkMd514ey64N2rF+RbHdZjq0toZiSQ6oqUdJHu+mz86HCyWt4jG6vQrAyYHHhDxfqFvdK0G/c98M4vcHbVknJVitkxlam1sypQaWFJOlDSvkRqsd+6f6ef78eK/8ASKP9tZbg5ThbY3Eeh/JDlQNNF4+YUn0qMP3T/Tz/AH48V/6RR/treMWy3Gc3szWRYhfId3tj6loblxHQ42tSSUqAUPkQRWkmLPCOKRhA8wQtmTxSmmOBPkQsvSlavmHKHHvH620Ztl9tspdQHEGY97MFJJAOz49QRXNkb5XcLASfLdbue1g4nGgtopUYfun+nn+/Hiv/AEij/bWXsHOXDOUykQMe5UxSfKdIS3HZuzBdWT8Eo7u4/cK7Owslg4nRuA9CuQyoHGg8fMLeKV1586Ja4T9xnvpYjRW1OvOK9EISNkn9QqPJPUtwFDfXFl8uYyw82e1bbk5KVJPyIPkVpFjzT/qmF3oCVvJNHF99wHqaUl0rQ8f534cyuc3bMZ5Gsd0lOuIZQ1Ekh1RWs6SPd9Nnx5rfK1khkhPDI0g+YpZZIyUWwg+iUrEZNlmN4bbxdcovEe2wyv2ftn1aR3aJ1v4eEk/dWj/un+nn+/Hiv/SKP9tbx4s8w4o2EjyBK1fPFGae4A+ZCk+lRh+6f6ef78eK/wDSKP8AbWRx7n3hbLLzFx3GuTseuVzmqKI8SNNQtx1QBUQlI9fAJ+6t3YOU0Fzo3ADyP5LUZUDjQeL9Qt+pWs5nyZgHHaWF5zlttsaZW/YqmvBtK9euifHxrAWnqJ4Kvtzi2a0csYzLnTnUsRmG7g2VuuKOkoSN+SSQAPiTWjcWd7eNrCR40aWXZETHcDnAHwsKRaUqP77z/wALYxc37NkXJlgts6MtTbseVLS2tCkkpIIPyII+6tIoZJjUbST5C1u+VkQt5A9dlIFK1BnlzjSTjP7M4+aWx2xe3+rflBDvcx7Tt7+3uHj9Hz8q1/8AdP8ATz/fjxX/AKRR/trq3DyX3wxuNeRWjsmFtcTxv5hSfStaxHkrA897v2GZVb7yEI9oVRHO9PbvW9jwfPisblHN3EeE3Ndmy7kKyWec3oKYmSQ0oeAfj6+CPxrQY0zn92GHi8KN/JZM8QbxlwrxvZbvStOtHMXF9/tEu/2TN7XPtsEIMiVHd9o233K7U7UPHlXisEvqc6fG1qbc5hxZKkkhSTcEAg/I1u3DyXEgRusc9itTkwtAJeN/MKTqVhcSzPFM8tAv+GZDAvNuLimRJhPB1vvT+knY+I2PH21mq4Oa5ji1wohdmuDxxNNhKVpeX80cT4BdU2PNOQrFZbgplL4jTJiG3PZqJAV2k70Sk/hXSs3UDwpkc5FtsHJtguMpwhKWYsoOLJJ0PCd/EiuwxMhzeMRurxo0uRyIQ7hLxfhYUg0pSo67JSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiVjMoZek41do8dpbjrsF9CEIG1KUW1AAD4kmsnSstPCQVgixSgPpm6ZcD4x4ysqr7hlumZTcIjcy6yrhDQ6+084kKLCSsEoS3sI7RrZSSfJrzw6sokSB1GZ1DgxWo7DVyCUNNICEJHskeAB4FexdePXV7/dKZ9/jMf1SK992Qy5s3UppZnEktJ/1BeR7R48eNgxxxigDX0K9JeOeKeNcz4Iw22ZPgtjuDE7F7Z7cuQm+9RVFb2oLACkq357gQQfO911OlfiiXwvjOX4I61J+pRsumP2x59OjIhLjxi0sHWlaG0Ejx3IUPGiK3bhH+0xgP+S9q/wBUbrda8lkZsw73HJtrnXXmDzXoocaM93MBTgPxC8XeomHFt/PPIMOEw2ww3klwCG20hKUgvqOgB4A8+levnGEKLbuNsUgwY7bDDFlhIbbbSEpSAwjwAK8iepX+6C5E/wApJ/8AXKr0Mw3nzlaHiFjiR+lvM5bTFtjNtyG5sYJdSlpICwCd6IG/vr2vafGlysHFEdct7IHQeJC8voU0cGVkF/j0BPU+AKrN9JjDisczY9LZjtoek422XlpSAXCmS+AVfMgaGz8AB8KsV9HXCix+nZuSxHbQ7KvUxby0pAU4odiQSfjpKQPuqpfXTmuS5xyNYbjk/HF2w2QxZEsNxLi62448j27p9oCg61skfrSat39Hl/c4Q/8AG87/AKya5asx8XZqFj+YI6g/vdRsumnObJrcrm8qPl4eKw30lEOK9wRa5jkdtT8fJIwacKR3ICmJHcAfUA6Gx8dD5VCn0adms95zXNG7xaYc5DdrjqQmSwl0JPtT5AUDqpx+kk/uf4P+UsT+okVWPoY5DvnHN9zK62HjTIczedtbKTFsyEqW12uEhS9nu0fT3UqP2VnTGSS9mZGR87Nb11HUrGc5keuMc/lXhfQq9eccMcD8tKvXH93wq0puNvisPOyoUJEeTD+se09ktt5KQd/mlHtO0+B3Ag6rodIOGXPjzhtGEXcK+tWS+XaEpZQUh0ImOJDiQf4KgAofYRUd9EPJORct5by7neURPqc6dcraj6mN6iNttvIQz50dpSkAnQ2rZ0CatfXltRfkYIfpsriQOE87o8O9fP6BX+E2HK4c5goniHKrHFtfyStR5fhRLjxRmcKdHbfYdsE8LbcSFJP9jr14P26P3Vt1avyl/ayy7/EM/wD1ddVeOamYR4j8VPm3jd6FeT/SRDiXDqNwaHPisyY7s9YcaeQFoWPYueCk+DVl/pFuEsDxzErJyhimPQLPcXLqm1TkQWEstykONOOJWpCQE96SyR3a2QvzvQ1VjpmyOHiPO2H5JcIk+THgzVOONQYq5L6wWljSG0AqUfPoPtqz3VdlnK/U+my8fcW8J5yix2+Z9eem3S0OQ0yZPYpCNKc0htCUrc8rUCSr0Hbs/VdTE7Nbgma7hjDfeJNCrOxXgMExP0uWIi3l2wAs8gtp+jl5myrMbPf+NMpuL9xbx5piVa5D6ytxthZUhbBUfJSkhBRv0ClD0CQIh+kuhxY/OVkksMNtuysYjreUlIBcUJMlIUr5ntCRs/BIHwq03Rv0zTOn/FrjPymSw/lGRFozEMK72ojLfd2MpV/CVtaipQ8E6A2E9xq/9Jn/AG68c/yWZ/1uVVNpk2PP2le/E+4QeXImhZ+J/NWWdFNFobWZH3gRz5jfb6KyH0eUKLG6cYchiO2h2Xdprj60pALigsIBJ+OkpSP1CrM1Wz6Pj+5rtf8AjOf/AFtWTryWuG9Sn/3j+K9FpQrBi/3R+CV4t9Q0OLb+d+QYcKO2ww1klxDbbaQlKB7dfgAeAPsr2krxh6kv7oDkT/KW4f16q9L2EP8AtMo/yj8VR9rB/cRnz/gvVGFZOMce4nt+S5RidjMCFZI8iWtdsacJSGU78dvvE/L4k1FOX9M2IYL1C8Z8r8cWBu1Rn7y9Bu8CG32x0KXEfU2+hA8NDaFJUBpO1I0Ad7h/qH6jc+lca4nxeOKchxW13dNuak3a6oCUzW2vZq9mwUbTpRSlRPfvt8doBNegdVE4y9IYJnO/W8Yq7BbQG9WOZPyCsYjj6i4xgfq+A3VG+f8AALHZDj9kyuyTccyO2MXC2XFlTEqM+nuQ4hQ8gj+gjyDojzXitlnHeU4XaMfy2bDUi05Ky7KtcxskpJadU2tsn+C4lSN6+Skn417dVWXh7iXFuaujTG8Fytj8zJjy3I0lKQXYcgS3+x5v7Rs7HxBUk+CakdnNX+yGPkfuwuYD5Ah+489h68lx1rTvtFzWN2cGuI+BbsfmVw9FHVEjmPGhgmZz0/szsbA244rzc4qdAPD5uJ8BY+PhXxITsfV1iOP5TbONkXy1x5WuQ7HEJcbBJYfeLbzW/wCIpJGx6HtHyFebWTY7yT0y8u/UnX3LZkWOSkyYUxnfs32/PY6jf6bS07BB9QVJUNgir1z+ecf5/wCL+MMot3s411i8l4zHvFuCtqiSPrPw35La9FSFfEbHqlQFnqOjjCzY9Qwf1Tze3Qkfgeny8FBwtSOTivw8r9Y3x60fxHX5+KtqlCEIDaEhKUjQSBoAfKvFLnGHFt3NfIFvhMIZjxcpurLLaEhKUITLdCUgD0AAA1XtfXitz9/b35H/AMrrx/rjta9hCfaJh/lH4rPawf3MfqfwXshhsONb8QscCEwhmPHtsZpptCQEoQlpIAAHoABUNddlpt9y6YsskTIrbrtvXBkxXFJBUy79cZQVJPwJQtaf1KNTXjP/AAbtP/sLH9Wmof63f7l3OP8A1cH/AF6PXl9LcftOE/52/wD+gr7OA9hkH+Q/gpotFpt1itcSy2iI1FgwGERo7DSQlDbaAEpSAPQAAV5x9YHESL/nvMfINjiBL+JzceeltNJ0FRpcIpdc0PVQdS0on5KWTXpPUDYfYLXlfOXUHjF7jh+33aHj0KU0f4bTludSofgTUrQs9+BNLlDo0E+Y7xl/MWuGq4jcuNkB6k15e46vqqyfRscsfkbMLzxDc5PbFyBs3K2pUfAmMp/OpA+a2h3f+4Feh0yZFt8N+fOfQxGjNqeedWdJQhI2pRPwAAJrxgukPKunXm12M2spvGFXoLZWQUpfS2sKQoj+I42UnXxSuvSnmXO2OUOMMPw3BZy0v8yOMQ2XGz+cj2soD090j5oYCm1D+M5qrztRpbZs2LKiPuSjc9BQsn/l3+BVVoOeY8V+PJ96PkPU7D/m2+IVFOqxi4ZGqwc2XlDzcrkeZdJ8NlzYLFpYMdmCgj0BLYK9j19oDVpfoyYcVHEGT3BEdsSXskWy46EjuUhEVgpST6kAuLIH8o/Oo5+kxtsGyucYWe1xkR4cG3z40dlA0ltpH1ZKUj7AAB91SZ9GZ/aUyL/Kl7/VItTNSn9o7MtkAoE7DwAcQB8AAFGwou51xzDuQNz5los/E2reUpSvnK9olKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlKUoiUpSiJSlKIlePXV7/dKZ9/jMf1SK9csgfySNby5itqttwnd4AZuFwchtdvnZ9ohl479PHZ8/I+NCeTegrqG5Oz++5/dMi49iyb5MXKUw1cJpQ0D4SgExdnSQBv463Xr+yGVj4OQ+bJeGgtoWetg8l5ztHjzZcLI4GlxBv6FXU4R/tMYD/kvav9UbrdajbhKy8sYhh1jwjkO2Yopqw2tm3t3G0XaQ8t8MoS233MOxmwnaE+8oOHyPCdHxueSSMqjW8OYfZ7VcpxXotXK5OQmgjR97vbYeJO+0dvaPBJ2NaPmspl5Dg0g2TRsVz8fzV3A6oWkgigOhtePPUr/dBcif5ST/65VevnHv8AwBxr/E8P+pRVC85+j76hc8zO+5tc8m4+ZlX24yLi601Pm9janXCspTuLvQ3ob86FXS4zi8v2DDYePZpY8RdnWi1Iix5NuvclTcx9pASj2iHIiSylQHvKBcIPok+g9b2ly8fMw8ePHka4sFHfyA6+i89oePNjZMz5mEB3LbzKo99Jt/bdxf8AybT/AK0/Vi/o8v7nCH/jed/1k1oHUp0mdQvUTncfL5Mzj6yR4MBFuiw0Xea+oIStaypa/qadqKnD6JAAAHnyTKHS1xNzhwPiaePsli4RdrQbguWmbCvMtEhhDnb3j2S4na6dgke+j10T8azn5WPJoMWGyRpkbRIv1+HVMSCZmrSZLmEMdYBr0/Ja39JJ/c/wf8pYn9RIqGvowf8Ahxm/+KY39can3qq4a506gsdjYPYmMGs1nh3T8oCTKvMt2RJ7EuIb2hMMJa91wlSQpfnQCtDZjLgLpQ6penrJJ2Q4rfOMZ4uUX6pKjTpk8oUkKCkqSUR0kKBH2jRPj0Izh5OM3QH4T5WiRxJAJ8wefwWMmGY6uzKbGSwda8j+as/g/GiMM5P5Ay6DHZZg5ibbM7WyAfrTTbqHyU/Du22rfxUpRru2HkaJknJ+T4Bagy81icCA5cJCVElEuSp4hj5e620lR/8AWAfCoty+1ddWQ21222O98Q44XklJlw3rg7IRv+KXWFIH6+zfyIrs9I/AWa8GWTKP2wr5bbvfMjuiZrsqFJef9ohKPVxbraFFZWpwnwfXe9k1QTQRGB+RPK10lNDWg2dqFn0aFbxyv71sMUZDLJJIob2aHxKn2tX5S/tZZd/iGf8A6uutoqPuY7ZypkeKXbE+OLbi+7zbXoS594ushhUZTqVIUUstRnA5pJ2CXE+T5BA81mK3imbZA3HM0p05qN217dF5fdHv90tgX+MV/wBQ5XsFXnvxh0GdQ/F3IFi5AteQ8eypFjlpkpYduE0IdT5CkEiLsbSSN/De/NX2sD+RSbcl3KbXbbfPKiFMW+e5MZCfgQ4tllRP2dg18zXqO1+VBnZDJsZ4cA2jR62TyVD2cx5sSB0UzS0k3v6BZKvNb6TP+3Xjn+SzP+tyq9IZ65zcJ9y2RmJEtLaiw0+8WW1ua91KlpQsoBPqQlRHyPpVLepHpI6heofkBrNJU3j6ysxLe3bYsNF3mvlLSFuL7lL+pp7lFTqvRIAGh8NmL2WnhxM8TzvDWgHmfHy5qRr8UmRiGKJpLiRyUj/R8f3Ndr/xnP8A62rJKUlCStaglKRsknQAqqfBfEHV1wThqsGs0via621MpyWyZsy4h1pS9dyQpDABTsb8jeyfOtAdzlfj/rg5RxyViSco4rxy2z2yzL/Jcq4B99pQ0ptTjjCiEkeD2hJI2CSCRWmfixZmoSSiZgY5xN30J8Oa2xMiTGw2MMTi5oAquo81LfB/JTvK9hvuXNPNu2pWQzoVmW2kALhMFLaF7/hd60uL2fgsD4V5T9SX90ByJ/lLcP69VenfCXGvIHB/BWP8f22Djd7yC3OSVSy7dX4kNXtX3XQpDojOLUQFtp0W0/Hz4G6m5v8AR89Qud5lfM1ueT8fNS77cZFxebanzextbrhWUp3F3od2hv4Crrs7l4Wn588jpA2Pk3fmAefy3VXrOPlZmJCwMJfzPlYVt8940Ryx08QsRbjsuzja7dMtynSEhuUyltaCFfwd6KSf4q1D41uHLPIlr4p47vmeXVSCm1xVrYZUrRkyD4ZZHx2tZSnx89/Cowxm19aON4xbcd7OGprltiNRESnpd0CnEtpCUqWlLIHdoDetDfoBUX5701dW/MuY2C6cq8gYI5j9puTEtVptciW2whtLgLhQ2qP77nZ3AFxZPnWwCapIcWKWQMyZ2CJri7Y2TdWB60PClayZEjGF0ETi8gDlsKvn6WVceGqSuIwq…15249 tokens truncated…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";

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
