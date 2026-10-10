'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getDefaultDashboard } from '@/lib/rbac';

export default function DashboardIndexPage() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Not logged in');
      })
      .then((data) => {
        if (data.user) {
          const dest = getDefaultDashboard(data.user.role);
          router.replace(dest);
        } else {
          router.replace('/portal/login');
        }
      })
      .catch(() => {
        router.replace('/portal/login');
      });
  }, [router]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-3">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs font-bold text-neutral-600">Routing to your assigned workspace...</p>
      </div>
    </div>
  );
}
