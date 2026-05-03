"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { articles } from "../BlogClient";

interface ArticleClientProps {
  slug: string;
  content: { title: string; description: string; body: string[] };
  article: { slug: string; title: string; excerpt: string; category: string; readTime: string; image: string; keywords: string[] };
}

function renderParagraph(text: string) {
  // Handle **bold** markdown
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-white font-bold">{part}</strong> : part
  );
}

export default function ArticleClient({ slug, content, article }: ArticleClientProps) {
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${article.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/30 mb-8">
            <Link href="/" className="hover:text-racing-red transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-racing-red transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-racing-red">{article.category}</span>
          </motion.nav>

          <div className="inline-flex items-center space-x-2 bg-racing-red/20 border border-racing-red/30 text-racing-red text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span>{article.category}</span>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase italic leading-tight tracking-tighter">
            {content.title}
          </motion.h1>

          <div className="flex items-center space-x-6 text-white/30 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} de lecture</span>
            </div>
            <span>Par Pole Position Pneus 93</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass p-8 md:p-14 rounded-[3rem] border-white/5 mb-16">
            <p className="text-white/60 text-xl leading-relaxed font-medium mb-10 italic border-l-4 border-racing-red pl-6">
              {content.description}
            </p>
            <div className="space-y-8">
              {content.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="text-white/55 text-lg leading-relaxed font-medium"
                >
                  {renderParagraph(para)}
                </motion.p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-red p-10 md:p-14 rounded-[3rem] border-white/10 text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase italic mb-4 leading-tight">
              BESOIN D'UN <span className="text-gradient">CONSEIL EXPERT ?</span>
            </h2>
            <p className="text-white/50 mb-8 font-medium text-lg">
              Notre équipe est disponible 7j/7 de 9h à 19h au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+330953439999" className="inline-flex items-center justify-center space-x-3 bg-racing-red text-white px-10 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-racing-red-hover transition-all shadow-xl text-sm">
                <Phone className="w-5 h-5" />
                <span>APPELER MAINTENANT</span>
              </a>
              <Link href="/categories" className="inline-flex items-center justify-center space-x-3 glass text-white px-10 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-white/10 transition-all text-sm border-white/10">
                <span>VOIR NOS PNEUS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Other articles */}
          <div>
            <h3 className="text-2xl font-display font-black text-white uppercase italic mb-8">AUTRES ARTICLES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((a, i) => (
                <motion.div key={a.slug} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                  <Link href={`/blog/${a.slug}`} className="group glass p-6 rounded-2xl border-white/5 hover:border-racing-red/30 transition-all block">
                    <p className="text-[10px] font-black text-racing-red uppercase tracking-widest mb-2">{a.category}</p>
                    <h4 className="text-sm font-bold text-white uppercase italic leading-tight group-hover:text-racing-red transition-colors line-clamp-3">{a.title}</h4>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link href="/blog" className="inline-flex items-center space-x-2 text-white/40 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
