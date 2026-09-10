'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  HardHat,
  Users,
  MapPin,
  ClipboardList,
  Package,
  Send,
  ShieldAlert,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  IndianRupee,
  Clock,
  AlertTriangle,
  Fingerprint,
  Radio,
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import DPRSubmissionModal from '@/components/portal/DPRSubmissionModal';
import { AuthUser } from '@/lib/rbac';

// Screen 3 Muster Roll Mock Data (Onsite ERP style)
const MUSTER_ROLL_WORKERS = [
  {
    id: 'EMP-PAT-081',
    name: 'Rameshwar Mahato',
    trade: 'Master Shuttering Carpenter',
    shift: 'General Shift (08:00 - 17:00)',
    punchTime: '07:54 AM (GPS Verified)',
    biometricStatus: 'FaceID Verified',
    wageRate: '₹ 850 / day',
    overtimeHours: '1.5 hrs',
    status: 'PRESENT',
  },
  {
    id: 'EMP-PAT-094',
    name: 'Dinesh Kumar Sharma',
    trade: 'Hydraulic Press & Bending Operator',
    shift: 'General Shift (08:00 - 17:00)',
    punchTime: '07:58 AM (GPS Verified)',
    biometricStatus: 'FaceID Verified',
    wageRate: '₹ 950 / day',
    overtimeHours: '2.0 hrs',
    status: 'PRESENT',
  },
  {
    id: 'EMP-PAT-102',
    name: 'Md. Tariq Anwar',
    trade: 'Certified Submerged Arc Welder',
    shift: 'General Shift (08:00 - 17:00)',
    punchTime: '08:02 AM (GPS Verified)',
    biometricStatus: 'FaceID Verified',
    wageRate: '₹ 900 / day',
    overtimeHours: '0.0 hrs',
    status: 'PRESENT',
  },
  {
    id: 'EMP-PAT-118',
    name: 'Sunil Paswan',
    trade: 'Scaffolding & Staging Rigger',
    shift: 'General Shift (08:00 - 17:00)',
    punchTime: '07:49 AM (GPS Verified)',
    biometricStatus: 'FaceID Verified',
    wageRate: '₹ 750 / day',
    overtimeHours: '1.0 hrs',
    status: 'PRESENT',
  },
  {
    id: 'EMP-PAT-125',
    name: 'Vikash Kumar Roy',
    trade: 'Formwork Quality & Gauge Inspector',
    shift: 'General Shift (08:00 - 17:00)',
    punchTime: '07:52 AM (GPS Verified)',
    biometricStatus: 'FaceID Verified',
    wageRate: '₹ 1,100 / day',
    overtimeHours: '1.0 hrs',
    status: 'PRESENT',
  },
];

