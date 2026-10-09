'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  PhoneCall,
  FileSpreadsheet,
  BookOpen,
  Tag,
  Building2,
  Layers,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { BlogPost, getAllBlogs } from '@/lib/blogData';
import { findProductBySlug } from '@/lib/seedData';
import RFQModal from '@/components/public/RFQModal';

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  const relatedProduct = post.relatedProductSlug ? findProductBySlug(post.relatedProductSlug) : null;
  const allBlogs = getAllBlogs();
  const relatedArticles = allBlogs
    .filter((b) => b.slug !== post.slug && (b.category === post.category || b.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  // Scroll Progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof window !== 'undefined') {
      const text = encodeURIComponent(`Check out this engineering guide: "${post.title}" - ${window.location.href}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 space-y-12 font-sans relative">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-neutral-200 z-50">
        <div
          className="h-full bg-red-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Technical Articles</span>
          </Link>

          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black">
            {post.category}
          </span>
        </div>

        {/* Main Article Header Card */}
        <header className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-neutral-200"
              />
              <div>
                <p className="text-sm font-black text-slate-950">{post.author.name}</p>
                <p className="text-xs text-slate-500 font-medium">{post.author.role}</p>
              </div>
            </div>

            {/* Read Time & Date */}
            <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-red-600" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-red-600" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden border-2 border-neutral-200 shadow-md h-72 sm:h-96 relative bg-neutral-900">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content Container */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
          
          {/* Key Takeaways Box */}
          <div className="bg-red-50/70 border-2 border-red-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-red-700 font-black text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span>Engineering Summary & Key Takeaways</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-800 space-y-2 font-medium list-disc list-inside leading-relaxed">
              <li>Adheres to strict MoRTH 5th Revision and Indian Roads Congress (IRC:83) specifications.</li>
              <li>IS 2062 Grade structural steel ensures high yield strength (Fy &ge; 250 MPa) and longevity.</li>
              <li>Ex-factory certified quality from JMK Engineering Patna Central Works with multi-tenant buffer depots.</li>
            </ul>
          </div>

          {/* Rendered Content Sections */}
          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-800 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl font-black text-slate-950 pt-6 border-t border-neutral-100">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-black text-slate-900 pt-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('|')) {
                // Markdown table rendering
                const rows = paragraph.trim().split('\n').filter(r => !r.includes('---'));
                return (
                  <div key={idx} className="overflow-x-auto my-6 rounded-2xl border-2 border-neutral-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-900 border-b border-neutral-200 font-black">
                        <tr>
                          {rows[0].split('|').filter(c => c.trim()).map((header, hIdx) => (
                            <th key={hIdx} className="p-3.5 whitespace-nowrap">{header.trim()}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {rows.slice(1).map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 transition">
                            {row.split('|').filter(c => c.trim()).map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 font-medium text-slate-700">{cell.trim()}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                const listItems = paragraph.split('\n').map(item => item.replace('- ', ''));
                return (
                  <ul key={idx} className="space-y-1.5 list-disc list-inside font-medium text-slate-700">
                    {listItems.map((li, lIdx) => (
                      <li key={lIdx}>{li}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Social Share Toolbar */}
          <div className="pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Share Article:</span>
              <button
                onClick={handleShareWhatsApp}
                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 text-xs font-bold transition flex items-center gap-1.5"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-1.5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-xs font-semibold"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-Link Related Product Showcase Card */}
        {relatedProduct && (
          <div className="bg-white border-2 border-red-200 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-neutral-50 p-2 border border-neutral-200 shrink-0 overflow-hidden">
                <img
                  src={relatedProduct.featuredImage}
                  alt={relatedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-black text-red-600 uppercase tracking-wider">Featured Engineering Component</span>
                <h4 className="text-lg sm:text-xl font-black text-slate-950">{relatedProduct.name}</h4>
                <p className="text-xs text-slate-600 line-clamp-1">{relatedProduct.shortDescription}</p>
                <span className="text-xs font-mono font-bold text-emerald-600">IS 2062 & IRC Verified Stock</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href={`/products/${relatedProduct.slug}`}
                className="flex-1 md:flex-initial px-5 py-3 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-black uppercase tracking-wider transition text-center"
              >
                View Specifications
              </Link>
              <button
                onClick={() => setIsRfqOpen(true)}
                className="flex-1 md:flex-initial px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition text-center shadow-md shadow-red-600/30"
              >
                Instant Price RFQ
              </button>
            </div>
          </div>
        )}

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-950">Related Technical Articles</h3>
              <Link href="/blog" className="text-xs font-black text-red-600 hover:underline flex items-center gap-1">
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="bg-white border-2 border-neutral-200 rounded-2xl p-4 shadow-sm hover:border-red-600 hover:shadow-lg transition space-y-3 group block"
                >
                  <div className="h-36 rounded-xl overflow-hidden bg-neutral-900">
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">{rel.category}</span>
                  <h5 className="text-xs font-black text-slate-950 group-hover:text-red-600 transition line-clamp-2">
                    {rel.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 line-clamp-2">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* RFQ Modal */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={relatedProduct ? relatedProduct.name : post.title}
      />
    </div>
  );
}
