'use client';

import { motion } from 'framer-motion';
import { Lightbulb, MessageSquare, Mail, Target, TrendingUp, Award, Compass, Zap, Heart, Rocket, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const valuePropositions = [
    {
        icon: Lightbulb,
        title: "Industry Insight & Expertise",
        description: "Deep understanding of your industry landscape, market trends, and competitive dynamics to position your offerings effectively"
    },
    {
        icon: MessageSquare,
        title: "Consistent Communication & Collaboration",
        description: "Seamless integration with your team through regular updates, transparent reporting, and aligned communication channels"
    },
    {
        icon: Mail,
        title: "Personalized Messaging & Outreach",
        description: "Tailored communication strategies that resonate with your target audience and reflect your brand voice"
    },
    {
        icon: Target,
        title: "Focused Campaign Execution",
        description: "Dedicated attention to your campaigns with strategic planning and meticulous execution for maximum impact"
    },
    {
        icon: TrendingUp,
        title: "Performance-Driven Results",
        description: "Data-backed approach with continuous optimization to deliver measurable outcomes and ROI"
    },
    {
        icon: Award,
        title: "Exclusive Project Focus",
        description: "Undivided attention to your business goals without competing priorities or resource dilution"
    },
    {
        icon: Compass,
        title: "Strategic Market Positioning",
        description: "Expert guidance on positioning your solutions to stand out in competitive markets"
    },
    {
        icon: Zap,
        title: "Rapid Response & Agility",
        description: "Quick adaptation to market changes and feedback with flexible resource allocation"
    },
    {
        icon: Heart,
        title: "Cultural Alignment",
        description: "Team members who understand and embody your company culture and values"
    },
    {
        icon: Rocket,
        title: "Continuous Learning & Improvement",
        description: "Ongoing training and skill development to stay ahead of industry best practices"
    }
];

export default function ValuePropositionsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
                    className="relative z-10 text-center px-4"
                >
                    <Award className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        The Value of Full-Time Resource Deployment
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Accelerating Your Business Growth Through Dedicated Expertise
                    </p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <Link
                        href="/engagement/full-time-resource"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Full-Time Resource Deployment
                    </Link>
                </motion.div>

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Comprehensive Value Propositions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover all the ways our full-time resource deployment model delivers exceptional value to your business. Each proposition represents our commitment to your success.
                    </p>
                </motion.div>

                {/* All Value Propositions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {valuePropositions.map((proposition, index) => {
                        const Icon = proposition.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 6) * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100/50 group"
                            >
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {proposition.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {proposition.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience These Benefits?</h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Let's discuss how our full-time resources can deliver these value propositions to accelerate your business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-blue  to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Schedule a Consultation
                        </a>
                        <Link
                            href="/engagement/full-time-resource"
                            className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                            Learn More About Our Model
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
