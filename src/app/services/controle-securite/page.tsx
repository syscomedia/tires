"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Zap,
  Sparkles,
  ArrowLeft,
  Info,
  CircleCheckBig,
  ClipboardCheck,
  Eye,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

export default function ControlePage() {
  const sections = [
    {
      title: "50 Points de Contrôle",
      desc: "Une inspection minutieuse de tous les organes vitaux de votre véhicule : direction, suspension, éclairage, et bien plus.",
      icon: ClipboardCheck
    },
    {
      title: "Diagnostic Freins",
      desc: "Contrôle visuel et mesure de l'usure des disques et plaquettes pour garantir votre sécurité de freinage.",
      icon: Activity
    },
    {
      title: "État des Pneus",
      desc: "Vérification de la pression, de la profondeur des sculptures et détection des hernies ou usures irrégulières.",
      icon: Eye
    },
    {
      title: "Conseils Experts",
      desc: "Rapport détaillé et recommandations sur les interventions à prévoir pour maintenir votre véhicule en parfait état.",
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
            <span className="font-black uppercase tracking-widest text-sm text-glow">Prévention & Sécurité</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 uppercase italic leading-[0.9] tracking-tighter text-white"
          >
            CONTRÔLE <br />
            <span className="text-gradient">SÉCURITÉ COMPLET</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-xl leading-relaxed font-medium mb-12"
          >
            Diagnostic complet de votre véhicule pour une sécurité maximale. Plus de 50 points de contrôle vérifiés par nos techniciens certifiés.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
          <ShieldCheck className="w-[600px] h-[600px] animate-pulse text-white" />
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
                <ClipboardCheck className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                ANTICIPER LES <br />
                <span className="text-neon-blue text-2xl">RISQUES ROUTIERS</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Un contrôle de sécurité régulier permet de déceler les signes d'usure prématurée avant qu'ils ne provoquent une panne ou un accident.
                </p>
                <p>
                  Nos techniciens certifiés examinent les éléments critiques de votre châssis, de votre moteur et de votre habitacle pour une vision à 360°.
                </p>
                <p>
                  Que ce soit avant un long trajet ou pour un simple suivi annuel, notre contrôle sécurité est l'assurance de rouler sereinement.
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
                <AlertTriangle className="w-32 h-32" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-8 uppercase italic leading-none">
                VOTRE TRANQUILLITÉ <br />
                <span className="text-neon-blue text-2xl">NOTRE PRIORITÉ</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed font-medium">
                <p>
                  Nous utilisons des outils de diagnostic modernes pour analyser les systèmes électroniques de votre véhicule et identifier les codes défauts.
                </p>
                <p>
                  À l'issue du contrôle, nous vous remettons un rapport détaillé avec un code couleur simple pour comprendre les urgences éventuelles.
                </p>
                <p>
                  Transparence totale : nous ne préconisons que les réparations strictement nécessaires à votre sécurité et au bon fonctionnement de votre auto.
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
              FAITES LE POINT <br />
              <span className="text-neon-blue text-2xl md:text-3xl">SUR VOTRE SÉCURITÉ</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-medium leading-relaxed">
              Ne prenez aucun risque sur la route. Passez dans notre centre pour un contrôle complet en moins d'une heure.
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
