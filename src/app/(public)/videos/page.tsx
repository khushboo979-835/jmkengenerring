'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Video,
  Play,
  ChevronRight,
  ShieldCheck,
  Search,
  X,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
  Share2,
  Factory,
  Truck,
  Youtube
} from 'lucide-react';
import { INDIA_MART_VIDEOS, IndiaMartVideoItem } from '@/lib/seedData';
import RFQModal from '@/components/public/RFQModal';

const VIDEO_CATEGORIES = [
  { id: 'all', label: 'All Videos (8)' },
  { id: 'Expansion Joints', label: 'Expansion Joints' },
  { id: 'Shuttering & Centering', label: 'Shuttering & Centering' },
  { id: 'Scaffolding Systems', label: 'Scaffolding Systems' },
  { id: 'Factory Tour', label: 'Factory & Machining' },
  { id: 'Logistics & Dispatch', label: 'Logistics & Dispatch' },
  { id: 'Site Execution', label: 'Site Execution' },
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<IndiaMartVideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [activeRfqProduct, setActiveRfqProduct] = useState<string | undefined>();
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredVideos = INDIA_MART_VIDEOS.filter((vid) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      vid.category === selectedCategory ||
      (selectedCategory === 'Factory Tour' && (vid.category === 'Factory Tour' || vid.category === 'Steel Fabrication' || vid.category === 'Bridge Bearings & Joints'));
    
    const matchesQuery =
      vid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vid.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  const handleOpenRFQ = (productTitle?: string) => {
    setActiveRfqProduct(productTitle);
    setIsRfqOpen(true);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
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
            <span className="text-red-600">Factory & Site Production Videos</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 uppercase tracking-wider mb-2">
                <Video className="w-4 h-4" />
                <span>Verified Manufacturing Footage (Patna Works)</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
                Authentic Video Library
              </h1>
              <p className="text-xs sm:text-sm text-neutral-700 mt-2 max-w-2xl font-medium leading-relaxed">
                Direct workshop and site execution videos showcasing our heavy steel shuttering plate press lines, bridge strip seal expansion joint installations, prop jack fabrication, and bulk dispatch loading.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.youtube.com/@jmkengineeringanddeveloper1626"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#FF0000] hover:bg-[#cc0000] text-white rounded-xl text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-[#FF0000]/30"
              >
                <Youtube className="w-4 h-4 fill-current" />
                <span>YouTube Channel</span>
              </a>

              <a
                href="https://www.indiamart.com/jmkengineeringdevelopers/videos.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black rounded-xl text-xs font-bold border border-neutral-300 transition flex items-center gap-1.5 shadow-sm"
              >
                <span>IndiaMART Channel</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-600" />
              </a>

              <button
                onClick={() => handleOpenRFQ()}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-neutral-900 text-white p-5 rounded-2xl border border-neutral-800 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">8 Verified</div>
              <div className="text-[11px] text-neutral-400 font-medium">Production Videos</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">Patna Works</div>
              <div className="text-[11px] text-neutral-400 font-medium">45,000 Sq.Ft Plant</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">MoRTH / IRC</div>
              <div className="text-[11px] text-neutral-400 font-medium">Testing & Compliance</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-white">Pan-India</div>
              <div className="text-[11px] text-neutral-400 font-medium">Direct Fleet Logistics</div>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-neutral-50 border-2 border-neutral-200 p-4 rounded-2xl space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos (e.g. Expansion Joint, Prop Jack, Shuttering, Rajrappa...)"
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
            {VIDEO_CATEGORIES.map((cat) => (
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

        {/* Videos Grid - Matching IndiaMART Portrait Cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setActiveVideo(video);
                setIsPlaying(true);
              }}
              className="group bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Vertical Portrait Video Frame */}
              <div className="relative aspect-[4/5] bg-neutral-950 overflow-hidden flex items-center justify-center">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40 group-hover:via-black/20 transition-colors" />

                {/* Central IndiaMART-Style Round Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Top Category Badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                  {video.category}
                </span>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 bg-black/90 text-white text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-white/20">
                  {video.duration}
                </span>

                {/* Video Title inside card footer like IndiaMART */}
                <div className="absolute bottom-10 left-3 right-3 text-white">
                  <h3 className="text-xs font-bold line-clamp-2 leading-snug drop-shadow-md group-hover:text-red-300 transition-colors">
                    {video.title}
                  </h3>
                </div>

                {/* View count & timestamp */}
                <div className="absolute bottom-3 left-3 text-[11px] text-neutral-300 font-medium">
                  {video.views} • {video.uploadedTime}
                </div>
              </div>

              {/* Card Bottom CTA Strip */}
              <div className="p-3.5 bg-white border-t border-neutral-100 flex items-center justify-between gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(video);
                    setIsPlaying(true);
                  }}
                  className="flex-1 py-2 bg-neutral-900 hover:bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Play Video</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenRFQ(video.title);
                  }}
                  className="py-2 px-3 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl text-xs font-black uppercase tracking-wider transition"
                  title="Request RFQ for this item"
                >
                  RFQ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Callout Box */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-red-950 text-white p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-red-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Plant Video Audits & Custom Proof-of-Concept</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Require Live Video Inspection of Your Fabrication Batch?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                We provide real-time WhatsApp video calling and HD test recording for government contractors, project managers, and quality assurance engineers prior to dispatch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <a
                href="tel:+917493916194"
                className="px-5 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition border border-neutral-700 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-red-400" />
                <span>Call Plant: +91 7493916194</span>
              </a>

              <button
                onClick={() => handleOpenRFQ('Custom Live Video Inspection Request')}
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Video RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Playback Modal Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl text-white my-auto">
            {/* Modal Video Player Stage */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.thumbnailUrl}
                alt={activeVideo.title}
                className="w-full h-full object-contain"
              />

              {/* Overlay simulation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 flex flex-col justify-between p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                      {activeVideo.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-300">
                      Duration: {activeVideo.duration}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-2 bg-black/60 hover:bg-red-600 text-white rounded-full transition"
                    title="Close Video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Big Center Play/Pause indicator */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition hover:scale-110"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </button>
                </div>

                {/* Bottom Video Progress Bar simulation */}
                <div className="space-y-2">
                  <div className="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-600 h-full w-2/3 animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>0:18 / {activeVideo.duration}</span>
                    <span className="text-red-400 font-bold">1080p Full HD Factory Reel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Metadata & Actions */}
            <div className="p-5 sm:p-6 space-y-4 bg-neutral-900 border-t border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-xs text-red-400 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>JMK Engineering & Developers – Verified Original Video</span>
                    <span>•</span>
                    <span className="text-neutral-400">{activeVideo.uploadedTime}</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-black text-white leading-tight">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                  <button
                    onClick={handleShare}
                    className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border border-neutral-700"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                  </button>

                  <a
                    href="https://www.indiamart.com/jmkengineeringdevelopers/videos.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border border-neutral-700"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                    <span>IndiaMART</span>
                  </a>
                </div>
              </div>

              {/* Tags & Product Link */}
              <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {activeVideo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-neutral-800 text-neutral-300 font-bold px-2.5 py-1 rounded-lg border border-neutral-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeVideo.productSlug && (
                    <Link
                      href={`/products/${activeVideo.productSlug}`}
                      className="px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition border border-neutral-700"
                    >
                      View Product Specs
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      const title = activeVideo.title;
                      setActiveVideo(null);
                      handleOpenRFQ(title);
                    }}
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg transition flex items-center gap-1.5"
                  >
                    <span>Request Instant Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RFQ Modal Integration */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={activeRfqProduct}
      />
    </div>
  );
}
