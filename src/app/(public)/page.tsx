'use client';

import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/public/HeroSection';
import HomeAboutSection from '@/components/public/HomeAboutSection';
import HomeWhatWeOffer from '@/components/public/HomeWhatWeOffer';
import HomeReviewsSection from '@/components/public/HomeReviewsSection';
import HomeGetQuoteSection from '@/components/public/HomeGetQuoteSection';
import RFQModal from '@/components/public/RFQModal';

export default function HomePage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqDefaultProduct, setRfqDefaultProduct] = useState<string | undefined>(undefined);

  // Automatically trigger the RFQ quote popup modal after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRfqOpen(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleOpenRFQ = (productName?: string) => {
    setRfqDefaultProduct(productName);
    setIsRfqOpen(true);
  };

  return (
    <div className="space-y-0 bg-white text-black">
      {/* 1. Hero Section with Clean Full-Frame Video & Docked Cards Below */}
      <HeroSection onOpenRFQ={() => handleOpenRFQ()} />

      {/* 2. Home About Us Section (Left Image Layout, Keyword-Rich, 6 IndiaMART Corporate Badges) */}
      <HomeAboutSection />

      {/* 3. What We Offer / Products & Services Grid + HSN Deals + View Complete Range */}
      <HomeWhatWeOffer onOpenRFQ={handleOpenRFQ} />

      {/* 4. IndiaMART Verified Ratings & Customer Reviews Section (4.3/5, 40 Verified Ratings) */}
      <HomeReviewsSection />

      {/* 5. Get a Free Quote / Instant Interactive BOQ Estimator & RFQ Form (GSAP-Powered) */}
      <HomeGetQuoteSection onOpenRFQ={handleOpenRFQ} />

      {/* Global RFQ Modal (opens via button click or automatically after 15 seconds) */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={rfqDefaultProduct}
      />
    </div>
  );
}
