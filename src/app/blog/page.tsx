import type { Metadata } from "next";
import BlogClient from "./BlogClient";

const SITE_URL = "https://poleposition-pneus93.fr";

export const metadata: Metadata = {
  title: "Blog Pneus & Auto | Conseils Montage, Hiver, Entretien — Épinay-sur-Seine 93",
  description:
    "Conseils et guides sur les pneus : quand changer ses pneus, quelle marque choisir, pneus été vs hiver, entretien freinage… Par les experts Pole Position à Épinay-sur-Seine.",
  keywords: [
    "conseils pneus voiture",
    "quand changer pneus",
    "pneus été vs hiver différence",
    "comment choisir ses pneus",
    "pneus toutes saisons avis",
    "entretien pneus conseils",
    "freinage plaquettes quand changer",
    "blog auto Épinay-sur-Seine",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog Pneus & Auto — Conseils Experts | Pole Position 93",
    description: "Guides et conseils pneus par vos experts locaux à Épinay-sur-Seine.",
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/images/categories/TIRES.png`, width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
