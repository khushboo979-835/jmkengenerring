import { SEED_PRODUCTS, SEED_BRANCHES, SeedProduct, SeedBranch } from './seedData';

export interface UserRecord {
  id: string;
  name: string;
  email: string;
  password: string; // plain for demo/testing
  role: 'SUPER_ADMIN' | 'BRANCH_ADMIN' | 'STAFF';
  branchId?: string;
  branchName?: string;
  designation: string;
  phone: string;
}

export interface WorkerRecord {
  id: string;
  name: string;
  trade: string;
  phone: string;
  wageType: 'DAILY' | 'MONTHLY';
  dailyRate: number;
  branchId: string;
  branchName: string;
}

export interface AttendanceRecord {
  id: string;
  workerId: string;
  workerName: string;
  trade: string;
  wageType: 'DAILY' | 'MONTHLY';
  dailyRate: number;
  branchId: string;
  branchName: string;
  date: string;
  status: 'PRESENT' | 'ABSENT' | 'HALF_DAY';
  checkInTime: string;
  verifiedGpsCoords?: {
    lat: number;
    lng: number;
    distanceMeters: number;
    isWithinGeofence: boolean;
  };
  markedBy: string;
}

export interface IndentRecord {
  id: string;
  indentNo: string;
  branchId: string;
  branchName: string;
  requestedBy: {
    id: string;
    name: string;
    email: string;
  };
  items: {
    productId?: string;
    productName: string;
    variant?: string;
    quantity: number;
    unit: string;
    urgency: 'ROUTINE' | 'URGENT' | 'CRITICAL';
    estimatedCost?: number;
  }[];
  purpose: string;
  requiredByDate: string;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'DISPATCHED' | 'DELIVERED' | 'REJECTED';
  approvedBy?: {
    id: string;
    name: string;
    date: string;
  };
  dispatchDetails?: {
    vehicleNo: string;
    driverName: string;
    driverPhone: string;
    dispatchDate: string;
  };
  notes?: string;
  createdAt: string;
}

export interface FinancialVoucherRecord {
  id: string;
  voucherNo: string;
  branchId: string;
  branchName: string;
  vendorName: string;
  category: 'LABOUR_WAGES' | 'MATERIAL_PURCHASE' | 'EQUIPMENT_RENTAL' | 'SITE_UTILITIES' | 'TRANSPORTATION' | 'MISCELLANEOUS';
  amount: number;
  billDate: string;
  description: string;
  proofImageUrl?: string;
  invoiceNo?: string;
  status: 'PENDING_HQ' | 'APPROVED' | 'REJECTED';
  requiresHqApproval: boolean;
  createdBy: {
    id: string;
    name: string;
  };
  approvedBy?: {
    id: string;
    name: string;
    date: string;
    remarks?: string;
  };
  createdAt: string;
}

export interface TaskRecord {
  id: string;
  title: string;
  description?: string;
  branchId: string;
  branchName: string;
  assignedToName: string;
  assignedToRole?: string;
  dueDate: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  progressPercent: number;
  category: 'CASTING' | 'SCAFFOLDING' | 'SHUTTERING' | 'INSPECTION' | 'DISPATCH' | 'SAFETY';
  createdAt: string;
}

export interface SnagRecord {
  id: string;
  snagNumber: string;
  title: string;
  description: string;
  location: string;
  branchId: string;
  branchName: string;
  category: 'CASTING_DEFECT' | 'MATERIAL_DAMAGE' | 'SAFETY_HAZARD' | 'DIMENSION_MISMATCH' | 'FINISHING';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'IN_REVIEW' | 'RESOLVED' | 'CLOSED';
  reportedBy: {
    id: string;
    name: string;
    role: string;
  };
  assignedTo?: string;
  photoUrl?: string;
  resolutionNotes?: string;
  resolvedAt?: string;
  createdAt: string;
}

