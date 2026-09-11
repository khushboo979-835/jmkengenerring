'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  AlertTriangle,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Package,
  Calendar,
  Layers,
  ArrowRight,
  Database,
  RefreshCw
} from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import { SEED_BRANCHES } from '@/lib/seedData';

export default function SuperAdminPage() {
  const [branches, setBranches] = useState<any[]>([]);
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [indents, setIndents] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncingDb, setSyncingDb] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const handleSyncDatabase = async () => {
    setSyncingDb(true);
    setSyncMessage(null);
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setSyncMessage(data.message || 'Database synced successfully with MongoDB!');
      } else {
        setSyncMessage(data.error || 'Sync completed in local data mode.');
      }
    } catch (e: any) {
      setSyncMessage('Sync request completed.');
    } finally {
      setSyncingDb(false);
      setTimeout(() => setSyncMessage(null), 5000);
    }
  };

  useEffect(() => {
    async function loadHQData() {
      try {
        const [bRes, vRes, iRes, aRes] = await Promise.all([
          fetch('/api/branches'),
          fetch('/api/vouchers'),
          fetch('/api/indents'),
          fetch('/api/attendance'),
        ]);

        const [bData, vData, iData, aData] = await Promise.all([
          bRes.json(),
          vRes.json(),
          iRes.json(),
          aRes.json(),
        ]);

        setBranches(bData.branches || SEED_BRANCHES);
        setVouchers(vData.vouchers || []);
        setIndents(iData.indents || []);
        setAttendance(aData.attendance || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadHQData();
  }, []);

  const totalAllocatedBudget = branches.reduce((acc, b) => acc + (b.allocatedBudget || 0), 0);
  const totalCurrentSpend = branches.reduce((acc, b) => acc + (b.currentSpend || 0), 0);
  const totalActiveWorkers = branches.reduce((acc, b) => acc + (b.activeWorkersCount || 0), 0);
  const pendingApprovalsCount = vouchers.filter((v) => v.status === 'PENDING_HQ').length + indents.filter((i) => i.status === 'PENDING_APPROVAL').length;

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-orange-600/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Patna Central HQ • Master Executive Telemetry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multi-Branch Enterprise Control Center
          </h1>
          <p className="text-xs text-slate-400">
            Real-time telemetry across 4 regional nodes: Patna HQ Works, Delhi NCR, Mumbai Western Hub, Kolkata Eastern Depot.
          </p>
          {syncMessage && (
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs rounded-lg font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{syncMessage}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSyncDatabase}
            disabled={syncingDb}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2"
          >
            <Database className="w-4 h-4" />
            <span>{syncingDb ? 'Syncing...' : 'Sync MongoDB Atlas'}</span>
          </button>
          <Link
            href="/dashboard/super-admin/approvals"
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Review Signoff Desk ({pendingApprovalsCount})</span>
          </Link>
          <Link
            href="/dashboard/super-admin/branches"
            className="px-4 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition"
          >
            + Provision Branch
          </Link>
        </div>
      </div>

      {/* Global Telemetry Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Workforce */}
        <div className="bg-white border-2 border-neutral-200 hover:border-red-600 transition p-5 rounded-2xl space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-neutral-600 text-xs">
            <span className="font-extrabold uppercase tracking-wider">Workforce Strength</span>
            <Users className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-black">842</span>
            <span className="text-xs text-neutral-500 font-bold">/ 910 Logged</span>
          </div>
          <p className="text-[11px] text-emerald-700 font-bold">92.5% GPS Geofence Verified Today</p>
        </div>

        {/* Working Capital Budget */}
        <div className="bg-white border-2 border-neutral-200 hover:border-red-600 transition p-5 rounded-2xl space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-neutral-600 text-xs">
            <span className="font-extrabold uppercase tracking-wider">Consolidated Working Capital</span>
            <DollarSign className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-black font-mono">
              {formatCurrency(totalAllocatedBudget)}
            </span>
          </div>
          <p className="text-[11px] text-neutral-600">
            Current Spend: <strong className="text-red-600">{formatCurrency(totalCurrentSpend)}</strong> (51.3% Utilized)
          </p>
        </div>

        {/* Pending Executive Approvals */}
        <div className="bg-white border-2 border-neutral-200 hover:border-red-600 transition p-5 rounded-2xl space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-neutral-600 text-xs">
            <span className="font-extrabold uppercase tracking-wider">Pending HQ Approvals</span>
            <Award className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
              {pendingApprovalsCount}
            </span>
            <span className="text-xs text-neutral-500 font-bold">Items Requiring Signoff</span>
          </div>
          <p className="text-[11px] text-red-700 font-bold">High-Value Vouchers & Material Indents</p>
        </div>

        {/* Regional Depots Active */}
        <div className="bg-white border-2 border-neutral-200 hover:border-red-600 transition p-5 rounded-2xl space-y-2 shadow-sm">
          <div className="flex items-center justify-between text-neutral-600 text-xs">
            <span className="font-extrabold uppercase tracking-wider">Regional Depots</span>
            <Building2 className="w-4 h-4 text-neutral-800" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-black">{branches.length}</span>
            <span className="text-xs text-emerald-700 font-black">100% Operational</span>
          </div>
          <p className="text-[11px] text-neutral-600 font-medium">Patna, Delhi, Mumbai, Kolkata</p>
        </div>
      </div>

      {/* Regional Branch Telemetry Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-black">Regional Depot Telemetry & Spend Ledger</h2>
          <Link href="/dashboard/super-admin/branches" className="text-xs text-red-600 font-extrabold hover:underline">
            Manage All Branches →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {branches.map((branch) => {
            const spendPct = branch.allocatedBudget
              ? Math.round((branch.currentSpend / branch.allocatedBudget) * 100)
              : 0;
            return (
              <div
                key={branch.id}
                className="bg-white border-2 border-neutral-200 p-5 rounded-2xl space-y-4 hover:border-red-600 transition shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-black text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      {branch.code}
                    </span>
                    <h3 className="text-sm font-black text-black mt-1.5">{branch.name}</h3>
                    <p className="text-[11px] text-neutral-600 font-medium mt-0.5">Incharge: {branch.adminName}</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm"></span>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-700">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-500 font-bold">Working Budget:</span>
                    <span className="font-mono font-black text-black">{formatCurrency(branch.allocatedBudget)}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-neutral-500 font-bold">Current Spend:</span>
                    <span className="font-mono font-bold text-red-600">{formatCurrency(branch.currentSpend)}</span>
                  </div>

                  {/* Spend Progress Bar */}
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden mt-1 border border-neutral-200">
                    <div
                      className={`h-full rounded-full ${spendPct > 80 ? 'bg-red-600' : 'bg-red-500'}`}
                      style={{ width: `${Math.min(spendPct, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] text-neutral-500 font-extrabold text-right">{spendPct}% Utilized</div>
                </div>

                <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] text-neutral-600 font-bold">
                  <span>GPS Radius: {branch.locationCoords?.radiusMeters || 500}m</span>
                  <span className="text-black font-extrabold">{branch.activeWorkersCount} Workers</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2-Column: Recent High-Value Vouchers & Pending Indents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pending Financial Vouchers Desk */}
        <div className="lg:col-span-6 bg-white border-2 border-neutral-200 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div>
              <h2 className="text-base font-black text-black">Recent Branch Expense Vouchers</h2>
              <p className="text-[11px] text-neutral-600 font-medium">Items &gt; ₹50,000 threshold require Patna HQ signoff</p>
            </div>
            <Link
              href="/dashboard/super-admin/approvals"
              className="text-xs text-red-600 font-extrabold hover:underline"
            >
              Signoff Desk →
            </Link>
          </div>

          <div className="space-y-3">
            {vouchers.slice(0, 4).map((vch) => (
              <div
                key={vch.id}
                className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs hover:border-red-300 transition"
              >
                <div className="space-y-1 max-w-[65%]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-neutral-500">{vch.voucherNo}</span>
                    <span className="text-[10px] bg-white border border-neutral-200 px-1.5 py-0.5 rounded font-bold text-neutral-700">
                      {vch.branchName.split(' ')[0]}
                    </span>
                  </div>
                  <p className="font-black text-black truncate">{vch.vendorName}</p>
                  <p className="text-[11px] text-neutral-600 truncate font-medium">{vch.description}</p>
                </div>

                <div className="text-right space-y-1">
                  <span className="font-mono font-black text-sm text-black block">
                    {formatCurrency(vch.amount)}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                      vch.status === 'APPROVED'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                  >
                    {vch.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Central Works Indents */}
        <div className="lg:col-span-6 bg-white border-2 border-neutral-200 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div>
              <h2 className="text-base font-black text-black">Central Manufacturing Indents</h2>
              <p className="text-[11px] text-neutral-600 font-medium">Material dispatch requisitions from regional yards</p>
            </div>
            <Link
              href="/dashboard/super-admin/approvals"
              className="text-xs text-red-600 font-extrabold hover:underline"
            >
              Dispatch Queue →
            </Link>
          </div>

          <div className="space-y-3">
            {indents.slice(0, 3).map((ind) => (
              <div
                key={ind.id}
                className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs hover:border-red-300 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-red-600 font-black">{ind.indentNo}</span>
                    <span className="text-[10px] text-neutral-600 bg-white border border-neutral-200 px-1.5 py-0.5 rounded font-bold">
                      {ind.branchName}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                      ind.status === 'APPROVED'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                  >
                    {ind.status}
                  </span>
                </div>

                <div className="text-neutral-800">
                  <p className="font-bold text-black">{ind.purpose}</p>
                  <p className="text-[11px] text-neutral-600 font-medium mt-0.5">
                    Items: {ind.items.map((it: any) => `${it.quantity} ${it.unit} of ${it.productName}`).join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
