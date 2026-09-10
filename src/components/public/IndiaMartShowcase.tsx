'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Star,
  PhoneCall,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

interface IndiaMartShowcaseProps {
  onOpenRFQ: (productName?: string) => void;
}

const INDIAMART_ITEMS = [
  {
    id: 'im_h_frame',
    title: 'Iron H Frame Scaffolding System',
    category: 'Scaffolding Systems',
    price: '₹2,650 / Set',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/4/506847242/EZ/YV/NW/146888318/iron-h-frame-scaffolding-system-500x500.jpg',
    specs: '2000 x 1200 mm • Heavy IS 1161 ERW Pipe',
    moq: '50 Sets',
    slug: 'iron-h-frame-scaffolding-system',
  },
  {
    id: 'im_soldiers',
    title: 'MS Shuttering Soldiers & Walers',
    category: 'Shuttering & Formwork',
    price: '₹3,400 / Piece',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/510968117/ZD/NW/TO/146888318/ms-hunch-shuttering-plates-500x500.jpg',
    specs: 'IS 2062 Grade E350 • Twin Channel Profile',
    moq: '20 Pieces',
    slug: 'ms-hunch-shuttering-plates',
  },
  {
    id: 'im_centering_sheets',
    title: '13 Kg & 20 Kg MS Centering Sheet',
    category: 'RCC Slab Formwork',
    price: '₹850 - ₹1,050 / Pc',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg',
    specs: '900x600mm / 1200x600mm • Cold Rolled MS',
    moq: '100 Pieces',
    slug: 'mild-steel-centring-plates',
  },
  {
    id: 'im_shuttering_plates',
    title: '27 kg Iron Shuttering Plate',
    category: 'Column & Wall Formwork',
    price: '₹1,950 / Piece',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg',
    specs: '1200 x 600 mm • High Tensile Fe 410 Steel',
    moq: '50 Pieces',
    slug: '27-kg-iron-shuttering-plate',
  },
  {
    id: 'im_props',
    title: 'Adjustable Props Scaffolding Jack',
    category: 'Scaffolding & Props',
    price: '₹1,250 / Piece',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476992280/LM/EN/TS/146888318/mild-steel-column-shuttering-plate-500x500.jpeg',
    specs: 'Size 2 (2.0m - 3.5m) • Acme Square Thread',
    moq: '100 Pieces',
    slug: 'scaffolding-adjustable-prop-jack',
  },
  {
    id: 'im_base_jacks',
    title: 'Vertical Scaffolding U-Head & Base Jacks',
    category: 'Scaffolding Hardware',
    price: '₹380 - ₹620 / Pc',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476992291/XQ/XM/AQ/146888318/column-shuttering-plate-500x500.jpeg',
    specs: '38mm x 450mm / 650mm • Malleable Cast Nut',
    moq: '150 Pieces',
    slug: 'vertical-scaffolding-jack',
  },
  {
    id: 'im_pot_bearings',
    title: 'Elastomeric POT PTFE Bridge Bearings',
    category: 'Bridge Infrastructure',
    price: '₹28,000 / Piece',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/4/505863257/GB/DG/GQ/146888318/finger-type-expansion-joint-500x500.jpg',
    specs: '1500 kN - 10,000 kN • IRC:83 MoRTH Standard',
    moq: '4 Pieces',
    slug: 'elastomeric-pot-ptfe-bridge-bearings',
  },
  {
    id: 'im_strip_seal',
    title: 'Strip Seal & 20-inch MS Expansion Joints',
    category: 'Bridge Expansion',
    price: '₹7,500 / Meter',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    specs: '80mm Movement Capacity • 100% Watertight',
    moq: '12 Meters',
    slug: 'strip-seal-expansion-joint',
  },
  {
    id: 'im_drainage_spout',
    title: '12mm & 14mm Mild Steel Drainage Spout',
    category: 'Highway Drainage',
    price: '₹1,650 / Piece',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/10/457492161/TK/WD/OC/146888318/100-mm-mild-steel-drainage-spout-500x500.jpg',
    specs: 'Hot Dip Galvanized • MoRTH Section 2700',
    moq: '25 Pieces',
    slug: '12mm-ms-drainage-spout',
  },
];

export default function IndiaMartShowcase({ onOpenRFQ }: IndiaMartShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-neutral-50 text-black px-4 sm:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Ribbon in White/Black/Red */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              <span>Verified IndiaMART Catalog • Direct Factory Rate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Featured Heavy Civil Formwork & Bearings
            </h2>
            <p className="text-sm text-neutral-700 max-w-2xl font-medium">
              Top-selling structural products sourced directly by L&T, Tata Projects, AFCONS, and State PWD contractors from our Patna Works.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleScrollLeft}
                className="w-10 h-10 rounded-xl bg-white border-2 border-neutral-300 hover:border-red-600 hover:text-red-600 flex items-center justify-center text-black transition shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-10 h-10 rounded-xl bg-white border-2 border-neutral-300 hover:border-red-600 hover:text-red-600 flex items-center justify-center text-black transition shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md"
            >
              <span>All 60+ Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {INDIAMART_ITEMS.map((item) => (
            <div
              key={item.id}
              className="min-w-[300px] sm:min-w-[340px] max-w-[340px] bg-white border-2 border-neutral-200 hover:border-red-600 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group snap-start cursor-pointer"
            >
              {/* Full Clickable Card Link */}
              <Link
                href={`/products/${item.slug}`}
                className="block flex-1 focus:outline-none"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-square bg-white p-4 border-b border-neutral-200 overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                    {item.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-black text-black text-base group-hover:text-red-600 transition block line-clamp-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-medium line-clamp-2">
                      {item.specs}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-500 font-bold block uppercase">Price Est.</span>
                      <span className="text-base font-black text-red-600 font-mono">{item.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-500 font-bold block uppercase">Min Order (MOQ)</span>
                      <span className="text-xs font-bold text-black">{item.moq}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Actions */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2 relative z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onOpenRFQ(item.title);
                  }}
                  className="px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-1"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  href={`/products/${item.slug}`}
                  className="px-3 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black rounded-xl text-xs font-bold border border-neutral-300 transition flex items-center justify-center"
                >
                  <span>Full Specs</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
