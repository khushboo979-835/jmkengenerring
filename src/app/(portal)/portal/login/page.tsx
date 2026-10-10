'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Lock,
  Mail,
  KeyRound,
  ArrowRight,
  Building2,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { getDefaultDashboard } from '@/lib/rbac';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter your email and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.user) {
        const dest = getDefaultDashboard(data.user.role);
        router.push(dest);
        router.refresh();
      } else {
        setErrorMsg(data.error || 'Authentication failed. Please verify your credentials.');
      }
    } catch (err) {
      setErrorMsg('Server connection failed. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Background aesthetics */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl bg-white p-1.5 border-2 border-red-600 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
              <img
                src="https://5.imimg.com/data5/SELLER/Logo/2025/1/478932299/PR/TT/IP/146888318/img-20231217-wa0143.jpg"
                alt="JMK Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-red-600 text-xl tracking-tight block">
                  JMK
                </span>
                <span className="font-black text-black text-base tracking-tight uppercase block">
                  ENTERPRISE ERP
                </span>
              </div>
              <span className="text-[11px] text-neutral-600 font-bold uppercase tracking-wider block">
                Patna Central Works & Regional Depots
              </span>
            </div>
          </Link>
          <h2 className="text-2xl font-black tracking-tight text-black pt-2">
            Secure Portal Authentication
          </h2>
          <p className="text-xs text-neutral-600 font-medium">
            Sign in with your authorized credentials provided by your Administrator
          </p>
        </div>

        {/* Clean Login Form Box (Without dummy accounts or default pre-fills) */}
        <div className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
          {errorMsg && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs flex items-center gap-2 font-bold animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-black font-black mb-1 uppercase tracking-wider">
                Official Email / Login ID
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 transition"
                  placeholder="name@jmkengineering.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-black font-black mb-1 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 transition"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{loading ? 'Authenticating Session...' : 'Sign In to Portal'}</span>
            </button>
          </form>

          <div className="pt-3 border-t border-neutral-200 text-center">
            <p className="text-[11px] text-neutral-500 font-medium">
              Access restricted to authorized personnel. Role permissions are governed by Patna HQ.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-neutral-600 hover:text-red-600 font-bold transition">
            ← Return to Public Manufacturing Website
          </Link>
        </div>
      </div>
    </div>
  );
}
