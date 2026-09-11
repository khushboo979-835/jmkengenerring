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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-black text-red-600 uppercase tracking-wider block">
            Field Staff & Engineering Self-Service
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-0.5">
            Engineer Profile & Monthly Wage Slips
          </h1>
          <p className="text-xs text-neutral-600 mt-1 font-medium">
            Personal muster roll, task assignment checklists, defect snag camera reports, and wage slips.
          </p>
        </div>

        <button
          onClick={() => setIsSnagModalOpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 self-start sm:self-auto"
        >
          <Camera className="w-4 h-4" />
          <span>+ Log Site Defect (Camera)</span>
        </button>
      </div>

      {/* Staff Profile Card */}
      <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white font-black text-2xl shadow-md">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : 'ER'}
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <h2 className="text-xl font-black text-black">{user?.name || 'Er. Rahul Choudhary'}</h2>
              <span className="text-[10px] font-mono font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded">
                ● ACTIVE STAFF
              </span>
            </div>
            <p className="text-xs text-neutral-600 mt-0.5 font-medium">
              Role: <strong className="text-black">QA/QC Site Inspection Engineer</strong> • {user?.branchName || 'Delhi NCR Depot'}
            </p>
            <p className="text-[11px] text-neutral-500 font-mono mt-0.5">Employee ID: JMK-ENG-2024-041</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadSlip}
            disabled={downloadingSlip}
            className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-red-600" />
            <span>{downloadingSlip ? 'Generating Slip...' : 'Download November Wage Slip'}</span>
          </button>
        </div>
      </div>

      {/* 2-Column: Assigned Tasks & Wage Slip Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* My Assigned Tasks */}
        <div className="lg:col-span-6 bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
            <h3 className="text-base font-black text-black">My Active Site Responsibilities</h3>
            <span className="text-xs text-neutral-600 font-bold">{tasks.length} Assigned</span>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs hover:border-red-300 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">
                    {task.category}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-medium">Due: {task.dueDate}</span>
                </div>
                <h4 className="font-black text-black text-sm">{task.title}</h4>
                <p className="text-xs text-neutral-600 font-medium">{task.description}</p>
                <div className="pt-2 flex justify-between text-[11px] text-neutral-600 border-t border-neutral-200">
                  <span>Status: <strong className="text-black">{task.status}</strong></span>
                  <span className="font-mono text-emerald-700 font-black">{task.progressPercent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Wage Slip Preview */}
        <div className="lg:col-span-6 bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
            <h3 className="text-base font-black text-black">Digital Salary & Attendance Slip</h3>
            <span className="text-xs font-mono text-emerald-700 font-bold">Month: NOV 2024</span>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 space-y-4 text-xs">
            <div className="border-b border-neutral-200 pb-3 flex justify-between items-start">
              <div>
                <p className="font-black text-black text-sm">JMK ENGINEERING & DEVELOPERS</p>
                <p className="text-[10px] text-neutral-600 font-medium">Central Works, Patna, Bihar • GSTIN: 10BIEPD2766D2ZX</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 font-black bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                VERIFIED PAID
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-neutral-500 font-bold block">Total Working Days:</span>
                <span className="font-black text-black">26 Days</span>
              </div>
              <div>
                <span className="text-neutral-500 font-bold block">Days Present:</span>
                <span className="font-black text-emerald-700">25.5 Days (GPS Clocked)</span>
              </div>
              <div>
                <span className="text-neutral-500 font-bold block">Basic Pay & Allowances:</span>
                <span className="font-black text-black font-mono">₹45,000 / Month</span>
              </div>
              <div>
                <span className="text-neutral-500 font-bold block">PF & ESIC Deduction:</span>
                <span className="font-bold text-neutral-600 font-mono">₹3,200</span>
              </div>
            </div>

            <div className="p-3 bg-white border border-neutral-200 rounded-xl flex items-center justify-between shadow-sm">
              <span className="text-xs font-bold text-neutral-700">Net Disbursed to Bank:</span>
              <span className="text-base font-black font-mono text-red-600">₹41,800</span>
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
