"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-mesh">
      {/* Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/categories/TIRES.png"
          alt="Pôle Position 93"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-transparent to-transparent" />
      </div>

      {/* Floating Animated Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] z-0"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-gold/5 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-52 md:pt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-neon-blue/20 border border-neon-blue/30 text-neon-blue text-[10px] md:text-sm font-black uppercase tracking-[0.3em] mb-6 md:mb-8 rounded-full italic backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
              </span>
              <span>Pôle Position 93 — Épinay-sur-Seine</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-[0.95] tracking-tight italic">
              VOS PNEUS, <br />
              <span className="text-gradient animate-glow drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">NOTRE PASSION.</span>
            </h1>

            <div className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-xl font-medium flex flex-wrap gap-x-[0.3em] items-center">
              {"Montage, équilibrage et entretien automobile. Pneus neufs & occasion. Ouvert 7j/7 de 9h à 19h.".split(" ").map((word, i) => {
                const isHighlight = word.match(/7j\/7|9h|19h\./);

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut"
                    }}
                    className={cn(
                      "whitespace-nowrap",
                      isHighlight ? "text-neon-blue font-black" : ""
                    )}
                  >
                    {word}
                  </motion.span>
                );
              })}
              <motion.a
                href="tel:0100000000"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="inline-flex items-center space-x-2 bg-neon-blue/10 text-neon-blue px-4 py-1 rounded-full border border-neon-blue/20 hover:bg-neon-blue hover:text-white transition-all ml-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-black italic">01 00 00 00 00</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Pneus Neufs & Occasion",
                "Montage & Équilibrage",
                "Freinage & Plaquettes",
                "Entretien Rapide 7j/7",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="flex items-center space-x-3 text-white/80 glass-blue px-4 py-3 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-neon-blue" />
                  <span className="text-sm font-bold uppercase tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/categories">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 242, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-neon-blue text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center space-x-3 transition-all shadow-2xl shadow-neon-blue/30 group w-full sm:w-auto"
                >
                  <span>VOIR NOS PNEUS</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center space-x-3 transition-all w-full sm:w-auto"
                >
                  <div className="bg-white/10 p-1.5 rounded-full">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                  <span>NOS SERVICES</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Background Decoration */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full overflow-hidden pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative w-full h-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[30rem] text-white/[0.03] italic -rotate-12 select-none">
            93
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <motion.div
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-neon-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
