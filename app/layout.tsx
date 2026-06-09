import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uroplenum.com"),
  title: {
    default: "UROPLENUM 2026 | Plenum of Urologists of Kazakhstan",
    template: "%s | UROPLENUM 2026"
  },
  description:
    "UROPLENUM 2026 is the Plenum of Urologists of Kazakhstan, a national scientific and educational meeting at QazExpoCongress in Astana on July 3, 2026.",
  keywords: [
    "UROPLENUM 2026",
    "uroplenum.com",
    "Uroplenum",
    "Uroplenum Kazakhstan",
    "Plenum of Urologists of Kazakhstan",
    "Kazakhstan urology congress",
    "urology conference Astana",
    "QazExpoCongress",
    "Пленум урологов Казахстана",
    "урология Казахстан",
    "урологический конгресс Астана",
    "Қазақстан урологтарының пленумы"
  ],
  authors: [{ name: "UROPLENUM 2026 Organizing Committee" }],
  creator: "UROPLENUM 2026",
  publisher: "UROPLENUM 2026",
  alternates: {
    canonical: "/",
    languages: {
      en: "/?lang=en",
      ru: "/?lang=ru",
      kk: "/?lang=kz"
    }
  },
  openGraph: {
    type: "website",
    url: "https://uroplenum.com",
    siteName: "UROPLENUM 2026",
    title: "UROPLENUM 2026 | Plenum of Urologists of Kazakhstan",
    description:
      "National scientific and educational urology meeting at QazExpoCongress, Astana, Kazakhstan.",
    images: [
      {
        url: "/images/uroplenum-hero.png",
        width: 1672,
        height: 940,
        alt: "UROPLENUM 2026 urology congress in Astana"
      }
    ],
    locale: "en_US",
    alternateLocale: ["ru_RU", "kk_KZ"]
  },
  twitter: {
    card: "summary_large_image",
    title: "UROPLENUM 2026 | Plenum of Urologists of Kazakhstan",
    description:
      "National scientific and educational urology meeting at QazExpoCongress, Astana, Kazakhstan.",
    images: ["/images/uroplenum-hero.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/images/uroplenum-icon-32.png",
    apple: "/images/uroplenum-icon-180.png"
  }
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "UROPLENUM 2026",
  alternateName: [
    "Plenum of Urologists of Kazakhstan 2026",
    "Пленум урологов Казахстана 2026",
    "Қазақстан урологтарының пленумы 2026"
  ],
  description:
    "A national scientific and educational meeting bringing together leading urologists, researchers, healthcare leaders and international faculty.",
  startDate: "2026-07-03",
  endDate: "2026-07-03",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: "https://uroplenum.com",
  image: ["https://uroplenum.com/images/uroplenum-hero.png"],
  location: {
    "@type": "Place",
    name: "Congress-center QazExpoCongress",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Heydar Aliyev Street",
      addressLocality: "Astana",
      addressCountry: "KZ"
    }
  },
  organizer: {
    "@type": "Organization",
    name: "UROPLENUM 2026 Organizing Committee",
    email: "uroplenum2026@mail.ru",
    url: "https://uroplenum.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable} ${inter.variable} bg-white text-ink antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
