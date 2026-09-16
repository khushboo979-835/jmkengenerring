'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, X } from 'lucide-react';

export default function FestiveOfferBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('jmk_vishwakarma_bar_dismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('jmk_vishwakarma_bar_dismissed', 'true');
  };

  if (!isVisible) return null;

  const whatsappMessage = encodeURIComponent(
    'Namaste JMK Engineering! I want to claim the 10% Vishwakarma Puja discount (Code: JMKVISHWA10) for our steel/scaffolding requirement.'
  );

  return (
    <div className="relative z-50 bg-gradient-to-r from-amber-600 via-amber-700 to-red-600 text-white border-b border-amber-400/40 shadow-md">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-medium">
        
        {/* Left / Center Content with Lord Vishwakarma Icon */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 flex-1 min-w-0">
          {/* Lord Vishwakarma Avatar Thumbnail */}
          <div className="relative shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-amber-300 shadow-md overflow-hidden bg-amber-900/50 ring-1 ring-white/50">
              <img
                src="/images/vishwakarma-puja.jpg"
                alt="Lord Vishwakarma Puja"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full"></span>
          </div>

          {/* Headline Text */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 leading-tight">
            <span className="inline-flex items-center gap-1 font-black bg-amber-950/40 px-2 py-0.5 rounded text-[11px] sm:text-xs text-amber-200 border border-amber-400/30 uppercase tracking-wide shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Shubh Vishwakarma Puja Special</span>
            </span>
            <span className="font-extrabold text-white text-xs sm:text-[13px] line-clamp-1 sm:line-clamp-none">
              Flat <strong className="text-amber-200 underline decoration-amber-300 font-black">10% OFF</strong> on Heavy Steel Fabrication, Shuttering Plates & Scaffolding Bulk Bookings!
            </span>
            <span className="hidden md:inline-flex items-center gap-1 bg-white text-red-700 font-mono font-black text-[11px] px-2 py-0.5 rounded-full shadow-sm">
              Use Code: JMKVISHWA10
            </span>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`https://wa.me/917942556842?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-xs font-black shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="Claim 10% Discount on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-500" />
            <span className="hidden sm:inline">Claim 10% Discount on WhatsApp →</span>
            <span className="sm:hidden">Claim 10% OFF →</span>
          </a>

          <button
            onClick={handleDismiss}
            className="p-1 text-amber-200 hover:text-white hover:bg-black/20 rounded-full transition"
            aria-label="Dismiss announcement"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
