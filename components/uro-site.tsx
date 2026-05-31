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
  Navigation,
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
    <div className="min-h-screen overflow-x-hidden bg-white text-ink">
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="site-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href={`/?lang=${lang}`}
            className="flex min-w-0 max-w-[calc(100%-3.75rem)] items-center gap-3 lg:max-w-none"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500 text-ink">
              <KidneyIcon className="h-7 w-7" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-lg font-black tracking-tight">{t.brand}</span>
              <span className="block truncate text-xs font-bold text-gold-500">Kazakhstan</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {pageKeys.map((key) => (
              <Link
                key={key}
                href={`${pagePath[key]}?lang=${lang}`}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  key === page ? "bg-white text-ink" : "text-white/72 hover:bg-white/10 hover:text-white"
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
                  lang === item.id ? "bg-gold-500 text-ink" : "bg-white/8 text-white/70 hover:bg-white/14"
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
              <div key={label} className="surface-card p-6">
                <div className="text-4xl font-black tracking-tight text-ink">{value}</div>
                <div className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
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

      <section className="section-pad bg-mist">
        <div className="site-shell">
          <SectionTitle eyebrow={t.organizers} title={t.organizers} text={t.organizersText} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {sponsorLogos.map((logo) => (
              <div key={logo.src} className="surface-card flex h-36 items-center justify-center bg-white p-6 text-center">
                <img src={logo.src} alt={logo.alt} className="max-h-24 max-w-full object-contain" />
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
          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
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
        <section key={group.id} className={`section-pad ${index % 2 ? "bg-mist" : "bg-white"}`}>
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

      <section className="section-pad bg-mist">
        <div className="site-shell grid gap-5 lg:grid-cols-3">
          <InfoCard icon={Building2} title={t.venueAbout} text={t.venueAboutText} />
          <InfoCard icon={Navigation} title={t.gettingThere} text={t.gettingThereText} />
          <InfoCard icon={CheckCircle2} title={t.accommodation} text={t.accommodationText} />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-shell">
          <SectionTitle eyebrow={t.map} title={t.venueTitle} text={t.venueIntro} />
          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-card">
            <div className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(90deg,#e2e8f0_1px,transparent_1px),linear-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:34px_34px] p-8">
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
  const image = venue ? venueImage : "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className={`relative overflow-hidden bg-ink text-white ${compact ? "py-20 sm:py-24" : "py-20 sm:py-28 lg:py-32"}`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-28" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,26,51,0.96),rgba(10,31,68,0.82)_52%,rgba(13,74,121,0.58))]" />
      </div>
      <div className="site-shell relative">
        <div className="reveal-up w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] sm:w-auto sm:max-w-4xl">
          <div className="fine-label max-w-[320px] whitespace-normal break-words text-gold-500 tracking-[0.16em] sm:max-w-full sm:tracking-[0.22em]" style={{ overflowWrap: "anywhere" }}>
            {eyebrow}
          </div>
          <h1 className="mt-5 max-w-full whitespace-normal break-words text-3xl font-black tracking-tight sm:text-6xl lg:text-7xl" style={{ overflowWrap: "anywhere" }}>
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
      </div>
    </section>
  );
}

function VenueFeature({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section className="section-pad bg-white">
      <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-lg shadow-soft">
          <img src={venueImage} alt="QazExpoCongress Congress Center" className="aspect-[16/10] w-full object-cover" />
        </div>
        <div>
          <SectionTitle eyebrow={nav[lang].venue} title={t.venueTitle} text={t.venueAboutText} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {venueFacts.map((fact) => (
              <div key={fact.value} className="rounded-lg border border-slate-200 bg-mist p-5">
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
    <article className="surface-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
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
          <div key={`${talk.time}-${talk.speaker}-${talk.topic}`} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-black text-brand-700">{talk.time}</div>
            <div className="mt-1 font-black text-ink">{talk.speaker}</div>
            <div className="mt-2 text-sm leading-6 text-slate">{talk.topic}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function FacultyCard({ lang, person, index }: { lang: Lang; person: (typeof faculty)[number]; index: number }) {
  const displayName = lang === "ru" && person.ruName ? person.ruName : person.name;
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
    <article className="surface-card overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]} text-white`}>
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
    <article className="surface-card p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-50 text-gold-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{text}</p>
    </article>
  );
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
    <section className="section-pad bg-white">
      <div className="site-shell">
        <div className="rounded-lg bg-ink p-8 text-white shadow-soft sm:p-10">
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
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-black transition ${
        primary ? "bg-gold-500 text-ink hover:bg-gold-100" : "bg-white text-ink hover:bg-white/88"
      }`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
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
            <div className="text-xl font-black text-ink">{t.brand}</div>
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
