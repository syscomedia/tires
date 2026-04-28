"use client";

import { use } from "react";
import { categories, products } from "@/data/site-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Info, Zap, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.slug);

  return (
    <main className="relative flex-1 bg-mesh min-h-screen">
      <Navbar />

      {/* Dynamic Hero Section */}
      <section className="pt-52 pb-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none -mr-20">
          <span className="font-display font-black decor-text italic text-white uppercase">{category.slug.split('-')[0]}</span>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <motion.nav 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8"
              >
                <Link href="/" className="hover:text-neon-blue transition-colors">Accueil</Link>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <Link href="/categories" className="hover:text-neon-blue transition-colors">Nos Pneus</Link>
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span className="text-neon-blue italic">{category.name}</span>
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 text-neon-blue mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-black uppercase tracking-widest text-[10px] italic">Pôle Position 93</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-9xl font-display font-black uppercase italic leading-[0.85] tracking-tighter text-white"
              >
                {category.name.split(' ').map((word, i) => (
                  <span key={i} className={i > 0 ? "text-gradient block animate-glow" : "block"}>{word}</span>
                ))}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/40 mt-10 max-w-2xl text-xl md:text-2xl font-medium leading-relaxed"
              >
                {category.description}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="glass-blue p-8 rounded-[2.5rem] flex flex-col space-y-6 border-white/10 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 opacity-10 -mr-4 -mt-4">
                <Zap className="w-24 h-24 text-white rotate-12 group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="bg-neon-blue p-5 rounded-2xl shadow-xl shadow-neon-blue/30 relative z-10">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Garantie Premium</p>
                  <p className="text-xl font-display font-black italic text-white leading-tight">MONTAGE <br /><span className="text-white/60">GARANTI 93</span></p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10 relative z-10">
                 <p className="text-white/40 text-xs font-bold italic leading-relaxed">Montage express disponible sans rendez-vous, 7j/7 de 9h à 19h.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {categoryProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full glass border-white/5 rounded-[3rem] overflow-hidden hover:border-neon-blue/30 transition-all duration-700 hover:shadow-2xl hover:shadow-neon-blue/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-60" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-6 right-6">
                     <div className="glass-blue px-6 py-3 rounded-2xl backdrop-blur-xl border-white/10 shadow-2xl">
                        <span className="text-white font-display font-black italic text-xl tracking-tighter">{product.price.toLocaleString()} €</span>
                     </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 justify-between bg-white/[0.02]">
                  <div>
                    <div className="flex items-center space-x-2 text-neon-blue mb-3">
                       <Zap className="w-3 h-3" />
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">En Stock — Montage Inclus</span>
                    </div>
                    <h3 className="text-xl font-display font-black text-white uppercase italic leading-tight mb-3 group-hover:text-neon-blue transition-colors duration-500">
                      {product.name}
                    </h3>
                    <p className="text-white/40 text-sm font-medium mb-5 line-clamp-2">
                      {product.description}
                    </p>
                    <ul className="space-y-1 mb-6">
                      {product.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center space-x-2 text-white/50 text-xs">
                          <span className="w-1 h-1 bg-neon-blue rounded-full shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-display font-black italic text-white">{product.price} €<span className="text-white/30 text-sm font-medium not-italic">/unité</span></span>
                    <Link href={`/products/${product.id}`} className="inline-flex items-center space-x-2 glass px-5 py-3 rounded-2xl text-white font-black italic uppercase tracking-widest text-xs hover:bg-neon-blue hover:border-neon-blue transition-all duration-500 group/btn border border-white/10">
                      <span>Détails</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
