import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const SITE_URL = "https://poleposition-pneus93.fr";

export const metadata: Metadata = {
  title: "Montage Pneus & Entretien Auto Épinay-sur-Seine 93 | 7j/7 Sans RDV",
  description:
    "Tous nos services à Épinay-sur-Seine : montage & équilibrage pneus, freinage (disques, plaquettes), vidange, géométrie. Sans rendez-vous 7j/7 de 9h à 19h. Devis gratuit.",
  keywords: [
    "montage pneus Épinay-sur-Seine",
    "équilibrage roues Seine-Saint-Denis",
    "freinage plaquettes disques 93",
    "vidange voiture Épinay",
    "géométrie parallélisme 93800",
    "réparation crevaison Épinay",
    "entretien auto 93 sans rendez-vous",
    "centre auto Épinay-sur-Seine 7j7",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services Pneus & Entretien Auto — Épinay-sur-Seine 93",
    description: "Montage pneus, freinage, vidange sans rendez-vous. 7j/7 de 9h à 19h.",
    url: `${SITE_URL}/services`,
    images: [{ url: `${SITE_URL}/images/categories/brakes.jpg`, width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
