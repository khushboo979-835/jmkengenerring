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
  FileText,
  Edit,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  UserCheck
} from 'lucide-react';
import DPRSubmissionModal from '@/components/portal/DPRSubmissionModal';
import { AuthUser } from '@/lib/rbac';

export default function BranchOperationsPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [indents, setIndents] = useState<any[]>([]);
  const [siteEngineers, setSiteEngineers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDprModalOpen, setIsDprModalOpen] = useState(false);

  // Site Engineer Modal State
  const [engineerModalOpen, setEngineerModalOpen] = useState(false);
  const [editingEngineer, setEditingEngineer] = useState<any | null>(null);
  const [visiblePasswords, setVisiblePasswords] = useState<{ [key: string]: boolean }>({});
  const [engineerForm, setEngineerForm] = useState({
    name: '',
    email: '',
    password: '',
    designation: 'Senior QA/QC Site Engineer',
    phone: '+91 74939 16194',
  });

  const loadData = async () => {
    try {
      const [uRes, aRes, tRes, iRes, usersRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/attendance'),
        fetch('/api/tasks'),
        fetch('/api/indents'),
        fetch('/api/users?role=STAFF'),
      ]);
      const [uData, aData, tData, iData, usersData] = await Promise.all([
        uRes.json(),
        aRes.json(),
        tRes.json(),
        iRes.json(),
        usersRes.json(),
      ]);
      setUser(uData.user);
      setAttendance(aData.attendance || []);
      setTasks(tData.tasks || []);
      setIndents(iData.indents || []);
      setSiteEngineers(usersData.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Engineer CRUD Handlers
  const openCreateEngineerModal = () => {
    setEditingEngineer(null);
    setEngineerForm({
      name: '',
      email: '',
      password: '',
      designation: 'Senior QA/QC Site Engineer',
      phone: '+91 74939 16194',
    });
    setEngineerModalOpen(true);
  };

  const openEditEngineerModal = (eng: any) => {
    setEditingEngineer(eng);
    setEngineerForm({
      name: eng.name || '',
      email: eng.email || '',
      password: eng.password || '',
      designation: eng.designation || 'Senior QA/QC Site Engineer',
      phone: eng.phone || '+91 74939 16194',
    });
    setEngineerModalOpen(true);
  };

  const handleSaveEngineer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!engineerForm.name || !engineerForm.email || !engineerForm.password) {
      alert('Please fill in name, email, and password.');
      return;
    }

    try {
      if (editingEngineer) {
        const res = await fetch('/api/users', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingEngineer.id,
            ...engineerForm,
            role: 'STAFF',
            branchId: user?.branchId || 'br_patna_hq',
            branchName: user?.branchName || 'Patna HQ & Heavy Fabrication Plant',
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          alert(data.error || 'Failed to update engineer credentials');
          return;
        }
      } else {
        const res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...engineerForm,
            role: 'STAFF',
            branchId: user?.branchId || 'br_patna_hq',
            branchName: user?.branchName || 'Patna HQ & Heavy Fabrication Plant',
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          alert(data.error || 'Failed to create site engineer');
          return;
        }
      }

      setEngineerModalOpen(false);
      setEditingEngineer(null);
      await loadData();
    } catch (err) {
      console.error(err);
      alert('Error saving site engineer credentials');
    }
  };

  const handleDeleteEngineer = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete account for Site Engineer "${name}"?`)) return;
    try {
      const res = await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to delete engineer');
        return;
      }
      await loadData();
    } catch (err) {
      console.error(err);
    }
  };

  const togglePasswordVisibility = (id: string) => {
    setVisiblePasswords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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

        {/* Local Action Tiles */}
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
            className="p-5 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm hover:shadow-md space-y-3 group text-left block w-full"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200 group-hover:scale-105 transition">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 group-hover:text-red-600 transition">
              Daily Progress Report (DPR)
            </h3>
            <p className="text-xs text-neutral-600 font-medium">
              Log machine operational hours, pour cubic meters, and crane deployment to Central Works.
            </p>
            <div className="text-xs font-black text-red-600 flex items-center gap-1 pt-1">
              <span>Open DPR Submission Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* SITE QA/QC ENGINEERS & STAFF GOVERNANCE SECTION (User Request) */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-black text-red-600 uppercase tracking-wider block">
                Branch Team Governance
              </span>
              <h2 className="text-xl font-black text-black mt-0.5">
                Site QA/QC Engineers & Field Staff Credentials
              </h2>
              <p className="text-xs text-neutral-600 font-medium">
                Create and manage login IDs and passwords for your field QA/QC engineers and site fitting team.
              </p>
            </div>

            <button
              onClick={openCreateEngineerModal}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 self-start sm:self-auto"
            >
              <UserCheck className="w-4 h-4" />
              <span>+ Provision Site Engineer</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteEngineers.map((eng) => {
              const isPasswordVisible = visiblePasswords[eng.id] || false;
              return (
                <div
                  key={eng.id}
                  className="bg-neutral-50 border-2 border-neutral-200 hover:border-red-600 rounded-2xl p-5 space-y-3 transition"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-black text-black">{eng.name}</h3>
                      <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded">
                        QA/QC ENGINEER
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => openEditEngineerModal(eng)}
                        className="p-1.5 text-neutral-500 hover:text-black rounded-lg hover:bg-neutral-200 transition"
                        title="Edit Engineer"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteEngineer(eng.id, eng.name)}
                        className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition"
                        title="Delete Engineer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500 font-bold">Login ID:</span>
                      <span className="font-mono font-black text-black truncate max-w-[170px]">{eng.email}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-neutral-500 font-bold">Password:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-red-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                          {isPasswordVisible ? eng.password : '••••••••'}
                        </span>
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(eng.id)}
                          className="text-neutral-400 hover:text-black p-0.5"
                          title={isPasswordVisible ? 'Hide Password' : 'Show Password'}
                        >
                          {isPasswordVisible ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[11px] pt-1 border-t border-neutral-200">
                      <span className="text-neutral-500">Designation:</span>
                      <span className="font-medium text-black">{eng.designation}</span>
                    </div>

                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-neutral-500">Phone:</span>
                      <span className="font-mono font-medium text-neutral-700">{eng.phone}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Attendance Shift Log Table */}
        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
            <div>
              <h2 className="text-base font-black text-slate-900">Live Worker Muster Roll & Shift Clock</h2>
              <p className="text-xs text-neutral-600 font-medium">Patna Heavy Fabrication Yard • Shift Turnout Real-Time Tracker</p>
            </div>
            <Link
              href="/dashboard/branch/attendance"
              className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
            >
              <span>Manage Shift Muster Roll</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-100 text-slate-800 uppercase text-[10px] tracking-wider border-b border-neutral-200">
                <tr>
                  <th className="py-3.5 px-4 font-black">Worker Name / ID</th>
                  <th className="py-3.5 px-4 font-black">Skill / Trade</th>
                  <th className="py-3.5 px-4 font-black">Shift Duty</th>
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

      {/* Engineer Create / Edit Modal */}
      {engineerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-black p-6 sm:p-8 rounded-3xl max-w-md w-full border-2 border-neutral-200 space-y-4">
            <div>
              <span className="text-[11px] font-black uppercase text-red-600 tracking-wider">Site Team Governance</span>
              <h3 className="text-xl font-black text-slate-900 mt-0.5">
                {editingEngineer ? 'Modify Site Engineer Credentials' : 'Provision Site QA/QC Engineer'}
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                Set login ID and password for field engineering and inspection checklists.
              </p>
            </div>

            <form onSubmit={handleSaveEngineer} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-neutral-800 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={engineerForm.name}
                  onChange={(e) => setEngineerForm({ ...engineerForm, name: e.target.value })}
                  placeholder="e.g. Er. Rahul Kumar"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Login Email / ID *</label>
                <input
                  type="email"
                  required
                  value={engineerForm.email}
                  onChange={(e) => setEngineerForm({ ...engineerForm, email: e.target.value })}
                  placeholder="e.g. engineer.patna@jmkengineering.com"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Login Password *</label>
                <input
                  type="text"
                  required
                  value={engineerForm.password}
                  onChange={(e) => setEngineerForm({ ...engineerForm, password: e.target.value })}
                  placeholder="e.g. staff123"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-mono"
                />
                <span className="text-[10px] text-neutral-500 mt-0.5 block">
                  Engineer will sign in with this exact password.
                </span>
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Designation</label>
                <input
                  type="text"
                  value={engineerForm.designation}
                  onChange={(e) => setEngineerForm({ ...engineerForm, designation: e.target.value })}
                  placeholder="e.g. Senior QA/QC Site Engineer"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-800 block mb-1">Contact Phone</label>
                <input
                  type="text"
                  value={engineerForm.phone}
                  onChange={(e) => setEngineerForm({ ...engineerForm, phone: e.target.value })}
                  placeholder="e.g. +91 74939 16194"
                  className="w-full p-2.5 border-2 border-neutral-300 rounded-xl outline-none focus:border-red-600 font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setEngineerModalOpen(false)}
                  className="px-4 py-2 bg-neutral-100 text-xs font-bold rounded-xl hover:bg-neutral-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase rounded-xl transition shadow-md"
                >
                  {editingEngineer ? 'Update Credentials' : 'Save & Provision Engineer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DPR Submission Modal */}
      <DPRSubmissionModal
        isOpen={isDprModalOpen}
        onClose={() => setIsDprModalOpen(false)}
        user={user}
      />
    </div>
  );
}
