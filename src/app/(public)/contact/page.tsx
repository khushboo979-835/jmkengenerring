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
  Facebook,
  Instagram
} from 'lucide-react';
import { SEED_BRANCHES, SEED_PRODUCTS } from '@/lib/seedData';

export default function ContactPage() {
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Bihar');
  const [selectedProduct, setSelectedProduct] = useState(SEED_PRODUCTS[0]?.name || '');
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
        setSubmittedRfqNo(data.rfq?.rfqNo || 'RFQ-2024-CONFIRMED');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen py-10 px-4 sm:px-8 space-y-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-neutral-600 font-bold">
          <Link href="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-red-600">Contact & Regional Logistics Depots</span>
        </div>

        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <span>Direct Works Sales Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Connect with <span className="text-red-600">JMK Engineering & Developers</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-700 max-w-2xl font-medium">
            Direct coordination for contractor tenders, BOQ estimation, sample inspections, and multi-state dispatch.
          </p>
        </div>

        {/* Main 2-Column: Form & Regional Depot Locator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RFQ & Drawing Submission Engine Form */}
          <div className="lg:col-span-7 bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <h2 className="text-xl font-black text-black">
                Submit Tender BOQ & Instant Quotation Inquiry
              </h2>
              <p className="text-xs text-neutral-600 mt-1 font-medium">
                Routed directly to Patna Central Works sales queue. Guaranteed response within 2 hours.
              </p>
            </div>

            {submittedRfqNo ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 border-2 border-red-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-black">Quotation Inquiry Transmitted!</h3>
                <p className="text-xs text-neutral-700 max-w-md mx-auto font-medium">
                  Your reference ID is <strong className="font-mono text-red-600 bg-white px-2 py-0.5 rounded border border-neutral-300 font-black">{submittedRfqNo}</strong>. Our senior technical estimator will call you with commercial terms and freight schedule.
                </p>
                <button
                  onClick={() => setSubmittedRfqNo(null)}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-xl text-xs font-black text-white uppercase tracking-wider shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Er. Rajesh Kumar"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Company / Contractor Name</label>
                    <input
                      type="text"
                      placeholder="e.g., L&T Heavy Civil / Afcons Infra"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Product Line</label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    >
                      {SEED_PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Estimated Quantity / Tonnage</label>
                    <input
                      type="text"
                      placeholder="e.g., 500 Pcs / 40 Metric Tonnes"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">Delivery Destination City</label>
                    <input
                      type="text"
                      placeholder="e.g., Patna, Delhi, Mumbai, Kolkata"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-black mb-1 uppercase">State</label>
                    <input
                      type="text"
                      placeholder="e.g., Bihar, UP, Maharashtra"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black font-black mb-1 uppercase">Technical Specs & Requirements *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide thickness details, load capacity, IRC/MoRTH test requirements, or delivery schedule..."
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600"
                  ></textarea>
                </div>

                {/* Simulated file upload */}
                <div className="p-3.5 bg-white border-2 border-dashed border-neutral-300 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UploadCloud className="w-5 h-5 text-red-600" />
                    <span className="text-[11px] text-neutral-600 font-medium">
                      {boqFileName ? boqFileName : 'Upload BOQ Drawing (PDF / DWG / Excel)'}
                    </span>
                  </div>
                  <label className="cursor-pointer px-3 py-1 bg-black text-white hover:bg-red-600 rounded-lg text-[11px] font-bold transition">
                    Browse
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setBoqFileName(e.target.files[0].name);
                      }}
                    />
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-red-600 flex items-center gap-1 font-mono font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    GSTIN: 10BIEPD2766D2ZX
                  </span>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-md transition flex items-center gap-2 disabled:opacity-50"
                  >
                    <span>{submitting ? 'Submitting...' : 'Send Inquiry to Patna HQ'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Regional Logistics Depots & Works Locator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-black text-red-600 uppercase tracking-wider">Logistics Network</span>
                <h3 className="text-xl font-black text-black">4 Strategic National Depots</h3>
                <p className="text-xs text-neutral-600 font-medium">Select depot to view contact in-charge and address.</p>
              </div>

              {/* Depot Selector Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {SEED_BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveDepotCity(b.city)}
                    className={`p-3 rounded-xl text-left border-2 transition ${
                      activeDepotCity === b.city
                        ? 'bg-red-600 border-red-600 text-white shadow-md'
                        : 'bg-white border-neutral-300 text-black hover:border-red-600'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-black block ${activeDepotCity === b.city ? 'text-white' : 'text-red-600'}`}>{b.code}</span>
                    <span className="text-xs font-black block mt-0.5">{b.city}</span>
                  </button>
                ))}
              </div>

              {/* Active Depot Details */}
              {(() => {
                const depot = SEED_BRANCHES.find((b) => b.city === activeDepotCity) || SEED_BRANCHES[0];
                return (
                  <div className="bg-white border-2 border-neutral-200 rounded-2xl p-5 space-y-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-black text-red-600 block">
                        {depot.city === 'Patna' ? 'Central Works & HQ' : 'Regional Logistics Depot'}
                      </span>
                      <h4 className="text-sm font-black text-black mt-0.5">{depot.name}</h4>
                    </div>

                    <div className="space-y-2 text-neutral-700 font-medium">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{depot.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{depot.contactNumber} (Incharge: <strong className="text-black">{depot.adminName}</strong>)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Operational: Mon - Sat: 08:00 AM - 08:00 PM</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px]">
                      <span className="text-neutral-600 font-bold">Buffer Workers: <strong className="text-black">{depot.activeWorkersCount} Staff</strong></span>
                      <span className="text-red-600 font-black font-mono">✓ Verified Active</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Social Media Channels Box */}
            <div className="bg-white border-2 border-neutral-200 rounded-3xl p-6 shadow-sm space-y-3">
              <span className="text-xs font-black text-red-600 uppercase tracking-wider block">Official Channels</span>
              <h3 className="text-lg font-black text-black">Connect With Us On Social Media</h3>
              <p className="text-xs text-neutral-600 font-medium">
                Follow our latest project dispatches, on-site civil fabrication videos, and company updates.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61585228837362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-neutral-50 hover:bg-[#1877F2] text-neutral-800 hover:text-white border-2 border-neutral-200 hover:border-[#1877F2] transition group shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-white group-hover:bg-white/20 text-[#1877F2] group-hover:text-white flex items-center justify-center shrink-0 border border-neutral-200 group-hover:border-transparent">
                    <Facebook className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-black block">Facebook</span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-white/80 block">Official Page</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/jmk_engineering_developer_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-neutral-50 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-neutral-800 hover:text-white border-2 border-neutral-200 hover:border-transparent transition group shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-white group-hover:bg-white/20 text-[#E1306C] group-hover:text-white flex items-center justify-center shrink-0 border border-neutral-200 group-hover:border-transparent">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black block">Instagram</span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-white/80 block">@jmk_engineering</span>
                  </div>
                </a>

                <a
                  href="https://in.pinterest.com/uuujjwalraj9999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-neutral-50 hover:bg-[#E60023] text-neutral-800 hover:text-white border-2 border-neutral-200 hover:border-[#E60023] transition group shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-white group-hover:bg-white/20 text-[#E60023] group-hover:text-white flex items-center justify-center shrink-0 border border-neutral-200 group-hover:border-transparent">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.177.271-.407.165-1.515-.705-2.464-2.916-2.464-4.698 0-3.829 2.785-7.348 8.035-7.348 4.218 0 7.496 3.007 7.496 7.021 0 4.191-2.642 7.565-6.31 7.565-1.232 0-2.391-.641-2.788-1.399l-.759 2.894c-.274 1.055-1.018 2.378-1.516 3.195C9.539 23.829 10.748 24 12.017 24c6.627 0 12-5.373 12-12S18.644 0 12.017 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-black block">Pinterest</span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-white/80 block">Product Pins</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
