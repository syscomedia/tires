import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "../data";
import ArticleClient from "./ArticleClient";

const SITE_URL = "https://poleposition-pneus93.fr";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const articleContent: Record<string, { title: string; description: string; body: string[] }> = {
  "quand-changer-pneus-voiture": {
    title: "Quand faut-il changer ses pneus ? Les 5 signes à ne pas ignorer",
    description: "Comment savoir si vos pneus sont usés ? Profondeur des rainures, craquelures, vibrations… Les 5 signes qui indiquent qu'il faut changer ses pneus immédiatement.",
    body: [
      "La sécurité sur la route dépend en grande partie de l'état de vos pneus. Un pneu usé augmente la distance de freinage, réduit l'adhérence sur route mouillée et peut provoquer une crevaison soudaine. Mais comment savoir quand il est vraiment temps de les changer ?",
      "**1. La profondeur des rainures est insuffisante.** La loi française impose une profondeur minimale de rainures de 1,6 mm. En pratique, les professionnels recommandent de changer ses pneus dès 3 mm pour conserver des performances optimales sur mouillé. Vous pouvez vérifier cela avec une pièce de 2€ : si le bord doré est entièrement visible, vos pneus sont à la limite légale.",
      "**2. Des craquelures ou boursouflures sur les flancs.** Le caoutchouc vieillit avec le temps, même si vous roulez peu. Des fissures sur les flancs indiquent un vieillissement du pneu qui peut mener à une éclatement. Un pneu de plus de 5 ans doit être inspecté par un professionnel.",
      "**3. Des vibrations anormales au volant.** Si votre volant vibre lors de la conduite, cela peut signaler un problème d'équilibrage ou de déformation de pneu. Un équilibrage ou un remplacement s'impose.",
      "**4. Votre voiture tire d'un côté.** Si votre véhicule dévie naturellement sur un côté, c'est souvent le signe d'une usure irrégulière des pneus ou d'un problème de géométrie (parallélisme). Faites contrôler votre voiture rapidement.",
      "**5. Vous entendez un bruit sourd en roulant.** Un bruit de roulement régulier peut indiquer qu'un pneu est endommagé ou déformé. Ne tardez pas : un pneu qui lâche à vitesse élevée peut être fatal.",
      "**Notre conseil :** Chez Pole Position — Pneus Services 93, nous proposons un contrôle de vos pneus gratuit. Venez nous voir au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine, 7j/7 de 9h à 19h. Pas besoin de rendez-vous.",
    ],
  },
  "pneus-ete-hiver-toutes-saisons-differences": {
    title: "Pneus été, hiver ou toutes saisons : lequel choisir ?",
    description: "Différences entre pneus été, hiver et toutes saisons. Quel type de pneu choisir selon votre usage, votre région et votre budget ? Guide complet par nos experts.",
    body: [
      "Le choix entre pneus été, hiver et toutes saisons est une question que se posent beaucoup d'automobilistes français. Voici un comparatif complet pour vous aider à choisir.",
      "**Les pneus été** sont optimisés pour les températures supérieures à 7°C. Leur gomme est plus rigide, ce qui leur permet de tenir précisément sur route sèche et mouillée. Ils offrent les meilleures performances en tenue de route, freinage et consommation de carburant. C'est le choix idéal si vous vivez dans une région sans hivers rigoureux, comme en Île-de-France.",
      "**Les pneus hiver** (marquage 3PMSF) sont conçus pour les températures inférieures à 7°C. Leur gomme reste souple par le froid, ce qui garantit une adhérence optimale sur neige, verglas et routes froides. Ils sont obligatoires dans certaines régions de montagne en France (loi Montagne) entre le 1er novembre et le 31 mars.",
      "**Les pneus toutes saisons** combinent des caractéristiques des deux types. Ils portent le marquage 3PMSF et sont légalement acceptés en zone montagne. Leur point fort : vous n'avez pas besoin de faire deux changements par an. Leur point faible : ils ne sont aussi performants ni qu'un été en été, ni qu'un hiver en hiver.",
      "**Notre recommandation pour la région parisienne :** Si vous ne quittez pas l'Île-de-France, les pneus toutes saisons (comme le Michelin CrossClimate 2) sont un excellent compromis. Si vous partez régulièrement en montagne, investissez dans deux trains : été + hiver.",
      "Chez Pole Position — Pneus Services 93, nous stockons les trois types pour toutes les marques. Venez nous voir ou appelez-nous pour un conseil personnalisé selon votre véhicule.",
    ],
  },
  "meilleurs-pneus-michelin-continental-bridgestone": {
    title: "Michelin, Continental ou Bridgestone : quelle est la meilleure marque ?",
    description: "Comparatif Michelin vs Continental vs Bridgestone : qualité, longévité, prix, performances sur mouillé. Quelle marque de pneus choisir ? Avis de nos experts.",
    body: [
      "Michelin, Continental et Bridgestone sont les trois marques de pneus les plus vendues en France. Mais laquelle est la meilleure ? Voici notre comparatif objectif.",
      "**Michelin** est la référence absolue en matière de longévité et de performance sur mouillé. Le Michelin Primacy 4+ et le CrossClimate 2 sont régulièrement classés N°1 dans les tests indépendants (Auto Bild, ADAC, Auto Plus). Le principal inconvénient : un prix légèrement plus élevé, justifié par une durée de vie supérieure de 20 à 30%.",
      "**Continental** est le champion de la sécurité, particulièrement reconnu pour ses performances sur route mouillée et ses distances de freinage courtes. L'EcoContact 6 est l'un des pneus les plus efficaces en termes de consommation de carburant. Continental est souvent monté en première monte sur des véhicules comme la BMW ou la Mercedes.",
      "**Bridgestone** excelle dans les pneus hiver (le Blizzak LM005 est régulièrement N°1 des tests hiver) et les pneus hautes performances. Les pneus sport Bridgestone (Potenza) sont réputés pour leur tenue de route exceptionnelle. Légèrement moins silencieux que Michelin sur autoroute.",
      "**Conclusion :** Il n'y a pas de mauvais choix entre ces trois marques. Pour la longévité et le polyvalence, choisissez Michelin. Pour la sécurité sur mouillé, optez pour Continental. Pour les pneus hiver et sport, Bridgestone est imbattable.",
      "Chez Pole Position — Pneus Services 93, nous avons ces trois marques en stock. Venez au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine pour trouver le meilleur pneu au meilleur prix.",
    ],
  },
  "freinage-quand-changer-plaquettes-disques": {
    title: "Freinage : comment savoir si vos plaquettes ou disques sont à changer ?",
    description: "Bruit de freinage, pédale dure, voyant allumé… Les signes qui indiquent que vos plaquettes de frein ou disques doivent être remplacés. Conseils d'experts.",
    body: [
      "Le système de freinage est l'élément de sécurité le plus important de votre véhicule. Savoir reconnaître les signes d'usure peut vous éviter un accident.",
      "**Le bruit au freinage.** Un grissement ou un couinement lors du freinage est souvent le premier signe que vos plaquettes arrivent en fin de vie. Les plaquettes intègrent un témoin sonore qui produit ce bruit volontairement. Si vous entendez un bruit métallique crissant, c'est urgent : le métal frotte directement sur le disque.",
      "**La distance d'arrêt augmente.** Si vous remarquez qu'il vous faut appuyer plus fort ou plus longtemps sur la pédale pour arrêter votre véhicule, c'est un signe d'usure avancée ou d'un problème hydraulique.",
      "**Le voyant de frein s'allume.** Sur les véhicules récents, un capteur d'usure électronique allume un voyant sur le tableau de bord quand les plaquettes doivent être changées. Ne l'ignorez jamais.",
      "**Vibrations lors du freinage.** Si votre véhicule vibre ou que le volant tremble quand vous freinez, vos disques sont probablement voilés ou usés de manière inégale. Un remplacement des disques (et des plaquettes en même temps) s'impose.",
      "**Durée de vie indicative :** Plaquettes avant : 30 000 à 50 000 km. Plaquettes arrière : 50 000 à 80 000 km. Disques : 80 000 à 120 000 km. Ces chiffres varient selon le style de conduite et le type de véhicule.",
      "Chez Pole Position — Pneus Services 93, nous diagnostiquons et remplaçons vos plaquettes et disques sans rendez-vous. Venez au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine, 7j/7 de 9h à 19h.",
    ],
  },
  "pneus-4x4-suv-choisir": {
    title: "Pneus 4x4 et SUV : comment choisir les meilleurs ?",
    description: "Guide d'achat pneus SUV et 4x4. Routier, tout-terrain ou mixte ? Quelles marques choisir ? Comment lire les dimensions d'un pneu SUV ? Conseils d'experts.",
    body: [
      "Avec l'explosion des ventes de SUV et crossovers en France, le marché des pneus pour ces véhicules s'est considérablement développé. Mais comment choisir le bon pneu pour votre SUV ou 4x4 ?",
      "**Comprendre les types de pneus 4x4.** Il existe trois grandes catégories : les pneus routiers (Highway Terrain / HT), les pneus tout-terrain (All-Terrain / AT) et les pneus extrêmes (Mud-Terrain / MT). Si vous roulez 90% du temps sur route, les pneus routiers ou HT sont votre meilleur choix. Si vous faites régulièrement de la piste ou du hors-route, optez pour un AT.",
      "**Les meilleures marques pour SUV.** Pour les pneus routiers : Michelin Pilot Sport 4 SUV, Continental SportContact 7, Bridgestone Turanza. Pour les tout-terrain : BFGoodrich All-Terrain T/A KO2 (la référence mondiale), Falken Wildpeak AT3W, Toyo Open Country AT3.",
      "**Lire les dimensions d'un pneu SUV.** Sur un pneu 235/60 R18 : 235 = largeur en mm, 60 = hauteur de flanc (60% de 235 mm), R = radial, 18 = diamètre de jante en pouces. Plus le premier chiffre est grand, plus le pneu est large.",
      "**Attention au poids.** Les SUV et 4x4 sont des véhicules lourds. Assurez-vous que l'indice de charge de vos pneus est adapté à votre véhicule. Un pneu sous-dimensionné peut se déformer ou éclater.",
      "Chez Pole Position — Pneus Services 93, nous avons le plus grand stock de pneus 4x4 et SUV en Seine-Saint-Denis. Venez nous voir à Épinay-sur-Seine pour un montage express.",
    ],
  },
  "vidange-huile-quand-comment": {
    title: "Vidange huile moteur : quand la faire et pourquoi c'est essentiel ?",
    description: "Fréquence de vidange huile moteur selon le kilométrage et l'usage. Quel type d'huile choisir ? Pourquoi ne pas négliger sa vidange ? Guide complet.",
    body: [
      "La vidange est l'opération d'entretien automobile la plus importante et la plus souvent négligée. Pourtant, une huile moteur dégradée peut provoquer une usure prématurée du moteur et des réparations coûteuses.",
      "**Quand faire la vidange ?** En règle générale, tous les 10 000 à 15 000 km pour les moteurs essence récents, tous les 15 000 à 20 000 km pour les diesel récents avec huile longue durée. Pour les véhicules plus anciens ou à usage intensif (taxi, VTC, livraison), une vidange tous les 7 000 à 10 000 km est recommandée.",
      "**Quel type d'huile choisir ?** Il existe trois grandes familles : huile minérale (pour véhicules anciens), huile semi-synthétique (bon compromis) et huile synthétique (pour les véhicules récents). Consultez le manuel de votre véhicule ou demandez conseil à notre équipe.",
      "**Les signes que votre huile est à changer.** Huile foncée ou noire sur la jauge (l'huile neuve est ambrée). Voyant de pression d'huile allumé. Bruit moteur plus prononcé. Consommation d'huile anormalement élevée.",
      "**Ce qu'on fait lors d'une vidange chez Pole Position.** Vidange complète de l'ancienne huile, remplacement du filtre à huile, appoint avec l'huile adaptée à votre véhicule, contrôle de tous les niveaux (liquide de frein, liquide de refroidissement, lave-glace), inspection visuelle des pneus offerte.",
      "Chez Pole Position — Pneus Services 93, une vidange prend moins de 30 minutes. Pas de rendez-vous, 7j/7 de 9h à 19h. 2 Rue Claude Debussy, 93800 Épinay-sur-Seine.",
    ],
  },
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = articleContent[slug];
  const article = articles.find((a) => a.slug === slug);
  if (!content || !article) return {};

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.description,
    image: `${SITE_URL}${article.image}`,
    author: {
      "@type": "Organization",
      name: "Pole Position — Pneus Services 93",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Pole Position — Pneus Services 93",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icoa.png` },
    },
    datePublished: "2026-04-01",
    dateModified: new Date().toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    keywords: article.keywords.join(", "),
  };

  return {
    title: `${content.title} | Pole Position Pneus 93`,
    description: content.description,
    keywords: article.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      images: [{ url: `${SITE_URL}${article.image}`, width: 1200, height: 630 }],
    },
    other: {
      "script:application/ld+json": JSON.stringify(articleSchema),
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const content = articleContent[slug];
  const article = articles.find((a) => a.slug === slug);
  if (!content || !article) notFound();
  return <ArticleClient slug={slug} content={content} article={article} />;
}
