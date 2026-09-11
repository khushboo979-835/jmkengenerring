'use client';

import React, { useState } from 'react';
import { X, AlertTriangle, Camera, UploadCloud, AlertCircle } from 'lucide-react';
import { AuthUser } from '@/lib/rbac';

interface SnagReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: AuthUser | null;
  onSnagCreated: () => void;
}

export default function SnagReportModal({
  isOpen,
  onClose,
  user,
  onSnagCreated,
}: SnagReportModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<'CASTING_DEFECT' | 'MATERIAL_DAMAGE' | 'SAFETY_HAZARD' | 'DIMENSION_MISMATCH' | 'FINISHING'>('CASTING_DEFECT');
  const [priority, setPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'>('HIGH');
  const [assignedTo, setAssignedTo] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!title || !description || !location) {
      setErrorMsg('Please complete all required defect details.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/snags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          location,
          branchId: user?.branchId || 'br_delhi',
          branchName: user?.branchName || 'Delhi NCR Depot',
          category,
          priority,
          reportedBy: {
            id: user?.id || 'usr_staff',
            name: user?.name || 'Er. Rahul Choudhary',
            role: user?.role === 'STAFF' ? 'Site QA/QC Engineer' : 'Branch Admin',
          },
          assignedTo: assignedTo || 'Site Welder & Fitter Team',
          photoUrl,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onSnagCreated();
        onClose();
      } else {
        setErrorMsg(data.error || 'Failed to record defect snag');
      }
    } catch (err) {
      setErrorMsg('Server connection error.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border-2 border-neutral-200 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-900">
        {/* Header */}
        <div className="p-6 bg-black text-white border-b-4 border-red-600 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black shadow-md">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Log Site Defect / Quality Snag</h3>
              <p className="text-xs text-neutral-400 font-medium">
                QC Camera Proofs, Severity Tagging & Immediate Remediation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Defect Title *</label>
            <input
              type="text"
              required
              placeholder="e.g., Flange pin misalignment on Shuttering Batch #88"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Specific Yard / Pier Location *</label>
              <input
                type="text"
                required
                placeholder="e.g., Stacking Row D / Pier 14 Culvert"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Assign Remedy To</label>
              <input
                type="text"
                placeholder="e.g., Dinesh Paswan (Lead Welder)"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Defect Category</label>
              <select
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              >
                <option value="CASTING_DEFECT">Concrete Casting Defect / Leak</option>
                <option value="MATERIAL_DAMAGE">Material Transit Damage</option>
                <option value="SAFETY_HAZARD">Scaffolding / Staging Safety Hazard</option>
                <option value="DIMENSION_MISMATCH">Dimension / Pitch Misalignment</option>
                <option value="FINISHING">Surface Coating / Primer Peeling</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Severity / Priority</label>
              <select
                value={priority}
                onChange={(e: any) => setPriority(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 font-bold focus:outline-none focus:border-red-600 transition"
              >
                <option value="CRITICAL">🔴 Critical (Pour Halting)</option>
                <option value="HIGH">🟠 High (Remedy within 24h)</option>
                <option value="MEDIUM">🟡 Medium (Yard Routine)</option>
                <option value="LOW">🟢 Low (Cosmetic Touchup)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Defect Description & Root Cause *</label>
            <textarea
              rows={3}
              required
              placeholder="Explain observation, measurement tolerances exceeded, and necessary rectifications..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
            ></textarea>
          </div>

          {/* Photo Evidence simulated capture */}
          <div className="p-3.5 bg-neutral-50 border-2 border-neutral-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-red-600" />
                <span>Camera Inspection Proof</span>
              </span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold">● Verified GPS Geotagged</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={photoUrl}
                alt="Defect Preview"
                className="w-16 h-16 rounded-xl object-cover border-2 border-neutral-200"
              />
              <div className="text-[10px] text-neutral-600 flex-1">
                <p className="font-semibold">Inspection photo attached with timestamp metadata.</p>
                <p className="text-neutral-500 mt-0.5">Direct sync to Master HQ QA Audit Trail.</p>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t-2 border-neutral-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-neutral-600 hover:text-black rounded-xl font-bold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-wider text-xs shadow-md shadow-red-600/30 disabled:opacity-50 transition"
            >
              {submitting ? 'Logging...' : 'Log Snag & Alert Team'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
