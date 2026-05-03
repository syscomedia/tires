import type { Metadata } from "next";
import { products } from "@/data/site-data";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

const SITE_URL = "https://poleposition-pneus93.fr";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};

  const title = `${product.name} — Montage Pneus Épinay-sur-Seine 93 | Pole Position`;
  const description = `${product.description} Montage & équilibrage inclus. Disponible en stock chez Pole Position, 2 Rue Claude Debussy 93800 Épinay-sur-Seine. 7j/7 de 9h à 19h.`;

  // Product JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand ?? "Pole Position" },
    image: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "LocalBusiness", name: "Pole Position — Pneus Services 93" },
      itemCondition: "https://schema.org/NewCondition",
      url: `${SITE_URL}/products/${product.id}`,
      areaServed: "FR",
    },
  };

  return {
    title,
    description,
    keywords: [
      product.name,
      product.brand ?? "",
      "pneus Épinay-sur-Seine",
      "montage pneus 93",
      `${product.brand ?? ""} Épinay`,
    ].filter(Boolean),
    alternates: { canonical: `${SITE_URL}/products/${product.id}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/products/${product.id}`,
      images: [
        {
          url: product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    other: {
      "script:application/ld+json": JSON.stringify(productSchema),
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();
  return <ProductClient params={params} />;
}
