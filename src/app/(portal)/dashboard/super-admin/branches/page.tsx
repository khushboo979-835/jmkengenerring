'use client';

import React, { useState, useEffect } from 'react';
import {
  Building2,
  Plus,
  MapPin,
  DollarSign,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Search
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { SEED_BRANCHES } from '@/lib/seedData';
import AddBranchModal from '@/components/portal/AddBranchModal';

export default function BranchesPage() {
  const [branches, setBranches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const loadBranches = async () => {
    try {
      const res = await fetch('/api/branches');
      const data = await res.json();
      setBranches(data.branches || SEED_BRANCHES);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBranches();
  }, []);

  const filteredBranches = branches.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
            Regional Node Governance
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
            Branch & Logistics Depot Management
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Provision new depots, set working capital limits, and enforce GPS geofenced perimeter boundaries.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add New Regional Branch</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-2xl">
        <Search className="w-4 h-4 text-slate-500 ml-2" />
        <input
          type="text"
          placeholder="Filter branches by city, depot name, or code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border-none text-xs text-white focus:outline-none w-full"
        />
      </div>

      {/* Branches Table / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBranches.map((branch) => {
          const spendPct = branch.allocatedBudget
            ? Math.round((branch.currentSpend / branch.allocatedBudget) * 100)
            : 0;

          return (
            <div
              key={branch.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-xl hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-lg border border-orange-800">
                      {branch.code}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      ● ACTIVE NODE
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-2">{branch.name}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{branch.address}</span>
                  </p>
                </div>
              </div>

              {/* Working Budget & Spend Bar */}
              <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Allocated Working Budget:</span>
                  <span className="font-mono font-bold text-white">{formatCurrency(branch.allocatedBudget)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Spend to Date:</span>
                  <span className="font-mono text-emerald-400 font-bold">{formatCurrency(branch.currentSpend)}</span>
                </div>

                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mt-1.5">
                  <div
                    className={`h-full rounded-full ${spendPct > 80 ? 'bg-red-500' : 'bg-orange-500'}`}
                    style={{ width: `${Math.min(spendPct, 100)}%` }}
                  ></div>
                </div>
                <div className="text-[10px] text-slate-500 text-right">{spendPct}% Budget Utilized</div>
              </div>

              {/* GPS Geofence & Admin details */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">GPS Coordinates</span>
                  <p className="font-mono text-white text-[11px]">
                    {branch.locationCoords?.lat?.toFixed(4)}, {branch.locationCoords?.lng?.toFixed(4)}
                  </p>
                  <p className="text-[10px] text-emerald-400">Radius: {branch.locationCoords?.radiusMeters || 500}m</p>
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Regional Incharge</span>
                  <p className="text-white text-[11px] font-semibold">{branch.adminName}</p>
                  <p className="text-[10px] text-slate-400">{branch.contactNumber}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Branch Modal */}
      <AddBranchModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onBranchAdded={loadBranches}
      />
    </div>
  );
}
