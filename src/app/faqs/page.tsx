'use client';

import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

type FAQ = {
    id: number;
    question: string;
    answer: string;
    category: string;
};

const faqs: FAQ[] = [
    {
        id: 1,
        question: "What services does GrowLium Digital offer?",
        answer: "GrowLium Digital specializes in B2B lead generation, appointment setting, account-based marketing (ABM), and sales meeting setup. We help businesses connect with decision-makers and grow their sales pipeline through targeted outreach strategies.",
        category: "Services"
    },
    {
        id: 2,
        question: "What is a sales-qualified meeting (SQM)?",
        answer: "A sales-qualified meeting (SQM) is a scheduled appointment with a prospect who has been thoroughly vetted and meets your ideal customer profile criteria. These prospects have expressed genuine interest in your solution, have the authority to make purchasing decisions, and have a clear need or pain point that your product/service can address. SQMs are ready for your sales team to engage in meaningful conversations.",
        category: "Process"
    },
    {
        id: 3,
        question: "How does your lead generation process work?",
        answer: "Our process involves identifying your ideal customer profile, researching and verifying prospects, crafting personalized outreach campaigns, and nurturing leads until they're ready for your sales team. We use a combination of email, LinkedIn, and phone outreach to maximize results.",
        category: "Process"
    },
    {
        id: 4,
        question: "What industries do you serve?",
        answer: "We work across multiple industries including BFSI, Retail & CPG, ISV & Telecom, Travel & Hospitality, Manufacturing, Construction & Real Estate, Healthcare & Pharma, and Media & Entertainment. Our team has experience tailoring strategies for each sector's unique needs.",
        category: "Services"
    },
    {
        id: 5,
        question: "How long does it take to start seeing results?",
        answer: "Typically, clients start seeing qualified leads within 2-4 weeks of campaign launch. However, the timeline can vary based on your industry, target audience, and campaign complexity. We provide regular updates and optimize campaigns for continuous improvement.",
        category: "Results"
    },
    {
        id: 6,
        question: "How is GrowLium Digital different from other lead generation companies?",
        answer: "We combine deep B2B expertise with cutting-edge technology and a transparent approach. Our team acts as an extension of your sales force, providing full visibility into our processes and results. We focus on quality over quantity, delivering leads that convert. Unlike competitors, we offer personalized strategies, multi-channel outreach, and dedicated account management to ensure your success.",
        category: "Company"
    },
    {
        id: 7,
        question: "Do you offer Pay-Per-Lead or Retainer-based engagement models?",
        answer: "Yes! We offer flexible engagement models to suit your business needs. Our Pay-Per-Meeting model allows you to pay only for qualified meetings booked, while our Retainer-based model provides a dedicated team working exclusively on your campaigns. We'll help you choose the best option based on your budget, growth goals, and sales cycle.",
        category: "Pricing"
    },
    {
        id: 8,
        question: "How do you ensure lead quality?",
        answer: "We use a multi-step verification process including data validation, prospect research, and qualification criteria alignment. Every lead is vetted against your ideal customer profile before being passed to your sales team. We also implement continuous feedback loops to refine our targeting and improve quality over time.",
        category: "Quality"
    },
    {
        id: 9,
        question: "Do you provide the contact data, or do we need to share it?",
        answer: "We provide all contact data as part of our service. Our team conducts comprehensive research to build targeted prospect lists based on your ideal customer profile. However, if you have existing data or specific accounts you'd like us to target, we can incorporate that into our campaigns as well.",
        category: "Process"
    },
    {
        id: 10,
        question: "Can you target specific geographies or industries?",
        answer: "Absolutely! We specialize in highly targeted campaigns. You can specify exact geographies (countries, states, cities), industries, company sizes, job titles, and other criteria. Our advanced targeting capabilities ensure we reach the right decision-makers in your target market, whether that's a specific region or multiple global markets.",
        category: "Services"
    },
    {
        id: 11,
        question: "What happens if a meeting is cancelled or doesn't show up?",
        answer: "We understand that no-shows happen. For our Pay-Per-Meeting model, you only pay for meetings that actually occur. If a prospect cancels or doesn't show up, we'll work to reschedule or replace that meeting at no additional cost. Our goal is to deliver value, not just bookings.",
        category: "Pricing"
    },
    {
        id: 12,
        question: "How do you generate leads?",
        answer: "We use a multi-channel approach combining email outreach, LinkedIn engagement, and strategic phone calls. Our process includes: 1) Building targeted prospect lists, 2) Crafting personalized messaging based on prospect research, 3) Executing coordinated outreach campaigns, 4) Nurturing responses and qualifying leads, and 5) Scheduling meetings with your sales team. We continuously optimize based on performance data.",
        category: "Process"
    },
    {
        id: 13,
        question: "Do you support multi-channel outreach (LinkedIn, calls, etc.)?",
        answer: "Yes! We believe in a multi-channel approach for maximum effectiveness. Our campaigns typically combine email, LinkedIn (connection requests, InMail, engagement), and phone calls. This multi-touch strategy increases response rates and helps build relationships with prospects across their preferred communication channels.",
        category: "Services"
    },
    {
        id: 14,
        question: "What is your pricing structure?",
        answer: "We offer two main pricing models: 1) Pay-Per-Meeting: You pay a fixed fee for each qualified meeting we book with your target prospects. 2) Monthly Retainer: A dedicated team works on your campaigns with a monthly fee based on scope and volume. Pricing varies based on your industry, target market complexity, and campaign requirements. Contact us for a customized quote tailored to your needs.",
        category: "Pricing"
    },
    {
        id: 15,
        question: "Is there a minimum commitment or contract length?",
        answer: "We typically recommend a minimum 3-month engagement to allow sufficient time for campaign optimization and meaningful results. However, we offer flexible terms and can discuss options that work for your specific situation. Our goal is to build long-term partnerships, not lock you into rigid contracts.",
        category: "Pricing"
    },
    {
        id: 16,
        question: "Is your database GDPR and CAN-SPAM compliant?",
        answer: "Yes, absolutely. We take data privacy and compliance very seriously. All our outreach campaigns are fully compliant with GDPR, CAN-SPAM, and other relevant data protection regulations. We use opt-in data sources, provide clear unsubscribe options, and maintain strict data security protocols to protect both your business and your prospects.",
        category: "Compliance"
    },
    {
        id: 17,
        question: "How do we get started with GrowLium Digital  ?",
        answer: "Getting started is simple: 1) Schedule a consultation call to discuss your goals and target market, 2) We'll create a customized strategy and proposal, 3) Once approved, we'll onboard your team and set up campaigns, 4) Launch campaigns and start generating qualified meetings within 2-4 weeks. Contact us today to schedule your free consultation!",
        category: "Getting Started"
    }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQsPage() {
    const [openId, setOpenId] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredFAQs = selectedCategory === "All"
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory);

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
                    <HelpCircle className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Frequently Asked Questions</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
                        Find answers to common questions about our services
                    </p>
                </motion.div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-3 justify-center mb-12"
                >
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === "All"
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                >
                    {filteredFAQs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="flex-1">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                                        {faq.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-blue-600 flex-shrink-0 ml-4 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openId === faq.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-5"
                                >
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 text-white shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-blue-100 mb-6 text-lg">
                        Our team is here to help. Get in touch with us today.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
