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
    phone: '+91 94310 28475',
  },
  {
    id: 'usr_admin_delhi',
    name: 'Amitabh Verma',
    email: 'delhi.admin@jmkengineering.com',
    password: 'delhi123',
    role: 'BRANCH_ADMIN',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    designation: 'Regional Works Manager (North)',
    phone: '+91 98110 39201',
  },
  {
    id: 'usr_admin_mumbai',
    name: 'Vikram Patil',
    email: 'mumbai.admin@jmkengineering.com',
    password: 'mumbai123',
    role: 'BRANCH_ADMIN',
    branchId: 'br_mumbai',
    branchName: 'Mumbai Western Logistics Hub',
    designation: 'Depot Operations Lead (West)',
    phone: '+91 98200 48192',
  },
  {
    id: 'usr_admin_kolkata',
    name: 'Debashis Mukherjee',
    email: 'kolkata.admin@jmkengineering.com',
    password: 'kolkata123',
    role: 'BRANCH_ADMIN',
    branchId: 'br_kolkata',
    branchName: 'Kolkata Eastern Logistics Depot',
    designation: 'Eastern Regional Incharge',
    phone: '+91 98300 76219',
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
    phone: '+91 94310 88219',
  },
  {
    id: 'usr_staff_delhi',
    name: 'Er. Rahul Choudhary',
    email: 'engineer.delhi@jmkengineering.com',
    password: 'staff123',
    role: 'STAFF',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    designation: 'Senior QA/QC Site Engineer',
    phone: '+91 97110 55192',
  },
  {
    id: 'usr_staff_mumbai',
    name: 'Er. Santosh Rane',
    email: 'engineer.mumbai@jmkengineering.com',
    password: 'staff123',
    role: 'STAFF',
    branchId: 'br_mumbai',
    branchName: 'Mumbai Western Logistics Hub',
    designation: 'Structural Staging Engineer',
    phone: '+91 98210 66321',
  },
];

const BRANCHES: SeedBranch[] = [...SEED_BRANCHES];

const PRODUCTS: SeedProduct[] = [...SEED_PRODUCTS];

