"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileBadge2,
  Globe2,
  HeartPulse,
  Languages,
  LayoutTemplate,
  LockKeyhole,
  Mic,
  ScanText,
  ShieldCheck,
  Sparkles,
  Stethoscope
} from "lucide-react";
import { TranscriberDemo } from "@/components/transcriber-demo";

type Locale = "ru" | "kz";

const translations = {
  ru: {
    nav: ["Возможности", "Демо", "Шаблоны", "Примеры", "Тарифы", "FAQ"],
    badge: "Медицинский AI-транскрибатор для врачей",
    title: "Заполняйте историю болезни голосом. Четко, быстро и без рутинной перепечатки.",
    subtitle:
      "QalamMed помогает врачам оформлять амбулаторные приемы, осмотры, динамические записи, консультации и выписки на русском, казахском и в смешанном режиме.",
    primaryCta: "Попробовать демо",
    secondaryCta: "Посмотреть интерфейс",
    heroNotes: ["Русский", "Қазақша", "Auto detect / смешанный режим"],
    trust: [
      "Для стационара и поликлиники",
      "Поддержка mixed-language ввода",
      "Структурированный медицинский текст"
    ],
    howTitle: "Как это работает",
    howCopy:
      "Путь от сырой диктовки до готовой записи занимает минуты и не требует сложного обучения.",
    howSteps: [
      {
        title: "Запишите голос или вставьте текст",
        copy: "Врач диктует свободно, не разделяя речь по языкам и не подстраиваясь под шаблон."
      },
      {
        title: "Выберите тип документа",
        copy: "Амбулаторный прием, история болезни, дневниковая запись, консультация или другой шаблон."
      },
      {
        title: "Система распознает RU / KZ / mixed",
        copy: "Алгоритм понимает медицинскую лексику и работает с русским, казахским и смешанным вводом."
      },
      {
        title: "Получите структурированный результат",
        copy: "Сервис формирует разделы, улучшает формулировки и подготавливает текст к вставке в меддокументацию."
      }
    ],
    benefitsTitle: "Почему врачам удобно работать в QalamMed",
    benefitsCopy:
      "Интерфейс спроектирован так, чтобы экономить время в конце приема, на обходе и при оформлении истории болезни.",
    templatesTitle: "Шаблоны медицинских документов",
    templatesCopy:
      "Готовые сценарии помогают быстро привести поток речи к нужному формату документа.",
    examplesTitle: "Примеры входа и результата",
    examplesCopy:
      "Смешанная русско-казахская речь остается естественной для врача, а на выходе превращается в аккуратный медицинский текст.",
    securityTitle: "Безопасность и конфиденциальность",
    securityCopy:
      "Для медицинских данных важны предсказуемость, контроль и понятная политика доступа. Поэтому акцент сделан на защищенной обработке и аккуратной работе с чувствительной информацией.",
    pricingTitle: "Тарифы",
    pricingCopy:
      "Тарифная сетка подходит как для индивидуальной практики, так и для отделения или клиники.",
    faqTitle: "Частые вопросы",
    footerTag:
      "AI-платформа для медицинского документирования на русском, казахском и в mixed-language режиме."
  },
  kz: {
    nav: ["Мүмкіндіктер", "Демо", "Үлгілер", "Мысалдар", "Тарифтер", "FAQ"],
    badge: "Дәрігерлерге арналған медициналық AI-транскриптор",
    title: "Ауру тарихын дауыспен толтырыңыз. Нақты, жылдам және артық қол еңбегінсіз.",
    subtitle:
      "QalamMed дәрігерге амбулаториялық қабылдауды, қарауды, динамикалық жазбаларды, консультацияны және шығару құжаттарын орыс, қазақ және аралас режимде рәсімдеуге көмектеседі.",
    primaryCta: "Демоны көру",
    secondaryCta: "Интерфейсті ашу",
    heroNotes: ["Орысша", "Қазақша", "Auto detect / аралас режим"],
    trust: [
      "Стационар мен емханаға лайық",
      "Аралас тілдік енгізуді қолдайды",
      "Құрылымды медициналық мәтін"
    ],
    howTitle: "Бұл қалай жұмыс істейді",
    howCopy:
      "Шикі диктовкадан дайын медициналық жазбаға дейінгі жол бірнеше минут алады және күрделі оқытуды қажет етпейді.",
    howSteps: [
      {
        title: "Дауысты жазыңыз немесе мәтінді енгізіңіз",
        copy: "Дәрігер тілдерді бөлуге тырыспай, еркін сөйлейді және алдын ала шаблонға бейімделмейді."
      },
      {
        title: "Құжат түрін таңдаңыз",
        copy: "Амбулаториялық қабылдау, ауру тарихы, күнделік жазбасы, консультация немесе басқа шаблон."
      },
      {
        title: "Жүйе RU / KZ / mixed режимін таниды",
        copy: "Алгоритм медициналық лексиканы түсінеді және орыс, қазақ, аралас мәтінмен жұмыс істейді."
      },
      {
        title: "Құрылымды нәтижені алыңыз",
        copy: "Сервис бөлімдерге бөліп, медициналық стильді жақсартып, мәтінді құжатқа енгізуге дайындайды."
      }
    ],
    benefitsTitle: "QalamMed неге дәрігерге ыңғайлы",
    benefitsCopy:
      "Интерфейс қабылдау соңында, айналым кезінде және ауру тарихын толтырғанда уақыт үнемдеуге арналып жасалған.",
    templatesTitle: "Медициналық құжат үлгілері",
    templatesCopy:
      "Дайын сценарийлер сөйлеу ағынын нақты құжат құрылымына тез келтіруге көмектеседі.",
    examplesTitle: "Кіріс пен нәтиже мысалдары",
    examplesCopy:
      "Орысша-қазақша аралас сөйлеу дәрігер үшін табиғи болып қалады, ал нәтижеде кәсіби медициналық мәтін шығады.",
    securityTitle: "Қауіпсіздік және құпиялылық",
    securityCopy:
      "Медициналық деректер үшін болжамдылық, бақылау және қолжетімділік саясаты маңызды. Сондықтан негізгі назар қорғалған өңдеуге және сезімтал ақпаратпен ұқыпты жұмысқа аударылған.",
    pricingTitle: "Тарифтер",
    pricingCopy:
      "Тарифтер жеке тәжірибеге де, бөлімше мен клиника деңгейіне де сай келеді.",
    faqTitle: "Жиі қойылатын сұрақтар",
    footerTag:
      "Орыс, қазақ және mixed-language режимдерінде медициналық құжаттандыруға арналған AI-платформа."
  }
} as const;

