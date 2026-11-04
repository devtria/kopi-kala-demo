"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { CAFE_INFO } from "@/data/coffeeData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "booking",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission for interactive demo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        purpose: "booking",
        message: "",
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-coffee-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-700 font-bold bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60">
            Hubungi & Kunjungi Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee-950 mt-3 tracking-tight">
            Kirim Pesan / Booking Tempat
          </h2>
          <p className="mt-4 text-sm sm:text-base text-coffee-700 font-light">
            Ingin reservasi meja untuk pertemuan kerja, pesan dalam jumlah banyak untuk acara kantor, atau sekadar bertanya? Kami siap menyambut Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-coffee-200/80 shadow-warm"
          >
            {/* DevTria Education Notice above form */}
            <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-coffee-900">
              <div className="flex items-start gap-2.5">
                <span className="text-base shrink-0">ℹ️</span>
                <div>
                  <strong className="font-semibold text-amber-900 block mb-0.5">
                    Uji Coba Form Kontak:
                  </strong>
                  <span className="text-coffee-800 leading-relaxed">
                    Silakan isi form di bawah ini. Sistem akan meneruskan data Anda langsung ke email Admin (simulasi interaktif).
                  </span>
                </div>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-coffee-950 mb-2">
                  Simulasi Berhasil Terkirim!
                </h3>
                <p className="text-sm text-coffee-700 max-w-md mx-auto leading-relaxed mb-6">
                  Terima kasih! Pada website produksi buatan <strong>DevTria</strong>, data formulir ini dapat langsung masuk ke email resmi Anda, Google Spreadsheet, atau pesan notifikasi otomatis via Bot Telegram/WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-coffee-900 text-stone-100 hover:bg-amber-700 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Kirim Pesan Lainnya
                </button>
              </motion.div>
            ) : (
              /*
                Catatan Pengembang:
                Pada implementasi nyata Next.js Static Export, form ini dapat menggunakan layanan gratis
                seperti Formspree, Web3Forms, atau Getform.
              */
              <form
                onSubmit={handleSubmit}
                // TODO: Insert Web3Forms/Formspree endpoint here (contoh: action="https://api.web3forms.com/submit" method="POST")
                action="https://formspree.io/f/YOUR_FORM_ID_HERE"
                method="POST"
                className="space-y-4 sm:space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-coffee-900 uppercase tracking-wider mb-1.5">
                      Nama Lengkap <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Raditya Pratama"
                      className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-coffee-50/50 text-coffee-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-coffee-900 uppercase tracking-wider mb-1.5">
                      Email Aktif <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. raditya@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-coffee-50/50 text-coffee-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-coffee-900 uppercase tracking-wider mb-1.5">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. 0812-3456-7890"
                      className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-coffee-50/50 text-coffee-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-coffee-900 uppercase tracking-wider mb-1.5">
                      Tujuan Pesan
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-coffee-50/50 text-coffee-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    >
                      <option value="booking">Reservasi Meja / Tempat</option>
                      <option value="catering">Pesanan Acara / Catering</option>
                      <option value="collaboration">Kerjasama / Kolaborasi</option>
                      <option value="other">Tanya Menu / Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-coffee-900 uppercase tracking-wider mb-1.5">
                    Pesan Anda <span className="text-amber-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan tanggal reservasi, jumlah orang, atau pertanyaan Anda..."
                    className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-coffee-50/50 text-coffee-950 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-stone-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-coffee-900 hover:bg-amber-600 text-stone-100 font-semibold text-sm transition-all duration-200 shadow-warm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mengirim data...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Cafe Info & Location Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Box */}
            <div className="bg-coffee-900 text-stone-100 rounded-3xl p-6 sm:p-8 shadow-warm-lg border border-amber-600/30">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Informasi Kedai
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Alamat Kami</h4>
                    <p className="text-stone-300 mt-0.5 leading-relaxed">
                      {CAFE_INFO.address}
                    </p>
                    <a
                      href={CAFE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium mt-1.5"
                    >
                      Buka Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Jam Operasional</h4>
                    {CAFE_INFO.hours.map((h, i) => (
                      <div key={i} className="text-stone-300 text-xs sm:text-sm mt-0.5">
                        <span className="font-medium text-amber-200">{h.days}:</span> {h.time}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Telepon / WhatsApp</h4>
                    <p className="text-stone-300 mt-0.5">{CAFE_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email Resmi</h4>
                    <p className="text-stone-300 mt-0.5">{CAFE_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Visual Preview Card */}
            <div className="bg-white rounded-3xl p-4 border border-coffee-200/80 shadow-sm overflow-hidden">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-coffee-200">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77d61?q=80&w=800&auto=format&fit=crop"
                  alt="Lokasi Kopi Kala Kebayoran Baru"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-coffee-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
                  <div className="p-2.5 rounded-full bg-amber-500 text-coffee-950 shadow-md mb-2">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-white text-sm">Kopi Kala Jakarta</span>
                  <span className="text-[11px] text-stone-200 mb-3">Kebayoran Baru, Jakarta Selatan</span>
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-coffee-950 text-xs font-semibold hover:bg-stone-100 transition-colors shadow-sm"
                  >
                    Petunjuk Arah <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

