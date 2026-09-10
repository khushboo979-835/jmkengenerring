'use client';

import React from 'react';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  FileText,
  Lock,
  ArrowUpRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white text-neutral-800 border-t-2 border-neutral-200 overflow-hidden text-sm">
      {/* 1. Top Badges Strip with 4 Floating Cards Matching Screenshot Exact media_1788865470072.png */}
      <div className="bg-neutral-50/90 border-b border-neutral-200/80 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Badge 1 */}
          <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h5 className="font-black text-black text-xs uppercase tracking-wider">
                TrustSEAL Verified
              </h5>
              <p className="text-[11px] text-neutral-500 font-bold mt-0.5">
                100% Verified Industrial Manufacturer
              </p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <CheckCircle className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h5 className="font-black text-black text-xs uppercase tracking-wider">
                GST Registered
              </h5>
              <p className="text-[11px] text-neutral-500 font-bold mt-0.5">
                10BIEPD2766D2ZX (Active)
              </p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <Building2 className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h5 className="font-black text-black text-xs uppercase tracking-wider">
                4 Logistics Depots
              </h5>
              <p className="text-[11px] text-neutral-500 font-bold mt-0.5">
                Patna HQ, Delhi, Mumbai, Kolkata
              </p>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
              <FileText className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h5 className="font-black text-black text-xs uppercase tracking-wider">
                MoRTH / IRC Compliant
              </h5>
              <p className="text-[11px] text-neutral-500 font-bold mt-0.5">
                Certified for National Highway Works
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Red Separator Line */}
      <div className="h-1 bg-red-600 w-full"></div>

      {/* 2. Main Footer Body with Faceted Geometric Light Background Accents */}
      <div className="relative bg-white py-14 px-4 sm:px-8">
        {/* Left Faceted Polygon SVG Background Decor */}
        <div className="absolute top-0 left-0 bottom-0 w-48 sm:w-72 pointer-events-none opacity-40 z-0 overflow-hidden">
          <svg viewBox="0 0 300 600" fill="none" className="w-full h-full object-cover text-neutral-200">
            <polygon points="0,0 200,80 120,280 0,350" fill="currentColor" fillOpacity="0.35" />
            <polygon points="0,350 120,280 260,420 50,600 0,600" fill="currentColor" fillOpacity="0.2" />
            <polygon points="200,80 300,200 120,280" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        {/* Right Faceted Polygon SVG Background Decor */}
        <div className="absolute top-0 right-0 bottom-0 w-48 sm:w-72 pointer-events-none opacity-40 z-0 overflow-hidden">
          <svg viewBox="0 0 300 600" fill="none" className="w-full h-full object-cover text-neutral-200">
            <polygon points="300,0 100,120 180,320 300,380" fill="currentColor" fillOpacity="0.35" />
            <polygon points="300,380 180,320 60,480 250,600 300,600" fill="currentColor" fillOpacity="0.2" />
            <polygon points="100,120 0,220 180,320" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile with Enlarged Logo & Bold Styling (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 border-2 border-red-600 shadow-md flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="https://5.imimg.com/data5/SELLER/Logo/2025/1/478932299/PR/TT/IP/146888318/img-20231217-wa0143.jpg"
                  alt="JMK Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-black text-red-600 text-lg sm:text-xl tracking-tight">
                    JMK
                  </span>
                  <span className="font-black text-slate-900 text-base sm:text-lg tracking-tight uppercase">
                    ENGINEERING & DEVELOPERS
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-red-600 uppercase tracking-widest font-black">
                  Heavy Infrastructure Formwork & Structural Systems
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium pr-2">
              Leading manufacturer and supplier of heavy civil shuttering plates, cold-rolled centering sheets, modular H-frame scaffolding, POT-PTFE bridge bearings, strip seal expansion joints, and carriageway drainage spouts. Established in 2021 with master works in Patna, Bihar.
            </p>

            <div className="pt-2 text-xs sm:text-sm space-y-2.5">
              <div className="flex items-start gap-2.5 text-neutral-800 font-medium">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5 stroke-[2.2]" />
                <span>
                  <strong className="text-black font-black">Central Works & HQ:</strong> Plot No. 14, Heavy Industrial Estate, Didarganj / Fatuha Road, Patna, Bihar - 800009
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-800 font-medium">
                <Phone className="w-4 h-4 text-red-600 shrink-0 stroke-[2.2]" />
                <span>
                  <strong className="text-black font-black">+91 94310 28475</strong> / <strong className="text-black font-black">+91 98110 39201</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-800 font-medium">
                <Mail className="w-4 h-4 text-red-600 shrink-0 stroke-[2.2]" />
                <span className="font-semibold text-neutral-900">
                  contact@jmkengineering.com / sales@jmkengineering.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: PRODUCT LINES (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-black text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 border-neutral-300 pb-1.5">
              PRODUCT LINES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-neutral-700">
              <li>
                <Link href="/products?category=shuttering" className="hover:text-red-600 transition-colors block">
                  Shuttering & Centering Sheets
                </Link>
              </li>
              <li>
                <Link href="/products?category=scaffolding" className="hover:text-red-600 transition-colors block">
                  H-Frame Scaffolding & Props
                </Link>
              </li>
              <li>
                <Link href="/products?category=bearings" className="hover:text-red-600 transition-colors block">
                  POT-PTFE Bridge Bearings
                </Link>
              </li>
              <li>
                <Link href="/products?category=joints" className="hover:text-red-600 transition-colors block">
                  Strip Seal Expansion Joints
                </Link>
              </li>
              <li>
                <Link href="/products?category=drainage" className="hover:text-red-600 transition-colors block">
                  MS & CI Drainage Spouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: REGIONAL DEPOTS (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-black text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 border-neutral-300 pb-1.5">
              REGIONAL DEPOTS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-neutral-700">
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong className="text-black font-black">Patna HQ:</strong> Fatuha Industrial Area</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong className="text-black font-black">Delhi NCR:</strong> IMT Manesar Hub</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong className="text-black font-black">Mumbai:</strong> MIDC Taloja / JNPT Node</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-neutral-400 font-bold">•</span>
                <span><strong className="text-black font-black">Kolkata:</strong> Dankuni NH-6 Complex</span>
              </li>
            </ul>
          </div>

          {/* Column 4: QUICK LINKS & ERP Portal (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-black text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 border-neutral-300 pb-1.5">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold text-neutral-700">
              <li>
                <Link href="/photos" className="hover:text-red-600 transition-colors block">
                  Factory & Production Photos
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-600 transition-colors block">
                  Company Profile & Timeline
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 transition-colors block">
                  Tender Inquiries & Map
                </Link>
              </li>
              <li>
                <a
                  href="#download-brochure"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('JMK Engineering & Developers Corporate Product Catalog (2024-2025 Edition) will download as PDF.');
                  }}
                  className="text-black hover:text-red-600 transition-colors flex items-center gap-1 font-black"
                >
                  <span>Download Catalog (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-red-600" />
                </a>
              </li>
            </ul>

            {/* Red ERP Portal Button with Mobile App Subtext */}
            <div className="pt-2 space-y-2">
              <Link
                href="/portal/login"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02]"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Staff & ERP Portal</span>
              </Link>
              <p className="text-[11px] text-neutral-500 font-bold">
                Download our mobile app to manage orders
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar Matching Exact Screenshot */}
      <div className="bg-neutral-100 border-t border-neutral-200 py-4 px-4 sm:px-8 text-xs text-neutral-700 font-bold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 JMK Engineering & Developers. All Rights Reserved.</p>
          <p className="text-[11px] sm:text-xs font-bold text-neutral-800">
            Proprietorship Firm – Patna, Bihar · GSTIN: <strong className="text-red-600 font-black">10BIEPD2766D2ZX</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
