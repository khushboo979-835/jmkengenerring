'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Layers,
  Square,
  LayoutGrid,
  ShieldCheck,
  ArrowRight,
  Edit3,
  Volume2,
  VolumeX
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRFQ: (productName?: string) => void;
}

// 5 Master Industrial Product Categories (Docked seamlessly along the border below video hero)
const SHAPED_PRODUCT_CARDS = [
  {
    id: 'card-1',
    category: 'Expansion Joints',
    title: 'SS Expansion Joint',
    specLine1: 'Grade 304/316 Stainless Steel',
    specLine2: 'MoRTH & IRC:83 Certified',
    slug: 'ss-expansion-joints',
    icon: Layers,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
  },
  {
    id: 'card-2',
    category: 'Shuttering Plates',
    title: 'MS Shuttering Plates',
    specLine1: 'IS 2062 Grade Steel | 25-35 Kg',
    specLine2: 'Box Culvert & Pier Formwork',
    slug: 'ms-shuttering-plates',
    icon: Square,
    imageUrl: '/images/hero/steel-shuttering-box-culvert.jpg',
  },
  {
    id: 'card-3',
    category: 'Centering Sheets',
    title: 'MS Centering Plates',
    specLine1: 'Heavy Slab Formwork 13-27 Kg',
    specLine2: 'Certified High Load Bearing',
    slug: 'mild-steel-centring-plates',
    icon: LayoutGrid,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg',
  },
  {
    id: 'card-4',
    category: 'Bridge Bearings',
    title: 'POT-PTFE Bearings',
    specLine1: 'High Load Multi-Span Bearings',
    specLine2: 'Elastomeric & Fixed POT Units',
    slug: 'pot-ptfe-bearings',
    icon: ShieldCheck,
    imageUrl: '/images/hero/pot-ptfe-bridge-bearing-plates.jpg',
  },
  {
    id: 'card-5',
    category: 'Scaffolding Systems',
    title: 'Cuplock & H-Frame',
    specLine1: 'Modular Multi-Tier Staging',
    specLine2: 'Heavy Prop Jacks & Pipes',
    slug: 'iron-h-frame-scaffolding-system',
    icon: LayoutGrid,
    imageUrl: '/images/hero/scaffolding-cuplock-staging.jpg',
  },
];

