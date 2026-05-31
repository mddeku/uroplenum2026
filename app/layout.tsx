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
  metadataBase: new URL("https://uroplenum2026.vercel.app"),
  title: "UROPLENUM 2026 | Plenum of Urologists of Kazakhstan",
  description:
    "A trilingual conference website for UROPLENUM 2026 at QazExpoCongress, Astana."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable} ${inter.variable} bg-white text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
