'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Layers,
  Square,
  LayoutGrid,
  ShieldCheck,
  ArrowRight,
  Volume2,
  VolumeX
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRFQ: (productName?: string) => void;
}

// 4 Master Industrial Product Categories (Docked seamlessly on the border below video hero)
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
    category: 'Bridge Bearings',
    title: 'POT-PTFE Bearings',
    specLine1: 'High Load Multi-Span Bearings',
    specLine2: 'Elastomeric & Fixed POT Units',
    slug: 'pot-ptfe-bearings',
    icon: ShieldCheck,
    imageUrl: '/images/hero/pot-ptfe-bridge-bearing-plates.jpg',
  },
  {
    id: 'card-4',
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
          // If browser policy blocks unmuted autoplay without interaction,
          // fallback to muted so video starts visually immediately
          video.muted = true;
          video.play().catch(() => {});
          setIsMuted(true);
        });
    }

    // 2. On first user interaction anywhere on the website, automatically unmute
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

    // 3. Scroll Detection: As soon as user scrolls down away from the hero, pause the video immediately
    const handleScroll = () => {
      const vid = videoRef.current;
      const heroEl = heroContainerRef.current;
      if (!vid || !heroEl) return;

      const rect = heroEl.getBoundingClientRect();
      const isScrolledAway = rect.top < -80 || rect.bottom < 120;

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
        const heroEl = heroContainerRef.current;
        if (heroEl) {
          const rect = heroEl.getBoundingClientRect();
          if (rect.top >= -80 && rect.bottom >= 120) {
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
      {/* Hidden SEO H1 for indexing without cluttering the clean video view */}
      <h1 className="sr-only">
        JMK Engineering & Developers - Heavy Steel Fabrication & Infrastructure Products Manufacturer Bihar
      </h1>

      {/* 100% Full-Bleed Edge-to-Edge Hero Video (Zero Blank Spaces on Left/Right, Compact Height) */}
      <div 
        ref={heroContainerRef}
        className="relative w-full overflow-hidden bg-slate-950 shadow-xl h-[380px] sm:h-[440px] lg:h-[480px] max-h-[520px] flex items-center justify-center"
      >
        {/* Full Edge-to-Edge Background Video (100% Width & Height, Top-Centered Focus to Keep Face in Frame) */}
        <video
          ref={videoRef}
          src="/videos/jmk-fabrication.mp4"
          poster="/images/hero/peb-industrial-warehouse.jpg"
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          aria-label="JMK Engineering Factory Fabrication Video"
        />

        {/* Soft bottom edge gradient for smooth border docking with the 4 cards */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Floating Sound Toggle Button (Top-Right) */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-black text-white text-xs font-bold border border-white/30 backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ring-1 ring-white/20"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300">Tap for Sound</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-emerald-300">Sound ON</span>
            </>
          )}
        </button>
      </div>

      {/* Exactly 4 Master Product Cards Docked Seamlessly on the Bottom Border of the Hero Video */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-24 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SHAPED_PRODUCT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white/95 backdrop-blur-md border-2 border-neutral-200 hover:border-red-600 rounded-2xl p-4 sm:p-4.5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer hover:-translate-y-2 ring-1 ring-black/5"
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
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-sm text-white font-bold text-[10px] tracking-wide uppercase shadow-sm">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-1.5 text-left">
                    {/* Primary Product Name in Bold Black */}
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-red-600 shrink-0" />
                      <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-red-600 transition leading-snug line-clamp-1">
                        {card.title}
                      </h3>
                    </div>

                    {/* Specifications Lines */}
                    <div className="space-y-0.5 text-xs text-neutral-600 font-medium pt-0.5">
                      <p className="text-neutral-500 truncate text-[11px] sm:text-xs">{card.specLine1}</p>
                      <p className="font-bold text-neutral-900 text-[11px] sm:text-xs truncate">{card.specLine2}</p>
                    </div>
                  </div>
                </Link>

                {/* Bottom Card Actions: Modern View Specs & Request Quote */}
                <div className="pt-3 mt-3 border-t border-neutral-200 flex items-center justify-between gap-2 relative z-10">
                  <Link
                    href={`/products/${card.slug}`}
                    className="flex-1 py-1.5 px-2 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 border border-neutral-300"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenRFQ(card.title);
                    }}
                    className="py-1.5 px-3.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-black uppercase tracking-wider transition shadow-sm hover:scale-105 active:scale-95"
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
