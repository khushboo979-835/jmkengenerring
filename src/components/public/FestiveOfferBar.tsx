'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, X, Copy, Check, Flame, Gift } from 'lucide-react';

interface FestiveOfferBarProps {
  onOpenRFQ?: () => void;
}

export default function FestiveOfferBar({ onOpenRFQ }: FestiveOfferBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('jmk_diwali_chhath_bar_dismissed');
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('jmk_diwali_chhath_bar_dismissed', 'true');
  };

  const handleCopyCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('JMKDIWALI10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isVisible) return null;

  const whatsappMessage = encodeURIComponent(
    'Namaste JMK Engineering! We are inquiring about heavy steel fabrication / shuttering plates / bridge bearings / scaffolding for our infrastructure project and want to claim the 10% Diwali & Chhath Puja festive discount (Code: JMKDIWALI10).'
  );

  return (
    <div className="relative z-50 bg-gradient-to-r from-amber-700 via-rose-700 to-amber-800 text-white border-b-2 border-amber-300 shadow-xl overflow-hidden">
      {/* Subtle Animated Gold Shimmer Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-300/25 via-transparent to-black/30 pointer-events-none"></div>

      <div className="max-w-[1650px] mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 relative z-10">
        
        {/* Left: Auspicious Glowing Diya & Chhath Puja Golden Sun Artwork */}
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-center md:justify-start">
          {/* Festive Artwork with Golden Divine Glow & Hover Effect */}
          <div className="relative shrink-0 group cursor-pointer">
            {/* Glowing Golden Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-2xl blur-sm opacity-90 group-hover:opacity-100 animate-pulse"></div>
            
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl border-2 sm:border-3 border-yellow-200 overflow-hidden shadow-2xl bg-amber-950/90 ring-2 ring-amber-400/80 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/diwali-chhath-puja.jpg"
                alt="Shubh Deepawali and Chhath Mahaparv - JMK Engineering"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent py-0.5 text-center">
                <span className="text-[8px] sm:text-[9px] font-black text-amber-200 tracking-tighter uppercase block leading-none">
                  दीपावली • छठ पूजा
                </span>
              </div>
            </div>

            {/* Auspicious Diya Sparkle */}
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-400 border-2 border-white items-center justify-center text-[9px] font-black text-amber-950">🪔</span>
            </span>
          </div>

          {/* Headline & Offer Details */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 font-black bg-amber-950/70 text-yellow-300 px-3 py-1 rounded-full text-xs sm:text-[13px] border border-yellow-400/60 uppercase tracking-wide shadow-sm">
                <Flame className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />
                <span>Shubh Deepawali & Chhath Mahaparv Mahotsav</span>
              </span>

              <span className="inline-flex items-center gap-1 bg-white text-rose-700 px-2.5 py-0.5 rounded-full text-xs font-black shadow-md border border-amber-300 animate-pulse">
                <Gift className="w-3 h-3 text-rose-600" />
                <span>FLAT 10% OFF</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-[14.5px] font-extrabold text-white leading-tight">
              Special Festive Offer on <span className="text-yellow-200 underline decoration-yellow-300 font-black">Heavy Steel Fabrication</span>, MS Shuttering Plates, Bridge Bearings & Scaffolding Bulk Bookings!
            </p>
          </div>
        </div>

        {/* Center / Right: Coupon Code, RFQ Action & WhatsApp Action */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 shrink-0">
          
          {/* Clickable Coupon Code Pill */}
          <button
            onClick={handleCopyCode}
            className="group flex items-center gap-1.5 px-3 py-2 bg-black/40 hover:bg-black/60 text-white rounded-xl border border-yellow-300/60 backdrop-blur-sm transition-all shadow-sm hover:scale-105 active:scale-95"
            title="Click to copy coupon code"
          >
            <span className="text-[11px] font-bold text-yellow-300 uppercase">Code:</span>
            <span className="font-mono font-black text-xs sm:text-sm text-yellow-100 tracking-wider">JMKDIWALI10</span>
            {copied ? (
              <span className="flex items-center gap-0.5 text-emerald-300 text-[10px] font-black bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-400/50">
                <Check className="w-3 h-3" /> Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-yellow-300 group-hover:text-white transition" />
            )}
          </button>

          {/* Optional Direct RFQ Trigger */}
          {onOpenRFQ && (
            <button
              onClick={onOpenRFQ}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full text-xs font-black shadow-md border border-amber-200 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Festive Quote</span>
            </button>
          )}

          {/* Large Glowing WhatsApp CTA Button */}
          <a
            href={`https://wa.me/917493916194?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full text-xs sm:text-sm font-black shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/50 ring-2 ring-yellow-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="Claim 10% Discount on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-500 shrink-0" />
            <span>Claim 10% Festive Offer →</span>
          </a>

          {/* Close Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="p-1.5 sm:p-2 text-yellow-200 hover:text-white hover:bg-black/30 rounded-full transition"
            aria-label="Dismiss announcement"
            title="Dismiss Announcement"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
