"use client";

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: FaFacebook, href: "#", label: "Facebook", color: "hover:bg-blue-700" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Sales Meeting Setup", href: "/services/sales-meeting-setup" },
    { name: "Account-Based Marketing", href: "/services/account-based-marketing" },
    { name: "B2B Appointment Setting", href: "/services/b2b-appointment-setting" },
    { name: "B2B Lead Generation", href: "/services/b2b-lead-generation" },
    { name: "Inside Sales", href: "/services/inside-sales" },
    { name: "Sales Development", href: "/services/sales-development" },
  ];

  const engagementModels = [
    { name: "Full-Time Resource", href: "/engagement/full-time-resource" },
    { name: "Performance Based", href: "/engagement/performance-based" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=""
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                G
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-800">GrowLium Digital  </div>
                <div className="text-sm text-blue-600">
                  Where Quality Meets Conversation
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              We help businesses generate qualified leads by reaching key decision-makers with tailored outreach. Transform your sales pipeline with our proven strategies.
            </p>

            {/* Social Media (Mobile Only) */}
            <div className="mb-6 lg:hidden">
              <h4 className="font-semibold mb-3 text-gray-800">Connect With Us</h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 shadow-md hover:shadow-lg group`}
                  >
                    <social.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 border border-blue-200 shadow-sm">
                <div className="text-xl font-bold text-blue-600">500+</div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 border border-blue-200 shadow-sm">
                <div className="text-xl font-bold text-blue-600">98%</div>
                <div className="text-xs text-gray-600">Success</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 border border-blue-200 shadow-sm">
                <div className="text-xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <h4 className="font-semibold text-sm mb-2 text-blue-700">Engagement Models</h4>
              <ul className="space-y-1.5">
                {engagementModels.map((model, index) => (
                  <li key={index}>
                    <Link
                      href={model.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {model.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-800">
              <Mail className="w-5 h-5 text-blue-500" />
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 group">
                <div className="w-9 h-9 bg-blue-200/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-300/50 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Email Us</div>
                  <a
                    href="mailto:vamsi.krishna@growliumdigital.com"
                    className="text-white hover:text-blue-600 transition-colors text-sm"
                  >
                    vamsi.krishna@growliumdigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 group">
                <div className="w-9 h-9 bg-blue-200/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-300/50 transition-colors">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Call Us</div>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                  >
                    +91 99594 91517
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 group">
                <div className="w-9 h-9 bg-blue-200/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-300/50 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Business Hours</div>
                  <div className="text-gray-700 text-sm">
                    Mon - Fri: 09:00 AM - 05:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media (Desktop Only) */}
            <div className="mt-6 hidden lg:block">
              <h4 className="font-semibold mb-3 text-gray-800">Connect With Us</h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 shadow-md hover:shadow-lg group`}
                  >
                    <social.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 border-t border-blue-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} GrowLium Digital  . All rights reserved. Powered by Innovation.
            </div>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-blue-600 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
