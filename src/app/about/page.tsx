import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const SITE_URL = "https://poleposition-pneus93.fr";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous | Pole Position Pneus — Épinay-sur-Seine 93",
  description:
    "Pole Position — Pneus Services 93 : votre garagiste pneus de confiance à Épinay-sur-Seine. RCS 103 861 852 Bobigny. Fondé par Kouba Salim. Ouvert 7j/7.",
  keywords: [
    "garagiste pneus Épinay-sur-Seine",
    "centre pneus Seine-Saint-Denis",
    "Pneus Services 93 Épinay",
    "Pole Position pneus avis",
    "meilleur garagiste 93800",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "À Propos — Pole Position Pneus Épinay-sur-Seine 93",
    description: "Votre spécialiste pneus local en Seine-Saint-Denis. Ouvert 7j/7.",
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/images/categories/about.jpg`, width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
