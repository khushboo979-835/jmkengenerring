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
  FileSpreadsheet,
  BookOpen,
  Sparkles,
  MessageCircle,
  Copy,
  Check,
  Building2,
  Layers
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
    <div className="bg-[#fcfcfd] text-slate-900 min-h-screen">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-red-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-red-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Blog</span>
          </Link>

          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
            {post.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                JMK
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>

            {/* Read Time & Date */}
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72 sm:h-96 relative bg-slate-900">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Key Engineering Summary</span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside leading-relaxed">
            <li>Strict compliance with MoRTH Section 2000/2700 and Indian Roads Congress (IRC:83) guidelines.</li>
            <li>Structural IS 2062 Grade steel with certified yield strength and weldability.</li>
            <li>Direct ex-factory dispatch from JMK Engineering Patna Central Works.</li>
          </ul>
        </div>

        {/* Article Body Content */}
        <article className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 pt-6 border-t border-slate-100">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-800 pt-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('|')) {
              // Markdown table rendering
              const rows = paragraph.trim().split('\n').filter(r => !r.includes('---'));
              return (
                <div key={idx} className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
                      <tr>
                        {rows[0].split('|').filter(c => c.trim()).map((header, hIdx) => (
                          <th key={hIdx} className="p-3 whitespace-nowrap">{header.trim()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {rows.slice(1).map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition">
                          {row.split('|').filter(c => c.trim()).map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-slate-700">{cell.trim()}</td>
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
                <ul key={idx} className="space-y-1.5 list-disc list-inside text-slate-700">
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
        </article>

        {/* Social Share & Tags Toolbar */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Share:</span>
            <button
              onClick={handleShareWhatsApp}
              className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Related Product Showcase */}
        {relatedProduct && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl bg-slate-50 p-2 border border-slate-200 shrink-0 overflow-hidden">
                <img
                  src={relatedProduct.featuredImage}
                  alt={relatedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">Related Product Spec</span>
                <h4 className="text-lg font-bold text-slate-900">{relatedProduct.name}</h4>
                <p className="text-xs text-slate-500 line-clamp-1">{relatedProduct.shortDescription}</p>
                <span className="text-xs font-mono font-semibold text-emerald-600">IS 2062 & IRC Compliant</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <Link
                href={`/products/${relatedProduct.slug}`}
                className="flex-1 md:flex-initial px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full text-xs font-bold transition text-center"
              >
                View Specs
              </Link>
              <button
                onClick={() => setIsRfqOpen(true)}
                className="flex-1 md:flex-initial px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold transition text-center shadow-sm"
              >
                Get RFQ Quote
              </button>
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">Related Technical Guides</h3>
              <Link href="/blog" className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1">
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition space-y-3 block"
                >
                  <div className="h-36 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-red-600 uppercase">{rel.category}</span>
                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
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
