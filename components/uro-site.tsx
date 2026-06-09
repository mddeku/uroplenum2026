"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  Mic2,
  MoveUpRight,
  Navigation,
  Sparkles,
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
  programDetails,
  sponsorLogos,
  venueFacts,
  venueImage,
  type Lang,
  type PageKey
} from "@/lib/uroplenum-data";

const pageKeys: PageKey[] = ["home", "program", "faculty", "venue"];

export function UroSitePage({ page }: { page: PageKey }) {
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f7fb] text-ink">
      <Navbar page={page} lang={lang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setLanguage={setLanguage} />
      {page === "home" && <HomePage lang={lang} />}
      {page === "program" && <ProgramPage lang={lang} />}
      {page === "faculty" && <FacultyPage lang={lang} />}
      {page === "venue" && <VenuePage lang={lang} />}
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
  page: PageKey;
  lang: Lang;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  setLanguage: (lang: Lang) => void;
}) {
  const t = copy[lang];

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
              className="hidden h-14 w-auto max-w-[300px] object-contain sm:block"
            />
            <img
              src="/images/uroplenum-site-mark.png"
              alt="UROPLENUM 2026 Kazakhstan"
              className="block h-12 w-12 rounded-lg object-cover sm:hidden"
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
            aria-label="Toggle navigation"
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
      />

      <section className="section-pad bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle} text={t.about} />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["1", lang === "en" ? "Congress day" : lang === "ru" ? "День пленума" : "Пленум күні"],
              ["5", lang === "en" ? "Scientific tracks" : lang === "ru" ? "Научных треков" : "Ғылыми трек"],
              ["20+", lang === "en" ? "Faculty members" : lang === "ru" ? "Спикеров" : "Спикер"],
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

      <VenueFeature lang={lang} />

      <section className="section-pad bg-mist section-motion">
        <div className="site-shell">
          <SectionTitle eyebrow={t.organizers} title={t.organizers} text={t.organizersText} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {sponsorLogos.map((logo) => (
              <div key={logo.src} className="sponsor-tile surface-card flex h-36 items-center justify-center bg-white p-6 text-center">
                <SponsorLogo src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand lang={lang} />
    </>
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
    { id: "kazakhstan", title: t.kazakhstanFaculty },
    { id: "international", title: t.internationalFaculty }
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
        subtitle="Congress-center QazExpoCongress"
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

function Hero({
  lang,
  title,
  subtitle,
  text,
  eyebrow,
  meta,
  primary,
  secondary,
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
          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && <ButtonLink href={primary.href} label={primary.label} primary />}
              {secondary && <ButtonLink href={secondary.href} label={secondary.label} />}
            </div>
          )}
        </div>
        <div className="hero-dashboard hidden lg:block">
          <div className="dashboard-card dashboard-card-main">
            <div className="flex items-center justify-between">
              <span className="fine-label text-gold-500">Live congress</span>
              <Sparkles className="h-5 w-5 text-gold-500" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <HeroMetric value="20+" label={lang === "en" ? "Speakers" : lang === "ru" ? "Спикеров" : "Спикер"} />
              <HeroMetric value="5" label={lang === "en" ? "Tracks" : lang === "ru" ? "Треков" : "Трек"} />
              <HeroMetric value="1" label={lang === "en" ? "Day" : lang === "ru" ? "День" : "Күн"} />
              <HeroMetric value="Astana" label={lang === "en" ? "City" : lang === "ru" ? "Город" : "Қала"} />
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
          <img src={venueImage} alt="QazExpoCongress Congress Center" className="aspect-[16/10] w-full object-cover" />
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

function ProgramCard({ lang, session }: { lang: Lang; session: (typeof programDetails)[number] }) {
  return (
    <article className="program-card surface-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-lg bg-brand-50 px-3 py-2 text-xs font-black text-brand-700">{session.time}</span>
        <span className="rounded-lg bg-gold-50 px-3 py-2 text-xs font-black text-gold-700">{session.room[lang]}</span>
      </div>
      <h2 className="mt-5 text-2xl font-black tracking-tight">{session.title[lang]}</h2>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-slate">
        {lang === "en" ? "Moderators" : lang === "ru" ? "Модераторы" : "Модераторлар"}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate">{session.moderators.join(", ")}</p>
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

function FacultyCard({ lang, person, index }: { lang: Lang; person: (typeof faculty)[number]; index: number }) {
  const displayName = lang === "ru" ? person.ruName : lang === "kz" ? person.kzName : person.name;
  const initials = useMemo(
    () =>
      displayName
        .split(" ")
        .slice(0, 2)
        .map((part) => part[0])
        .join(""),
    [displayName]
  );
  const gradients = ["from-brand-700 to-ink", "from-gold-600 to-ink", "from-navy-600 to-brand-700"];

  return (
    <article className="faculty-card surface-card overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`faculty-portrait flex h-48 items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]} text-white`}>
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white/12 text-3xl font-black">
          {initials}
        </div>
      </div>
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
  if (alt === "AOQa") {
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

  return <img src={src} alt={alt} className="max-h-24 max-w-full object-contain" />;
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
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">Email</div>
                <div className="mt-1 text-sm font-bold">{t.email}</div>
              </div>
              <div className="rounded-lg bg-white/8 p-5">
                <MapPin className="h-5 w-5 text-gold-500" />
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/50">Venue</div>
                <div className="mt-1 text-sm font-bold">QazExpoCongress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ButtonLink({ href, label, primary = false }: { href: string; label: string; primary?: boolean }) {
  return (
    <Link
      href={href}
      className={`action-button inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-black transition ${
        primary ? "bg-gold-500 text-ink hover:bg-gold-100" : "bg-white text-ink hover:bg-white/88"
      }`}
    >
      {label}
      {primary ? <MoveUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
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