export default function BranchOperationsPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isDprModalOpen, setIsDprModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Screen 3 Mandate: Context Bar showing "📍 Patna Branch Workspace" & "GPS Geofence: Active Zone" */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xl font-black text-red-600 tracking-tight">JMK</span>
              <span className="text-sm font-black text-slate-900">Engineering & Developers</span>
              <span className="text-neutral-400">|</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black">
                <MapPin className="w-3.5 h-3.5" />
                <span>📍 Patna Branch Workspace</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>GPS Geofence: Active Zone (600m Radius)</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Onsite Operations Desk & Live Labour Muster Roll
            </h1>
            <p className="text-xs text-neutral-600 font-medium">
              Didarganj Industrial Zone, Patna HQ Works • Real-time biometric labour synchronization with Central HQ Command Desk.
            </p>
          </div>

          <button
            onClick={() => setIsDprModalOpen(true)}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Daily Progress Report (DPR)</span>
          </button>
        </div>

        {/* Screen 3 Mandate: Live Telemetry Metric Boxes (Labour Strength: 142 present | Delayed tasks: 1 | Low material Alerts: 2 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Labour Strength
              </span>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                142 present
              </p>
              <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                ● 100% FaceID Verified
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-slate-800 flex items-center justify-center border border-neutral-200">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Delayed Tasks
              </span>
              <p className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
                1 task
              </p>
              <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">
                Ganga Bridge Pier 4 Bending Delay
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Low Material Alerts
              </span>
              <p className="text-2xl sm:text-3xl font-black text-amber-600 font-mono">
                2 items
              </p>
              <span className="text-[10px] font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                27kg MS Shuttering & Neoprene
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
              <Package className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Screen 3 Mandate: Local Action Tiles ([GPS Attendance Kiosk] [Material Stock Indent] [Submit Daily Progress Report (DPR)]) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/dashboard/branch/attendance"
            className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm hover:shadow-md space-y-3 group block"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200 group-hover:scale-105 transition">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition">
              GPS Attendance Kiosk
            </h3>
            <p className="text-xs text-neutral-600 font-medium">
              Launch tablet face biometric verification and geo-fenced worker check-in scanner.
            </p>
            <div className="text-xs font-black text-red-600 flex items-center gap-1 pt-1">
              <span>Open Kiosk Scanner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/dashboard/branch/inventory"
            className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm hover:shadow-md space-y-3 group block"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-slate-900 flex items-center justify-center border border-neutral-300 group-hover:scale-105 transition">
              <Package className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition">
              Material Stock Indent
            </h3>
            <p className="text-xs text-neutral-600 font-medium">
              Request raw steel coils, Fe 410 plates, or dispatch finished formwork to Delhi & Mumbai.
            </p>
            <div className="text-xs font-black text-red-600 flex items-center gap-1 pt-1">
              <span>Create Indent Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <button
            onClick={() => setIsDprModalOpen(true)}
            className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm hover:shadow-md space-y-3 group text-left w-full"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center group-hover:scale-105 transition shadow-md">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition">
              Submit Daily Progress Report (DPR)
            </h3>
            <p className="text-xs text-neutral-600 font-medium">
              Transmit daily completed tonnage, concrete pour volumes, and machinery utilization to HQ.
            </p>
            <div className="text-xs font-black text-red-600 flex items-center gap-1 pt-1">
              <span>Transmit Node DPR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Screen 3 Mandate - Lower Section: Table of Daily Labour Muster Roll */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-red-600 uppercase tracking-wider">Patna Central Works</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Daily Labour Muster Roll & Biometric Time Logs
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-xl">
              Shift Date: Today (Live)
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-100 text-slate-900 text-xs uppercase tracking-wider border-b border-neutral-200">
                <tr>
                  <th className="py-3.5 px-4 font-black">Worker ID & Name</th>
                  <th className="py-3.5 px-4 font-black">Trade / Skill Category</th>
                  <th className="py-3.5 px-4 font-black">Assigned Shift</th>
                  <th className="py-3.5 px-4 font-black">GPS & Biometric Verification</th>
                  <th className="py-3.5 px-4 font-black">Daily Wage</th>
                  <th className="py-3.5 px-4 font-black">OT Logged</th>
                  <th className="py-3.5 px-4 font-black">Attendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-slate-800">
                {MUSTER_ROLL_WORKERS.map((worker) => (
                  <tr key={worker.id} className="hover:bg-neutral-50 transition">
                    <td className="py-3.5 px-4 font-black text-slate-900">
                      <div>{worker.name}</div>
                      <span className="text-[10px] font-mono text-neutral-500">{worker.id}</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-700">
                      {worker.trade}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-neutral-600 font-medium">
                      {worker.shift}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs">
                      <div className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{worker.biometricStatus}</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">{worker.punchTime}</div>
                    </td>
                    <td className="py-3.5 px-4 font-black font-mono text-slate-900">
                      {worker.wageRate}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs font-bold text-red-600">
                      {worker.overtimeHours}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                        {worker.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DPR Submission Modal */}
      <DPRSubmissionModal
        isOpen={isDprModalOpen}
        onClose={() => setIsDprModalOpen(false)}
        user={user}
      />
    </div>
  );
}
