'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  Factory,
  ChevronRight,
  ArrowRight,
  MapPin,
  Flame,
  Wrench,
  Sparkles,
  Layers,
  Star,
  Quote,
  Send,
  PhoneCall,
  Mail,
  FileCheck,
  Check,
  Award,
  Cpu,
  Boxes,
  FileText,
  UserCheck,
  CreditCard,
  Truck,
  Landmark,
  Maximize2,
  X,
  ExternalLink,
  Compass,
  Handshake,
  Target,
  Eye,
  Zap,
  CheckCheck
} from 'lucide-react';
import CredibilitySection from '@/components/public/CredibilitySection';
import RFQModal from '@/components/public/RFQModal';

// 9 Official Product Lines from the JMK Flyer (media_1788947193617.png)
const JMK_FLYER_PRODUCTS = [
  {
    id: 'ptfe-bearing',
    name: 'PTFE Bridge Bearing',
    category: 'Bridge Bearing Division',
    spec: 'IRC:83 (Part III) / MoRTH Compliant',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg',
    description: 'High-load capacity POT-PTFE bridge bearings with virgin Teflon sliding surfaces for flyovers and river bridges.',
  },
  {
    id: 'strip-seal-joint',
    name: 'Strip Seal Expansion Joint',
    category: 'Expansion Joint Division',
    spec: 'IRC:SP:69 / MoRTH Section 2600',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    description: 'Watertight neoprene profile single and multi-gap strip seal expansion joints for highway carriageways.',
  },
  {
    id: 'drainage-spout',
    name: 'Bridge Drainage Spouts',
    category: 'Drainage & Castings',
    spec: '12mm / 10mm MS & Cast Iron',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476989955/PV/II/RN/146888318/mild-steel-pop-up-drainage-spout-500x500.jpg',
    description: 'Hot-dip galvanized and MS drainage spouts designed for efficient bridge deck stormwater evacuation.',
  },
  {
    id: 'shuttering-plates',
    name: 'MS Shuttering Plates',
    category: 'Heavy Formwork',
    spec: 'IS 2062 Grade Steel / 20-35 Kg',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg',
    description: 'High-yield civil shuttering plates with cold-bent perimeter angles ensuring zero slurry leakage.',
  },
  {
    id: 'elastomeric-bearing',
    name: 'Elastomeric Bearing',
    category: 'Bridge Bearing Division',
    spec: 'IRC:83 (Part II) Laminated Neoprene',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476991491/YM/YK/CZ/146888318/elastomeric-bridge-bearing-500x500.jpg',
    description: 'Reinforced elastomeric neoprene bearing pads tested for extreme compressive and shear strain loads.',
  },
  {
    id: 'barrication-board',
    name: 'Barrication Board & Safety Gates',
    category: 'Highway Safety Products',
    spec: 'Heavy Gauge MS Mesh & Powder Coated',
    imageUrl: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=600&q=80',
    description: 'Industrial yellow traffic barricades, moveable safety gates, and site perimeter safety barriers.',
  },
  {
    id: 'concrete-mixer-machine',
    name: 'Heavy Duty Concrete Mixer Machine',
    category: 'Construction Machinery',
    spec: '10/7 CFT Drum / Heavy Steel Chassis with Wheels',
    imageUrl: '/images/about/concrete-mixer-machine.png',
    description: 'Site-tested heavy duty concrete mixer machine with robust steering tow-bar and high-torque motor for rapid on-site batching.',
  },
  {
    id: 'column-shuttering',
    name: 'Column Shuttering Plates',
    category: 'Heavy Formwork',
    spec: 'Adjustable Sizes / Rigid Lock Pins',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507519619/CV/TB/SN/146888318/mild-steel-h-frame-scaffolding-500x500.jpg',
    description: 'Heavy duty modular column shuttering panels for piers, box culverts, and high-rise shear walls.',
  },
  {
    id: 'factory-shed',
    name: 'PEB Factory Shed Structures',
    category: 'Turnkey PEB Structures',
    spec: 'Structural Steel Truss & Purlin Systems',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Custom pre-engineered industrial factory sheds, heavy steel warehouses, and fabrication workshops.',
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    client: 'Rajesh Kumar Singh',
    designation: 'Project Director & Chief Engineer',
    company: 'Elevated Expressway Flyover Project (Bihar)',
    rating: 5,
    comment:
      'We procured over 450 metric tons of custom box culvert formwork moulds and heavy MS shuttering plates from JMK Engineering. The precision of CNC bending and seam alignment was remarkable, resulting in zero slurry leakage and flawless concrete finishes.',
    date: 'August 2025',
    verified: true,
  },
  {
    id: 2,
    client: 'Amitava Banerjee',
    designation: 'VP - Procurement & Contracts',
    company: 'National Highway Infrastructure Package (West Bengal)',
    rating: 5,
    comment:
      'JMK’s MoRTH-certified W-Beam highway crash barriers and POT-PTFE bridge bearings passed all third-party ultrasonic and metallurgical tests on the first attempt. Excellent dispatch speed and technical MTC documentation.',
    date: 'November 2025',
    verified: true,
  },
  {
    id: 3,
    client: 'Vikas Sharma',
    designation: 'Senior Formwork Consultant',
    company: 'Metro Rail Viaduct & Pier Staging Division',
    rating: 5,
    comment:
      'The Cuplock scaffolding staging towers and heavy prop jacks provided by JMK Engineering offered extreme load-bearing stability during high-volume deck slab pours. Their Patna facility engineers provided swift customized CAD drawings.',
    date: 'January 2026',
    verified: true,
  },
];

