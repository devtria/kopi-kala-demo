"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Award, HeartHandshake, Wifi, Sparkles } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Coffee,
      title: "100% Biji Kopi Nusantara Terpilih",
      description: "Kami bermitra langsung dengan petani di dataran tinggi Aceh Gayo, Flores Bajawa, dan Kintamani untuk menghadirkan biji arabika terbaik dengan profil rasa autentik.",
    },
    {
      icon: Award,
      title: "Presisi Seduhan Barista",
      description: "Setiap cangkir dikalibrasi harian dengan standar rasio, suhu, dan grind size presisi demi ekstraksi rasa yang konsisten dan kaya.",
    },
    {
      icon: Wifi,
      title: "Suasana Hangat & Ramah WFH",
      description: "Dilengkapi colokan di setiap meja, Wi-Fi berkecepatan tinggi, dan pencahayaan hangat alami yang nyaman untuk kerja atau obrolan mendalam.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F4EFE6] relative overflow-hidden">
      {/* Decorative background subtle circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-coffee-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Aesthetic Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-warm-lg aspect-[4/5] border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
                  alt="Barista Kopi Kala menyeduh kopi artisan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif italic text-lg text-amber-200">
                    "Kopi bukan sekadar minuman, ia adalah jeda yang menyembuhkan di tengah kesibukan."
                  </p>
                  <p className="text-xs uppercase tracking-wider text-stone-300 mt-2">
                    — Kopi Kala Filosofi
                  </p>
                </div>
              </div>

              {/* Floating Small Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-coffee-900 text-stone-100 p-4 sm:p-5 rounded-2xl shadow-warm-lg border border-amber-500/30 max-w-[220px] sm:max-w-[240px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Fair Trade</h4>
                    <p className="text-[11px] text-amber-300">Petani Lokal Sejahtera</p>
                  </div>
                </div>
                <p className="text-[11px] text-stone-300 leading-snug">
                  100% mendukung perkebunan kopi rakyat di Indonesia.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-bold bg-amber-200/60 px-3 py-1 rounded-full border border-amber-300/60">
                Tentang Kopi Kala
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-950 tracking-tight leading-tight">
              Menghadirkan Kehangatan, Menghargai Setiap Seduhan.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-coffee-800 font-light leading-relaxed">
              Lahir dari kecintaan pada aroma tanah nusantara, <strong className="font-semibold text-coffee-950">Kopi Kala</strong> bermula sebagai ruang kecil untuk berbagi cerita. Kami percaya bahwa setiap tetes kopi menyimpan perjalanan panjang dari lereng gunung hingga ke cangkir Anda.
            </p>

            <p className="mt-3 text-sm sm:text-base text-coffee-700 leading-relaxed">
              Di sini, waktu seolah berjalan lebih tenang. Baik Anda datang untuk memulai hari dengan secangkir espresso berenergi, menyelesaikan pekerjaan dengan laptop, atau bercengkerama bersama sahabat di penghujung senja.
            </p>

            {/* Feature Points */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-coffee-200/60 hover:bg-white transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-coffee-950 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-coffee-700 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DevTria Feature Callout Box */}
            <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-300/70 text-coffee-950">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-500 text-coffee-950 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-amber-900 block mb-0.5">
                    💡 Tips Website DevTria untuk Pemilik Usaha:
                  </span>
                  <span className="text-coffee-800 leading-relaxed">
                    Menampilkan <em>Brand Story</em> dan asal-usul bahan baku pada landing page terbukti meningkatkan <strong>kepercayaan pelanggan hingga 67%</strong> dibanding sekadar mencantumkan daftar menu.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

