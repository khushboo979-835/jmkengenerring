'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  Send,
  Building2,
  Layers,
  ArrowRight,
  Truck,
  FileCheck,
  Clock,
  MapPin,
  Warehouse,
  CheckCircle,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  IndianRupee,
  Share2
} from 'lucide-react';
import { SeedProduct, SEED_PRODUCTS } from '@/lib/seedData';
import RFQModal from '@/components/public/RFQModal';

interface ProductDetailClientProps {
  product: SeedProduct;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.featuredImage || product.imageUrls[0] || '');
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Gallery fallback
  const galleryImages = product.imageUrls && product.imageUrls.length > 0
    ? product.imageUrls
    : [product.featuredImage];

  const currentDisplayImage = selectedImage || product.featuredImage;

  const relatedProducts = SEED_PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  const handleDownloadDatasheet = () => {
    setDownloadingPdf(true);
    
    // Trigger real download of technical datasheet / catalog PDF
    const link = document.createElement('a');
    link.href = '/JMK_Product_Catalog_ERP_Design_Spec.pdf';
    link.download = `JMK-${product.slug || 'Product'}-Technical-Datasheet.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingPdf(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4500);
    }, 800);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Structured Multi-Tenant Hub Inventory Data for this product
  const BRANCH_INVENTORY_MATRIX = [
    {
      branch: 'Delhi NCR Logistics Depot',
      code: 'DEL-DEP',
      location: 'IMT Manesar / Dwarka Expressway Corridor',
      stockTons: '5.2 Tons',
      status: 'In Stock',
      eta: '2 Days Delivery',
      color: 'text-slate-900',
    },
    {
      branch: 'Patna HQ Central Works',
      code: 'PAT-HQ',
      location: 'Didarganj Industrial Zone, Patna',
      stockTons: '12.8 Tons',
      status: 'Direct Works Buffer',
      eta: 'Immediate Dispatch (0 Days)',
      color: 'text-red-600',
    },
    {
      branch: 'Kolkata Eastern Depot',
      code: 'KOL-DEP',
      location: 'Dankuni Multi-Modal Terminal',
      stockTons: '7.0 Tons',
      status: 'In Stock',
      eta: '4 Days Delivery',
      color: 'text-slate-900',
    },
    {
      branch: 'Mumbai Western Hub',
      code: 'MUM-HUB',
      location: 'MIDC Taloja / JNPT Expressway Node',
      stockTons: '6.4 Tons',
      status: 'In Stock',
      eta: '3 Days Delivery',
      color: 'text-slate-900',
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Screen 2: Category Breadcrumb with Red/Black Branding */}
        <div className="flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600 font-bold border-b border-neutral-200 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <Link href="/products" className="hover:text-red-600 transition">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <Link
              href={`/products?category=${product.category}`}
              className="text-neutral-500 hover:text-red-600 transition"
            >
              {product.categoryLabel}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-red-600 font-black truncate max-w-[240px] sm:max-w-none">
              {product.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-slate-800 text-[11px] font-bold transition"
            >
              <Share2 className="w-3.5 h-3.5 text-neutral-600" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Specs'}</span>
            </button>
            <span className="text-[11px] font-mono text-neutral-500 bg-neutral-50 px-2 py-1 rounded border border-neutral-200">
              SKU: {product.id}
            </span>
          </div>
        </div>

        {/* Screen 2: Split-Screen Desktop Design (Visual Column vs Information Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT (Visual Column): Gallery of 3-4 High-Res Photos */}
          <div className="lg:col-span-5 space-y-4 sticky top-6">
            {/* Main Stage Image */}
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-neutral-200 shadow-xl h-80 sm:h-[420px] flex items-center justify-center p-6 group">
              <img
                src={currentDisplayImage}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-xl bg-black text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                  {product.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md border border-neutral-300 text-[10px] font-bold text-slate-800 shadow-sm flex items-center gap-1">
                  <Eye className="w-3 h-3 text-red-600" />
                  <span>High-Res Optical Spec</span>
                </span>
              </div>
            </div>

            {/* Thumbnail Carousel (3-4 Color-Accurate Real Images) */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all duration-200 bg-white p-1 shadow-sm ${
                      currentDisplayImage === img
                        ? 'border-red-600 scale-105 ring-2 ring-red-600/30'
                        : 'border-neutral-200 opacity-70 hover:opacity-100 hover:border-neutral-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Verified Trust & Compliance Badges Box */}
            <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span className="text-red-600 font-black flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GSTIN: 10BIEPD2766D2ZX</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded font-mono">
                  TrustSEAL Verified
                </span>
              </div>
              <p className="text-[11px] text-neutral-600 leading-relaxed font-medium">
                Fabricated directly at Patna Central Works. Supplied with Mill Test Certificates (MTC) certifying tensile yield and dimensional tolerances.
              </p>
            </div>
          </div>

          {/* RIGHT (Information Column): Bold Headline, Badges, Specs, Turnkey Uses & Stock Matrix */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Headline, Verified Badges & Inquiries */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono font-black text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                  Government & Infra Grade Specification
                </span>
                <span className="text-[11px] font-bold text-slate-700 bg-neutral-100 px-2.5 py-1 rounded-md border border-neutral-300">
                  Payment Protected • Direct Works
                </span>
              </div>

              {/* Bold Headline (Black) */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Price & Minimum Order Quantity */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="px-4 py-2 rounded-2xl bg-red-50 border-2 border-red-200 flex items-center gap-2">
                  <span className="text-xs text-neutral-500 font-bold uppercase">Price inquiries:</span>
                  <span className="text-base sm:text-lg font-black text-red-600 font-mono">
                    {product.price || '₹ Request Instant Quote'}
                  </span>
                </div>

                <div className="px-3.5 py-2 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-bold text-slate-700">
                  <span>MOQ: </span>
                  <strong className="text-slate-900">{product.minOrderQuantity}</strong>
                </div>
              </div>

              {/* Vishwakarma Puja Festive Offer Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-red-500/10 to-amber-500/15 border-2 border-amber-400/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-amber-300 overflow-hidden shrink-0 shadow-sm">
                  <img
                    src="/images/vishwakarma-puja.jpg"
                    alt="Lord Vishwakarma Puja"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🎉 Shubh Vishwakarma Puja Offer: Flat 10% OFF</span>
                  </div>
                  <p className="text-xs text-neutral-800 font-semibold mt-0.5">
                    Get <strong className="text-red-700 font-black">Flat 10% OFF</strong> on this product when requesting your formal BOQ quote today. (Use Code: <span className="font-mono bg-amber-100 px-1.5 py-0.5 rounded text-red-700 font-black">JMKVISHWA10</span>)
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed pt-2 font-medium">
                {product.fullDescription}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border-2 border-neutral-200">
                <span className="text-[10px] uppercase font-black text-neutral-500 block">Material Grade</span>
                <span className="text-xs font-black text-slate-900 mt-0.5 block font-mono">{product.materialGrade}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border-2 border-neutral-200">
                <span className="text-[10px] uppercase font-black text-neutral-500 block">Protective Coating</span>
                <span className="text-xs font-black text-slate-900 mt-0.5 block">{product.finishType}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border-2 border-neutral-200 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-black text-neutral-500 block">Quality Standard</span>
                <span className="text-xs font-black text-red-600 mt-0.5 block">MoRTH / IRC:83 / IS</span>
              </div>
            </div>

            {/* Screen 2 Mandate - Section 1: "Verified Specifications" (Clean Table Layout) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-red-600 uppercase tracking-wider">Section 1</span>
                  <h2 className="text-xl font-black text-slate-900">Verified Technical Specifications</h2>
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                  IS 2062 & Fe 410 Grade
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-100 text-slate-900 text-xs uppercase tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-4 font-black">Material Standard</th>
                      <th className="py-3 px-4 font-black">Gauge / Thickness</th>
                      <th className="py-3 px-4 font-black">Design Load Capacity</th>
                      <th className="py-3 px-4 font-black">Standard Dimensions</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-800 divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50 transition">
                      <td className="py-3.5 px-4 font-black text-slate-900 font-mono">
                        {product.materialGrade}
                      </td>
                      <td className="py-3.5 px-4 font-bold font-mono text-red-600">
                        {product.specs['Thickness'] || product.specs['Gauge'] || '2.0mm - 4.0mm'}
                      </td>
                      <td className="py-3.5 px-4 font-black font-mono text-slate-900">
                        {product.variants[0]?.loadCapacity || '20.0 Tonnes (Proof Loaded)'}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        {product.dimensions[0] || '1200 x 600 mm (Custom BOQ)'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Extended Property Specs Breakdown */}
              <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 bg-white shadow-sm mt-3">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-neutral-200">
                    {Object.entries(product.specs).map(([k, v], idx) => (
                      <tr key={idx} className="hover:bg-neutral-50 transition">
                        <td className="py-2.5 px-4 font-bold text-neutral-600 bg-neutral-50/70 w-1/3">
                          {k}
                        </td>
                        <td className="py-2.5 px-4 font-mono font-medium text-slate-900">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Screen 2 Mandate - Section 2: "Turnkey Project Uses" (Construction Context) */}
            <div className="space-y-3 pt-2">
              <div>
                <span className="text-xs font-black text-red-600 uppercase tracking-wider">Section 2</span>
                <h2 className="text-xl font-black text-slate-900">Turnkey Project Uses (Civil Engineering Context)</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-xs">
                    <Building2 className="w-4 h-4 text-red-600" />
                    <span>M25 / M35 Structural Concrete Casting</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                    Designed for heavy monolithic pours, floor 4+ slab staging, retaining walls, and high-pressure culvert formwork with zero plate deflection.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-xs">
                    <Truck className="w-4 h-4 text-red-600" />
                    <span>Bridge Pier Caps & Highway Viaducts</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                    Tested for extreme dynamic load distribution across elevated metro rail corridors, flyovers, and expressway segment assemblies.
                  </p>
                </div>
              </div>
            </div>

            {/* Screen 2 Mandate - Section 3: "Multi-Tenant Stock & Logistics Hubs" */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-red-600 uppercase tracking-wider">Section 3</span>
                  <h2 className="text-xl font-black text-slate-900">Multi-Tenant Stock & Logistics Hubs</h2>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">
                  ● Real-Time Node Telemetry
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border-2 border-neutral-200 bg-white shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-100 text-slate-900 text-xs uppercase tracking-wider border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-4 font-black">Regional Logistics Node</th>
                      <th className="py-3 px-4 font-black">Allocated Buffer</th>
                      <th className="py-3 px-4 font-black">Dispatch Status</th>
                      <th className="py-3 px-4 font-black">Site Lead Time (ETA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-slate-800">
                    {BRANCH_INVENTORY_MATRIX.map((hub, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50 transition">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          <div className="flex items-center gap-1.5">
                            <MapPin className={`w-3.5 h-3.5 ${hub.code === 'PAT-HQ' ? 'text-red-600' : 'text-slate-600'}`} />
                            <span>{hub.branch}</span>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500 pl-5">{hub.location}</span>
                        </td>
                        <td className="py-3 px-4 font-black font-mono text-slate-900">
                          {hub.stockTons}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            hub.code === 'PAT-HQ' ? 'bg-red-100 text-red-700 font-black' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {hub.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-800 font-mono">
                          {hub.eta}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Screen 2 Mandate - Action Buttons (Large Emerald Green Button + Secondary Outlined Button) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Large Emerald Green Button: [Request Bulk Pricing / RA Bill] */}
              <button
                onClick={() => setIsRfqOpen(true)}
                className="flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FileSpreadsheet className="w-5 h-5" />
                <span>Request Bulk Pricing / RA Bill</span>
              </button>

              {/* Secondary Outlined Button: [Download Technical Datasheets] */}
              <button
                onClick={handleDownloadDatasheet}
                disabled={downloadingPdf}
                className="py-4 px-6 bg-white hover:bg-neutral-100 text-slate-900 rounded-2xl font-bold text-xs sm:text-sm border-2 border-neutral-300 hover:border-red-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-5 h-5 text-red-600" />
                <span>{downloadingPdf ? 'Compiling PDF...' : 'Download Technical Datasheets'}</span>
              </button>
            </div>

            {/* Success Toast */}
            {downloadSuccess && (
              <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 rounded-2xl text-xs sm:text-sm flex items-center gap-3 animate-fadeIn font-bold shadow-md">
                <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>
                  Technical Datasheet & AutoCAD Section Drawings for <strong>{product.name}</strong> downloaded successfully!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Related Products in this Category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-12 border-t-2 border-neutral-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-black text-red-600 uppercase tracking-wider">Related Engineering Lines</span>
                <h2 className="text-2xl font-black text-slate-900">Complementary Formwork & Structural Components</h2>
              </div>
              <Link href="/products" className="text-xs font-black text-red-600 hover:underline flex items-center gap-1">
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="p-4 rounded-3xl bg-white border-2 border-neutral-200 hover:border-red-600 transition group space-y-3 block shadow-sm hover:shadow-lg"
                >
                  <div className="h-44 rounded-2xl overflow-hidden bg-neutral-50 p-3 border border-neutral-200 flex items-center justify-center">
                    <img
                      src={rel.featuredImage}
                      alt={rel.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-red-600 transition line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-2 font-medium">{rel.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RFQ / RA Bill Modal */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={product.name}
      />
    </div>
  );
}
