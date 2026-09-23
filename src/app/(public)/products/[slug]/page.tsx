import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findProductBySlug, getAllProductSlugs, SeedProduct } from '@/lib/seedData';
import ProductDetailClient from '@/components/public/ProductDetailClient';

interface PageProps {
  params: {
    slug: string;
  };
}

// 1. Static Site Generation (SSG) for 0% runtime lag and instant navigation
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// 2. SEO-Optimized Metadata per Product
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = findProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Specification | JMK Engineering & Developers',
      description: 'Heavy civil infrastructure formwork, scaffolding, expansion joints and bridge bearings manufacturer.',
    };
  }

  const title = `${product.name} | JMK Engineering & Developers`;
  const description = `${product.shortDescription} Verified specifications, IS 2062 & IRC:83 compliance standards, multi-tenant depot stock, and ex-factory pricing from Patna Works.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      product.categoryLabel,
      product.materialGrade,
      'JMK Engineering',
      'Patna heavy fabrication',
      'IndiaMART verified manufacturer',
      ...product.applications,
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: product.featuredImage,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical: `https://www.jmkengineering.in/products/${params.slug}`,
    },
  };
}

// 3. Server Component Page with JSON-LD Schema for Google Search Indexing
export default function ProductDetailPage({ params }: PageProps) {
  const product = findProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Google JSON-LD Structured Data Schema for Industrial Products
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [product.featuredImage, ...(product.imageUrls || [])],
    description: product.fullDescription,
    sku: product.id,
    mpn: product.id,
    brand: {
      '@type': 'Brand',
      name: 'JMK Engineering & Developers',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'JMK Engineering & Developers',
      location: 'Patna, Bihar, India',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.jmkengineering.in/products/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price ? product.price.replace(/[^0-9]/g, '') || '2500' : '2500',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'JMK Engineering & Developers',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
