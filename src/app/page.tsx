"use client";

import HeroSection from "@/components/hero-section";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeWorkWith from "@/components/IndustriesWeWorkWith";
import TrustedByBusinesses from "@/components/TrustedByBusinesses";
import RegionsWeServe from "@/components/RegionsWeServe";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection limit={3} />
      <WhyChooseUs />
      <IndustriesWeWorkWith />
      <TrustedByBusinesses />
      <RegionsWeServe />
    </main>
  );
}
