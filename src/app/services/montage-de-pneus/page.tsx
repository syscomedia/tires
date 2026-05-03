"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
  Disc,
  ShieldCheck,
  Wrench,
  Activity,
  Zap,
  Sparkles,
  ArrowLeft,
  Info,
  CircleCheckBig,
  Grip
} from "lucide-react";
import Link from "next/link";

export default function MontageDePneusPage() {
  const sections = [
    {
      title: "Parallélisme",
      desc: "Souvent méconnu du grand public, le parallélisme de vos roues est pourtant un élément fondamental de votre tenue de route. Sa vérification doit être régulièrement effectuée par les conducteurs de tous types de véhicules.",
      icon: Activity
    },
    {
      title: "Équilibrage",
      desc: "Après toute installation ou réparation de pneu, le garagiste doit s'assurer que les pneus aient une répartition correcte du poids de l'automobile toute entière, sous peine d'en forcer l'usure. Cette opération est réalisée par POLE POSITION.",
      icon: Grip
    },
    {
      title: "Réparation",
      desc: "Un pneu ne se consulte pas uniquement en cas de grosses pannes ! Contactez POLE POSITION pour les cas de fuite légère d'air au sein de vos pneus, de chocs ou de déformations légères. Nos techniciens sauront vous aider !",
      icon: Wrench
    },
    {
      title: "Freins",
      desc: "Élément indissociable d'un pneu en bonne santé, vos freins comportent de nombreux éléments (plaquettes, disques...) qui, malgré leur petite taille, définissent votre conduite et peuvent, s'ils sont outrepassés, mener à des pertes de contrôle de votre véhicule.",
      icon: Zap
    },
    {
      title: "Conseils",
      desc: "POLE POSITION, ce n'est pas qu'une entreprise de vente et de services. C'est avant tout des experts et des professionnels passionnés et impliqués qui vous conseillent sur l'entretien de vos pneus et l'anticipation des risques.",
      icon: Info
    }
  ];

  return (
    <main className="relative flex-1 bg-mesh min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-neon-blue transition-colors font-medium uppercase tracking-widest text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux services</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 text-neon-blue mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm text-glow">Expertise Pneumatique</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            VOTRE SERVICE DE <br />
            <span className="text-gradient">MONTAGE DE PNEUS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-xl leading-relaxed font-medium mb-12"
          >
            Quelques précautions pour le montage des pneus. Pour effectuer le montage d’un pneu, il existe plusieurs consignes à suivre, pour s’assurer de la sécurité du véhicule.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
          <Disc className="w-[600px] h-[600px] animate-spin-slow text-white" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                UN MONTAGE DE PNEUS <br />
                <span className="text-neon-blue text-2xl">EXPERT ET EFFICACE</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Avant toute chose, les conducteurs de tous types de véhicules doivent d’abord vérifier que les pneus à monter sont bien conformes aux recommandations du constructeur, tant au niveau de la taille des pneus que des différents indices comme la capacité de charge ou la vitesse.
                </p>
                <p>
                  Certains professionnels comme POLE POSITION effectuent par ailleurs des opérations de montage de pneus pas cher, ou même gratuit notamment lors d’un achat de pneus dans leur magasin de pneus.
                </p>
                <p>
                  Généralement, lorsque vous effectuez cette opération dans un centre de montage de pneus, les techniciens en profitent pour déceler les différentes anomalies des trains roulants de votre voiture en se basant sur l’état des pneus, sur les flancs intérieurs et extérieurs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <CircleCheckBig className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                UNE PROCÉDURE <br />
                <span className="text-neon-blue text-2xl">STRICTE ET PROFESSIONNELLE</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Il faut savoir que le montage des pneus sur les jantes est une opération qui doit être réalisée chez un professionnel, qui possède le matériel nécessaire pour cela.
                </p>
                <p>
                  Il y a en effet une procédure stricte à suivre, notamment le dégonflage et le démontage du pneu à remplacer, l’équilibrage de la roue et le suivi du sens de montage, le gonflage, le remplacement de la valve et les vérifications par rapport aux éventuelles fuites…
                </p>
                <p>
                  Le prix du montage de pneus varie selon les centres d’entretien pneumatiques. Dans tous les cas cependant, il faut prioriser la qualité de service comme c’est le cas chez POLE POSITION.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Icon Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-neon-blue/30 transition-all duration-500 group"
              >
                <div className="bg-neon-blue/10 p-4 rounded-2xl w-fit mb-8 text-neon-blue group-hover:bg-neon-blue group-hover:text-white transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase italic">
                  {item.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-[3rem] border-white/10"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-8 uppercase italic leading-tight">
              LA SÉCURITÉ DE VOS PNEUS <br />
              <span className="text-neon-blue text-2xl md:text-3xl">FAIT LA SÉCURITÉ DE VOTRE VÉHICULE</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-medium leading-relaxed">
              POLE POSITION vous assure un montage de pneus de qualité et certifié pour votre sécurité.
              Ne vous laissez plus surprendre et suivez nos bons plans !
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="tel:0953439999"
                className="bg-neon-blue text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-white hover:text-neon-blue transition-all shadow-xl shadow-neon-blue/20"
              >
                Prendre RDV
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
