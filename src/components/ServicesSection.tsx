// src/components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Target, CalendarCheck, Magnet, Phone, TrendingUp } from "lucide-react";

const services = [
  {
    id: "sales-meeting-setup",
    title: "Sales Meeting Setup",
    description:
      "We book qualified meetings so your team can focus on closing deals.",
    icon: <Users className="w-8 h-8 text-blue-500" />,
    details:
      "We book qualified meetings so your team can focus on closing deals.",
  },
  {
    id: "account-based",
    title: "Account-Based Marketing (ABM)",
    description:
      "Target high-value accounts with personalized outreach for maximum impact.",
    icon: <Target className="w-8 h-8 text-blue-500" />,
    details:
      "Target high-value accounts with personalized outreach for maximum impact.",
  },
  {
    id: "b2b-setting",
    title: "B2B Appointment Setting",
    description:
      "Book sales-ready appointments with decision-makers in your target market.",
    icon: <CalendarCheck className="w-8 h-8 text-blue-500" />,
    details:
      "Book sales-ready appointments with decision-makers in your target market.",
  },
  {
    id: "b2b-lead",
    title: "B2B Lead Generation",
    description:
      "We deliver high-intent leads that match your target market and fuel your pipeline.",
    icon: <Magnet className="w-8 h-8 text-blue-500" />,
    details:
      "We deliver high-intent leads that match your target market and fuel your pipeline.",
  },
  {
    id: "inside-sales",
    title: "Inside Sales",
    description:
      "Scalable remote sales teams that act as an extension of your business.",
    icon: <Phone className="w-8 h-8 text-blue-500" />,
    details:
      "Scalable remote sales teams that act as an extension of your business to close more deals.",
  },
  {
    id: "sales-development",
    title: "Sales Development",
    description:
      "Build a predictable pipeline with dedicated SDRs and proven methodologies.",
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    details:
      "Build a predictable pipeline with dedicated SDRs and proven methodologies.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as any;

interface ServicesSectionProps {
  limit?: number;
}

export default function ServicesSection({ limit }: ServicesSectionProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We offer a full suite of B2B sales and marketing services to boost
            your pipeline.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="perspective-1000 h-60 group cursor-pointer"
            >
              <div className="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-180 shadow-xl rounded-2xl">
                {/* Front Face */}
                <div className="absolute inset-0 bg-white rounded-2xl p-5 backface-hidden flex flex-col items-center justify-center text-center border border-gray-100">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl p-5 backface-hidden rotate-y-180 flex flex-col items-center justify-center text-center shadow-2xl">
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-xs leading-relaxed mb-5 opacity-90">
                    {service.details}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center px-5 py-2 text-xs font-medium bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 text-lg font-medium border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              View More Services
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
