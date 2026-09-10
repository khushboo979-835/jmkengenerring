'use client';

import React, { useState, useEffect } from 'react';
import {
  Users,
  HardHat,
  Calendar,
  CheckCircle2,
  Download,
  Camera,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Building2,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import { AuthUser } from '@/lib/rbac';
import SnagReportModal from '@/components/portal/SnagReportModal';

export default function EmployeePage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const [isSnagModalOpen, setIsSnagModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [downloadingSlip, setDownloadingSlip] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [uRes, tRes] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/tasks'),
        ]);
        const [uData, tData] = await Promise.all([uRes.json(), tRes.json()]);
        setUser(uData.user);
        setTasks(tData.tasks || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleDownloadSlip = () => {
    setDownloadingSlip(true);
    setTimeout(() => {
      setDownloadingSlip(false);
      alert('Monthly Digital Wage Slip (November 2024) downloaded successfully for ' + (user?.name || 'Staff Member'));
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
            Field Staff & Engineering Self-Service
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
            Engineer Profile & Monthly Wage Slips
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Personal muster roll, task assignment checklists, defect snag camera reports, and wage slips.
          </p>
        </div>

        <button
          onClick={() => setIsSnagModalOpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2 self-start sm:self-auto"
        >
          <Camera className="w-4 h-4" />
          <span>+ Log Site Defect (Camera)</span>
        </button>
      </div>

      {/* Staff Profile Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white font-black text-2xl shadow-xl">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : 'ER'}
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h2 className="text-xl font-bold text-white">{user?.name || 'Er. Rahul Choudhary'}</h2>
              <span className="text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                ● ACTIVE STAFF
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Role: <strong>QA/QC Site Inspection Engineer</strong> • {user?.branchName || 'Delhi NCR Depot'}
            </p>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">Employee ID: JMK-ENG-2024-041</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadSlip}
            disabled={downloadingSlip}
            className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white border border-slate-700 rounded-xl text-xs font-bold transition shadow flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-orange-400" />
            <span>{downloadingSlip ? 'Generating Slip...' : 'Download November Wage Slip'}</span>
          </button>
        </div>
      </div>

      {/* 2-Column: Assigned Tasks & Wage Slip Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* My Assigned Tasks */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-white">My Active Site Responsibilities</h3>
            <span className="text-xs text-slate-400">{tasks.length} Assigned</span>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                    {task.category}
                  </span>
                  <span className="text-[10px] text-slate-400">Due: {task.dueDate}</span>
                </div>
                <h4 className="font-bold text-white text-sm">{task.title}</h4>
                <p className="text-xs text-slate-400">{task.description}</p>
                <div className="pt-2 flex justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                  <span>Status: <strong className="text-white">{task.status}</strong></span>
                  <span className="font-mono text-emerald-400 font-bold">{task.progressPercent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Wage Slip Preview */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Digital Salary & Attendance Slip</h3>
            <span className="text-xs font-mono text-emerald-400 font-bold">Month: NOV 2024</span>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 text-xs">
            <div className="border-b border-slate-800/80 pb-3 flex justify-between items-start">
              <div>
                <p className="font-bold text-white text-sm">JMK ENGINEERING & DEVELOPERS</p>
                <p className="text-[10px] text-slate-400">Central Works, Patna, Bihar • GSTIN: 10BIEPD2766D2ZX</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                VERIFIED PAID
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-slate-500 block">Total Working Days:</span>
                <span className="font-bold text-white">26 Days</span>
              </div>
              <div>
                <span className="text-slate-500 block">Days Present:</span>
                <span className="font-bold text-emerald-400">25.5 Days (GPS Clocked)</span>
              </div>
              <div>
                <span className="text-slate-500 block">Basic Pay & Allowances:</span>
                <span className="font-bold text-white font-mono">₹45,000 / Month</span>
              </div>
              <div>
                <span className="text-slate-500 block">PF & ESIC Deduction:</span>
                <span className="font-bold text-slate-400 font-mono">₹3,200</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">Net Disbursed to Bank:</span>
              <span className="text-base font-black font-mono text-emerald-400">₹41,800</span>
            </div>
          </div>
        </div>
      </div>

      {/* Snag Modal */}
      <SnagReportModal
        isOpen={isSnagModalOpen}
        onClose={() => setIsSnagModalOpen(false)}
        user={user}
        onSnagCreated={() => {}}
      />
    </div>
  );
}
