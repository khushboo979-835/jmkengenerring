'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layers,
  Square,
  Cog,
  FileText,
  Download,
  ArrowRight,
  Edit3,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRFQ: (productName?: string) => void;
}

// 6 Authentic High-Clarity Industrial & Manufacturing Photos (100% Real Heavy Civil Engineering)
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

// 5 Product Cards with Unified Arched Rounded-Top Shape (Matching First Box Exactly)
const SHAPED_PRODUCT_CARDS = [
  {
    id: 'card-1',
    category: 'Expansion Joints',
    title: 'Ss Expansion Joint',
    specLine1: 'Special Specifications',
    specLine2: 'Specifications: 8.20mm',
    slug: 'ss-expansion-joints',
    icon: Layers,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    shapeWrapper: 'rounded-t-[28px] rounded-b-lg overflow-hidden',
    shapeStyle: 'shape-trapezoid',
  },
  {
    id: 'card-2',
    category: '20 kg 20ron',
    title: 'Shuttering Plates',
    specLine1: 'Specifications 27 mn',
    specLine2: 'Specifications: 30-30mm',
    slug: 'ms-shuttering-plates',
    icon: Square,
    imageUrl: '/images/hero/steel-shuttering-box-culvert.jpg',
    shapeWrapper: 'rounded-t-[28px] rounded-b-lg overflow-hidden',
    shapeStyle: 'shape-trapezoid',
  },
  {
    id: 'card-3',
    category: 'Bold Mg H Steel',
    title: 'Centering Shek',
    specLine1: 'Special Specifications',
    specLine2: 'Specifications 27 kg',
    slug: 'mild-steel-centring-plates',
    icon: LayoutGrid,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg',
    shapeWrapper: 'rounded-t-[28px] rounded-b-lg overflow-hidden',
    shapeStyle: 'shape-trapezoid',
  },
  {
    id: 'card-4',
    category: 'Elastomeric',
    title: 'Centerg Plates',
    specLine1: 'Special Specifications',
    specLine2: '13 Kg Mild Centering Sheet',
    slug: 'elastomeric-pot-ptfe-bridge-bearings',
    icon: Cog,
    imageUrl: '/images/hero/pot-ptfe-bridge-bearing-plates.jpg',
    shapeWrapper: 'rounded-t-[28px] rounded-b-lg overflow-hidden',
    shapeStyle: 'shape-trapezoid',
  },
  {
    id: 'card-5',
    category: 'Frame Framing',
    title: 'Scaffolding',
    specLine1: 'Special Frame Stainless',
    specLine2: 'Scaffolding Box:30mm',
    slug: 'iron-h-frame-scaffolding-system',
    icon: LayoutGrid,
    imageUrl: '/images/hero/scaffolding-cuplock-staging.jpg',
    shapeWrapper: 'rounded-t-[28px] rounded-b-lg overflow-hidden',
    shapeStyle: 'shape-trapezoid',
  },
];

