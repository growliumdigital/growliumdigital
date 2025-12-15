'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ArrowRight, Search, Clock, User, Tag, ChevronRight, Mail } from 'lucide-react';
import { blogPosts, getAllBlogPosts } from '@/lib/blog';

const categories = ["All", "Strategy", "Marketing", "Lead Generation", "Sales", "Analytics", "Best Practices", "Technology"];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const blogs = getAllBlogPosts();
  // Filter Logic
  const filteredPosts = blogs.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              Our Latest Thinking
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Insights for Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">B2B Growth</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Expert articles, industry trends, and data-driven strategies to help your business scale effectively in a competitive landscape.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl leading-5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all backdrop-blur-sm hover:bg-white/10"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeCategory + searchQuery}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              variants={staggerContainer}
            >

              {/* Grid Layout */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      variants={fadeInUp}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500">{post.author}</span>
                          <a href={`/blog/${post.id}`} className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read Article <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-slate-500">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p className="text-lg">No articles found matching your criteria.</p>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 text-white">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
              Get the latest B2B growth strategies, lead generation tips, and industry insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-grow px-6 py-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg">
                Subscribe
              </button>
            </form>
            <p className="text-blue-200 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

    </div>
  );
}