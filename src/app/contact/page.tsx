'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_wl4dx1r';
    const TEMPLATE_ID = 'template_s50jvlf';
    const PUBLIC_KEY = 'GpIWP8JUGes1L1MRu';

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({ name: '', phone: '', email: '', message: '' });
            setLoading(false);
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Failed to send message. Please try again later.');
            setLoading(false);
          },
        );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Background Image */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Let's start a conversation about growing your business
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left Column: Get In Touch Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Book a Meeting */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Calendar className="w-8 h-8 text-blue-600" />
              Book a Meeting
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="relative pb-[75%] h-0 bg-gray-50">
                <iframe
                  src="https://calendly.com/your-calendly-link?embed_type=Inline&embed_domain=yourdomain.com&hide_gdpr_banner=1"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Contact Info Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-8 mt-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Email Us</h4>
                <a href="mailto:vamsi.krishna@growliumdigital.com" className="text-white hover:text-blue-50 transition-colors duration-300 text-sm">
                  vamsi.krishna@growliumdigital.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Business Hours</h4>
                <p className="text-white text-sm">
                  Monday to Friday<br />
                  09:00 AM – 05:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}