'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  PhoneCall,
  Send,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Factory,
  ArrowRight,
  Clock,
  Award
} from 'lucide-react';

export default function DelayedRFQPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'MS Shuttering Plates (13kg / 20kg / 27kg / 35kg)',
    quantity: '',
    location: ''
  });

  useEffect(() => {
    // Check if user already dismissed the popup in this session
    const isDismissed = sessionStorage.getItem('jmk_rfq_popup_dismissed');
    if (isDismissed) return;

    // Trigger popup after exactly 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('jmk_rfq_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send RFQ lead to API
      await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          product: formData.product,
          message: `Auto Popup Request: Qty: ${formData.quantity || 'Not specified'}, Location: ${formData.location || 'Not specified'}`,
          source: '10-Second Auto Popup'
        })
      });
    } catch (err) {
      console.error('Error submitting popup RFQ:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    sessionStorage.setItem('jmk_rfq_popup_dismissed', 'true');

    setTimeout(() => {
      setIsOpen(false);
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-300">
      <div 
        className="relative bg-white rounded-3xl border-2 border-red-600 max-w-lg w-full overflow-hidden shadow-2xl space-y-0 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white p-5 sm:p-6 relative border-b border-neutral-800">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-red-600 text-white p-1.5 rounded-full transition"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-[11px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Patna Central Works • Direct Factory Pricing</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
            Get Instant Quotation & Rate Sheet
          </h3>
          <p className="text-xs text-neutral-300 font-medium mt-1">
            Connect directly with JMK Engineering fabrication desk. Guaranteed callback in 15 minutes.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-300 pt-3 border-t border-neutral-800 mt-3 font-semibold">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>IS 2062 & MoRTH Certified</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Direct Ex-Factory Rates</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 bg-neutral-50/50">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-black text-slate-900">Quotation Request Received!</h4>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto font-medium">
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our Patna sales engineer will call you shortly on <strong>{formData.phone}</strong> with the complete price list and BOQ datasheet.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:07942556842"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:bg-red-700 transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now: 07942556842</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Festive 10% Discount Callout */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-red-500/10 to-amber-500/15 border border-amber-400/50 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-amber-300 overflow-hidden shrink-0 shadow-sm">
                  <img
                    src="/images/vishwakarma-puja.jpg"
                    alt="Lord Vishwakarma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] leading-snug">
                  <strong className="text-amber-800 font-bold block">✨ Shubh Vishwakarma Puja Offer:</strong>
                  <span className="text-neutral-800">Celebrating Vishwakarma Puja: Flat 10% savings on your initial fabrication order. (Code: <strong className="text-red-700 font-mono">JMKVISHWA10</strong>)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-neutral-800 uppercase tracking-wider">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-neutral-800 uppercase tracking-wider">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black text-neutral-800 uppercase tracking-wider">
                  Select Product Required <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-neutral-300 rounded-xl text-xs text-black font-semibold focus:outline-none focus:border-red-600 shadow-sm"
                >
                  <option value="MS Shuttering Plates (13kg / 20kg / 27kg / 35kg)">MS Shuttering Plates & Formwork</option>
                  <option value="Cuplock Scaffolding System (Verticals & Ledgers)">Cuplock Scaffolding System</option>
                  <option value="CC Cribs & C-Crib Heavy Duty Staging Towers">CC Cribs & C-Cribs Staging Towers</option>
                  <option value="POT-PTFE Bridge Bearings & Elastomeric Pads">POT-PTFE Bridge Bearings & Rubber Pads</option>
                  <option value="Strip Seal & MS Highway Expansion Joints">Strip Seal Bridge Expansion Joints</option>
                  <option value="Heavy Bridge Drainage Spouts & Hoppers">Bridge Drainage Spouts (MoRTH / Cast Iron / GI)</option>
                  <option value="Heavy Bridge Crash Barrier Moulds (3m)">Crash Barrier Moulds & Parapets</option>
                  <option value="Heavy Duty Acro Span Centering Spans (15ft / 18ft)">Acro Spans & Centering Sheets</option>
                  <option value="Adjustable Prop Jacks & U Head Jacks">Scaffolding Prop Jacks & U-Jacks</option>
                  <option value="Road & Highway Retro-Reflective Sign Boards">Road & Highway Sign Boards</option>
                  <option value="Custom Infrastructure Fabrication (BOQ Quote)">Custom Structural Steel Fabrication</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-neutral-800 uppercase tracking-wider">
                    Quantity / Tonnage (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Pcs / 10 MT"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-black text-neutral-800 uppercase tracking-wider">
                    Site Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Patna, Ranchi, Delhi"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 shadow-sm"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 bg-red-600 hover:bg-red-700 active:scale-98 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Get Free Quotation Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href="tel:07942556842"
                  className="w-full sm:w-auto py-3 px-4 bg-neutral-200 hover:bg-neutral-300 text-slate-900 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                  <span>07942556842</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
