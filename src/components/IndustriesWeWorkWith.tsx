"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  ShoppingBag,
  Server,
  Plane,
  Factory,
  Building,
  HeartPulse,
  Film,
} from "lucide-react";

const industries = [
  {
    title: "BFSI",
    icon: <Landmark className="w-8 h-8 text-white" />,
    description:
      "We help banks and fintechs grow by connecting them with clients and enhancing their digital presence.",
  },
  {
    title: "Retail & CPG",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    description:
      "We help retail and CPG companies build strong partnerships and streamline supply chains in a dynamic market.",
  },
  {
    title: "ISV & Telecom",
    icon: <Server className="w-8 h-8 text-white" />,
    description:
      "We help ISVs and telecom providers grow by connecting them with businesses through smart software and connectivity.",
  },
  {
    title: "Travel & Hospitality",
    icon: <Plane className="w-8 h-8 text-white" />,
    description:
      "We connect travel and hospitality businesses with decision-makers seeking solutions to improve guest experiences and streamline operations.",
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-8 h-8 text-white" />,
    description:
      "We help manufacturers build strong client, supplier, and partner connections to boost efficiency and long-term growth.",
  },
  {
    title: "Construction & Real Estate",
    icon: <Building className="w-8 h-8 text-white" />,
    description:
      "We help construction and real estate firms reach key decision-makers and drive strategic growth.",
  },
  {
    title: "Healthcare & Pharma",
    icon: <HeartPulse className="w-8 h-8 text-white" />,
    description:
      "We connect healthcare and pharma companies with key partners to expand reach and enhance patient outcomes.",
  },
  {
    title: "Media & Entertainment",
    icon: <Film className="w-8 h-8 text-white" />,
    description:
      "We help media companies attract advertisers and distributors to stay ahead of trends and reach new audiences.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
} as any;

export default function IndustriesWeWorkWith() {
  return (
    <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Work With
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group cursor-pointer"
            >
              {/* Icon Container */}
              <div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto
                              shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 transform group-hover:rotate-3"
              >
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
