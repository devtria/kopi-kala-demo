"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, MessageCircle, Star, Sparkles, ShoppingBag, Check } from "lucide-react";
import { MENU_ITEMS, CAFE_INFO, MenuItem } from "@/data/coffeeData";

const CATEGORIES = [
  { id: "all", label: "Semua Menu" },
  { id: "signature", label: "Signature" },
  { id: "coffee", label: "Kopi Klasik" },
  { id: "non-coffee", label: "Non-Kopi" },
  { id: "pastry", label: "Pastry & Kudapan" },
];

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showTooltip, setShowTooltip] = useState(false);

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const createWhatsAppOrderLink = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Halo Kopi Kala, saya ingin memesan menu: ${item.name} (${item.formattedPrice}). Apakah saat ini tersedia?`
    );
    return `https://wa.me/${CAFE_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section id="menu" className="py-20 sm:py-28 bg-coffee-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with DevTria Interactive Tooltip */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold bg-amber-100/70 px-3 py-1 rounded-full border border-amber-300/40">
              Menu Kurasi Pilihan
            </span>

            {/* DevTria Feature Special Tooltip */}
            <div className="relative inline-block">
              <button
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-coffee-900 text-amber-300 text-xs font-medium hover:bg-coffee-800 transition-colors shadow-sm cursor-pointer"
                aria-label="Informasi fitur khusus DevTria"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span className="font-semibold">Fitur DevTria</span>
                <Info className="w-3.5 h-3.5 text-stone-300 ml-0.5" />
              </button>

              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 sm:w-80 p-3.5 bg-coffee-950 text-stone-100 text-xs rounded-xl shadow-warm-lg border border-amber-500/40 z-30 text-left pointer-events-auto"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-base leading-none">💡</span>
                      <div>
                        <p className="font-semibold text-amber-300 mb-1">
                          Klien DevTria:
                        </p>
                        <p className="text-stone-300 leading-relaxed">
                          Fitur katalog ini bisa dihubungkan dengan sistem inventaris, kasir (POS), atau sistem pembayaran otomatis (QRIS) bisnis Anda!
                        </p>
                      </div>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-coffee-950" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-950 tracking-tight">
            Cita Rasa Unggulan Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-coffee-700 font-light leading-relaxed">
            Dari racikan kopi susu kaya rasa hingga single origin berkarakter, setiap menu disiapkan dengan bahan premium dan cinta.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-coffee-900 text-amber-300 shadow-md scale-105"
                    : "bg-coffee-100 text-coffee-800 hover:bg-coffee-200 border border-coffee-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-coffee-200/80 shadow-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-coffee-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-coffee-950/85 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-amber-500/30 shadow-sm">
                        {item.badge}
                      </div>
                    )}

                    {/* Category Pill */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-coffee-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                      {item.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{item.rating}</span>
                      </div>
                      <span className="font-serif font-bold text-lg text-amber-700">
                        {item.formattedPrice}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-coffee-950 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-coffee-700 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <a
                    href={createWhatsAppOrderLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-coffee-100 hover:bg-coffee-900 text-coffee-900 hover:text-amber-300 font-semibold text-xs sm:text-sm transition-all duration-200 border border-coffee-300 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600 group-hover/btn:text-amber-300 transition-colors" />
                    <span>Pesan Sekarang</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Note for DevTria clients */}
        <div className="mt-12 text-center">
          <p className="text-xs text-coffee-600 inline-flex items-center gap-1.5 bg-coffee-100/80 px-4 py-2 rounded-full border border-coffee-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Katalog dapat diatur tanpa batas produk, harga diskon, hingga varian ukuran (Hot / Iced).</span>
          </p>
        </div>
      </div>
    </section>
  );
}

