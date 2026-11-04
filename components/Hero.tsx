"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Star, Sparkles, MapPin, Coffee } from "lucide-react";
import { CAFE_INFO } from "@/data/coffeeData";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CAFE_INFO.phoneRaw}?text=Halo%20Kopi%20Kala,%20saya%20ingin%20tanya%20menu%20dan%20reservasi%20tempat`;

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Warm Coffee Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920&auto=format&fit=crop"
          alt="Suasana Kedai Kopi Kala"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
          loading="eager"
        />
        {/* Multi-layered warm gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/70 to-coffee-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/80 via-transparent to-coffee-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center text-white">
        {/* Top Mini Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Kafe Artisan & Ruang Nyaman di Jakarta Selatan</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 max-w-4xl mx-auto leading-[1.15]"
        >
          Seduh Ketenangan di <span className="italic text-amber-400 underline decoration-amber-500/40 decoration-wavy">Setiap Cangkir</span>.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Tempat persinggahan terbaik untuk menikmati kopi artisan dan suasana hangat di tengah kota.
          Dibuat dari biji kopi lokal terkurasi oleh barista berdedikasi.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          {/* Primary CTA */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-coffee-950 font-semibold text-sm sm:text-base transition-all duration-200 shadow-warm hover:shadow-warm-lg hover:scale-105 group"
          >
            <Coffee className="w-4 h-4 text-coffee-950" />
            <span>Lihat Menu Unggulan</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-100 backdrop-blur-md border border-white/25 font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span>Pesan via WhatsApp</span>
          </a>
        </motion.div>

        {/* Quick Social Proof / Key Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-400/20 text-amber-300">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="font-bold text-white text-base">4.9 / 5.0</div>
              <div className="text-xs text-stone-300">Google Review (500+)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-400/20 text-amber-300">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-base">100% Lokal</div>
              <div className="text-xs text-stone-300">Biji Nusantara Terbaik</div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-3">
            <div className="p-2 rounded-lg bg-amber-400/20 text-amber-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Kebayoran Baru</div>
              <div className="text-xs text-stone-300">Jakarta Selatan</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave / Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-coffee-50 to-transparent pointer-events-none" />
    </section>
  );
}

