"use client";

import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080812] overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <AnnouncementBanner />
        <Navbar />
      </div>
      <HeroSection />
      <Services />
      <ProcessTimeline />
      <Portfolio />
      <WhyChooseUs />
      <LeadForm />
      <Footer />
    </main>
  );
}
