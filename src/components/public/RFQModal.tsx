'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, UploadCloud, AlertCircle } from 'lucide-react';
import { SEED_PRODUCTS } from '@/lib/seedData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function RFQModal({ isOpen, onClose, defaultProduct }: RFQModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Bihar');
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct || SEED_PRODUCTS[0]?.name || '');
  const [quantity, setQuantity] = useState('100 Pcs');
  const [projectDetails, setProjectDetails] = useState('');
  const [boqFileName, setBoqFileName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedRfqNo, setSubmittedRfqNo] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!customerName || !email || !phone || !projectDetails) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          companyName,
          email,
          phone,
          city,
          state,
          selectedProducts: [
            {
              name: selectedProduct,
              category: 'General Inquiry',
              quantity: quantity || 'Standard Lot',
            },
          ],
          projectDetails: `${projectDetails} ${boqFileName ? `[Attached BOQ/Drawing: ${boqFileName}]` : ''}`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmittedRfqNo(data.rfq?.rfqNo || 'RFQ-2024-CONFIRMED');
      } else {
        setErrorMsg(data.error || 'Failed to submit quote request.');
      }
    } catch (err: any) {
      setErrorMsg('Connection error. Please try again or call Patna HQ.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border-2 border-neutral-300 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-black">
        {/* Header in Black & Red */}
        <div className="bg-black text-white p-6 relative border-b-2 border-red-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
                JMK
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  Request Instant Industrial Quotation
                </h3>
                <p className="text-xs text-neutral-300 font-medium">
                  Patna Central Works Direct Sales Queue • Fast 2-Hour Response
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Festive Offer Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-red-500/10 to-amber-500/15 border-2 border-amber-400/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-300 overflow-hidden shrink-0 shadow-sm">
              <img
                src="/images/vishwakarma-puja.jpg"
                alt="Lord Vishwakarma"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1">
                <span>🎉 Shubh Vishwakarma Puja Offer Applied!</span>
              </div>
              <p className="text-xs text-neutral-800 font-semibold mt-0.5">
                Celebrating Vishwakarma Puja: <strong className="text-red-700">Flat 10% savings</strong> on your initial fabrication order. (Promo Code: <span className="font-mono bg-amber-100 px-1.5 py-0.5 rounded text-red-700 font-black">JMKVISHWA10</span>)
              </p>
            </div>
          </div>

          {submittedRfqNo ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-100 border-2 border-red-600 flex items-center justify-center text-red-600 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-black">Quotation Request Dispatched!</h4>
              <p className="text-sm text-neutral-700 max-w-md mx-auto font-medium">
                Your request has been queued at our Patna Works Central Estimation Desk.
              </p>
              <div className="inline-block p-4 bg-neutral-100 rounded-xl border border-neutral-300 font-mono text-sm text-red-600 font-black">
                Tracking Reference: {submittedRfqNo}
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl text-xs uppercase"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-700 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g., Rajesh Kumar"
                    className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none font-medium text-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Company / Firm Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g., L&T Infra / Tata Projects"
                    className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none font-medium text-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none font-medium text-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@infra.com"
                    className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none font-medium text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Product Required *</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none bg-white font-medium text-black"
                  >
                    {SEED_PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-black mb-1 uppercase">Estimated Quantity</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g., 500 Sheets / 12 Sets"
                    className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none font-medium text-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1 uppercase">Project Details / Site Delivery Location *</label>
                <textarea
                  required
                  rows={3}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Provide project type (Flyover, Highway, Bridge, Metro), delivery site pin code, technical drawing specs..."
                  className="w-full px-3 py-2 text-sm border-2 border-neutral-300 focus:border-red-600 rounded-xl outline-none font-medium text-black"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black font-bold rounded-xl text-xs uppercase transition border border-neutral-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition shadow-md shadow-red-600/30 flex items-center gap-2"
                >
                  {submitting ? 'Submitting...' : 'Dispatch Request (RFQ)'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
