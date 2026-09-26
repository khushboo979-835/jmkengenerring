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

  const title = `${product.name} Manufacturer in Patna Bihar | Price & Specs - JMK Engineering`;
  const description = `Buy ${product.name} directly from JMK Engineering & Developers, premier manufacturer in Patna, Bihar. IS 2062 certified, ex-factory pricing, bulk depot stock & fast dispatch across India. Call: +91 7493916194.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.name} price`,
      `${product.name} manufacturer`,
      `${product.name} supplier Patna Bihar`,
      product.categoryLabel,
      product.materialGrade,
      'JMK Engineering',
      'Patna heavy fabrication',
      'IndiaMART verified manufacturer',
      ...product.applications,
    ],
    openGraph: {
      title: `${product.name} Manufacturer | JMK Engineering`,
      description: `${product.name} manufacturer and supplier for bridge construction and infrastructure projects. JMK Engineering, Patna, Bihar. Call: +91 7493916194.`,
      url: `https://www.jmkengineering.in/products/${params.slug}`,
      siteName: 'JMK Engineering & Developers',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: product.featuredImage,
          width: 800,
          height: 600,
          alt: `${product.name} - JMK Engineering`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@jmkengineering',
      creator: '@jmkengineering',
      title: `${product.name} Manufacturer | JMK Engineering`,
      description: `${product.name} manufacturer and supplier for bridge construction projects. JMK Engineering, Patna, Bihar.`,
      images: [product.featuredImage],
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

  // Google JSON-LD Structured Data Schema for Industrial Products + Breadcrumbs
  const productJsonLd = {
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
      url: 'https://www.jmkengineering.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mauza Jhali, Jakariyapur, Krishna Niketan Road',
        addressLocality: 'Patna',
        addressRegion: 'Bihar',
        postalCode: '800007',
        addressCountry: 'IN',
      },
      telephone: '+917493916194',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '45',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.jmkengineering.in/products/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price ? product.price.replace(/[^0-9]/g, '') || '2500' : '2500',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'JMK Engineering & Developers',
      },
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
        name: 'Products',
        item: 'https://www.jmkengineering.in/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.categoryLabel,
        item: `https://www.jmkengineering.in/products?category=${product.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: `https://www.jmkengineering.in/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
