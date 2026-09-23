'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  RefreshCw,
  ShieldCheck,
  Star,
  PhoneCall,
  Menu,
  X
} from 'lucide-react';
import RFQModal from './RFQModal';
import FestiveOfferBar from './FestiveOfferBar';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Shubh Vishwakarma Puja Sticky Announcement Banner */}
      <FestiveOfferBar />

      {/* Top Status Bar with Modern Smooth Moving Marquee Ticker */}
      <div className="bg-[#0b1320] text-neutral-300 text-[11px] py-1.5 px-0 border-b border-neutral-800 overflow-hidden relative z-50">
        <div className="flex items-center whitespace-nowrap overflow-hidden">
          {/* Continuous Infinite Marquee Scroll */}
          <div className="inline-flex items-center gap-8 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {/* Ticker Items Block 1 */}
            <div className="inline-flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Patna HQ Live</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-red-400 font-black">EST. 2021</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-300 font-bold">PROPRIETORSHIP FIRM</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-black bg-red-600/80 px-2 py-0.5 rounded text-[10px]">ISO 9001:2015 CERTIFIED</span>
              <span className="text-neutral-600">•</span>
              <span className="text-amber-300 font-bold">PATNA CENTRAL WORKS</span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Production: <strong>PEB Industrial Structures & Warehouses</strong></span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">Heavy MS Shuttering Plates</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">MoRTH W-Beam Highway Crash Barriers</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">POT-PTFE Bridge Bearings</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">Cuplock Scaffolding Systems</span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST Verified: <strong>10BIEPD...D2ZX</strong></span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>TrustSEAL Verified</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.3 (40 Ratings)</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-300 font-mono">Sync Status: Live 1m ago</span>
            </div>

            {/* Ticker Items Block 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="inline-flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Patna HQ Live</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-red-400 font-black">EST. 2021</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-300 font-bold">PROPRIETORSHIP FIRM</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-black bg-red-600/80 px-2 py-0.5 rounded text-[10px]">ISO 9001:2015 CERTIFIED</span>
              <span className="text-neutral-600">•</span>
              <span className="text-amber-300 font-bold">PATNA CENTRAL WORKS</span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Production: <strong>PEB Industrial Structures & Warehouses</strong></span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">Heavy MS Shuttering Plates</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">MoRTH W-Beam Highway Crash Barriers</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">POT-PTFE Bridge Bearings</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-200">Cuplock Scaffolding Systems</span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST Verified: <strong>10BIEPD...D2ZX</strong></span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>TrustSEAL Verified</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.3 (40 Ratings)</span>
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-300 font-mono">Sync Status: Live 1m ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-md border-b border-neutral-200 py-2'
            : 'border-b border-neutral-200 py-3'
        }`}
      >
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Large High-Resolution Brand Logo */}
          <Link href="/" className="flex items-center group py-0.5 shrink-0" title="JMK Engineering & Developers">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white p-1 border-2 border-neutral-200 shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover:border-red-600 transition-all duration-300">
              <img
                src="https://5.imimg.com/data5/SELLER/Logo/2025/1/478932299/PR/TT/IP/146888318/img-20231217-wa0143.jpg"
                alt="JMK Engineering & Developers Logo"
                className="w-full h-full object-contain filter contrast-105"
              />
            </div>
          </Link>

          {/* Clean Desktop Navigation Menu with Increased Font Size & Perfect Spacing */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-extrabold text-neutral-800">
            <Link
              href="/"
              className={`hover:text-red-600 transition ${
                pathname === '/' ? 'text-red-600 font-black' : ''
              }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`hover:text-red-600 transition ${
                pathname === '/products' ? 'text-red-600 font-black' : ''
              }`}
            >
              Products & Services
            </Link>

            {/* About Us with Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/about"
                className={`inline-flex items-center gap-1 hover:text-red-600 transition ${
                  pathname === '/about' ? 'text-red-600 font-black' : ''
                }`}
              >
                <span>About Us</span>
              </Link>

              {/* Hover Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-white border border-neutral-200 shadow-2xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-xs font-bold text-neutral-700 hover:bg-red-50 hover:text-red-600 transition"
                >
                  Company Profile
                </Link>
                <Link
                  href="/about#mission-vision"
                  className="block px-4 py-2 text-xs font-bold text-neutral-700 hover:bg-red-50 hover:text-red-600 transition border-t border-neutral-100"
                >
                  Mission & Vision
                </Link>
                <Link
                  href="/about#testimonials"
                  className="block px-4 py-2 text-xs font-bold text-neutral-700 hover:bg-red-50 hover:text-red-600 transition border-t border-neutral-100"
                >
                  Testimonials
                </Link>
              </div>
            </div>

            <Link
              href="/videos"
              className={`hover:text-red-600 transition ${
                pathname === '/videos' ? 'text-red-600 font-black' : ''
              }`}
            >
              Videos
            </Link>

            <Link
              href="/photos"
              className={`hover:text-red-600 transition ${
                pathname === '/photos' ? 'text-red-600 font-black' : ''
              }`}
            >
              Photos
            </Link>

            <Link
              href="/contact"
              className={`hover:text-red-600 transition ${
                pathname === '/contact' ? 'text-red-600 font-black' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Buttons (Red RFQ Button FIRST, Call Now on Far Right) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsRfqOpen(true)}
              className="px-5 sm:px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs sm:text-sm font-black transition-all shadow-md shadow-red-600/30 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Contact Supplier / Request RFQ</span>
            </button>

            <a
              href="tel:+917493916194"
              className="px-4 sm:px-5 py-2.5 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shadow-sm transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Call: +91 7493916194</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsRfqOpen(true)}
              className="px-3 py-1.5 bg-red-600 text-white rounded-full text-xs font-bold shadow-sm"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:text-red-600 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b-2 border-red-600 px-4 py-4 space-y-2.5 shadow-xl">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-bold text-neutral-800 hover:text-red-600"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-bold text-neutral-800 hover:text-red-600"
            >
              Products & Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-bold text-neutral-800 hover:text-red-600"
            >
              About Us (Company Profile)
            </Link>
            <Link
              href="/about#mission-vision"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 pl-4 text-xs font-semibold text-neutral-600 hover:text-red-600"
            >
              ↳ Mission & Vision
            </Link>
            <Link
              href="/about#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 pl-4 text-xs font-semibold text-neutral-600 hover:text-red-600"
            >
              ↳ Testimonials
            </Link>
            <Link
              href="/videos"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-sm font-bold hover:text-red-600 ${
                pathname === '/videos' ? 'text-red-600 font-black' : 'text-neutral-800'
              }`}
            >
              Videos
            </Link>
            <Link
              href="/photos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-bold text-neutral-800 hover:text-red-600"
            >
              Photos
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-bold text-neutral-800 hover:text-red-600"
            >
              Contact Us
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-bold text-red-600 hover:text-red-700"
            >
              🔒 Staff & Admin Portal
            </Link>
            <div className="pt-2 border-t border-neutral-200 space-y-1">
              <a
                href="tel:+917493916194"
                className="flex items-center gap-2 py-1 text-sm font-bold text-emerald-600"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call: +91 7493916194</span>
              </a>
              <a
                href="tel:+918651010370"
                className="flex items-center gap-2 py-1 text-sm font-bold text-neutral-700 hover:text-red-600"
              >
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>Alt: +91 8651010370</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global RFQ Modal */}
      {isRfqOpen && (
        <RFQModal
          isOpen={isRfqOpen}
          onClose={() => setIsRfqOpen(false)}
        />
      )}
    </>
  );
}
