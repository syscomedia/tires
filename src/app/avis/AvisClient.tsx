"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Star, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const reviews = [
  { name: "Mohamed K.", rating: 5, date: "Avril 2026", text: "Service rapide et professionnel. J'ai fait monter 4 pneus Michelin en moins de 30 minutes. Prix très correct pour le secteur. Je recommande vivement !" },
  { name: "Sarah B.", rating: 5, date: "Mars 2026", text: "Ouvert le dimanche, c'est ce qui m'a décidée. Pneus hiver montés en un rien de temps. Personnel très aimable et compétent. Reviendrai sans hésiter." },
  { name: "Karim D.", rating: 5, date: "Mars 2026", text: "Plaquettes de frein changées rapidement et à bon prix. Ils m'ont aussi fait un contrôle des pneus gratuit. Très sérieux." },
  { name: "Fatima Z.", rating: 5, date: "Février 2026", text: "Pneus toutes saisons posés rapidement. On m'a bien expliqué les différences entre les marques. Prix honnêtes. Merci à toute l'équipe !" },
  { name: "Julien M.", rating: 5, date: "Janvier 2026", text: "Crevaison réparée en urgence un samedi soir. Ils étaient encore ouverts et m'ont sorti d'affaire. Service impeccable. 5 étoiles mérités." },
  { name: "Nadia T.", rating: 4, date: "Janvier 2026", text: "Bon service, pneus 4x4 montés proprement. Légère attente un samedi matin mais c'est compréhensible. Je reviendrai." },
  { name: "Rachid A.", rating: 5, date: "Décembre 2025", text: "Prix imbattables pour les pneus Bridgestone. Montage + équilibrage compris. Rien à redire." },
  { name: "Claire V.", rating: 5, date: "Décembre 2025", text: "Équipe pro et sympa. Vidange faite en 20 minutes. Pas besoin de RDV. Parfait." },
];

const faqs = [
  {
    q: "Faut-il prendre rendez-vous pour faire monter des pneus ?",
    a: "Non, vous pouvez venir directement sans rendez-vous. Nous sommes ouverts 7j/7 de 9h à 19h au 2 Rue Claude Debussy, 93800 Épinay-sur-Seine.",
  },
  {
    q: "Quels types de pneus vendez-vous ?",
    a: "Pneus été, hiver, toutes saisons, 4x4 & SUV et utilitaires. Toutes marques disponibles : Michelin, Continental, Bridgestone, Goodyear, Pirelli, Dunlop, BFGoodrich, Hankook. Neufs et d'occasion.",
  },
  {
    q: "Le montage est-il inclus dans le prix ?",
    a: "Oui ! Le montage et l'équilibrage sont toujours inclus dans le prix de nos pneus. Aucun frais caché.",
  },
  {
    q: "Faites-vous le freinage (disques et plaquettes) ?",
    a: "Oui, nous remplaçons disques et plaquettes de frein pour tous types de véhicules. Pièces de qualité OEM (Brembo, TRW). Intervention express sans rendez-vous.",
  },
  {
    q: "Êtes-vous ouverts le dimanche ?",
    a: "Oui ! Nous sommes ouverts 7 jours sur 7, y compris le dimanche et les jours fériés, de 9h à 19h.",
  },
  {
    q: "Faites-vous des vidanges et de l'entretien général ?",
    a: "Oui, nous réalisons vidanges huile moteur, remplacement de filtres, contrôle des niveaux et révisions complètes. Sans rendez-vous, 7j/7.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= rating ? "text-amber-400 fill-amber-400" : "text-white/20"}`} />
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="font-bold text-white text-base md:text-lg group-hover:text-racing-red transition-colors">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-racing-red shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/30 shrink-0" />}
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/50 pb-6 text-sm leading-relaxed font-medium"
        >
          {a}
        </motion.p>
      )}
    </div>
  );
}

export default function AvisClient() {
  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center space-x-2 text-racing-red mb-6">
            <Star className="w-5 h-5 fill-racing-red" />
            <span className="font-black uppercase tracking-widest text-sm">Note Moyenne 4.9 / 5</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white">
            NOS <span className="text-gradient">AVIS CLIENTS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            127 clients nous ont fait confiance. Leur satisfaction est notre meilleure publicité.
          </motion.p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-12">
            {[
              { value: "4.9/5", label: "Note moyenne" },
              { value: "127", label: "Avis vérifiés" },
              { value: "7j/7", label: "Disponibilité" },
            ].map((s) => (
              <div key={s.label} className="glass p-6 rounded-2xl border-white/5">
                <p className="text-3xl font-display font-black text-white italic mb-1">{s.value}</p>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] border-white/5 hover:border-racing-red/20 transition-all duration-500 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={r.rating} />
                  <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{r.date}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium mb-6 italic">"{r.text}"</p>
                <div className="flex items-center space-x-3 border-t border-white/5 pt-5">
                  <div className="w-9 h-9 bg-racing-red/20 rounded-full flex items-center justify-center text-racing-red font-black text-sm">
                    {r.name[0]}
                  </div>
                  <span className="text-white font-bold text-sm">{r.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to leave a review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-red p-10 md:p-14 rounded-[3rem] border-white/10 text-center"
          >
            <MessageCircle className="w-12 h-12 text-racing-red mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic mb-4 leading-tight">
              PARTAGEZ VOTRE <span className="text-gradient">EXPÉRIENCE</span>
            </h2>
            <p className="text-white/50 mb-8 text-lg font-medium max-w-xl mx-auto">
              Votre avis nous aide à nous améliorer et aide d'autres clients à nous trouver sur Google.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pole+Position+Pneus+Epinay-sur-Seine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-carbon-black px-10 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-racing-red hover:text-white transition-all shadow-xl"
            >
              <Star className="w-5 h-5 fill-current" />
              <span>LAISSER UN AVIS GOOGLE</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic leading-none tracking-tighter mb-4">
              QUESTIONS <span className="text-gradient">FRÉQUENTES</span>
            </h2>
            <p className="text-white/40 text-lg font-medium">Tout ce que vous devez savoir avant de venir.</p>
          </div>
          <div className="glass p-8 md:p-12 rounded-[3rem] border-white/5">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/30 mb-6 font-medium">Une autre question ? Contactez-nous directement.</p>
            <Link href="/contact" className="inline-flex items-center space-x-2 glass-red px-8 py-4 rounded-full font-black italic uppercase tracking-widest text-white hover:bg-racing-red transition-all text-sm border-white/10">
              <span>NOUS CONTACTER</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
