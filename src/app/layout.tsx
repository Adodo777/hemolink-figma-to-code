import type { Metadata } from "next";
import { Poppins, Syne, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "800", "700"],
  variable: "--font-syne",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HemoLink Bénin — Don de Sang Bénin | Chaque Don Sauve des Vies",
  description: "Plateforme nationale d'information et de sensibilisation sur le don de sang au Bénin. Vérifiez votre éligibilité en 30s et localisez le centre le plus proche.",
  keywords: ["Don de sang", "Bénin", "CNTS", "Transfusion sanguine", "Sauver des vies", "Santé Bénin", "HemoLink"],
  authors: [{ name: "HemoLink Bénin" }],
  openGraph: {
    title: "HemoLink Bénin — Chaque Don Sauve des Vies",
    description: "Plateforme numérique citoyenne dédiée à la sensibilisation et à l'orientation des donneurs de sang au Bénin.",
    url: "https://hemolink.bj", // Exemple d'URL
    siteName: "HemoLink Bénin",
    images: [
      {
        url: "/open-graph.webp",
        width: 1200,
        height: 630,
        alt: "HemoLink Bénin - Plateforme du don de sang",
      },
    ],
    locale: "fr_BJ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HemoLink Bénin — Chaque Don Sauve des Vies",
    description: "Vérifiez votre éligibilité au don de sang au Bénin en 30s et localisez le centre le plus proche.",
    images: ["/open-graph.webp"],
  },
  icons: {
    icon: "/hemolink.webp",
    shortcut: "/hemolink.webp",
    apple: "/hemolink.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${poppins.variable} ${syne.variable} ${caveat.variable}`}>
      <body className="min-h-screen antialiased selection:bg-blood-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
