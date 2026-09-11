'use client';

import React, { useState } from 'react';
import { X, Building2, MapPin, DollarSign, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface AddBranchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBranchAdded: () => void;
}

export default function AddBranchModal({ isOpen, onClose, onBranchAdded }: AddBranchModalProps) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [code, setCode] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('25.5941');
  const [lng, setLng] = useState('85.1376');
  const [radiusMeters, setRadiusMeters] = useState('500');
  const [allocatedBudget, setAllocatedBudget] = useState('5000000');
  const [contactNumber, setContactNumber] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!name || !city || !code || !address || !lat || !lng) {
      setErrorMsg('Please fill in all mandatory fields.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/branches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          city,
          code: code.toUpperCase(),
          address,
          locationCoords: {
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            radiusMeters: parseInt(radiusMeters) || 500,
          },
          allocatedBudget: parseFloat(allocatedBudget) || 0,
          contactNumber,
          adminName: adminName || `${city} Regional Manager`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onBranchAdded();
        onClose();
      } else {
        setErrorMsg(data.error || 'Failed to create branch');
      }
    } catch (err: any) {
      setErrorMsg('Server connection error. Please try again.');
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
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Provision New Regional Branch / Depot</h3>
              <p className="text-xs text-neutral-400 font-medium">
                Setup Working Capital Budget, GPS Geofencing, & Admin Assignment
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Branch / Depot Name *</label>
              <input
                type="text"
                required
                placeholder="e.g., Hyderabad South Logistics Hub"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">City *</label>
              <input
                type="text"
                required
                placeholder="e.g., Hyderabad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Branch Code (3-4 Letters) *</label>
              <input
                type="text"
                required
                placeholder="e.g., HYD-DEP"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-red-600 transition"
              />
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Initial Working Capital Budget (₹) *</label>
              <input
                type="number"
                required
                placeholder="e.g., 5000000"
                value={allocatedBudget}
                onChange={(e) => setAllocatedBudget(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-red-600 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Complete Physical Yard Address *</label>
            <textarea
              rows={2}
              required
              placeholder="Plot Number, Industrial Area / Highway node..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
            ></textarea>
          </div>

          {/* Geofencing Parameters */}
          <div className="p-4 bg-neutral-50 border-2 border-neutral-200 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-red-600 font-black">
              <MapPin className="w-4 h-4" />
              <span>GPS Geofencing Boundary Setup</span>
            </div>
            <p className="text-[11px] text-neutral-600 font-medium">
              Site staff can only clock attendance within this perimeter radius.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-neutral-600 font-bold mb-1 text-[10px] uppercase">Latitude</label>
                <input
                  type="text"
                  required
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-2 border-neutral-200 rounded-lg text-xs font-mono text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-neutral-600 font-bold mb-1 text-[10px] uppercase">Longitude</label>
                <input
                  type="text"
                  required
                  value={lng}
                  onChange={(e) => setLng(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-2 border-neutral-200 rounded-lg text-xs font-mono text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-neutral-600 font-bold mb-1 text-[10px] uppercase">Radius (Meters)</label>
                <input
                  type="number"
                  required
                  value={radiusMeters}
                  onChange={(e) => setRadiusMeters(e.target.value)}
                  className="w-full px-3 py-2 bg-white border-2 border-neutral-200 rounded-lg text-xs font-mono text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Branch Admin In-Charge Name</label>
              <input
                type="text"
                placeholder="e.g., K. Suresh Reddy"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-900 font-bold mb-1 uppercase tracking-wider text-[11px]">Contact Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98480 12345"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-red-600 transition font-medium"
              />
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
              {submitting ? 'Provisioning...' : 'Provision Branch'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
