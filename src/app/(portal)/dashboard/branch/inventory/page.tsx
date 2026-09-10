'use client';

import React, { useState, useEffect } from 'react';
import {
  Package,
  Plus,
  Truck,
  ArrowRight,
  Send,
  CheckCircle2,
  Clock,
  Layers,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import { SEED_PRODUCTS, SeedProduct } from '@/lib/seedData';
import { AuthUser } from '@/lib/rbac';
import IndentRequestModal from '@/components/portal/IndentRequestModal';

export default function BranchInventoryPage() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [indents, setIndents] = useState<any[]>([]);
  const [isIndentModalOpen, setIsIndentModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Realistic Yard Stock Simulation
  const [inventoryStock, setInventoryStock] = useState([
    {
      name: '13 Kg & 20 Kg Mild Steel Centering Sheets',
      category: 'Shuttering & Centering',
      inStock: 620,
      reserved: 150,
      unit: 'Pcs',
      reorderLevel: 200,
      status: 'HEALTHY',
    },
    {
      name: '20 Kg, 27 Kg & 35 Kg Iron Shuttering Plates',
      category: 'Shuttering & Centering',
      inStock: 480,
      reserved: 120,
      unit: 'Pcs',
      reorderLevel: 150,
      status: 'HEALTHY',
    },
    {
      name: 'Adjustable Steel Scaffolding Props & Acrow Jacks',
      category: 'Scaffolding & Jacks',
      inStock: 350,
      reserved: 80,
      unit: 'Pcs',
      reorderLevel: 100,
      status: 'HEALTHY',
    },
    {
      name: 'Iron H Frame Scaffolding Systems',
      category: 'Scaffolding & Jacks',
      inStock: 85,
      reserved: 60,
      unit: 'Sets',
      reorderLevel: 50,
      status: 'LOW_STOCK',
    },
    {
      name: 'Elastomeric POT PTFE Bridge Bearings',
      category: 'Bridge Bearings',
      inStock: 12,
      reserved: 8,
      unit: 'Units',
      reorderLevel: 4,
      status: 'CRITICAL',
    },
    {
      name: 'Strip Seal & 20-inch MS Expansion Joints',
      category: 'Expansion Joints',
      inStock: 95,
      reserved: 40,
      unit: 'Mtrs',
      reorderLevel: 30,
      status: 'HEALTHY',
    },
  ]);

  const loadData = async () => {
    try {
      const [uRes, iRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/indents'),
      ]);
      const [uData, iData] = await Promise.all([uRes.json(), iRes.json()]);
      setUser(uData.user);
      setIndents(iData.indents || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
            Warehouse & Supply Chain
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
            Depot Stock & Material Indents Requisition
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time yard inventory levels, reservation tracking, and direct manufacturing requisitions to Patna HQ.
          </p>
        </div>

        <button
          onClick={() => setIsIndentModalOpen(true)}
          className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition shadow-lg flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Raise Material Indent</span>
        </button>
      </div>

      {/* Stock Cards Grid */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-white">Live Depot Staging Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryStock.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-orange-400 block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5">{item.name}</h3>
                </div>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${
                    item.status === 'HEALTHY'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : item.status === 'LOW_STOCK'
                      ? 'bg-yellow-950 text-yellow-400 border border-yellow-800'
                      : 'bg-red-950 text-red-400 border border-red-800 animate-pulse'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-2xl border border-slate-800/80">
                <div>
                  <span className="text-[10px] text-slate-500 block">Available in Yard:</span>
                  <span className="text-lg font-black font-mono text-white">
                    {item.inStock} {item.unit}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">Reserved for Site:</span>
                  <span className="text-lg font-black font-mono text-orange-400">
                    {item.reserved} {item.unit}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsIndentModalOpen(true)}
                className="w-full py-2 bg-slate-950 hover:bg-orange-600 hover:text-white text-slate-300 rounded-xl text-xs font-semibold border border-slate-800 transition flex items-center justify-center gap-1.5"
              >
                <span>Request Patna Works Replenishment</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Indents Requisition Queue */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base font-bold text-white">Material Indents Log (Patna HQ Queue)</h2>
            <p className="text-xs text-slate-400">Status tracking from central manufacturing to site delivery</p>
          </div>
        </div>

        <div className="space-y-3">
          {indents.map((indent) => (
            <div
              key={indent.id}
              className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded border border-orange-800">
                    {indent.indentNo}
                  </span>
                  <span className="text-slate-300 font-semibold">{indent.branchName}</span>
                </div>
                <span
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-lg font-bold ${
                    indent.status === 'APPROVED'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : indent.status === 'PENDING_APPROVAL'
                      ? 'bg-orange-950 text-orange-400 border border-orange-800'
                      : 'bg-blue-950 text-blue-400 border border-blue-800'
                  }`}
                >
                  ● {indent.status}
                </span>
              </div>

              <p className="text-sm font-medium text-white">{indent.purpose}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {indent.items?.map((it: any, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                  >
                    {it.quantity} {it.unit} • {it.productName} ({it.urgency})
                  </span>
                ))}
              </div>

              {indent.dispatchDetails && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-emerald-300 text-[11px]">
                  <strong>✓ Patna Central Dispatch Assigned: </strong>
                  Vehicle {indent.dispatchDetails.vehicleNo} • Driver: {indent.dispatchDetails.driverName}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Indent Modal */}
      <IndentRequestModal
        isOpen={isIndentModalOpen}
        onClose={() => setIsIndentModalOpen(false)}
        user={user}
        onIndentCreated={loadData}
      />
    </div>
  );
}
