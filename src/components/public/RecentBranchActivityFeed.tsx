'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Users,
  ShieldCheck,
  TrendingUp,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Activity,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { SEED_BRANCHES } from '@/lib/seedData';

const LIVE_SITE_UPDATES = [
  {
    id: 'patna-01',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ Central Works',
    siteName: 'Ganga Bridge Package 4 Viaduct Staging',
    city: 'Patna, Bihar',
    status: 'ACTIVE_CASTING',
    statusLabel: 'Live CNC Press & Pouring',
    workforcePresent: '312 / 330 Workers',
    tonnageProcessed: '48 MT Today',
    gpsVerified: true,
    lastUpdate: '2 mins ago',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    activity: '250 MT Hydraulic Bending for 27kg Column Shuttering Plates complete. Staged for QA inspection.'
  },
  {
    id: 'delhi-01',
    branchId: 'br_delhi_hub',
    branchName: 'Delhi NCR Staging Depot',
    siteName: 'Dwarka Expressway Elevated Corridor Pier 142',
    city: 'Manesar, Haryana',
    status: 'DISPATCH_ARRIVED',
    statusLabel: 'Trailer Consignment Received',
    workforcePresent: '198 / 210 Workers',
    tonnageProcessed: '32 MT Staged',
    gpsVerified: true,
    lastUpdate: '7 mins ago',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80',
    activity: 'Strip Seal Expansion Joint installation completed. 100% Watertight torque inspection verified.'
  },
  {
    id: 'mumbai-01',
    branchId: 'br_mumbai_hub',
    branchName: 'Mumbai Logistics Node',
    siteName: 'MIDC Taloja - JNPT Coastal Flyover Pier Cap',
    city: 'Navi Mumbai, Maharashtra',
    status: 'BEARING_TEST',
    statusLabel: 'POT-PTFE Proof Testing',
    workforcePresent: '174 / 190 Workers',
    tonnageProcessed: '24 MT Deployed',
    gpsVerified: true,
    lastUpdate: '14 mins ago',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    activity: '10,000 kN vertical proof load compression test verified for Subcon Package. MTC test report dispatched to HQ.'
  },
  {
    id: 'kolkata-01',
    branchId: 'br_kolkata_hub',
    branchName: 'Kolkata Metro Depot',
    siteName: 'Dankuni NH-6 Multi-Modal Logistics Viaduct',
    city: 'Kolkata, West Bengal',
    status: 'SCAFFOLDING_STAGING',
    statusLabel: 'H-Frame Falsework Setup',
    workforcePresent: '158 / 180 Workers',
    tonnageProcessed: '18 MT Erected',
    gpsVerified: true,
    lastUpdate: '22 mins ago',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    activity: 'Heavy duty Acrow prop base jacks and walkway staging erected for commercial monolithic slab pour.'
  }
];

export default function RecentBranchActivityFeed() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'br_patna_hq' | 'br_delhi_hub' | 'br_mumbai_hub' | 'br_kolkata_hub'>('ALL');

  const filteredUpdates = LIVE_SITE_UPDATES.filter(
    (item) => activeFilter === 'ALL' || item.branchId === activeFilter
  );

  return (
    <section className="py-14 bg-neutral-50 text-black px-4 sm:px-8 border-b-2 border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Title & Branch Filter Tabs (image_37.png exact) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-wider">
                Multi-Tenant Ground Operations Feed
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              Recent Active Branch Updates
            </h2>
          </div>

          {/* Filter Tabs matching image_37.png */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeFilter === 'ALL'
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:text-black border border-neutral-300'
              }`}
            >
              All Active Sites (4)
            </button>
            <button
              onClick={() => setActiveFilter('br_patna_hq')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeFilter === 'br_patna_hq'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:text-black border border-neutral-300'
              }`}
            >
              Patna HQ
            </button>
            <button
              onClick={() => setActiveFilter('br_delhi_hub')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeFilter === 'br_delhi_hub'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:text-black border border-neutral-300'
              }`}
            >
              Delhi North
            </button>
            <button
              onClick={() => setActiveFilter('br_mumbai_hub')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeFilter === 'br_mumbai_hub'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:text-black border border-neutral-300'
              }`}
            >
              Mumbai Site
            </button>
            <button
              onClick={() => setActiveFilter('br_kolkata_hub')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeFilter === 'br_kolkata_hub'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:text-black border border-neutral-300'
              }`}
            >
              Kolkata Metro
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Live Site Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Site Image & Status Badge */}
              <div className="relative h-40 bg-neutral-100 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.siteName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-2.5 left-2.5 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-md">
                  {update.city}
                </div>

                <div className="absolute top-2.5 right-2.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>{update.statusLabel}</span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-black truncate">{update.branchName}</p>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
                <div className="space-y-1.5">
                  <h4 className="font-black text-black text-sm line-clamp-1 group-hover:text-red-600 transition">
                    {update.siteName}
                  </h4>
                  <p className="text-neutral-600 text-[11px] leading-relaxed font-medium line-clamp-2">
                    {update.activity}
                  </p>
                </div>

                {/* Telemetry Metrics */}
                <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-bold">Muster Present:</span>
                    <span className="text-black font-bold">{update.workforcePresent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-bold">Tonnage Shift:</span>
                    <span className="text-red-600 font-bold">{update.tonnageProcessed}</span>
                  </div>
                  <div className="flex justify-between pt-0.5 border-t border-neutral-200">
                    <span className="text-neutral-500 font-bold">GPS Geofence:</span>
                    <span className="text-emerald-600 font-bold">✓ Verified Inside</span>
                  </div>
                </div>

                {/* Footer Time + Link */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <span>{update.lastUpdate}</span>
                  </span>

                  <Link
                    href="/dashboard/branch"
                    className="text-red-600 font-black hover:text-red-700 flex items-center gap-0.5"
                  >
                    <span>View Node DPR</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
