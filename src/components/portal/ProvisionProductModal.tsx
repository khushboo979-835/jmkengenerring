'use client';

import React, { useState } from 'react';
import { X, Plus, ShieldCheck, CheckCircle2, Factory, Layers, Sparkles } from 'lucide-react';

interface ProvisionProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (productData: any) => void;
}

export default function ProvisionProductModal({
  isOpen,
  onClose,
  onSuccess
}: ProvisionProductModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'shuttering',
    materialGrade: 'IS 2062 Grade E250 / Fe 410',
    dimensions: '1200 x 600 mm',
    gaugeThickness: '3.15 mm',
    unitWeight: '27.0 Kg',
    loadCapacity: '20.0 MT',
    targetBranch: 'br_patna_hq',
    initialStockTons: '10.0',
    boqProjectCode: 'NHAI-PKG-4-GANGA-BRIDGE',
    unitRate: '₹ 2,850',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess(formData);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white text-black rounded-3xl shadow-2xl border-2 border-neutral-200 overflow-hidden">
        {/* Header */}
        <div className="bg-black text-white p-6 border-b-4 border-red-600 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black shadow-lg">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-red-600/30 text-red-400 px-2.5 py-0.5 rounded border border-red-500/30">
                  HQ Command Desk
                </span>
                <span className="text-xs text-neutral-400 font-mono">EST. 2021</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight mt-0.5">
                Provision New Product / BOQ Line Item
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-black">
              Product Successfully Provisioned!
            </h3>
            <p className="text-xs text-neutral-600 max-w-md mx-auto font-medium">
              New industrial line item <strong>{formData.name}</strong> has been created with Mill Test specification standards and synced to all 4 regional branch stock nodes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Name */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Product / Specification Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Heavy Duty Fe 410 Steel Shuttering Soldier Plate"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Engineering Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                >
                  <option value="shuttering">Shuttering & Centering Plates</option>
                  <option value="scaffolding">Scaffolding Jack & Props</option>
                  <option value="joints">Expansion Joints</option>
                  <option value="bearings">Bridge Bearings (POT-PTFE / Elastomeric)</option>
                  <option value="drainage">MS / Cast Iron Drainage Spouts</option>
                  <option value="h-frame">H-Frame Heavy Load Staging</option>
                </select>
              </div>

              {/* Material Standard */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Material Grade / Standard *
                </label>
                <input
                  type="text"
                  required
                  value={formData.materialGrade}
                  onChange={(e) => setFormData({ ...formData, materialGrade: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>

              {/* Dimensions */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Standard Dimensions *
                </label>
                <input
                  type="text"
                  required
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>

              {/* Gauge Thickness */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Gauge / Plate Thickness *
                </label>
                <input
                  type="text"
                  required
                  value={formData.gaugeThickness}
                  onChange={(e) => setFormData({ ...formData, gaugeThickness: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>

              {/* Unit Weight */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Unit Weight (Kg)
                </label>
                <input
                  type="text"
                  value={formData.unitWeight}
                  onChange={(e) => setFormData({ ...formData, unitWeight: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>

              {/* Load Capacity */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Design Load Capacity
                </label>
                <input
                  type="text"
                  value={formData.loadCapacity}
                  onChange={(e) => setFormData({ ...formData, loadCapacity: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>

              {/* Target Branch Assignment */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Target Stock Depot *
                </label>
                <select
                  value={formData.targetBranch}
                  onChange={(e) => setFormData({ ...formData, targetBranch: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                >
                  <option value="br_patna_hq">Patna HQ Central Works (Bihar)</option>
                  <option value="br_delhi">Delhi NCR Regional Logistics Depot</option>
                  <option value="br_mumbai">Mumbai Western Logistics Hub</option>
                  <option value="br_kolkata">Kolkata Eastern Logistics Depot</option>
                </select>
              </div>

              {/* Initial Stock Tons */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-black uppercase tracking-wider block">
                  Initial Allocation (Tons)
                </label>
                <input
                  type="text"
                  value={formData.initialStockTons}
                  onChange={(e) => setFormData({ ...formData, initialStockTons: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 focus:border-red-600 rounded-xl text-xs font-bold text-black outline-none transition"
                />
              </div>
            </div>

            {/* Compliance Note */}
            <div className="p-3 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center gap-2 text-xs text-neutral-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
              <span>
                Automated Mill Test Certificate (MTC) template will be generated with batch traceability for this provisioned line.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-200">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black rounded-xl text-xs font-bold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>{isSubmitting ? 'Provisioning Line...' : 'Provision BOQ Line'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
