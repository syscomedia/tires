import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

const SITE_URL = "https://poleposition-pneus93.fr";
const PHONE = "+33 9 53 43 99 99";
const ADDRESS = "2 Rue Claude Debussy, 93800 Épinay-sur-Seine";

// JSON-LD: LocalBusiness + AutoRepair + TireShop
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AutoRepair", "TireShop", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Pole Position — Pneus Services 93",
      alternateName: ["Pole Position Pneus", "Pneus Services 93", "Pneus Épinay-sur-Seine"],
      url: SITE_URL,
      telephone: PHONE,
      email: "contact@pneus-services93.fr",
      description:
        "Spécialiste pneus à Épinay-sur-Seine (93) : montage, équilibrage, freinage, entretien rapide. Pneus neufs & occasion toutes marques. Ouvert 7j/7 de 9h à 19h.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Rue Claude Debussy",
        addressLocality: "Épinay-sur-Seine",
        postalCode: "93800",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.9567,
        longitude: 2.3112,
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=2+Rue+Claude+Debussy+93800+Épinay-sur-Seine`,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Carte bancaire, Virement",
      areaServed: [
        { "@type": "City", name: "Épinay-sur-Seine" },
        { "@type": "City", name: "Saint-Denis" },
        { "@type": "City", name: "Stains" },
        { "@type": "City", name: "Pierrefitte-sur-Seine" },
        { "@type": "City", name: "Villetaneuse" },
        { "@type": "City", name: "L'Île-Saint-Denis" },
        { "@type": "City", name: "Enghien-les-Bains" },
        { "@type": "City", name: "Argenteuil" },
        { "@type": "City", name: "Clichy-sous-Bois" },
        { "@type": "AdministrativeArea", name: "Seine-Saint-Denis" },
        { "@type": "AdministrativeArea", name: "Val-d'Oise" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
      serviceType: [
        "Montage de pneus",
        "Équilibrage de roues",
        "Géométrie / Parallélisme",
        "Freinage automobile",
        "Remplacement de plaquettes de frein",
        "Remplacement de disques de frein",
        "Vidange huile moteur",
        "Entretien automobile",
        "Vente de pneus neufs",
        "Vente de pneus d'occasion",
        "Réparation de crevaison",
        "Vente et achat de véhicules",
        "Location de véhicule sans chauffeur",
      ],
      brand: [
        { "@type": "Brand", name: "Michelin" },
        { "@type": "Brand", name: "Continental" },
        { "@type": "Brand", name: "Bridgestone" },
        { "@type": "Brand", name: "Goodyear" },
        { "@type": "Brand", name: "Pirelli" },
        { "@type": "Brand", name: "Dunlop" },
        { "@type": "Brand", name: "BFGoodrich" },
        { "@type": "Brand", name: "Hankook" },
        { "@type": "Brand", name: "Yokohama" },
        { "@type": "Brand", name: "Falken" },
      ],
      image: `${SITE_URL}/images/categories/TIRES.png`,
      logo: `${SITE_URL}/icoa.png`,
      sameAs: [
        "https://www.google.com/maps/search/?api=1&query=Pole+Position+Pneus+Epinay-sur-Seine",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Pole Position — Pneus Services 93",
      description: "Votre spécialiste pneus en Seine-Saint-Denis. Montage, équilibrage, freinage, entretien 7j/7.",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/categories?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pose Pneus Épinay-sur-Seine 93 | Pole Position — Montage 7j/7",
    template: "%s | Pole Position Pneus 93",
  },
  description:
    "Spécialiste pneus à Épinay-sur-Seine (93800). Montage & équilibrage express, pneus neufs et occasion, freinage, vidange. Ouvert 7j/7 de 9h à 19h. Toutes marques : Michelin, Continental, Bridgestone…",
  keywords: [
    // Mots-clés transactionnels locaux — volume fort
    "pneus Épinay-sur-Seine",
    "montage pneus Épinay-sur-Seine",
    "pose pneus 93800",
    "pneus 93 Seine-Saint-Denis",
    "centre pneus Épinay",
    "vulcanisation Épinay-sur-Seine",
    // Intention d'achat
    "acheter pneus Épinay-sur-Seine",
    "pneus pas cher 93",
    "pneus neufs occasion 93",
    "pneus Michelin Épinay",
    "pneus Continental 93",
    "pneus Bridgestone Seine-Saint-Denis",
    // Services
    "équilibrage roues Épinay-sur-Seine",
    "géométrie parallélisme 93",
    "freinage plaquettes Épinay",
    "vidange voiture Épinay-sur-Seine",
    "entretien auto 93800",
    "crevaison réparation Épinay",
    // Saisons
    "pneus été Épinay-sur-Seine",
    "pneus hiver 93",
    "pneus toutes saisons Épinay",
    "pneus 4x4 SUV 93",
    "pneus utilitaires Seine-Saint-Denis",
    // Zones proches
    "pneus Saint-Denis 93",
    "pneus Argenteuil",
    "pneus Stains",
    "pneus Pierrefitte-sur-Seine",
    "pneus Île-de-France",
  ],
  authors: [{ name: "Pole Position — Pneus Services 93", url: SITE_URL }],
  creator: "Pole Position — Pneus Services 93",
  publisher: "Pole Position — Pneus Services 93",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Pole Position — Pneus Services 93",
    title: "Pose Pneus Épinay-sur-Seine 93 | Montage 7j/7 — Toutes Marques",
    description:
      "Centre pneus à Épinay-sur-Seine (93800). Montage express, freinage, vidange. Pneus neufs & occasion : Michelin, Bridgestone, Continental… Ouvert 7j/7 de 9h à 19h.",
    images: [
      {
        url: `${SITE_URL}/images/categories/TIRES.png`,
        width: 1200,
        height: 630,
        alt: "Pole Position — Spécialiste pneus Épinay-sur-Seine 93",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pose Pneus Épinay-sur-Seine 93 | Pole Position — 7j/7",
    description: "Montage & équilibrage pneus, freinage, entretien auto. Ouvert 7j/7 de 9h à 19h à Épinay-sur-Seine.",
    images: [`${SITE_URL}/images/categories/TIRES.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "fr-FR": SITE_URL },
  },
  category: "automotive",
  icons: {
    icon: "/icoa.png?v=2",
    apple: "/icoa.png?v=2",
    shortcut: "/icoa.png?v=2",
  },
  verification: {
    // Add your Google Search Console verification token here when ready
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/icoa.png?v=2" />
        <link rel="apple-touch-icon" href="/icoa.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Google Tag Manager — replace GTM-XXXXXXX with your real ID */}
        {/* <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');</Script> */}
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* JSON-LD Structured Data */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