const benefits = [
  {
    icon: HeartPulse,
    title: { ru: "Меньше рутины", kz: "Күнделікті жұмысты азайтады" },
    copy: {
      ru: "Сокращает время на однотипные записи и ручную перепечатку после приема.",
      kz: "Қайталанатын жазбалар мен қабылдаудан кейінгі қолмен теруді қысқартады."
    }
  },
  {
    icon: Languages,
    title: { ru: "Три языковых режима", kz: "Үш тілдік режим" },
    copy: {
      ru: "Поддерживает только русский, только казахский и автоматическое определение смешанной речи.",
      kz: "Тек орысша, тек қазақша және аралас сөйлеуді автоматты анықтау режимдерін қолдайды."
    }
  },
  {
    icon: LayoutTemplate,
    title: { ru: "Шаблоны под клинические сценарии", kz: "Клиникалық сценарийлерге арналған үлгілер" },
    copy: {
      ru: "История болезни, приемный покой, эпикриз, консультации и другие типовые формы.",
      kz: "Ауру тарихы, қабылдау бөлімі, эпикриз, консультация және басқа типтік формалар."
    }
  },
  {
    icon: ClipboardList,
    title: { ru: "Структурированный результат", kz: "Құрылымды нәтиже" },
    copy: {
      ru: "Делит текст по разделам: жалобы, анамнез, статус, диагноз, план.",
      kz: "Мәтінді бөлімдерге бөледі: шағымдар, анамнез, статус, диагноз, жоспар."
    }
  },
  {
    icon: ScanText,
    title: { ru: "Понимает медицинскую лексику", kz: "Медициналық лексиканы түсінеді" },
    copy: {
      ru: "Сохраняет профессиональные формулировки и может не терять смешанные термины.",
      kz: "Кәсіби формулировкаларды сақтап, аралас терминдерді жоғалтпайды."
    }
  },
  {
    icon: FileBadge2,
    title: { ru: "Копирование и экспорт", kz: "Көшіру және экспорт" },
    copy: {
      ru: "Подготовленный текст легко вставить в историю болезни или выгрузить в DOC / PDF.",
      kz: "Дайын мәтінді ауру тарихына енгізуге немесе DOC / PDF форматына шығаруға болады."
    }
  }
];

