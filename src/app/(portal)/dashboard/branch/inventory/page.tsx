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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-black text-red-600 uppercase tracking-wider block">
            Warehouse & Supply Chain
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-0.5">
            Depot Stock & Material Indents Requisition
          </h1>
          <p className="text-xs text-neutral-600 mt-1 font-medium">
            Real-time yard inventory levels, reservation tracking, and direct manufacturing requisitions to Patna HQ.
          </p>
        </div>

        <button
          onClick={() => setIsIndentModalOpen(true)}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Raise Material Indent</span>
        </button>
      </div>

      {/* Stock Cards Grid */}
      <div className="space-y-4">
        <h2 className="text-base font-black text-black">Live Depot Staging Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryStock.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-neutral-200 rounded-3xl p-5 space-y-4 shadow-sm hover:border-red-600 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-black text-red-600 block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-black text-black mt-0.5">{item.name}</h3>
                </div>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded font-extrabold ${
                    item.status === 'HEALTHY'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : item.status === 'LOW_STOCK'
                      ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                      : 'bg-red-100 text-red-800 border border-red-300 animate-pulse'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-neutral-50 p-3 rounded-2xl border border-neutral-200">
                <div>
                  <span className="text-[10px] text-neutral-500 font-bold block">Available in Yard:</span>
                  <span className="text-lg font-black font-mono text-black">
                    {item.inStock} {item.unit}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 font-bold block">Reserved for Site:</span>
                  <span className="text-lg font-black font-mono text-red-600">
                    {item.reserved} {item.unit}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsIndentModalOpen(true)}
                className="w-full py-2 bg-neutral-100 hover:bg-red-600 hover:text-white text-black rounded-xl text-xs font-bold border border-neutral-300 transition flex items-center justify-center gap-1.5"
              >
                <span>Request Patna Works Replenishment</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Indents Requisition Queue */}
      <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <div>
            <h2 className="text-base font-black text-black">Material Indents Log (Patna HQ Queue)</h2>
            <p className="text-xs text-neutral-600 font-medium">Status tracking from central manufacturing to site delivery</p>
          </div>
        </div>

        <div className="space-y-3">
          {indents.map((indent) => (
            <div
              key={indent.id}
              className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-3 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                    {indent.indentNo}
                  </span>
                  <span className="text-neutral-800 font-bold">{indent.branchName}</span>
                </div>
                <span
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-lg font-extrabold ${
                    indent.status === 'APPROVED'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : indent.status === 'PENDING_APPROVAL'
                      ? 'bg-red-100 text-red-800 border border-red-300'
                      : 'bg-blue-100 text-blue-800 border border-blue-300'
                  }`}
                >
                  ● {indent.status}
                </span>
              </div>

              <p className="text-sm font-bold text-black">{indent.purpose}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {indent.items?.map((it: any, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-[11px] font-bold text-neutral-800"
                  >
                    {it.quantity} {it.unit} • {it.productName} ({it.urgency})
                  </span>
                ))}
              </div>

              {indent.dispatchDetails && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-[11px] font-medium">
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
