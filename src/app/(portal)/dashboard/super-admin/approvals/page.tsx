'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  IndianRupee,
  Package,
  Building2,
  Send,
  AlertCircle,
  FileText,
  Paperclip,
  Check,
  ChevronRight,
  TrendingUp,
  Sliders,
  Fuel,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function ApprovalsPage() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<'pending' | 'vendor' | 'client'>('pending');
  const [slideApproved, setSlideApproved] = useState(false);
  const [raBill04Approved, setRaBill04Approved] = useState(false);
  const [queryModalOpen, setQueryModalOpen] = useState(false);

  return (
    <div className="bg-white text-slate-900 min-h-screen p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Screen 4 Mandate: Contextual Overview with "HQ Live Sync Status: Active (1m ago)" */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xl font-black text-red-600 tracking-tight">JMK</span>
              <span className="text-sm font-black text-slate-900">Engineering & Developers</span>
              <span className="text-neutral-400">|</span>
              <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                Super Admin Command Desk
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>HQ Live Sync Status: Active (1m ago)</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Executive Authorization & Financial Sign-Off Matrix
            </h1>
            <p className="text-xs text-neutral-600 font-medium">
              Multi-tier validation for Subcontractor RA Bills, emergency site purchase orders, and major capital disbursements across all 4 branches.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-xl text-xs font-bold border border-neutral-300 transition"
            >
              Master Catalog Hub
            </Link>
          </div>
        </div>

        {/* Screen 4 Mandate: Live Fleet Telemetry Combined KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Total Active Sites
            </span>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              4 Regional Hubs
            </p>
            <span className="text-[10px] text-neutral-600 font-medium block">
              Patna HQ • Delhi • Mumbai • Kolkata
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Combined Turnout
            </span>
            <p className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">
              842 / 910
            </p>
            <span className="text-[10px] text-emerald-700 font-mono font-bold block">
              ● 92.5% Attendance Sync
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Combined Spend (MTD)
            </span>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              ₹ 42.8 Lakhs
            </p>
            <span className="text-[10px] text-red-600 font-mono font-bold block">
              ● Within Monthly Budget Cap
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Pending Authorizations
            </span>
            <p className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
              3 Items
            </p>
            <span className="text-[10px] text-neutral-600 font-bold block">
              2 Critical Financial Claims
            </span>
          </div>
        </div>

        {/* Screen 4 Mandate - Bottom Section: Detailed Multi-Category Sign-Off Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-neutral-200 pb-3">
            {/* Segmented Matrix Tabs: [Pending Authorization (3)] | [Vendor Bills] | [Client RA Bills] */}
            <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl border border-neutral-300">
              <button
                onClick={() => setActiveCategoryTab('pending')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 ${
                  activeCategoryTab === 'pending'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Pending Authorization (3)</span>
              </button>

              <button
                onClick={() => setActiveCategoryTab('vendor')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 ${
                  activeCategoryTab === 'vendor'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Vendor Bills</span>
              </button>

              <button
                onClick={() => setActiveCategoryTab('client')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 ${
                  activeCategoryTab === 'client'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Client RA Bills</span>
              </button>
            </div>

            <span className="text-xs font-mono font-bold text-neutral-500">
              Role: Er. Rajesh Kumar Sharma (Director / Super Admin)
            </span>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Card 1 (Onsite style): RA Bill #04 - Apex Electricals - Claimed ₹1,85,000 */}
            <div className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-6 space-y-5 shadow-lg transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                      RA BILL #04
                    </span>
                    <span className="text-xs font-bold text-neutral-500 font-mono">
                      Subcon Package: PAT-PKG-4
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full ${
                    raBill04Approved ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700 font-black animate-pulse'
                  }`}>
                    {raBill04Approved ? '✓ AUTHORIZED FOR DISBURSEMENT' : '● PENDING HQ SIGNOFF'}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900">
                    Apex Electricals & Power Infrastructure
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Subcontractor RA Bill for 33kV dedicated power line energization, high-mast tower wiring, and Patna batching plant transformer synchronization.
                  </p>
                </div>

                {/* Metric & Verification Breakdown */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-500 font-bold">Claimed Amount:</span>
                    <span className="font-mono text-lg font-black text-slate-900">₹ 1,85,000</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-500 font-bold">BOQ Verified Metric:</span>
                    <span className="font-bold text-emerald-700">100% Quantity Matched against BOQ Item 4.12</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-neutral-500 font-bold">Site Engineer Verification:</span>
                    <span className="font-bold text-slate-800">Er. Amitabh Verma (Passed QC)</span>
                  </div>
                </div>

                {/* Attachment Section */}
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-800 font-medium truncate">
                    <Paperclip className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="truncate">Apex_Electricals_Signed_Measurement_Book_MB42.pdf</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-300 shrink-0 font-bold">
                    3.4 MB
                  </span>
                </div>
              </div>

              {/* Action Buttons: [Reject / Query] [Approve Payment] */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setQueryModalOpen(true)}
                  disabled={raBill04Approved}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-xl text-xs font-bold border border-neutral-300 transition"
                >
                  Reject / Query
                </button>

                <button
                  onClick={() => setRaBill04Approved(true)}
                  disabled={raBill04Approved}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 ${
                    raBill04Approved
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{raBill04Approved ? 'Disbursement Approved' : 'Approve Payment'}</span>
                </button>
              </div>
            </div>

            {/* Card 2: Emergency Diesel Purchase Order with Slide-to-Approve Trigger */}
            <div className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-6 space-y-5 shadow-lg transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      EMERGENCY PO #D-882
                    </span>
                    <span className="text-xs font-bold text-neutral-500 font-mono">
                      Branch: Patna HQ
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full ${
                    slideApproved ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800 font-black'
                  }`}>
                    {slideApproved ? '✓ DISPATCH CONFIRMED' : '● REQUIRES SLIDE APPROVAL'}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Fuel className="w-5 h-5 text-red-600" />
                    <h3 className="text-xl font-black text-slate-900">
                      Emergency High-Speed Diesel (HSD) Purchase
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Emergency procurement of 500 Litres HSD for Patna 60m³/hr concrete batching plant generator & 250 MT hydraulic bending press continuous pour cycle.
                  </p>
                </div>

                {/* Metric & Cost Breakdown */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-500 font-bold">Quantity & Vendor:</span>
                    <span className="font-bold text-slate-900">500 Litres (Indian Oil Corp Depot)</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-500 font-bold">Total Claim:</span>
                    <span className="font-mono text-lg font-black text-slate-900">₹ 47,250</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-neutral-500 font-bold">Authorizing Manager:</span>
                    <span className="font-bold text-slate-800">Sanjay Singh (Plant Superintendent)</span>
                  </div>
                </div>

                {/* Attachment Section */}
                <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-800 font-medium truncate">
                    <Paperclip className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="truncate">IOCL_Official_Indent_Challan_IOC5519.pdf</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-300 shrink-0 font-bold">
                    1.2 MB
                  </span>
                </div>
              </div>

              {/* Slide-to-Approve Trigger */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <div className="relative h-14 bg-neutral-100 rounded-2xl border-2 border-neutral-300 overflow-hidden flex items-center justify-center select-none">
                  {slideApproved ? (
                    <div className="w-full h-full bg-emerald-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 animate-fadeIn">
                      <Check className="w-5 h-5" />
                      <span>Diesel PO Dispatched & Released</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSlideApproved(true)}
                      className="w-full h-full bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-3 transition"
                    >
                      <Sliders className="w-4 h-4 text-red-500" />
                      <span>Click / Slide to Executive Approve (₹47,250)</span>
                      <ArrowRight className="w-4 h-4 text-red-500" />
                    </button>
                  )}
                </div>
                <p className="text-[10px] text-neutral-500 text-center font-medium">
                  Instant banking webhook dispatches electronic funds to IOCL Patna vendor account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Query / Rejection Modal Mockup */}
      {queryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-black p-6 rounded-3xl max-w-md w-full border-2 border-neutral-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900">Query RA Bill #04</h3>
            <p className="text-xs text-neutral-600">Enter technical clarification remarks for Apex Electricals:</p>
            <textarea
              rows={3}
              placeholder="e.g. Please provide supporting insulation megger test report for feeder line..."
              className="w-full p-3 border-2 border-neutral-300 rounded-xl text-xs outline-none focus:border-red-600"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setQueryModalOpen(false)}
                className="px-4 py-2 bg-neutral-100 text-xs font-bold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={() => setQueryModalOpen(false)}
                className="px-5 py-2 bg-red-600 text-white text-xs font-black uppercase rounded-xl"
              >
                Send Query to Subcon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
