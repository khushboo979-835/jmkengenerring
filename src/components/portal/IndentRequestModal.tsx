'use client';

import React, { useState } from 'react';
import { X, Package, Send, AlertCircle, Plus, Trash2 } from 'lucide-react';
import { SEED_PRODUCTS, SeedProduct } from '@/lib/seedData';
import { AuthUser } from '@/lib/rbac';

interface IndentRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: AuthUser | null;
  onIndentCreated: () => void;
}

export default function IndentRequestModal({
  isOpen,
  onClose,
  user,
  onIndentCreated,
}: IndentRequestModalProps) {
  const [items, setItems] = useState<
    { productName: string; variant: string; quantity: number; unit: string; urgency: 'ROUTINE' | 'URGENT' | 'CRITICAL' }[]
  >([
    {
      productName: SEED_PRODUCTS[0]?.name || 'Mild Steel Centering Sheets',
      variant: 'MS Centering Sheet 20 Kg (1200x600mm)',
      quantity: 100,
      unit: 'Pcs',
      urgency: 'URGENT',
    },
  ]);

  const [purpose, setPurpose] = useState('');
  const [requiredByDate, setRequiredByDate] = useState(
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const addItem = () => {
    setItems([
      ...items,
      {
        productName: SEED_PRODUCTS[1]?.name || 'Iron Shuttering Plates',
        variant: 'Standard Variant',
        quantity: 50,
        unit: 'Pcs',
        urgency: 'ROUTINE',
      },
    ]);
  };

  const removeItem = (index: number) => {
    if (items.length <= 1) return;
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, val: any) => {
    const updated = [...items];
    (updated[index] as any)[field] = val;
    setItems(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!purpose || !requiredByDate || !items.length) {
      setErrorMsg('Please complete all indent requirements.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/indents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          branchId: user?.branchId || 'br_delhi',
          branchName: user?.branchName || 'Delhi NCR Depot',
          requestedBy: {
            id: user?.id || 'usr_staff',
            name: user?.name || 'Site Incharge',
            email: user?.email || 'staff@jmkengineering.com',
          },
          items,
          purpose,
          requiredByDate,
          notes,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onIndentCreated();
        onClose();
      } else {
        setErrorMsg(data.error || 'Failed to raise material indent');
      }
    } catch (err: any) {
      setErrorMsg('Server connection error.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-white">
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Raise Material Indent Requisition</h3>
              <p className="text-xs text-slate-400">
                Direct Dispatch Request to Patna Central Manufacturing Works
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {errorMsg && (
            <div className="p-3 bg-red-950/60 border border-red-800 rounded-xl text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Requested Items List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Required Products & Quantities
              </label>
              <button
                type="button"
                onClick={addItem}
                className="text-[11px] font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1 bg-orange-950/40 px-2.5 py-1 rounded-lg border border-orange-800"
              >
                <Plus className="w-3 h-3" />
                <span>+ Add Another Product</span>
              </button>
            </div>

            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 relative"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Product</label>
                    <select
                      value={item.productName}
                      onChange={(e) => updateItem(idx, 'productName', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                    >
                      {SEED_PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Variant / Size</label>
                    <input
                      type="text"
                      placeholder="e.g., 20 Kg Plate / 3.5m Prop"
                      value={item.variant}
                      onChange={(e) => updateItem(idx, 'variant', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 items-center">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Quantity</label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateItem(idx, 'quantity', parseInt(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Unit</label>
                    <select
                      value={item.unit}
                      onChange={(e) => updateItem(idx, 'unit', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                    >
                      <option value="Pcs">Pcs</option>
                      <option value="Sets">Sets</option>
                      <option value="Running Meters">Running Meters</option>
                      <option value="Metric Tonnes">Metric Tonnes</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Urgency</label>
                    <select
                      value={item.urgency}
                      onChange={(e) => updateItem(idx, 'urgency', e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
                    >
                      <option value="ROUTINE">Routine Stock</option>
                      <option value="URGENT">Urgent Staging</option>
                      <option value="CRITICAL">Critical Pour Stop</option>
                    </select>
                  </div>
                </div>

                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    className="absolute top-2 right-2 text-slate-500 hover:text-red-400 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Site Requirement Date *</label>
              <input
                type="date"
                required
                value={requiredByDate}
                onChange={(e) => setRequiredByDate(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Site Package / Section</label>
              <input
                type="text"
                placeholder="e.g., Flyover Pier 4A Deck Pouring"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Special Transport / Crane Offloading Instructions</label>
            <textarea
              rows={2}
              placeholder="e.g., Multi-axle trailer accessible; requires 5-ton Hydra offloading crane on site..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
            ></textarea>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-400 hover:text-white rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold shadow-md flex items-center gap-1.5 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitting ? 'Transmitting...' : 'Send Indent to Patna HQ'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
