# Kopi Kala — Website Demo Portofolio UMKM (by DevTria)

Website landing page modern, elegan, dan berkinerja tinggi untuk bisnis coffee shop & artisan roastery **"Kopi Kala"**. Didesain oleh tim **DevTria** sebagai portofolio interaktif untuk mendemonstrasikan ke calon klien UMKM betapa profesional dan efektifnya website kustom berbasis Next.js.

Proyek ini 100% mendukung **Static Site Generation (SSG)** sehingga siap di-deploy ke **GitHub Pages**, Vercel, Netlify, maupun Cloudflare Pages.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) dengan palet warna natural kopi kustom (*Espresso, Amber, Cream, Stone*)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: GitHub Pages via GitHub Actions (`output: 'export'`)

---

## 📁 Struktur Direktori

```text
kopi-kala-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Otomatisasi GitHub Actions deployment ke Pages
├── app/
│   ├── globals.css             # Konfigurasi Tailwind, font variable, dan custom scrollbar
│   ├── layout.tsx              # Root Layout, font Google (Plus Jakarta Sans & Playfair Display)
│   └── page.tsx                # Halaman utama (Single Page Application)
├── components/
│   ├── DemoBanner.tsx          # Sticky bar atas penanda demo DevTria
│   ├── Navbar.tsx              # Navigasi responsif (Desktop & Drawer Mobile)
│   ├── Hero.tsx                # Hero section estetik dengan CTA WhatsApp & Menu
│   ├── FeaturedMenu.tsx        # Katalog menu unggulan, filter kategori, tooltip edukasi POS
│   ├── AboutSection.tsx        # Split layout kisah biji kopi nusantara & brand story
│   ├── ContactSection.tsx      # Form reservasi statik (siap integrasi Web3Forms/Formspree)
│   ├── Footer.tsx              # Info jam operasional, sosmed, dan banner promo DevTria
│   └── FloatingWhatsApp.tsx    # Tombol WhatsApp melayang di kanan bawah
├── data/
│   └── coffeeData.ts           # Data dummy realistis (mudah diedit tanpa sentuh UI)
├── public/
│   └── .nojekyll               # Mencegah GitHub Pages mengabaikan folder _next
├── next.config.mjs             # Konfigurasi output: 'export' & unoptimized images
├── tailwind.config.ts          # Custom color palette 'coffee', font family, dan shadows
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json
```

---

## 🛠️ Cara Menjalankan Secara Lokal

Pastikan Anda telah menginstal [Bun](https://bun.sh/) atau [Node.js](https://nodejs.org/).

```bash
# 1. Jalankan development server
bun dev
# atau: npm run dev / pnpm dev

# 2. Buka browser di http://localhost:3000
```

---

## 📦 Cara Build Statis (SSG untuk GitHub Pages)

```bash
bun run build
# atau: npm run build
```

Hasil build akan berada di direktori `./out` dan siap di-host di server statis mana pun.

