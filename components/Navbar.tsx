"use client";

import React, { useState, useEffect } from "react";
import { Coffee, Menu as MenuIcon, X, Sparkles, ArrowUpRight } from "lucide-react";
import { DEVTRIA_INFO } from "@/data/coffeeData";

const NAV_LINKS = [
  { name: "Beranda", href: "#hero" },
  { name: "Menu Pilihan", href: "#menu" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Kontak & Lokasi", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-[41px] z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-coffee-50/90 backdrop-blur-md shadow-sm border-b border-coffee-200/60 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            aria-label="Kopi Kala Beranda"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-coffee-700 to-coffee-900 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-coffee-950 leading-none">
                Kopi Kala<span className="text-amber-600">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-coffee-600 font-medium mt-0.5">
                Artisan Coffee & Space
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-coffee-800 hover:text-amber-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={DEVTRIA_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-coffee-900 text-stone-100 hover:bg-amber-700 hover:text-white transition-all duration-200 shadow-sm hover:shadow-warm group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>Buat Web Seperti Ini</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={DEVTRIA_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-coffee-900 text-amber-300 text-xs font-medium sm:hidden flex items-center gap-1"
            >
              <span>Jasa Web</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
              className="p-2 rounded-lg text-coffee-900 hover:bg-coffee-200/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-coffee-950" />
              ) : (
                <MenuIcon className="w-6 h-6 text-coffee-950" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-coffee-200/80 bg-coffee-50/95 backdrop-blur-lg rounded-2xl p-4 shadow-warm-lg transition-all animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-coffee-900 hover:bg-coffee-200/60 hover:text-amber-800 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-coffee-400 text-xs">→</span>
                </a>
              ))}
              <div className="pt-2 border-t border-coffee-200">
                <a
                  href={DEVTRIA_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-coffee-900 text-stone-100 hover:bg-amber-700 transition-colors shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Buat Web Seperti Ini (DevTria)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

