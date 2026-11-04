import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kopi Kala | Seduh Ketenangan di Setiap Cangkir",
  description:
    "Nikmati kopi artisan nusantara dan suasana hangat di tengah kota. Website demo interaktif UMKM kafe modern karya tim DevTria.",
  keywords: [
    "Kopi Kala",
    "Coffee Shop",
    "Kafe Estetik",
    "Jasa Website UMKM",
    "DevTria",
    "Website Portofolio",
  ],
  authors: [{ name: "DevTria Team" }],
  openGraph: {
    title: "Kopi Kala - Artisan Coffee Shop (Demo by DevTria)",
    description:
      "Website portofolio interaktif untuk mendemonstrasikan keunggulan website UMKM modern karya DevTria.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <body className="bg-coffee-50 text-coffee-900 font-sans antialiased selection:bg-coffee-300 selection:text-coffee-950">
        {children}
      </body>
    </html>
  );
}

