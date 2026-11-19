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
  VolumeX,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRFQ: (productName?: string) => void;
}

// 6 Authentic High-Clarity Industrial & Manufacturing Photos
const HERO_SLIDER_IMAGES = [
  {
    id: 'yellow-girder-staging-truss',
    title: 'Heavy Civil Staging Trusses & Tubular Steel Girders',
    subtitle: 'Heavy Structural Steel Framing, Turnkey Industrial PEB Fabrication & Heavy Erection',
    url: '/images/about/yellow-girder-staging-truss.jpg',
  },
  {
    id: 'steel-shuttering-box-culvert',
    title: 'Heavy MS Steel Shuttering Plates & Box Culvert Formwork',
    subtitle: 'IS 2062 Grade Steel Centering Plates, Shuttering Angles & Monolithic Concrete Casting Moulds',
    url: '/images/hero/steel-shuttering-box-culvert.jpg',
  },
  {
    id: 'highway-w-beam-crash-barrier',
    title: 'MoRTH Approved W-Beam Highway Crash Barriers',
    subtitle: 'Hot-Dip Galvanized High-Tensile Steel Road Safety Guardrails with Posts & Fasteners',
    url: '/images/hero/highway-w-beam-crash-barrier.jpg',
  },
  {
    id: 'scaffolding-cuplock-staging',
    title: 'Heavy Cuplock Scaffolding Staging Systems & Stair Towers',
    subtitle: 'Heavy-Duty Modular Scaffolding, Prop Jacks, Base Plates & Multi-Tier Access Towers',
    url: '/images/hero/scaffolding-cuplock-staging.jpg',
  },
  {
    id: 'pot-ptfe-bridge-bearing-plates',
    title: 'POT-PTFE Bridge Bearings & Machined Disc Steel Plates',
    subtitle: 'IRC:83 (Part III) Compliant High-Load Fixed & Guided Bridge Bearings with Stainless Steel Sliding Plates',
    url: '/images/hero/pot-ptfe-bridge-bearing-plates.jpg',
  },
  {
    id: 'circular-well-formwork',
    title: 'Circular Well & Heavy Pier Shuttering Systems',
    subtitle: 'Heavy RCC Pier Formwork, Segmental Gantry & Pier Cap Staging',
    url: '/images/about/circular-well-formwork.jpg',
  }
];

