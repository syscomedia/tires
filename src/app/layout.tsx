import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://poleposition-pneus93.fr"),
  title: {
    default: "POLE POSITION | Montage Pneus à Épinay-sur-Seine",
    template: "%s | POLE POSITION Pneus 93",
  },
  description: "POLE POSITION : Montage et équilibrage de pneus neufs et d'occasion, freinage, entretien automobile. Ouvert 7j/7 de 9h à 19h à Épinay-sur-Seine (93).",
  keywords: ["pneus", "montage pneus", "équilibrage", "freinage", "plaquettes", "entretien auto", "Épinay-sur-Seine", "93", "Seine-Saint-Denis", "pneus neufs", "pneus occasion"],
  authors: [{ name: "POLE POSITION" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://poleposition-pneus93.fr",
    siteName: "POLE POSITION Pneus 93",
    title: "POLE POSITION Pneus 93 | Spécialiste Pneus & Entretien Auto à Épinay-sur-Seine",
    description: "Montage et équilibrage de pneus, freinage, entretien rapide. Ouvert 7j/7 de 9h à 19h. 2 Rue Claude Debussy, 93800 Épinay-sur-Seine.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "POLE POSITION",
      },
    ],
  },
  icons: {
    icon: "/icoa.png?v=1",
    apple: "/icoa.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icoa.png?v=1" />
        <link rel="apple-touch-icon" href="/icoa.png?v=1" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

