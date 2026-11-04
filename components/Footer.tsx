"use client";

import React from "react";
import { Coffee, Instagram, MessageCircle, MapPin, Sparkles, ArrowUpRight, Heart } from "lucide-react";
import { CAFE_INFO, DEVTRIA_INFO } from "@/data/coffeeData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-coffee-950 text-stone-200 border-t border-coffee-800/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DevTria Callout Banner above footer columns */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-coffee-900 via-coffee-800 to-coffee-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm-lg">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Ingin Website Modern & Berkelas Seperti Ini?
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                Tim <strong>DevTria</strong> siap membantu bisnis / UMKM Anda memiliki website profesional, cepat, dan mobile-friendly dengan harga terjangkau.
              </p>
            </div>
          </div>

          <a
            href={DEVTRIA_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-coffee-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:scale-105"
          >
            <span>Konsultasi Gratis dengan DevTria</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-coffee-800/60">
          {/* Col 1: Brand & Filosofi */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-coffee-950 flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Kopi Kala<span className="text-amber-500">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Ruang persinggahan untuk menikmati kopi artisan nusantara, ketenangan sejenak, dan kehangatan yang mengalir di setiap tegukan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${CAFE_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-900 hover:bg-amber-500 hover:text-coffee-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Instagram Kopi Kala"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CAFE_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-900 hover:bg-amber-500 hover:text-coffee-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Kopi Kala"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-900 hover:bg-amber-500 hover:text-coffee-950 text-stone-300 flex items-center justify-center transition-colors"
                aria-label="Google Maps Kopi Kala"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Menu Unggulan & Katalog
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  Cerita & Filosofi Biji Kopi
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Reservasi Meja & Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Jam Operasional */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Jam Operasional
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400">
              {CAFE_INFO.hours.map((item, idx) => (
                <li key={idx}>
                  <strong className="block text-white">{item.days}</strong>
                  <span className="text-amber-300/90">{item.time}</span>
                </li>
              ))}
              <li className="pt-1 text-[11px] text-stone-400 italic">
                *Dine-in, Takeaway, dan Layanan Pesan Antar via WhatsApp.
              </li>
            </ul>
          </div>

          {/* Col 4: Lokasi Dummy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Alamat Kedai
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-3">
              {CAFE_INFO.address}
            </p>
            <p className="text-xs text-stone-400">
              Email: <span className="text-stone-200">{CAFE_INFO.email}</span>
            </p>
            <p className="text-xs text-stone-400 mt-1">
              WhatsApp: <span className="text-stone-200">{CAFE_INFO.phone}</span>
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} Kopi Kala. Website dirancang dan dikembangkan oleh <a href={DEVTRIA_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-semibold">DevTria</a>.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>untuk memajukan UMKM Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

