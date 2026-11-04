"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, X, ExternalLink } from "lucide-react";
import { DEVTRIA_INFO } from "@/data/coffeeData";

export default function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-coffee-950 via-coffee-900 to-coffee-950 text-stone-100 border-b border-amber-600/30 px-3 py-2.5 text-xs sm:text-sm shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center justify-center p-1 bg-amber-500/20 text-amber-300 rounded-full shrink-0">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          </span>
          <p className="text-stone-200">
            <strong className="font-semibold text-amber-300">ℹ️ Website Demo Interaktif</strong>{" "}
            buatan tim <span className="font-bold text-white underline decoration-amber-400">DevTria</span>.
            Didesain khusus untuk memberikan gambaran fitur modern kepada calon klien UMKM.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={DEVTRIA_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-coffee-950 font-semibold text-xs transition-colors shadow-sm"
          >
            Konsultasi Website
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Tutup banner demo"
            className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

