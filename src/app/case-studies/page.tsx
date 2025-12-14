'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

type CaseStudy = {
    id: number;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
    metrics: {
        label: string;
        value: string;
        icon: any;
    }[];
};

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Transforming B2B Sales for a SaaS",
        client: "TechFlow Solutions",
        industry: "ISV & Telecom",
        challenge: "TechFlow struggled to reach decision-makers in enterprise companies, resulting in a stagnant sales pipeline and missed revenue targets.",
        solution: "We implemented a targeted ABM campaign focusing on C-level executives, combining personalized email outreach with LinkedIn engagement and strategic follow-ups.",
        results: [
            "Generated 150+ qualified leads in 3 months",
            "Booked 45 sales meetings with enterprise clients",
            "Achieved 32% conversion rate from meeting to opportunity",
            "Increased pipeline value by $2.5M"
        ],
        image: "/images/blog-b2b.png",
        metrics: [
            { label: "Leads Generated", value: "150+", icon: Users },
            { label: "Meetings Booked", value: "45", icon: Target },
            { label: "Conversion Rate", value: "32%", icon: TrendingUp },
            { label: "Pipeline Value", value: "$2.5M", icon: Award }
        ]
    },
    {
        id: 2,
        title: "Scaling Lead Generation for Financial Services",
        client: "Capital Growth Partners",
        industry: "BFSI",
        challenge: "A mid-sized financial advisory firm needed to expand their client base but lacked the resources and expertise for effective outbound lead generation.",
        solution: "We deployed a dedicated team to execute multi-channel outreach campaigns, focusing on high-net-worth individuals and business owners seeking financial planning services.",
        results: [
            "200+ qualified prospects identified",
            "65 appointments set with qualified leads",
            "28 new clients acquired within 6 months",
            "ROI of 340% on lead generation investment"
        ],
        image: "/images/blog-lead.png",
        metrics: [
            { label: "Prospects", value: "200+", icon: Users },
            { label: "Appointments", value: "65", icon: Target },
            { label: "New Clients", value: "28", icon: Award },
            { label: "ROI", value: "340%", icon: TrendingUp }
        ]
    },
    {
        id: 3,
        title: "Accelerating Growth for Healthcare Technology",
        client: "MedTech Innovations",
        industry: "Healthcare & Pharma",
        challenge: "A healthcare technology startup needed to penetrate a competitive market and establish relationships with hospital administrators and healthcare providers.",
        solution: "We created a comprehensive outreach strategy combining educational content, personalized messaging, and persistent follow-up to build trust and credibility in the healthcare sector.",
        results: [
            "120 qualified healthcare decision-makers engaged",
            "38 product demonstrations scheduled",
            "15 pilot programs initiated",
            "Annual recurring revenue increased by $1.8M"
        ],
        image: "/images/blog-kpi.png",
        metrics: [
            { label: "Decision-Makers", value: "120", icon: Users },
            { label: "Demos", value: "38", icon: Target },
            { label: "Pilot Programs", value: "15", icon: Award },
            { label: "ARR Increase", value: "$1.8M", icon: TrendingUp }
        ]
    }
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

export default function CaseStudiesPage() {
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
                    <Award className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Case Studies</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
                        Real results from real clients across industries
                    </p>
                </motion.div>
            </div>

            {/* Case Studies */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    className="space-y-16 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {caseStudies.map((study, index) => (
                        <motion.article
                            key={study.id}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                {/* Image */}
                                <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6">
                                        <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                                            {study.industry}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 lg:p-10">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                                    <p className="text-blue-600 font-semibold mb-6">Client: {study.client}</p>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Challenge</h3>
                                            <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Solution</h3>
                                            <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">Results</h3>
                                            <ul className="space-y-2">
                                                {study.results.map((result, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-blue-600 mr-2">✓</span>
                                                        <span className="text-gray-600">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        {study.metrics.map((metric, idx) => {
                                            const Icon = metric.icon;
                                            return (
                                                <div key={idx} className="bg-blue-50 rounded-xl p-4 text-center">
                                                    <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                                                    <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 text-white shadow-2xl max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
                    <p className="text-blue-100 mb-6 text-lg">
                        Let's discuss how we can help grow your business
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                    >
                        Get Started
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
