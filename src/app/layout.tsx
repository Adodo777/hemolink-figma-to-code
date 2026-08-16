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
