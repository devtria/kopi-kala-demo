import React from "react";
import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-coffee-50 text-coffee-900 selection:bg-amber-200 selection:text-coffee-950">
      {/* 1. Sticky Demo Banner at the very top */}
      <DemoBanner />

      {/* 2. Responsive Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section with warm atmosphere and CTAs */}
      <Hero />

      {/* 4. Featured Menu Cards with DevTria POS Tooltip & Category Filters */}
      <FeaturedMenu />

      {/* 5. About Us / Brand Story & Coffee Bean Origin Split Section */}
      <AboutSection />

      {/* 6. Contact & Interactive Simulated Booking Form */}
      <ContactSection />

      {/* 7. Comprehensive Footer & DevTria Promotional Banner */}
      <Footer />

      {/* 8. Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}

