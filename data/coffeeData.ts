export interface MenuItem {
  id: string;
  name: string;
  category: 'signature' | 'coffee' | 'non-coffee' | 'pastry';
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  description: string;
  image: string;
  badge?: string;
  rating: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "kopi-susu-senja",
    name: "Kopi Susu Senja",
    category: "signature",
    categoryLabel: "Signature",
    price: 24000,
    formattedPrice: "Rp 24.000",
    description: "Perpaduan double shot espresso arabika lokal, susu segar lembut, dan sirup gula aren organik harum khas Senja.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    badge: "Favorit Pelanggan",
    rating: 4.9,
  },
  {
    id: "espresso-single-origin",
    name: "Espresso Single Origin Gayo",
    category: "coffee",
    categoryLabel: "Klasik",
    price: 22000,
    formattedPrice: "Rp 22.000",
    description: "Biji kopi Aceh Gayo proses anaerobic natural dengan acidity buah segar, body seimbang, dan aroma rempah floral.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800&auto=format&fit=crop",
    badge: "100% Arabika",
    rating: 4.8,
  },
  {
    id: "artisan-matcha-latte",
    name: "Artisan Uji Matcha Latte",
    category: "non-coffee",
    categoryLabel: "Non-Kopi",
    price: 28000,
    formattedPrice: "Rp 28.000",
    description: "Bubuk teh hijau Uji ceremonial grade berpadu dengan susu segar berbusa lembut, rasa earthy manis pas.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    badge: "Paling Populer",
    rating: 4.9,
  },
  {
    id: "croissant-butter-almond",
    name: "Croissant Butter Almond",
    category: "pastry",
    categoryLabel: "Pastry",
    price: 26000,
    formattedPrice: "Rp 26.000",
    description: "Pastry khas Prancis berlapis renyah dengan aroma French butter wangi, krim almond manis, dan taburan renyah.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    badge: "Fresh Baked",
    rating: 4.9,
  },
  {
    id: "cold-brew-berry",
    name: "Cold Brew Berry Sparkle",
    category: "signature",
    categoryLabel: "Signature",
    price: 30000,
    formattedPrice: "Rp 30.000",
    description: "Seduhan dingin kopi Flores 16 jam dengan sentuhan ekstrak strawberry lokal dan soda segar yang menyegarkan dahaga.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    badge: "Musim Ini",
    rating: 4.7,
  },
  {
    id: "salted-caramel-macchiato",
    name: "Salted Caramel Macchiato",
    category: "coffee",
    categoryLabel: "Klasik",
    price: 29000,
    formattedPrice: "Rp 29.000",
    description: "Espresso hangat disiram di atas steamed milk vanilla creamy, dihiasi lelehan saus karamel gurih homemade.",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
  },
];

export const CAFE_INFO = {
  name: "Kopi Kala",
  tagline: "Seduh Ketenangan di Setiap Cangkir",
  description:
    "Tempat persinggahan terbaik untuk menikmati kopi artisan nusantara, kudapan hangat, dan atmosfer tenang di tengah hiruk pikuk kota.",
  address: "Jl. Senja Melati No. 42, Kebayoran Baru, Jakarta Selatan 12160",
  googleMapsUrl: "https://maps.google.com/?q=Jakarta",
  hours: [
    { days: "Senin - Jumat", time: "07.30 - 22.00 WIB" },
    { days: "Sabtu - Minggu", time: "07.00 - 23.00 WIB" },
  ],
  phone: "+62 812-3456-7890",
  phoneRaw: "6281234567890",
  email: "halo@kopikala.dummy.id",
  instagram: "@kopikala.id",
  tiktok: "@kopikala.id",
};

export const DEVTRIA_INFO = {
  name: "DevTria",
  headline: "Jasa Pembuatan Website Modern untuk UMKM",
  subtext: "Didesain khusus untuk meningkatkan omzet & citra profesional bisnis Anda.",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20DevTria,%20saya%20tertarik%20membuat%20website%20seperti%20demo%20Kopi%20Kala",
  portfolioUrl: "https://github.com",
};

