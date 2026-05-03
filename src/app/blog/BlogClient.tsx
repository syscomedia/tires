"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

import { articles } from "./data";

export default function BlogClient() {
  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center space-x-2 text-racing-red mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm">Conseils & Guides Pneus</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white">
            NOTRE <span className="text-gradient">BLOG AUTO</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Guides, conseils et comparatifs pneus rédigés par nos experts à Épinay-sur-Seine.
          </motion.p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group glass border-white/5 rounded-[2.5rem] overflow-hidden hover:border-racing-red/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-60"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-racing-red/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest">{article.category}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-white/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime} de lecture</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-display font-black text-white mb-4 uppercase italic leading-tight group-hover:text-racing-red transition-colors duration-300 line-clamp-3">
                    {article.title}
                  </h2>
                  <p className="text-white/40 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.keywords.slice(0, 2).map((kw) => (
                      <span key={kw} className="flex items-center space-x-1 text-[9px] font-bold text-white/20 bg-white/5 px-3 py-1 rounded-full uppercase tracking-wider">
                        <Tag className="w-2.5 h-2.5" />
                        <span>{kw}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center space-x-2 text-white text-xs font-black uppercase tracking-widest group-hover:text-racing-red transition-colors"
                  >
                    <span>LIRE L'ARTICLE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text block — keyword-rich natural text for Google */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5">
            <h2 className="text-3xl font-display font-black text-white uppercase italic mb-8 leading-tight">
              VOTRE SPÉCIALISTE PNEUS À ÉPINAY-SUR-SEINE (93)
            </h2>
            <div className="space-y-5 text-white/50 leading-relaxed font-medium">
              <p>
                Chez <strong className="text-white">Pole Position — Pneus Services 93</strong>, situé au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine, nous sommes votre expert pneus en Seine-Saint-Denis. Ouverts <strong className="text-white">7j/7 de 9h à 19h</strong>, sans rendez-vous.
              </p>
              <p>
                Nous proposons un large stock de <strong className="text-white">pneus neufs et d'occasion</strong> pour tous types de véhicules : voitures particulières, SUV, 4x4, fourgons et utilitaires. Toutes les grandes marques sont disponibles : <strong className="text-white">Michelin, Continental, Bridgestone, Goodyear, Pirelli, Dunlop, BFGoodrich, Hankook, Yokohama</strong> et bien d'autres.
              </p>
              <p>
                Notre centre prend en charge le <strong className="text-white">montage et l'équilibrage</strong> de vos pneus (inclus dans le prix), le <strong className="text-white">freinage</strong> (remplacement de plaquettes et disques), la <strong className="text-white">géométrie et le parallélisme</strong>, les <strong className="text-white">vidanges</strong> et l'entretien général de votre véhicule.
              </p>
              <p>
                Nous intervenons pour les clients d'Épinay-sur-Seine, Saint-Denis, Stains, Pierrefitte-sur-Seine, Argenteuil, Enghien-les-Bains, Villetaneuse, L'Île-Saint-Denis et toute l'Île-de-France.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