export default function HeroSection({ onOpenRFQ }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle sound explicitly on user button click
  const toggleSound = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.muted) {
      vid.muted = false;
      vid.volume = 1.0;
      setIsMuted(false);
      if (vid.paused) {
        vid.play().catch(() => {});
      }
    } else {
      vid.muted = true;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroContainerRef.current;
    if (!video || !hero) return;

    // 1. Attempt unmuted autoplay first on mount
    video.muted = false;
    video.volume = 1.0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // If browser policy blocks autoplay with sound before user gesture,
          // immediately start muted so video autoplays visually without delay
          video.muted = true;
          video.play().catch(() => {});
          setIsMuted(true);
        });
    }

    // 2. On first user interaction anywhere on the website (click / touch), automatically unmute
    const enableAudioOnGesture = () => {
      const vid = videoRef.current;
      if (vid && vid.muted) {
        vid.muted = false;
        vid.volume = 1.0;
        setIsMuted(false);
        if (vid.paused) {
          vid.play().catch(() => {});
        }
      }
      cleanupGestureListeners();
    };

    const cleanupGestureListeners = () => {
      window.removeEventListener('click', enableAudioOnGesture);
      window.removeEventListener('touchstart', enableAudioOnGesture);
      window.removeEventListener('pointerdown', enableAudioOnGesture);
      window.removeEventListener('keydown', enableAudioOnGesture);
    };

    window.addEventListener('click', enableAudioOnGesture, { passive: true });
    window.addEventListener('touchstart', enableAudioOnGesture, { passive: true });
    window.addEventListener('pointerdown', enableAudioOnGesture, { passive: true });
    window.addEventListener('keydown', enableAudioOnGesture, { passive: true });

    // 3. Scroll Detection: As soon as user scrolls down away from hero, pause the video immediately
    const handleScroll = () => {
      const vid = videoRef.current;
      const heroEl = heroContainerRef.current;
      if (!vid || !heroEl) return;

      const rect = heroEl.getBoundingClientRect();
      // When hero top is scrolled past by more than 100px or bottom moves out of view
      const isScrolledAway = rect.top < -100 || rect.bottom < 160;

      if (isScrolledAway) {
        if (!vid.paused) {
          vid.pause();
        }
      } else {
        if (vid.paused && !document.hidden) {
          vid.play().catch(() => {});
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 4. Pause when browser tab is inactive / backgrounded to conserve battery & CPU
    const handleVisibilityChange = () => {
      const vid = videoRef.current;
      if (!vid) return;
      if (document.hidden) {
        vid.pause();
      } else {
        // Only resume if still in top viewport
        const heroEl = heroContainerRef.current;
        if (heroEl) {
          const rect = heroEl.getBoundingClientRect();
          if (rect.top >= -100 && rect.bottom >= 160) {
            vid.play().catch(() => {});
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cleanupGestureListeners();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (video) video.pause();
    };
  }, []);

  return (
    <section className="relative bg-white pt-0 pb-16 w-full overflow-hidden">
      
      {/* 100% Full-Bleed Edge-to-Edge Hero with Bright Natural Background Video */}
      <div 
        ref={heroContainerRef}
        className="relative w-full overflow-hidden bg-slate-900 border-b-2 border-neutral-300 shadow-xl min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-12"
      >
        {/* Real Factory Video Running in Full Bright Colors (Zero Darkening Black Overlays) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src="/videos/jmk-fabrication.mp4"
            poster="/images/hero/peb-industrial-warehouse.jpg"
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          {/* Very soft edge gradient only at the top and bottom edge for seamless navbar & card blend */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Top Header Row: Status Pill & Floating Sound Toggle Button */}
        <div className="relative z-10 flex items-center justify-between gap-3 pt-2 sm:pt-4">
          {/* Eyebrow Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 text-neutral-100 border border-white/30 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>EST. 2021 &nbsp;|&nbsp; PROPRIETORSHIP FIRM &nbsp;|&nbsp; ISO COMPLIANT</span>
          </div>

          {/* Interactive Sound ON / OFF Button */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
            className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-black text-white text-xs font-bold border border-white/30 backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ring-1 ring-white/20"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 hidden sm:inline">Tap for Sound</span>
                <span className="text-amber-300 sm:hidden">Sound OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-300">Sound ON</span>
              </>
            )}
          </button>
        </div>

        {/* Main Central Headline & Modern Action Buttons (Framed with crisp typography shadows for 100% readability over bright video) */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5 my-auto py-6 sm:py-8 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            JMK <span className="text-red-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Engineering & Developers</span>
            <span className="block text-lg sm:text-2xl lg:text-3xl font-extrabold text-white mt-3 tracking-normal leading-snug drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
              Pioneering Heavy Steel Fabrication & Infrastructure Excellence
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-white font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Direct ex-factory manufacturing of POT-PTFE bridge bearings, strip seal expansion joints, MS shuttering plates, and scaffolding systems for highways, bridges, and commercial infrastructure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/products"
              className="px-6 sm:px-8 py-3.5 bg-black/80 hover:bg-black text-white rounded-full text-xs sm:text-sm font-bold border border-white/40 transition-all duration-200 flex items-center gap-2 shadow-xl backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              <LayoutGrid className="w-4 h-4 text-red-500" />
              <span>Explore Product Catalog</span>
            </Link>

            <button
              onClick={() => onOpenRFQ('Heavy Civil Structural Fabrication')}
              className="px-6 sm:px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs sm:text-sm font-black transition-all duration-200 shadow-xl shadow-red-600/40 ring-2 ring-amber-400 hover:ring-amber-300 animate-pulse flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Edit3 className="w-4 h-4 text-amber-200" />
              <span>Request Instant Quote / RFQ</span>
            </button>
          </div>
        </div>

        {/* Bottom Hero Info Bar (Telemetry / Live Badge) */}
        <div className="relative z-10 flex flex-wrap items-center justify-between text-xs text-neutral-200 pt-4 border-t border-white/20 w-full gap-2">
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-200 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-white font-bold">LIVE PRODUCTION: Heavy Steel Plant & Shuttering Works</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] font-semibold text-neutral-200">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>MoRTH & IRC:83 Compliant</span>
            </span>
            <span className="text-white/60">•</span>
            <span className="text-white">Patna Central Works, Bihar</span>
          </div>
        </div>
      </div>

      {/* 5 Distinct Product Cards Docked Seamlessly Along the Border of the Hero Video */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 lg:-mt-24 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {SHAPED_PRODUCT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white/95 backdrop-blur-md border-2 border-neutral-200 hover:border-red-600 rounded-2xl p-3.5 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer hover:-translate-y-2 ring-1 ring-black/5"
              >
                {/* Full Clickable Card Link */}
                <Link
                  href={`/products/${card.slug}`}
                  className="block flex-1 focus:outline-none"
                >
                  {/* Clean Proportional Image Container with Smooth Hover Zoom */}
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 relative mb-3 border border-neutral-100 shadow-inner">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-sm text-white font-bold text-[9px] tracking-wide uppercase shadow-sm">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-1 text-left">
                    {/* Primary Product Name in Bold Black */}
                    <h3 className="text-sm font-black text-slate-900 group-hover:text-red-600 transition leading-snug line-clamp-1">
                      {card.title}
                    </h3>

                    {/* Specifications Lines */}
                    <div className="space-y-0.5 text-xs text-neutral-600 font-medium pt-0.5">
                      <p className="text-neutral-500 truncate text-[11px]">{card.specLine1}</p>
                      <p className="font-bold text-neutral-900 text-[11px] truncate">{card.specLine2}</p>
                    </div>
                  </div>
                </Link>

                {/* Bottom Card Actions: Modern View Specs & Request Quote */}
                <div className="pt-2.5 mt-2.5 border-t border-neutral-200 flex items-center justify-between gap-2 relative z-10">
                  <Link
                    href={`/products/${card.slug}`}
                    className="flex-1 py-1.5 px-2 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 border border-neutral-300"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-3 h-3 text-red-600" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenRFQ(card.title);
                    }}
                    className="py-1.5 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-[11px] font-black uppercase tracking-wider transition shadow-sm hover:scale-105 active:scale-95"
                    title={`Request instant quote for ${card.title}`}
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
