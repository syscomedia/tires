import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const SITE_URL = "https://poleposition-pneus93.fr";

export const metadata: Metadata = {
  title: "Pose Pneus Épinay-sur-Seine 93 | Pole Position — Montage 7j/7",
  description:
    "Pose et montage de pneus à Épinay-sur-Seine (93800). Pneus neufs & occasion, équilibrage, freinage, vidange. Toutes marques : Michelin, Bridgestone, Continental. Ouvert 7j/7 de 9h à 19h.",
  keywords: [
    "pose pneus Épinay-sur-Seine",
    "montage pneus 93800",
    "pneus neufs Épinay",
    "pneus occasion 93",
    "spécialiste pneus Seine-Saint-Denis",
    "centre pneus Épinay-sur-Seine 7j/7",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Pose Pneus Épinay-sur-Seine 93 | Montage 7j/7 — Toutes Marques",
    description: "Centre pneus à Épinay-sur-Seine. Montage express, freinage, vidange. Neufs & occasion. Ouvert 7j/7.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/images/categories/TIRES.png`, width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <HomeClient />;
}
