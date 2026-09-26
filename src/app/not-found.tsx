import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Package, PhoneCall, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | JMK Engineering & Developers',
  description: 'The requested page could not be found. Explore JMK Engineering products, shuttering plates, scaffolding and bridge bearings.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">404 - Page Not Found</h1>
          <p className="text-sm text-slate-600 font-medium">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-slate-900/20"
          >
            <Package className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 border border-slate-300"
          >
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Contact Works</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
          Mauza Jhali, Jakariyapur, Krishna Niketan Road, Patna - 800007 | Hotline: +91 7493916194
        </div>
      </div>
    </div>
  );
}
