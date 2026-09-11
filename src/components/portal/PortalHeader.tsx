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
        return 'bg-red-100 text-red-700 border-red-300 font-extrabold';
      case 'BRANCH_ADMIN':
        return 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
      case 'STAFF':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-300 font-medium';
    }
  };

  return (
    <header className="bg-white border-b border-neutral-200 py-3 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      {/* Left: Mobile Menu Toggle & Branch Switcher */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        {/* Regional Node Switcher (Super Admin can switch all, Branch Admin is locked or scoped) */}
        {user?.role === 'SUPER_ADMIN' ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-600 hidden sm:inline-block font-bold">
              Regional Node:
            </span>
            <div className="relative">
              <select
                value={selectedBranch}
                onChange={(e) => onSelectBranch(e.target.value)}
                className="bg-neutral-50 border border-neutral-300 rounded-xl px-3 py-1.5 text-xs font-extrabold text-red-600 focus:outline-none focus:border-red-600 appearance-none pr-8 cursor-pointer shadow-sm"
              >
                <option value="all">🌐 All Sites & Logistics Hubs (Master HQ)</option>
                {SEED_BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    📍 {b.city} Depot ({b.code})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs">
            <MapPin className="w-4 h-4 text-red-600" />
            <span className="text-black font-extrabold">
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
            className="flex items-center gap-2.5 p-1.5 rounded-xl bg-neutral-50 border border-neutral-300 hover:border-red-600 transition text-left shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-xs shadow">
              {user?.name ? user.name.slice(0, 2).toUpperCase() : 'JM'}
            </div>
            <div className="hidden md:block pr-1">
              <p className="text-xs font-extrabold text-black leading-none truncate max-w-[140px]">
                {user?.name || 'Authorized User'}
              </p>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded border font-bold inline-block mt-0.5 ${getRoleBadge(
                  user?.role
                )}`}
              >
                {user?.role || 'STAFF'}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
          </button>

          {/* User Dropdown Menu */}
          {userDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-2xl p-2 space-y-1 z-50 animate-fadeIn">
              <div className="p-3 border-b border-neutral-200">
                <p className="text-xs font-black text-black">{user?.name}</p>
                <p className="text-[11px] text-neutral-600 truncate font-medium">{user?.email}</p>
                <p className="text-[10px] text-red-600 font-extrabold uppercase mt-1">
                  Role: {user?.role}
                </p>
              </div>

              <Link
                href="/"
                className="block px-3 py-2 text-xs text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-xl font-bold transition"
              >
                🌐 View Public Website
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition flex items-center gap-2 font-bold"
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
