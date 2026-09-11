'use client';

import React, { useState } from 'react';
import { X, FileSpreadsheet, Send, AlertCircle, HardHat } from 'lucide-react';
import { AuthUser } from '@/lib/rbac';

interface DPRSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: AuthUser | null;
  onDprSubmitted?: () => void;
}

export default function DPRSubmissionModal({
  isOpen,
  onClose,
  user,
  onDprSubmitted,
}: DPRSubmissionModalProps) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [weather, setWeather] = useState('Clear & Dry / 24°C');
  const [skilled, setSkilled] = useState(16);
  const [unskilled, setUnskilled] = useState(12);
  const [supervisors, setSupervisors] = useState(2);
  const [workAccomplished, setWorkAccomplished] = useState('');
  const [materialReceived, setMaterialReceived] = useState('');
  const [machineryDeployed, setMachineryDeployed] = useState('1x 5-Tonne Hydra Crane, 1x Forklift 3T, 2x MIG Welder');
  const [roadblocks, setRoadblocks] = useState('None. Production on schedule.');
  const [safetyObservations, setSafetyObservations] = useState('100% PPE compliance. Zero safety violations.');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!workAccomplished) {
      setErrorMsg('Please describe work accomplished today.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/dpr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchId: user?.branchId || 'br_delhi',
          branchName: user?.branchName || 'Delhi NCR Depot',
          date,
          weather,
          labourCount: {
            skilled,
            unskilled,
            supervisors,
            total: skilled + unskilled + supervisors,
          },
          workAccomplished,
          materialReceived,
          machineryDeployed,
          roadblocks,
          safetyObservations,
          submittedBy: {
            id: user?.id || 'usr_admin',
            name: user?.name || 'Amitabh Verma',
          },
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onDprSubmitted?.();
        onClose();
      } else {
        setErrorMsg(data.error || 'Failed to submit DPR');
      }
    } catch (err) {
      setErrorMsg('Connection error.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border-2 border-neutral-200 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-900">
        {/* Header */}
        <div className="p-6 bg-black text-white border-b-4 border-red-600 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black shadow-md">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Submit Daily Progress Report (DPR)</h3>
              <p className="text-xs text-neutral-400 font-medium">
                Direct Submission to Patna HQ Master Command Center
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

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">DPR Date *</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Site Weather Conditions</label>
              <input
                type="text"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
          </div>

          {/* Labour Strength */}
          <div className="p-4 bg-neutral-50 border-2 border-neutral-200 rounded-2xl space-y-2">
            <span className="text-[11px] font-black text-red-600 uppercase tracking-wider block">
              Daily On-Site Labour Deployment (Total: {skilled + unskilled + supervisors})
            </span>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] text-neutral-600 font-bold uppercase mb-1">Skilled Fitters / Riggers</label>
                <input
                  type="number"
                  min={0}
                  value={skilled}
                  onChange={(e) => setSkilled(parseInt(e.target.value) || 0)}
                  className="w-full px-2.5 py-1.5 bg-white border-2 border-neutral-200 rounded-lg text-xs font-mono font-bold text-slate-900 focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] text-neutral-600 font-bold uppercase mb-1">Unskilled Yard Labour</label>
                <input
                  type="number"
                  min={0}
                  value={unskilled}
                  onChange={(e) => setUnskilled(parseInt(e.target.value) || 0)}
                  className="w-full px-2.5 py-1.5 bg-white border-2 border-neutral-200 rounded-lg text-xs font-mono font-bold text-slate-900 focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] text-neutral-600 font-bold uppercase mb-1">Site Supervisors</label>
                <input
                  type="number"
                  min={0}
                  value={supervisors}
                  onChange={(e) => setSupervisors(parseInt(e.target.value) || 0)}
                  className="w-full px-2.5 py-1.5 bg-white border-2 border-neutral-200 rounded-lg text-xs font-mono font-bold text-slate-900 focus:border-red-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">
              Key Work Accomplished Today (Fabrication / Dispatch / Staging) *
            </label>
            <textarea
              rows={3}
              required
              placeholder="e.g., Dispatched 400 pcs 20kg shuttering plates to L&T package. Erection of 25 H-frame sets for flyover Pier 4 staging completed."
              value={workAccomplished}
              onChange={(e) => setWorkAccomplished(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Materials Received on Site</label>
              <input
                type="text"
                placeholder="e.g., Trailer BR-01-GB-4819 arrived with 30 Tonnes Centering Sheets"
                value={materialReceived}
                onChange={(e) => setMaterialReceived(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Machinery & Plant Deployed</label>
              <input
                type="text"
                value={machineryDeployed}
                onChange={(e) => setMachineryDeployed(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Safety & Environmental Observations</label>
            <input
              type="text"
              value={safetyObservations}
              onChange={(e) => setSafetyObservations(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
            />
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
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase tracking-wider text-xs shadow-md shadow-red-600/30 flex items-center gap-1.5 disabled:opacity-50 transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitting ? 'Transmitting...' : 'Transmit DPR to Patna HQ'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
