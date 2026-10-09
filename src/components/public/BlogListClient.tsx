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
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  // Synchronize dynamic CMS posts from database API and localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('jmk_cms_blogs');
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setPosts(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }

    fetch('/api/cms/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.blogs)) {
          setPosts(data.blogs);
        }
      })
      .catch(() => {});
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
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
  }, [posts, selectedCategory, searchQuery]);

  // If there are more than 2 articles, we can feature the first one; otherwise show clean grid
  const showFeaturedHero = selectedCategory === 'All' && !searchQuery && filteredPosts.length >= 3;
  const featuredPost = showFeaturedHero ? filteredPosts.find((p) => p.isFeatured) || filteredPosts[0] : null;
  const gridPosts = showFeaturedHero && featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <div className="bg-[#fcfcfd] text-slate-900 min-h-screen">
      {/* Top Header Section - Compact & Modern */}
      <section className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                <span>Engineering Knowledge Base</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Technical Insights & <span className="text-red-600">Guides</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Technical publications on IRC:83 bridge bearings, IS 2062 shuttering plates, modular scaffolding, and heavy steel fabrication.
              </p>
            </div>

            {/* Clean Search Input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, IRC codes, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
              />
            </div>
          </div>

          {/* Clean Pill Navigation */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
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
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        
        {/* Compact Featured Post Card (Only shown if 3+ articles exist) */}
        {featuredPost && (
          <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-6 h-52 sm:h-60 lg:h-auto min-h-[220px] relative bg-slate-900 overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Featured Article</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[11px]">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[11px] shadow-sm">
                      JMK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid - Compact, Clean, Proportional */}
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {selectedCategory === 'All' ? 'Technical Publications' : `${selectedCategory} Publications`}
              <span className="text-slate-400 font-normal ml-2 text-xs">({filteredPosts.length})</span>
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800">No matching articles found</h4>
              <p className="text-xs text-slate-500">Try adjusting your search terms or browse all categories.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-black transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {gridPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Compact Image Container (Height constrained) */}
                    <div className="h-40 sm:h-44 bg-slate-100 overflow-hidden relative">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 font-bold text-[10px] tracking-wide shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block group-hover:text-red-600 transition-colors">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-4 pt-2 flex items-center justify-between border-t border-slate-100 mt-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-[9px] border border-slate-200">
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

        {/* Engineering Consultation Callout */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl relative z-10">
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
              Technical Support & Design Desk
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              Need Structural Calculations, Test Certifications or Ex-Factory Estimates?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our engineering team in Patna provides IS 2062 test certificates, MoRTH compliance datasheets, and direct commercial quotations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={() => setIsRfqOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold transition shadow-sm flex items-center justify-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
            <a
              href="https://wa.me/917493916194?text=Hello%20JMK%20Engineering,%20I%20am%20interested%20in%20technical%20specifications."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
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
