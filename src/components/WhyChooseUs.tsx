// src/components/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch max-w-6xl mx-auto">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 rounded-2xl shadow-2xl h-full flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Growth Partner in B2B Lead Generation
            </h2>
            <p className="mb-8 text-base opacity-95 leading-relaxed">
              At GrowLium Digital  , we combine a B2B sales mindset through technology
              to drive faster, smarter growth. Our team delivers high-quality,
              verified leads through hyper-targeted outreach and works as an
              extension of your sales force with full transparency. With
              flexible engagement models, we're your reliable partner for
              scalable, results-driven success.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start space-x-4 mb-6 group">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Proven B2B Expertise</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  With years of experience in lead generation and appointment
                  setting, we understand what works for B2B sales — and we
                  deliver it.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 group">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Flexible Engagement Models
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Choose a dedicated team or a pay-per-meeting model that suits
                  your budget and growth plan.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full group">
              <Image
                src="/images/growth_partner_b2b.png"
                alt="Your Trusted Growth Partner in B2B Lead Generation"
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
