'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost, getAllBlogs } from '@/lib/blogData';
import BlogDetailClient from '@/components/public/BlogDetailClient';
import { ArrowLeft, BookOpen, Layers, PhoneCall, RefreshCw, Sparkles } from 'lucide-react';

interface DynamicBlogDetailFallbackProps {
  slug: string;
}

export default function DynamicBlogDetailFallback({ slug }: DynamicBlogDetailFallbackProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function findPost() {
      // 1. Check client localStorage (where employee might have just published it)
      try {
        const saved = localStorage.getItem('jmk_cms_blogs');
        if (saved) {
          const parsed: BlogPost[] = JSON.parse(saved);
          const cleanSlug = slug.toLowerCase().trim();
          const match = parsed.find(
            (b) =>
              b.slug.toLowerCase() === cleanSlug ||
              b.slug.toLowerCase().includes(cleanSlug) ||
              cleanSlug.includes(b.slug.toLowerCase()) ||
              b.id === slug
          );
          if (match && isMounted) {
            setPost(match);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.error('Error reading localStorage for blog:', e);
      }

      // 2. Query server API
      try {
        const res = await fetch(`/api/cms/blogs?slug=${encodeURIComponent(slug)}`);
        const data = await res.json();
        if (data.success && data.blog && isMounted) {
          setPost(data.blog);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error('Error fetching blog from API:', e);
      }

      if (isMounted) {
        setLoading(false);
      }
    }

    findPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fcfcfd] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full border-4 border-red-600 border-t-transparent animate-spin mb-4"></div>
        <p className="text-sm font-bold text-slate-700">Loading technical article...</p>
        <p className="text-xs text-slate-400 mt-1">Retrieving latest publication from JMK Engineering Desk</p>
      </div>
    );
  }

  // If found dynamically
  if (post) {
    return <BlogDetailClient post={post} />;
  }

  // Polished fallback view if not found
  const recentBlogs = getAllBlogs().slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>JMK Engineering Knowledge Base</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Article Not Found or Updated
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          The requested article (<span className="font-mono text-red-600 bg-red-50 px-2 py-0.5 rounded">{slug}</span>) might have been moved, renamed, or is currently being drafted by our engineering desk.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse All Technical Articles</span>
          </Link>

          <Link
            href="/products"
            className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Products</span>
          </Link>

          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider transition"
          >
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Featured articles recommendations */}
        <div className="pt-12 text-left space-y-4">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
            Recommended Publications:
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {recentBlogs.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-red-500 hover:shadow-md transition flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase">
                    {b.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mt-1">{b.title}</h4>
                </div>
                <span className="text-xs font-bold text-red-600 shrink-0">Read Guide &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
