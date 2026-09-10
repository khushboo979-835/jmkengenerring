export type UserRole = 'SUPER_ADMIN' | 'BRANCH_ADMIN' | 'STAFF';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branchId?: string;
  branchName?: string;
}

export const ROLE_PERMISSIONS = {
  SUPER_ADMIN: {
    canViewAllBranches: true,
    canCreateBranch: true,
    canApproveHighValueVouchers: true,
    canApproveIndents: true,
    canManageGlobalSettings: true,
    canAccessSuperAdminDashboard: true,
  },
  BRANCH_ADMIN: {
    canViewAllBranches: false,
    canCreateBranch: false,
    canApproveHighValueVouchers: false,
    canApproveIndents: false,
    canManageGlobalSettings: false,
    canAccessSuperAdminDashboard: false,
    canManageBranchAttendance: true,
    canRaiseMaterialIndents: true,
    canCreateExpenseVouchers: true,
    canSubmitDPR: true,
    canManageBranchTasks: true,
  },
  STAFF: {
    canViewAllBranches: false,
    canCreateBranch: false,
    canApproveHighValueVouchers: false,
    canApproveIndents: false,
    canManageGlobalSettings: false,
    canAccessSuperAdminDashboard: false,
    canManageBranchAttendance: false,
    canRaiseMaterialIndents: false,
    canCreateExpenseVouchers: false,
    canSubmitDPR: false,
    canManageBranchTasks: false,
    canViewSelfAttendance: true,
    canLogSnags: true,
    canViewAssignedTasks: true,
    canViewSalarySlips: true,
  },
} as const;

export function hasPermission(
  role: UserRole,
  permission: keyof typeof ROLE_PERMISSIONS.SUPER_ADMIN | keyof typeof ROLE_PERMISSIONS.BRANCH_ADMIN | keyof typeof ROLE_PERMISSIONS.STAFF
): boolean {
  const permissions = ROLE_PERMISSIONS[role] as Record<string, boolean | undefined>;
  return !!permissions[permission];
}

export function getDefaultDashboard(role: UserRole): string {
  switch (role) {
    case 'SUPER_ADMIN':
      return '/dashboard/super-admin';
    case 'BRANCH_ADMIN':
      return '/dashboard/branch';
    case 'STAFF':
      return '/dashboard/employee';
    default:
      return '/portal/login';
  }
}
