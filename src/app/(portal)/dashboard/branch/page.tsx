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

export default function BranchOperationsPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [indents, setIndents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDprModalOpen, setIsDprModalOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [uRes, aRes, tRes, iRes] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/attendance'),
          fetch('/api/tasks'),
          fetch('/api/indents'),
        ]);
        const [uData, aData, tData, iData] = await Promise.all([
          uRes.json(),
          aRes.json(),
          tRes.json(),
          iRes.json(),
        ]);
        setUser(uData.user);
        setAttendance(aData.attendance || []);
        setTasks(tData.tasks || []);
        setIndents(iData.indents || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const presentCount = attendance.filter((a) => a.status === 'PRESENT').length;
  const activeTasksCount = tasks.filter((t) => t.status !== 'COMPLETED').length;
  const pendingIndentsCount = indents.filter((i) => i.status === 'PENDING_APPROVAL').length;

  return (
    <div className="bg-white text-slate-900 min-h-screen p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Context Bar */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xl font-black text-red-600 tracking-tight">JMK</span>
              <span className="text-sm font-black text-slate-900">Engineering & Developers</span>
              <span className="text-neutral-400">|</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black">
                <MapPin className="w-3.5 h-3.5" />
                <span>📍 {user?.branchName || 'Patna Works Plant'}</span>
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

        {/* Live Telemetry Metric Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Labour Strength
              </span>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                {presentCount} present
              </p>
              <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                ● {attendance.length > 0 ? `${attendance.length} Total Registered` : 'Shift Active'}
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-slate-800 flex items-center justify-center border border-neutral-200">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Active Site Tasks
              </span>
              <p className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
                {activeTasksCount} tasks
              </p>
              <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">
                {tasks.length} Total Tracked
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Pending Indents
              </span>
              <p className="text-2xl sm:text-3xl font-black text-amber-600 font-mono">
                {pendingIndentsCount} items
              </p>
              <span className="text-[10px] font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                Awaiting HQ Dispatch
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
              Request raw steel coils, Fe 410 plates, or dispatch finished formwork to site operations.
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

        {/* Lower Section: Table of Daily Labour Muster Roll */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-red-600 uppercase tracking-wider">{user?.branchName || 'Patna Central Works'}</span>
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
                {attendance.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-xs text-neutral-500 font-bold">
                      No worker punch-in records logged today. Click &quot;GPS Attendance Kiosk&quot; to check-in workers.
                    </td>
                  </tr>
                ) : (
                  attendance.map((worker) => (
                    <tr key={worker.id} className="hover:bg-neutral-50 transition">
                      <td className="py-3.5 px-4 font-black text-slate-900">
                        <div>{worker.workerName}</div>
                        <span className="text-[10px] font-mono text-neutral-500">{worker.workerId}</span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-700">
                        {worker.trade}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-neutral-600 font-medium">
                        General Shift (08:00 - 17:00)
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <div className="text-emerald-700 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>GPS Verified ({worker.verifiedGpsCoords?.distanceMeters || 15}m)</span>
                        </div>
                        <div className="text-[10px] text-neutral-500">{worker.checkInTime || '08:00 AM'}</div>
                      </td>
                      <td className="py-3.5 px-4 font-black font-mono text-slate-900">
                        ₹{worker.dailyRate || 850} / day
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs font-bold text-red-600">
                        0.0 hrs
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                          {worker.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
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