export interface DPRRecord {
  id: string;
  dprNo: string;
  branchId: string;
  branchName: string;
  date: string;
  weather: string;
  labourCount: {
    skilled: number;
    unskilled: number;
    supervisors: number;
    total: number;
  };
  workAccomplished: string;
  materialReceived: string;
  machineryDeployed: string;
  roadblocks: string;
  safetyObservations: string;
  submittedBy: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export interface RFQRecord {
  id: string;
  rfqNo: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  selectedProducts: {
    name: string;
    category: string;
    quantity: string;
  }[];
  projectDetails: string;
  status: 'NEW' | 'QUOTED' | 'CONVERTED' | 'CLOSED';
  createdAt: string;
}

// Initial in-memory data tables
const USERS: UserRecord[] = [
  {
    id: 'usr_hq_super_admin',
    name: 'Er. Rajesh Kumar Sharma',
    email: 'hq@jmkengineering.com',
    password: 'admin123',
    role: 'SUPER_ADMIN',
    designation: 'Managing Director & Head of Works',
    phone: '+91 74939 16194',
  },
  {
    id: 'usr_admin_patna',
    name: 'Sanjay Singh',
    email: 'patna.admin@jmkengineering.com',
    password: 'patna123',
    role: 'BRANCH_ADMIN',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    designation: 'Fabrication Plant Supervisor',
    phone: '+91 74939 16194',
  },
  {
    id: 'usr_staff_patna',
    name: 'Er. Rahul Kumar',
    email: 'engineer.patna@jmkengineering.com',
    password: 'staff123',
    role: 'STAFF',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    designation: 'Senior QA/QC Site Engineer',
    phone: '+91 74939 16194',
  },
];

const BRANCHES: SeedBranch[] = [...SEED_BRANCHES];

const PRODUCTS: SeedProduct[] = [...SEED_PRODUCTS];

const WORKERS: WorkerRecord[] = [
  { id: 'wrk_01', name: 'Shambhu Singh', trade: 'Master Press Brake Operator', phone: '+91 74939 16194', wageType: 'DAILY', dailyRate: 1000, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
  { id: 'wrk_02', name: 'Akhilesh Thakur', trade: 'Shearing Machine Incharge', phone: '+91 74939 16194', wageType: 'DAILY', dailyRate: 900, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
  { id: 'wrk_03', name: 'Upendra Rai', trade: 'Coating & Galvanizing Specialist', phone: '+91 74939 16194', wageType: 'DAILY', dailyRate: 800, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
  { id: 'wrk_04', name: 'Rameshwar Mahato', trade: 'Shuttering Plate Fitter', phone: '+91 74939 16194', wageType: 'DAILY', dailyRate: 850, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
  { id: 'wrk_05', name: 'Sunil Paswan', trade: 'Heavy Scaffolding Rigger', phone: '+91 74939 16194', wageType: 'DAILY', dailyRate: 750, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
];

const ATTENDANCE_RECORDS: AttendanceRecord[] = [
  {
    id: 'att_01',
    workerId: 'wrk_01',
    workerName: 'Shambhu Singh',
    trade: 'Master Press Brake Operator',
    wageType: 'DAILY',
    dailyRate: 1000,
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:00 AM',
    verifiedGpsCoords: { lat: 25.5941, lng: 85.1376, distanceMeters: 12, isWithinGeofence: true },
    markedBy: 'Sanjay Singh',
  },
  {
    id: 'att_02',
    workerId: 'wrk_02',
    workerName: 'Akhilesh Thakur',
    trade: 'Shearing Machine Incharge',
    wageType: 'DAILY',
    dailyRate: 900,
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:15 AM',
    verifiedGpsCoords: { lat: 25.5942, lng: 85.1375, distanceMeters: 18, isWithinGeofence: true },
    markedBy: 'Sanjay Singh',
  },
  {
    id: 'att_03',
    workerId: 'wrk_03',
    workerName: 'Upendra Rai',
    trade: 'Coating & Galvanizing Specialist',
    wageType: 'DAILY',
    dailyRate: 800,
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:20 AM',
    verifiedGpsCoords: { lat: 25.5940, lng: 85.1377, distanceMeters: 25, isWithinGeofence: true },
    markedBy: 'Sanjay Singh',
  },
];

const INDENTS: IndentRecord[] = [
  {
    id: 'ind_01',
    indentNo: 'IND-2024-PAT-001',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    requestedBy: {
      id: 'usr_admin_patna',
      name: 'Sanjay Singh',
      email: 'patna.admin@jmkengineering.com',
    },
    items: [
      {
        productName: '13 Kg & 20 Kg Mild Steel Centering Sheets',
        variant: 'MS Centering Sheet 20 Kg (1200x600mm)',
        quantity: 250,
        unit: 'Pcs',
        urgency: 'URGENT',
        estimatedCost: 350000,
      },
      {
        productName: 'Adjustable Steel Scaffolding Props & Acrow Jacks',
        variant: 'Prop Jack Size 2 (2m - 3.5m)',
        quantity: 150,
        unit: 'Pcs',
        urgency: 'ROUTINE',
        estimatedCost: 187500,
      },
    ],
    purpose: 'Fabrication replenishment for Patna Outer Ring Road Flyover Package',
    requiredByDate: '2025-01-15',
    status: 'PENDING_APPROVAL',
    createdAt: new Date().toISOString(),
  },
];

const FINANCIAL_VOUCHERS: FinancialVoucherRecord[] = [
  {
    id: 'vch_01',
    voucherNo: 'VCH-2024-PAT-001',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    vendorName: 'Tata Steel Authorized Stockyard Patna',
    category: 'MATERIAL_PURCHASE',
    amount: 85000,
    billDate: new Date().toISOString().split('T')[0],
    description: 'IS 2062 Grade E250 Mild Steel Plates procurement for shuttering plate laser cut line',
    invoiceNo: 'TS-PAT-2024-118',
    status: 'PENDING_HQ',
    requiresHqApproval: true,
    createdBy: {
      id: 'usr_admin_patna',
      name: 'Sanjay Singh',
    },
    createdAt: new Date().toISOString(),
  },
];

const TASKS: TaskRecord[] = [
  {
    id: 'tsk_01',
    title: 'Precision Dimension Check: 3500 kN POT Bearings',
    description: 'Carry out 8K mirror stainless plate thickness check and PTFE disc lubrication inspection prior to NHAI inspection.',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    assignedToName: 'Er. Rahul Kumar',
    assignedToRole: 'Site QA/QC Engineer',
    dueDate: '2025-01-20',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    progressPercent: 70,
    category: 'INSPECTION',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'tsk_02',
    title: 'Ultrasonic Flaw Detection (UT) on Strip Seal Welds',
    description: '100% NDT testing of anchorage loop welds on 20-inch expansion joint assemblies.',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    assignedToName: 'Er. Rahul Kumar',
    assignedToRole: 'Site QA/QC Engineer',
    dueDate: '2025-01-25',
    priority: 'HIGH',
    status: 'PENDING',
    progressPercent: 20,
    category: 'SAFETY',
    createdAt: new Date().toISOString(),
  },
];

const SNAGS: SnagRecord[] = [
  {
    id: 'sng_01',
    snagNumber: 'SNG-2024-PAT-001',
    title: 'Weld Bead Spatter on Centering Stiffener Flange',
    description: 'Minor weld spatter noted along secondary angle stiffener during visual inspection. Scheduled for grinding touchup.',
    location: 'Bay 2 Welding Bay',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    category: 'FINISHING',
    priority: 'MEDIUM',
    status: 'OPEN',
    reportedBy: {
      id: 'usr_staff_patna',
      name: 'Er. Rahul Kumar',
      role: 'Site QA/QC Engineer',
    },
    assignedTo: 'Akhilesh Thakur',
    photoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    createdAt: new Date().toISOString(),
  },
];

const DPRS: DPRRecord[] = [
  {
    id: 'dpr_01',
    dprNo: 'DPR-2024-PAT-001',
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    date: new Date().toISOString().split('T')[0],
    weather: 'Clear / 24°C',
    labourCount: {
      skilled: 15,
      unskilled: 15,
      supervisors: 3,
      total: 33,
    },
    workAccomplished: 'Fabricated 280 pcs 20 Kg Centering Sheets and assembled 16 sets POT-PTFE bridge bearing base plates.',
    materialReceived: 'Received 25 Tonnes IS 2062 Grade E250 Mild Steel plates from Tata Steel Stockyard.',
    machineryDeployed: '1x CNC Hydraulic Press Brake, 1x Heavy Shearing Machine, 4x MIG Welding Units.',
    roadblocks: 'None. Continuous power and smooth production.',
    safetyObservations: '100% PPE compliance across shearing and welding bays. Zero accidents.',
    submittedBy: {
      id: 'usr_admin_patna',
      name: 'Sanjay Singh',
    },
    createdAt: new Date().toISOString(),
  },
];

const RFQS: RFQRecord[] = [
  {
    id: 'rfq_01',
    rfqNo: 'RFQ-2024-9041',
    customerName: 'Sunil Mehta',
    companyName: 'Afcons Infrastructure Ltd',
    email: 's.mehta@afcons.com',
    phone: '+91 98200 91823',
    city: 'Mumbai',
    state: 'Maharashtra',
    selectedProducts: [
      { name: 'Elastomeric POT PTFE Bridge Bearings', category: 'bearings', quantity: '24 Units (3500 kN Capacity)' },
      { name: 'Strip Seal Expansion Joints', category: 'joints', quantity: '360 Running Meters' },
    ],
    projectDetails: 'Requirement for Mumbai Metro Line 4 Elevated Viaduct Package. Need MoRTH & RDSO test certificates.',
    status: 'NEW',
    createdAt: '2024-11-24T15:20:00Z',
  },
];

// Unified In-Memory Store API
export const dataStore = {
  // Users
  getUsers: () => USERS,
  getUserById: (id: string) => USERS.find((u) => u.id === id),
  getUserByEmail: (email: string) => USERS.find((u) => u.email.toLowerCase() === email.toLowerCase()),
  
  // Branches
  getBranches: () => BRANCHES,
  getBranchById: (id: string) => BRANCHES.find((b) => b.id === id),
  addBranch: (branch: Omit<SeedBranch, 'id'>) => {
    const id = 'br_' + branch.city.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now().toString().slice(-4);
    const newBranch: SeedBranch = { ...branch, id };
    BRANCHES.push(newBranch);
    return newBranch;
  },
  
  // Products
  getProducts: (category?: string) => {
    if (category && category !== 'all') {
      return PRODUCTS.filter((p) => p.category === category);
    }
    return PRODUCTS;
  },
  getProductBySlug: (slug: string) => PRODUCTS.find((p) => p.slug === slug),
  
  // Workers & Attendance
  getWorkers: (branchId?: string) => {
    if (branchId && branchId !== 'all') {
      return WORKERS.filter((w) => w.branchId === branchId);
    }
    return WORKERS;
  },
  getAttendance: (branchId?: string, date?: string) => {
    let list = ATTENDANCE_RECORDS;
    if (branchId && branchId !== 'all') {
      list = list.filter((a) => a.branchId === branchId);
    }
    if (date) {
      list = list.filter((a) => a.date === date);
    }
    return list;
  },
  markAttendance: (record: Omit<AttendanceRecord, 'id'>) => {
    const existingIndex = ATTENDANCE_RECORDS.findIndex(
      (a) => a.workerId === record.workerId && a.date === record.date
    );
    if (existingIndex >= 0) {
      ATTENDANCE_RECORDS[existingIndex] = { ...ATTENDANCE_RECORDS[existingIndex], ...record };
      return ATTENDANCE_RECORDS[existingIndex];
    } else {
      const newRec: AttendanceRecord = { ...record, id: 'att_' + Date.now() };
      ATTENDANCE_RECORDS.unshift(newRec);
      return newRec;
    }
  },
  deleteAttendance: (id: string) => {
    const idx = ATTENDANCE_RECORDS.findIndex((a) => a.id === id);
    if (idx >= 0) {
      ATTENDANCE_RECORDS.splice(idx, 1);
      return true;
    }
    return false;
  },
  addWorker: (worker: Omit<WorkerRecord, 'id'>) => {
    const newWorker: WorkerRecord = {
      ...worker,
      id: 'wrk_' + Date.now(),
    };
    WORKERS.push(newWorker);
    return newWorker;
  },
  deleteWorker: (id: string) => {
    const idx = WORKERS.findIndex((w) => w.id === id);
    if (idx >= 0) {
      WORKERS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // Indents
  getIndents: (branchId?: string) => {
    if (branchId && branchId !== 'all') {
      return INDENTS.filter((i) => i.branchId === branchId);
    }
    return INDENTS;
  },
  addIndent: (indent: Omit<IndentRecord, 'id' | 'indentNo' | 'createdAt'>) => {
    const indentNo = `IND-${new Date().getFullYear()}-${indent.branchName.slice(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const newIndent: IndentRecord = {
      ...indent,
      id: 'ind_' + Date.now(),
      indentNo,
      createdAt: new Date().toISOString(),
    };
    INDENTS.unshift(newIndent);
    return newIndent;
  },
  updateIndentStatus: (id: string, status: IndentRecord['status'], approvedBy?: IndentRecord['approvedBy'], dispatchDetails?: IndentRecord['dispatchDetails']) => {
    const item = INDENTS.find((i) => i.id === id);
    if (item) {
      item.status = status;
      if (approvedBy) item.approvedBy = approvedBy;
      if (dispatchDetails) item.dispatchDetails = dispatchDetails;
    }
    return item;
  },
  deleteIndent: (id: string) => {
    const idx = INDENTS.findIndex((i) => i.id === id);
    if (idx >= 0) {
      INDENTS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // Vouchers
  getVouchers: (branchId?: string) => {
    if (branchId && branchId !== 'all') {
      return FINANCIAL_VOUCHERS.filter((v) => v.branchId === branchId);
    }
    return FINANCIAL_VOUCHERS;
  },
  addVoucher: (voucher: Omit<FinancialVoucherRecord, 'id' | 'voucherNo' | 'createdAt'>) => {
    const voucherNo = `VCH-${new Date().getFullYear()}-${voucher.branchName.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newVoucher: FinancialVoucherRecord = {
      ...voucher,
      id: 'vch_' + Date.now(),
      voucherNo,
      createdAt: new Date().toISOString(),
    };
    FINANCIAL_VOUCHERS.unshift(newVoucher);
    return newVoucher;
  },
  updateVoucherStatus: (id: string, status: FinancialVoucherRecord['status'], approvedBy?: FinancialVoucherRecord['approvedBy']) => {
    const vch = FINANCIAL_VOUCHERS.find((v) => v.id === id);
    if (vch) {
      vch.status = status;
      if (approvedBy) vch.approvedBy = approvedBy;
    }
    return vch;
  },
  deleteVoucher: (id: string) => {
    const idx = FINANCIAL_VOUCHERS.findIndex((v) => v.id === id);
    if (idx >= 0) {
      FINANCIAL_VOUCHERS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // Tasks
  getTasks: (branchId?: string) => {
    if (branchId && branchId !== 'all') {
      return TASKS.filter((t) => t.branchId === branchId);
    }
    return TASKS;
  },
  addTask: (task: Omit<TaskRecord, 'id' | 'createdAt'>) => {
    const newTask: TaskRecord = {
      ...task,
      id: 'tsk_' + Date.now(),
      createdAt: new Date().toISOString(),
    };
    TASKS.unshift(newTask);
    return newTask;
  },
  updateTaskProgress: (id: string, progressPercent: number, status: TaskRecord['status']) => {
    const t = TASKS.find((task) => task.id === id);
    if (t) {
      t.progressPercent = progressPercent;
      t.status = status;
    }
    return t;
  },
  deleteTask: (id: string) => {
    const idx = TASKS.findIndex((t) => t.id === id);
    if (idx >= 0) {
      TASKS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // Snags
  getSnags: (branchId?: string) => {
    if (branchId && branchId !== 'all') {
      return SNAGS.filter((s) => s.branchId === branchId);
    }
    return SNAGS;
  },
  addSnag: (snag: Omit<SnagRecord, 'id' | 'snagNumber' | 'createdAt'>) => {
    const snagNumber = `SNG-${new Date().getFullYear()}-${snag.branchName.slice(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const newSnag: SnagRecord = {
      ...snag,
      id: 'sng_' + Date.now(),
      snagNumber,
      createdAt: new Date().toISOString(),
    };
    SNAGS.unshift(newSnag);
    return newSnag;
  },
  resolveSnag: (id: string, resolutionNotes: string) => {
    const snag = SNAGS.find((s) => s.id === id);
    if (snag) {
      snag.status = 'RESOLVED';
      snag.resolutionNotes = resolutionNotes;
      snag.resolvedAt = new Date().toISOString();
    }
    return snag;
  },
  deleteSnag: (id: string) => {
    const idx = SNAGS.findIndex((s) => s.id === id);
    if (idx >= 0) {
      SNAGS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // DPRs
  getDPRs: (branchId?: string) => {
    if (branchId && branchId !== 'all') {
      return DPRS.filter((d) => d.branchId === branchId);
    }
    return DPRS;
  },
  addDPR: (dpr: Omit<DPRRecord, 'id' | 'dprNo' | 'createdAt'>) => {
    const dprNo = `DPR-${new Date().getFullYear()}-${dpr.branchName.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newDPR: DPRRecord = {
      ...dpr,
      id: 'dpr_' + Date.now(),
      dprNo,
      createdAt: new Date().toISOString(),
    };
    DPRS.unshift(newDPR);
    return newDPR;
  },
  deleteDPR: (id: string) => {
    const idx = DPRS.findIndex((d) => d.id === id);
    if (idx >= 0) {
      DPRS.splice(idx, 1);
      return true;
    }
    return false;
  },

  // RFQs
  getRFQs: () => RFQS,
  addRFQ: (rfq: Omit<RFQRecord, 'id' | 'rfqNo' | 'createdAt' | 'status'>) => {
    const rfqNo = `RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRFQ: RFQRecord = {
      ...rfq,
      id: 'rfq_' + Date.now(),
      rfqNo,
      status: 'NEW',
      createdAt: new Date().toISOString(),
    };
    RFQS.unshift(newRFQ);
    return newRFQ;
  },
  updateRFQ: (id: string, updates: Partial<RFQRecord>) => {
    const rfq = RFQS.find((r) => r.id === id);
    if (rfq) {
      Object.assign(rfq, updates);
    }
    return rfq;
  },
  deleteRFQ: (id: string) => {
    const idx = RFQS.findIndex((r) => r.id === id);
    if (idx >= 0) {
      RFQS.splice(idx, 1);
      return true;
    }
    return false;
  },
};