const templates = [
  "Амбулаторный прием",
  "Первичный осмотр",
  "Повторный осмотр",
  "История болезни",
  "Консультация специалиста",
  "Выписной эпикриз",
  "Дневниковая запись",
  "Осмотр в приемном покое",
  "Протокол осмотра",
  "Рекомендации пациенту"
];

const examples = [
  {
    label: "Педиатрия",
    input:
      "Бала 3 күннен бері іші ауырады, дене қызуы болмаған, тошнота бар, рвота жоқ, стул 2 раза болған, аппетит снижен.",
    output:
      "Жалобы: на боли в животе в течение 3 дней, тошноту, снижение аппетита.\nАнамнез заболевания: со слов, боли в животе беспокоят в течение 3 дней. Повышения температуры тела не отмечалось. Рвоты не было. Стул был 2 раза."
  },
  {
    label: "Терапия",
    input:
      "Пациент говорит, что давление кешке 160/95 дейін көтерілді, басы ауырған, жүрек айну жоқ, принял каптоприл, стало легче.",
    output:
      "Жалобы: на повышение артериального давления до 160/95 мм рт. ст., головную боль.\nАнамнез заболевания: ухудшение отмечено вечером. Тошноту отрицает. Самостоятельно принял каптоприл, после чего состояние улучшилось."
  },
  {
    label: "Гастроэнтерология",
    input:
      "Жалуется на изжогу после еды, эпигастрийде ауырлық бар, ночью симптом күшейеді, омепразол қабылдаған кезде легче становится.",
    output:
      "Жалобы: на изжогу после приема пищи, чувство тяжести в эпигастральной области, усиление симптомов в ночное время.\nАнамнез заболевания: симптомы купируются частично на фоне приема омепразола."
  }
];

const pricing = [
  {
    tier: "Базовый",
    price: "29 000 ₸",
    note: "Для индивидуальной практики",
    featured: false,
    features: [
      "до 250 транскрибаций в месяц",
      "базовые шаблоны документов",
      "русский, казахский, mixed режим",
      "копирование и экспорт DOC",
      "история записей за 14 дней"
    ]
  },
  {
    tier: "Профессиональный",
    price: "59 000 ₸",
    note: "Для активной врачебной нагрузки",
    featured: true,
    features: [
      "до 1 000 транскрибаций в месяц",
      "все шаблоны и продвинутые стили",
      "DOC и PDF экспорт",
      "история записей и сохраненные сессии",
      "приоритетная обработка"
    ]
  },
  {
    tier: "Для клиник",
    price: "Индивидуально",
    note: "Для отделений и многопользовательской работы",
    featured: false,
    features: [
      "командные аккаунты и роли доступа",
      "общие шаблоны по специальностям",
      "централизованная история записей",
      "приоритетная поддержка",
      "варианты защищенного хранения"
    ]
  }
];

