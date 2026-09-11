'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import PortalSidebar from '@/components/portal/PortalSidebar';
import PortalHeader from '@/components/portal/PortalHeader';
import { AuthUser } from '@/lib/rbac';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setUser(data.user);
            if (data.user.role === 'BRANCH_ADMIN' && data.user.branchId) {
              setSelectedBranch(data.user.branchId);
            }
          } else {
            router.push('/portal/login');
          }
        } else {
          router.push('/portal/login');
        }
      } catch (err) {
        router.push('/portal/login');
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 text-black flex items-center justify-center">
        <div className="space-y-3 text-center">
          <div className="w-12 h-12 rounded-2xl bg-red-600 animate-pulse mx-auto flex items-center justify-center font-black text-xl text-white shadow-lg">
            JMK
          </div>
          <p className="text-xs text-neutral-600 font-bold">Initializing JMK Enterprise Telemetry...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-black flex">
      {/* Sidebar */}
      <PortalSidebar
        user={user}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <PortalHeader
          user={user}
          selectedBranch={selectedBranch}
          onSelectBranch={setSelectedBranch}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-neutral-50 text-black">
          {children}
        </main>
      </div>
    </div>
  );
}
