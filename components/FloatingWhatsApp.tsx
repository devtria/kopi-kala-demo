"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { CAFE_INFO } from "@/data/coffeeData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${CAFE_INFO.phoneRaw}?text=Halo%20Kopi%20Kala,%20saya%20tertarik%20untuk%20reservasi%20atau%20tanya%20menu`;

  return (
    <aside aria-label="Kontak WhatsApp Cepat" className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-none">
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-white text-coffee-950 px-4 py-2 rounded-2xl shadow-warm-lg border border-coffee-200 text-xs font-medium animate-bounce">
          <span>☕ Tanya Menu / Reservasi Cepat?</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Tutup pesan bantuan WhatsApp"
            className="text-stone-400 hover:text-stone-600 p-0.5 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Kopi Kala via WhatsApp"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25 group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white text-green-500" />
      </a>
    </aside>
  );
}

