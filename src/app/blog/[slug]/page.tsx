"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getBlogPost, getRelatedPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostPageProps {
    readonly params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = use(params);
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(post.id, post.category);

    return (
        <div className="min-h-screen bg-white">
            {/* Scroll Progress Bar (Optional - can be added later) */}

            {/* --- Hero Section --- */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax-like effect */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                        className="max-w-4xl mr-auto text-left"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-start gap-4 text-sm font-medium text-blue-200 mb-6"
                        >
                            <span className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-sm text-blue-100 hover:bg-blue-600/30 transition-colors cursor-default">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-start gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/20">
                                {post.author.charAt(3)} {/* Simple avatar fallback */}
                            </div>
                            <div className="text-left">
                                <p className="text-white font-medium">{post.author}</p>
                                <p className="text-slate-400 text-xs">Content Team</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- Main Content --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12">

                            {/* Article Body */}
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex-1"
                            >
                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 border-blue-500 pl-6 italic">
                                    {post.excerpt}
                                </p>

                                <div
                                    className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-li:text-slate-600 prose-img:rounded-2xl prose-img:shadow-lg"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                            </motion.article>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Related Articles --- */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group block h-full">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                    {relatedPost.category}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-xs text-slate-400 mb-2 flex items-center gap-2">
                                                    <Calendar className="w-3 h-3" /> {relatedPost.date}
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                <div className="mt-auto pt-4 flex items-center text-blue-600 text-sm font-semibold">
                                                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* --- CTA Section --- */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/3" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your growth?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                        Join hundreds of B2B companies using GrowLium to scale their lead generation and sales pipeline.
                    </p>
                    <Link href="/contact">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
                            Get a Free Consultation
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}