'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Zap, Award, BarChart } from 'lucide-react';

const benefits = [
    {
        icon: DollarSign,
        title: "Pay for Results",
        description: "Only pay for qualified meetings that actually take place - no wasted budget on unqualified leads"
    },
    {
        icon: Target,
        title: "Risk-Free Approach",
        description: "Minimal upfront investment with costs directly tied to measurable outcomes"
    },
    {
        icon: Zap,
        title: "Fast ROI",
        description: "See immediate return on investment as you only pay for meetings that convert"
    },
    {
        icon: TrendingUp,
        title: "Scalable Solution",
        description: "Easily scale your investment up or down based on performance and business needs"
    },
    {
        icon: Award,
        title: "Quality Focused",
        description: "We're incentivized to deliver only the highest quality meetings that match your criteria"
    },
    {
        icon: BarChart,
        title: "Transparent Metrics",
        description: "Clear, measurable results with full visibility into meeting quality and conversion rates"
    }
];

const howItWorks = [
    {
        step: "1",
        title: "Define Your Ideal Customer",
        description: "We work with you to create detailed criteria for qualified meetings including industry, company size, job titles, and pain points."
    },
    {
        step: "2",
        title: "Campaign Execution",
        description: "Our team executes multi-channel outreach campaigns to identify and engage prospects matching your criteria."
    },
    {
        step: "3",
        title: "Meeting Qualification",
        description: "Each prospect is thoroughly vetted to ensure they meet your requirements before a meeting is scheduled."
    },
    {
        step: "4",
        title: "Pay Only for Meetings",
        description: "You're charged only when a qualified meeting takes place with a decision-maker from your target market."
    }
];

export default function PerformanceBasedPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Banner */}
            <div className="relative h-80 flex items-center justify-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/contact.jpg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-600/70"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center"
                >
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Performance Based Model</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
                        Pay only for qualified meetings that drive real results
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
                        Results-Driven Lead Generation
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our Performance Based Model (Pay-Per-Meeting) is perfect for businesses that want to minimize risk and maximize ROI. You only pay when we deliver qualified sales meetings with decision-makers who match your ideal customer profile.
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

                {/* How It Works */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {howItWorks.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Partners Choose GrowLium Digital Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                        Why Partners Choose GrowLium Digital
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                        Our outreach knows no bounds—spanning unlimited contacts and companies. Our expert analysts manage the entire cadence, while you guide the Lead Qualification Process (LQP) and shape the sales narrative to ensure alignment with your goals.
                    </p>

                    <div className="space-y-12">
                        {/* Feature 1 - Unlimited Access */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        >
                            <div className="order-2 lg:order-1">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <Target className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Unlimited Access to Targeted Contacts
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Connect with relevant, up-to-date B2B contacts tailored to your market. Our comprehensive database ensures you never run out of qualified prospects.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <img
                                        src="/images/unlimited-contacts.png"
                                        alt="Unlimited Access to Targeted Contacts"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Feature 2 - Flexible Campaign */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        >
                            <div className="order-1">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <img
                                        src="/images/flexible-campaigns.png"
                                        alt="Flexible Campaign Deployment"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </div>
                            <div className="order-2">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Flexible Campaign Deployment
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Run 4–6 personalized campaigns per retainer to maximize outreach. Each campaign is tailored to specific segments of your target audience for optimal engagement.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature 3 - Prospect Intelligence */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        >
                            <div className="order-2 lg:order-1">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <BarChart className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        In-Depth Prospect Intelligence
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Access detailed client profiles to craft smarter, more effective messaging. Our intelligence platform provides comprehensive insights into prospect behavior, needs, and pain points.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <img
                                        src="/images/prospect-intelligence.png"
                                        alt="In-Depth Prospect Intelligence"
                                        className="w-full h-auto"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Pricing Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-10 text-white shadow-2xl mb-16 text-center"
                >
                    <DollarSign className="w-16 h-16 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                        Pay a fixed fee per qualified meeting. No hidden costs, no long-term contracts, no risk.
                    </p>
                    <p className="text-lg opacity-90">
                        Pricing varies based on your industry and target market complexity. Contact us for a customized quote.
                    </p>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Pay Only for Results?</h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Start generating qualified meetings with zero upfront risk. Let's discuss how our performance-based model can work for your business.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Get Started Today
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
