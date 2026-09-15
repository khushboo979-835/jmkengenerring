'use client';

import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  UserCheck,
  MapPin,
  Calendar
} from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  productName?: string;
  comment: string;
  verified: boolean;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev_1',
    name: 'Chandni Varma',
    location: 'Patna, Bihar',
    rating: 5,
    date: '21-August-26',
    productName: 'Shuttering Plates',
    comment: 'Good service Good Quality material',
    verified: true
  },
  {
    id: 'rev_2',
    name: 'Shahnawaz',
    location: 'Kishanganj, Bihar',
    rating: 5,
    date: '22-July-26',
    productName: 'Scaffolding Adjustable Prop Jack',
    comment: 'Prompt dispatch to site, strong fabrication and verified IS steel quality.',
    verified: true
  },
  {
    id: 'rev_3',
    name: 'Rajeshwar Singh (Senior Project Manager)',
    location: 'Ranchi, Jharkhand',
    rating: 5,
    date: '14-June-26',
    productName: 'Strip Seal Expansion Joint',
    comment: 'Installed at river bridge project without any issue. MoRTH compliant MTC provided on site delivery.',
    verified: true
  },
  {
    id: 'rev_4',
    name: 'Vivek Singhania',
    location: 'Patna Central, Bihar',
    rating: 5,
    date: '28-May-26',
    productName: 'POT-PTFE Bridge Bearings',
    comment: 'Best heavy steel fabrication works in Bihar. Fair ex-factory pricing and direct technical coordination.',
    verified: true
  }
];

export default function HomeReviewsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? REVIEWS_DATA : REVIEWS_DATA.slice(0, 2);

  return (
    <section className="py-16 sm:py-20 bg-white text-black px-4 sm:px-8 border-b-2 border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-600 uppercase tracking-wider bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>IndiaMART Verified Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Ratings & Reviews
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Rating Breakdown & Satisfaction Box (Exact media_1788864002098.png) */}
        <div className="bg-neutral-50 rounded-3xl border-2 border-neutral-200 p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Score & Breakdown Bars */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left border-b lg:border-b-0 lg:border-r border-neutral-200 pb-6 lg:pb-0 lg:pr-8">
              <div className="space-y-1 text-center">
                <div className="text-4xl sm:text-5xl font-black text-black">
                  4.3<span className="text-xl text-neutral-400">/5</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <div className="relative w-4 h-4">
                    <Star className="w-4 h-4 text-neutral-300 absolute inset-0" />
                    <div className="overflow-hidden w-[35%] absolute inset-0">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-neutral-500 font-bold">40 Verified Ratings</div>
              </div>

              {/* Progress bars */}
              <div className="w-full max-w-xs space-y-1.5 text-xs font-bold text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="w-6">5 ★</span>
                  <div className="flex-1 bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[65%]"></div>
                  </div>
                  <span className="w-8 text-neutral-500">65%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6">4 ★</span>
                  <div className="flex-1 bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[15%]"></div>
                  </div>
                  <span className="w-8 text-neutral-500">15%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6">3 ★</span>
                  <div className="flex-1 bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[10%]"></div>
                  </div>
                  <span className="w-8 text-neutral-500">10%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6">2 ★</span>
                  <div className="flex-1 bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-neutral-300 h-full w-[5%]"></div>
                  </div>
                  <span className="w-8 text-neutral-500">5%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6">1 ★</span>
                  <div className="flex-1 bg-neutral-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-400 h-full w-[5%]"></div>
                  </div>
                  <span className="w-8 text-neutral-500">5%</span>
                </div>
              </div>
            </div>

            {/* Right: User Satisfaction Circles */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-600 uppercase">
                <ThumbsUp className="w-4 h-4" />
                <span>User Satisfaction (100% Score)</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-center space-y-1">
                  <div className="w-12 h-12 rounded-full border-4 border-amber-400 mx-auto flex items-center justify-center font-black text-xs text-amber-800 bg-white">
                    100%
                  </div>
                  <div className="text-xs font-bold text-neutral-800">Response</div>
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-center space-y-1">
                  <div className="w-12 h-12 rounded-full border-4 border-amber-400 mx-auto flex items-center justify-center font-black text-xs text-amber-800 bg-white">
                    100%
                  </div>
                  <div className="text-xs font-bold text-neutral-800">Quality</div>
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-center space-y-1">
                  <div className="w-12 h-12 rounded-full border-4 border-amber-400 mx-auto flex items-center justify-center font-black text-xs text-amber-800 bg-white">
                    100%
                  </div>
                  <div className="text-xs font-bold text-neutral-800">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Most Relevant Reviews List (Exact media_1788864002098.png) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Most Relevant Reviews
            </h3>
            <span className="text-xs text-neutral-500 font-bold">Patna Works Verified Buyers</span>
          </div>

          <div className="space-y-3">
            {displayedReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 bg-white rounded-2xl border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-black">{rev.name}</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-xs text-neutral-600 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-500" />
                      {rev.location}
                    </span>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 font-bold">
                  <span>{rev.date}</span>
                  {rev.productName && (
                    <>
                      <span>•</span>
                      <span className="text-neutral-800">Product Name: <strong className="text-black">{rev.productName}</strong></span>
                    </>
                  )}
                </div>

                {rev.comment && (
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium pt-1 leading-relaxed">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Show More Reviews Button */}
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-neutral-100 text-blue-900 hover:text-black border-2 border-blue-900 rounded-xl text-xs font-black transition shadow-sm"
            >
              <span>{showAll ? 'Show Fewer Reviews' : 'Show More Reviews'}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

