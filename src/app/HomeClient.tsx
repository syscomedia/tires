"use client";

import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CategorySection from "@/components/sections/CategorySection";
import ServiceDomicile from "@/components/sections/ServiceDomicile";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { brands } from "@/data/site-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import FloatingContact from "@/components/ui/FloatingContact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-1 bg-mesh"
        >
          <Navbar />
          <Hero />

          {/* Quick Contact Bar */}
          <div className="relative z-20 mt-10 md:mt-8 max-w-7xl mx-auto px-4">
            <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 shadow-2xl border-white/5">
              {[
                { icon: Phone, label: "Service Client", value: "09 53 43 99 99", size: "text-lg", href: "tel:0953439999" },
                { icon: MapPin, label: "Localisation", value: "2 Rue Claude Debussy, 93800 Épinay-sur-Seine", size: "text-[10px]", href: "https://goo.gl/maps/xyz" },
                { icon: Clock, label: "Ouverture", value: "7j/7 : 09h - 19h", size: "text-lg" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-4 md:space-x-5 text-white p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="bg-neon-blue p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg shadow-neon-blue/20">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={`font-display font-black ${item.size} italic text-glow hover:text-neon-blue transition-colors block`}>{item.value}</a>
                    ) : (
                      <p className={`font-display font-black ${item.size} italic text-glow`}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>



          <ServiceDomicile />

          <CategorySection />

          {/* Brands Banner */}
          <section className="py-16 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-center text-white/20 font-black uppercase tracking-[0.4em] text-[10px] mb-10">Marques Disponibles en Stock</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {brands.map((brand, i) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="text-white/20 font-display font-black text-xl md:text-2xl uppercase italic hover:text-neon-blue transition-colors cursor-default"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-neon-blue font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Nos Services Experts</span>
                  <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8 uppercase italic leading-[0.95]">
                    PLUS QU'UN GARAGISTE, <br /><span className="text-gradient">VOTRE PARTENAIRE.</span>
                  </h2>
                  <p className="text-white/50 mb-10 text-xl leading-relaxed font-medium">
                    POLE POSITION redéfinit le service pneu avec une précision chirurgicale et une passion sans limite. Ouvert 7j/7 de 9h à 19h à Épinay-sur-Seine.
                  </p>
                  <div className="space-y-6 mb-12">
                    {[
                      "Montage & équilibrage de pneus (Neufs & Occasion)",
                      "Service à domicile & dépannage partout",
                      "Freinage : disques, plaquettes et étriers",
                      "Entretien rapide : vidange, filtres, niveaux",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-4 text-white group cursor-default">
                        <div className="w-2 h-2 bg-neon-blue rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#00f2ff]" />
                        <span className="font-bold text-lg group-hover:text-neon-blue transition-colors italic uppercase tracking-tight">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="relative group overflow-hidden px-10 py-5 rounded-full bg-white text-carbon-black font-black uppercase italic tracking-widest transition-all hover:pr-14 shadow-xl inline-flex items-center"
                  >
                    <span className="relative z-10">DÉCOUVRIR NOS SERVICES</span>
                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-6 h-6" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-amber-gold rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="relative h-[600px] rounded-[3rem] overflow-hidden glass-blue flex items-center justify-center border-white/5">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 group-hover:scale-[1.05] transition-all duration-1000" />
                    <span className="relative z-10 text-white/10 font-display font-black decor-text italic select-none">93</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-white/5" />
                    <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2rem]">
                      <p className="text-white font-black text-2xl uppercase italic mb-2">Centre Pneus Haute Performance</p>
                      <p className="text-white/60 text-sm font-medium">Équipement de pointe, montage express et expertise technique certifiée.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trust Section - L'Excellence en Chiffres */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
              <span className="font-display font-black decor-text italic">EXCELLENCE</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-6xl font-display font-black text-white mb-24 uppercase italic tracking-tighter leading-none">
                  L'EXCELLENCE <br className="md:hidden" /> EN <span className="text-gradient">CHIFFRES</span>
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  { label: "Clients Satisfaits", value: "10k+", color: "from-neon-blue to-neon-blue-hover" },
                  { label: "Pneus Montés", value: "20k+", color: "from-amber-gold to-yellow-600" },
                  { label: "Ouvert 7j/7", value: "365j", color: "from-white to-gray-400" },
                  { label: "Points de Contrôle", value: "50+", color: "from-neon-blue to-amber-gold" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative p-10 glass rounded-[2.5rem] border-white/5 group overflow-hidden"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-br from-neon-blue/20 via-transparent to-amber-gold/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                    <p className={`text-6xl md:text-8xl font-display font-black mb-4 italic bg-gradient-to-br ${stat.color} bg-clip-text text-transparent select-none drop-shadow-2xl`}>
                      {stat.value}
                    </p>
                    <p className="text-white font-black uppercase text-[10px] tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                      {stat.label}
                    </p>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>



          <WhatsAppButton />
          <FloatingContact />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
