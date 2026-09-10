'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Printer,
  ChevronLeft,
  ChevronRight,
  Download,
  Building2,
  ShieldCheck,
  MapPin,
  Users,
  CheckCircle2,
  Plus,
  Award,
  ArrowRight,
  Maximize2,
  FileSpreadsheet,
  Lock,
  Layers,
  Activity,
  HardHat,
  DollarSign
} from 'lucide-react';

export default function DesignSpecPdfPage() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const handlePrint = () => {
    window.print();
  };

  const pages = [
    {
      title: 'Page 1: Unified Enterprise Gateway',
      subtitle: 'SSO Multi-Tenant Login & Role-Based Access Architecture'
    },
    {
      title: 'Page 2: Front-Page Design Specification',
      subtitle: 'Dynamic 5-Image Looping Slider & Role-Based CTA Annotations'
    },
    {
      title: 'Page 3: Super Admin HQ Command Hub',
      subtitle: 'Pan-India Global Aggregation & Multi-Site Telemetry'
    },
    {
      title: 'Page 4: Onboarding & Provisioning Modal',
      subtitle: 'Multi-Branch Deployment & Geofence Configuration Desk'
    },
    {
      title: 'Page 5: Scoped Branch Workspace & GPS Geofence',
      subtitle: 'Scoped Site Command & Real-Time Radius Verification'
    },
    {
      title: 'Page 6: Digital Muster Roll & RA Billing',
      subtitle: 'Biometric Daily Attendance & Financial Approval Queue'
    }
  ];

  return (
    <div className="bg-neutral-900 min-h-screen text-white print:bg-white print:text-black">
      {/* Top Floating Control Bar (Hidden on Print) */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800 p-4 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-xs font-bold text-neutral-200 flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Live Website</span>
            </Link>
            <div>
              <h1 className="text-sm font-black text-white">
                JMK Engineering Platform Design Specification PDF (1920×1080 Landscape)
              </h1>
              <p className="text-[11px] text-neutral-400">
                Production-Grade Multi-Tenant Multi-Branch Architecture
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-neutral-800 p-1 rounded-xl">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePageIndex(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    activePageIndex === idx
                      ? 'bg-red-600 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  P0{idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handlePrint}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-lg flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF (Landscape)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Presentation Pages Container */}
      <div className="p-4 sm:p-8 space-y-12 max-w-[1920px] mx-auto print:p-0 print:space-y-0">

        {/* ========================================================================= */}
        {/* PDF PAGE 1: Unified Enterprise Gateway */}
        {/* ========================================================================= */}
        <section
          id="page-1"
          className={`bg-white text-black rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-neutral-800 w-full aspect-[16/9] max-h-[1080px] flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none print:rounded-none print:aspect-auto print:min-h-[1080px] print:page-break-after-always ${
            activePageIndex === 0 ? 'block' : 'hidden print:block'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-red-600 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border-2 border-red-600 shadow-sm flex items-center justify-center">
                <img
                  src="https://5.imimg.com/data5/SELLER/Logo/2025/1/478932299/PR/TT/IP/146888318/img-20231217-wa0143.jpg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black text-black">
                  <span className="text-red-600">JMK</span> ENTERPRISE ERP GATEWAY
                </h2>
                <p className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                  Screen 1: Unified Universal SSO & Role-Based Security Hub
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-mono text-xs font-black">
                SPEC SHEET 01 / 06
              </span>
              <p className="text-[10px] text-neutral-500 mt-1">ISO 9001:2015 Compliant Architecture</p>
            </div>
          </div>

          {/* Main Body */}
          <div className="grid grid-cols-12 gap-8 my-auto items-center">
            {/* Left Blueprint Mockup */}
            <div className="col-span-7 bg-neutral-50 border-2 border-neutral-300 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                <span className="text-xs font-black uppercase text-red-600">Role Selection Architecture</span>
                <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border">Multi-Tenant Scoped</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border-2 border-red-600 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-black text-sm text-black">HQ Global Command</h4>
                  <p className="text-[11px] text-neutral-600">
                    Master HQ governance for Patna, Delhi, Mumbai & Kolkata. Full access to P&L, approvals, and branch provisioning.
                  </p>
                  <span className="text-[10px] font-mono font-bold text-red-600 block">role: SUPER_ADMIN</span>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-neutral-300 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 text-black flex items-center justify-center font-bold">
                    <HardHat className="w-4 h-4" />
                  </div>
                  <h4 className="font-black text-sm text-black">Ground Operations Desk</h4>
                  <p className="text-[11px] text-neutral-600">
                    Scoped strictly to assigned `branch_id`. Restricted to live site muster rolls, inventory indents, and daily progress reports.
                  </p>
                  <span className="text-[10px] font-mono font-bold text-neutral-500 block">role: BRANCH_ADMIN / STAFF</span>
                </div>
              </div>

              {/* Verified Trust Badges & Microcopy Callout */}
              <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-between text-xs">
                <span className="font-bold flex items-center gap-1 text-neutral-800">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  GST: 10BIEPD2766D2ZX • TrustSEAL Verified
                </span>
                <span className="font-mono text-[11px] text-neutral-500">256-Bit JWT Encryption</span>
              </div>
            </div>

            {/* Right Technical Specs */}
            <div className="col-span-5 space-y-4">
              <div className="p-5 bg-neutral-900 text-white rounded-2xl space-y-3">
                <h4 className="text-sm font-black uppercase text-red-400">Security & Isolation Guards</h4>
                <ul className="text-xs space-y-2 font-mono text-neutral-300">
                  <li>• Multi-tenant database partitioning on every query</li>
                  <li>• Scoped token verification via `Authorization: Bearer`</li>
                  <li>• Biometric GPS geofence locking (±500m radius)</li>
                  <li>• Automated audit trails for financial vouchers &gt; ₹50,000</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-xs text-neutral-800 space-y-1">
                <span className="font-black text-red-700 uppercase block">Engineering Note:</span>
                <p>
                  Users authenticate once and are dynamically routed to either the Global Command Center or their designated regional node without UI context loss.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-200 pt-3">
            <span>JMK Engineering Platform • Frontend & Cloud ERP Specification</span>
            <span className="font-mono">https://jmkengineering.com/portal/login</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PDF PAGE 2: Front-Page Design Specification */}
        {/* ========================================================================= */}
        <section
          id="page-2"
          className={`bg-white text-black rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-neutral-800 w-full aspect-[16/9] max-h-[1080px] flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none print:rounded-none print:aspect-auto print:min-h-[1080px] print:page-break-after-always ${
            activePageIndex === 1 ? 'block' : 'hidden print:block'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-red-600 pb-4">
            <div>
              <h2 className="text-2xl font-black text-black">
                FRONT-PAGE DESIGN SPECIFICATION (image_37.png Precision)
              </h2>
              <p className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                Screen 2: Dynamic 5-Image Looping Slider, Geometric Grids & Dynamic Role CTAs
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-mono text-xs font-black">
              SPEC SHEET 02 / 06
            </span>
          </div>

          {/* Main Layout Annotation Showcase */}
          <div className="grid grid-cols-12 gap-8 my-auto items-center">
            {/* Left: Annotated Mockup */}
            <div className="col-span-7 bg-neutral-100 border-2 border-neutral-300 rounded-2xl p-5 space-y-4 shadow-sm relative">
              {/* Navbar Callout */}
              <div className="bg-white p-3 rounded-xl border border-neutral-300 flex items-center justify-between text-xs">
                <span className="font-black text-red-600">JMK Engineering & Developers</span>
                <div className="flex gap-2">
                  <span className="bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                    [+ Add Branch] (HQ Role)
                  </span>
                  <span className="bg-red-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                    [Contact Supplier / Request RFQ]
                  </span>
                </div>
              </div>

              {/* Slider Mockup */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-black text-white p-4 flex flex-col justify-between">
                <div className="text-center text-[10px] text-neutral-300 font-mono">
                  EST. 2021 | PROPRIETORSHIP FIRM | ISO COMPLIANT OPERATIONS
                </div>
                <h4 className="text-center font-black text-lg text-white">
                  Engineering the Future of Infrastructure & Turnkey Construction
                </h4>
                <div className="flex justify-center gap-2 text-[10px]">
                  <span className="bg-black/80 px-3 py-1 rounded-full border border-neutral-600">Explore Product Catalog</span>
                  <span className="bg-red-600 px-3 py-1 rounded-full font-bold">Request Instant Quote / RFQ</span>
                </div>
              </div>

              {/* 5 Shaped Bottom Cards */}
              <div className="grid grid-cols-5 gap-1.5 text-[9px] text-center font-bold">
                <div className="bg-white p-2 rounded-xl border border-neutral-300">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-t-lg mx-auto mb-1"></div>
                  <p className="text-red-600">Expansion Joints</p>
                  <p className="text-neutral-500">8.20mm</p>
                </div>
                <div className="bg-white p-2 rounded-xl border border-neutral-300">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full rounded-tl-none mx-auto mb-1"></div>
                  <p className="text-red-600">Shuttering Plate</p>
                  <p className="text-neutral-500">27 mm</p>
                </div>
                <div className="bg-white p-2 rounded-xl border border-neutral-300">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full mx-auto mb-1"></div>
                  <p className="text-red-600">Centering Shek</p>
                  <p className="text-neutral-500">27 kg</p>
                </div>
                <div className="bg-white p-2 rounded-xl border border-neutral-300">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-xl rounded-br-none mx-auto mb-1"></div>
                  <p className="text-red-600">Centerg Plates</p>
                  <p className="text-neutral-500">13 Kg</p>
                </div>
                <div className="bg-white p-2 rounded-xl border border-neutral-300">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-lg rotate-3 mx-auto mb-1"></div>
                  <p className="text-red-600">Scaffolding</p>
                  <p className="text-neutral-500">Box: 30mm</p>
                </div>
              </div>
            </div>

            {/* Right: Slider & CTA Annotations */}
            <div className="col-span-5 space-y-4 text-xs">
              <div className="p-4 bg-neutral-50 border-2 border-neutral-300 rounded-2xl space-y-2">
                <span className="font-black text-red-600 uppercase block">5-Image Looping Slider Callout:</span>
                <ol className="list-decimal pl-4 space-y-1 text-[11px] text-neutral-700 font-medium">
                  <li><strong>Heavy Infrastructure Casting:</strong> Bridge pier pouring</li>
                  <li><strong>Industrial Site Hub:</strong> Grid structural warehouse</li>
                  <li><strong>GPS Biometric Kiosk:</strong> Field face-ID check-in</li>
                  <li><strong>Material Logistics Hub:</strong> Steel rack central depot</li>
                  <li><strong>Command Room Telemetry:</strong> HQ multi-branch screen</li>
                </ol>
              </div>

              <div className="p-4 bg-neutral-900 text-white rounded-2xl space-y-2 font-mono text-[11px]">
                <span className="text-emerald-400 font-bold block">Role-Based CTA Guard:</span>
                <p>
                  {`if (user.role === 'SUPER_ADMIN') {`}
                  <br />
                  &nbsp;&nbsp;{`render: <Button className="bg-emerald-600">[+ Add Branch]</Button>`}
                  <br />
                  {`} else {`}
                  <br />
                  &nbsp;&nbsp;{`render: <Button className="bg-neutral-900">[Approvals Desk (6)]</Button>`}
                  <br />
                  {`}`}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-200 pt-3">
            <span>Exact Implementation of image_37.png with Dynamic React/Next.js Layer</span>
            <span className="font-mono">https://jmkengineering.com</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PDF PAGE 3: Super Admin HQ command Hub */}
        {/* ========================================================================= */}
        <section
          id="page-3"
          className={`bg-white text-black rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-neutral-800 w-full aspect-[16/9] max-h-[1080px] flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none print:rounded-none print:aspect-auto print:min-h-[1080px] print:page-break-after-always ${
            activePageIndex === 2 ? 'block' : 'hidden print:block'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-red-600 pb-4">
            <div>
              <h2 className="text-2xl font-black text-black">
                SUPER ADMIN HQ COMMAND HUB (Pan-India Governance)
              </h2>
              <p className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                Screen 3: Global Aggregate Telemetry, P&L Allocations & Active Node Matrices
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-mono text-xs font-black">
              SPEC SHEET 03 / 06
            </span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-8 my-auto items-center">
            {/* Aggregate Metrics Grid */}
            <div className="col-span-12 grid grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-neutral-500">Active Operational Hubs</span>
                <p className="text-2xl font-black text-black">4 Nodes Live</p>
                <p className="text-[10px] text-emerald-600 font-bold">Patna, Delhi, Mumbai, Kolkata</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-neutral-500">Total Workforce Present</span>
                <p className="text-2xl font-black text-red-600">842 / 910 Staff</p>
                <p className="text-[10px] text-neutral-600">92.5% Attendance Rate</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-neutral-500">Monthly Budget Allocated</span>
                <p className="text-2xl font-black text-black">₹1.75 Cr</p>
                <p className="text-[10px] text-neutral-600">Spend: ₹94.8 Lakhs (54%)</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-1">
                <span className="text-[10px] font-bold uppercase text-neutral-500">Pending HQ Approvals</span>
                <p className="text-2xl font-black text-amber-600">6 Desks</p>
                <p className="text-[10px] text-red-600 font-bold">&gt; ₹50,000 Threshold</p>
              </div>
            </div>

            {/* 4 Regional Depot Deep Dive */}
            <div className="col-span-12 grid grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border-2 border-neutral-300 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-black">Patna HQ (PAT-HQ)</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Primary</span>
                </div>
                <p className="text-xs text-neutral-600">Workforce: 312 Present • CNC Press Active</p>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full w-[65%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-neutral-300 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-black">Delhi NCR (DEL-NCR)</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Active</span>
                </div>
                <p className="text-xs text-neutral-600">Workforce: 198 Present • 32 MT Staged</p>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full w-[52%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-neutral-300 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-black">Mumbai Hub (BOM-WST)</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Active</span>
                </div>
                <p className="text-xs text-neutral-600">Workforce: 174 Present • Bearing QA</p>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full w-[48%]"></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border-2 border-neutral-300 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-black">Kolkata Metro (CCU-EST)</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Active</span>
                </div>
                <p className="text-xs text-neutral-600">Workforce: 158 Present • H-Frame Staging</p>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full w-[42%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-200 pt-3">
            <span>Super Admin Global Aggregation Desk</span>
            <span className="font-mono">https://jmkengineering.com/dashboard/super-admin</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PDF PAGE 4: Onboarding & Provisioning Modal */}
        {/* ========================================================================= */}
        <section
          id="page-4"
          className={`bg-white text-black rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-neutral-800 w-full aspect-[16/9] max-h-[1080px] flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none print:rounded-none print:aspect-auto print:min-h-[1080px] print:page-break-after-always ${
            activePageIndex === 3 ? 'block' : 'hidden print:block'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-red-600 pb-4">
            <div>
              <h2 className="text-2xl font-black text-black">
                ONBOARDING & PROVISIONING MODAL ([+ Add Branch])
              </h2>
              <p className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                Screen 4: Multi-Branch Site Creation & GPS Geofence Configuration
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-mono text-xs font-black">
              SPEC SHEET 04 / 06
            </span>
          </div>

          {/* Modal Form Specification */}
          <div className="grid grid-cols-12 gap-8 my-auto items-center">
            <div className="col-span-8 bg-neutral-50 border-2 border-neutral-300 rounded-2xl p-6 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="font-black text-sm text-black">Provision New Regional Logistics Hub / Site</span>
                <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">API: POST /api/branches</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Hub Name</label>
                  <div className="p-2 bg-white border border-neutral-300 rounded-lg text-black font-medium">
                    Ahmedabad Western Expressway Depot
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Branch Code (3-4 Chars)</label>
                  <div className="p-2 bg-white border border-neutral-300 rounded-lg text-black font-mono font-bold">
                    AMD-WST
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">GPS Coordinates (Lat, Lng)</label>
                  <div className="p-2 bg-white border border-neutral-300 rounded-lg text-black font-mono">
                    23.0225° N, 72.5714° E (500m Geofence)
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Allocated Monthly Budget</label>
                  <div className="p-2 bg-white border border-neutral-300 rounded-lg text-black font-mono font-bold text-red-600">
                    ₹35,00,000 / Month
                  </div>
                </div>
              </div>

              <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-300 flex justify-between items-center text-xs">
                <span className="text-neutral-600">Assigned Branch Admin: <strong>Er. Amit Trivedi</strong></span>
                <span className="text-emerald-600 font-bold font-mono">✓ Ready for instant deployment</span>
              </div>
            </div>

            {/* Right Architectural Principles */}
            <div className="col-span-4 space-y-3 text-xs">
              <div className="p-4 bg-neutral-900 text-white rounded-2xl space-y-2 font-mono">
                <h4 className="font-bold text-emerald-400">Provisioning Workflow</h4>
                <p className="text-[11px] text-neutral-300">
                  1. HQ provisions branch with GPS radius<br />
                  2. Admin credentials generated & sent<br />
                  3. Local muster roll & worker seed loaded<br />
                  4. Indent queue & voucher permissions live
                </p>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-neutral-800 text-xs">
                <strong>Data Guard:</strong> Zero crossover between branch data. Only Patna Super Admin holds omni-visibility.
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-200 pt-3">
            <span>Branch Provisioning & Lifecycle Automation</span>
            <span className="font-mono">https://jmkengineering.com/dashboard/super-admin/branches</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PDF PAGE 5: Scoped Branch Workspace & GPS Geofence */}
        {/* ========================================================================= */}
        <section
          id="page-5"
          className={`bg-white text-black rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-neutral-800 w-full aspect-[16/9] max-h-[1080px] flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none print:rounded-none print:aspect-auto print:min-h-[1080px] print:page-break-after-always ${
            activePageIndex === 4 ? 'block' : 'hidden print:block'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-red-600 pb-4">
            <div>
              <h2 className="text-2xl font-black text-black">
                SCOPED BRANCH WORKSPACE & GPS GEOFENCE
              </h2>
              <p className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                Screen 5: Scoped Local Command Desk & Live GPS Attendance Verification
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-mono text-xs font-black">
              SPEC SHEET 05 / 06
            </span>
          </div>

          {/* Scoped Content Showcase */}
          <div className="grid grid-cols-12 gap-8 my-auto items-center">
            <div className="col-span-7 bg-neutral-50 border-2 border-neutral-300 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                <div>
                  <h4 className="font-black text-base text-black">Delhi NCR Hub (DEL-NCR)</h4>
                  <span className="text-[11px] text-neutral-500">Admin: Er. Vikram Sharma</span>
                </div>
                <span className="bg-red-100 text-red-700 font-mono text-xs font-bold px-2 py-0.5 rounded">
                  Scoped View Only
                </span>
              </div>

              {/* GPS Geofence Visualizer Box */}
              <div className="p-4 bg-white border-2 border-neutral-300 rounded-xl space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold flex items-center gap-1 text-black">
                    <MapPin className="w-4 h-4 text-red-600" />
                    Manesar IMT Site Geofence
                  </span>
                  <span className="text-emerald-600 font-bold font-mono">Radius: 500 Meters</span>
                </div>
                <div className="h-20 bg-neutral-100 rounded-lg flex items-center justify-center text-xs font-mono text-neutral-600 border border-dashed border-neutral-300">
                  📍 Verified Worker Coordinates: [28.3642° N, 76.9421° E] (Distance: 114m inside fence)
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                <div className="p-2 bg-white rounded-lg border">Present: 198 / 210</div>
                <div className="p-2 bg-white rounded-lg border">Inventory: 32 MT</div>
                <div className="p-2 bg-white rounded-lg border">DPR: Submitted</div>
              </div>
            </div>

            <div className="col-span-5 space-y-3 text-xs">
              <div className="p-4 bg-neutral-900 text-white rounded-2xl space-y-2 font-mono text-[11px]">
                <h4 className="font-bold text-red-400">Scoped Security Principle</h4>
                <p>
                  Branch admins cannot access other branch nodes, preventing competitive rate leaks and maintaining strict responsibility chains.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl">
                <strong>Proof of Presence:</strong> Clock-ins beyond the 500m geofence are automatically tagged as <em>Out of Fence - Pending Approval</em>.
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-200 pt-3">
            <span>Scoped Branch Telemetry & Anti-Spoofing Architecture</span>
            <span className="font-mono">https://jmkengineering.com/dashboard/branch</span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PDF PAGE 6: Digital Muster Roll & RA Billing */}
        {/* ========================================================================= */}
        <section
          id="page-6"
          className={`bg-white text-black rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-neutral-800 w-full aspect-[16/9] max-h-[1080px] flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none print:rounded-none print:aspect-auto print:min-h-[1080px] print:page-break-after-always ${
            activePageIndex === 5 ? 'block' : 'hidden print:block'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-start border-b-2 border-red-600 pb-4">
            <div>
              <h2 className="text-2xl font-black text-black">
                DIGITAL MUSTER ROLL & FINANCIAL RA BILLING
              </h2>
              <p className="text-xs text-neutral-600 font-bold uppercase tracking-wider">
                Screen 6: Automated Daily Labour Waging, Voucher Queues & Subcon Settlements
              </p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-mono text-xs font-black">
              SPEC SHEET 06 / 06
            </span>
          </div>

          {/* Muster & Billing Breakdown */}
          <div className="grid grid-cols-12 gap-8 my-auto items-center text-xs">
            {/* Left Muster Table */}
            <div className="col-span-7 bg-neutral-50 border-2 border-neutral-300 rounded-2xl p-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-sm text-black">Daily Digital Muster Roll</span>
                <span className="text-[11px] font-mono text-neutral-600">Today: 842 Present</span>
              </div>

              <div className="bg-white border rounded-xl overflow-hidden">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-neutral-100 text-neutral-600 font-bold border-b">
                    <tr>
                      <th className="p-2">Worker / Trade</th>
                      <th className="p-2">Branch Node</th>
                      <th className="p-2">GPS Verification</th>
                      <th className="p-2">Daily Wage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y font-medium text-neutral-800">
                    <tr>
                      <td className="p-2 font-bold">Ramesh Paswan (Fitter)</td>
                      <td className="p-2">Patna Works</td>
                      <td className="p-2 text-emerald-600 font-bold">✓ Verified Inside</td>
                      <td className="p-2 font-mono">₹850 / Day</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Sunil Yadav (Welder)</td>
                      <td className="p-2">Delhi Depot</td>
                      <td className="p-2 text-emerald-600 font-bold">✓ Verified Inside</td>
                      <td className="p-2 font-mono">₹950 / Day</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Anil Shinde (Rigger)</td>
                      <td className="p-2">Mumbai Node</td>
                      <td className="p-2 text-emerald-600 font-bold">✓ Verified Inside</td>
                      <td className="p-2 font-mono">₹900 / Day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Financial Voucher Queue */}
            <div className="col-span-5 bg-neutral-900 text-white rounded-2xl p-5 space-y-3 font-mono">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="font-bold text-amber-400 text-xs">HQ Financial Approval Desk</span>
                <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-black">6 Pending</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2.5 bg-black rounded-lg border border-neutral-800 flex justify-between">
                  <div>
                    <p className="font-bold text-white">SAIL Structural Angle Lot</p>
                    <p className="text-[10px] text-neutral-400">Delhi Hub • Material Purchase</p>
                  </div>
                  <span className="text-emerald-400 font-bold">₹1,45,000</span>
                </div>

                <div className="p-2.5 bg-black rounded-lg border border-neutral-800 flex justify-between">
                  <div>
                    <p className="font-bold text-white">Hydraulic Rig Maintenance</p>
                    <p className="text-[10px] text-neutral-400">Patna Works • Plant Maintenance</p>
                  </div>
                  <span className="text-emerald-400 font-bold">₹68,000</span>
                </div>
              </div>

              <p className="text-[10px] text-neutral-400 pt-1">
                Automated lock: Indents & vouchers over ₹50,000 hold until Super Admin Patna approval.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center text-xs text-neutral-500 border-t border-neutral-200 pt-3">
            <span>Complete Architecture Specification Approved & Verified</span>
            <span className="font-mono">JMK Engineering & Developers • Patna, Bihar</span>
          </div>
        </section>

      </div>
    </div>
  );
}