export default function AboutPage() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqDefaultProduct, setRfqDefaultProduct] = useState<string | undefined>(undefined);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const handleOpenRFQ = (prodName?: string) => {
    setRfqDefaultProduct(prodName);
    setIsRfqOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden font-sans">
      
      {/* Background Soft Floating Cyan Geometric Accents & Falling Light & Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Background Tint Blocks */}
        <div className="absolute top-10 left-2 w-48 h-48 bg-cyan-100/40 -rotate-12 rounded-3xl blur-[1px]"></div>
        <div className="absolute top-72 -left-12 w-56 h-56 bg-sky-100/30 rotate-45 rounded-3xl"></div>
        <div className="absolute top-14 right-2 w-48 h-48 bg-cyan-100/40 rotate-12 rounded-3xl blur-[1px]"></div>
        <div className="absolute top-80 -right-12 w-56 h-56 bg-sky-100/30 -rotate-45 rounded-3xl"></div>

        {/* 1. Upar se Niche Flow hone wali Sky Blue Light Beam Streams */}
        <div className="absolute top-0 left-1/4 w-32 h-[450px] bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent blur-2xl animate-light-stream"></div>
        <div className="absolute top-0 right-1/4 w-40 h-[500px] bg-gradient-to-b from-transparent via-sky-400/20 to-transparent blur-2xl animate-light-stream [animation-delay:2s]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[600px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-3xl animate-light-stream [animation-delay:1s]"></div>

        {/* 2. Top Corners & Header se Upar se Niche Falling Glowing Glass Bubbles */}
        {/* Left Side Falling Bubbles */}
        <div className="absolute top-4 left-[8%] w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300/70 via-sky-400/50 to-blue-500/60 shadow-lg shadow-cyan-400/50 backdrop-blur-sm border border-white/60 animate-bubble-fall-1">
          <div className="w-2.5 h-2.5 bg-white/90 rounded-full m-1 blur-[0.5px]"></div>
        </div>
        <div className="absolute top-8 left-[18%] w-6 h-6 rounded-full bg-gradient-to-br from-teal-300/80 to-cyan-500/60 shadow-md shadow-teal-400/40 backdrop-blur-sm border border-white/70 animate-bubble-fall-3">
          <div className="w-1.5 h-1.5 bg-white/90 rounded-full m-0.5"></div>
        </div>
        <div className="absolute top-2 left-[28%] w-14 h-14 rounded-full bg-gradient-to-br from-sky-200/60 via-cyan-400/40 to-blue-400/50 shadow-xl shadow-cyan-300/40 backdrop-blur-md border border-white/80 animate-bubble-fall-2">
          <div className="w-3.5 h-3.5 bg-white/90 rounded-full m-1.5 blur-[0.5px]"></div>
        </div>

        {/* Right Side Falling Bubbles */}
        <div className="absolute top-6 right-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300/70 via-sky-400/50 to-indigo-500/60 shadow-lg shadow-sky-400/50 backdrop-blur-sm border border-white/60 animate-bubble-fall-2">
          <div className="w-3 h-3 bg-white/90 rounded-full m-1 blur-[0.5px]"></div>
        </div>
        <div className="absolute top-10 right-[22%] w-7 h-7 rounded-full bg-gradient-to-br from-amber-300/70 via-orange-400/50 to-red-400/60 shadow-md shadow-orange-400/40 backdrop-blur-sm border border-white/70 animate-bubble-fall-4">
          <div className="w-2 h-2 bg-white/90 rounded-full m-0.5"></div>
        </div>
        <div className="absolute top-3 right-[32%] w-9 h-9 rounded-full bg-gradient-to-br from-teal-200/70 via-cyan-400/50 to-blue-500/50 shadow-lg shadow-teal-400/40 backdrop-blur-sm border border-white/80 animate-bubble-fall-1 [animation-delay:1.8s]">
          <div className="w-2.5 h-2.5 bg-white/90 rounded-full m-1"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 font-bold">
          <Link href="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-red-600 font-black">About Us & Company Profile</span>
        </div>

        {/* 1. Ultra-Attractive Interlocked Honeycomb Showcase (Moved Higher Up, Larger Size, Seamless Tight Interlock) */}
        <section className="relative pt-1 pb-4">
          
          {/* Subtle Cyber/Glow Aurora behind Hexagon Cluster */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-cyan-400/20 via-orange-400/15 to-emerald-400/20 blur-3xl pointer-events-none rounded-full"></div>

          {/* Light Sweep Ray over the Matrix */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="w-full h-24 bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent animate-light-stream"></div>
          </div>

          <div className="relative z-10 -space-y-7 sm:-space-y-12 lg:-space-y-16 max-w-6xl mx-auto drop-shadow-xl">
            
            {/* ROW 1: 5 Interlocking Hexagons (Larger & Tighter) */}
            <div className="flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2">
              
              {/* 1. Heavy Fabrication Workshop & Infrastructure Crew */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 shadow-lg group-hover/hex:shadow-cyan-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=85"
                      alt="Bridge Fabrication Site"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Civil Site</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. POT-PTFE Bridge Bearing Assembly */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-amber-500 via-orange-400 to-red-500 shadow-lg group-hover/hex:shadow-orange-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
                      alt="POT PTFE Bearing"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">POT-PTFE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Strip Seal Expansion Joint Aluminium / Rubber Profile */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-500 shadow-lg group-hover/hex:shadow-cyan-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2025/4/506813828/IV/OU/DI/146888318/floor-aluminum-joint-500x500.jpg"
                      alt="Expansion Joint Profile"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Joint Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Circular Elastomeric Bridge Bearing Mount */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-teal-400 via-emerald-500 to-cyan-600 shadow-lg group-hover/hex:shadow-emerald-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2024/12/476991491/YM/YK/CZ/146888318/elastomeric-bridge-bearing-500x500.jpg"
                      alt="Elastomeric Bearing"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Elastomeric</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. MS Structural Channels & Beams */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-orange-400 via-amber-500 to-yellow-400 shadow-lg group-hover/hex:shadow-amber-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2025/4/506857058/BT/GD/DK/146888318/ms-channel-100-x-50-500x500.jpg"
                      alt="MS Channels"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">MS Channels</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 2: 6 Interlocking Hexagons (Nestled tightly in Row 1 notches) */}
            <div className="flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2">
              
              {/* 6. Heavy Duty Concrete Mixer Machine (User Image 1) */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-orange-500 via-amber-500 to-red-600 shadow-lg group-hover/hex:shadow-orange-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-white overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="/images/about/concrete-mixer-machine.png"
                      alt="Concrete Mixer Machine"
                      className="w-full h-full object-contain p-1 group-hover/hex:scale-115 filter brightness-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Mixer Machine</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Finger-type Modular Expansion Joint */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-cyan-400 via-sky-500 to-teal-400 shadow-lg group-hover/hex:shadow-cyan-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2025/4/505863257/GB/DG/GQ/146888318/finger-type-expansion-joint-500x500.jpg"
                      alt="Modular Joint"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Modular Joint</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 (CENTER FOCAL POINT): Heavy Circular Well / Column Shuttering Formwork (User Image 2) */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-120 z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[3.5px] sm:p-[4px] bg-gradient-to-b from-amber-400 via-orange-500 to-red-600 shadow-2xl shadow-orange-500/50 ring-4 ring-orange-400/50 group-hover/hex:ring-orange-500 group-hover/hex:shadow-orange-500/80 transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="/images/about/circular-well-formwork.jpg"
                      alt="Circular Well Formwork - JMK Works"
                      className="w-full h-full object-cover group-hover/hex:scale-115 filter brightness-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent py-2.5 px-1 text-center flex flex-col items-center">
                      <span className="text-[9px] sm:text-[10px] font-black text-amber-300 uppercase tracking-tight leading-none drop-shadow">Well Formwork</span>
                      <span className="text-[7.5px] sm:text-[8.5px] font-bold text-white/90 uppercase tracking-widest leading-none mt-0.5">Central Works</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 9. Strip Seal Joint in Bridge Deck Concrete Slit */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-orange-400 via-amber-500 to-red-500 shadow-lg group-hover/hex:shadow-orange-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg"
                      alt="Strip Seal in Concrete"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Bridge Deck</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 10. Heavy Scaffolding Props & Jacks */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-teal-400 via-emerald-500 to-cyan-500 shadow-lg group-hover/hex:shadow-teal-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2025/1/482920899/KK/PC/RQ/146888318/scaffolding-adjustable-props-jack-500x500.jpg"
                      alt="Adjustable Props"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Prop Jacks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 11. Heavy Industrial Yellow Staging Truss Blocks (User Image 3) */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-yellow-400 via-amber-500 to-orange-500 shadow-lg group-hover/hex:shadow-yellow-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="/images/about/yellow-girder-staging-truss.jpg"
                      alt="Yellow Staging Truss Blocks"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Staging Truss</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ROW 3: 5 Hexagons (Nestled tightly in Row 2 notches) */}
            <div className="flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2">
              
              {/* 12. Heavy Finished Goods Logistics Warehouse */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-500 shadow-lg group-hover/hex:shadow-cyan-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=85"
                      alt="Logistics Depot"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Logistics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 13. Box Culvert Heavy Concrete Formwork */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-orange-400 via-amber-500 to-red-500 shadow-lg group-hover/hex:shadow-orange-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=600&q=85"
                      alt="Box Culvert"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Box Culvert</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 14. Heavy MS Shuttering Plates Stack */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-amber-500 via-orange-500 to-red-500 shadow-lg group-hover/hex:shadow-amber-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg"
                      alt="Shuttering Plates"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Shuttering</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 15. Galvanized Bridge Drainage Spouts */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-500 shadow-lg group-hover/hex:shadow-cyan-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2024/12/476989955/PV/II/RN/146888318/mild-steel-pop-up-drainage-spout-500x500.jpg"
                      alt="Drainage Spouts"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Drainage Spouts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 16. Heavy Duty Purple Steel Box Trusses & Girders (User Image 4) */}
              <div className="w-[19%] max-w-[180px] aspect-[1/1.15] group/hex transition-all duration-500 hover:scale-115 hover:z-30 cursor-pointer">
                <div
                  className="w-full h-full p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-purple-500 via-indigo-500 to-red-600 shadow-lg group-hover/hex:shadow-purple-400/50 group-hover/hex:p-[3.5px] transition-all"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="relative w-full h-full bg-neutral-900 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <img
                      src="/images/about/purple-steel-truss-box.jpg"
                      alt="Purple Steel Box Trusses"
                      className="w-full h-full object-cover group-hover/hex:scale-120 filter brightness-105 group-hover/hex:brightness-115 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider px-1 text-center">Box Trusses</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* Silver Chrome Horizontal Divider Bar (Exact from media_1788947630095.png) */}
        <div className="h-2 w-full bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 rounded-full shadow-inner border border-slate-300/80"></div>

        {/* 2. "Our Legacy & Focus" Section (Exact 3-Card Layout from media_1788947630095.png) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              Our Legacy & Focus
            </h2>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Box 1: Founding Principles (Span 4) */}
            <div className="lg:col-span-4 bg-neutral-50/90 rounded-3xl border-2 border-neutral-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
                  <h3 className="text-base font-black text-slate-900">Founding Principles</h3>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase">Established: 2021 | ISO Certified</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                    <span>
                      Established in Year <strong className="text-black font-black">2021</strong>, We <strong className="text-black font-black">&ldquo;JMK Engineering & Developers&rdquo;</strong> are Manufacturer of <span className="font-bold text-neutral-900">Expansion Joints, Drainage Spout, Bridge Bearings</span>, and Much More.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <h4 className="text-xs font-black text-black uppercase tracking-wider mb-1">Operational Leadership</h4>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                  We offer these products at reasonable rates and deliver within promised time-frames across India.
                </p>
              </div>
            </div>

            {/* Box 2: Our Capabilities (Span 4) */}
            <div className="lg:col-span-4 bg-neutral-50/90 rounded-3xl border-2 border-neutral-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
                  <h3 className="text-base font-black text-slate-900">Our Capabilities</h3>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase font-mono">IS & MoRTH Compliant</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                    <span>
                      Precision manufacturing to enhance material tensile strength, dimensional accuracy, and load capacities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                    <span>
                      On-site execution for bridge construction deadlines with rich industrial experience to understand varied requirements.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Patna Central Works Direct Dispatch</span>
                </div>
              </div>
            </div>

            {/* Box 3: Mrs. Pramila Devi (CEO, PROFESSIONAL LEADER) Card (Span 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border-2 border-neutral-300 p-6 shadow-md space-y-4 flex flex-col justify-between relative overflow-hidden">
              
              <div className="space-y-3">
                {/* Header with Avatar & Details */}
                <div className="flex items-start gap-3.5">
                  
                  {/* Hexagon CEO Avatar with Orange Border (Exact media_1788947630095.png) */}
                  <div className="relative shrink-0 w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center">
                    <div
                      className="w-full h-full p-[2.5px] bg-gradient-to-b from-amber-400 to-orange-500 shadow-md"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <div className="w-full h-full bg-white p-1 overflow-hidden flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <img
                          src="https://5.imimg.com/data5/SELLER/Logo/2025/1/478932299/PR/TT/IP/146888318/img-20231217-wa0143.jpg"
                          alt="Mrs. Pramila Devi - JMK Engineering & Developers"
                          className="w-full h-full object-contain filter contrast-105"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="text-base sm:text-lg font-black text-black leading-tight">Mrs. Pramila Devi</h3>
                    </div>
                    <p className="text-[11px] font-black text-red-600 uppercase tracking-wide">CEO, PROFESSIONAL LEADER</p>
                    
                    {/* TrustSEAL Badge */}
                    <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-300 px-2.5 py-0.5 rounded-full">
                      <Award className="w-3 h-3 text-amber-600 fill-amber-500" />
                      <span className="text-[9px] font-black text-amber-900 uppercase">TRUSTSEAL VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* 3 Value Pillars */}
                <div className="space-y-1.5 text-xs text-neutral-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="text-[11px]">Professional, leadership-oriented to enhance manufacturing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="text-[11px]">Compass to leadership & Developers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Handshake className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="text-[11px]">Hands-on technical team coordination</span>
                  </div>
                </div>
              </div>

              {/* CEO Quote Block */}
              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200">
                <p className="text-[11px] text-neutral-600 italic leading-relaxed">
                  &ldquo;Manufacturing standards to enhance material precision, dimensional consistency, and ample on-site execution of highway infrastructure across India.&rdquo;
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Mission, Vision & Core Values Section */}
        <section id="mission-vision" className="scroll-mt-24 space-y-6 pt-2">
          <div className="border-b-2 border-neutral-200 pb-4 flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-wider">
                <Target className="w-4 h-4 text-red-600" />
                <span>Our Purpose & Strategic Direction</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our Vision, Mission & Core Values
              </h2>
            </div>
            <p className="text-xs text-neutral-600 font-bold max-w-md text-left sm:text-right">
              Building lasting civil infrastructure through uncompromising quality, heavy fabrication precision, and customer-first engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* 1. Our Vision Card (Span 6) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-neutral-900 via-slate-900 to-black text-white rounded-3xl border-2 border-neutral-800 p-6 sm:p-8 space-y-5 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-red-600 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all"></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30">
                    <Eye className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 text-red-400 text-[11px] font-black uppercase tracking-wider rounded-full">
                    Future Roadmap
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    To be India's premier and most trusted manufacturing hub for heavy civil engineering, bridge expansion systems, POT-PTFE bearings, and modular infrastructure solutions.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 font-medium pt-2">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                      <CheckCheck className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>National Infrastructure Standard:</strong> Establish our Patna manufacturing plant as the preferred supply node for NHAI, MoRTH, and Metro Rail projects across India.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                      <CheckCheck className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Engineering Innovation:</strong> Continuously pioneer high-durability elastomeric compounds and laser-aligned expansion joints that outlast extreme structural load demands.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                      <CheckCheck className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Self-Reliant Manufacturing:</strong> Champion &ldquo;Make in India&rdquo; with 100% indigenous fabrication, certified testing, and direct factory-to-site logistical reach.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 font-semibold relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-400" />
                <span>Empowering high-speed corridors, flyovers, and elevated viaducts nationwide.</span>
              </div>
            </div>

            {/* 2. Our Mission Card (Span 6) */}
            <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-neutral-300 hover:border-red-600 p-6 sm:p-8 space-y-5 shadow-xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-50 rounded-full blur-3xl pointer-events-none group-hover:bg-red-100/50 transition-all"></div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-red-500 flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="px-3 py-1 bg-red-50 border border-red-200 text-red-600 text-[11px] font-black uppercase tracking-wider rounded-full">
                    Core Commitment
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                    To deliver precision-machined, certified civil structural products with zero-defect quality, fair ex-factory pricing, and uncompromised on-time delivery.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-neutral-700 font-medium pt-2">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Uncompromising Quality:</strong> Maintain stringent IS 2062, IRC:83, and MoRTH compliance through certified raw materials and verified ultrasonic weld inspections.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Speed & Schedule Integrity:</strong> Respect critical construction milestones by manufacturing and dispatching within promised project timeframes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>End-to-End Client Support:</strong> Offer custom CAD detailing, technical datasheet verification, and responsive on-site fabrication consultation.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-200 text-[11px] text-neutral-600 font-semibold relative z-10 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Client Satisfaction Guaranteed on every production batch.</span>
              </div>
            </div>

            {/* 3. Core Values Grid Banner (Span 12) */}
            <div className="lg:col-span-12 bg-neutral-50 rounded-3xl border-2 border-neutral-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-200 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black text-red-600 uppercase tracking-wider">Foundational Pillars</span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">Our 4 Core Values</h3>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white border border-neutral-300 px-3 py-1 rounded-xl">
                  <Award className="w-3.5 h-3.5 text-red-600" />
                  <span>The JMK Engineering Code</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Value 1: Quality First */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2 hover:border-red-600 transition">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900">Integrity & Quality</h4>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Zero compromises on steel grade, plate thickness, or weld penetration. Mill test certificates provided with every order.
                  </p>
                </div>

                {/* Value 2: Precision Engineering */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2 hover:border-red-600 transition">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900">Engineering Precision</h4>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    State-of-the-art CNC shearing, hydraulic press bending, and tight machining tolerances for perfect site fitment.
                  </p>
                </div>

                {/* Value 3: Customer Commitment */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2 hover:border-red-600 transition">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900">Client Trust & Value</h4>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Transparent dealings, direct works pricing without middlemen, and dedicated technical desk assistance.
                  </p>
                </div>

                {/* Value 4: On-Time Execution */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-2 hover:border-red-600 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-slate-900">Pan-India Delivery</h4>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                    Dependable logistics fleet delivering directly to project sites across all states within promised timelines.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 3. Official Division Poster Showcase Section (User Uploaded media_1789285901380.png) */}
        <section className="space-y-6">
          <div className="border-b-2 border-neutral-200 pb-4 flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Official Division Portfolio & Works Poster</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Expansion Joint & Bridge Bearing Division
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPosterModalOpen(true)}
                className="px-4 py-2 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-black uppercase tracking-wider transition flex items-center gap-1.5 shadow"
              >
                <Maximize2 className="w-3.5 h-3.5 text-red-500" />
                <span>View Full Size Poster</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-black rounded-3xl border-2 border-neutral-800 p-6 sm:p-8 shadow-2xl text-white space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Official Poster High-Resolution Display Card */}
              <div className="lg:col-span-7 space-y-3">
                <div
                  onClick={() => setIsPosterModalOpen(true)}
                  className="group relative rounded-2xl overflow-hidden border-4 border-neutral-700 hover:border-red-600 transition-all duration-300 shadow-2xl cursor-pointer bg-neutral-950"
                >
                  <img
                    src="/images/about/jmk-official-division-poster.png"
                    alt="JMK Engineering & Developer Official Division Poster"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4" />
                      <span>Click to Enlarge Poster</span>
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-400 font-medium text-center">
                  Official Works Division Poster · JMK Engineering & Developer, Patna, Bihar
                </p>
              </div>

              {/* Right Column: 9 Key Division Product Lines & Quick Inquiry */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-black text-red-400 uppercase tracking-wider">Division Product Range</span>
                  <h3 className="text-xl font-black text-white">Heavy Structural & Bridge Solutions</h3>
                  <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                    Manufactured at our Patna Central Works in compliance with IRC:83, MoRTH Section 2600, and IS 2062 specifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>PTFE Bridge Bearing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Strip Seal Expansion Joint</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Bridge Drainage Spouts</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>MS Shuttering Plates</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Elastomeric Bearing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Barrication Board</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Road Sign Board</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>PEB Factory Sheds</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => handleOpenRFQ('Expansion Joint & Bridge Bearing Division Inquiry')}
                    className="flex-1 py-3 px-5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Division RFQ</span>
                  </button>
                  <a
                    href="tel:07942556842"
                    className="py-3 px-5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition border border-white/20 flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Call: 07942556842</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Complete Factsheet & Official Registered Profile (From Flyer & IndiaMART) */}
        <section className="space-y-6">
          <div className="border-b-2 border-neutral-200 pb-4 flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-wider">
                <FileCheck className="w-4 h-4 text-red-600" />
                <span>Verified Corporate Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Company Factsheet & Statutory Profile
              </h2>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>IndiaMART TrustSEAL Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Basic Information */}
            <div className="bg-neutral-50 rounded-3xl border-2 border-neutral-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-red-600 border-b border-neutral-200 pb-3">
                <Building2 className="w-5 h-5" />
                <h3 className="text-base font-black text-black">Basic Information</h3>
              </div>

              <div className="divide-y divide-neutral-200 text-xs sm:text-sm space-y-2.5 pt-1">
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Nature of Business:</span>
                  <span className="font-black text-black text-right">Manufacturer</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Additional Business:</span>
                  <span className="font-semibold text-neutral-800 text-right">Factory / Manufacturing</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Company CEO:</span>
                  <span className="font-black text-red-600 text-right">Mrs. Pramila Devi</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Total Employees:</span>
                  <span className="font-black text-black text-right">26 to 50 People</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Legal Status of Firm:</span>
                  <span className="font-black text-black text-right">Proprietorship</span>
                </div>
              </div>
            </div>

            {/* Card 2: Statutory Profile & Banking */}
            <div className="bg-neutral-50 rounded-3xl border-2 border-neutral-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-red-600 border-b border-neutral-200 pb-3">
                <Landmark className="w-5 h-5" />
                <h3 className="text-base font-black text-black">Statutory Profile</h3>
              </div>

              <div className="divide-y divide-neutral-200 text-xs sm:text-sm space-y-2.5 pt-1">
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">GST No.:</span>
                  <span className="font-black font-mono text-red-600 text-right">10BIEPD2766D2ZX</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">GST Registration Date:</span>
                  <span className="font-black text-black text-right">28-06-2021</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">GST Partner Name:</span>
                  <span className="font-black text-black text-right">Pramila Devi</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Primary Banker:</span>
                  <span className="font-black text-blue-900 text-right">Bank of India</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Quality Standard:</span>
                  <span className="font-black text-black text-right">ISO 9001:2015</span>
                </div>
              </div>
            </div>

            {/* Card 3: Packaging, Payment & Dispatch */}
            <div className="bg-neutral-50 rounded-3xl border-2 border-neutral-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-red-600 border-b border-neutral-200 pb-3">
                <Truck className="w-5 h-5" />
                <h3 className="text-base font-black text-black">Packaging & Dispatch</h3>
              </div>

              <div className="divide-y divide-neutral-200 text-xs sm:text-sm space-y-2.5 pt-1">
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Payment Modes:</span>
                  <span className="font-black text-black text-right">Cash, Online (RTGS / NEFT / UPI)</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Shipment Mode:</span>
                  <span className="font-black text-red-600 text-right">By Road (Dedicated Fleet)</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Dispatch Node:</span>
                  <span className="font-semibold text-neutral-800 text-right">Patna Central Works / Didarganj</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Official Website:</span>
                  <span className="font-mono font-black text-blue-900 text-right">jmkengineering.in</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-neutral-500 font-bold">Supply Radius:</span>
                  <span className="font-black text-emerald-700 text-right">Pan-India Site Delivery</span>
                </div>
              </div>
            </div>

          </div>

          {/* Registered Address Banner Matching Flyer media_1788947193617.png */}
          <div className="p-6 rounded-3xl bg-neutral-900 text-white border-2 border-neutral-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-lg">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-red-400 tracking-wider">
                  Patna Central Works Registered Location
                </span>
                <p className="text-sm sm:text-base font-bold text-white">
                  Jakariyapur, Mouja Jhali, Krishnaniketan Road / Trinity Global School, Patna - 800007, Bihar, India
                </p>
                <p className="text-xs text-neutral-300 font-medium">
                  Direct Inquiries: <strong className="text-white font-mono text-sm">07942556842</strong> (Verified Works Desk)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:07942556842"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition shadow-lg flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Now (07942556842)</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. Client Testimonials Section */}
        <section id="testimonials" className="scroll-mt-24 space-y-6 pt-2">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-neutral-200 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-wider">
                <Quote className="w-4 h-4 text-red-600" />
                <span>Verified Client Reviews</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                What Major Infrastructure Contractors Say
              </h2>
            </div>

            <div className="flex items-center gap-1.5 text-sm font-bold text-amber-600 bg-amber-50 border border-amber-300 px-3.5 py-1.5 rounded-full">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>IndiaMART TrustSEAL Rating: 4.3 / 5.0 (40+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500">{t.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium italic">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{t.client}</h4>
                    <p className="text-xs text-neutral-600 font-bold">{t.designation}</p>
                    <p className="text-[11px] text-red-600 font-semibold">{t.company}</p>
                  </div>
                  {t.verified && (
                    <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                      <Check className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

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
                <button
                  onClick={() => {
                    setIsPosterModalOpen(false);
                    handleOpenRFQ('Expansion Joint & Bridge Bearing Division');
                  }}
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold"
                >
                  Request RFQ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global RFQ Modal */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={rfqDefaultProduct}
      />
    </div>
  );
}
