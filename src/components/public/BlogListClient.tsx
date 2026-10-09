'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Sparkles,
  PhoneCall,
  MessageCircle,
  FileSpreadsheet,
  CheckCircle2,
  ChevronRight
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
  'PEB Structures',
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
    <div className="bg-[#fcfcfd] text-slate-900 min-h-screen">
      {/* Top Hero Section - Modern & Clean */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>JMK Engineering Knowledge Base</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering Blog & <span className="text-red-600">Technical Guides</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              In-depth technical publications on IRC:83 bridge bearings, IS 2062 shuttering plates, modular scaffolding safety calculations, and MoRTH road infrastructure manufacturing.
            </p>
          </div>

          {/* Category Filter & Search Bar */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Clean Pill Navigation */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Clean Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, IRC codes, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Featured Post Card (Hero Highlight) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto min-h-[320px] relative bg-slate-900 overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Featured Article</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-semibold">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      JMK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Publications`}
              <span className="text-slate-400 font-normal ml-2">({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-800">No matching articles found</h4>
              <p className="text-xs text-slate-500">Try adjusting your search terms or browse all categories.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-black transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Clean Image Container */}
                    <div className="h-48 sm:h-52 bg-slate-100 overflow-hidden relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 font-bold text-[10px] tracking-wide shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2.5 text-[11px] font-semibold text-slate-400">
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block group-hover:text-red-600 transition-colors">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100/80 mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-[10px] border border-slate-200">
                        JMK
                      </div>
                      <span className="text-[11px] font-medium text-slate-600">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Clean Engineering Consultation Callout */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Technical Support & Design Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Need Structural Calculations, Test Certifications or Ex-Factory Estimates?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our engineering team in Patna provides IS 2062 test certificates, MoRTH compliance datasheets, and immediate commercial quotations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={() => setIsRfqOpen(true)}
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold transition shadow-md flex items-center justify-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Request RFQ Quote</span>
            </button>
            <a
              href="https://wa.me/917493916194?text=Hello%20JMK%20Engineering,%20I%20am%20interested%20in%20technical%20specifications."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>
      </main>

      {/* Global RFQ Modal */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct="Engineering Consultation & Technical Inquiry"
      />
    </div>
  );
}
