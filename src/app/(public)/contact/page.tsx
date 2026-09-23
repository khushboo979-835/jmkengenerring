'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  UploadCloud,
  ChevronRight,
  ExternalLink,
  Truck,
  User,
  PhoneCall,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  Navigation,
  FileText,
  BadgeCheck,
  Check
} from 'lucide-react';
import { SEED_BRANCHES, SEED_PRODUCTS } from '@/lib/seedData';

export default function ContactPage() {
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Bihar');
  const [selectedProduct, setSelectedProduct] = useState(SEED_PRODUCTS[0]?.name || 'MS Shuttering Plates & Centering Sheets');
  const [quantity, setQuantity] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [boqFileName, setBoqFileName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedRfqNo, setSubmittedRfqNo] = useState<string | null>(null);
  const [activeDepotCity, setActiveDepotCity] = useState('Patna');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone || !projectDetails) return;

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
              category: 'Direct Web Inquiry',
              quantity: quantity || 'Custom BOQ Tonnage',
            },
          ],
          projectDetails: `${projectDetails} ${boqFileName ? `[Attached Drawing: ${boqFileName}]` : ''}`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmittedRfqNo(data.rfq?.rfqNo || 'RFQ-' + Math.floor(100000 + Math.random() * 900000));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen">
      {/* 1. Top Hero Section */}
      <section className="relative bg-white border-b border-neutral-200 overflow-hidden py-12 lg:py-16">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 font-bold mb-6">
            <Link href="/" className="hover:text-red-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-red-600 font-black">Contact & Official Works Desk</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span>Direct Works & National Logistics Desk</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                Get in Touch with <span className="text-red-600">JMK Engineering & Developers</span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl font-medium leading-relaxed">
                Connect directly with our engineering sales team, request instant BOQ estimates, schedule factory inspections, or locate our 4 strategic national dispatch depots.
              </p>
            </div>

            {/* Response Rate & Verification Floating Badge */}
            <div className="lg:col-span-4 bg-gradient-to-br from-neutral-900 to-slate-900 text-white p-6 rounded-3xl shadow-xl border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-neutral-300">Verified IndiaMART Supplier</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-black font-mono">
                  TrustSEAL
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-emerald-400">82%</span>
                <span className="text-xs text-neutral-300 font-bold">Call Response Rate</span>
              </div>
              <p className="text-xs text-neutral-400 font-medium">
                Our sales desk answers 8 out of 10 incoming client queries within 15 minutes.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:+917493916194"
                  className="flex-1 py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black text-center transition flex items-center justify-center gap-1.5 shadow-md shadow-red-600/30"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call +91 7493916194</span>
                </a>
                <a
                  href="https://wa.me/917493916194?text=Hello%20JMK%20Engineering,%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-black text-center transition flex items-center justify-center gap-1.5 shadow-md shadow-[#25D366]/30"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Contact Information Cards Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Official Address */}
          <div className="bg-white p-6 rounded-3xl border-2 border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">Registered Office & Works</h3>
                <span className="text-[11px] font-black text-red-600 uppercase tracking-wider block mt-0.5">Patna, Bihar</span>
              </div>
              <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                Mauza Jhali, Circle Kankarbagh 50b, Ward 55 P.No- 2167078, Jakariyapur, Trinity Global School, Road No. 3, Krishna Niketan Road, Patna - 800007, Bihar, India
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Trinity+Global+School+Jakariyapur+Patna+800007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 hover:text-red-700 pt-2 border-t border-neutral-100"
            >
              <span>Get GPS Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Phone Numbers */}
          <div className="bg-white p-6 rounded-3xl border-2 border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                <Phone className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">Official Call Support</h3>
                <span className="text-[11px] font-black text-emerald-600 uppercase tracking-wider block mt-0.5">Mon - Sat (8 AM - 8 PM)</span>
              </div>
              <div className="space-y-2 text-xs font-bold text-neutral-800">
                <div className="space-y-1">
                  <span className="text-[10px] text-neutral-500 uppercase block font-semibold">Direct Inquiry & Order Desk:</span>
                  <a href="tel:+917493916194" className="text-base font-black text-slate-950 hover:text-red-600 block">
                    +91 7493916194
                  </a>
                  <a href="tel:+918651010370" className="text-base font-black text-slate-950 hover:text-red-600 block">
                    +91 8651010370
                  </a>
                </div>
                <div className="pt-1">
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-2 py-0.5 rounded-full inline-block">
                    82% Instant Response Rate
                  </span>
                </div>
              </div>
            </div>
            <a
              href="tel:+917493916194"
              className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 hover:text-red-700 pt-2 border-t border-neutral-100"
            >
              <span>Instant Call Connect</span>
              <PhoneCall className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Email Communications */}
          <div className="bg-white p-6 rounded-3xl border-2 border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                <Mail className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">Official Email</h3>
                <span className="text-[11px] font-black text-red-600 uppercase tracking-wider block mt-0.5">Direct Correspondence</span>
              </div>
              <div className="space-y-2 text-xs font-medium text-neutral-800">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block font-bold">Official Email Address:</span>
                  <a href="mailto:jmkengineering2@gmail.com" className="font-black text-slate-950 hover:text-red-600 block text-sm mt-1">
                    jmkengineering2@gmail.com
                  </a>
                </div>
                <p className="text-[11px] text-neutral-500">
                  Send tender drawings, technical specifications, and purchase orders.
                </p>
              </div>
            </div>
            <a
              href="mailto:jmkengineering2@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 hover:text-red-700 pt-2 border-t border-neutral-100"
            >
              <span>Compose Email</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Corporate Governance & CEO */}
          <div className="bg-white p-6 rounded-3xl border-2 border-neutral-200/90 shadow-sm hover:border-red-500 hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">Corporate Entity</h3>
                <span className="text-[11px] font-black text-neutral-500 uppercase tracking-wider block mt-0.5">Proprietorship Firm</span>
              </div>
              <div className="space-y-1.5 text-xs font-medium text-neutral-800">
                <p>
                  <strong className="text-black font-black">CEO / Director:</strong> Ujjwal Kumar
                </p>
                <p>
                  <strong className="text-black font-black">Key Management:</strong> Pramila Devi
                </p>
                <p className="font-mono text-[11px]">
                  <strong className="text-black font-black">GSTIN:</strong> 10BIEPD2766D2ZX
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-neutral-100 flex items-center gap-1 text-[11px] text-emerald-700 font-black">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Government Registered</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Strategic National Depots Interactive Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: RFQ & Tender BOQ Form (Span 7) */}
          <div className="lg:col-span-7 bg-white border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-2">
                <span>Fast Response Engine</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">
                Submit Tender BOQ & Instant Quotation Inquiry
              </h2>
              <p className="text-xs text-neutral-600 mt-1 font-medium">
                Directly submitted to our central engineering queue in Patna. Guaranteed estimate response within 2 hours.
              </p>
            </div>

            {submittedRfqNo ? (
              <div className="py-10 text-center space-y-4 bg-red-50/50 rounded-2xl p-6 border border-red-100">
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 border-2 border-red-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-slate-950">Quotation Inquiry Transmitted!</h3>
                <p className="text-xs text-neutral-700 max-w-md mx-auto font-medium">
                  Your reference ID is <strong className="font-mono text-red-600 bg-white px-2.5 py-1 rounded-lg border border-neutral-300 font-black text-sm">{submittedRfqNo}</strong>. Our senior technical estimator will contact you with commercial terms and freight schedule.
                </p>
                <button
                  onClick={() => setSubmittedRfqNo(null)}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-xs font-black text-white uppercase tracking-wider shadow-md transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Er. Rajesh Kumar"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Company / Contractor Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., L&T Heavy Civil / Afcons / NHAI Contractor"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Product Line
                    </label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    >
                      {SEED_PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Estimated Quantity / Tonnage
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 500 Pcs / 40 Metric Tonnes"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      Delivery Destination City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Patna, Delhi, Lucknow, Mumbai, Kolkata"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Bihar, UP, West Bengal, Maharashtra"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-900 font-black mb-1.5 uppercase text-[11px]">
                    Technical Specifications & Requirements *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Specify thickness, steel grade, load requirements, MoRTH/IRC specifications, or delivery schedule..."
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 focus:bg-white transition"
                  ></textarea>
                </div>

                {/* File Upload simulator */}
                <div className="p-4 bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-800 block">
                        {boqFileName ? boqFileName : 'Upload BOQ Drawing (PDF, DWG, Excel, ZIP)'}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-medium">Up to 25 MB supported</span>
                    </div>
                  </div>
                  <label className="cursor-pointer px-4 py-1.5 bg-neutral-900 text-white hover:bg-red-600 rounded-xl text-xs font-bold transition shadow-sm">
                    Browse File
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setBoqFileName(e.target.files[0].name);
                      }}
                    />
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-red-600 flex items-center gap-1.5 font-mono font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>GSTIN: 10BIEPD2766D2ZX</span>
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.02]"
                  >
                    <span>{submitting ? 'Transmitting Inquiry...' : 'Submit Inquiry to Patna HQ'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Regional Depots & Interactive Location (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 4 Strategic Depots Switcher */}
            <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-5">
              <div className="space-y-1 border-b border-neutral-200 pb-3">
                <span className="text-xs font-black text-red-600 uppercase tracking-wider">Logistics Network</span>
                <h3 className="text-xl font-black text-slate-950">4 Strategic National Depots</h3>
                <p className="text-xs text-neutral-600 font-medium">Select a depot to view branch head, address, and live status.</p>
              </div>

              {/* Depot Selector Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {SEED_BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveDepotCity(b.city)}
                    className={`p-3 rounded-2xl text-left border-2 transition ${
                      activeDepotCity === b.city
                        ? 'bg-red-600 border-red-600 text-white shadow-md'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 hover:border-red-400'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-black block ${activeDepotCity === b.city ? 'text-white' : 'text-red-600'}`}>
                      {b.code}
                    </span>
                    <span className="text-xs font-black block mt-0.5">{b.city}</span>
                  </button>
                ))}
              </div>

              {/* Active Depot Details */}
              {(() => {
                const depot = SEED_BRANCHES.find((b) => b.city === activeDepotCity) || SEED_BRANCHES[0];
                const isPatna = depot.city === 'Patna';
                return (
                  <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-5 space-y-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-black text-red-600 block">
                        {isPatna ? 'Registered Central Works & HQ' : 'Regional Logistics Depot'}
                      </span>
                      <h4 className="text-sm font-black text-slate-950 mt-0.5">{depot.name}</h4>
                    </div>

                    <div className="space-y-2.5 text-neutral-700 font-medium">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>
                          {isPatna
                            ? 'Mauza Jhali, Circle Kankarbagh 50b, Ward 55 P.No- 2167078, Jakariyapur, Trinity Global School, Road No. 3, Krishna Niketan Road, Patna - 800007, Bihar'
                            : depot.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-red-600 shrink-0" />
                        <span>
                          <strong className="text-slate-950">+91 7493916194 / +91 8651010370</strong> (Incharge: <strong className="text-slate-950">{depot.adminName}</strong>)
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Operating Hours: Mon - Sat: 08:00 AM - 08:00 PM</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px]">
                      <span className="text-neutral-600 font-bold">
                        Buffer Workers: <strong className="text-slate-950">{depot.activeWorkersCount} Staff</strong>
                      </span>
                      <span className="text-emerald-700 font-black flex items-center gap-1 font-mono">
                        <Check className="w-3.5 h-3.5" />
                        <span>Active Depot</span>
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Google Map Embedded Card */}
            <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-3 overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-red-600 uppercase tracking-wider block">GPS Location</span>
                  <h3 className="text-base font-black text-slate-950">Patna Central Works Map</h3>
                </div>
                <a
                  href="https://maps.google.com/?q=Trinity+Global+School+Jakariyapur+Patna+800007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-black hover:bg-red-600 hover:text-white transition flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>

              <div className="w-full h-48 rounded-2xl overflow-hidden border-2 border-neutral-200 bg-neutral-100 relative">
                <iframe
                  title="JMK Engineering Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Jakariyapur+Trinity+Global+School+Patna+800007&t=&z=14&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
              <p className="text-[11px] text-neutral-500 font-medium">
                Near Trinity Global School, Road No. 3, Krishna Niketan Road, Jakariyapur, Patna - 800007
              </p>
            </div>

            {/* Social Media Channels Box */}
            <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-black text-red-600 uppercase tracking-wider block">Official Channels</span>
                <h3 className="text-base font-black text-slate-950">Follow JMK Engineering</h3>
                <p className="text-xs text-neutral-600 font-medium">
                  Stay updated with live structural dispatches, bridge bearing testing, and site installations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61585228837362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#1877F2] text-white hover:bg-[#0d65d9] transition group shadow-md shadow-[#1877F2]/20 hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Facebook className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-black block">Facebook</span>
                    <span className="text-[10px] text-white/80 block">Official Page</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/jmk_engineering_developer_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-95 transition group shadow-md shadow-[#dc2743]/20 hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black block">Instagram</span>
                    <span className="text-[10px] text-white/80 block">@jmk_engineering</span>
                  </div>
                </a>

                <a
                  href="https://in.pinterest.com/uuujjwalraj9999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#E60023] text-white hover:bg-[#cc001f] transition group shadow-md shadow-[#E60023]/20 hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.177.271-.407.165-1.515-.705-2.464-2.916-2.464-4.698 0-3.829 2.785-7.348 8.035-7.348 4.218 0 7.496 3.007 7.496 7.021 0 4.191-2.642 7.565-6.31 7.565-1.232 0-2.391-.641-2.788-1.399l-.759 2.894c-.274 1.055-1.018 2.378-1.516 3.195C9.539 23.829 10.748 24 12.017 24c6.627 0 12-5.373 12-12S18.644 0 12.017 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-black block">Pinterest</span>
                    <span className="text-[10px] text-white/80 block">Product Pins</span>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@jmkengineeringanddeveloper1626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#FF0000] text-white hover:bg-[#cc0000] transition group shadow-md shadow-[#FF0000]/20 hover:scale-105"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Youtube className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-black block">YouTube</span>
                    <span className="text-[10px] text-white/80 block">Videos & Site</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
