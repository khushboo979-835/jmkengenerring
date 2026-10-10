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
  RefreshCw,
  PhoneCall,
  Mail,
  MapPin,
  Trash2,
  Plus,
  Camera,
  FileSpreadsheet,
  Check,
  Clock,
  Truck,
  Edit,
  KeyRound,
  Eye,
  EyeOff,
  UserCheck,
  ClipboardList,
  ShieldCheck
} from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import { SEED_BRANCHES } from '@/lib/seedData';

export default function SuperAdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'branch_admins' | 'crm' | 'boq' | 'dpr' | 'snags'>('overview');
  const [branches, setBranches] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [indents, setIndents] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [rfqs, setRfqs] = useState<any[]>([]);
  const [dprs, setDprs] = useState<any[]>([]);
  const [snags, setSnags] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncingDb, setSyncingDb] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Branch Admin Management Modal State
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<any | null>(null);
  const [visiblePasswords, setVisiblePasswords] = useState<{ [key: string]: boolean }>({});
  const [adminForm, setAdminForm] = useState({
    name: '',
    email: '',
    password: '',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    designation: 'Fabrication Plant Supervisor',
    phone: '+91 74939 16194',
  });

  // New Lead Modal State
  const [newLeadModalOpen, setNewLeadModalOpen] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadCity, setLeadCity] = useState('');
  const [leadDetails, setLeadDetails] = useState('');

  // Static/Simulated BOQ Items (Pre-Construction)
  const [boqItems, setBoqItems] = useState([
    { id: 'boq_1', code: 'BOQ-1.01', description: 'Elastomeric POT PTFE Bridge Bearings (3500 kN Capacity)', unit: 'Units', quantity: 24, rate: 85000, status: 'APPROVED' },
    { id: 'boq_2', code: 'BOQ-2.04', description: 'Strip Seal Single Gap Modular Expansion Joints (IS 2062)', unit: 'Mtrs', quantity: 360, rate: 4200, status: 'APPROVED' },
    { id: 'boq_3', code: 'BOQ-3.12', description: 'Mild Steel Centering Sheets 20 Kg (1200x600mm Laser Cut)', unit: 'Pcs', quantity: 1500, rate: 1400, status: 'IN_PROGRESS' },
    { id: 'boq_4', code: 'BOQ-4.08', description: 'Heavy Duty Scaffolding Cuplock Systems & Props (Grade 410)', unit: 'Sets', quantity: 200, rate: 12500, status: 'PENDING' },
  ]);

  const loadHQData = async () => {
    try {
      const [uRes, bRes, vRes, iRes, aRes, rRes, dRes, sRes, tRes] = await Promise.all([
        fetch('/api/users').then((r) => r.json()),
        fetch('/api/branches').then((r) => r.json()),
        fetch('/api/vouchers').then((r) => r.json()),
        fetch('/api/indents').then((r) => r.json()),
        fetch('/api/attendance').then((r) => r.json()),
        fetch('/api/rfq').then((r) => r.json()),
        fetch('/api/dpr').then((r) => r.json()),
        fetch('/api/snags').then((r) => r.json()),
        fetch('/api/tasks').then((r) => r.json()),
      ]);

      setUsers(uRes.users || []);
      setBranches(bRes.branches || SEED_BRANCHES);
      setVouchers(vRes.vouchers || []);
      setIndents(iRes.indents || []);
      setAttendance(aRes.attendance || []);
      setRfqs(rRes.rfqs || []);
      setDprs(dRes.dprs || []);
      setSnags(sRes.snags || []);
      setTasks(tRes.tasks || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHQData();
  }, []);

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

  // Branch Admin CRUD Handlers
  const openCreateAdminModal = () => {
    setEditingAdmin(null);
    setAdminForm({
      name: '',
      email: '',
      password: '',
      branchId: branches[0]?.id || 'br_patna_hq',
      branchName: branches[0]?.name || 'Patna HQ & Heavy Fabrication Plant',
      designation: 'Fabrication Plant Supervisor',
      phone: '+91 74939 16194',
    });
    setAdminModalOpen(true);
  };

  const openEditAdminModal = (adm: any) => {
    setEditingAdmin(adm);
    setAdminForm({
      name: adm.name || '',
      email: adm.email || '',
      password: adm.password || '',
      branchId: adm.branchId || 'br_patna_hq',
      branchName: adm.branchName || 'Patna HQ & Heavy Fabrication Plant',
      designation: adm.designation || 'Fabrication Plant Supervisor',
      phone: adm.phone || '+91 74939 16194',
    });
    setAdminModalOpen(true);
  };

  const handleSaveBranchAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminForm.name || !adminForm.email || !adminForm.password) {
      alert('Please fill in name, email, and password.');
      return;
    }

    try {
      if (editingAdmin) {
        const res = await fetch('/api/users', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingAdmin.id,
            ...adminForm,
            role: 'BRANCH_ADMIN',
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          alert(data.error || 'Failed to update branch admin');
          return;
        }
      } else {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...adminForm,
            role: 'BRANCH_ADMIN',
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          alert(data.error || 'Failed to create branch admin');
          return;
        }
      }

      setAdminModalOpen(false);
      setEditingAdmin(null);
      await loadHQData();
    } catch (err) {
      console.error(err);
      alert('Error saving branch admin credentials');
    }
  };

  const handleDeleteBranchAdmin = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete Branch Admin account for "${name}"?`)) return;
    try {
      const res = await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to delete branch admin');
        return;
      }
      await loadHQData();
    } catch (err) {
      console.error(err);
    }
  };

  const togglePasswordVisibility = (id: string) => {
    setVisiblePasswords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Live actions for Vouchers
  const handleApproveVoucher = async (id: string) => {
    try {
      await fetch('/api/vouchers', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          status: 'APPROVED',
          approvedBy: { id: 'usr_hq_super_admin', name: 'Er. Rajesh Kumar Sharma', date: new Date().toISOString() },
        }),
      });
      setVouchers((prev) => prev.map((v) => (v.id === id ? { ...v, status: 'APPROVED' } : v)));
    } catch (e) {
      console.error(e);
    }
  };

  // Live actions for Indents
  const handleApproveIndent = async (id: string) => {
    try {
      await fetch('/api/indents', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          status: 'APPROVED',
          approvedBy: { id: 'usr_hq_super_admin', name: 'Er. Rajesh Kumar Sharma', date: new Date().toISOString() },
        }),
      });
      setIndents((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'APPROVED' } : i)));
    } catch (e) {
      console.error(e);
    }
  };

  // RFQ CRUD
  const handleUpdateRfqStatus = async (id: string, status: string) => {
    try {
      await fetch('/api/rfq', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      setRfqs((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteRfq = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      await fetch(`/api/rfq?id=${id}`, { method: 'DELETE' });
      setRfqs((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;
    try {
      await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: leadName,
          companyName: leadCompany || 'Enterprise Client',
          phone: leadPhone,
          city: leadCity || 'Patna Works Queue',
          projectDetails: leadDetails || 'Direct Super Admin RFQ',
        }),
      });
      setLeadName('');
      setLeadCompany('');
      setLeadPhone('');
      setLeadCity('');
      setLeadDetails('');
      setNewLeadModalOpen(false);
      loadHQData();
    } catch (e) {
      console.error(e);
    }
  };

  // Snag Resolve & Delete
  const handleResolveSnag = async (id: string) => {
    try {
      await fetch('/api/snags', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, resolutionNotes: 'Super Admin HQ signed off and closed.' }),
      });
      setSnags((prev) => prev.map((s) => (s.id === id ? { ...s, status: 'RESOLVED' } : s)));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteSnag = async (id: string) => {
    if (!confirm('Are you sure you want to delete this snag defect?')) return;
    try {
      await fetch(`/api/snags?id=${id}`, { method: 'DELETE' });
      setSnags((prev) => prev.filter((s) => s.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  // DPR Delete
  const handleDeleteDpr = async (id: string) => {
    if (!confirm('Are you sure you want to delete this Daily Progress Report?')) return;
    try {
      await fetch(`/api/dpr?id=${id}`, { method: 'DELETE' });
      setDprs((prev) => prev.filter((d) => d.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const totalAllocatedBudget = branches.reduce((acc, b) => acc + (b.allocatedBudget || 0), 0);
  const totalCurrentSpend = branches.reduce((acc, b) => acc + (b.currentSpend || 0), 0);
  const spendPctOverall = totalAllocatedBudget > 0 ? Math.round((totalCurrentSpend / totalAllocatedBudget) * 100) : 0;
  const totalActiveWorkers = branches.reduce((acc, b) => acc + (b.activeWorkersCount || 0), 0);
  const presentWorkersToday = attendance.filter((a) => a.status === 'PRESENT').length;
  const totalWorkersLogged = attendance.length;
  const gpsVerifiedPct = totalWorkersLogged > 0 ? Math.round((attendance.filter((a) => a.verifiedGpsCoords?.isWithinGeofence).length / totalWorkersLogged) * 100) : 100;
  const pendingApprovalsCount = vouchers.filter((v) => v.status === 'PENDING_HQ').length + indents.filter((i) => i.status === 'PENDING_APPROVAL').length;
  const totalBoqValue = boqItems.reduce((acc, b) => acc + b.quantity * b.rate, 0);

  const branchAdmins = users.filter((u) => u.role === 'BRANCH_ADMIN');

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-1">
            <span>Patna Central HQ • Master Executive Telemetry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Multi-Branch Enterprise Control Center
          </h1>
          <p className="text-xs text-neutral-600">
            Real-time operations telemetry for Patna Central HQ Works & Active Fabrication Sites.
          </p>
          {syncMessage && (
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-lg font-medium">
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
            <span>{syncingDb ? 'Syncing...' : 'Sync Database'}</span>
          </button>
          <Link
            href="/dashboard/super-admin/approvals"
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Review Signoff Desk ({pendingApprovalsCount})</span>
          </Link>
          <button
            onClick={openCreateAdminModal}
            className="px-4 py-2.5 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-2"
          >
            <UserCheck className="w-4 h-4 text-red-500" />
            <span>+ Provision Branch Admin</span>
          </button>
        </div>
      </div>

      {/* Segmented Feature Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b-2 border-neutral-200 pb-3">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition ${
            activeTab === 'overview' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-100 text-slate-800 hover:bg-neutral-200'
          }`}
        >
          Executive Overview
        </button>
        <button
          onClick={() => setActiveTab('branch_admins')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-1.5 ${
            activeTab === 'branch_admins' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-100 text-slate-800 hover:bg-neutral-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Branch Admins Governance</span>
          <span className="bg-white/20 text-xs px-1.5 py-0.2 rounded-full font-mono">{branchAdmins.length}</span>
        </button>
        <button
          onClick={() => setActiveTab('crm')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-1.5 ${
            activeTab === 'crm' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-100 text-slate-800 hover:bg-neutral-200'
          }`}
        >
          <span>CRM Leads & Quotations</span>
          <span className="bg-white/20 text-xs px-1.5 py-0.2 rounded-full font-mono">{rfqs.length}</span>
        </button>
        <button
          onClick={() => setActiveTab('boq')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-1.5 ${
            activeTab === 'boq' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-100 text-slate-800 hover:bg-neutral-200'
          }`}
        >
          <span>BOQ & Cost Estimation</span>
        </button>
        <button
          onClick={() => setActiveTab('dpr')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-1.5 ${
            activeTab === 'dpr' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-100 text-slate-800 hover:bg-neutral-200'
          }`}
        >
          <span>Daily Progress Reports (DPR)</span>
          <span className="bg-white/20 text-xs px-1.5 py-0.2 rounded-full font-mono">{dprs.length}</span>
        </button>
        <button
          onClick={() => setActiveTab('snags')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-1.5 ${
            activeTab === 'snags' ? 'bg-red-600 text-white shadow-md' : 'bg-neutral-100 text-slate-800 hover:bg-neutral-200'
          }`}
        >
          <span>Site Defect Snags (QC)</span>
          <span className="bg-white/20 text-xs px-1.5 py-0.2 rounded-full font-mono">{snags.length}</span>
        </button>
      </div>

      {/* TAB 1: EXECUTIVE OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Global Telemetry Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Workforce */}
            <div className="bg-white border-2 border-neutral-200 hover:border-red-600 transition p-5 rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-neutral-600 text-xs">
                <span className="font-extrabold uppercase tracking-wider">Workforce Strength</span>
                <Users className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-black">
                  {presentWorkersToday > 0 ? presentWorkersToday : totalActiveWorkers}
                </span>
                <span className="text-xs text-neutral-500 font-bold">
                  / {totalWorkersLogged > 0 ? totalWorkersLogged : totalActiveWorkers} Onsite
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 font-bold">{gpsVerifiedPct}% GPS Geofence Verified Today</p>
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
                Current Spend: <strong className="text-red-600">{formatCurrency(totalCurrentSpend)}</strong> ({spendPctOverall}% Utilized)
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
                <span className="font-extrabold uppercase tracking-wider">Regional Facilities</span>
                <Building2 className="w-4 h-4 text-neutral-800" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-black">{branches.length}</span>
                <span className="text-xs text-emerald-700 font-black">100% Operational</span>
              </div>
              <p className="text-[11px] text-neutral-600 font-medium">
                {branches.map((b) => b.city).join(', ') || 'Patna Works'}
              </p>
            </div>
          </div>

          {/* Regional Branch Telemetry Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-black">Regional Depot Telemetry & Spend Ledger</h2>
              <span className="text-xs text-neutral-500 font-mono">Didarganj Heavy Works Facility</span>
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

          {/* 2-Column: Recent High-Value Vouchers & Pending Indents with Quick Action Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Pending Financial Vouchers Desk */}
            <div className="lg:col-span-6 bg-white border-2 border-neutral-200 rounded-3xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div>
                  <h2 className="text-base font-black text-black">Branch Expense Vouchers Ledger</h2>
                  <p className="text-[11px] text-neutral-600 font-medium">Claims &gt; ₹50,000 threshold require HQ signoff</p>
                </div>
                <Link
                  href="/dashboard/super-admin/approvals"
                  className="text-xs text-red-600 font-extrabold hover:underline"
                >
                  Full Signoff Desk →
                </Link>
              </div>

              <div className="space-y-3">
                {vouchers.length === 0 ? (
                  <p className="text-xs text-neutral-500 text-center py-6 font-medium">
                    No expense vouchers logged. When branches record bills, they will appear here.
                  </p>
                ) : (
                  vouchers.slice(0, 4).map((vch) => (
                    <div
                      key={vch.id}
                      className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs hover:border-red-300 transition"
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

                      <div className="sm:text-right space-y-1 flex sm:flex-col items-center sm:items-end justify-between">
                        <span className="font-mono font-black text-sm text-black block">
                          {formatCurrency(vch.amount)}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                              vch.status === 'APPROVED'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-amber-100 text-amber-800 border border-amber-300'
                            }`}
                          >
                            {vch.status}
                          </span>
                          {vch.status !== 'APPROVED' && (
                            <button
                              onClick={() => handleApproveVoucher(vch.id)}
                              className="px-2.5 py-1 bg-emerald-600 text-white rounded-md text-[10px] font-bold hover:bg-emerald-700 transition"
                            >
                              Approve
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Central Works Manufacturing Indents */}
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
                {indents.length === 0 ? (
                  <p className="text-xs text-neutral-500 text-center py-6 font-medium">
                    No factory manufacturing indents requested.
                  </p>
                ) : (
                  indents.slice(0, 3).map((ind) => (
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
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                              ind.status === 'APPROVED'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-amber-100 text-amber-800 border border-amber-300'
                            }`}
                          >
                            {ind.status}
                          </span>
                          {ind.status !== 'APPROVED' && (
                            <button
                              onClick={() => handleApproveIndent(ind.id)}
                              className="px-2.5 py-1 bg-red-600 text-white rounded-md text-[10px] font-bold hover:bg-red-700 transition"
                            >
                              Dispatch
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="text-neutral-800">
                        <p className="font-bold text-black">{ind.purpose}</p>
                        <p className="text-[11px] text-neutral-600 font-medium mt-0.5">
                          Items: {ind.items.map((it: any) => `${it.quantity} ${it.unit} of ${it.productName}`).join(', ')}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BRANCH ADMINS GOVERNANCE (Super Admin Management) */}
      {activeTab === 'branch_admins' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-black">Branch Administrators Governance</h2>
              <p className="text-xs text-neutral-600">
                Super Admin management desk to provision, modify, and delete Branch Administrator login credentials.
              </p>
            </div>
            <button
              onClick={openCreateAdminModal}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 self-start"
            >
              <Plus className="w-4 h-4" />
              <span>+ Provision Branch Admin</span>
            </button>
          </div>

          {branchAdmins.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-neutral-300 rounded-3xl p-12 text-center space-y-3">
              <UserCheck className="w-12 h-12 text-neutral-400 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">No Branch Administrators Provisioned</h3>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                Click &quot;+ Provision Branch Admin&quot; above to create login credentials (email and password) for a fabrication plant or regional depot supervisor.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {branchAdmins.map((adm) => {
                const isPasswordVisible = visiblePasswords[adm.id] || false;
                return (
                  <div
                    key={adm.id}
                    className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-6 space-y-4 shadow-sm transition"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center font-black text-lg">
                          {adm.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-base font-black text-black">{adm.name}</h4>
                          <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded">
                            BRANCH ADMIN
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openEditAdminModal(adm)}
                          className="p-2 text-neutral-500 hover:text-black rounded-xl hover:bg-neutral-100 transition"
                          title="Edit / Modify Admin"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBranchAdmin(adm.id, adm.name)}
                          className="p-2 text-neutral-400 hover:text-red-600 rounded-xl hover:bg-red-50 transition"
                          title="Delete Admin"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 font-bold">Login Email / ID:</span>
                        <span className="font-mono font-black text-black">{adm.email}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 font-bold">Password:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono font-bold text-red-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                            {isPasswordVisible ? adm.password : '••••••••'}
                          </span>
                          <button
                            type="button"
                            onClick={() => togglePasswordVisibility(adm.id)}
                            className="text-neutral-400 hover:text-black p-1"
                            title={isPasswordVisible ? 'Hide Password' : 'Show Password'}
                          >
                            {isPasswordVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500 font-bold">Assigned Facility:</span>
                        <span className="font-bold text-neutral-800">{adm.branchName}</span>
                      </div>

                      <div className="flex justify-between items-center pt-1 border-t border-neutral-200 text-[11px]">
                        <span className="text-neutral-500">Designation & Contact:</span>
                        <span className="text-neutral-700 font-medium">{adm.designation} • {adm.phone}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: CRM LEADS & QUOTATIONS (Pre-Construction) */}
      {activeTab === 'crm' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-black">CRM — Leads & Quotations Pipeline</h2>
              <p className="text-xs text-neutral-600">
                Incoming RFQ submissions from the website and client direct proposals.
              </p>
            </div>
            <button
              onClick={() => setNewLeadModalOpen(true)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 self-start"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Lead</span>
            </button>
          </div>

          {rfqs.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-neutral-300 rounded-3xl p-12 text-center space-y-3">
              <FileSpreadsheet className="w-12 h-12 text-neutral-400 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">No Inquiries or Leads</h3>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                Customer RFQ requests from the website or manual proposals will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {rfqs.map((lead) => (
                <div
                  key={lead.id || lead._id}
                  className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-5 space-y-3 shadow-sm transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                        {lead.rfqNo || 'RFQ-2024-LEAD'}
                      </span>
                      <span className="text-xs font-bold text-neutral-700">{lead.customerName}</span>
                      <span className="text-xs text-neutral-400">•</span>
                      <span className="text-xs font-bold text-neutral-500">{lead.companyName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={lead.status || 'NEW'}
                        onChange={(e) => handleUpdateRfqStatus(lead.id || lead._id, e.target.value)}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg border border-neutral-300 bg-white"
                      >
                        <option value="NEW">NEW LEAD</option>
                        <option value="QUOTED">QUOTATION SENT</option>
                        <option value="CONVERTED">CONVERTED (WON)</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>

                      <button
                        onClick={() => handleDeleteRfq(lead.id || lead._id)}
                        className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-neutral-500 font-bold block text-[11px]">Contact & Location</span>
                      <p className="font-bold text-black mt-0.5">{lead.phone}</p>
                      <p className="text-neutral-600 font-medium">{lead.email}</p>
                      <p className="text-neutral-500 text-[10px] mt-0.5">{lead.city}, {lead.state}</p>
                    </div>

                    <div>
                      <span className="text-neutral-500 font-bold block text-[11px]">Requirement Details</span>
                      <p className="text-neutral-700 font-medium mt-0.5 line-clamp-2">{lead.projectDetails}</p>
                    </div>

                    <div>
                      <span className="text-neutral-500 font-bold block text-[11px]">Products Inquired</span>
                      <div className="space-y-1 mt-0.5">
                        {lead.selectedProducts?.map((p: any, idx: number) => (
                          <span key={idx} className="inline-block bg-neutral-100 text-black px-2 py-0.5 rounded text-[10px] font-bold mr-1 mb-1">
                            {p.name} ({p.quantity})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: BOQ & COST ESTIMATION (Pre-Construction) */}
      {activeTab === 'boq' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-black">Bill of Quantity (BOQ) & Cost Estimation</h2>
              <p className="text-xs text-neutral-600">
                Itemized schedule of rates and working capital estimates for heavy fabrication orders.
              </p>
            </div>
            <div className="p-3 bg-red-50 border border-red-200 rounded-2xl text-right">
              <span className="text-[10px] font-bold text-red-700 uppercase">Estimated Works Value</span>
              <p className="text-xl font-mono font-black text-red-600">{formatCurrency(totalBoqValue)}</p>
            </div>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-100 text-neutral-700 font-black uppercase text-[10px] border-b border-neutral-200">
                  <tr>
                    <th className="p-4">Item Code</th>
                    <th className="p-4">Description of Works / Material</th>
                    <th className="p-4">Unit</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Unit Rate (₹)</th>
                    <th className="p-4">Total Amount (₹)</th>
                    <th className="p-4">QC Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {boqItems.map((item) => (
                    <tr key={item.id} className="hover:bg-neutral-50 transition font-medium">
                      <td className="p-4 font-mono font-bold text-red-600">{item.code}</td>
                      <td className="p-4 font-bold text-black">{item.description}</td>
                      <td className="p-4">{item.unit}</td>
                      <td className="p-4 font-mono font-bold">{item.quantity}</td>
                      <td className="p-4 font-mono">{formatCurrency(item.rate)}</td>
                      <td className="p-4 font-mono font-black text-slate-900">{formatCurrency(item.quantity * item.rate)}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                          item.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: DAILY PROGRESS REPORTS (DPR) (Project Execution) */}
      {activeTab === 'dpr' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-black">Daily Progress Reports (DPR) Central Feed</h2>
              <p className="text-xs text-neutral-600">
                Verified daily logs from site engineers covering labour counts, machinery, and daily output.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-500">{dprs.length} DPRs Logged</span>
          </div>

          {dprs.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-neutral-300 rounded-3xl p-12 text-center space-y-3">
              <ClipboardList className="w-12 h-12 text-neutral-400 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">No Daily Progress Reports Yet</h3>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                Daily reports submitted by site incharge or QA/QC engineers will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {dprs.map((dpr) => (
                <div
                  key={dpr.id}
                  className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-6 space-y-4 shadow-sm transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                        {dpr.dprNo}
                      </span>
                      <span className="text-xs font-bold text-black">{dpr.branchName}</span>
                      <span className="text-xs text-neutral-400">•</span>
                      <span className="text-xs font-mono text-neutral-500">{dpr.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono bg-neutral-100 px-2 py-0.5 rounded font-bold">
                        Weather: {dpr.weather}
                      </span>
                      <button
                        onClick={() => handleDeleteDpr(dpr.id)}
                        className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                        title="Delete DPR"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200">
                      <span className="text-neutral-500 font-bold block text-[10px]">Labour Deployed</span>
                      <p className="text-lg font-black font-mono text-black mt-1">
                        {dpr.labourCount?.total || 33} Workers
                      </p>
                      <p className="text-[10px] text-neutral-600 mt-0.5">
                        Skilled: {dpr.labourCount?.skilled || 15} • Unskilled: {dpr.labourCount?.unskilled || 15}
                      </p>
                    </div>

                    <div className="md:col-span-3 space-y-2">
                      <div>
                        <span className="font-bold text-black text-[11px]">Work Accomplished Today:</span>
                        <p className="text-neutral-700 font-medium mt-0.5">{dpr.workAccomplished}</p>
                      </div>

                      {dpr.materialReceived && (
                        <div>
                          <span className="font-bold text-black text-[11px]">Material Received:</span>
                          <p className="text-neutral-600 font-medium mt-0.5">{dpr.materialReceived}</p>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
                        <span>Machinery: <strong className="text-black">{dpr.machineryDeployed}</strong></span>
                        <span>Safety: <strong className="text-emerald-700">{dpr.safetyObservations}</strong></span>
                        <span>Submitted By: <strong className="text-black">{dpr.submittedBy?.name || 'Site Incharge'}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 6: SITE DEFECT SNAGS (Project Execution) */}
      {activeTab === 'snags' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-black">Quality Snags & Defect QC Tracker</h2>
              <p className="text-xs text-neutral-600">
                Logged fabrication & erection defects with site camera proofs and resolution status.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-500">{snags.length} Snags Tracked</span>
          </div>

          {snags.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-neutral-300 rounded-3xl p-12 text-center space-y-3">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">No Defect Snags Logged</h3>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                All quality and fabrication checks are passing! Snags logged by QA/QC site engineers with camera proof will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {snags.map((snag) => (
                <div
                  key={snag.id}
                  className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl p-5 space-y-4 shadow-sm transition"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {snag.snagNumber || 'SNG-QC'}
                      </span>
                      <h4 className="text-base font-black text-black mt-1.5">{snag.title}</h4>
                      <p className="text-[11px] text-neutral-500 font-mono">Location: {snag.location} • {snag.category}</p>
                    </div>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                        snag.status === 'RESOLVED'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-red-100 text-red-800 border border-red-300'
                      }`}
                    >
                      {snag.status}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 font-medium">{snag.description}</p>

                  {snag.photoUrl && (
                    <div className="h-32 w-full rounded-2xl overflow-hidden border border-neutral-200 relative bg-neutral-100">
                      <img src={snag.photoUrl} alt="Defect Proof" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 text-[11px]">
                      Assigned: <strong className="text-black">{snag.assignedTo || 'Fabrication Team'}</strong>
                    </span>

                    <div className="flex items-center gap-2">
                      {snag.status !== 'RESOLVED' && (
                        <button
                          onClick={() => handleResolveSnag(snag.id)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition"
                        >
                          Resolve Snag
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteSnag(snag.id)}
                        className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                        title="Delete Snag"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Branch Admin Provisioning / Edit Modal */}
      {adminModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-black p-6 sm:p-8 rounded-3xl max-w-lg w-full border-2 border-neutral-200 space-y-5">
            <div>
              <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">Super Admin Node Control</span>
              <h3 className="text-xl font-black text-slate-900 mt-0.5">
                {editingAdmin ? 'Modify Branch Admin Credentials' : 'Provision New Branch Administrator'}
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                Set login email and password for the Branch Manager to authenticate into their operations desk.
              </p>
            </div>

            <form onSubmit={handleSaveBranchAdmin} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-neutral-800 block mb-1">Full Name of Admin *</label>
                <input
                  type="text"
                  required
                  value={adminForm.name}
                  onChange={(e) => setAdminForm({ ...adminForm, name: e.target.value })}
                  placeholder="e.g. Sanjay Singh"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Official Login Email (User ID) *</label>
                <input
                  type="email"
                  required
                  value={adminForm.email}
                  onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                  placeholder="e.g. patna.admin@jmkengineering.com"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Password *</label>
                <input
                  type="text"
                  required
                  value={adminForm.password}
                  onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                  placeholder="e.g. patna123"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-mono"
                />
                <span className="text-[10px] text-neutral-500 mt-1 block">
                  Branch Admin will use this exact password to sign in to the portal.
                </span>
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Assigned Branch / Location *</label>
                <select
                  value={adminForm.branchId}
                  onChange={(e) => {
                    const sel = branches.find((b) => b.id === e.target.value);
                    setAdminForm({
                      ...adminForm,
                      branchId: e.target.value,
                      branchName: sel ? sel.name : 'Branch Depot',
                    });
                  }}
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-bold bg-white"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.city})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-neutral-800 block mb-1">Designation</label>
                  <input
                    type="text"
                    value={adminForm.designation}
                    onChange={(e) => setAdminForm({ ...adminForm, designation: e.target.value })}
                    placeholder="e.g. Fabrication Superintendent"
                    className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="font-bold text-neutral-800 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={adminForm.phone}
                    onChange={(e) => setAdminForm({ ...adminForm, phone: e.target.value })}
                    placeholder="e.g. +91 74939 16194"
                    className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setAdminModalOpen(false)}
                  className="px-4 py-2 bg-neutral-100 text-xs font-bold rounded-xl hover:bg-neutral-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase rounded-xl transition shadow-md"
                >
                  {editingAdmin ? 'Update Credentials' : 'Save & Provision Admin'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Lead Modal */}
      {newLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-black p-6 rounded-3xl max-w-md w-full border-2 border-neutral-200 space-y-4">
            <h3 className="text-lg font-black text-slate-900">+ Add New CRM Lead / RFQ</h3>
            <form onSubmit={handleCreateLead} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-neutral-700 block mb-1">Customer / Contact Name *</label>
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={leadCompany}
                  onChange={(e) => setLeadCompany(e.target.value)}
                  placeholder="e.g. L&T Heavy Civil Infra"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Contact Phone Number *</label>
                <input
                  type="text"
                  required
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Location / Destination City</label>
                <input
                  type="text"
                  value={leadCity}
                  onChange={(e) => setLeadCity(e.target.value)}
                  placeholder="e.g. Patna / Ranchi"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Requirement Details</label>
                <textarea
                  rows={2}
                  value={leadDetails}
                  onChange={(e) => setLeadDetails(e.target.value)}
                  placeholder="e.g. Urgent requirement for 500 pcs MS centering plates..."
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setNewLeadModalOpen(false)}
                  className="px-4 py-2 bg-neutral-100 text-xs font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-600 text-white text-xs font-black uppercase rounded-xl"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
