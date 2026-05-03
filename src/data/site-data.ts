export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Pneus Été",
    slug: "pneus-ete",
    description: "Performances optimales sur route sèche et mouillée. Adhérence et précision pour votre conduite estivale.",
    image: "/images/categories/summer.jpg"
  },
  {
    id: "2",
    name: "Pneus Hiver",
    slug: "pneus-hiver",
    description: "Grip maximal sur neige, verglas et routes froides. Sécurité garantie même en conditions extrêmes.",
    image: "/images/categories/winter.jpg"
  },
  {
    id: "3",
    name: "Toutes Saisons",
    slug: "toutes-saisons",
    description: "La solution polyvalente : un seul pneu pour toute l'année, homologué 3PMSF pour l'hiver.",
    image: "/images/categories/allseason.jpg"
  },
  {
    id: "4",
    name: "Pneus 4x4 & SUV",
    slug: "pneus-4x4-suv",
    description: "Pneus renforcés pour SUV, crossover et 4x4. Route, chemin ou tout-terrain — ils font tout.",
    image: "/images/categories/suv.jpg"
  },
  {
    id: "5",
    name: "Pneus Utilitaires",
    slug: "pneus-utilitaires",
    description: "Charge renforcée pour vans, camionnettes et fourgons. Endurance et fiabilité au quotidien.",
    image: "/images/categories/van.jpg"
  },
  {
    id: "6",
    name: "Freinage & Entretien",
    slug: "freinage-entretien",
    description: "Disques, plaquettes, vidange et révision complète. Votre sécurité entre les mains d'experts.",
    image: "/images/categories/brakes.jpg"
  }
];

export const products: Product[] = [
  // Pneus Été
  {
    id: "p1",
    name: "Michelin Primacy 4+ — 205/55 R16",
    category: "pneus-ete",
    price: 119,
    brand: "Michelin",
    description: "Le pneu été de référence pour berlines et compactes. Longévité record et freinage court sur mouillé.",
    image: "/images/categories/summer.jpg",
    features: ["Indice vitesse H (210 km/h)", "Freinage court sur mouillé", "Longévité +25%", "Montage & équilibrage inclus"]
  },
  {
    id: "p2",
    name: "Continental EcoContact 6 — 195/65 R15",
    category: "pneus-ete",
    price: 89,
    brand: "Continental",
    description: "Pneu été économique et performant. Faible consommation de carburant, silencieux et durable.",
    image: "/images/categories/summer.jpg",
    features: ["Label EU: A/B", "Basse résistance au roulement", "Silencieux", "Montage inclus"]
  },
  // Pneus Hiver
  {
    id: "p3",
    name: "Michelin Alpin 6 — 205/55 R16",
    category: "pneus-hiver",
    price: 129,
    brand: "Michelin",
    description: "Excellence sur neige et verglas. Grip exceptionnel par temps froid, freinage réduit de 5 m.",
    image: "/images/categories/winter.jpg",
    features: ["Homologué 3PMSF", "Grip neige & verglas", "Freinage -5m vs concurrence", "Montage inclus"]
  },
  {
    id: "p4",
    name: "Bridgestone Blizzak LM005 — 195/65 R15",
    category: "pneus-hiver",
    price: 109,
    brand: "Bridgestone",
    description: "Pneu hiver hautes performances, idéal pour les régions enneigées et les hivers rigoureux.",
    image: "/images/categories/winter.jpg",
    features: ["Homologué 3PMSF", "Sculpture lamellisée", "Évacuation eau & neige", "Montage inclus"]
  },
  // Toutes Saisons
  {
    id: "p5",
    name: "Michelin CrossClimate 2 — 205/55 R16",
    category: "toutes-saisons",
    price: 139,
    brand: "Michelin",
    description: "Le meilleur pneu toutes saisons du marché. Aussi efficace en été qu'en hiver sur neige.",
    image: "/images/categories/allseason.jpg",
    features: ["Homologué 3PMSF", "Valable été & hiver", "Label EU: A/B", "Montage inclus"]
  },
  {
    id: "p6",
    name: "Goodyear Vector 4Seasons Gen-3 — 195/65 R15",
    category: "toutes-saisons",
    price: 99,
    brand: "Goodyear",
    description: "Pneu toutes saisons polyvalent et économique. Idéal pour conduire toute l'année sans changer de pneus.",
    image: "/images/categories/allseason.jpg",
    features: ["Homologué 3PMSF", "Grip mixte performant", "Économique", "Montage inclus"]
  },
  // 4x4 & SUV
  {
    id: "p7",
    name: "Michelin Pilot Sport 4 SUV — 235/60 R18",
    category: "pneus-4x4-suv",
    price: 189,
    brand: "Michelin",
    description: "Pneu SUV haute performance. Sportivité, grip et confort pour vos grandes berlines et crossovers.",
    image: "/images/categories/suv.jpg",
    features: ["Haute performance SUV", "Flancs renforcés", "Label EU: A/A", "Montage inclus"]
  },
  {
    id: "p8",
    name: "BFGoodrich All-Terrain T/A KO2 — 265/70 R17",
    category: "pneus-4x4-suv",
    price: 219,
    brand: "BFGoodrich",
    description: "Le pneu tout-terrain de référence. Indestructible sur piste comme sur route, résistance aux perforations.",
    image: "/images/categories/suv.jpg",
    features: ["Tout-terrain certifié", "Flancs Sidewall Armor", "Anti-perforation", "Montage inclus"]
  },
  // Utilitaires
  {
    id: "p9",
    name: "Michelin Agilis 3 — 195/75 R16C",
    category: "pneus-utilitaires",
    price: 149,
    brand: "Michelin",
    description: "Le pneu utilitaire premium. Longévité exceptionnelle pour fourgons et camionnettes professionnels.",
    image: "/images/categories/van.jpg",
    features: ["Charge renforcée C", "Longévité +30%", "Bande de roulement durable", "Montage inclus"]
  },
  {
    id: "p10",
    name: "Continental VanContact 200 — 215/65 R16C",
    category: "pneus-utilitaires",
    price: 129,
    brand: "Continental",
    description: "Pneu utilitaire robuste pour les professionnels. Sécurité et confort sur tous types de routes.",
    image: "/images/categories/van.jpg",
    features: ["Indice de charge renforcé", "Stabilité en charge", "Durée de vie élevée", "Montage inclus"]
  },
  // Freinage & Entretien
  {
    id: "p11",
    name: "Kit Freinage Brembo — Disques + Plaquettes",
    category: "freinage-entretien",
    price: 249,
    brand: "Brembo",
    description: "Kit freinage complet : disques ventilés et plaquettes semi-métalliques pour un freinage précis et endurant.",
    image: "/images/categories/brakes.jpg",
    features: ["Disques ventilés", "Plaquettes semi-métalliques", "Résistance à la chaleur", "Pose comprise"]
  },
  {
    id: "p12",
    name: "Forfait Vidange + Inspection Pneus",
    category: "freinage-entretien",
    price: 79,
    brand: "POLE POSITION",
    description: "Vidange huile moteur + filtre à huile neuf + contrôle des niveaux + inspection complète des pneus offerte.",
    image: "/images/categories/brakes.jpg",
    features: ["Vidange huile moteur", "Filtre à huile neuf", "Contrôle des niveaux", "Inspection pneus offerte"]
  }
];

