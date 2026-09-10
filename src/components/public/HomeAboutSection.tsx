'use client';

import React from 'react';
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
  Sparkles
} from 'lucide-react';

export default function HomeAboutSection() {
  return (
    <section className="py-16 sm:py-20 bg-white text-black px-4 sm:px-8 border-b-2 border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile & Plant Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            About <span className="text-red-600">JMK Engineering & Developers</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* 2-Column Layout: Left-Side Image & Right-Side Corporate Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Rich Framed Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-neutral-900 rounded-3xl opacity-15 group-hover:opacity-25 transition-opacity blur-lg"></div>

            <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-300 shadow-2xl bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="JMK Engineering Factory Workshop at Patna Works"
                className="w-full h-[400px] sm:h-[460px] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                <Factory className="w-4 h-4" />
                <span>Patna Central Works</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-black p-4 rounded-2xl border border-white/40 shadow-xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-red-600 uppercase">ISO 9001:2015 Certified</span>
                  <span className="text-[11px] font-bold text-neutral-500">Est. 2021</span>
                </div>
                <h4 className="text-sm font-black text-neutral-900">Heavy Civil & Bridge Engineering Fabrication</h4>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  Direct production lines for IRC/MoRTH expansion joints, POT-PTFE bearings, MS shuttering plates, and scaffolding systems.
                </p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-neutral-900 text-white p-4 rounded-2xl border-2 border-neutral-700 shadow-2xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-black text-lg">
                4+
              </div>
              <div className="text-left">
                <div className="text-xs font-black uppercase text-red-400">Years of Excellence</div>
                <div className="text-[11px] text-neutral-300 font-medium">Pan-India Supply Fleet</div>
              </div>
            </div>
          </div>

          {/* Right Column: Keyword-Rich Text & 6 IndiaMART Verified Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed">
                Established in Year <strong className="text-black font-black">2021</strong>, We <strong className="text-red-600 font-black">&ldquo;JMK Engineering & Developers&rdquo;</strong> are a premier <strong className="text-black font-black">Manufacturer</strong> of <span className="font-bold text-neutral-900">Expansion Joints, Bridge Drainage Spouts, POT-PTFE Bridge Bearings, Heavy MS Shuttering Plates, Centering Sheets</span> and Scaffolding Systems.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                We offer these heavy civil infrastructure products at reasonable ex-factory rates and deliver within promised project deadlines across India under the visionary guidance of our leadership team.
              </p>
            </div>

            {/* 6 IndiaMART Corporate Credentials Badges Grid (Exact media_1788863800724.png) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
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
    </section>
  );
}

