"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
  Cog,
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

export default function FreinagePage() {
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
      desc: "Élément indissociable d'un pneu en bonne santé, vos freins comportent de nombreux éléments (plaquettes, disques...) qui, malgré leur petite taille, définissent votre conduite.",
      icon: Zap
    },
    {
      title: "Conseils",
      desc: "POLE POSITION, ce n'est pas qu'une entreprise de vente et de services. C'est avant tout des experts qui vous conseillent sur l'entretien de vos pneus et l'anticipation des risques.",
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
            <ShieldCheck className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm text-glow">Sécurité Maximale</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            LES FREINS, GAGES <br />
            <span className="text-gradient">DE VOTRE SÉCURITÉ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-xl leading-relaxed font-medium mb-12"
          >
            Usure du temps, des routes, d’une conduite fréquente ou simplement effet de l’âge sur vos plaquettes de freins : parfois, l’état de vos freins est trop avancé et c’est votre sécurité qui en pâtit.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
          <Cog className="w-[600px] h-[600px] animate-spin-slow text-white" />
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
                <Target className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                VOS FREINS AU <br />
                <span className="text-neon-blue text-2xl">MEILLEUR PRIX</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Les freins chez Jumbo, c’est une affaire d’expérience. Nous vous proposons les meilleurs prix discount sur les pneus et des prix pas cher sur une sélection de plaquettes et disques de frein.
                </p>
                <p>
                  Notre opération de remplacement de freins est certifiée. À POLE POSITION, on coupe sur les prix, mais sûrement pas sur la qualité de service !
                </p>
                <p>
                  Découvrez quel est le centre Jumbo proche de chez vous (POLE POSITION) et passez nous voir pour votre remplacement de freins.
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
                POURQUOI <br />
                <span className="text-neon-blue text-2xl">REMPLACER VOS FREINS ?</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  L’usure d’un disque ou d’une plaquette de frein n’est pas évidente à constater. Contrairement aux pneus, il n’existe pas de visibilité immédiate à la détérioration progressive.
                </p>
                <p>
                  Soyez averti par des bruits inhabituels ou une sensation de perte de freinage. Le freinage est l’élément déterminant de la conduite de votre véhicule.
                </p>
                <p>
                  Assurez votre sécurité par le contrôle total de votre freinage, dans le respect du code de la route et des distances de freinage recommandées.
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
              POLE POSITION VOUS GARANTIT <br />
              <span className="text-neon-blue text-2xl md:text-3xl">LE MEILLEUR PRIX</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-medium leading-relaxed">
              Ne compromettez pas votre sécurité. Venez faire vérifier vos freins gratuitement dans notre centre.
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
