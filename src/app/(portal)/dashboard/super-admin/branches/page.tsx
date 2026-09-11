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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-black text-red-600 uppercase tracking-wider block">
            Regional Node Governance
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-0.5">
            Branch & Logistics Depot Management
          </h1>
          <p className="text-xs text-neutral-600 mt-1 font-medium">
            Provision new depots, set working capital limits, and enforce GPS geofenced perimeter boundaries.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add New Regional Branch</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className="flex items-center gap-3 bg-white border-2 border-neutral-200 p-3 rounded-2xl shadow-sm">
        <Search className="w-4 h-4 text-neutral-400 ml-2" />
        <input
          type="text"
          placeholder="Filter branches by city, depot name, or code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border-none text-xs text-black font-medium focus:outline-none w-full"
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
              className="bg-white border-2 border-neutral-200 rounded-3xl p-6 space-y-5 shadow-sm hover:border-red-600 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-red-700 bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-200">
                      {branch.code}
                    </span>
                    <span className="text-[10px] text-emerald-800 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ● ACTIVE NODE
                    </span>
                  </div>
                  <h3 className="text-base font-black text-black mt-2">{branch.name}</h3>
                  <p className="text-xs text-neutral-600 flex items-center gap-1 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{branch.address}</span>
                  </p>
                </div>
              </div>

              {/* Working Budget & Spend Bar */}
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-bold">Allocated Working Budget:</span>
                  <span className="font-mono font-black text-black">{formatCurrency(branch.allocatedBudget)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-bold">Current Spend to Date:</span>
                  <span className="font-mono text-red-600 font-black">{formatCurrency(branch.currentSpend)}</span>
                </div>

                <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden mt-1.5">
                  <div
                    className={`h-full rounded-full ${spendPct > 80 ? 'bg-red-600' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(spendPct, 100)}%` }}
                  ></div>
                </div>
                <div className="text-[10px] text-neutral-500 font-extrabold text-right">{spendPct}% Budget Utilized</div>
              </div>

              {/* GPS Geofence & Admin details */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] uppercase font-extrabold text-neutral-500 block">GPS Coordinates</span>
                  <p className="font-mono text-black font-bold text-[11px]">
                    {branch.locationCoords?.lat?.toFixed(4)}, {branch.locationCoords?.lng?.toFixed(4)}
                  </p>
                  <p className="text-[10px] text-emerald-700 font-bold">Radius: {branch.locationCoords?.radiusMeters || 500}m</p>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] uppercase font-extrabold text-neutral-500 block">Regional Incharge</span>
                  <p className="text-black text-[11px] font-black">{branch.adminName}</p>
                  <p className="text-[10px] text-neutral-600 font-medium">{branch.contactNumber}</p>
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
