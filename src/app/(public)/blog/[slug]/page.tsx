import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogs, getBlogBySlug, BlogPost } from '@/lib/blogData';
import BlogDetailClient from '@/components/public/BlogDetailClient';

interface PageProps {
  params: {
    slug: string;
  };
}

// 1. Static Site Generation (SSG) for 0% runtime lag and instant navigation
export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

// 2. SEO-Optimized Metadata per Blog Article
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: 'Technical Article | JMK Engineering & Developers',
      description: 'Engineering guides on bridge bearings, expansion joints, shuttering plates, and scaffolding systems.',
    };
  }

  return {
    title: `${post.metaTitle} | JMK Engineering`,
    description: post.metaDescription,
    keywords: [
      ...post.tags,
      post.category,
      'JMK Engineering Blog',
      'Patna heavy fabrication',
      'Bridge engineering articles',
    ],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.jmkengineering.in/blog/${post.slug}`,
      siteName: 'JMK Engineering & Developers',
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: `${post.title} - JMK Engineering`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@jmkengineering',
      creator: '@jmkengineering',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
    alternates: {
      canonical: `https://www.jmkengineering.in/blog/${post.slug}`,
      languages: {
        'en-IN': `https://www.jmkengineering.in/blog/${post.slug}`,
        'en-US': `https://www.jmkengineering.in/blog/${post.slug}`,
        'x-default': `https://www.jmkengineering.in/blog/${post.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// 3. Server Component with JSON-LD Schema for Google Search Indexing
export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Google JSON-LD Structured Data Schema for BlogPosting
  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.featuredImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'JMK Engineering & Developers',
      url: 'https://www.jmkengineering.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jmkengineering.in/icon.png',
      },
      telephone: '+917493916194',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.jmkengineering.in/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.jmkengineering.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Engineering Blog',
        item: 'https://www.jmkengineering.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `https://www.jmkengineering.in/blog?category=${encodeURIComponent(post.category)}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `https://www.jmkengineering.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogDetailClient post={post} />
    </>
  );
}
