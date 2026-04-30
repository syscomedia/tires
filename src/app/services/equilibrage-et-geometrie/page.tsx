"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
  Wind,
  ShieldCheck,
  Wrench,
  Activity,
  Zap,
  Sparkles,
  ArrowLeft,
  Info,
  CircleCheckBig,
  Grip,
  Target
} from "lucide-react";
import Link from "next/link";

export default function EquilibragePage() {
  const sections = [
    {
      title: "Parallélisme",
      desc: "Aspect peu connu du grand public, le parallélisme de vos roues est pourtant un aspect fondamental de votre bonne tenue de route. Sa vérification doit être régulièrement faite par les conducteurs de tous types de véhicules.",
      icon: Activity
    },
    {
      title: "Réparation",
      desc: "Un pneu ne se consulte pas uniquement en cas de grosses pannes ! Contactez POLE POSITION pour les cas de fuite légère d'air au sein de vos pneus, de chocs ou de déformations légères. Nos techniciens sauront vous aider !",
      icon: Wrench
    },
    {
      title: "Freins",
      desc: "Élément indissociable d'un pneu en bonne santé, vos freins comportent de nombreux éléments (plaquettes, disques...) qui, malgré leur petite taille, définissent votre conduite et peuvent mener à des pertes de contrôle.",
      icon: Zap
    },
    {
      title: "Conseils",
      desc: "POLE POSITION vous conseille sur l'entretien de vos pneus et l'anticipation des risques et des dangers qu'ils peuvent encourir. Ne vous laissez plus surprendre et suivez nos bons plans !",
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
            <Target className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm text-glow">Précision & Confort</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            ÉQUILIBRAGE DE VOS <br />
            <span className="text-gradient">PNEUS ET VÉHICULE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-xl leading-relaxed font-medium mb-12"
          >
            ZOOM SUR L’ÉQUILIBRAGE DE VOS PNEUS. Après une crevaison ou l’achat de nouveaux pneus, leur installation nécessite l’expertise de professionnels comme POLE POSITION.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
          <Wind className="w-[600px] h-[600px] animate-pulse text-white" />
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
                <Grip className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                QU’EST-CE QUE <br />
                <span className="text-neon-blue text-2xl">L’ÉQUILIBRAGE DES PNEUS ?</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  L’équilibrage des pneus consiste, après une opération d’installation ou de remplacement, à balancer avec précision l’équilibre des nouveaux équipements.
                </p>
                <p>
                  Cela permet de réduire au maximum les imprécisions de conduite ainsi que les sensations de vibration durant la conduite, garantissant un confort optimal.
                </p>
                <p>
                  Sans un équilibrage effectué par un expert, toute l’utilité d’acheter et d’installer vos nouveaux pneus est perdue. C’est un souci d’optimisation indispensable.
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
                L’ÉLÉMENT INDISPENSABLE <br />
                <span className="text-neon-blue text-2xl">À VOTRE CONFORT</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Pour éviter toute sensation de vibration, surtout dans les périodes de l’année les plus exigeantes, procédez à un équilibrage chez POLE POSITION.
                </p>
                <p>
                  L’équilibrage de vos pneus peut être réalisé par notre garage sans rendez-vous ou en complément d’achat de pneus. Profitez de nos prix discount !
                </p>
                <p>
                  Rendez-vous chez POLE POSITION et faites vérifier le parallélisme de votre auto pour une longévité maximale de vos équipements.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Icon Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              OPTIMISEZ VOTRE <br />
              <span className="text-neon-blue text-2xl md:text-3xl">TENUE DE ROUTE</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-medium leading-relaxed">
              Nos experts assurent un équilibrage haute précision pour votre confort et votre sécurité.
              Venez sans rendez-vous dans notre centre POLE POSITION.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="tel:0953439999"
                className="bg-neon-blue text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-white hover:text-neon-blue transition-all shadow-xl shadow-neon-blue/20"
              >
                Appeler l'Atelier
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
