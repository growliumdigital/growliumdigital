'use client';

import { motion } from 'framer-motion';
import IndustriesWeWorkWith from '@/components/IndustriesWeWorkWith';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import RegionsWeServe from '@/components/RegionsWeServe';
import MissionVisionSection from '@/components/MissionVisionSection';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-80 flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-600/70"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Empowering businesses with innovative B2B lead generation solutions
          </p>
        </motion.div>
      </div>

      <AboutSection />
      <WhyChooseUs />
      <MissionVisionSection />
      <IndustriesWeWorkWith />
      <RegionsWeServe />
    </div>
  );
}