'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Mail,
  KeyRound,
  ArrowRight,
  Building2,
  HardHat,
  Users,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { getDefaultDashboard } from '@/lib/rbac';

export default function LoginPage() {
  const router = useRouter();

  const [roleTab, setRoleTab] = useState<'BRANCH' | 'HQ'>('HQ');
  const [email, setEmail] = useState('hq@jmkengineering.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const quickDemoAccounts = [
    {
      label: 'Super Admin (Patna HQ)',
      email: 'hq@jmkengineering.com',
      password: 'admin123',
      role: 'SUPER_ADMIN',
      badge: 'Master HQ Command',
    },
    {
      label: 'Branch Admin (Delhi Depot)',
      email: 'delhi.admin@jmkengineering.com',
      password: 'delhi123',
      role: 'BRANCH_ADMIN',
      badge: 'Delhi NCR Hub',
    },
    {
      label: 'Branch Admin (Mumbai Hub)',
      email: 'mumbai.admin@jmkengineering.com',
      password: 'mumbai123',
      role: 'BRANCH_ADMIN',
      badge: 'Mumbai Hub',
    },
    {
      label: 'Site QA/QC Engineer',
      email: 'engineer.delhi@jmkengineering.com',
      password: 'staff123',
      role: 'STAFF',
      badge: 'Field Engineering',
    },
  ];

  const handleSelectDemo = (acc: (typeof quickDemoAccounts)[0]) => {
    setEmail(acc.email);
    setPassword(acc.password);
    if (acc.role === 'SUPER_ADMIN') {
      setRoleTab('HQ');
    } else {
      setRoleTab('BRANCH');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
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
        setErrorMsg(data.error || 'Authentication failed. Please check credentials.');
      }
    } catch (err) {
      setErrorMsg('Server connection failed. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 space-y-6">
        {/* Brand Logo & Title with Bold Red Branding */}
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
                Multi-Branch Industrial Portal
              </span>
            </div>
          </Link>
          <h2 className="text-2xl font-black tracking-tight text-black pt-2">
            Universal Smart Login
          </h2>
          <p className="text-xs text-neutral-600 font-medium">
            Patna HQ • Delhi NCR • Mumbai • Kolkata Logistics Nodes
          </p>
        </div>

        {/* Role Toggle Selector */}
        <div className="bg-neutral-100 border-2 border-neutral-200 p-1.5 rounded-2xl flex items-center gap-1 shadow-sm">
          <button
            type="button"
            onClick={() => {
              setRoleTab('HQ');
              setEmail('hq@jmkengineering.com');
              setPassword('admin123');
            }}
            className={`flex-1 py-2 text-xs font-black rounded-xl transition flex items-center justify-center gap-1.5 ${
              roleTab === 'HQ'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-neutral-700 hover:text-black'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Master HQ Super Admin</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRoleTab('BRANCH');
              setEmail('delhi.admin@jmkengineering.com');
              setPassword('delhi123');
            }}
            className={`flex-1 py-2 text-xs font-black rounded-xl transition flex items-center justify-center gap-1.5 ${
              roleTab === 'BRANCH'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-neutral-700 hover:text-black'
            }`}
          >
            <HardHat className="w-3.5 h-3.5" />
            <span>Site Staff / Branch Admin</span>
          </button>
        </div>

        {/* Login Form Box */}
        <div className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
          {errorMsg && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-black font-black mb-1 uppercase">Official Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 transition"
                  placeholder="name@jmkengineering.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-black font-black mb-1 uppercase">Password</label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-white border-2 border-neutral-300 rounded-xl text-xs text-black font-medium focus:outline-none focus:border-red-600 transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{loading ? 'Authenticating Session...' : 'Authenticate & Enter ERP Portal'}</span>
            </button>
          </form>

          {/* 1-Click Fast Test Accounts Selector */}
          <div className="pt-4 border-t border-neutral-200 space-y-2.5">
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-wider block text-center">
              ⚡ 1-Click Instant Demo Credentials
            </span>
            <div className="grid grid-cols-2 gap-2">
              {quickDemoAccounts.map((acc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectDemo(acc)}
                  className={`p-2 rounded-xl text-left border-2 transition text-[11px] ${
                    email === acc.email
                      ? 'bg-red-100 border-red-600 text-black'
                      : 'bg-white border-neutral-300 text-neutral-800 hover:border-red-600'
                  }`}
                >
                  <p className="font-black text-black truncate">{acc.label}</p>
                  <p className="text-[9px] text-red-600 font-bold font-mono">{acc.badge}</p>
                </button>
              ))}
            </div>
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
