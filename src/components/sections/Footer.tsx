import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-mesh text-white pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] flex items-end justify-end select-none">
        <span className="text-[20vw] font-display font-black italic -mb-20 -mr-10">PS 93</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-display font-black tracking-tighter italic">
                <span className="text-neon-blue group-hover:text-white transition-colors">POLE</span>
                <span className="text-white group-hover:text-neon-blue transition-colors"> POSITION</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Votre spécialiste du pneu en Seine-Saint-Denis. Montage, équilibrage, entretien et service à domicile. Partout où vous êtes, nous intervenons. Ouvert 7j/7 de 9h à 19h.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaTwitter, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="glass w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-neon-blue hover:border-neon-blue transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white/40 italic">Navigation</h4>
            <ul className="space-y-4 text-white font-bold text-sm italic uppercase tracking-tight">
              <li><Link href="/categories" className="hover:text-neon-blue transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Nos Pneus</span></Link></li>
              <li><Link href="/services" className="hover:text-neon-blue transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Nos Services</span></Link></li>
              <li><Link href="/about" className="hover:text-neon-blue transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>À Propos</span></Link></li>
              <li><Link href="/contact" className="hover:text-neon-blue transition-all flex items-center space-x-2 group"><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /><span>Contact Direct</span></Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white/40 italic">Nos Pneus</h4>
            <ul className="space-y-4 text-white/60 font-medium text-sm">
              <li><Link href="/categories/pneus-ete" className="hover:text-white transition-colors">Pneus Été</Link></li>
              <li><Link href="/categories/pneus-hiver" className="hover:text-white transition-colors">Pneus Hiver</Link></li>
              <li><Link href="/categories/toutes-saisons" className="hover:text-white transition-colors">Toutes Saisons</Link></li>
              <li><Link href="/categories/pneus-4x4-suv" className="hover:text-white transition-colors">Pneus 4x4 & SUV</Link></li>
              <li><Link href="/categories/pneus-utilitaires" className="hover:text-white transition-colors">Pneus Utilitaires</Link></li>
              <li><Link href="/categories/freinage-entretien" className="hover:text-white transition-colors">Freinage & Entretien</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white/40 italic">Nous Trouver</h4>
            <ul className="space-y-6 text-white font-medium text-sm">
              <li className="flex items-start space-x-4">
                <div className="bg-neon-blue/10 p-3 rounded-xl">
                  <MapPin className="w-5 h-5 text-neon-blue" />
                </div>
                <span className="leading-relaxed">2 Rue Claude Debussy, <br /><span className="font-black italic">93800 Épinay-sur-Seine</span></span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-neon-blue/10 p-3 rounded-xl">
                  <Phone className="w-5 h-5 text-neon-blue" />
                </div>
                <a href="tel:0953439999" className="font-black italic text-lg tracking-tight hover:text-neon-blue transition-colors">09 53 43 99 99</a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="bg-neon-blue/10 p-3 rounded-xl">
                  <Mail className="w-5 h-5 text-neon-blue" />
                </div>
                <span className="hover:text-neon-blue transition-colors cursor-pointer">pneusservices93@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 POLE POSITION — PNEUS SERVICES 93. RCS BOBIGNY 103 861 852.</p>
          <div className="flex space-x-8">
            <Link href="/legal" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
