"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Nos Pneus", href: "/categories" },
  { name: "Services", href: "/services" },
  { name: "Avis", href: "/avis" },
  { name: "À Propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Promotion Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-neon-blue py-1.5 md:py-2 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex items-center space-x-12"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-12">
              <span className="text-black font-black uppercase text-[11px] md:text-xs tracking-[0.2em] italic flex items-center">
                <span className="w-1.5 h-1.5 bg-black rounded-full mr-3 animate-pulse" />
                FRANCHISE OFFERTE POUR CHAQUE PARE-BRISE = 2 PNEUS OFFERTS !
              </span>
              <span className="text-black/70 font-black uppercase text-[11px] md:text-xs tracking-[0.2em] italic flex items-center">
                <span className="w-1.5 h-1.5 bg-black/40 rounded-full mr-3" />
                SERVICE À DOMICILE 7J/7 — DÉPLACEMENT PARTOUT
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 px-2 md:px-6",
          isScrolled ? "top-6 md:top-8 py-2 md:py-4 bg-carbon-black/80 backdrop-blur-md" : "top-10 md:top-14 py-2 md:py-6 bg-transparent"
        )}
      >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-4 md:px-8 py-3 md:py-4 rounded-[1.5rem] md:rounded-[2rem]",
        isScrolled ? "glass border-white/10" : "bg-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-3xl md:text-6xl font-display font-black tracking-tighter italic whitespace-nowrap leading-none">
            <span className="text-neon-blue group-hover:text-white transition-colors">POLE</span>
            <span className="text-white group-hover:text-neon-blue transition-colors">POSITION</span>
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-neon-blue",
                pathname === item.href ? "text-neon-blue" : "text-white/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:0953439999"
            className="flex items-center space-x-2 text-white bg-neon-blue px-4 py-2 rounded-full hover:bg-neon-blue-hover transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-bold italic">APPELER</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur for the whole page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-carbon-black/40 backdrop-blur-2xl z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-carbon-black/80 backdrop-blur-3xl border-t border-white/10 p-6 md:hidden flex flex-col space-y-6 z-50 rounded-b-[2rem] shadow-2xl"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xl font-display font-black uppercase italic tracking-tighter transition-all",
                    pathname === item.href ? "text-neon-blue translate-x-2" : "text-white/80 hover:text-white hover:translate-x-1"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 flex flex-col space-y-4">
                <a
                  href="tel:0953439999"
                  className="flex items-center justify-center space-x-3 glass-blue text-white py-4 rounded-2xl font-black italic uppercase tracking-widest text-sm shadow-lg shadow-neon-blue/10 transition-transform active:scale-95"
                >
                  <Phone className="w-5 h-5 text-neon-blue" />
                  <span>APPELER</span>
                </a>
                <a
                  href="https://wa.me/+330751151984"
                  className="flex items-center justify-center space-x-3 glass-green text-white py-4 rounded-2xl font-black italic uppercase tracking-widest text-sm shadow-lg shadow-green-500/10 transition-transform active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </nav>
    </>
  );
}
