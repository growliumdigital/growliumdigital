'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

// Define blog post type
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Benefits of Email Marketing for B2B Business Growth",
    excerpt: "Email marketing continues to be one of the most effective and powerful tools for B2B growth...",
    image: "/images/blog-email.png",
    slug: "benefits-of-email-marketing",
    date: "July 15, 2025",
    category: "Marketing"
  },
  {
    id: 2,
    title: "How to Get Better Outbound Lead Generation Outcomes",
    excerpt: "In today's competitive business landscape, the ability to proactively identify and engage potential clients is not just...",
    image: "/images/blog-lead.png",
    slug: "better-outbound-lead-generation",
    date: "July 15, 2025",
    category: "Lead Generation"
  },
  {
    id: 3,
    title: "How to Get More B2B Meetings for Your Sales Team",
    excerpt: "In today's competitive B2B sales landscape, securing high-quality meetings is crucial to driving revenue and...",
    image: "/images/blog-b2b.png",
    slug: "more-b2b-meetings",
    date: "July 15, 2025",
    category: "Sales"
  },
  {
    id: 4,
    title: "Important Lead Generation KPIs and Metrics",
    excerpt: "You Need to Know In B2B sales, mastering lead generation is crucial for sustainable growth and long-term success. To...",
    image: "/images/blog-kpi.png",
    slug: "lead-generation-kpis",
    date: "July 15, 2025",
    category: "Analytics"
  },
  {
    id: 5,
    title: "Common B2B Appointment-Setting Mistakes to Avoid",
    excerpt: "In the fast-paced world of B2B sales, appointment setting is the cornerstone of building relationships and closing deals. Securing...",
    image: "/images/blog-appointment.png",
    slug: "appointment-setting-mistakes",
    date: "July 19, 2025",
    category: "Best Practices"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

export default function BlogPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Insights, tips, and strategies for B2B growth
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>

                {/* Read More Link */}
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}