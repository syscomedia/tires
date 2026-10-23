import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const SITE_URL = "https://pneuservices93.com";

export const metadata: Metadata = {
  title: "Contact & Horaires | Pneu Services 93 Épinay-sur-Seine — 7j/7",
  description:
    "Contactez Pneu Services 93 à Épinay-sur-Seine. 2 Rue Claude Debussy 93800. Ouvert 7j/7 de 9h à 19h. Devis pneus gratuit par téléphone ou formulaire.",
  keywords: [
    "contact pneus Épinay-sur-Seine",
    "horaires centre pneus 93",
    "devis pneus gratuit Épinay",
    "adresse garagiste pneus 93800",
    "téléphone pneus Seine-Saint-Denis",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact & Horaires — Pneu Services 93 | Épinay-sur-Seine",
    description: "Ouvert 7j/7. 2 Rue Claude Debussy 93800 Épinay-sur-Seine. Devis gratuit.",
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/images/categories/TIRES.png`, width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
