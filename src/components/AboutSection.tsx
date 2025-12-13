"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/whoareu.jpg"
              alt="Team meeting at GrowLium Digital  "
              width={600}
              height={400}
              className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h2 className="text-blue-500 text-xl font-semibold mb-2">
            Who We Are
          </h2>
          <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome To GrowLium Digital
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-base">
            GrowLium Digital is a B2B Revenue Acceleration Partner
            specializing in precision lead generation and high-conversion
            appointment setting. We utilize advanced Business Intelligence to
            identify and engage ideal decision-makers through hyper-personalized outreach.
            We don't deliver leads; we deliver Qualified Sales Opportunities (QSOs),
            ensuring predictable and scalable revenue growth. Partner with us for transparent,
            performance-driven RevOps alignment.
          </p>
          {/* Button */}
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-lg font-medium border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
          >
            Know More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
