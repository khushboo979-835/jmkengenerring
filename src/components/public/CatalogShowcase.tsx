'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  ShieldAlert,
  ArrowRight,
  Download,
  CheckCircle,
  FileSpreadsheet,
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { SEED_PRODUCTS, SeedProduct } from '@/lib/seedData';

interface CatalogShowcaseProps {
  onOpenRFQ: (productName?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Products (60+)' },
  { id: 'joints', label: 'Expansion Joints (22)' },
  { id: 'shuttering', label: 'Shuttering Plates (7)' },
  { id: 'scaffolding', label: 'Scaffolding & Jacks (8)' },
  { id: 'drainage', label: 'Drainage Spouts (6)' },
  { id: 'bearings', label: 'Bridge Bearings (5)' },
  { id: 'centering', label: 'Centering Plates (4)' },
  { id: 'h-frame', label: 'H-Frame Scaffolding (3)' },
  { id: 'planks', label: 'Walkway Planks (2)' },
  { id: 'channels', label: 'MS Channels (2)' },
  { id: 'barriers', label: 'Crash Barriers (2)' },
  { id: 'couplers', label: 'Couplers & Fittings (1)' },
];

export default function CatalogShowcase({ onOpenRFQ }: CatalogShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = SEED_PRODUCTS.filter((prod) => {
    const matchesCat = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.materialGrade.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-20 bg-white text-black px-4 sm:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider mb-2">
              <span>Engineered Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Manufacturing Catalog & Product Lines
            </h2>
            <p className="text-sm text-neutral-700 mt-2 max-w-2xl font-medium">
              Precision fabricated structural formwork, scaffolding jacks, and bridge bearings built to rigorous IS, MoRTH, and IRC standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md"
            >
              <span>View Full Interactive Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 hover:text-black border border-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Full Clickable Card Link */}
              <Link
                href={`/products/${product.slug}`}
                className="block flex-1 focus:outline-none"
              >
                {/* Product Image */}
                <div className="relative aspect-video bg-white p-3 border-b border-neutral-200 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.featuredImage || product.imageUrls?.[0] || '/images/products/placeholder.jpg'}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                    {product.categoryLabel}
                  </div>
                  {product.isFeatured && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-black text-black text-base group-hover:text-red-600 transition line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-600 font-medium line-clamp-2">
                      {product.shortDescription || product.fullDescription}
                    </p>
                  </div>

                  {/* Specs Pill Box */}
                  <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-bold">Grade:</span>
                      <span className="font-bold text-black font-mono">{product.materialGrade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-bold">Dimensions:</span>
                      <span className="font-bold text-black">{product.dimensions?.[0] || 'Standard Sizes'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500 font-bold">Weight:</span>
                      <span className="font-bold text-red-600">{product.weightVariants?.[0] || 'Per Spec'}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Pricing & CTA */}
              <div className="p-5 pt-0 border-t border-neutral-200 flex items-center justify-between relative z-10">
                <div>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase block">Est. Unit Price</span>
                  <span className="text-base font-black text-red-600 font-mono">{product.price || 'Request Quote'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenRFQ(product.name);
                    }}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-sm flex items-center gap-1"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/products/${product.slug}`}
                    className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-black rounded-xl text-xs font-bold border border-neutral-300 transition"
                  >
                    Specs →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
