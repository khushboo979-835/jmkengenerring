'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Calculator,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Truck,
  PhoneCall,
  ArrowRight,
  Building,
  Scale,
  FileCheck,
  BadgePercent
} from 'lucide-react';
import gsap from 'gsap';

interface ProductQuoteOption {
  id: string;
  name: string;
  unit: string;
  basePrice: number;
  weightPerUnitKg: number;
  minQty: number;
}

const QUOTE_PRODUCTS: ProductQuoteOption[] = [
  { id: 'shuttering', name: '27 Kg MS Shuttering Plates (IS 2062)', unit: 'Pieces', basePrice: 1950, weightPerUnitKg: 27, minQty: 25 },
  { id: 'props', name: 'Scaffolding Adjustable Prop Jacks (IS 1161)', unit: 'Pieces', basePrice: 1250, weightPerUnitKg: 12, minQty: 50 },
  { id: 'joints', name: 'Strip Seal Bridge Expansion Joints', unit: 'Meters', basePrice: 2400, weightPerUnitKg: 35, minQty: 10 },
  { id: 'centering', name: '13 Kg Mild Steel Centering Sheets', unit: 'Pieces', basePrice: 950, weightPerUnitKg: 13, minQty: 50 },
  { id: 'bearings', name: 'POT-PTFE Bridge Bearings (IRC:83 Part III)', unit: 'Sets', basePrice: 12500, weightPerUnitKg: 85, minQty: 2 },
  { id: 'spouts', name: '12mm MS Bridge Drainage Spouts', unit: 'Pieces', basePrice: 1650, weightPerUnitKg: 18, minQty: 20 },
];