const faqs = [
  {
    q: {
      ru: "Поддерживает ли сервис казахский язык?",
      kz: "Сервис қазақ тілін қолдай ма?"
    },
    a: {
      ru: "Да. Интерфейс и режимы ввода рассчитаны на русский, казахский и смешанный сценарий.",
      kz: "Иә. Интерфейс пен енгізу режимдері орыс, қазақ және аралас сценарийлерге бейімделген."
    }
  },
  {
    q: {
      ru: "Можно ли диктовать смешанно на казахском и русском?",
      kz: "Қазақша және орысша араластырып айтуға бола ма?"
    },
    a: {
      ru: "Да. Для этого предусмотрен режим Auto detect, в котором врач говорит естественно, не разделяя языки вручную.",
      kz: "Иә. Ол үшін Auto detect режимі бар, онда дәрігер тілдерді әдейі бөлмей, табиғи сөйлей алады."
    }
  },
  {
    q: {
      ru: "Можно ли использовать сервис для истории болезни?",
      kz: "Сервисті ауру тарихы үшін қолдануға бола ма?"
    },
    a: {
      ru: "Да, в платформе предусмотрены шаблоны для истории болезни, осмотров, эпикризов и дневниковых записей.",
      kz: "Иә, платформада ауру тарихы, қарау, эпикриз және күнделік жазбаларына арналған үлгілер бар."
    }
  },
  {
    q: {
      ru: "Подходит ли сервис для амбулаторного приема?",
      kz: "Сервис амбулаториялық қабылдауға сай ма?"
    },
    a: {
      ru: "Да. Быстрый сценарий амбулаторного приема вынесен в отдельный шаблон для ускорения работы врача.",
      kz: "Иә. Амбулаториялық қабылдауға арналған жылдам сценарий дәрігер жұмысын жеделдету үшін бөлек шаблон ретінде берілген."
    }
  },
  {
    q: {
      ru: "Можно ли редактировать текст после расшифровки?",
      kz: "Расшифровкадан кейін мәтінді өңдеуге бола ма?"
    },
    a: {
      ru: "Да. Результат можно вручную скорректировать, очистить, сохранить, скопировать или экспортировать.",
      kz: "Иә. Нәтижені қолмен түзетуге, тазалауға, сақтауға, көшіруге немесе экспорттауға болады."
    }
  },
  {
    q: {
      ru: "Безопасны ли медицинские данные?",
      kz: "Медициналық деректер қауіпсіз бе?"
    },
    a: {
      ru: "Сайт подчеркивает защищенную обработку, шифрование и контроль доступа. Реальная реализация зависит от инфраструктуры внедрения.",
      kz: "Сайт қорғалған өңдеуді, шифрлауды және қолжетімділікті бақылауды көрсетеді. Нақты іске асыру енгізу инфрақұрылымына байланысты."
    }
  },
  {
    q: {
      ru: "Можно ли адаптировать сервис под специальность?",
      kz: "Сервисті мамандыққа бейімдеуге бола ма?"
    },
    a: {
      ru: "Да. Шаблоны и словари можно адаптировать под профиль врача, отделение и локальные требования документации.",
      kz: "Иә. Үлгілер мен сөздіктерді дәрігер профиліне, бөлімшеге және жергілікті құжат талаптарына бейімдеуге болады."
    }
  }
];

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("ru");
  const t = translations[locale];

  const navLinks = useMemo(
    () => [
      { id: "benefits", label: t.nav[0] },
      { id: "demo", label: t.nav[1] },
      { id: "templates", label: t.nav[2] },
      { id: "examples", label: t.nav[3] },
      { id: "pricing", label: t.nav[4] },
      { id: "faq", label: t.nav[5] }
    ],
    [t.nav]
  );

  return <main className="relative overflow-hidden"><div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-mesh" /><header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl"><div className="section-shell flex h-20 items-center justify-between gap-6"><a href="#top" className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-600 text-white shadow-soft"><Stethoscope className="h-5 w-5" /></div><div><div className="text-base font-semibold tracking-tight text-ink">QalamMed</div><div className="text-xs text-slate">Medical AI Transcriber</div></div></a><nav className="hidden items-center gap-7 lg:flex">{navLinks.map((item) => (<a key={item.id} href={`#${item.id}`} className="text-sm text-slate transition hover:text-ink">{item.label}</a>))}</nav><div className="flex items-center gap-3"><div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">{(["ru", "kz"] as const).map((value) => (<button key={value} type="button" onClick={() => setLocale(value)} className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${locale === value ? "bg-ink text-white" : "text-slate hover:text-ink"}`}>{value.toUpperCase()}</button>))}</div><a href="#demo" className="hidden rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-navy-900 sm:inline-flex">{t.primaryCta}</a></div></div></header><section id="top" className="relative pt-10 sm:pt-14"><div className="section-shell grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[1.04fr_0.96fr] lg:pb-28"><div><div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/90 px-4 py-2 text-sm text-brand-700 shadow-soft"><Sparkles className="h-4 w-4" />{t.badge}</div><h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">{t.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">{t.subtitle}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy-900">{t.primaryCta}<ArrowRight className="h-4 w-4" /></a><a href="#how" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:border-slate-300">{t.secondaryCta}</a></div><div className="mt-10 flex flex-wrap gap-3">{t.heroNotes.map((item) => (<div key={item} className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate shadow-sm">{item}</div>))}</div><div className="mt-10 grid gap-4 sm:grid-cols-3">{t.trust.map((item) => (<div key={item} className="rounded-3xl border border-white/70 bg-white/85 p-4 shadow-soft"><CheckCircle2 className="h-5 w-5 text-brand-600" /><p className="mt-3 text-sm leading-6 text-ink">{item}</p></div>))}</div></div><div className="relative"><div className="hero-grid absolute inset-0 -z-10 rounded-[2rem]" /><div className="ambient-ring glass relative overflow-hidden rounded-[2rem] border border-white/70 p-4 shadow-soft sm:p-6"><div className="rounded-[1.75rem] bg-[#0F2136] p-5 text-white shadow-card"><div className="flex items-start justify-between gap-4"><div><div className="text-sm text-white/70">Live medical workflow</div><div className="mt-2 text-2xl font-semibold">Voice to structured note</div></div><div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">RU / KZ / Auto</div></div><div className="mt-6 grid gap-4 md:grid-cols-[0.75fr_1.25fr]"><div className="rounded-3xl bg-white/6 p-4"><div className="flex items-center gap-2 text-sm text-white/70"><Mic className="h-4 w-4" />Сырая речь врача</div><div className="mt-4 rounded-2xl bg-white/6 p-4 text-sm leading-7 text-white/90">Пациент 54 жаста, жалуется на слабость, тремор, appetite төмендеген...</div><div className="mt-4 flex items-center gap-2"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-500" /><span className="text-xs text-white/70">Идет запись</span></div></div><div className="rounded-3xl bg-gradient-to-b from-white to-[#f1f8fb] p-4 text-ink"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-sm text-slate">Готово к вставке в историю болезни</div><div className="mt-1 text-xl font-semibold">Амбулаторный прием</div></div><div className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">Обработано за 12 сек</div></div><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Распознанный текст</div><p className="mt-3 text-sm leading-6 text-slate">Пациент отмечает слабость, дрожь в руках, appetite төмендеуін, симптомдар соңғы 5 күнде күшейген.</p></div><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Структурированный документ</div><p className="mt-3 text-sm leading-6 text-slate">Жалобы: на слабость, тремор кистей, снижение аппетита. Анамнез: ухудшение в течение 5 дней...</p></div></div><div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">{["Исправить грамматику", "Медицинский стиль", "Mixed terms", "Разбить по разделам"].map((item) => (<span key={item} className="rounded-full border border-slate-200 px-3 py-2 text-slate">{item}</span>))}</div></div></div></div><div className="mt-5 grid gap-4 sm:grid-cols-3">{[{ icon: Globe2, label: "Mixed-language ready", value: "RU + KZ в одном потоке" }, { icon: LockKeyhole, label: "Secure workflow", value: "Доступ, роли, шифрование" }, { icon: ShieldCheck, label: "Clinical structure", value: "Жалобы, анамнез, статус, план" }].map((item) => (<div key={item.label} className="rounded-3xl border border-white/70 bg-white/85 p-4 shadow-soft"><item.icon className="h-5 w-5 text-navy-600" /><div className="mt-3 text-sm text-slate">{item.label}</div><div className="mt-1 text-sm font-semibold text-ink">{item.value}</div></div>))}</div></div></div></div></section><section id="how" className="py-20"><div className="section-shell"><div className="max-w-3xl"><h2 className="section-title">{t.howTitle}</h2><p className="section-copy">{t.howCopy}</p></div><div className="mt-12 grid gap-5 lg:grid-cols-4">{t.howSteps.map((step, index) => (<div key={step.title} className="rounded-4xl card-border bg-white p-6 shadow-card"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-sm font-semibold text-navy-700">0{index + 1}</div><h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate">{step.copy}</p></div>))}</div></div></section><section id="benefits" className="py-20"><div className="section-shell"><div className="max-w-3xl"><h2 className="section-title">{t.benefitsTitle}</h2><p className="section-copy">{t.benefitsCopy}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{benefits.map((item) => (<div key={item.title.ru} className="rounded-4xl card-border bg-white p-6 shadow-card"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700"><item.icon className="h-6 w-6" /></div><h3 className="mt-6 text-xl font-semibold text-ink">{item.title[locale]}</h3><p className="mt-3 text-sm leading-7 text-slate">{item.copy[locale]}</p></div>))}</div></div></section><section id="demo" className="py-20"><div className="section-shell"><div className="max-w-3xl"><h2 className="section-title">Product demo</h2><p className="section-copy">Реалистичный mockup транскрибатора показывает быстрый сценарий работы врача: от записи или вставки текста до готового документа.</p></div><div className="mt-12"><TranscriberDemo locale={locale} /></div></div></section><section id="templates" className="py-20"><div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr]"><div><h2 className="section-title">{t.templatesTitle}</h2><p className="section-copy">{t.templatesCopy}</p></div><div className="grid gap-4 sm:grid-cols-2">{templates.map((item) => (<div key={item} className="flex items-center gap-4 rounded-3xl card-border bg-white px-5 py-4 shadow-card"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-navy-700"><ClipboardList className="h-5 w-5" /></div><span className="text-sm font-medium text-ink">{item}</span></div>))}</div></div></section><section id="examples" className="py-20"><div className="section-shell"><div className="max-w-3xl"><h2 className="section-title">{t.examplesTitle}</h2><p className="section-copy">{t.examplesCopy}</p></div><div className="mt-12 grid gap-6 xl:grid-cols-3">{examples.map((item) => (<div key={item.label} className="rounded-4xl card-border bg-white p-6 shadow-card"><div className="inline-flex rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">{item.label}</div><div className="mt-5"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Вход</div><p className="mt-3 rounded-3xl bg-mist p-4 text-sm leading-7 text-slate">{item.input}</p></div><div className="mt-5"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Результат</div><p className="mt-3 whitespace-pre-line rounded-3xl bg-[#F8FCFF] p-4 text-sm leading-7 text-ink">{item.output}</p></div></div>))}</div></div></section><section className="py-20"><div className="section-shell"><div className="rounded-[2rem] bg-[#0F2136] p-8 text-white shadow-soft md:p-10"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.securityTitle}</h2><p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{t.securityCopy}</p></div><div className="grid gap-4 sm:grid-cols-2">{["Шифрование данных при передаче и хранении", "Контроль доступа и разграничение ролей", "Возможность защищенного локального размещения", "Подход для работы с чувствительной медицинской информацией"].map((item) => (<div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5"><ShieldCheck className="h-5 w-5 text-brand-500" /><p className="mt-4 text-sm leading-7 text-white/84">{item}</p></div>))}</div></div></div></div></section><section id="pricing" className="py-20"><div className="section-shell"><div className="max-w-3xl"><h2 className="section-title">{t.pricingTitle}</h2><p className="section-copy">{t.pricingCopy}</p></div><div className="mt-12 grid gap-6 xl:grid-cols-3">{pricing.map((item) => (<div key={item.tier} className={`rounded-4xl p-6 shadow-card ${item.featured ? "bg-ink text-white" : "card-border bg-white text-ink"}`}><div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-semibold">{item.tier}</h3><p className={`mt-2 text-sm ${item.featured ? "text-white/70" : "text-slate"}`}>{item.note}</p></div>{item.featured ? (<span className="rounded-full bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white">Popular</span>) : null}</div><div className="mt-8 text-4xl font-semibold tracking-tight">{item.price}</div><div className="mt-8 space-y-3">{item.features.map((feature) => (<div key={feature} className="flex items-start gap-3 text-sm"><CheckCircle2 className={`mt-0.5 h-4 w-4 ${item.featured ? "text-brand-500" : "text-brand-600"}`} /><span className={item.featured ? "text-white/84" : "text-slate"}>{feature}</span></div>))}</div><a href="#demo" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${item.featured ? "bg-white text-ink hover:bg-slate-100" : "bg-ink text-white hover:bg-navy-900"}`}>Выбрать тариф</a></div>))}</div></div></section><section id="faq" className="py-20"><div className="section-shell"><div className="max-w-3xl"><h2 className="section-title">{t.faqTitle}</h2></div><div className="mt-10 grid gap-4">{faqs.map((item) => (<details key={item.q.ru} className="group rounded-4xl card-border bg-white p-6 shadow-card"><summary className="cursor-pointer list-none text-lg font-semibold text-ink">{item.q[locale]}</summary><p className="mt-4 max-w-4xl text-sm leading-7 text-slate">{item.a[locale]}</p></details>))}</div></div></section><section className="pb-20"><div className="section-shell"><div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-brand-50 via-white to-[#eef7ff] p-8 shadow-soft md:flex md:items-center md:justify-between md:gap-8 md:p-10"><div><div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Ready for pilot</div><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Продиктовали, обработали, вставили в медицинскую документацию.</h2></div><div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0"><a href="#demo" className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy-900">Попробовать</a><a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:border-slate-300">Тарифы</a></div></div></div></section><footer className="border-t border-slate-200 py-10"><div className="section-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between"><div className="max-w-md"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-600 text-white shadow-soft"><Stethoscope className="h-5 w-5" /></div><div><div className="text-base font-semibold tracking-tight text-ink">QalamMed</div><div className="text-xs text-slate">Medical AI Transcriber</div></div></div><p className="mt-4 text-sm leading-7 text-slate">{t.footerTag}</p></div><div className="grid gap-8 sm:grid-cols-3"><div><div className="text-sm font-semibold text-ink">Навигация</div><div className="mt-4 space-y-3 text-sm text-slate">{navLinks.map((item) => (<a key={item.id} href={`#${item.id}`} className="block transition hover:text-ink">{item.label}</a>))}</div></div><div><div className="text-sm font-semibold text-ink">Контакты</div><div className="mt-4 space-y-3 text-sm text-slate"><a href="mailto:hello@qalammed.ai" className="block transition hover:text-ink">hello@qalammed.ai</a><a href="tel:+77000000000" className="block transition hover:text-ink">+7 700 000 00 00</a><span className="block">Almaty / Astana</span></div></div><div><div className="text-sm font-semibold text-ink">Документы</div><div className="mt-4 space-y-3 text-sm text-slate"><a href="#" className="block transition hover:text-ink">Политика конфиденциальности</a><a href="#" className="block transition hover:text-ink">Условия использования</a></div></div></div></div></footer></main>;
}
