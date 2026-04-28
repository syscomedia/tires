"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/site-data";
import { ArrowRight, Sun, Snowflake, CloudRain, Mountain, Truck, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "pneus-ete": Sun,
  "pneus-hiver": Snowflake,
  "toutes-saisons": CloudRain,
  "pneus-4x4-suv": Mountain,
  "pneus-utilitaires": Truck,
  "freinage-entretien": Wrench,
};

const categoryColors: Record<string, string> = {
  "pneus-ete": "from-cyan-500/30 to-neon-blue/10",
  "pneus-hiver": "from-blue-600/30 to-neon-blue/10",
  "toutes-saisons": "from-teal-500/30 to-neon-blue/10",
  "pneus-4x4-suv": "from-neon-blue/40 to-blue-900/20",
  "pneus-utilitaires": "from-slate-500/30 to-neon-blue/10",
  "freinage-entretien": "from-neon-blue/40 to-indigo-900/20",
};

export default function CategorySection() {
  return (
    <section className="py-32 bg-mesh relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] flex items-center justify-center select-none">
        <span className="text-[40vw] font-display font-black italic -rotate-12">PNEUS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-neon-blue mb-4"
          >
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-ping inline-block" />
            <span className="font-black uppercase tracking-widest text-sm">Nos Gammes Pneus & Services</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase italic leading-none">
            NOS <span className="text-gradient">CATÉGORIES</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium">
            Pneus été, hiver, toutes saisons, 4x4, utilitaires et services — tout ce qu'il faut pour rouler en sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.slug] ?? ArrowRight;
            const gradientClass = categoryColors[category.slug] ?? "from-neon-blue/20 to-transparent";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] bg-carbon-light border border-white/5 shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/40 transition-all duration-500 rounded-[2rem] pointer-events-none" />

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-black text-white mb-3 uppercase italic leading-tight group-hover:text-neon-blue transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/40 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                    {category.description}
                  </p>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center space-x-3 text-white bg-white/5 border border-white/10 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider group-hover:bg-neon-blue group-hover:border-neon-blue transition-all duration-300"
                  >
                    <span>VOIR LA SÉLECTION</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
