// src/components/RegionsWeServe.tsx
"use client";

import { motion } from "framer-motion";
import { Globe, Mail, Clock } from "lucide-react";

const regions = [
  { name: "North America", description: "USA, Canada, Mexico" },
  { name: "EMEA", description: "Europe, Middle East, Africa" },
  { name: "APAC", description: "Asia Pacific Region" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as any;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
} as any;

export default function RegionsWeServe() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* World Map with Overlay Cards */}
        <div className="relative w-full max-w-6xl mx-auto mb-8">
          {/* World Map Background */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/world_map.jpg"
              alt="World Map"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better card visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>

            {/* Header Overlay */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute top-1 left-0 right-0 text-center z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                Regions We Serve
              </h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full"></div>
              <p className="text-white/90 mt-4 max-w-2xl mx-auto font-bold text-lg drop-shadow-md px-4">
                We deliver exceptional B2B services across three major regions worldwide
              </p>
            </motion.div>

            {/* Regions Cards Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
                {regions.map((region, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 h-full flex flex-col items-center text-center hover:bg-white/20">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                        {region.name}
                      </h3>
                      <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                        {region.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Information Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <a
                  href="mailto:growliumdigital@gmail.com"
                  className="text-white hover:text-blue-50 transition-colors duration-300 text-sm"
                >
                  growliumdigital@gmail.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start space-x-4 group">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                <p className="text-blue-100 text-sm">
                  Monday to Friday<br />
                  09:00 AM – 05:00 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
