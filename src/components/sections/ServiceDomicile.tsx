"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Clock, Phone, Navigation, ShieldCheck } from "lucide-react";

export default function ServiceDomicile() {
  const features = [
    {
      icon: MapPin,
      title: "Partout où vous êtes",
      description: "À la maison, au bureau ou sur le bord de la route, nous nous déplaçons rapidement."
    },
    {
      icon: Clock,
      title: "Service 7j/7",
      description: "Besoin d'un dépannage ? Nous sommes disponibles tous les jours de 9h à 19h."
    },
    {
      icon: ShieldCheck,
      title: "Travail Garanti",
      description: "Une intervention professionnelle avec le même équipement qu'en atelier."
    }
  ];

  return (
    <section className="py-24 bg-carbon-black relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 text-neon-blue mb-6">
              <Truck className="w-5 h-5" />
              <span className="font-black uppercase tracking-[0.3em] text-sm">Service Mobile & Domicile</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 italic leading-none">
              ON SE DÉPLACE <br />
              <span className="text-gradient">POUR VOUS.</span>
            </h2>
            
            <p className="text-white/60 text-lg font-medium mb-10 leading-relaxed">
              Plus besoin de vous déplacer au garage ! Nos techniciens interviennent directement chez vous ou sur votre lieu de travail pour le montage de vos pneus, l'entretien rapide ou en cas de crevaison.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 glass-blue rounded-2xl border border-white/5">
                  <div className="bg-neon-blue/10 p-3 rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-sm mb-2 tracking-wide italic">{feature.title}</h4>
                    <p className="text-white/40 text-xs font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="tel:0953439999"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-4 bg-neon-blue text-white px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-neon-blue/20 group"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>APPELER UN DÉPANNEUR</span>
              <Navigation className="w-5 h-5 group-hover:translate-x-1 -rotate-45 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group">
              <img 
                src="/images/categories/van.jpg" 
                alt="Service à domicile" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-8 glass-blue rounded-3xl border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-black uppercase text-xs tracking-widest italic">Technicien Disponible</span>
                  </div>
                  <span className="text-neon-blue font-black text-xs">93 & ÎLE-DE-FRANCE</span>
                </div>
                <div className="text-white/60 text-xs font-medium">
                  Nous couvrons tout le 93 et ses environs pour vos urgences et entretiens programmés.
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-gold/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
