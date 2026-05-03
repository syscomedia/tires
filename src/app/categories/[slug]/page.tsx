import type { Metadata } from "next";
import { categories } from "@/data/site-data";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";

const SITE_URL = "https://poleposition-pneus93.fr";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "pneus-ete": {
    title: "Pneus Été Épinay-sur-Seine 93 | Michelin, Continental, Bridgestone — Montage Express",
    description:
      "Achetez et faites monter vos pneus été à Épinay-sur-Seine (93800). Large choix : Michelin Primacy, Continental EcoContact, Bridgestone Turanza. Montage & équilibrage inclus. 7j/7.",
    keywords: [
      "pneus été Épinay-sur-Seine",
      "pneus été 93",
      "Michelin Primacy 4 Épinay",
      "Continental EcoContact 93",
      "montage pneus été Seine-Saint-Denis",
      "pneus été pas cher 93800",
    ],
  },
  "pneus-hiver": {
    title: "Pneus Hiver Épinay-sur-Seine 93 | 3PMSF — Michelin Alpin, Bridgestone Blizzak",
    description:
      "Pneus hiver homologués 3PMSF à Épinay-sur-Seine. Michelin Alpin, Bridgestone Blizzak, Nokian. Grip neige & verglas garanti. Montage express 7j/7.",
    keywords: [
      "pneus hiver Épinay-sur-Seine",
      "pneus hiver 93",
      "pneus neige Seine-Saint-Denis",
      "Michelin Alpin Épinay",
      "Bridgestone Blizzak 93",
      "pneus 3PMSF 93800",
    ],
  },
  "toutes-saisons": {
    title: "Pneus Toutes Saisons Épinay-sur-Seine 93 | Michelin CrossClimate, Goodyear Vector",
    description:
      "Pneus toutes saisons à Épinay-sur-Seine : conduisez toute l'année sans changer de pneus. Michelin CrossClimate 2, Goodyear Vector 4Seasons. Homologués 3PMSF. Montage inclus.",
    keywords: [
      "pneus toutes saisons Épinay-sur-Seine",
      "pneus 4 saisons 93",
      "Michelin CrossClimate Épinay",
      "pneus toutes saisons pas cher 93",
      "pneus toutes saisons Seine-Saint-Denis",
    ],
  },
  "pneus-4x4-suv": {
    title: "Pneus 4x4 & SUV Épinay-sur-Seine 93 | Michelin, BFGoodrich, Pirelli",
    description:
      "Pneus 4x4 et SUV à Épinay-sur-Seine : Michelin Pilot Sport, BFGoodrich All-Terrain. Routier, tout-terrain, mixte. Montage & équilibrage inclus. 7j/7.",
    keywords: [
      "pneus 4x4 Épinay-sur-Seine",
      "pneus SUV 93",
      "pneus crossover Seine-Saint-Denis",
      "BFGoodrich 4x4 Épinay",
      "Michelin SUV 93800",
      "pneus 4x4 pas cher 93",
    ],
  },
  "pneus-utilitaires": {
    title: "Pneus Utilitaires Épinay-sur-Seine 93 | Fourgons, Camionnettes — Michelin Agilis",
    description:
      "Pneus utilitaires pour fourgons et camionnettes à Épinay-sur-Seine. Michelin Agilis, Continental VanContact. Charge renforcée. Montage professionnel 7j/7.",
    keywords: [
      "pneus utilitaires Épinay-sur-Seine",
      "pneus fourgon 93",
      "pneus camionnette Seine-Saint-Denis",
      "Michelin Agilis Épinay",
      "pneus van 93800",
      "pneus utilitaires pas cher 93",
    ],
  },
  "freinage-entretien": {
    title: "Freinage & Entretien Auto Épinay-sur-Seine 93 | Disques, Plaquettes, Vidange",
    description:
      "Remplacement disques et plaquettes de frein, vidange huile moteur, entretien complet à Épinay-sur-Seine. Sans rendez-vous. Brembo, TRW. 7j/7 de 9h à 19h.",
    keywords: [
      "freinage auto Épinay-sur-Seine",
      "plaquettes disques frein 93",
      "vidange voiture Épinay",
      "entretien auto 93800 sans rendez-vous",
      "Brembo Épinay-sur-Seine",
      "révision auto Seine-Saint-Denis",
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  const meta = categoryMeta[slug] ?? {
    title: `${category.name} — Épinay-sur-Seine 93 | Pole Position Pneus`,
    description: `${category.description} Montage express inclus. 7j/7 à Épinay-sur-Seine (93).`,
    keywords: ["pneus Épinay-sur-Seine", category.slug, "93"],
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `${SITE_URL}/categories/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/categories/${slug}`,
      images: [{ url: `${SITE_URL}${category.image}`, width: 1200, height: 630, alt: category.name }],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  return <CategoryClient params={params} />;
}
