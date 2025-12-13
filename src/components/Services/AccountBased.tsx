"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Users,
  Mail,
  BarChart3,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  Zap,
  Building2,
  UserCheck
} from "lucide-react";
import Contact from "../Contact";

const processSteps = [
  {
    icon: Building2,
    title: "Account Selection & Research",
    description: "We identify and prioritize high-value target accounts that match your ideal customer profile, conducting deep research on company structure, pain points, and buying signals.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Stakeholder Mapping",
    description: "Map all key decision-makers and influencers within target accounts, understanding their roles, priorities, and relationships to create personalized engagement strategies.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Sparkles,
    title: "Personalized Content Creation",
    description: "Develop account-specific messaging, case studies, and value propositions that speak directly to each stakeholder's unique challenges and business objectives.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Multi-Channel Orchestration",
    description: "Execute coordinated campaigns across email, LinkedIn, direct mail, events, and advertising to create multiple touchpoints with your target accounts.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Engagement Tracking",
    description: "Monitor account engagement across all channels, tracking which stakeholders are active and what content resonates to optimize your approach in real-time.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: TrendingUp,
    title: "Revenue Attribution",
    description: "Measure pipeline influence and revenue generated from ABM efforts, providing clear ROI metrics and insights to continuously improve your strategy.",
    color: "from-pink-500 to-pink-600"
  },
];

const benefits = [
  {
    icon: Award,
    title: "5x Higher Deal Value",
    description: "ABM focuses on high-value accounts, resulting in significantly larger deal sizes compared to traditional lead generation"
  },
  {
    icon: Target,
    title: "85% Account Penetration",
    description: "Reach multiple stakeholders within target accounts to build consensus and accelerate decision-making"
  },
  {
    icon: Clock,
    title: "40% Faster Sales Cycle",
    description: "Personalized, coordinated outreach reduces friction and moves deals through your pipeline more quickly"
  },
  {
    icon: TrendingUp,
    title: "92% Win Rate on Targets",
    description: "Focused resources on best-fit accounts dramatically improves your close rate and ROI"
  }
];

const stats = [
  { value: "5x", label: "Higher Deal Value" },
  { value: "85%", label: "Account Penetration" },
  { value: "40%", label: "Faster Sales Cycle" },
  { value: "92%", label: "Win Rate on Targets" }
];

export default function AccountBased() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-8 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <Zap className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">Account-Based Marketing</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Win Your Most
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Valuable Accounts
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Stop wasting resources on unqualified leads. Our ABM approach targets your ideal accounts with personalized campaigns that engage every decision-maker and accelerate deal closure.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Start Your ABM Strategy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  View Case Studies
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/account-based.jpg"
                  alt="Account-Based Marketing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition with Image */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Targeting for <span className="text-purple-600">Maximum Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ABM flips traditional marketing on its head. Instead of casting a wide net, we laser-focus on your most valuable prospects with personalized campaigns designed to win their business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <UserCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Identify and prioritize accounts with highest revenue potential</span>
                </li>
                <li className="flex items-start gap-3">
                  <UserCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Engage all stakeholders with personalized messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <UserCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Coordinate sales and marketing for unified account approach</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/b2b-lead.jpg"
                  alt="ABM Targeting Strategy"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our ABM Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A strategic framework for winning high-value accounts through personalized engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/meeting.jpg"
                  alt="Multi-Channel ABM"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Orchestrated <span className="text-purple-600">Multi-Channel Campaigns</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We create cohesive experiences across every touchpoint, ensuring your message reaches the right people at the right time through their preferred channels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email & LinkedIn Outreach</h4>
                    <p className="text-gray-600">Personalized messages that speak to each stakeholder's priorities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Targeted Advertising</h4>
                    <p className="text-gray-600">Display and social ads that keep your brand top-of-mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Events & Direct Mail</h4>
                    <p className="text-gray-600">High-touch experiences that create memorable impressions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-gradient-to-br from-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why ABM Delivers Superior Results
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Account-Based Marketing aligns your entire go-to-market strategy around your most valuable opportunities, delivering measurable ROI and sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-purple-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Contact
        title="Ready to Win Your Most Valuable Accounts?"
        description="Let GrowLium Digital design and execute a personalized ABM strategy that engages every stakeholder and accelerates your path to revenue. Schedule a consultation to discuss your target account list."
        image="/images/sales-meeting.png"
      />
    </div>
  );
}
