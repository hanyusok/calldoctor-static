"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClinicIntro from "@/components/ClinicIntro";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import VideoGuide from "@/components/VideoGuide";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ClinicIntro />
      <Features />
      <HowItWorks />
      <Location />
      <VideoGuide />
      <FAQ />
      <Footer />
    </main>
  );
}
