'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Award,
  Users,
  Calendar,
  ArrowRight,
  Factory,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  PhoneCall,
  Send
} from 'lucide-react';

export default function HomeAboutSection() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-white text-black px-4 sm:px-8 border-b-2 border-neutral-200 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 uppercase tracking-wider bg-red-50 border border-red-200 px-3.5 py-1 rounded-full shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile & Plant Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            About <span className="text-red-600">JMK Engineering & Developers</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* 2-Column Layout: Left-Side Official Poster & Right-Side Corporate Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Division Poster with Slide-in from Left Animation */}
          <div className="lg:col-span-5 relative group transition-all duration-700 ease-out animate-fadeIn">
            {/* Ambient Red Glow Aura */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-red-600 via-orange-500 to-slate-900 rounded-3xl opacity-20 group-hover:opacity-35 transition-opacity blur-xl"></div>

            {/* Poster Frame Card */}
            <div
              onClick={() => setIsPosterModalOpen(true)}
              className="relative rounded-3xl overflow-hidden border-2 border-neutral-300 group-hover:border-red-600 shadow-2xl bg-gradient-to-b from-neutral-900 to-black cursor-pointer transition-all duration-300 transform group-hover:-translate-y-1.5"
            >
              {/* Top Division Floating Badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                <span className="bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-xl shadow-md flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5" />
                  <span>Expansion Joint & Bearing Division</span>
                </span>
                <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-white/20">
                  Patna Works
                </span>
              </div>

              {/* Official Poster Image */}
              <div className="pt-12 pb-3 px-3 bg-neutral-950 flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
                <img
                  src="/images/about/jmk-official-division-poster.png"
                  alt="JMK Engineering & Developer Official Expansion Joint Bridge Bearing Division Poster"
                  className="w-full h-auto max-h-[440px] object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-xl"
                />
              </div>

              {/* Bottom Hover Action Overlay */}
              <div className="p-3.5 bg-neutral-900/95 border-t border-neutral-800 text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block text-neutral-200">Official Works Portfolio</span>
                  <span className="text-[10px] text-neutral-400 font-medium">Click to view full size</span>
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black text-[11px] uppercase tracking-wider transition flex items-center gap-1 shadow"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white text-slate-900 p-3.5 rounded-2xl border-2 border-neutral-200 shadow-xl items-center gap-3 z-20">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center font-black text-lg shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left pr-2">
                <div className="text-xs font-black uppercase text-red-600">IS 2062 & MoRTH</div>
                <div className="text-[11px] text-neutral-600 font-bold">100% Certified Works</div>
              </div>
            </div>
          </div>

          {/* Right Column: Keyword-Rich Text & 6 IndiaMART Verified Credentials with Slide-in from Right Animation */}
          <div className="lg:col-span-7 space-y-6 text-left transition-all duration-700 ease-out">
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed">
                Established in Year <strong className="text-black font-black">2021</strong>, We <strong className="text-red-600 font-black">&ldquo;JMK Engineering & Developers&rdquo;</strong> are a premier <strong className="text-black font-black">Manufacturer</strong> of <span className="font-bold text-neutral-900">Expansion Joints, Bridge Drainage Spouts, POT-PTFE Bridge Bearings, Heavy MS Shuttering Plates, Centering Sheets</span> and Scaffolding Systems.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                We offer these heavy civil infrastructure products at reasonable ex-factory rates and deliver within promised project deadlines across India under the visionary guidance of our leadership team.
              </p>
            </div>

            {/* 6 IndiaMART Corporate Credentials Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Factory className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-neutral-500 font-bold">Nature of Business</div>
                <div className="text-xs sm:text-sm font-black text-black">Manufacturer</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-neutral-500 font-bold">Legal Status of Firm</div>
                <div className="text-xs sm:text-sm font-black text-black">Proprietorship</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-neutral-500 font-bold">Total Employees</div>
                <div className="text-xs sm:text-sm font-black text-black">26 to 50 People</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-neutral-500 font-bold">GST Number</div>
                <div className="text-xs font-mono font-black text-emerald-700">10BIEPD2766D2ZX</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-neutral-500 font-bold">GST Registration</div>
                <div className="text-xs sm:text-sm font-black text-black">2021</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-1">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-neutral-500 font-bold">Certification</div>
                <div className="text-xs sm:text-sm font-black text-amber-700">TrustSEAL Verified</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about#testimonials"
                className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-black font-bold text-xs rounded-xl border border-neutral-300 transition"
              >
                <span>Client Testimonials</span>
              </Link>

              <a
                href="https://www.indiamart.com/jmkengineeringdevelopers/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs rounded-xl border border-neutral-300 transition flex items-center gap-1.5"
              >
                <span>IndiaMART Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Official Poster Modal */}
      {isPosterModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsPosterModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-900 border-2 border-neutral-700 rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 pt-1 border-b border-neutral-800 pb-2 text-white">
              <span className="text-xs sm:text-sm font-black uppercase text-red-500 tracking-wider">
                Official Registered Division Poster · JMK Engineering & Developer
              </span>
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-red-600 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-auto rounded-2xl flex items-center justify-center bg-black/60 p-2">
              <img
                src="/images/about/jmk-official-division-poster.png"
                alt="JMK Engineering & Developer Official Division Poster"
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 pt-1 text-xs text-neutral-300">
              <span>Mauza Jhali, Jakariyapur, Krishna Niketan Road, Patna - 800007</span>
              <div className="flex items-center gap-2">
                <a
                  href="tel:07942556842"
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold"
                >
                  Call: 07942556842
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

