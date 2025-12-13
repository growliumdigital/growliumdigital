'use client';

import { motion } from 'framer-motion';
import { Users, Clock, Target, CheckCircle, TrendingUp, Shield, Lightbulb, MessageSquare, Mail, Zap, Award, Rocket, Compass, Gauge, Heart } from 'lucide-react';
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

const benefits = [
    {
        icon: Users,
        title: "Dedicated Team",
        description: "A full-time team exclusively focused on your business goals and growth objectives"
    },
    {
        icon: Clock,
        title: "Consistent Availability",
        description: "Your team is available during your business hours for seamless collaboration"
    },
    {
        icon: Target,
        title: "Deep Market Knowledge",
        description: "Team members develop expertise in your industry, products, and target market"
    },
    {
        icon: TrendingUp,
        title: "Scalable Growth",
        description: "Easily scale your team up or down based on business needs and market demands"
    },
    {
        icon: Shield,
        title: "Quality Control",
        description: "Consistent quality standards with dedicated resources trained to your specifications"
    },
    {
        icon: CheckCircle,
        title: "Long-term Partnership",
        description: "Build lasting relationships with team members who understand your business inside out"
    }
];

const features = [
    "Dedicated SDRs (Sales Development Representatives)",
    "Custom training on your products and services",
    "Integration with your CRM and sales tools",
    "Regular performance reviews and optimization",
    "Direct communication channels with your team",
    "Flexible team size based on your requirements"
];

export default function FullTimeResourcePage() {
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
                    className="relative z-10 text-center"
                >
                    <Users className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Full Time Resource Deployment</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
                        Dedicated teams working exclusively for your business growth
                    </p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Your Extended Sales Team
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our Full Time Resource Deployment model provides you with dedicated sales development representatives who work exclusively on your campaigns. This model is ideal for businesses looking for consistent, long-term support with deep integration into their sales processes.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                                    <Icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-10 text-white shadow-2xl mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                                <span className="text-lg">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Value Propositions Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                        The Value of Full-Time Resource Deployment for Accelerating Your Business Growth
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                        Discover how dedicated resources can transform your business outcomes through strategic focus and expertise
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {valuePropositions.slice(0, 6).map((proposition, index) => {
                            const Icon = proposition.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
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

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link
                            href="/engagement/full-time-resource/value-propositions"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            style={{ color: 'white' }}
                        >
                            <span className="text-white">View More Value Propositions</span>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Dedicated Team?</h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Let's discuss how our full-time resources can accelerate your sales growth and help you achieve your business goals.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ color: 'white' }}
                    >
                        <span className="text-white">Schedule a Consultation</span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