export const brands = [
  "Michelin", "Continental", "Bridgestone", "Goodyear",
  "Pirelli", "Dunlop", "BFGoodrich", "Hankook",
  "Nokian", "Yokohama", "Falken", "Toyo"
];

export const services = [
  {
    title: "Montage & Équilibrage",
    description: "Montage express de vos pneus neufs ou d'occasion avec équilibrage précis. Sans rendez-vous, en 30 minutes.",
    detail: "Tout type de véhicule — voiture, SUV, utilitaire"
  },
  {
    title: "Géométrie (Parallélisme)",
    description: "Réglage de la géométrie de vos roues pour prolonger la durée de vie de vos pneus et améliorer la tenue de route.",
    detail: "Contrôle 4 roues, rapport complet fourni"
  },
  {
    title: "Freinage Complet",
    description: "Diagnostic, remplacement de disques, plaquettes et étriers. Uniquement des pièces de qualité OEM.",
    detail: "Toutes marques — réponse immédiate"
  },
  {
    title: "Entretien Rapide",
    description: "Vidange huile, remplacement de filtres, contrôle des niveaux. Intervention en moins d'une heure.",
    detail: "Sans rendez-vous — 7j/7 de 9h à 19h"
  },
  {
    title: "Vente de Pneus Occasion",
    description: "Large stock de pneus d'occasion contrôlés et garantis. Les mêmes performances à prix réduit.",
    detail: "Stock mis à jour en permanence"
  },
  {
    title: "Crevaison & Urgence",
    description: "Prise en charge immédiate en cas de crevaison. Réparation ou remplacement dans la journée.",
    detail: "Priorité accordée aux urgences"
  },
  {
    title: "Service à Domicile",
    description: "Nous nous déplaçons partout pour réparer vos pneus ou effectuer l'entretien de votre véhicule à domicile.",
    detail: "Déplacement rapide — Partout où vous êtes"
  }
];
