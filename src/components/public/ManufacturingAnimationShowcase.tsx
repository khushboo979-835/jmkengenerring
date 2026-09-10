'use client';

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Wrench,
  Activity,
  Layers,
  ShieldCheck,
  Truck,
  RotateCw,
  Zap,
  Gauge,
  Cpu,
  MoveHorizontal,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ManufacturingAnimationShowcaseProps {
  onOpenRFQ: (serviceName?: string) => void;
}

export default function ManufacturingAnimationShowcase({ onOpenRFQ }: ManufacturingAnimationShowcaseProps) {
  const [activeProcess, setActiveProcess] = useState<number>(0);
  const [jointGap, setJointGap] = useState<number>(50); // percentage for expansion joint
  const [isPressing, setIsPressing] = useState<boolean>(true);
  const [tonnageCount, setTonnageCount] = useState<number>(250);

  // Auto cycle active process every 8 seconds if user is not manually clicking
  useEffect(() => {
    const timer = setInterval(() => {
      setTonnageCount((prev) => (prev >= 250 ? 210 + Math.floor(Math.random() * 40) : 250));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const manufacturingServices = [
    {
      id: 'cnc-bending',
      title: 'CNC Press Brake & Heavy Plate Forming',
      badge: '250 MT Hydraulic Capacity',
      description: 'Precision cold bending of 2.0mm to 5.0mm structural plates for Centering Sheets & 27kg Shuttering with zero angular deviation.',
      specs: ['IS 2062 Grade E250/E350', 'Max Length: 4000 mm', 'Tolerance: ±0.2 mm', 'Laser Angle Sensor']
    },
    {
      id: 'robotic-welding',
      title: 'Submerged Arc & Precision MIG Welding',
      badge: 'Continuous Fillet Fusion',
      description: 'Automated twin-torch submerged arc welding on heavy MS soldiers, H-frame scaffolding, and bridge expansion anchor loops.',
      specs: ['100% Dye Penetrant Tested', 'Ultrasonic NDT Certified', 'Deep Penetration Seam', 'Zero Porosity Flange']
    },
    {
      id: 'bearing-testing',
      title: 'POT-PTFE Bridge Bearing 10,000 kN Test',
      badge: 'MoRTH & IRC:83 Certified',
      description: 'Hydraulic multi-axis compression testing rig verifying vertical load capacity, horizontal sliding friction, and elastomeric recovery.',
      specs: ['Virgin PTFE Fluorocarbon', 'High-Grade Chloroprene Pad', 'Rotation: ±0.03 Rad', 'Friction Coeff: <0.03']
    },
    {
      id: 'expansion-joint',
      title: 'Strip Seal Joint Assembly & Movement',
      badge: '±80mm Thermal Movement',
      description: 'Fabrication of steel edge beams with interlocking chloroprene seal profile, guaranteeing 100% watertightness for bridge decks.',
      specs: ['Extruded Neoprene Insert', 'Hot-Forged Anchor Loops', 'Fatigue Load Class A', 'Corrosion Class C5-M']
    },
    {
      id: 'galvanizing-tank',
      title: 'Hot-Dip Galvanizing & Coating Line',
      badge: '80 Micron Zinc Immersion',
      description: 'Automated 7-tank surface pre-treatment followed by molten zinc bath immersion at 450°C for Drainage Spouts and Scaffolding.',
      specs: ['IS 4759 / IS 2629 Compliant', '450°C High-Purity Zinc', 'Adhesion Hammer Tested', '50+ Year Rust Life']
    },
    {
      id: 'crane-dispatch',
      title: 'Heavy Gantry Staging & Fleet Dispatch',
      badge: 'Pan-India 24/7 Logistics',
      description: 'Automated overhead gantry cranes loading consignments onto dedicated trailer fleets connecting Patna HQ with Delhi, Mumbai, and Kolkata.',
      specs: ['10 MT Overhead Gantry', 'GPS Geofenced Fleet Track', 'Batch Barcode Traceability', 'Same-Day Dispatch Ready']
    }
  ];

  return (
    <section className="py-20 bg-white text-black px-4 sm:px-8 border-b-2 border-neutral-200 relative overflow-hidden">
      {/* Dynamic Animated Background Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint pointer-events-none opacity-40"></div>

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span>Live Patna Works Manufacturing Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
              Interactive Manufacturing & Fabrication Services
            </h2>
            <p className="text-sm text-neutral-700 mt-2 max-w-2xl font-medium">
              Explore our core heavy civil manufacturing processes in action. Click any service station below to view real-time animated CAD schematics and technical parameters.
            </p>
          </div>

          <button
            onClick={() => onOpenRFQ(manufacturingServices[activeProcess].title)}
            className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-lg shadow-red-600/30 flex items-center gap-2 self-start md:self-auto"
          >
            <span>Inquire for this Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Main Canvas Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {manufacturingServices.map((service, index) => {
              const isActive = activeProcess === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveProcess(index)}
                  className={`p-4 rounded-2xl text-left border-2 transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-neutral-900 border-black text-white shadow-xl shadow-black/10 scale-[1.01]'
                      : 'bg-neutral-50 border-neutral-200 hover:border-red-600 text-black hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded ${
                        isActive ? 'bg-red-600 text-white' : 'bg-red-100 text-red-700'
                      }`}>
                        Stage 0{index + 1}
                      </span>
                      <span className={`text-xs font-bold ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-black tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform ${
                    isActive ? 'bg-red-600 text-white translate-x-1' : 'bg-white border border-neutral-300 text-neutral-400 group-hover:text-red-600'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Live Simulation Viewport */}
          <div className="lg:col-span-7 bg-black text-white rounded-3xl border-4 border-neutral-900 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[460px]">
            {/* Top Telemetry Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4 relative z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-ping"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 absolute left-8"></span>
                <span className="font-mono text-xs text-red-500 font-black uppercase tracking-wider">
                  Live Process Telemetry: {manufacturingServices[activeProcess].id.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-300">
                  ⚡ Patna Works Line Active
                </span>
              </div>
            </div>

            {/* Dynamic Animated Visualizer Canvas according to activeProcess */}
            <div className="my-8 relative min-h-[220px] flex items-center justify-center overflow-hidden">
              {/* Laser Scanning Bar */}
              <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_12px_rgba(220,38,38,1)] animate-laser pointer-events-none z-20"></div>

              {/* 1. CNC Press Brake Animation */}
              {activeProcess === 0 && (
                <div className="w-full max-w-md mx-auto space-y-6 text-center">
                  <div className="relative h-40 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden">
                    {/* Upper Hydraulic Punch Moving */}
                    <div className="w-32 h-14 bg-gradient-to-b from-neutral-700 to-red-600 rounded-t-lg border-2 border-red-500 animate-piston flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-red-600/50">
                      250 MT Punch
                    </div>
                    {/* Bended Steel Sheet Plate */}
                    <div className="w-56 h-3 bg-neutral-300 rounded shadow-md mt-2 relative">
                      <div className="absolute inset-0 bg-red-600 opacity-60 animate-pulse"></div>
                    </div>
                    {/* Lower Die Base */}
                    <div className="w-48 h-8 bg-neutral-900 border border-neutral-700 rounded-b-lg mt-1 flex items-center justify-center text-[9px] font-mono text-neutral-400">
                      V-Die Base • IS 2062 Plate
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Hydraulic Load</span>
                      <span className="text-red-500 font-bold">{tonnageCount} Metric Tonnes</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Bend Angle</span>
                      <span className="text-white font-bold">90.0° Precision</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Cycle Time</span>
                      <span className="text-emerald-400 font-bold">4.8s / Sheet</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Submerged Arc Welding Animation */}
              {activeProcess === 1 && (
                <div className="w-full max-w-md mx-auto space-y-6 text-center">
                  <div className="relative h-40 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden">
                    {/* Welding Head */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-8 h-16 bg-neutral-600 rounded-t border border-neutral-500"></div>
                      <div className="w-2 h-6 bg-red-600"></div>
                      {/* Arc Spark Explosion */}
                      <div className="absolute -bottom-2 w-12 h-12 bg-red-600/40 rounded-full blur-sm animate-spark"></div>
                      <div className="absolute -bottom-1 w-4 h-4 bg-white rounded-full animate-ping"></div>
                    </div>
                    {/* Welded Seam Channel */}
                    <div className="w-64 h-6 bg-neutral-800 border border-neutral-700 rounded-md mt-4 relative overflow-hidden flex items-center">
                      <div className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-neutral-700 w-3/4 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Arc Voltage</span>
                      <span className="text-red-500 font-bold">32.4 V / 450A</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">NDT Test</span>
                      <span className="text-emerald-400 font-bold">100% Passed</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Penetration</span>
                      <span className="text-white font-bold">8.5mm Full Depth</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. POT-PTFE Bridge Bearing Testing Rig */}
              {activeProcess === 2 && (
                <div className="w-full max-w-md mx-auto space-y-6 text-center">
                  <div className="relative h-40 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center">
                    <div className="w-40 h-8 bg-neutral-800 border border-neutral-600 rounded-t-lg flex items-center justify-center text-[10px] font-bold text-red-400">
                      10,000 kN Test Piston
                    </div>
                    {/* PTFE & Elastomeric Disc Layer */}
                    <div className="w-36 h-3 bg-white border border-neutral-300 text-[8px] text-black font-bold flex items-center justify-center">
                      Virgin PTFE Disc (Coeff &lt; 0.03)
                    </div>
                    <div className="w-36 h-6 bg-red-700 border border-red-600 text-[8px] font-bold text-white flex items-center justify-center">
                      Confined Neoprene Core (IRC:83)
                    </div>
                    <div className="w-44 h-8 bg-neutral-900 border border-neutral-700 rounded-b-lg flex items-center justify-center text-[10px] text-neutral-400">
                      Steel Pot Cylinder (IS 2062 E350)
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Test Proof Load</span>
                      <span className="text-red-500 font-bold">15,000 kN Peak</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Rotation Proof</span>
                      <span className="text-emerald-400 font-bold">0.035 Rad Pass</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Authority Standard</span>
                      <span className="text-white font-bold">MoRTH Section 2000</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Strip Seal Expansion Joint Simulator */}
              {activeProcess === 3 && (
                <div className="w-full max-w-md mx-auto space-y-4 text-center">
                  <div className="relative h-40 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex items-center justify-center">
                    {/* Left Edge Beam */}
                    <div className="w-24 h-24 bg-neutral-800 border-2 border-neutral-600 rounded-l-lg flex flex-col items-center justify-center text-[10px] font-bold text-neutral-300">
                      <span>Deck Beam A</span>
                      <span className="text-[8px] text-red-500">Anchor Loops</span>
                    </div>

                    {/* Dynamic Flexible Neoprene Strip Seal Gap */}
                    <div
                      className="h-16 bg-red-600 border-y-2 border-dashed border-white transition-all duration-300 flex items-center justify-center text-[9px] font-black text-white px-2 shadow-inner"
                      style={{ width: `${Math.max(30, (jointGap / 100) * 120)}px` }}
                    >
                      ±80mm Seal
                    </div>

                    {/* Right Edge Beam */}
                    <div className="w-24 h-24 bg-neutral-800 border-2 border-neutral-600 rounded-r-lg flex flex-col items-center justify-center text-[10px] font-bold text-neutral-300">
                      <span>Deck Beam B</span>
                      <span className="text-[8px] text-red-500">Anchor Loops</span>
                    </div>
                  </div>

                  {/* Interactive Movement Slider */}
                  <div className="bg-neutral-900 p-3 rounded-2xl border border-neutral-800 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-400">Bridge Deck Thermal Expansion:</span>
                      <span className="text-red-500 font-bold">{Math.round((jointGap / 100) * 80)} mm Movement</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={jointGap}
                      onChange={(e) => setJointGap(Number(e.target.value))}
                      className="w-full accent-red-600 cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* 5. Hot-Dip Galvanizing Dip Tank */}
              {activeProcess === 4 && (
                <div className="w-full max-w-md mx-auto space-y-6 text-center">
                  <div className="relative h-40 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden">
                    {/* Submerging Part with Crane Cable */}
                    <div className="w-1 h-8 bg-neutral-400 animate-piston"></div>
                    <div className="w-36 h-10 bg-neutral-300 border-2 border-white rounded animate-piston flex items-center justify-center text-[10px] font-bold text-black shadow-md">
                      MS Deck Drainage Spout
                    </div>
                    {/* Molten Zinc Tank */}
                    <div className="w-56 h-14 bg-gradient-to-t from-red-600 to-neutral-800 border-t-2 border-white rounded-t-xl mt-1 flex items-center justify-center text-[10px] font-mono text-white font-bold">
                      Molten Zinc Bath @ 450°C (80µm Layer)
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Bath Temp</span>
                      <span className="text-red-500 font-bold">450°C ± 5°C</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Coating Depth</span>
                      <span className="text-white font-bold">85 - 100 Microns</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Corrosion Rating</span>
                      <span className="text-emerald-400 font-bold">Class C5 High-Salt</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Crane Dispatch & Logistics Hub Fleet */}
              {activeProcess === 5 && (
                <div className="w-full max-w-md mx-auto space-y-6 text-center">
                  <div className="relative h-40 bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden">
                    {/* Overhead Gantry Crane Rail */}
                    <div className="w-full h-2 bg-neutral-700 relative">
                      <div className="w-12 h-4 bg-red-600 absolute left-1/3 -top-1 rounded animate-marquee"></div>
                    </div>
                    {/* Staged Steel Consignments */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="p-2 bg-neutral-900 border border-neutral-700 rounded text-[9px] font-mono text-red-400">
                        📦 Delhi Hub Lot
                      </div>
                      <div className="p-2 bg-neutral-900 border border-neutral-700 rounded text-[9px] font-mono text-red-400">
                        📦 Mumbai Nh-48
                      </div>
                      <div className="p-2 bg-neutral-900 border border-neutral-700 rounded text-[9px] font-mono text-red-400">
                        📦 Kolkata Dankuni
                      </div>
                    </div>
                    <p className="text-[10px] font-mono text-emerald-400 mt-3">
                      ✓ Real-Time GPS Tracking Active across 4 Regional Hubs
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Daily Dispatch</span>
                      <span className="text-red-500 font-bold">40+ Metric Tonnes</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Fleet Connectivity</span>
                      <span className="text-emerald-400 font-bold">24-Hr Express</span>
                    </div>
                    <div className="bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <span className="text-neutral-500 text-[10px] block">Traceability</span>
                      <span className="text-white font-bold">Barcode Lot ID</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Technical Spec Pills */}
            <div className="pt-4 border-t border-neutral-800 space-y-3 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-black text-white">
                  {manufacturingServices[activeProcess].title}
                </h4>
                <span className="text-xs font-mono text-red-400 font-bold">
                  {manufacturingServices[activeProcess].badge}
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                {manufacturingServices[activeProcess].description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {manufacturingServices[activeProcess].specs.map((sp, idx) => (
                  <div key={idx} className="px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300 font-medium">
                    ✓ {sp}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Manufacturing Ticker Marquee */}
        <div className="bg-black text-white py-3 px-4 rounded-2xl border-2 border-red-600 overflow-hidden flex items-center shadow-lg">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-red-500 shrink-0 pr-4 border-r border-neutral-800">
            <Activity className="w-4 h-4 animate-pulse text-red-500" />
            <span>Patna Central Works Telemetry:</span>
          </div>

          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-8 text-xs font-mono text-neutral-300 animate-marquee">
              <span>⚡ CNC Line 01: 250 MT Shearing Running [IS 2062 Grade E350]</span>
              <span>•</span>
              <span>🌉 Hydraulic Rig: POT-PTFE Bearing 10,000 kN Load Verified</span>
              <span>•</span>
              <span>🔩 Expansion Line: 20-inch MS Strip Seal Assembly Testing Passed</span>
              <span>•</span>
              <span>🚚 Dispatch Gate: 35 MT Consignment Released to Delhi NCR Hub</span>
              <span>•</span>
              <span>🛡️ Galvanizing Tank: 80µm Deck Drainage Spout Batch Dipped</span>
              <span>•</span>
              <span>📐 Formwork Shop: 500 Pcs Centering Sheets Staged for Inspection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
