"use client";

import { motion, Variants } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        },
    };

    return (
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Mission Card */}
                    <motion.div
                        className="flex-1 relative group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={cardVariants}
                    >
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-10"></div>
                        <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-10 h-10 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                                Our Mission
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To empower businesses with innovative digital solutions that drive
                                growth, enhance efficiency, and create lasting value for our
                                clients and their customers.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className="flex-1 relative group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            ...cardVariants,
                            visible: {
                                ...cardVariants.visible,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    duration: 0.6,
                                    delay: 0.2
                                }
                            } as any
                        }}
                    >
                        <div className="absolute inset-0 bg-purple-500 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 opacity-10"></div>
                        <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-10 h-10 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                                Our Vision
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To be a leading global partner in digital transformation,
                                recognized for our excellence, integrity, and commitment to
                                shaping a future where technology seamlessly serves human
                                potential.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