const WORKERS: WorkerRecord[] = [
  { id: 'wrk_01', name: 'Manoj Kumar', trade: 'Formwork Fitter', phone: '+91 98710 11001', wageType: 'DAILY', dailyRate: 750, branchId: 'br_delhi', branchName: 'Delhi NCR Regional Logistics Depot' },
  { id: 'wrk_02', name: 'Ramvilas Yadav', trade: 'Heavy Scaffolding Rigger', phone: '+91 98710 11002', wageType: 'DAILY', dailyRate: 800, branchId: 'br_delhi', branchName: 'Delhi NCR Regional Logistics Depot' },
  { id: 'wrk_03', name: 'Dinesh Paswan', trade: 'MIG / TIG Welder', phone: '+91 98710 11003', wageType: 'DAILY', dailyRate: 850, branchId: 'br_delhi', branchName: 'Delhi NCR Regional Logistics Depot' },
  { id: 'wrk_04', name: 'Surendra Mahato', trade: 'General Yard Helper', phone: '+91 98710 11004', wageType: 'DAILY', dailyRate: 550, branchId: 'br_delhi', branchName: 'Delhi NCR Regional Logistics Depot' },
  { id: 'wrk_05', name: 'Raju Pandit', trade: 'Hydraulic Crane Operator', phone: '+91 98710 11005', wageType: 'DAILY', dailyRate: 950, branchId: 'br_delhi', branchName: 'Delhi NCR Regional Logistics Depot' },
  
  { id: 'wrk_06', name: 'Santosh Gaikwad', trade: 'Structural Welder', phone: '+91 98200 22001', wageType: 'DAILY', dailyRate: 850, branchId: 'br_mumbai', branchName: 'Mumbai Western Logistics Hub' },
  { id: 'wrk_07', name: 'Ganesh Shinde', trade: 'Scaffolding Erector', phone: '+91 98200 22002', wageType: 'DAILY', dailyRate: 780, branchId: 'br_mumbai', branchName: 'Mumbai Western Logistics Hub' },
  { id: 'wrk_08', name: 'Vijay Kamble', trade: 'Store Yard Incharge', phone: '+91 98200 22003', wageType: 'DAILY', dailyRate: 700, branchId: 'br_mumbai', branchName: 'Mumbai Western Logistics Hub' },
  { id: 'wrk_09', name: 'Anil Jadhav', trade: 'Formwork Carpenter', phone: '+91 98200 22004', wageType: 'DAILY', dailyRate: 800, branchId: 'br_mumbai', branchName: 'Mumbai Western Logistics Hub' },

  { id: 'wrk_10', name: 'Biplab Mondal', trade: 'Bearing Specialist', phone: '+91 98300 33001', wageType: 'DAILY', dailyRate: 900, branchId: 'br_kolkata', branchName: 'Kolkata Eastern Logistics Depot' },
  { id: 'wrk_11', name: 'Swapan Das', trade: 'Heavy Plate Fabricator', phone: '+91 98300 33002', wageType: 'DAILY', dailyRate: 850, branchId: 'br_kolkata', branchName: 'Kolkata Eastern Logistics Depot' },
  { id: 'wrk_12', name: 'Subhash Roy', trade: 'Forklift Operator', phone: '+91 98300 33003', wageType: 'DAILY', dailyRate: 750, branchId: 'br_kolkata', branchName: 'Kolkata Eastern Logistics Depot' },

  { id: 'wrk_13', name: 'Shambhu Singh', trade: 'Master Press Brake Operator', phone: '+91 94310 44001', wageType: 'DAILY', dailyRate: 1000, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
  { id: 'wrk_14', name: 'Akhilesh Thakur', trade: 'Shearing Machine Incharge', phone: '+91 94310 44002', wageType: 'DAILY', dailyRate: 900, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
  { id: 'wrk_15', name: 'Upendra Rai', trade: 'Coating & Galvanizing Specialist', phone: '+91 94310 44003', wageType: 'DAILY', dailyRate: 800, branchId: 'br_patna_hq', branchName: 'Patna HQ & Heavy Fabrication Plant' },
];

const ATTENDANCE_RECORDS: AttendanceRecord[] = [
  {
    id: 'att_01',
    workerId: 'wrk_01',
    workerName: 'Manoj Kumar',
    trade: 'Formwork Fitter',
    wageType: 'DAILY',
    dailyRate: 750,
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:15 AM',
    verifiedGpsCoords: { lat: 28.6140, lng: 77.2091, distanceMeters: 18, isWithinGeofence: true },
    markedBy: 'Amitabh Verma',
  },
  {
    id: 'att_02',
    workerId: 'wrk_02',
    workerName: 'Ramvilas Yadav',
    trade: 'Heavy Scaffolding Rigger',
    wageType: 'DAILY',
    dailyRate: 800,
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:22 AM',
    verifiedGpsCoords: { lat: 28.6138, lng: 77.2089, distanceMeters: 24, isWithinGeofence: true },
    markedBy: 'Amitabh Verma',
  },
  {
    id: 'att_03',
    workerId: 'wrk_03',
    workerName: 'Dinesh Paswan',
    trade: 'MIG / TIG Welder',
    wageType: 'DAILY',
    dailyRate: 850,
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    date: new Date().toISOString().split('T')[0],
    status: 'HALF_DAY',
    checkInTime: '08:45 AM',
    verifiedGpsCoords: { lat: 28.6139, lng: 77.2090, distanceMeters: 5, isWithinGeofence: true },
    markedBy: 'Amitabh Verma',
  },
  {
    id: 'att_04',
    workerId: 'wrk_06',
    workerName: 'Santosh Gaikwad',
    trade: 'Structural Welder',
    wageType: 'DAILY',
    dailyRate: 850,
    branchId: 'br_mumbai',
    branchName: 'Mumbai Western Logistics Hub',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:10 AM',
    verifiedGpsCoords: { lat: 19.0761, lng: 72.8778, distanceMeters: 14, isWithinGeofence: true },
    markedBy: 'Vikram Patil',
  },
  {
    id: 'att_05',
    workerId: 'wrk_10',
    workerName: 'Biplab Mondal',
    trade: 'Bearing Specialist',
    wageType: 'DAILY',
    dailyRate: 900,
    branchId: 'br_kolkata',
    branchName: 'Kolkata Eastern Logistics Depot',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:30 AM',
    verifiedGpsCoords: { lat: 22.5727, lng: 88.3640, distanceMeters: 20, isWithinGeofence: true },
    markedBy: 'Debashis Mukherjee',
  },
  {
    id: 'att_06',
    workerId: 'wrk_13',
    workerName: 'Shambhu Singh',
    trade: 'Master Press Brake Operator',
    wageType: 'DAILY',
    dailyRate: 1000,
    branchId: 'br_patna_hq',
    branchName: 'Patna HQ & Heavy Fabrication Plant',
    date: new Date().toISOString().split('T')[0],
    status: 'PRESENT',
    checkInTime: '08:00 AM',
    verifiedGpsCoords: { lat: 25.5942, lng: 85.1377, distanceMeters: 12, isWithinGeofence: true },
    markedBy: 'Sanjay Singh',
  },
];

const INDENTS: IndentRecord[] = [
  {
    id: 'ind_01',
    indentNo: 'IND-2024-DEL-089',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    requestedBy: {
      id: 'usr_admin_delhi',
      name: 'Amitabh Verma',
      email: 'delhi.admin@jmkengineering.com',
    },
    items: [
      {
        productName: '13 Kg & 20 Kg Mild Steel Centering Sheets',
        variant: 'MS Centering Sheet 20 Kg (1200x600mm)',
        quantity: 350,
        unit: 'Pcs',
        urgency: 'URGENT',
        estimatedCost: 490000,
      },
      {
        productName: 'Adjustable Steel Scaffolding Props & Acrow Jacks',
        variant: 'Prop Jack Size 2 (2m - 3.5m)',
        quantity: 200,
        unit: 'Pcs',
        urgency: 'ROUTINE',
        estimatedCost: 250000,
      },
    ],
    purpose: 'Urgent staging replenishment for Dwarka Expressway Flyover Pier Section 4A',
    requiredByDate: '2024-12-15',
    status: 'PENDING_APPROVAL',
    createdAt: '2024-11-20T10:30:00Z',
  },
  {
    id: 'ind_02',
    indentNo: 'IND-2024-MUM-104',
    branchId: 'br_mumbai',
    branchName: 'Mumbai Western Logistics Hub',
    requestedBy: {
      id: 'usr_admin_mumbai',
      name: 'Vikram Patil',
      email: 'mumbai.admin@jmkengineering.com',
    },
    items: [
      {
        productName: 'Elastomeric POT PTFE Bridge Bearings',
        variant: 'Free Sliding POT-PTFE 3500 kN',
        quantity: 16,
        unit: 'Pcs',
        urgency: 'CRITICAL',
        estimatedCost: 992000,
      },
      {
        productName: 'Strip Seal & 20-inch MS Expansion Joints',
        variant: 'Strip Seal Joint (Up to 80mm Movement)',
        quantity: 120,
        unit: 'Mtrs',
        urgency: 'URGENT',
        estimatedCost: 900000,
      },
    ],
    purpose: 'Coastal Road Package II Girder Erection Milestone',
    requiredByDate: '2024-12-10',
    status: 'APPROVED',
    approvedBy: {
      id: 'usr_hq_super_admin',
      name: 'Er. Rajesh Kumar Sharma',
      date: '2024-11-22T14:20:00Z',
    },
    dispatchDetails: {
      vehicleNo: 'BR-01-GB-4819 (Heavy Multi-Axle Trailer)',
      driverName: 'Sohan Lal Yadav',
      driverPhone: '+91 94310 99120',
      dispatchDate: '2024-11-25',
    },
    createdAt: '2024-11-18T09:15:00Z',
  },
  {
    id: 'ind_03',
    indentNo: 'IND-2024-KOL-042',
    branchId: 'br_kolkata',
    branchName: 'Kolkata Eastern Logistics Depot',
    requestedBy: {
      id: 'usr_admin_kolkata',
      name: 'Debashis Mukherjee',
      email: 'kolkata.admin@jmkengineering.com',
    },
    items: [
      {
        productName: 'Cast Iron & MS Drainage Spouts',
        variant: 'Heavy CI Drainage Spout 14mm with Grate',
        quantity: 180,
        unit: 'Pcs',
        urgency: 'ROUTINE',
        estimatedCost: 405000,
      },
    ],
    purpose: 'Kona Expressway Flyover deck storm evacuation setup',
    requiredByDate: '2024-12-28',
    status: 'PENDING_APPROVAL',
    createdAt: '2024-11-24T11:45:00Z',
  },
];

const FINANCIAL_VOUCHERS: FinancialVoucherRecord[] = [
  {
    id: 'vch_01',
    voucherNo: 'VCH-2024-DEL-0412',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    vendorName: 'Mahalaxmi Trailer Logistics & Transport',
    category: 'TRANSPORTATION',
    amount: 85000,
    billDate: '2024-11-22',
    description: 'Freight charges for 40-tonne shuttering plates consignment from Patna Central Works to Delhi Manesar Yard',
    invoiceNo: 'MLT/2024/491',
    status: 'PENDING_HQ',
    requiresHqApproval: true,
    createdBy: {
      id: 'usr_admin_delhi',
      name: 'Amitabh Verma',
    },
    createdAt: '2024-11-22T16:00:00Z',
  },
  {
    id: 'vch_02',
    voucherNo: 'VCH-2024-MUM-0189',
    branchId: 'br_mumbai',
    branchName: 'Mumbai Western Logistics Hub',
    vendorName: 'Apex Crane & Heavy Rigging Services',
    category: 'EQUIPMENT_RENTAL',
    amount: 145000,
    billDate: '2024-11-20',
    description: '100-Tonne Hydraulic Crane 5-day rental for POT bearing placement and test bed positioning',
    invoiceNo: 'APX-MUM-982',
    status: 'APPROVED',
    requiresHqApproval: true,
    createdBy: {
      id: 'usr_admin_mumbai',
      name: 'Vikram Patil',
    },
    approvedBy: {
      id: 'usr_hq_super_admin',
      name: 'Er. Rajesh Kumar Sharma',
      date: '2024-11-21T11:00:00Z',
      remarks: 'Verified against Coastal Road work order milestone #3',
    },
    createdAt: '2024-11-20T18:30:00Z',
  },
  {
    id: 'vch_03',
    voucherNo: 'VCH-2024-DEL-0413',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    vendorName: 'Local Site Consumables & Fasteners Co',
    category: 'SITE_UTILITIES',
    amount: 18500,
    billDate: '2024-11-23',
    description: 'High tensile 8.8 grade anchor bolts, grease drums, and safety harnesses for staging riggers',
    invoiceNo: 'LSC-8812',
    status: 'APPROVED',
    requiresHqApproval: false,
    createdBy: {
      id: 'usr_admin_delhi',
      name: 'Amitabh Verma',
    },
    createdAt: '2024-11-23T12:00:00Z',
  },
  {
    id: 'vch_04',
    voucherNo: 'VCH-2024-KOL-0098',
    branchId: 'br_kolkata',
    branchName: 'Kolkata Eastern Logistics Depot',
    vendorName: 'Bengal Industrial Gas & Electrode Corp',
    category: 'MATERIAL_PURCHASE',
    amount: 62000,
    billDate: '2024-11-24',
    description: 'CO2 Shielding gas cylinders and heavy flux core welding wire spools for drainage spout fabrication',
    invoiceNo: 'BIG-KL-2041',
    status: 'PENDING_HQ',
    requiresHqApproval: true,
    createdBy: {
      id: 'usr_admin_kolkata',
      name: 'Debashis Mukherjee',
    },
    createdAt: '2024-11-24T14:15:00Z',
  },
];

const TASKS: TaskRecord[] = [
  {
    id: 'tsk_01',
    title: 'Precision Dimension Check: 3500 kN POT Bearings',
    description: 'Carry out 8K mirror stainless plate thickness check and PTFE disc lubrication inspection prior to client inspection.',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    assignedToName: 'Er. Rahul Choudhary',
    assignedToRole: 'Site QA/QC Engineer',
    dueDate: '2024-12-05',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    progressPercent: 65,
    category: 'INSPECTION',
    createdAt: '2024-11-22T08:00:00Z',
  },
  {
    id: 'tsk_02',
    title: 'Load Staging Erection - Pier 12 Culvert',
    description: 'Assemble twin MS Soldier columns and 20 Kg Centering Sheet shuttering lines for retaining wall pour.',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    assignedToName: 'Manoj Kumar',
    assignedToRole: 'Formwork Fitter',
    dueDate: '2024-12-02',
    priority: 'CRITICAL',
    status: 'IN_PROGRESS',
    progressPercent: 40,
    category: 'SHUTTERING',
    createdAt: '2024-11-23T08:00:00Z',
  },
  {
    id: 'tsk_03',
    title: 'Ultrasonic Flaw Detection (UT) on Strip Seal Welds',
    description: '100% NDT testing of anchorage loop welds on 20-inch expansion joint assemblies.',
    branchId: 'br_mumbai',
    branchName: 'Mumbai Western Logistics Hub',
    assignedToName: 'Er. Santosh Rane',
    assignedToRole: 'Structural Engineer',
    dueDate: '2024-12-08',
    priority: 'HIGH',
    status: 'PENDING',
    progressPercent: 0,
    category: 'SAFETY',
    createdAt: '2024-11-24T09:30:00Z',
  },
];

const SNAGS: SnagRecord[] = [
  {
    id: 'sng_01',
    snagNumber: 'SNG-2024-DEL-014',
    title: 'Surface Scratch on Elastomeric Bearing PTFE Disc',
    description: 'During transit offloading, hairline scratch observed on top Teflon sliding plane. Requires resurfacing and micro-polishing.',
    location: 'Bay 3 Quality Quarantine Area',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    category: 'MATERIAL_DAMAGE',
    priority: 'HIGH',
    status: 'OPEN',
    reportedBy: {
      id: 'usr_staff_delhi',
      name: 'Er. Rahul Choudhary',
      role: 'Site QA/QC Engineer',
    },
    assignedTo: 'Dinesh Paswan',
    photoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    createdAt: '2024-11-24T11:00:00Z',
  },
  {
    id: 'sng_02',
    snagNumber: 'SNG-2024-DEL-012',
    title: 'Pin Alignment Hole Misalignment on 35 Kg Shuttering Plate',
    description: 'Flange angle pin hole offset by 3.5mm from standard 100mm pitch on batch #PAT-88.',
    location: 'Stacking Row D - Shuttering Depot',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    category: 'DIMENSION_MISMATCH',
    priority: 'MEDIUM',
    status: 'RESOLVED',
    reportedBy: {
      id: 'usr_staff_delhi',
      name: 'Er. Rahul Choudhary',
      role: 'Site QA/QC Engineer',
    },
    resolutionNotes: 'Re-reamed on CNC drilling jig and re-primed with red oxide.',
    resolvedAt: '2024-11-23T15:30:00Z',
    createdAt: '2024-11-21T09:00:00Z',
  },
];

const DPRS: DPRRecord[] = [
  {
    id: 'dpr_01',
    dprNo: 'DPR-2024-DEL-0329',
    branchId: 'br_delhi',
    branchName: 'Delhi NCR Regional Logistics Depot',
    date: new Date().toISOString().split('T')[0],
    weather: 'Clear / 22°C',
    labourCount: {
      skilled: 14,
      unskilled: 12,
      supervisors: 2,
      total: 28,
    },
    workAccomplished: 'Dispatched 450 pcs 20 Kg Shuttering Plates to L&T Dwarka Expressway Package 2. Completed assembly of 30 sets H-Frame Scaffolding for flyover pier staging.',
    materialReceived: 'Received 1 trailer load (32 Tonnes) cold rolled centering sheets from Patna Central Works (Vehicle: BR-01-GB-4819).',
    machineryDeployed: '1x 5-Tonne Hydra Crane, 1x Forklift 3-Tonne, 2x Inverter MIG Welding Sets.',
    roadblocks: 'Minor trailer arrival delay due to border green corridor checking; all issues resolved.',
    safetyObservations: '100% compliance with PPE (helmets, safety boots, safety harness on staging > 2m). Zero near misses.',
    submittedBy: {
      id: 'usr_admin_delhi',
      name: 'Amitabh Verma',
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
};
