'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  BookOpen,
  Tag,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  Share2,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { BlogPost } from '@/lib/blogData';
import RFQModal from '@/components/public/RFQModal';

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

const CATEGORIES = [
  'All',
  'Bridge Bearings',
  'Expansion Joints',
  'Formwork & Shuttering',
  'Scaffolding Systems',
  'Highway Infrastructure',
];

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return initialPosts.find((p) => p.isFeatured) || initialPosts[0];
  }, [initialPosts]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Breadcrumb & Title */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Engineering Knowledge Hub</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-black border border-red-200">
                <BookOpen className="w-3.5 h-3.5 text-red-600" />
                <span>Technical Specifications & Industry Guides</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                JMK Engineering <span className="text-red-600">Articles & Technical Insights</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Expert insights on IRC:83 bridge bearings, IS 2062 shuttering plates, modular scaffolding safety, and MoRTH road infrastructure manufacturing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsRfqOpen(true)}
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-red-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Request Project RFQ</span>
              </button>
              <a
                href="tel:+917493916194"
                className="px-5 py-3.5 bg-white hover:bg-neutral-100 text-slate-900 border-2 border-neutral-300 rounded-2xl text-xs sm:text-sm font-black transition flex items-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>+91 7493916194</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition whitespace-nowrap ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                        : 'bg-neutral-100 text-slate-700 hover:bg-neutral-200 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, specs, IRC codes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
              />
            </div>
          </div>
        </div>

        {/* Featured Post Hero Banner (Shows when 'All' is selected and no search filter) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:border-red-600 transition group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full min-h-[300px] relative bg-neutral-900 overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Technical Guide</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md font-black">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-red-600" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 group-hover:text-red-600 transition leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-slate-600 font-medium line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-neutral-300"
                    />
                    <div>
                      <p className="text-xs font-black text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="px-5 py-2.5 bg-slate-900 group-hover:bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition flex items-center gap-1.5 shadow-md"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-950">
              {selectedCategory === 'All' ? 'All Technical Publications' : `${selectedCategory} Articles`} ({filteredPosts.length})
            </h3>
            <span className="text-xs font-bold text-slate-500">
              Verified by JMK Engineering Quality Bureau
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-neutral-300 rounded-3xl p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-neutral-400 mx-auto" />
              <h4 className="text-lg font-black text-slate-800">No articles matched your search</h4>
              <p className="text-xs text-slate-500">Try searching for other keywords like "shuttering", "IRC", or "bearings".</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:border-red-600 hover:shadow-xl transition group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Thumbnail Image */}
                    <div className="h-48 sm:h-52 bg-neutral-900 overflow-hidden relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-900 font-black text-[10px] uppercase tracking-wider rounded-lg shadow">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Excerpt */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-red-600" />
                          <span>{post.readTime}</span>
                        </span>
                        <span>•</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h4 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-red-600 transition leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-slate-600 font-medium line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-[10px] font-bold rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with Author & Link */}
                  <div className="p-5 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-neutral-200"
                      />
                      <span className="text-xs font-bold text-slate-800">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-black text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Industrial Knowledge Callout Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-neutral-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-black text-red-400 uppercase tracking-wider">
              Contractor & Consultant Direct Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Require Custom Technical CAD Drawings or MoRTH Compliance Certifications?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium">
              Our Patna engineering team provides structural load calculations, IS 2062 test certificates, and ex-factory quotation for road and bridge projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={() => setIsRfqOpen(true)}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>Instant RFQ Estimate</span>
            </button>
            <a
              href="https://wa.me/917493916194?text=Hello%20JMK%20Engineering,%20I%20would%20like%20to%20inquire%20about%20technical%20specifications."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition flex items-center justify-center gap-2"
            >
              <span>WhatsApp Technical Desk</span>
            </a>
          </div>
        </div>

      </div>

      {/* RFQ Modal */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct="Engineering Consultation & Technical Inquiry"
      />
    </div>
  );
}
