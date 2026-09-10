'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  Users,
  CheckCircle2,
  Layers,
  MapPin,
  ClipboardList,
  FileSpreadsheet,
  Settings,
  LogOut,
  X,
  ShieldAlert,
  HardHat,
  Package,
  TrendingUp,
  Award
} from 'lucide-react';
import { AuthUser } from '@/lib/rbac';

interface PortalSidebarProps {
  user: AuthUser | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortalSidebar({ user, isOpen, onClose }: PortalSidebarProps) {
  const pathname = usePathname();

  const superAdminLinks = [
    {
      label: 'Master HQ Telemetry',
      href: '/dashboard/super-admin',
      icon: TrendingUp,
      badge: 'Patna HQ',
    },
    {
      label: 'Branch Provisioning',
      href: '/dashboard/super-admin/branches',
      icon: Building2,
      badge: '+ New',
    },
    {
      label: 'HQ Approvals Desk',
      href: '/dashboard/super-admin/approvals',
      icon: Award,
      badge: '> ₹50k Vouchers',
    },
  ];

  const branchAdminLinks = [
    {
      label: 'Site Operations DPR',
      href: '/dashboard/branch',
      icon: HardHat,
    },
    {
      label: 'GPS Geofenced Muster Roll',
      href: '/dashboard/branch/attendance',
      icon: MapPin,
      badge: 'Live GPS',
    },
    {
      label: 'Stock & Material Indents',
      href: '/dashboard/branch/inventory',
      icon: Package,
    },
    {
      label: 'QC Tasks & Defect Snags',
      href: '/dashboard/branch/tasks',
      icon: ClipboardList,
    },
  ];

  const staffLinks = [
    {
      label: 'My Tasks & Slips',
      href: '/dashboard/employee',
      icon: Users,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border-2 border-red-600 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img
                  src="https://5.imimg.com/data5/SELLER/Logo/2025/1/478932299/PR/TT/IP/146888318/img-20231217-wa0143.jpg"
                  alt="JMK Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-black text-red-500 text-sm tracking-wide">
                  JMK ENTERPRISE ERP
                </h1>
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                  HQ & Multi-Branch Hub
                </p>
              </div>
            </Link>

            <button
              onClick={onClose}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="px-3 space-y-6 overflow-y-auto max-h-[calc(100vh-180px)]">
            {/* Super Admin Section */}
            {user?.role === 'SUPER_ADMIN' && (
              <div className="space-y-1">
                <span className="px-3 text-[10px] font-bold text-orange-400 uppercase tracking-wider block mb-2">
                  Master HQ Governance
                </span>
                {superAdminLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                        isActive
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </div>
                      {link.badge && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                            isActive
                              ? 'bg-orange-800 text-white'
                              : 'bg-slate-800 text-orange-400'
                          }`}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Branch Operations Section */}
            {(user?.role === 'SUPER_ADMIN' || user?.role === 'BRANCH_ADMIN') && (
              <div className="space-y-1">
                <span className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Branch Operations (Site)
                </span>
                {branchAdminLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                        isActive
                          ? 'bg-orange-600 text-white shadow-md'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </div>
                      {link.badge && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                            isActive
                              ? 'bg-orange-800 text-white'
                              : 'bg-slate-800 text-emerald-400'
                          }`}
                        >
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Staff / Engineer Section */}
            <div className="space-y-1">
              <span className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Field Staff & Engineering
              </span>
              {staffLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 text-xs space-y-2">
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
            <p className="font-semibold text-white">Patna Central Server</p>
            <p className="text-[10px] text-emerald-400 font-mono mt-0.5">● Telemetry Online (100% Sync)</p>
          </div>
        </div>
      </aside>
    </>
  );
}
