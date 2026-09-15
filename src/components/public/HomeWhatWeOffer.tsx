'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Package,
  FileSpreadsheet,
  Building2,
  Cpu,
  Wrench
} from 'lucide-react';

interface OfferCategory {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  items: string[];
  specsBadge: string;
  standard: string;
}

const OFFER_CATEGORIES: OfferCategory[] = [
  {
    id: 'joints',
    title: 'Expansion Joints',
    slug: 'ss-expansion-joints',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    items: [
      'Ss Expansion Joints',
      '20inch MS Expansion Joint',
      'Strip Seal Expansion Joint',
      'Bitumen Expansion Joints'
    ],
    specsBadge: 'MoRTH / IRC:SP:69',
    standard: 'Bridge Grade'
  },
  {
    id: 'shuttering',
    title: 'Shuttering Plates & Formwork',
    slug: '20-kg-ms-shuttering-plate',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg',
    items: [
      '20 Kg MS Shuttering Plate',
      '27 kg Iron Shuttering Plate',
      '35 Kg MS Shuttering Plates',
      'Column Shuttering Plates'
    ],
    specsBadge: 'IS 2062 Grade Steel',
    standard: 'High-Load Yield'
  },
  {
    id: 'scaffolding',
    title: 'Scaffolding Systems & Props',
    slug: 'scaffolding-adjustable-prop-jack',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/1/482920899/KK/PC/RQ/146888318/scaffolding-adjustable-props-jack-500x500.jpg',
    items: [
      'Adjustable Steel Scaffolding Jack',
      'Scaffolding Adjustable Prop Jack',
      'Vertical Scaffolding Jack',
      'Forged U-Head & Base Jacks'
    ],
    specsBadge: 'IS 1161 Heavy Duty',
    standard: 'Tested 40kN+'
  },
  {
    id: 'drainage',
    title: 'Bridge Drainage Spouts',
    slug: 'iron-drainage-spouts',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476989955/PV/II/RN/146888318/mild-steel-pop-up-drainage-spout-500x500.jpg',
    items: [
      'Iron Drainage Spouts',
      '12mm MS Drainage Spout',
      '10mm Mild Steel Drainage Spout',
      'Cast Iron Carriageway Spouts'
    ],
    specsBadge: 'IRC:83 / Cast Iron & GI',
    standard: 'MoRTH Sec 2700'
  },
  {
    id: 'bearings',
    title: 'Bridge Bearings & POT-PTFE',
    slug: 'elastomeric-pot-ptfe-bridge-bearings',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476991491/YM/YK/CZ/146888318/elastomeric-bridge-bearing-500x500.jpg',
    items: [
      'Elastomeric Pot PTFE Bearings',
      'Elastomeric Bridge Bearing',
      'Pot PTFE Bridge Bearings',
      'Reinforced Neoprene Pads'
    ],
    specsBadge: 'IRC:83 (Part II & III)',
    standard: 'Virgin Polymer'
  },
  {
    id: 'centering',
    title: 'Centering Sheets & Planks',
    slug: 'mild-steel-centring-plates',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/507136787/QF/CS/CD/146888318/mild-steel-centering-sheet-500x500.jpg',
    items: [
      'Mild Steel Centring Plates',
      '13 Kg Mild Steel Centering Sheet',
      '20 Kg Steel Centering Plates',
      'Mild Steel Scaffolding Planks'
    ],
    specsBadge: 'Cold Sheared High Yield',
    standard: 'Batch Verified'
  },
  {
    id: 'h-frame',
    title: 'H-Frame Scaffolding & Towers',
    slug: 'iron-h-frame-scaffolding-system',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507519619/CV/TB/SN/146888318/mild-steel-h-frame-scaffolding-500x500.jpg',
    items: [
      'Iron H Frame Scaffolding System',
      'Mild Steel H Frame Scaffolding',
      'Stainless Steel H Frame',
      'Cross Braces & Couplers'
    ],
    specsBadge: 'Modular Staging',
    standard: 'Precision Lock'
  },
  {
    id: 'couplers',
    title: 'Scaffolding Couplers & Planks',
    slug: 'mild-steel-scaffolding-walkway-planks',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512287021/CV/VO/ET/146888318/scaffold-walkway-plank-500x500.jpeg',
    items: [
      'MS Scaffolding Walkway Planks',
      'Pressed Mild Steel Swivel Coupler',
      'Drop Forged Right Angle Coupler',
      'Joint Pins & Clamp Fittings'
    ],
    specsBadge: 'BS 1139 Standard',
    standard: 'Heavy Forged'
  }
];

