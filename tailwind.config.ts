import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#FAF7F2",
          100: "#F4EFE6",
          200: "#E7DAC8",
          300: "#D2BEA0",
          400: "#B59975",
          500: "#97744D",
          600: "#7A5835",
          700: "#5F4125",
          800: "#442E1B",
          900: "#2C1D11",
          950: "#1A110A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(95, 65, 37, 0.15)',
        'warm-lg': '0 20px 40px -15px rgba(44, 29, 17, 0.25)',
      }
    },
  },
  plugins: [],
};

export default config;

