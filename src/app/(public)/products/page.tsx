'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Download,
  ExternalLink,
  Layers,
  ChevronRight,
  PlusCircle,
  Users,
  IndianRupee,
  Clock,
  Warehouse,
  Boxes,
  ClipboardCheck,
  TrendingUp,
  MapPin,
  Sparkles
} from 'lucide-react';
import { SEED_PRODUCTS, SeedProduct } from '@/lib/seedData';
import RFQModal from '@/components/public/RFQModal';
import ProvisionProductModal from '@/components/portal/ProvisionProductModal';

const CATEGORIES = [
  { id: 'all', label: 'All Products (60+)' },
  { id: 'shuttering', label: 'Shuttering & Centering (11)' },
  { id: 'scaffolding', label: 'Scaffolding & Props (8)' },
  { id: 'joints', label: 'Expansion Joints (22)' },
  { id: 'bearings', label: 'Bridge Bearings (5)' },
  { id: 'drainage', label: 'MS Drainage Spouts (6)' },
  { id: 'h-frame', label: 'H-Frame Scaffolding (3)' },
  { id: 'planks', label: 'Walkway Planks (2)' },
  { id: 'channels', label: 'MS Channels (2)' },
  { id: 'barriers', label: 'Crash Barriers (2)' },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [workspaceTab, setWorkspaceTab] = useState<'boq' | 'inventory' | 'orders'>('boq');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [isProvisionOpen, setIsProvisionOpen] = useState(false);
  const [activeRfqProduct, setActiveRfqProduct] = useState<string | undefined>();

  const filteredProducts = useMemo(() => {
    return SEED_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'all' || prod.category === selectedCategory ||
        (selectedCategory === 'shuttering' && (prod.category === 'shuttering' || prod.category === 'centering'));
      const matchesQuery =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.materialGrade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenRFQ = (productName?: string) => {
    setActiveRfqProduct(productName);
    setIsRfqOpen(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen py-6 px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Screen 1: Top Navigation Bar with JMK Red/Black Branding */}
        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-black text-red-600 tracking-tight">JMK</span>
              <span className="text-sm font-black text-slate-900 group-hover:text-red-600 transition">
                Engineering & Developers
              </span>
            </Link>

            <div className="h-5 w-px bg-neutral-200 hidden sm:block"></div>

            {/* Navigation links */}
            <div className="flex items-center gap-3 text-xs font-bold text-slate-800">
              <Link
                href="/products"
                className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 transition"
              >
                Master Catalog
              </Link>
              <Link
                href="/dashboard/branch"
                className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition hover:text-red-600"
              >
                Branch Network
              </Link>
              <Link
                href="/dashboard/branch/inventory"
                className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition hover:text-red-600"
              >
                Central Inventory
              </Link>
              <Link
                href="/dashboard/super-admin/approvals"
                className="px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition hover:text-red-600"
              >
                HQ Signoff
              </Link>
            </div>
          </div>

          {/* CTA: Provision New Product / BOQ Line */}
          <button
            onClick={() => setIsProvisionOpen(true)}
            className="w-full md:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Provision New Product / BOQ Line</span>
          </button>
        </div>

        {/* Screen 1: Central KPI Ribbon (image_38.png exact specifications) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Workforce Turnout
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900">
                842 <span className="text-xs text-neutral-500 font-bold">/ 910</span>
              </p>
              <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                ● 92.5% Attendance (4 Sites)
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-neutral-100 text-slate-800 flex items-center justify-center border border-neutral-200">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Combined Spend
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900">
                ₹ 42.8L <span className="text-xs text-neutral-500 font-bold">MTD</span>
              </p>
              <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">
                ● Within ₹48.0L Cap
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
              <IndianRupee className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-neutral-200 hover:border-red-600 transition shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-neutral-500">
                Pending Approvals
              </span>
              <p className="text-xl sm:text-2xl font-black text-red-600">
                14 Items <span className="text-xs text-neutral-500 font-bold">Action Required</span>
              </p>
              <span className="text-[10px] font-mono text-neutral-600 font-bold bg-neutral-100 px-2 py-0.5 rounded">
                3 Critical BOQ Indents
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-neutral-100 text-slate-800 flex items-center justify-center border border-neutral-200">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Screen 1: Main Workspace Segmented Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-neutral-200 pb-3">
            {/* Segmented Controls [Pre-Construction (BOQ)] | [Live Inventory] | [Global Order Desk] */}
            <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl border border-neutral-300">
              <button
                onClick={() => setWorkspaceTab('boq')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 ${
                  workspaceTab === 'boq'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <ClipboardCheck className="w-4 h-4" />
                <span>Pre-Construction (BOQ)</span>
              </button>

              <button
                onClick={() => setWorkspaceTab('inventory')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 ${
                  workspaceTab === 'inventory'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <Warehouse className="w-4 h-4" />
                <span>Live Inventory</span>
              </button>

              <button
                onClick={() => setWorkspaceTab('orders')}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 ${
                  workspaceTab === 'orders'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                <Boxes className="w-4 h-4" />
                <span>Global Order Desk</span>
              </button>
            </div>

            {/* Total count badge */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>
                Catalog Index: <strong className="text-black font-black">{filteredProducts.length}</strong> Industrial Items
              </span>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="bg-white border-2 border-neutral-200 p-4 rounded-2xl space-y-3 shadow-sm">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products, specifications, materials (IS 2062, PTFE, Neoprene), or dimensions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border-2 border-neutral-300 rounded-xl text-xs sm:text-sm text-black font-medium focus:outline-none focus:border-red-600 transition placeholder:text-neutral-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white border border-neutral-300 text-slate-800 hover:border-red-600 hover:text-red-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* High-End Product Line Grid with Live Metrics (Total Stock, Patna Stock, Active Orders) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white border-2 border-neutral-200 rounded-2xl space-y-3">
            <Layers className="w-10 h-10 text-neutral-400 mx-auto" />
            <h3 className="text-base font-black text-slate-900">No products found matching your search</h3>
            <p className="text-xs text-neutral-600">Try adjusting your filters or search keywords</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => {
              // Deterministic mockup stock metrics for Onsite ERP realism:
              const totalStockTons = ((idx % 7) + 8) * 1.5;
              const patnaStockTons = Math.max(3, Math.round(totalStockTons * 0.45));
              const activeOrdersCount = (idx % 4) + 1;

              return (
                <div
                  key={product.id}
                  className="bg-white border-2 border-neutral-200 hover:border-red-600 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
                >
                  {/* Full Clickable Card Link */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="block flex-1 focus:outline-none"
                  >
                    {/* Image Container with high-res photo */}
                    <div className="relative h-60 bg-neutral-50 p-4 border-b border-neutral-200 overflow-hidden flex items-center justify-center">
                      <img
                        src={product.featuredImage}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-black text-white text-[10px] font-black uppercase tracking-wider">
                          {product.categoryLabel}
                        </span>
                      </div>

                      {/* 10% OFF Festive Ribbon */}
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md border border-amber-300">
                          🎉 10% OFF
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                        <span className="font-mono text-xs bg-red-100 text-red-700 px-2.5 py-1 rounded-md font-black border border-red-200">
                          {product.price || product.variants[0]?.priceEstimate || '₹ Request Quote'}
                        </span>
                        <span className="text-[10px] text-slate-800 bg-white px-2 py-1 rounded-md border border-neutral-300 font-bold shadow-sm">
                          MOQ: {product.minOrderQuantity}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 space-y-4">
                      <div>
                        <h2 className="text-base font-black text-slate-900 group-hover:text-red-600 transition duration-300 line-clamp-2 leading-snug">
                          {product.name}
                        </h2>
                        <p className="text-xs text-neutral-600 line-clamp-2 mt-1.5 leading-relaxed font-medium">
                          {product.shortDescription}
                        </p>
                      </div>

                      {/* Screen 1 Mandate: Central Live Stock Metrics Box */}
                      <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-1.5 text-xs">
                        <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
                          <span className="text-neutral-500 font-bold flex items-center gap-1">
                            <Warehouse className="w-3.5 h-3.5 text-slate-700" />
                            Total Stock:
                          </span>
                          <span className="font-black text-slate-900 font-mono">
                            {totalStockTons.toFixed(1)} Tons
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
                          <span className="text-neutral-500 font-bold flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-red-600" />
                            Patna Stock:
                          </span>
                          <span className="font-black text-red-600 font-mono">
                            {patnaStockTons} Tons
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-neutral-500 font-bold flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            Active Orders:
                          </span>
                          <span className="font-black text-emerald-700 font-mono">
                            {activeOrdersCount} Dispatches
                          </span>
                        </div>
                      </div>

                      {/* Weight Variants & Material Standards */}
                      <div className="space-y-1 text-xs text-neutral-600 font-medium">
                        <div className="flex justify-between">
                          <span className="text-neutral-500 font-bold">Standard:</span>
                          <span className="font-bold text-slate-900 font-mono">{product.materialGrade}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-500 font-bold">Finish:</span>
                          <span className="font-bold text-slate-900">{product.finishType}</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Action Footer */}
                  <div className="p-5 pt-0 flex items-center gap-2 relative z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleOpenRFQ(product.name);
                      }}
                      className="flex-1 py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Instant RFQ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      href={`/products/${product.slug}`}
                      className="py-2.5 px-3.5 bg-neutral-100 hover:bg-neutral-200 text-slate-900 text-xs font-black rounded-xl border border-neutral-300 transition flex items-center justify-center gap-1.5 hover:text-red-600"
                    >
                      <span>Deep Specs</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Provision Product Modal */}
      <ProvisionProductModal
        isOpen={isProvisionOpen}
        onClose={() => setIsProvisionOpen(false)}
      />

      {/* RFQ Modal */}
      <RFQModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        defaultProduct={activeRfqProduct}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white text-black flex items-center justify-center">
          <div className="space-y-3 text-center">
            <div className="w-10 h-10 rounded-xl bg-red-600 animate-pulse mx-auto"></div>
            <p className="text-xs text-neutral-600 font-mono font-bold">Loading Master Product Hub...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
