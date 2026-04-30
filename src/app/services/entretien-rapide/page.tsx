"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
  PenTool as Tool,
  ShieldCheck,
  Wrench,
  Zap,
  Sparkles,
  ArrowLeft,
  CircleCheckBig
} from "lucide-react";
import Link from "next/link";

export default function EntretienPage() {
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
            <Zap className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm text-glow">Intervention Express</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            ENTRETIEN <br />
            <span className="text-gradient">RAPIDE 7J/7</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-xl leading-relaxed font-medium mb-12"
          >
            Vidange, filtres, contrôle des niveaux. Intervention express sans rendez-vous pour vous remettre sur la route au plus vite.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
          <Tool className="w-[600px] h-[600px] animate-pulse text-white" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Wrench className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                L'ESSENTIEL <br />
                <span className="text-neon-blue text-2xl">DE VOTRE MOTEUR</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Un entretien régulier est la clé de la longévité de votre véhicule. Notre service d'entretien rapide couvre les points vitaux de votre mécanique.
                </p>
                <p>
                  Nous utilisons des produits de marques reconnues pour garantir une protection maximale de votre moteur contre l'usure et la corrosion.
                </p>
                <p>
                  Pas besoin d'attendre des semaines pour un rendez-vous. Présentez-vous directement dans notre atelier pour une prise en charge immédiate.
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
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                DIAGNOSTIC <br />
                <span className="text-neon-blue text-2xl">SYSTÉMATIQUE</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Lors de chaque entretien, nos techniciens effectuent un contrôle visuel de sécurité pour détecter d'éventuelles anomalies avant qu'elles ne deviennent critiques.
                </p>
                <p>
                  Votre sécurité est notre priorité. Nous vérifions l'état des pneus, du système de freinage et de l'éclairage gratuitement lors de votre vidange.
                </p>
                <p>
                  Repartez l'esprit tranquille avec un véhicule contrôlé par des professionnels passionnés et impliqués.
                </p>
              </div>
            </motion.div>
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
              OUVERT 7J/7 <br />
              <span className="text-neon-blue text-2xl md:text-3xl">DE 9H À 19H</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-medium leading-relaxed">
              Venez quand vous voulez. Notre équipe est prête à prendre soin de votre véhicule sans rendez-vous.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="tel:0953439999"
                className="bg-neon-blue text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-white hover:text-neon-blue transition-all shadow-xl shadow-neon-blue/20"
              >
                Nous Appeler
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
