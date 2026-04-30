"use client";

import { use } from "react";
import { products } from "@/data/site-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, ShieldCheck, Wrench, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none -mr-20">
          <span className="font-display font-black decor-text italic">PNEUS</span>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-12">
            <Link href="/" className="hover:text-neon-blue transition-colors">Accueil</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href="/categories" className="hover:text-neon-blue transition-colors">Nos Pneus</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href={`/categories/${product.category}`} className="hover:text-neon-blue transition-colors capitalize">{product.category.replace(/-/g, " ")}</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-neon-blue italic">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Product Image */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square glass rounded-[3rem] overflow-hidden flex items-center justify-center relative shadow-2xl border-white/5"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-transparent" />
              </motion.div>

              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, borderColor: "#00f2ff" }}
                    className="aspect-square glass-blue rounded-2xl border border-white/5 hover:border-neon-blue transition-all cursor-pointer opacity-30 hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-block px-4 py-1.5 bg-neon-blue/20 border border-neon-blue/30 text-neon-blue text-[10px] font-black uppercase tracking-[0.3em] rounded-lg mb-8 italic">
                  En Stock — Montage Express Disponible
                </div>

                {product.brand && (
                  <p className="text-white/30 font-black uppercase tracking-[0.4em] text-xs mb-3">{product.brand}</p>
                )}

                <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase italic leading-none tracking-tighter">
                  {product.name}
                </h1>

                {/* <div className="flex items-baseline space-x-4 mb-10">
                  <span className="text-5xl font-display font-black text-neon-blue italic animate-glow">
                    {product.price} €
                  </span>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-widest">TTC / unité — montage inclus</span>
                </div> */}

                <p className="text-white/50 text-xl leading-relaxed mb-10 font-medium">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-3 mb-10">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 glass px-6 py-4 rounded-2xl border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-neon-blue shrink-0" />
                      <span className="text-sm font-bold uppercase text-white/80 tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service badges */}
                <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-white/5">
                  <div className="text-center group">
                    <Wrench className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-neon-blue transition-colors" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Montage Express</p>
                  </div>
                  <div className="text-center group">
                    <Clock className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-neon-blue transition-colors" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">7j/7 — 9h à 19h</p>
                  </div>
                  <div className="text-center group">
                    <ShieldCheck className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-neon-blue transition-colors" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Qualité Garantie</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href="tel:0953439999"
                    className="flex-1 bg-neon-blue text-white py-6 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-neon-blue-hover transition-all shadow-2xl shadow-neon-blue/20 text-lg"
                  >
                    <Phone className="w-6 h-6" />
                    <span>APPELER POUR RÉSERVER</span>
                  </a>
                  <a
                    href="https://wa.me/+330751151984"
                    className="glass text-white px-8 py-6 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-white/10 transition-all border-white/5"
                  >
                    <MessageSquare className="w-6 h-6" />
                    <span className="sm:hidden lg:inline">WHATSAPP</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-12 uppercase italic leading-none tracking-tighter">
              POURQUOI <span className="text-gradient animate-glow">CE PNEU ?</span>
            </h2>
            <div className="glass p-10 md:p-16 rounded-[3rem] border-white/5 space-y-10">
              <div className="space-y-6 text-white/50 text-xl leading-relaxed font-medium">
                <p>
                  <span className="text-white font-bold italic">{product.name}</span> fait partie de notre sélection rigoureuse chez POLE POSITION. Chaque pneu en stock est contrôlé avant montage par nos techniciens certifiés à Épinay-sur-Seine.
                </p>
                <p>
                  Que vous rouliez en ville, sur autoroute ou sur terrain mixte, ce pneu est conçu pour vous offrir la meilleure combinaison de sécurité, longévité et performance pour votre véhicule.
                </p>
                <p>
                  Le montage et l'équilibrage sont inclus dans le prix. Venez directement au <span className="text-white italic">2 Rue Claude Debussy, 93800 Épinay-sur-Seine</span>, 7j/7 de 9h à 19h — sans rendez-vous.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-10 border-t border-white/5">
                {["Sécurité", "Performance", "Longévité", "Montage Inclus"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-[0.4em] text-neon-blue bg-neon-blue/10 px-6 py-2 rounded-full italic border border-neon-blue/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
