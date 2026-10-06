import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-mono",
  display: "swap",
});

const titre = "Brigade — Pilote une équipe de clippeurs payés aux vues";
const description =
  "Un lien de suivi par clippeur, les vues relevées, la paie calculée au millier de vues. Fini les tableurs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brigade-gamma.vercel.app"),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    locale: "fr_FR",
    type: "website",
    siteName: "Brigade",
  },
  twitter: {
    card: "summary_large_image",
    title: titre,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F1EA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}