// 4 Compact Master Product Categories (Docked neatly on the border below the hero)
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Preload all slider images on mount for instant zero-delay switching
  useEffect(() => {
    HERO_SLIDER_IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.url;
    });
  }, []);

  // Smooth 6-Second Auto-Transition with Hover Pause
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
  };

  const goToPrevSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDER_IMAGES.length) % HERO_SLIDER_IMAGES.length);
  };

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

    // 4. Pause when browser tab is inactive / backgrounded
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
      {/* Hidden SEO H1 for indexing */}
      <h1 className="sr-only">
        JMK Engineering & Developers - Heavy Steel Fabrication & Infrastructure Products Manufacturer Bihar
      </h1>

      {/* 100% Full-Bleed Edge-to-Edge Hero Slider with Right-Side Video Player Box */}
      <div 
        ref={heroContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden bg-slate-950 border-b-2 border-neutral-300 shadow-xl min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-12"
      >
        {/* Background Image Carousel (Smooth Cross-Fade) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {HERO_SLIDER_IMAGES.map((img, idx) => {
            const isActive = idx === currentSlide;
            const isPrev = idx === prevSlide;
            return (
              <div
                key={img.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : isPrev ? 'opacity-0 z-0' : 'opacity-0 -z-10'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
          {/* Subtle multi-layer cinematic scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none z-10" />
        </div>

        {/* Carousel Prev / Next Arrow Navigation */}
        <button
          type="button"
          onClick={goToPrevSlide}
          aria-label="Previous image"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={goToNextSlide}
          aria-label="Next image"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 hidden sm:block lg:hidden"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Top Eyebrow Status Pill */}
        <div className="relative z-20 text-center lg:text-left pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/60 text-neutral-200 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>EST. 2021 &nbsp;|&nbsp; PROPRIETORSHIP FIRM &nbsp;|&nbsp; ISO COMPLIANT OPERATIONS</span>
          </div>
        </div>

        {/* Main Central Grid: Left Content + Right-Side Dedicated Video Player Box */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (Headlines, Description & Action Buttons) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl">
              JMK <span className="text-red-500 drop-shadow">Engineering & Developers</span>
              <span className="block text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-neutral-100 mt-2.5 tracking-normal leading-snug">
                Pioneering Heavy Steel Fabrication & Infrastructure Excellence
              </span>
            </h1>

            <p className="max-w-2xl mx-auto lg:mx-0 text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed drop-shadow">
              Direct ex-factory manufacturing of POT-PTFE bridge bearings, strip seal expansion joints, MS shuttering plates, and scaffolding systems for highways, bridges, and commercial infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/products"
                className="px-6 sm:px-7 py-3 bg-black/80 hover:bg-black text-white rounded-full text-xs sm:text-sm font-bold border border-white/40 transition-all duration-200 flex items-center gap-2 shadow-xl backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <LayoutGrid className="w-4 h-4 text-red-500" />
                <span>Explore Product Catalog</span>
              </Link>

              <button
                type="button"
                onClick={() => onOpenRFQ('Heavy Civil Structural Fabrication')}
                className="px-6 sm:px-7 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs sm:text-sm font-black transition-all duration-200 shadow-xl shadow-red-600/40 ring-2 ring-amber-400 hover:ring-amber-300 animate-pulse flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Edit3 className="w-4 h-4 text-amber-200" />
                <span>Request Instant Quote / RFQ</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dedicated Video Player Box (Native 9:16 Aspect, 100% Full-Frame, No Cropping) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[270px] sm:max-w-[300px] aspect-[9/16] max-h-[460px] sm:max-h-[490px] rounded-2xl overflow-hidden bg-black/90 border-2 border-white/25 shadow-2xl relative group ring-1 ring-white/10">
              {/* Vertical Factory Fabrication Video */}
              <video
                ref={videoRef}
                src="/videos/jmk-fabrication.mp4"
                poster="/images/hero/peb-industrial-warehouse.jpg"
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center"
                aria-label="JMK Engineering Factory Fabrication Video"
              />

              {/* Top Live Badge */}
              <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>LIVE FABRICATION</span>
              </div>

              {/* Sound Toggle Button */}
              <button
                type="button"
                onClick={toggleSound}
                aria-label={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 hover:bg-black text-white text-[11px] font-bold border border-white/30 backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-300">Tap for Sound</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="text-emerald-300">Sound ON</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Hero Info Bar (Carousel Dots Pagination & Telemetry) */}
        <div className="relative z-20 flex flex-wrap items-center justify-between text-xs text-neutral-300 pt-3 border-t border-white/15 w-full gap-2">
          {/* Active Slide Dots */}
          <div className="flex items-center gap-1.5">
            {HERO_SLIDER_IMAGES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  setPrevSlide(currentSlide);
                  setCurrentSlide(dotIdx);
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentSlide
                    ? 'w-6 h-2 bg-red-600'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
            <span className="text-[11px] font-mono text-neutral-400 ml-2 hidden sm:inline">
              0{currentSlide + 1} / 0{HERO_SLIDER_IMAGES.length}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-semibold text-neutral-300">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>MoRTH & IRC:83 Compliant</span>
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-300">Patna Central Works, Bihar</span>
          </div>
        </div>
      </div>

      {/* Exactly 4 Compact Product Cards Docked Right Below the Border */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 lg:-mt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {SHAPED_PRODUCT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white/95 backdrop-blur-md border-2 border-neutral-200 hover:border-red-600 rounded-xl p-3 sm:p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer hover:-translate-y-1.5 ring-1 ring-black/5"
              >
                {/* Full Clickable Card Link */}
                <Link
                  href={`/products/${card.slug}`}
                  className="block flex-1 focus:outline-none"
                >
                  {/* Clean Compact Proportional Image */}
                  <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-100 relative mb-2.5 border border-neutral-100 shadow-inner">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-sm text-white font-bold text-[9px] tracking-wide uppercase shadow-sm">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-1 text-left">
                    {/* Primary Product Name in Bold Black */}
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-red-600 transition leading-snug line-clamp-1">
                        {card.title}
                      </h3>
                    </div>

                    {/* Specifications Lines */}
                    <div className="space-y-0.5 text-[10px] sm:text-[11px] text-neutral-600 font-medium">
                      <p className="text-neutral-500 truncate">{card.specLine1}</p>
                      <p className="font-bold text-neutral-900 truncate">{card.specLine2}</p>
                    </div>
                  </div>
                </Link>

                {/* Bottom Card Actions: Compact View Specs & Request Quote */}
                <div className="pt-2 mt-2 border-t border-neutral-200 flex items-center justify-between gap-1.5 relative z-10">
                  <Link
                    href={`/products/${card.slug}`}
                    className="flex-1 py-1 px-2 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-md text-[10px] sm:text-[11px] font-bold transition flex items-center justify-center gap-1 border border-neutral-300"
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
                    className="py-1 px-3 bg-red-600 hover:bg-red-700 text-white rounded-md text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition shadow-sm hover:scale-105 active:scale-95"
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
