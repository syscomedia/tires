"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Sparkles, Zap } from "lucide-react";




export default function AboutPage() {
  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 text-neon-blue mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm">POLE POSITION — Qui sommes-nous ?</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white"
          >
            À PROPOS DE <br /><span className="text-gradient">POLE POSITION</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-3xl mx-auto text-xl leading-relaxed font-medium"
          >
            Plus qu'un simple centre de pneus, nous sommes une équipe de passionnés dédiée à votre sécurité et à la performance de votre véhicule, 7 jours sur 7.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl glass-blue border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/5 font-display font-black decor-text italic select-none">93</span>
            </div>
            <img
              src="/images/categories/about.jpg"
              alt="About POLE POSITION"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-blue font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Notre Histoire</span>
            <h2 className="text-5xl font-display font-black text-white mb-8 uppercase italic leading-none tracking-tighter">EXPERTISE & <span className="text-gradient">PASSION.</span></h2>
            <p className="text-white/50 mb-8 text-lg leading-relaxed font-medium">
              Basée au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine, <strong>POLE POSITION</strong> est née de la volonté de proposer un service de pneumatiques premium, accessible et disponible 7j/7 pour tous les automobilistes de Seine-Saint-Denis.
            </p>
            <p className="text-white/50 mb-12 text-lg leading-relaxed font-medium">
              Spécialisés dans le montage de pneus, le freinage et l'entretien automobile, nous mettons un point d'honneur à garantir la qualité de nos interventions. Notre équipe technique certifiée assure un suivi rapide et efficace de chaque véhicule qui entre dans notre centre.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div>
                <p className="text-5xl font-display font-black text-white mb-2 italic">7j/7</p>
                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">Ouvert Sans Exception</p>
              </div>
              <div>
                <p className="text-5xl font-display font-black text-white mb-2 italic">100%</p>
                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">Expertise Technique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative bg-carbon-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase italic leading-none tracking-tighter">NOS <span className="text-gradient">VALEURS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "Qualité Garantie",
                desc: "Tous nos pneus et pièces d'occasion sont rigoureusement contrôlés avant montage."
              },
              {
                icon: Award,
                title: "Service Premium",
                desc: "Un accueil et un suivi personnalisés pour chaque client, sans rendez-vous."
              },
              {
                icon: Users,
                title: "Ancrage Local",
                desc: "Nous servons les automobilistes de Seine-Saint-Denis et d'Île-de-France avec fierté."
              },
              {
                icon: Zap,
                title: "Réactivité",
                desc: "Montage express pour vous remettre sur la route au plus vite — 7j/7 de 9h à 19h."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-neon-blue/30 transition-all duration-500"
              >
                <div className="bg-neon-blue/10 p-5 rounded-2xl w-fit mb-8 text-neon-blue shadow-lg shadow-neon-blue/5">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase italic leading-tight">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