export default function HomeGetQuoteSection({ onOpenRFQ }: { onOpenRFQ: (productName?: string) => void }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductQuoteOption>(QUOTE_PRODUCTS[0]);
  const [quantity, setQuantity] = useState<number>(50);
  const [contractorName, setContractorName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation
  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.gsap-quote-item');
    if (!items || items.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const totalEstimatedWeightMt = ((selectedProduct.weightPerUnitKg * quantity) / 1000).toFixed(2);
  const estimatedCostInr = selectedProduct.basePrice * quantity;
  const discountedCostInr = Math.round(estimatedCostInr * 0.9);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setIsSubmitting(true);
    try {
      await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: contractorName || 'Valued Contractor',
          phone: phoneNumber,
          city: destinationCity || 'Not Specified',
          projectDetails: `BOQ Estimate Request: ${quantity} ${selectedProduct.unit} of ${selectedProduct.name} (~${totalEstimatedWeightMt} MT, Est: ₹${discountedCostInr.toLocaleString('en-IN')} with 10% Vishwakarma Puja discount)`,
          selectedProducts: [selectedProduct.name],
          source: 'Home Calculator (Festive 10% Offer)'
        })
      });
    } catch (err) {
      console.error('Failed to submit quote request:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-neutral-100/70 text-black px-4 sm:px-8 border-b-2 border-neutral-200 relative overflow-hidden">
      {/* Background Subtle Geometric Polygons */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full text-neutral-300">
          <polygon points="400,0 200,50 350,250 400,300" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 gsap-quote-item">
          <div className="inline-flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-widest bg-red-100/80 border border-red-200 px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Instant BOQ & Tonnage Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Get a <span className="text-red-600">Free Instant Quote</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium max-w-xl mx-auto leading-relaxed">
            Calculate your project tonnage and receive competitive ex-factory pricing from Patna Central Works within 2 hours.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* 2-Column Interactive Estimator & RFQ Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Live Interactive Calculator */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between gsap-quote-item">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-red-600" />
                  <h3 className="text-base sm:text-lg font-black text-black">
                    Step 1: Select Material & Quantity
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-700 font-black flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ex-Factory Patna</span>
                </span>
              </div>

              {/* Product Option Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-black text-neutral-700 uppercase tracking-wider block">
                  Select Product Category:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {QUOTE_PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => {
                        setSelectedProduct(prod);
                        if (quantity < prod.minQty) setQuantity(prod.minQty);
                      }}
                      className={`p-3.5 rounded-2xl text-left text-xs font-bold transition-all flex items-start justify-between border-2 ${
                        selectedProduct.id === prod.id
                          ? 'bg-red-50/70 border-red-600 text-black shadow-md ring-1 ring-red-600'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400'
                      }`}
                    >
                      <div>
                        <div className="text-black font-black line-clamp-1">{prod.name}</div>
                        <div className="text-[11px] text-red-600 font-bold mt-0.5">₹{prod.basePrice.toLocaleString('en-IN')} / {prod.unit}</div>
                      </div>
                      <span className="text-[10px] font-mono font-black text-neutral-700 bg-white border border-neutral-200 px-2 py-0.5 rounded shadow-sm">
                        {prod.weightPerUnitKg}kg
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="space-y-3 bg-neutral-50 p-5 rounded-2xl border-2 border-neutral-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-neutral-800 uppercase tracking-wider">
                    Quantity Required ({selectedProduct.unit}):
                  </label>
                  <span className="text-xl font-black text-red-600 font-mono">
                    {quantity} {selectedProduct.unit}
                  </span>
                </div>

                <input
                  type="range"
                  min={selectedProduct.minQty}
                  max={selectedProduct.minQty * 20}
                  step={5}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />

                <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono font-bold">
                  <span>Min Order: {selectedProduct.minQty} {selectedProduct.unit}</span>
                  <span>Bulk Order: {selectedProduct.minQty * 20}+ {selectedProduct.unit}</span>
                </div>
              </div>
            </div>

            {/* Live Calculation Preview Strip */}
            <div className="pt-4 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200 text-center">
                <div className="text-[10px] text-neutral-500 font-black uppercase">Estimated Tonnage</div>
                <div className="text-base font-black text-black mt-0.5">{totalEstimatedWeightMt} MT</div>
              </div>

              <div className="p-3 bg-amber-50/80 rounded-2xl border-2 border-amber-300 text-center relative overflow-hidden">
                <div className="text-[10px] text-amber-800 font-black uppercase flex items-center justify-center gap-1">
                  <span>🎉 10% Festive Total</span>
                </div>
                <div className="text-base font-black text-red-600 mt-0.5">
                  ₹{discountedCostInr.toLocaleString('en-IN')}
                </div>
                <div className="text-[10px] text-neutral-400 line-through font-mono font-bold">
                  ₹{estimatedCostInr.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200 text-center col-span-2 sm:col-span-1">
                <div className="text-[10px] text-neutral-500 font-black uppercase">Batch Lead Time</div>
                <div className="text-base font-black text-emerald-700 mt-0.5">24 - 48 Hours</div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Instant Quotation Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-neutral-200 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between gsap-quote-item">
            {submitted ? (
              <div className="text-center py-12 space-y-4 my-auto animate-in fade-in zoom-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-300 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-black">Quotation Request Received!</h3>
                <p className="text-xs sm:text-sm text-neutral-700 max-w-sm mx-auto leading-relaxed font-medium">
                  Thank you, <strong className="text-black">{contractorName || 'Valued Contractor'}</strong>. Our Patna technical estimation desk will call you at <strong className="text-red-600">{phoneNumber}</strong> within 2 hours with the formal stamped BOQ including your <strong>10% Vishwakarma Puja Rebate</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-black uppercase tracking-wider transition"
                >
                  Estimate Another Item
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 my-auto">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-red-600 tracking-wider">Step 2: Submit Details</span>
                  <h3 className="text-lg sm:text-xl font-black text-black">
                    Send Instant RFQ to Patna Works
                  </h3>
                </div>

                {/* Festive Offer Notice */}
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-red-500/10 to-amber-500/15 border border-amber-400/50 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-amber-300 overflow-hidden shrink-0 shadow-sm">
                    <img
                      src="/images/vishwakarma-puja.jpg"
                      alt="Lord Vishwakarma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <strong className="text-amber-800 font-bold block">✨ Vishwakarma Puja 10% Discount:</strong>
                    <span className="text-neutral-700">Celebrating Vishwakarma Puja: Flat 10% savings on your initial fabrication order. (Promo: <strong className="text-red-700 font-mono">JMKVISHWA10</strong>)</span>
                  </div>
                </div>

                <div className="space-y-3.5 text-left">
                  <div>
                    <label className="text-xs font-bold text-neutral-800 block mb-1">
                      Contractor / Company Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={contractorName}
                      onChange={(e) => setContractorName(e.target.value)}
                      placeholder="e.g. L&T Construction / Bihar State Roadways"
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-800 block mb-1">
                      Mobile / WhatsApp Number (Required):
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 94310 XXXXX"
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-800 block mb-1">
                      Delivery Site Location (City / State):
                    </label>
                    <input
                      type="text"
                      value={destinationCity}
                      onChange={(e) => setDestinationCity(e.target.value)}
                      placeholder="e.g. Patna, Ranchi, Varanasi, Kolkata..."
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-red-600 font-medium"
                    />
                  </div>
                </div>

                {/* Selected Item Summary Pill */}
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-700 space-y-1">
                  <div className="font-black text-black flex items-center justify-between">
                    <span>{selectedProduct.name}</span>
                    <span className="text-red-600 font-mono font-black">{quantity} {selectedProduct.unit}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono font-bold">
                    Estimated Gross Weight: ~{totalEstimatedWeightMt} MT | ISO Tested
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Instant Stamped Quote</span>
                  </button>

                  <a
                    href="tel:07942556842"
                    className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 hover:text-black rounded-xl font-black text-xs transition border border-neutral-300 flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                    <span>Or Call Patna Estimation Desk: 07942556842</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
