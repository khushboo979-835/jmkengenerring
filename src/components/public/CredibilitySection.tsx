'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Calendar,
  Users,
  Check,
  TrendingUp,
  Microscope,
  FileCheck
} from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    year: '2021',
    title: 'Establishment & Patna Central Works Inauguration',
    description: 'Founded as a specialized proprietorship firm in Patna, Bihar, commissioning initial heavy hydraulic shearing and press brake formwork manufacturing lines.',
    milestone: '5,000 MT Annual Staging Capacity',
  },
  {
    year: '2022',
    title: 'Bridge Bearing & Expansion Joint Division',
    description: 'Expanded into high-precision POT-PTFE bridge bearings and strip seal expansion joints certified for NHAI and State Highway flyovers.',
    milestone: 'MoRTH & IRC Test Compliance Achieved',
  },
  {
    year: '2023',
    title: 'National Logistics Hub Network Expansion',
    description: 'Established regional logistics and stocking depots across Delhi NCR (Manesar), Mumbai Western Corridor (Taloja), and Kolkata (Dankuni).',
    milestone: '4 Operational Strategic Depots',
  },
  {
    year: '2024 - Present',
    title: 'Digital Enterprise ERP & High-Precision Infra Supply',
    description: 'Integration of real-time GPS geofenced site telemetry, multi-tier QA approval desks, and scaling workforce to 50+ engineers and specialized fitters.',
    milestone: '500+ Civil Infrastructure Projects Supplied',
  },
];

export default function CredibilitySection() {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(3);

  return (
    <section className="py-20 bg-white text-black px-4 sm:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            <span>Verified Industrial Pedigree</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Built on Rigorous Engineering & Trust
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
            From our Patna fabrication works to key national infrastructure corridors, JMK Engineering & Developers stands for dimensional accuracy, heavy structural yield strength, and transparent execution.
          </p>
        </div>

        {/* Verified Credibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 p-6 rounded-2xl space-y-3 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center text-red-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-black text-red-600 uppercase tracking-wider">Govt. Registered</span>
              <h3 className="text-lg font-black text-black mt-0.5">GSTIN Verified</h3>
            </div>
            <p className="font-mono text-xs text-black bg-white p-2.5 rounded-lg border border-neutral-300 font-bold">
              10BIEPD2766D2ZX
            </p>
            <p className="text-xs text-neutral-600 font-medium">
              Registered in Bihar under Central & State GST authorities. 100% tax compliant billing.
            </p>
          </div>

          <div className="bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 p-6 rounded-2xl space-y-3 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center text-red-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-black text-red-600 uppercase tracking-wider">IndiaMART Certified</span>
              <h3 className="text-lg font-black text-black mt-0.5">TrustSEAL Verified</h3>
            </div>
            <div className="text-xs text-black bg-white p-2.5 rounded-lg border border-neutral-300 font-bold flex items-center justify-between">
              <span>Payment Protected</span>
              <span className="text-red-600 font-black">✓ Active</span>
            </div>
            <p className="text-xs text-neutral-600 font-medium">
              Authenticated corporate background check, audited premises, and verified banking channels.
            </p>
          </div>

          <div className="bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 p-6 rounded-2xl space-y-3 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center text-red-600">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-black text-red-600 uppercase tracking-wider">Logistics Grid</span>
              <h3 className="text-lg font-black text-black mt-0.5">4 Strategic Depots</h3>
            </div>
            <p className="text-xs text-black bg-white p-2.5 rounded-lg border border-neutral-300 font-bold">
              Patna, Delhi, Mumbai, Kolkata
            </p>
            <p className="text-xs text-neutral-600 font-medium">
              Regional buffer stock guarantees rapid on-site offloading for active infrastructure packages.
            </p>
          </div>

          <div className="bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 p-6 rounded-2xl space-y-3 transition shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-300 flex items-center justify-center text-red-600">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-black text-red-600 uppercase tracking-wider">Quality Standard</span>
              <h3 className="text-lg font-black text-black mt-0.5">MoRTH & IRC Code</h3>
            </div>
            <p className="text-xs text-black bg-white p-2.5 rounded-lg border border-neutral-300 font-bold">
              IRC:83 / IS 2062 / IS 1161
            </p>
            <p className="text-xs text-neutral-600 font-medium">
              Batch mill test certificates and ultrasonic weld inspection reports provided with every consignment.
            </p>
          </div>
        </div>

        {/* Interactive Growth Timeline */}
        <div className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <h3 className="text-xl font-black text-black">Company Milestones & Growth Track</h3>
              <p className="text-xs text-neutral-600 mt-0.5 font-medium">From Patna fabrication works to national infrastructure supplier</p>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {TIMELINE_EVENTS.map((item, idx) => (
                <button
                  key={item.year}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                    selectedTimelineIndex === idx
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white text-black border border-neutral-300 hover:border-red-600'
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-black rounded-md">
                Year {TIMELINE_EVENTS[selectedTimelineIndex].year}
              </div>
              <h4 className="text-2xl font-black text-black">
                {TIMELINE_EVENTS[selectedTimelineIndex].title}
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                {TIMELINE_EVENTS[selectedTimelineIndex].description}
              </p>
            </div>
            <div className="md:col-span-4 bg-white border-2 border-red-600/30 p-6 rounded-2xl shadow-sm text-center">
              <span className="text-[11px] font-black uppercase text-red-600 tracking-wider block">Key Achievement</span>
              <p className="text-lg font-black text-black mt-2">
                {TIMELINE_EVENTS[selectedTimelineIndex].milestone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
