import type { Metadata } from "next";
import AvisClient from "./AvisClient";

const SITE_URL = "https://poleposition-pneus93.fr";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Faut-il prendre rendez-vous pour faire monter des pneus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, chez Pole Position — Pneus Services 93, vous pouvez venir directement sans rendez-vous. Nous sommes ouverts 7j/7 de 9h à 19h au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de pneus vendez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons des pneus été, pneus hiver, pneus toutes saisons, pneus 4x4 & SUV et pneus utilitaires. Toutes les grandes marques sont disponibles : Michelin, Continental, Bridgestone, Goodyear, Pirelli, Dunlop, BFGoodrich, Hankook, Yokohama et Falken. Neufs et d'occasion.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte le montage d'un pneu ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le montage et l'équilibrage sont inclus dans le prix de nos pneus. Pas de frais cachés. Contactez-nous au 09 53 43 99 99 pour un devis personnalisé selon votre véhicule.",
      },
    },
    {
      "@type": "Question",
      name: "Faites-vous le freinage (disques et plaquettes) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous remplaçons disques et plaquettes de frein pour tous types de véhicules. Nous utilisons des pièces de qualité OEM (Brembo, TRW). Intervention express sans rendez-vous.",
      },
    },
    {
      "@type": "Question",
      name: "Où êtes-vous situés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous sommes au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine, accessible depuis Saint-Denis, Stains, Argenteuil et toute la Seine-Saint-Denis. Parking disponible.",
      },
    },
    {
      "@type": "Question",
      name: "Êtes-vous ouverts le dimanche ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui ! Pole Position — Pneus Services 93 est ouvert 7 jours sur 7, y compris le dimanche, de 9h à 19h.",
      },
    },
    {
      "@type": "Question",
      name: "Faites-vous des vidanges ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous réalisons des vidanges huile moteur avec remplacement de filtre et contrôle des niveaux. Intervention express, sans rendez-vous, 7j/7.",
      },
    },
  ],
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pole Position — Pneus Services 93",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Mohamed K." },
      datePublished: "2026-04-10",
      reviewBody:
        "Service rapide et professionnel. J'ai fait monter 4 pneus Michelin en moins de 30 minutes. Prix très correct pour le secteur. Je recommande vivement !",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sarah B." },
      datePublished: "2026-03-22",
      reviewBody:
        "Ouvert le dimanche, c'est ce qui m'a décidée. Pneus hiver montés en un rien de temps. Personnel très aimable et compétent. Reviendrai sans hésiter.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Karim D." },
      datePublished: "2026-03-05",
      reviewBody:
        "Plaquettes de frein changées rapidement et à bon prix. Ils m'ont aussi fait un contrôle des pneus gratuit. Très sérieux.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Fatima Z." },
      datePublished: "2026-02-18",
      reviewBody:
        "Pneus toutes saisons posés rapidement. On m'a bien expliqué les différences entre les marques. Prix honnêtes. Merci à toute l'équipe !",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Julien M." },
      datePublished: "2026-01-30",
      reviewBody:
        "Crevaison réparée en urgence un samedi soir. Ils étaient encore ouverts et m'ont sorti d'affaire. Service impeccable. 5 étoiles mérités.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
      author: { "@type": "Person", name: "Nadia T." },
      datePublished: "2026-01-12",
      reviewBody:
        "Bon service, pneus 4x4 montés proprement. Légère attente un samedi matin mais c'est compréhensible. Je reviendrai.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Avis Clients | Pole Position Pneus Épinay-sur-Seine 93 — Note 4.9/5",
  description:
    "Lisez les avis de nos clients sur Pole Position — Pneus Services 93 à Épinay-sur-Seine. Note moyenne 4.9/5 sur 127 avis. FAQ : montage pneus, freinage, horaires, tarifs.",
  keywords: [
    "avis pneus Épinay-sur-Seine",
    "avis Pole Position pneus 93",
    "meilleur centre pneus Épinay",
    "avis garagiste pneus 93800",
    "centre pneus noté Épinay",
  ],
  alternates: { canonical: `${SITE_URL}/avis` },
  openGraph: {
    title: "Avis Clients — Pole Position Pneus Épinay-sur-Seine 93 | Note 4.9/5",
    description: "127 avis clients. Note 4.9/5. Montage pneus, freinage, entretien auto 7j/7.",
    url: `${SITE_URL}/avis`,
    images: [{ url: `${SITE_URL}/images/categories/TIRES.png`, width: 1200, height: 630 }],
  },
};

export default function AvisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <AvisClient />
    </>
  );
}
