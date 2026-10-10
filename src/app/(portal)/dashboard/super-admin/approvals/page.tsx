'use client';

import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  Trash2,
  Truck
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function ApprovalsPage() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<'pending' | 'vendor' | 'client'>('pending');
  const [slideApproved, setSlideApproved] = useState(false);
  const [raBill04Approved, setRaBill04Approved] = useState(false);
  const [queryModalOpen, setQueryModalOpen] = useState(false);
  const [activeQueryTarget, setActiveQueryTarget] = useState<{ id?: string; title: string; type: 'voucher' | 'indent' | 'ra' } | null>(null);
  const [queryRemarks, setQueryRemarks] = useState('');

  const [vouchers, setVouchers] = useState<any[]>([]);
  const [indents, setIndents] = useState<any[]>([]);
  const [branches, setBranches] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [vRes, iRes, bRes, aRes] = await Promise.all([
        fetch('/api/vouchers').then((r) => r.json()),
        fetch('/api/indents').then((r) => r.json()),
        fetch('/api/branches').then((r) => r.json()),
        fetch('/api/attendance').then((r) => r.json()),
      ]);
      setVouchers(vRes.vouchers || []);
      setIndents(iRes.indents || []);
      setBranches(bRes.branches || []);
      setAttendance(aRes.attendance || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const totalSites = branches.length > 0 ? branches.length : 1;
  const presentTurnout = attendance.filter((a) => a.status === 'PRESENT').length;
  const totalTurnout = attendance.length > 0 ? attendance.length : 5;
  const totalVoucherSpend = vouchers.reduce((acc, v) => acc + (v.amount || 0), 0);
  const pendingVouchers = vouchers.filter((v) => v.status === 'PENDING_HQ');
  const pendingIndents = indents.filter((i) => i.status === 'PENDING_APPROVAL');
  const pendingAuthorizationsCount = pendingVouchers.length + pendingIndents.length + (raBill04Approved ? 0 : 1) + (slideApproved ? 0 : 1);

  // Live approval handlers
  const handleApproveVoucher = async (id: string, status: 'APPROVED' | 'REJECTED') => {
    try {
      await fetch('/api/vouchers', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          status,
          approvedBy: {
            id: 'usr_hq_super_admin',
            name: 'Er. Rajesh Kumar Sharma',
            date: new Date().toISOString(),
          },
        }),
      });
      setVouchers((prev) => prev.map((v) => (v.id === id ? { ...v, status } : v)));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteVoucher = async (id: string) => {
    if (!confirm('Are you sure you want to delete this financial voucher?')) return;
    try {
      await fetch(`/api/vouchers?id=${id}`, { method: 'DELETE' });
      setVouchers((prev) => prev.filter((v) => v.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleApproveIndent = async (id: string, status: 'APPROVED' | 'REJECTED' | 'DISPATCHED') => {
    try {
      await fetch('/api/indents', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          status,
          approvedBy: {
            id: 'usr_hq_super_admin',
            name: 'Er. Rajesh Kumar Sharma',
            date: new Date().toISOString(),
          },
          dispatchDetails: {
            vehicleNo: 'BR-01-GB-4412',
            driverName: 'Rameshwar Mahato',
            driverPhone: '+91 74939 16194',
            dispatchDate: new Date().toISOString().split('T')[0],
          },
        }),
      });
      setIndents((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteIndent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this material indent?')) return;
    try {
      await fetch(`/api/indents?id=${id}`, { method: 'DELETE' });
      setIndents((prev) => prev.filter((i) => i.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleApproveRaBill04 = async () => {
    setRaBill04Approved(true);
    try {
      await fetch('/api/vouchers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchId: 'br_patna_hq',
          branchName: 'Patna HQ Works',
          vendorName: 'Apex Electricals & Power Infrastructure',
          category: 'EQUIPMENT_RENTAL',
          amount: 185000,
          billDate: new Date().toISOString().split('T')[0],
          description: 'Subcontractor RA Bill #04 - 33kV dedicated power line energization and Patna batching plant transformer sync',
          invoiceNo: 'PAT-PKG-4-RA04',
          createdBy: { id: 'usr_admin_patna', name: 'Sanjay Singh' },
        }),
      });
      loadData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleApproveEmergencyPO = async () => {
    setSlideApproved(true);
    try {
      await fetch('/api/vouchers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchId: 'br_patna_hq',
          branchName: 'Patna HQ Works',
          vendorName: 'Indian Oil Corp Depot (Patna)',
          category: 'SITE_UTILITIES',
          amount: 47250,
          billDate: new Date().toISOString().split('T')[0],
          description: 'Emergency HSD Procurement PO #D-882 (500 Litres for continuous pour cycle)',
          invoiceNo: 'IOC-PAT-5519',
          createdBy: { id: 'usr_admin_patna', name: 'Sanjay Singh' },
        }),
      });
      loadData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendQuery = async () => {
    if (activeQueryTarget) {
      if (activeQueryTarget.type === 'voucher' && activeQueryTarget.id) {
        await handleApproveVoucher(activeQueryTarget.id, 'REJECTED');
      } else if (activeQueryTarget.type === 'indent' && activeQueryTarget.id) {
        await handleApproveIndent(activeQueryTarget.id, 'REJECTED');
      } else if (activeQueryTarget.type === 'ra') {
        setRaBill04Approved(false);
      }
    }
    setQueryModalOpen(false);
    setQueryRemarks('');
    setActiveQueryTarget(null);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Contextual Overview */}
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
                <span>HQ Live Sync Status: Active</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Executive Authorization & Financial Sign-Off Matrix
            </h1>
            <p className="text-xs text-neutral-600 font-medium">
              Multi-tier validation for Subcontractor RA Bills, emergency site purchase orders, and major capital disbursements across enterprise works.
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

        {/* Live Fleet Telemetry Combined KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Total Active Facilities
            </span>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {totalSites} Active Works
            </p>
            <span className="text-[10px] text-neutral-600 font-medium block">
              {branches.map((b) => b.city).join(' • ') || 'Patna Central Works'}
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Combined Shift Turnout
            </span>
            <p className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">
              {presentTurnout > 0 ? presentTurnout : 3} / {totalTurnout} Logged
            </p>
            <span className="text-[10px] text-emerald-700 font-mono font-bold block">
              ● 100% Attendance Verified
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Tracked Spend (Vouchers)
            </span>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {formatCurrency(totalVoucherSpend)}
            </p>
            <span className="text-[10px] text-red-600 font-mono font-bold block">
              ● Central Works Ledger
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
              Pending Authorizations
            </span>
            <p className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
              {pendingAuthorizationsCount} Items
            </p>
            <span className="text-[10px] text-neutral-600 font-bold block">
              Live Queue Synced
            </span>
          </div>
        </div>

        {/* Detailed Multi-Category Sign-Off Matrix */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-neutral-200 pb-3">
            {/* Segmented Matrix Tabs: [Pending Authorization] | [Vendor Bills] | [Client RA Bills] */}
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
                <span>Pending Authorization ({pendingAuthorizationsCount})</span>
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
                <span>Vendor Bills ({vouchers.length})</span>
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
                <span>Client RA Bills (2)</span>
              </button>
            </div>

            <span className="text-xs font-mono font-bold text-neutral-500">
              Role: Er. Rajesh Kumar Sharma (Director / Super Admin)
            </span>
          </div>

          {/* TAB 1: PENDING AUTHORIZATIONS */}
          {activeCategoryTab === 'pending' && (
            <div className="space-y-6">
              {/* Dynamic Pending Vouchers from Store/DB */}
              {pendingVouchers.map((vch) => (
                <div
                  key={vch.id}
                  className="bg-white border-2 border-amber-300 hover:border-red-600 rounded-3xl p-6 space-y-4 shadow-sm transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        {vch.voucherNo}
                      </span>
                      <span className="text-xs font-bold text-neutral-500 font-mono">
                        {vch.branchName} • {vch.category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-black px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 animate-pulse">
                      ● PENDING HQ APPROVAL (&gt; ₹50,000)
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900">{vch.vendorName}</h3>
                      <p className="text-xs text-neutral-600 font-medium">{vch.description}</p>
                      <p className="text-[11px] text-neutral-500 font-mono">
                        Invoice No: {vch.invoiceNo || 'N/A'} • Bill Date: {vch.billDate}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-black text-slate-900 font-mono block">
                        {formatCurrency(vch.amount)}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-end gap-3">
                    <button
                      onClick={() => {
                        setActiveQueryTarget({ id: vch.id, title: `${vch.voucherNo} - ${vch.vendorName}`, type: 'voucher' });
                        setQueryModalOpen(true);
                      }}
                      className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-slate-800 rounded-xl text-xs font-bold border border-neutral-300 transition"
                    >
                      Reject / Query
                    </button>
                    <button
                      onClick={() => handleApproveVoucher(vch.id, 'APPROVED')}
                      className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve Disbursement</span>
                    </button>
                  </div>
                </div>
              ))}

              {/* Dynamic Pending Indents from Store/DB */}
              {pendingIndents.map((ind) => (
                <div
                  key={ind.id}
                  className="bg-white border-2 border-blue-200 hover:border-red-600 rounded-3xl p-6 space-y-4 shadow-sm transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                        {ind.indentNo}
                      </span>
                      <span className="text-xs font-bold text-neutral-500 font-mono">
                        Depot: {ind.branchName}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-black px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                      ● MATERIAL DISPATCH REQUISITION
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-black text-slate-900">{ind.purpose}</h3>
                    <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-1">
                      <p className="font-bold text-slate-800">Requested Items:</p>
                      <ul className="list-disc list-inside text-neutral-600 space-y-0.5">
                        {ind.items.map((it: any, idx: number) => (
                          <li key={idx}>
                            <strong className="text-black">{it.quantity} {it.unit}</strong> of {it.productName} ({it.urgency})
                          </li>
                        ))}
                      </ul>
                      <p className="text-[11px] text-neutral-500 pt-1 font-mono">
                        Required by: {ind.requiredByDate} • Raised by: {ind.requestedBy?.name || 'Site Incharge'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-end gap-3">
                    <button
                      onClick={() => {
                        setActiveQueryTarget({ id: ind.id, title: `${ind.indentNo} - ${ind.purpose}`, type: 'indent' });
                        setQueryModalOpen(true);
                      }}
                      className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-slate-800 rounded-xl text-xs font-bold border border-neutral-300 transition"
                    >
                      Reject Indent
                    </button>
                    <button
                      onClick={() => handleApproveIndent(ind.id, 'APPROVED')}
                      className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2"
                    >
                      <Truck className="w-4 h-4" />
                      <span>Approve & Authorize Factory Dispatch</span>
                    </button>
                  </div>
                </div>
              ))}

              {/* Cards Container for Featured Pre-Configured Sign-Offs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Card 1: RA Bill #04 - Apex Electricals */}
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

                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
                    <button
                      onClick={() => {
                        setActiveQueryTarget({ title: 'RA Bill #04 - Apex Electricals', type: 'ra' });
                        setQueryModalOpen(true);
                      }}
                      disabled={raBill04Approved}
                      className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-slate-900 rounded-xl text-xs font-bold border border-neutral-300 transition"
                    >
                      Reject / Query
                    </button>

                    <button
                      onClick={handleApproveRaBill04}
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

                  <div className="pt-4 border-t border-neutral-200 space-y-2">
                    <div className="relative h-14 bg-neutral-100 rounded-2xl border-2 border-neutral-300 overflow-hidden flex items-center justify-center select-none">
                      {slideApproved ? (
                        <div className="w-full h-full bg-emerald-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 animate-fadeIn">
                          <Check className="w-5 h-5" />
                          <span>Diesel PO Dispatched & Released</span>
                        </div>
                      ) : (
                        <button
                          onClick={handleApproveEmergencyPO}
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
          )}

          {/* TAB 2: VENDOR BILLS */}
          {activeCategoryTab === 'vendor' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-black">Consolidated Vendor Bills & Invoices</h3>
                <span className="text-xs text-neutral-600 font-bold">{vouchers.length} Total Invoices</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vouchers.map((vch) => (
                  <div
                    key={vch.id}
                    className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-5 space-y-3 shadow-sm transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                          {vch.voucherNo}
                        </span>
                        <h4 className="text-base font-black text-black mt-1">{vch.vendorName}</h4>
                        <p className="text-[11px] text-neutral-500 font-mono">Invoice: {vch.invoiceNo || 'N/A'}</p>
                      </div>
                      <span
                        className={`text-[9px] font-mono px-2.5 py-1 rounded font-extrabold ${
                          vch.status === 'APPROVED'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : vch.status === 'REJECTED'
                            ? 'bg-neutral-100 text-neutral-700 border border-neutral-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}
                      >
                        {vch.status}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-600 font-medium line-clamp-2">{vch.description}</p>

                    <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-neutral-500 block text-[10px]">Total Amount</span>
                        <span className="font-mono font-black text-base text-slate-900">
                          {formatCurrency(vch.amount)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {vch.status !== 'APPROVED' && (
                          <button
                            onClick={() => handleApproveVoucher(vch.id, 'APPROVED')}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition"
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteVoucher(vch.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                          title="Delete Voucher"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CLIENT RA BILLS */}
          {activeCategoryTab === 'client' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-black">Client & Subcontractor RA Certification Matrix</h3>
                <span className="text-xs text-neutral-600 font-bold">2 Live Packages</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-neutral-200 rounded-3xl p-5 space-y-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        RA BILL #04
                      </span>
                      <h4 className="text-base font-black text-black mt-1">Apex Electricals & Power Infrastructure</h4>
                      <p className="text-[11px] text-neutral-500">Patna Outer Ring Road Flyover Project</p>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {raBill04Approved ? 'APPROVED' : 'PENDING'}
                    </span>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Gross Claim:</span>
                      <span className="font-mono font-bold text-black">₹1,85,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">TDS & Retention (5%):</span>
                      <span className="font-mono font-bold text-neutral-600">-₹9,250</span>
                    </div>
                    <div className="flex justify-between border-t border-neutral-200 pt-1">
                      <span className="font-bold text-black">Net Payable:</span>
                      <span className="font-mono font-black text-emerald-700">₹1,75,750</span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-neutral-200">
                    <button
                      onClick={handleApproveRaBill04}
                      disabled={raBill04Approved}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-neutral-300 text-white rounded-xl text-xs font-black uppercase tracking-wider transition"
                    >
                      {raBill04Approved ? 'Signoff Done' : 'Authorise Payment'}
                    </button>
                  </div>
                </div>

                <div className="bg-white border-2 border-neutral-200 rounded-3xl p-5 space-y-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        RA BILL #02
                      </span>
                      <h4 className="text-base font-black text-black mt-1">Afcons Infrastructure Metro Viaduct</h4>
                      <p className="text-[11px] text-neutral-500">POT Bearings & Expansion Joints Package</p>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      CERTIFIED
                    </span>
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Gross Value:</span>
                      <span className="font-mono font-bold text-black">₹12,45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Advance Adjusted:</span>
                      <span className="font-mono font-bold text-neutral-600">-₹2,00,000</span>
                    </div>
                    <div className="flex justify-between border-t border-neutral-200 pt-1">
                      <span className="font-bold text-black">Net Certified:</span>
                      <span className="font-mono font-black text-emerald-700">₹10,45,000</span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-neutral-200">
                    <span className="text-xs text-neutral-500 font-bold self-center">MB-18 Signoff by NHAI QC</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Query / Rejection Modal */}
      {queryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-black p-6 rounded-3xl max-w-md w-full border-2 border-neutral-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900">
              Query / Reject: {activeQueryTarget?.title || 'Claim'}
            </h3>
            <p className="text-xs text-neutral-600">Enter technical clarification remarks or rejection notes:</p>
            <textarea
              rows={3}
              value={queryRemarks}
              onChange={(e) => setQueryRemarks(e.target.value)}
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
                onClick={handleSendQuery}
                className="px-5 py-2 bg-red-600 text-white text-xs font-black uppercase rounded-xl"
              >
                Submit Rejection / Query
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