export default function HeroSection({ onOpenRFQ }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [prevSlide, setPrevSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);

  // Preload all slider images on mount for instant zero-delay switching
  useEffect(() => {
    HERO_SLIDER_IMAGES.forEach((item) => {
      const img = new window.Image();
      img.src = item.url;
    });
  }, []);

  const goToSlide = (nextIdx: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(nextIdx);
  };

  const handlePrev = () => {
    goToSlide(currentSlide === 0 ? HERO_SLIDER_IMAGES.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    goToSlide((currentSlide + 1) % HERO_SLIDER_IMAGES.length);
  };

  // 4.5-second automatic cross-fade looping slider (pauses on user hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % HERO_SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  const handleDownloadPdf = (productName: string) => {
    setDownloadSuccessItem(productName);
    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 3500);
  };

  return (
    <section className="relative bg-white pt-0 pb-16 w-full overflow-hidden">
      
      {/* 100% Edge-to-Edge Full-Bleed Hero Banner (Zero left & right space, exact same height) */}
      <div 
        className="relative w-full overflow-hidden bg-neutral-900 border-b border-neutral-300 shadow-sm min-h-[460px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {/* Base Layer: Previous image remains 100% visible underneath to completely prevent any black flash */}
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_SLIDER_IMAGES[prevSlide].url}
              alt="Underlying Background"
              className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            />
          </div>

          {/* Active Layer: Smooth cross-fade transition without black screen flicker */}
          {HERO_SLIDER_IMAGES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out z-10 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
              />
            </div>
          ))}

          {/* Clean Vignette & Scrim for Perfect Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 z-20 pointer-events-none"></div>

          {/* Top Eyebrow Text (Exact media_1788858973378.png) */}
          <div className="relative z-20 text-center pt-2">
            <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-neutral-200 drop-shadow">
              EST. 2021 &nbsp;|&nbsp; PROPRIETORSHIP FIRM &nbsp;|&nbsp; ISO COMPLIANT OPERATIONS
            </p>
          </div>

          {/* Main Headline & Action Buttons with Classy JMK Engineering & Developers Sentence */}
          <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 my-auto py-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-2xl">
              JMK <span className="text-red-500">Engineering & Developers</span>
              <span className="block text-base sm:text-2xl lg:text-3xl font-extrabold text-neutral-100 mt-2 tracking-normal">
                Pioneering Heavy Steel Fabrication & Infrastructure Excellence
              </span>
            </h1>

            {/* Two Action Buttons (Exact media_1788858973378.png) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/products"
                className="px-6 sm:px-7 py-3 bg-black/70 hover:bg-black text-white rounded-full text-xs sm:text-sm font-bold border border-white/40 transition-all duration-200 flex items-center gap-2 shadow-lg backdrop-blur-sm hover:scale-105"
              >
                <LayoutGrid className="w-4 h-4 text-red-500" />
                <span>Explore Product Catalog</span>
              </Link>

              <button
                onClick={() => onOpenRFQ(HERO_SLIDER_IMAGES[currentSlide].title)}
                className="px-6 sm:px-7 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shadow-xl shadow-red-600/40 flex items-center gap-2 hover:scale-105"
              >
                <Edit3 className="w-4 h-4" />
                <span>Request Instant Quote / RFQ</span>
              </button>
            </div>
          </div>

          {/* Minimalist Manual Navigation Arrows (Left & Right) */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-red-600 text-white border border-white/30 shadow-xl flex items-center justify-center transition-all hover:scale-110 focus:outline-none backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-red-600 text-white border border-white/30 shadow-xl flex items-center justify-center transition-all hover:scale-110 focus:outline-none backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Telemetry & Slide Dots */}
          <div className="relative z-20 flex items-center justify-between text-xs text-neutral-300 pt-2 border-t border-white/15 w-full">
            <div className="flex items-center gap-2">
              {HERO_SLIDER_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-6 bg-red-600' : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Switch to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-black/60 px-3 py-1 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-white font-bold truncate max-w-xs">{HERO_SLIDER_IMAGES[currentSlide].title}</span>
            </div>
          </div>
        </div>

      {/* 5 Distinct Geometric Shaped Product Cards (Exact media_1788858973378.png) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {SHAPED_PRODUCT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer hover:-translate-y-1.5"
              >
                {/* Full Clickable Card Link */}
                <Link
                  href={`/products/${card.slug}`}
                  className="block flex-1 focus:outline-none"
                >
                  {/* Floating Arched Thumbnail Badge Matching First Box Exactly */}
                  <div className="flex items-center justify-center -mt-12 sm:-mt-14 mb-2.5">
                    <div
                      className="w-24 h-28 sm:w-28 sm:h-32 p-1.5 bg-white border-4 border-white shadow-xl group-hover:scale-105 transition-all duration-300 flex items-center justify-center rounded-t-[36px] rounded-b-2xl overflow-hidden ring-2 ring-neutral-200 group-hover:ring-red-600"
                    >
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover object-center rounded-t-[30px] rounded-b-xl"
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-1 pt-1 text-left">
                    {/* Category Title in Bold Red */}
                    <div className="flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-red-600 shrink-0" />
                      <h3 className="text-sm font-black text-red-600 group-hover:text-red-700 transition leading-tight truncate">
                        {card.category}
                      </h3>
                    </div>

                    {/* Primary Product Name in Bold Black */}
                    <p className="text-sm font-black text-black group-hover:text-red-600 transition leading-tight">
                      {card.title}
                    </p>

                    {/* Specifications Lines */}
                    <div className="space-y-0.5 text-xs text-neutral-600 font-medium pt-0.5">
                      <p className="text-neutral-500">{card.specLine1}</p>
                      <p className="font-bold text-neutral-900">{card.specLine2}</p>
                    </div>
                  </div>
                </Link>

                {/* Bottom Card Actions: Modern View Specs & Request Quote */}
                <div className="pt-2.5 mt-2.5 border-t border-neutral-200 flex items-center justify-between gap-2 relative z-10">
                  <Link
                    href={`/products/${card.slug}`}
                    className="flex-1 py-1.5 px-2 bg-neutral-100 hover:bg-neutral-200 text-black rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 border border-neutral-300"
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
                    className="py-1.5 px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-[11px] font-black uppercase tracking-wider transition shadow-sm hover:scale-105"
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
