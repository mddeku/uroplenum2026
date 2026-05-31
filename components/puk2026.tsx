"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Navigation,
  PanelTop,
  Phone,
  UsersRound,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/faculty", label: "Faculty" },
  { href: "/venue", label: "Venue" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="site-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-white shadow-soft">
            <Microscope className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-ink">PUK2026</div>
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-gold-600">Kazakhstan</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active ? "text-brand-600" : "text-slate hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/program"
          className="hidden items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-700 lg:inline-flex"
        >
          View Program
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="site-shell flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="site-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-ink">
                <Microscope className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-lg font-bold">PUK2026</div>
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-gold-500">
                  Plenum of Urologists of Kazakhstan
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              A national scientific and educational meeting for urologists, researchers, and healthcare
              professionals.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">Navigation</div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/72">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">Contact</div>
            <a href="mailto:info@puk2026.kz" className="mt-5 flex items-center gap-2 text-sm text-white/72 hover:text-white">
              <Mail className="h-4 w-4" aria-hidden="true" />
              info@puk2026.kz
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/56">
          © 2026 PUK2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  meta,
  primary,
  secondary,
  variant = "home"
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  meta?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  variant?: "home" | "venue" | "plain";
}) {
  const mediaClass = variant === "venue" ? "venue-media" : "hero-media";

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className={`absolute inset-0 ${variant === "plain" ? "bg-navy-900" : mediaClass}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/82 to-navy-900/26" />
      <div className="site-shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.68fr]">
        <div className="reveal-up">
          <div className="fine-label">{eyebrow}</div>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">{subtitle}</p>
          {meta ? (
            <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
              <CalendarDays className="h-5 w-5 text-gold-500" aria-hidden="true" />
              {meta}
            </div>
          ) : null}
          {primary || secondary ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primary ? (
                <Link
                  href={primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-4 text-sm font-bold text-ink transition hover:bg-gold-100"
                >
                  {primary.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/24 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/16"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="hidden rounded-lg border border-white/16 bg-white/10 p-5 shadow-soft backdrop-blur lg:block">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white/10">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3a4f6f56?auto=format&fit=crop&w=900&q=80"
              alt="Medical congress auditorium placeholder"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Scientific exchange", "National faculty", "Clinical education"].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-3 text-xs font-semibold leading-5 text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <div className="fine-label">{eyebrow}</div> : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate sm:text-lg">{text}</p> : null}
    </div>
  );
}

export function ProgramCard({
  time,
  title,
  speaker,
  room
}: {
  time: string;
  title: string;
  speaker: string;
  room: string;
}) {
  return (
    <article className="surface-card p-5 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-600">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            {time}
          </div>
          <h3 className="mt-3 text-xl font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate">{speaker}</p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-lg bg-mist px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink">
          <MapPin className="h-4 w-4 text-gold-600" aria-hidden="true" />
          {room}
        </div>
      </div>
    </article>
  );
}

export function FacultyCard({
  image,
  name,
  title,
  location,
  topic
}: {
  image: string;
  name: string;
  title: string;
  location: string;
  topic: string;
}) {
  return (
    <article className="surface-card overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] bg-slate-100">
        <img src={image} alt={`${name} profile placeholder`} className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-ink">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-brand-600">{title}</p>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate">
          <MapPin className="h-4 w-4 text-gold-600" aria-hidden="true" />
          {location}
        </p>
        <div className="mt-5 rounded-lg bg-mist p-4 text-sm leading-6 text-slate">
          <span className="font-semibold text-ink">Topic:</span> {topic}
        </div>
      </div>
    </article>
  );
}

export function VenueCard({
  icon: Icon,
  title,
  text
}: {
  icon: typeof Building2;
  title: string;
  text: string;
}) {
  return (
    <article className="surface-card p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{text}</p>
    </article>
  );
}

export const homeHighlights = [
  {
    icon: Award,
    title: "Key Highlights",
    text: "Two days of focused learning, keynote lectures, surgical updates, expert discussion, and research exchange."
  },
  {
    icon: PanelTop,
    title: "Scientific Sessions",
    text: "A clinically relevant agenda spanning endourology, oncology, reconstructive urology, and pediatric practice."
  },
  {
    icon: UsersRound,
    title: "Professional Collaboration",
    text: "A national platform for building stronger ties between clinicians, academics, hospitals, and partners."
  }
];

export const venueItems = [
  {
    icon: Building2,
    title: "About the Venue",
    text: "A contemporary congress setting designed for plenary sessions, parallel tracks, partner exhibits, and professional networking."
  },
  {
    icon: Navigation,
    title: "How to Get There",
    text: "Transport guidance will be published closer to the meeting, including airport transfer notes and local access routes."
  },
  {
    icon: Landmark,
    title: "Accommodation",
    text: "Preferred hotel options and special participant rates will be listed after the venue partner confirmation."
  }
];

export const contactItems = [
  { icon: Mail, label: "Email", value: "info@puk2026.kz" },
  { icon: Phone, label: "Phone", value: "+7 700 000 00 00" },
  { icon: MapPin, label: "Location", value: "Kazakhstan" }
];

export function LinkRow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-ink">
      {children}
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export { CircleUserRound };
