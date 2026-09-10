'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Camera,
  ChevronRight,
  ShieldCheck,
  Search,
  ZoomIn,
  X,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  Sparkles,
  Award,
  Layers,
  Factory,
  PackageCheck,
  Truck,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { INDIA_MART_GALLERY_PHOTOS, PhotoGalleryItem } from '@/lib/seedData';
import RFQModal from '@/components/public/RFQModal';

const CATEGORIES = [
  { id: 'all', label: 'All Photos (38+)' },
  { id: 'Drainage Infrastructure', label: 'Drainage Infrastructure (20)' },
  { id: 'Expansion Joints', label: 'Expansion Joints (9)' },
  { id: 'Shuttering & Centering', label: 'Shuttering & Centering (6)' },
  { id: 'Scaffolding Systems', label: 'Scaffolding & Jacks (3)' },
];

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoGalleryItem | null>(null);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [activeRfqProduct, setActiveRfqProduct] = useState<string | undefined>();

  const filteredPhotos = INDIA_MART_GALLERY_PHOTOS.filter((photo) => {
    const matchesCategory =
      selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesQuery =
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (photo.price && photo.price.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleOpenRFQ = (productName?: string) => {
    setActiveRfqProduct(productName);
    setIsRfqOpen(true);
  };

  return (
    <div className="bg-white text-black min-h-screen py-10 px-4 sm:px-8 space-y-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb & Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-600 font-bold">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-red-600">Factory & Production Photo Gallery</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 uppercase tracking-wider mb-2">
                <Camera className="w-4 h-4" />
                <span>Live Factory Verification (Patna Works)</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
                Authentic Manufacturing Photos
              </h1>
              <p className="text-xs sm:text-sm text-neutral-700 mt-2 max-w-2xl font-medium leading-relaxed">
                High-resolution authentic photographs of our real fabrication batches, CNC sheared centering plates, heavy bridge drainage spouts, strip seal expansion joints, and scaffolding systems produced at Patna Central Works.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.indiamart.com/jmkengineeringdevelopers/photos.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black rounded-xl text-xs font-bold border border-neutral-300 transition flex items-center gap-1.5 shadow-sm"
              >
                <span>IndiaMART Gallery</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-600" />
              </a>

              <button
                onClick={() => handleOpenRFQ()}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <span>Request Instant Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quality Badges Header Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-900 text-white p-5 rounded-2xl border border-neutral-800 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">38+ Original</div>
              <div className="text-[11px] text-neutral-400 font-medium">Verified Photos</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">Patna Works</div>
              <div className="text-[11px] text-neutral-400 font-medium">Real Workshop Batch</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">100% Raw Steel</div>
              <div className="text-[11px] text-neutral-400 font-medium">IS 2062 Grade IS Steel</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">Direct Ex-Factory</div>
              <div className="text-[11px] text-neutral-400 font-medium">Transparent Pricing</div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-neutral-50 border-2 border-neutral-200 p-4 rounded-2xl space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gallery photos (e.g. Scaffolding, Drainage Spouts, Shuttering...)"
                className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 shadow-inner"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-black text-xs font-bold rounded-xl transition"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-200">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-600/30'
                    : 'bg-white text-neutral-800 hover:bg-neutral-200 border border-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-white border-2 border-neutral-200 hover:border-red-600 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with guaranteed visibility */}
              <div className="relative aspect-square bg-neutral-100 p-3 overflow-hidden flex items-center justify-center">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if connection fails
                    (e.target as HTMLImageElement).src = 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg';
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Top Category Badge */}
                <span className="absolute top-2 left-2 text-[10px] font-black uppercase text-red-700 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded border border-neutral-200 shadow-sm">
                  {photo.category}
                </span>

                {photo.price && (
                  <span className="absolute bottom-2 right-2 text-[10px] font-black text-white bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    {photo.price}
                  </span>
                )}
              </div>

              {/* Text Card Footer */}
              <div className="p-3.5 space-y-1.5 bg-white border-t border-neutral-100 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black text-neutral-900 group-hover:text-red-600 transition line-clamp-2 leading-snug">
                    {photo.title}
                  </h3>
                  {photo.moq && (
                    <p className="text-[10px] text-neutral-500 font-bold mt-1">
                      MOQ: {photo.moq}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-black text-red-600 border-t border-neutral-100">
                  <span className="flex items-center gap-1">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-300 space-y-3">
            <Camera className="w-12 h-12 text-neutral-400 mx-auto" />
            <h3 className="text-lg font-black text-neutral-800">No photos match your query</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto font-medium">
              Try searching with different terms like "Drainage", "Joint", "Centering", or reset filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dedicated Machinery Videos Banner (linking to /videos) */}
        <section className="bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-red-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Video Inspection & Live Operation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Looking for Live Workshop Videos & Site Footages?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                Explore our full authentic Video Library featuring 8 HD videos of 250 MT press cold-bending, submerged arc welding, prop jack automated threading, and dispatch trucks loading.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                href="/videos"
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Browse Video Hub (8 Videos)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl border-2 border-neutral-300 max-w-3xl w-full overflow-hidden shadow-2xl space-y-0 my-auto animate-in fade-in zoom-in duration-200">
            {/* Modal Image Header */}
            <div className="relative aspect-square sm:aspect-video bg-neutral-100 flex items-center justify-center p-4 border-b border-neutral-200">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[55vh] max-w-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-black/80 text-white hover:bg-red-600 p-2.5 rounded-full transition shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-red-100 text-red-700 px-3 py-1 rounded-lg">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-neutral-500 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Patna Central Works Verified Batch</span>
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-black leading-tight">
                  {selectedPhoto.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-neutral-700">
                  {selectedPhoto.price && (
                    <span className="text-red-600 font-black text-sm bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                      Estimated Price: {selectedPhoto.price}
                    </span>
                  )}
                  {selectedPhoto.moq && (
                    <span className="bg-neutral-100 px-2.5 py-1 rounded-md border border-neutral-200">
                      Minimum Order: {selectedPhoto.moq}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {selectedPhoto.slug && (
                    <Link
                      href={`/products/${selectedPhoto.slug}`}
                      className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black font-black text-xs uppercase tracking-wider rounded-xl transition border border-neutral-300"
                    >
                      View Full Specs
                    </Link>
                  )}
                  <a
                    href="tel:+919431028475"
                    className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs rounded-xl transition border border-neutral-300 flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                    <span>Call Plant</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const title = selectedPhoto.title;
                      setSelectedPhoto(null);
                      handleOpenRFQ(title);
                    }}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition flex items-center gap-1.5"
                  >
                    <span>Request Batch Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={activeRfqProduct}
      />
    </div>
  );
}
