'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Building2,
  ChevronDown,
  LogOut,
  User,
  Shield,
  Bell,
  MapPin,
  Menu
} from 'lucide-react';
import { AuthUser } from '@/lib/rbac';
import { SEED_BRANCHES } from '@/lib/seedData';

interface PortalHeaderProps {
  user: AuthUser | null;
  selectedBranch: string;
  onSelectBranch: (branchId: string) => void;
  onToggleSidebar?: () => void;
}

export default function PortalHeader({
  user,
  selectedBranch,
  onSelectBranch,
  onToggleSidebar,
}: PortalHeaderProps) {
  const router = useRouter();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/portal/login');
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const getRoleBadge = (role?: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'bg-orange-950/60 text-orange-400 border-orange-800';
      case 'BRANCH_ADMIN':
        return 'bg-blue-950/60 text-blue-400 border-blue-800';
      case 'STAFF':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-800';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800 py-3 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Mobile Menu Toggle & Branch Switcher */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        {/* Regional Node Switcher (Super Admin can switch all, Branch Admin is locked or scoped) */}
        {user?.role === 'SUPER_ADMIN' ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 hidden sm:inline-block font-semibold">
              Regional Node:
            </span>
            <div className="relative">
              <select
                value={selectedBranch}
                onChange={(e) => onSelectBranch(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs font-bold text-orange-400 focus:outline-none focus:border-orange-500 appearance-none pr-8 cursor-pointer"
              >
                <option value="all">🌐 All Sites & Logistics Hubs (Master HQ)</option>
                {SEED_BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    📍 {b.city} Depot ({b.code})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-slate-300 font-semibold">
              {user?.branchName || 'Assigned Site Depot'}
            </span>
          </div>
        )}
      </div>

      {/* Right: Notifications & User Profile */}
      <div className="flex items-center gap-4">
        {/* User Pill / Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white font-bold text-xs shadow">
              {user?.name ? user.name.slice(0, 2).toUpperCase() : 'JM'}
            </div>
            <div className="hidden md:block pr-1">
              <p className="text-xs font-bold text-white leading-none truncate max-w-[140px]">
                {user?.name || 'Authorized User'}
              </p>
              <span
                className={`text-[9px] font-mono px-1.5 py-0.2 rounded border font-semibold inline-block mt-0.5 ${getRoleBadge(
                  user?.role
                )}`}
              >
                {user?.role || 'STAFF'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {/* User Dropdown Menu */}
          {userDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 space-y-1 z-50 animate-fadeIn">
              <div className="p-3 border-b border-slate-800">
                <p className="text-xs font-bold text-white">{user?.name}</p>
                <p className="text-[11px] text-slate-400 truncate">{user?.email}</p>
                <p className="text-[10px] text-orange-400 font-mono mt-1">
                  Role: {user?.role}
                </p>
              </div>

              <Link
                href="/"
                className="block px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition"
              >
                🌐 View Public Website
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-xl transition flex items-center gap-2 font-semibold"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out of ERP</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
