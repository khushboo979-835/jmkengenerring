'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Camera,
  Layers,
  ZoomIn,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { INDIA_MART_GALLERY_PHOTOS, PhotoGalleryItem } from '@/lib/seedData';

interface PhotosSectionProps {
  onOpenRFQ: (productName?: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Factory Photos' },
  { id: 'Shuttering & Centering', label: 'Shuttering & Centering' },
  { id: 'Scaffolding Systems', label: 'Scaffolding & Staging' },
  { id: 'Expansion Joints & Bearings', label: 'Bearings & Joints' },
  { id: 'Highway & Barriers', label: 'Highway & Crash Barriers' },
  { id: 'Drainage Infrastructure', label: 'Bridge Drainage' },
  { id: 'Heavy Infrastructure', label: 'Heavy Infrastructure' },
];

export default function PhotosSection({ onOpenRFQ }: PhotosSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoGalleryItem | null>(null);

  const filteredPhotos = INDIA_MART_GALLERY_PHOTOS.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  return (
    <section className="py-20 bg-neutral-50 text-black px-4 sm:px-8 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5 text-red-600" />
              <span>Official IndiaMART Photo Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Live Production & Factory Dispatch Photos
            </h2>
            <p className="text-sm text-neutral-700 mt-2 max-w-2xl font-medium">
              Authentic workshop fabrication batches, CNC press-brake forming, hot-dip galvanizing, and staged consignments from our Patna Central Works.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/photos"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md"
            >
              <span>View Full Photo Archive</span>
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
                  : 'bg-white text-neutral-800 hover:bg-neutral-100 hover:text-black border border-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.slice(0, 12).map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square bg-white border-2 border-neutral-200 hover:border-red-600 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-end"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-black uppercase text-red-400 bg-black/60 px-2 py-0.5 rounded w-fit mb-1">
                  {photo.category}
                </span>
                <p className="text-xs font-bold line-clamp-2">{photo.title}</p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-red-300 font-bold">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view batch specs</span>
                </div>
              </div>

              <div className="absolute top-2 right-2 bg-black/80 text-white p-1 rounded-md opacity-70 group-hover:opacity-100">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal in White, Black & Red */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border-2 border-neutral-300 max-w-3xl w-full overflow-hidden shadow-2xl space-y-4">
            <div className="relative aspect-video bg-neutral-100 flex items-center justify-center p-4 border-b border-neutral-200">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[60vh] max-w-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-black text-white hover:bg-red-600 p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-red-100 text-red-700 px-2.5 py-1 rounded-md">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-neutral-500 font-bold">Patna Central Works Batch</span>
              </div>

              <h3 className="text-lg font-black text-black">{selectedPhoto.title}</h3>
              <p className="text-xs text-neutral-600 font-medium leading-relaxed">{selectedPhoto.price ? `Price: ${selectedPhoto.price}` : 'Engineered to IS / MoRTH Standards'}</p>

              <div className="pt-2 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const title = selectedPhoto.title;
                    setSelectedPhoto(null);
                    onOpenRFQ(title);
                  }}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition"
                >
                  Request Batch Pricing (RFQ)
                </button>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs rounded-xl transition border border-neutral-300"
                >
                  Close Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
