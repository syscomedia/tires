import type { Metadata } from "next";
import CategoriesClient from "./CategoriesClient";

const SITE_URL = "https://poleposition-pneus93.fr";

export const metadata: Metadata = {
  title: "Pneus Été, Hiver, 4x4, Utilitaires — Épinay-sur-Seine 93 | Pole Position",
  description:
    "Toutes nos gammes de pneus à Épinay-sur-Seine : pneus été, hiver, toutes saisons, 4x4 & SUV, utilitaires. Montage express inclus. Toutes marques : Michelin, Bridgestone, Continental, Goodyear.",
  keywords: [
    "pneus été Épinay-sur-Seine",
    "pneus hiver 93",
    "pneus toutes saisons Seine-Saint-Denis",
    "pneus 4x4 SUV Épinay",
    "pneus utilitaires 93800",
    "Michelin Épinay-sur-Seine",
    "Bridgestone 93",
    "Continental Épinay",
    "pneus pas cher Seine-Saint-Denis",
  ],
  alternates: { canonical: `${SITE_URL}/categories` },
  openGraph: {
    title: "Nos Pneus : Été, Hiver, 4x4, Utilitaires — Épinay-sur-Seine 93",
    description: "Toutes gammes de pneus. Montage express inclus. 7j/7 à Épinay-sur-Seine.",
    url: `${SITE_URL}/categories`,
    images: [{ url: `${SITE_URL}/images/categories/TIRES.png`, width: 1200, height: 630 }],
  },
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
