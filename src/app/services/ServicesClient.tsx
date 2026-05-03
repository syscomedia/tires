"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { PenTool as Tool, ShieldCheck, Zap, Cog, Wind, Disc, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Montage de Pneus",
      desc: "Large stock de pneus neufs et d'occasion pour tous types de véhicules (voitures, SUV, utilitaires). Montage et équilibrage express sans rendez-vous.",
      icon: Disc,
      href: "/services/montage-de-pneus"
    },
    {
      title: "Équilibrage & Géométrie",
      desc: "Équilibrage précis des roues et contrôle de la géométrie pour prolonger la durée de vie de vos pneus et améliorer la tenue de route.",
      icon: Wind,
      href: "/services/equilibrage-et-geometrie"
    },
    {
      title: "Freinage Complet",
      desc: "Remplacement de disques, plaquettes et étriers. Nous utilisons uniquement des pièces de haute qualité pour votre sécurité maximale.",
      icon: Cog,
      href: "/services/freinage-complet"
    },
    {
      title: "Entretien Rapide",
      desc: "Vidange huile, remplacement de filtres, contrôle des niveaux. Intervention express pour vous remettre sur la route au plus vite.",
      icon: Tool,
      href: "/services/entretien-rapide"
    },
    {
      title: "Contrôle Sécurité",
      desc: "Diagnostic complet de votre véhicule pour une sécurité maximale. Plus de 50 points de contrôle vérifiés par nos techniciens certifiés.",
      icon: ShieldCheck,
      href: "/services/controle-securite"
    }
  ];

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 text-neon-blue mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm">Spécialiste Pneus & Entretien 93</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white"
          >
            NOS <span className="text-gradient">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-3xl mx-auto text-xl leading-relaxed font-medium"
          >
            Un centre pneus haute performance, ouvert 7j/7 de 9h à 19h, pour garder votre véhicule au sommet de sa forme.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href || "#"}
                className={s.href ? "cursor-pointer" : "cursor-default"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-10 glass border-white/5 rounded-[2.5rem] hover:border-neon-blue/30 transition-all duration-500 relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <s.icon className="w-32 h-32" />
                  </div>

                  <div className="bg-neon-blue/10 p-5 rounded-2xl w-fit mb-10 text-neon-blue group-hover:bg-neon-blue group-hover:text-white transition-all duration-500 shadow-lg shadow-neon-blue/5">
                    <s.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-display font-black text-white mb-6 uppercase italic leading-none group-hover:text-glow transition-all">
                    {s.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                    {s.desc}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-blue/10 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="glass-blue p-12 md:p-20 rounded-[3rem] border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-4 leading-none tracking-tighter text-white">
                BESOIN D'UN <br /><span className="text-neon-blue">MONTAGE PNEUS ?</span>
              </h2>
              <p className="text-white/60 text-lg font-medium">Venez directement ou appelez-nous — sans rendez-vous, 7j/7 de 9h à 19h.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0953439999"
                className="bg-white text-neon-blue px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest text-center shadow-xl hover:bg-neon-blue hover:text-white transition-all text-lg"
              >
                Appeler l'Atelier
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="glass text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest text-center hover:bg-white/10 transition-all text-lg border-white/5"
              >
                Nous Contacter
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

