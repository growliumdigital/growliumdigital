"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function Contact({ title, description, image }: Props) {
  return (
    <section className="relative py-24 lg:py-32 flex flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${image || "/images/contact.jpg"}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8 rounded-full" />

          <p className="text-blue-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <MessageSquare className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