export default function HomeWhatWeOffer({ onOpenRFQ }: { onOpenRFQ: (item?: string) => void }) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-50/60 text-black px-4 sm:px-8 border-b-2 border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-widest bg-red-100/70 border border-red-200 px-3.5 py-1 rounded-full shadow-sm">
            <Package className="w-3.5 h-3.5 text-red-600" />
            <span>Infrastructure Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Products & Services
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Explore our complete range of certified bridge engineering components, high-load shuttering formworks, and modular scaffolding systems.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* 2-Row x 4-Column Grid with Unique Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFER_CATEGORIES.map((cat) => {
            const isImgBroken = failedImages[cat.id];

            return (
              <div
                key={cat.id}
                className="group relative bg-white border border-neutral-200/90 hover:border-red-600 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
              >
                {/* Top Subtle Industrial Accent Stripe */}
                <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 w-full"></div>

                {/* Main Clickable Card Body linking to Product Page */}
                <Link
                  href={`/products/${cat.slug}`}
                  className="flex-1 flex flex-col focus:outline-none"
                  title={`View specifications for ${cat.title}`}
                >
                  {/* Image Container with Fixed Height & Fallback Handler */}
                  <div className="relative h-56 w-full bg-gradient-to-b from-neutral-100/90 to-neutral-50/40 p-4 flex items-center justify-center border-b border-neutral-100 overflow-hidden">
                    {/* Background Pattern Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

                    {!isImgBroken ? (
                      <img
                        src={cat.imageUrl}
                        alt={cat.title}
                        onError={() => handleImageError(cat.id)}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 space-y-2 bg-neutral-100 rounded-xl">
                        <Wrench className="w-8 h-8 text-red-500 stroke-[1.5]" />
                        <span className="text-[11px] font-black text-neutral-700 uppercase tracking-wider">
                          Patna Works Fabricated
                        </span>
                      </div>
                    )}

                    {/* Specs Badge - Top Left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 bg-red-600/95 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-md border border-red-500">
                        {cat.specsBadge}
                      </span>
                    </div>

                    {/* Quality Standard Tag - Bottom Right */}
                    <div className="absolute bottom-2 right-2 z-10">
                      <span className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                        <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                        {cat.standard}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                        {cat.title}
                      </h3>

                      {/* Product Bullets with Modern Diamond/Tick Indicators */}
                      <ul className="space-y-1.5 text-xs text-neutral-600 font-medium">
                        {cat.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 line-clamp-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>

                {/* Bottom Card Actions Bar */}
                <div className="p-4 bg-neutral-50/80 border-t border-neutral-200/80 flex items-center justify-between gap-2 mt-auto">
                  <Link
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black text-slate-800 hover:text-red-600 transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-red-600 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onOpenRFQ(cat.title);
                    }}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-red-600/20 hover:shadow-red-600/40"
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Complete Range Button */}
        <div className="text-center pt-2">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-neutral-900 text-red-600 hover:text-white border-2 border-red-600 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-600/10 hover:shadow-xl group"
          >
            <span>View Complete Range (60+ Products)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Deals in HSN Code Section */}
        <div className="bg-white rounded-3xl border-2 border-neutral-200 overflow-hidden shadow-md space-y-0">
          <div className="bg-[#0b1b3a] text-white p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-red-400" />
              <h3 className="text-sm sm:text-base font-black uppercase tracking-wider">
                Deals in HSN Code
              </h3>
            </div>
            <span className="text-xs text-neutral-300 font-mono">GST & Customs Compliant</span>
          </div>

          <div className="divide-y divide-neutral-200 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 items-center bg-neutral-50/50 hover:bg-neutral-100 transition">
              <div className="sm:col-span-3 font-mono font-black text-red-600 text-sm">
                HSN 7303
              </div>
              <div className="sm:col-span-9 font-medium text-neutral-800 leading-relaxed">
                Tubes, pipes and hollow profiles, of cast iron / mild steel used in bridge deck drainage spouts & scaffolding staging.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 items-center bg-white hover:bg-neutral-100 transition">
              <div className="sm:col-span-3 font-mono font-black text-red-600 text-sm">
                HSN 995413
              </div>
              <div className="sm:col-span-9 font-medium text-neutral-800 leading-relaxed">
                Construction services of industrial buildings such as buildings used for production activities (used for assembly line activities), workshops, storage buildings and other similar industrial buildings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
