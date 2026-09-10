export interface SeedProduct {
  id: string;
  name: string;
  slug: string;
  category: 'shuttering' | 'scaffolding' | 'bearings' | 'joints' | 'drainage' | 'centering' | 'h-frame' | 'planks' | 'channels' | 'barriers' | 'couplers' | string;
  price?: string;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  weightVariants: string[];
  dimensions: string[];
  materialGrade: string;
  finishType: string;
  applications: string[];
  specs: Record<string, string>;
  variants: {
    name: string;
    weight: string;
    dimensions: string;
    loadCapacity?: string;
    priceEstimate?: string;
  }[];
  imageUrls: string[];
  featuredImage: string;
  complianceStandards: string[];
  isFeatured: boolean;
  minOrderQuantity: string;
}

export interface SeedBranch {
  id: string;
  name: string;
  city: string;
  code: string;
  address: string;
  locationCoords: {
    lat: number;
    lng: number;
    radiusMeters: number;
  };
  allocatedBudget: number;
  currentSpend: number;
  status: 'ACTIVE' | 'SUSPENDED';
  activeWorkersCount: number;
  contactNumber: string;
  adminName: string;
}

export const SEED_BRANCHES: SeedBranch[] = [
  {
    id: 'br_patna_hq',
    name: 'Patna HQ & Heavy Fabrication Plant',
    city: 'Patna',
    code: 'PAT-HQ',
    address: 'Plot No. 14, Industrial Area, Fatuha / Didarganj, Patna, Bihar - 800009',
    locationCoords: {
      lat: 25.5941,
      lng: 85.1376,
      radiusMeters: 600,
    },
    allocatedBudget: 8500000,
    currentSpend: 4250000,
    status: 'ACTIVE',
    activeWorkersCount: 42,
    contactNumber: '+91 94310 28475',
    adminName: 'Sanjay Singh',
  },
  {
    id: 'br_delhi',
    name: 'Delhi NCR Regional Logistics Depot',
    city: 'Delhi',
    code: 'DEL-DEP',
    address: 'Sector 8, IMT Manesar / Dwarka Expressway Corridor, New Delhi - 110077',
    locationCoords: {
      lat: 28.6139,
      lng: 77.209,
      radiusMeters: 500,
    },
    allocatedBudget: 4500000,
    currentSpend: 2180000,
    status: 'ACTIVE',
    activeWorkersCount: 28,
    contactNumber: '+91 98110 39201',
    adminName: 'Amitabh Verma',
  },
  {
    id: 'br_mumbai',
    name: 'Mumbai Western Logistics Hub',
    city: 'Mumbai',
    code: 'MUM-HUB',
    address: 'MIDC Taloja / JNPT Expressway Node, Navi Mumbai, Maharashtra - 410208',
    locationCoords: {
      lat: 19.076,
      lng: 72.8777,
      radiusMeters: 500,
    },
    allocatedBudget: 6000000,
    currentSpend: 3420000,
    status: 'ACTIVE',
    activeWorkersCount: 34,
    contactNumber: '+91 98200 48192',
    adminName: 'Vikram Patil',
  },
  {
    id: 'br_kolkata',
    name: 'Kolkata Eastern Logistics Depot',
    city: 'Kolkata',
    code: 'KOL-DEP',
    address: 'NH-6 Highway Hub, Dankuni Industrial Complex, Kolkata, West Bengal - 712311',
    locationCoords: {
      lat: 22.5726,
      lng: 88.3639,
      radiusMeters: 500,
    },
    allocatedBudget: 3500000,
    currentSpend: 1640000,
    status: 'ACTIVE',
    activeWorkersCount: 22,
    contactNumber: '+91 98300 76219',
    adminName: 'Debashis Mukherjee',
  },
];

export const SEED_PRODUCTS: SeedProduct[] = [
  {
    "id": "prod_ss-expansion-joints",
    "name": "Ss Expansion Joints",
    "slug": "ss-expansion-joints",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Ss Expansion Joints manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Ss Expansion Joints manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "SS 304": "40 mm",
      "Axial": "Welded",
      "Stainless Steel": "3/4 inch",
      "JMK Engineering &amp; Developers": "Pneumatic Connections",
      "Rectangular": "Rectangular"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438212526/RJ/MS/FS/146888318/strip-seal-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_20inch-ms-expansion-joint",
    "name": "20inch MS Expansion Joint",
    "slug": "20inch-ms-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 20inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 20inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "14kg/m",
      "400%": "20inch",
      "Bridges And Highways": "EN8"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476482060/WM/KC/MN/146888318/img-20241227-wa0086-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/575236545/GE/DM/ZE/146888318/2inch-ms-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870901/II/IC/HZ/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870902/IY/AN/XN/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870906/NC/AH/ZY/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870909/LM/CB/IQ/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870912/EA/FE/EV/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870914/PB/CM/YI/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870915/GP/YO/VJ/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870918/SA/ZC/ZV/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870927/RD/YM/GT/146888318/strip-seal-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476482060/WM/KC/MN/146888318/img-20241227-wa0086-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_strip-seal-expansion-joint",
    "name": "Strip Seal Expansion Joint",
    "slug": "strip-seal-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,400",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Strip Seal Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Strip Seal Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "240 mm": "Mild Steel",
      "200 mm": "EPDM Rubber",
      "Cast In": "Building",
      "2 inches": "EN8",
      "Polished": "10mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,400"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/2/488290908/AH/HZ/PX/146888318/bitumen-expansion-joint-mastic-pad-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476998753/FW/XI/OZ/146888318/expansionjoints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992280/LM/EN/TS/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510967192/FI/GE/PN/146888318/finger-type-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510967190/YQ/MU/IJ/146888318/finger-type-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/503098873/DD/JT/VS/146888318/bitumen-expansion-joint-mastic-pad-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/2/488290908/AH/HZ/PX/146888318/bitumen-expansion-joint-mastic-pad-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_7inch-bitumen-expansion-joint",
    "name": "7inch Bitumen Expansion Joint",
    "slug": "7inch-bitumen-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 350",
    "minOrderQuantity": "100 kg",
    "shortDescription": "Heavy-duty 7inch Bitumen Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 7inch Bitumen Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Bitumen Board": "25 mm",
      "1000 mm × 2000 mm": "1 m × 2 m",
      "100 kg/m³": "40–50%",
      "Bridge Deck": "Industrial Floor, Road, Basement, Bridge, Runway",
      "7inch": "EPDM",
      "Rectangular": "5–10%",
      "-20 to 80°C": "IS 1838",
      "Black": "Made in India"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 350"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506813568/WP/MD/MF/146888318/floor-aluminum-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506814519/NI/YT/SB/146888318/floor-aluminum-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510964109/QT/NW/IU/146888318/floor-aluminum-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/506813568/WP/MD/MF/146888318/floor-aluminum-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_3-inch-aluminum-expansion-joint",
    "name": "3 inch Aluminum Expansion Joint",
    "slug": "3-inch-aluminum-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,800",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 3 inch Aluminum Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3 inch Aluminum Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Metallic": "Bridge",
      "3 inch": "40 mm",
      "Welded": "JMK",
      "BOX": "Made in India"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,800"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512287495/GC/TL/EE/146888318/3-inch-iron-road-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507160738/UU/RO/TM/146888318/road-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510958483/TQ/CV/TQ/146888318/road-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512287488/DL/BG/YT/146888318/3-inch-iron-road-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512287500/LZ/UG/EB/146888318/3-inch-iron-road-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/512287495/GC/TL/EE/146888318/3-inch-iron-road-expansion-joint-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_3-inch-iron-road-expansion-joint",
    "name": "3 inch Iron Road Expansion Joint",
    "slug": "3-inch-iron-road-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,250",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 3 inch Iron Road Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3 inch Iron Road Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "IRON": "3 inch",
      "Road Expansion Joint": "JMK"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,250"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507025907/YI/TT/ET/146888318/strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512282426/AQ/BX/KA/146888318/5inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512282429/MC/EC/XK/146888318/5inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512282430/BM/YD/CW/146888318/5inch-ss-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507025907/YI/TT/ET/146888318/strip-seal-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_5inch-ss-expansion-joint",
    "name": "5inch SS Expansion Joint",
    "slug": "5inch-ss-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,100",
    "minOrderQuantity": "10kg",
    "shortDescription": "Heavy-duty 5inch SS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 5inch SS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "Stainless Steel SS 304/316",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "10kg": "Stainless Steel",
      "5inch": "Pneumatic Connections",
      "JMK Engineering &amp; Developers": "10inch"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,100"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507021407/YK/PP/SE/146888318/building-expansion-joint-treatment-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512280986/MZ/EE/LK/146888318/3-inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512280992/NO/OZ/WK/146888318/3-inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512280996/BO/GX/UO/146888318/3-inch-ss-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507021407/YK/PP/SE/146888318/building-expansion-joint-treatment-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_3-inch-ss-expansion-joint",
    "name": "3 inch SS  Expansion Joint",
    "slug": "3-inch-ss-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,900",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 3 inch SS  Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3 inch SS  Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "Stainless Steel SS 304/316",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "3 inch",
      "Pneumatic Connections": "JMK Engineering &amp; Developers",
      "5inch": "Square"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,900"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476107385/WC/OP/WW/146888318/1000055737-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476107387/JF/PL/SK/146888318/1000055705-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476107392/FQ/PX/BN/146888318/1000055709-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476107385/WC/OP/WW/146888318/1000055737-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_22inch-ms-expansion-joint",
    "name": "22inch MS Expansion Joint",
    "slug": "22inch-ms-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,650",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 22inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 22inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "15kg/m": "400%",
      "22inch": "Mild Steel",
      "Bridges And Highways": "EN8"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,650"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471556/OT/UQ/FS/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471532/NT/QE/NJ/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471498/JQ/SC/XV/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471490/RM/YF/ZW/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471504/YB/TJ/OZ/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471541/GG/EF/GM/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471544/ZO/KG/OF/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471534/WQ/TS/DB/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471543/BD/QJ/PP/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471539/AS/JN/XR/146888318/expansion-joints-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476471565/FN/BF/BG/146888318/expansion-joints-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476471556/OT/UQ/FS/146888318/expansion-joints-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_3-inch-strip-seal-expansion-joint",
    "name": "3 Inch Strip Seal Expansion Joint",
    "slug": "3-inch-strip-seal-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 3 Inch Strip Seal Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3 Inch Strip Seal Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "3 inch",
      "JMK": "Made in India"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506805118/JW/IS/MM/146888318/expansion-joint-treatment-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512280325/RJ/IZ/OO/146888318/3-4-inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512280329/VD/BY/VW/146888318/3-4-inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512280334/YS/SV/NO/146888318/3-4-inch-ss-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/506805118/JW/IS/MM/146888318/expansion-joint-treatment-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_3-4-inch-ss-expansion-joint",
    "name": "3/4 inch SS Expansion Joint",
    "slug": "3-4-inch-ss-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,900",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 3/4 inch SS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3/4 inch SS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "Stainless Steel SS 304/316",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "3/4 inch",
      "Pneumatic Connections": "JMK Engineering &amp; Developers",
      "Rectangle": "Treatment"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,900"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506826772/DF/QB/FE/146888318/copper-strip-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510963027/AJ/VC/EF/146888318/copper-strip-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510963030/VZ/MP/BB/146888318/copper-strip-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/506826772/DF/QB/FE/146888318/copper-strip-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_3-inch-copper-strip-expansion-joint",
    "name": "3 inch Copper Strip Expansion Joint",
    "slug": "3-inch-copper-strip-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 940",
    "minOrderQuantity": "10kg",
    "shortDescription": "Heavy-duty 3 inch Copper Strip Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3 inch Copper Strip Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "10kg": "3 inch",
      "JMK": "Made in India"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 940"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512283556/TF/EA/YX/146888318/1-2-inch-ms-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507022855/BA/PA/PQ/146888318/bridge-strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507022967/IG/EZ/VL/146888318/bridge-strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512283552/LK/AF/NJ/146888318/1-2-inch-ms-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512283553/JS/JD/YU/146888318/1-2-inch-ms-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/512283556/TF/EA/YX/146888318/1-2-inch-ms-expansion-joint-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_1-2-inch-ms-expansion-joint",
    "name": "1/2 inch MS  Expansion Joint",
    "slug": "1-2-inch-ms-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,500",
    "minOrderQuantity": "12kg",
    "shortDescription": "Heavy-duty 1/2 inch MS  Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 1/2 inch MS  Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "12kg": "Mild Steel",
      "1/2 inch": "Pneumatic Connections",
      "JMK Engineering &amp; Developers": "15inch"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105521/MT/TT/AY/146888318/1000055862-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105525/IF/IY/NE/146888318/1000055860-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105528/ZI/GZ/AX/146888318/1000055773-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476105521/MT/TT/AY/146888318/1000055862-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_18inch-ms-expansion-joint",
    "name": "18inch MS Expansion Joint",
    "slug": "18inch-ms-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 18inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 18inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "30kg/m": "400%",
      "18inch": "Mild Steel",
      "Bridges And Highways": "10mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507035834/YK/FI/HX/146888318/single-strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512282827/LI/JL/JE/146888318/6inch-ss-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512282839/SS/DK/TR/146888318/6inch-ss-expansion-joint-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507035834/YK/FI/HX/146888318/single-strip-seal-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_6inch-ss-expansion-joint",
    "name": "6inch SS Expansion Joint",
    "slug": "6inch-ss-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,050",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 6inch SS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 6inch SS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "Stainless Steel SS 304/316",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "10Ton": "Stainless Steel",
      "6inch": "Pneumatic Connections",
      "JMK Engineering &amp; Developers": "6inch"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,050"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2026/4/604173077/PQ/RP/JC/146888318/whatsapp-image-2026-04-30-at-13-33-22-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870109/OL/AI/RW/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870108/AW/JQ/KF/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577870101/JV/QF/RR/146888318/strip-seal-expansion-joint-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476107535/BV/JX/AK/146888318/1000055697-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476106853/NK/AN/AV/146888318/1000055705-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2026/4/604173077/PQ/RP/JC/146888318/whatsapp-image-2026-04-30-at-13-33-22-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_expansion-joints",
    "name": "Expansion Joints",
    "slug": "expansion-joints",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,700",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Expansion Joints manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Expansion Joints manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Metallic": "IRON",
      "Bridge": "3/4 inch",
      "Axial": "40 mm",
      "Bolt Fixed": "Hydraulic Pipe",
      "JMK": "IRC"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,700"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507034516/YF/JO/WV/146888318/building-expansion-joints-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507034516/YF/JO/WV/146888318/building-expansion-joints-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_1-2-inch-building-expansion-joints",
    "name": "1/2 inch Building Expansion Joints",
    "slug": "1-2-inch-building-expansion-joints",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,799",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 1/2 inch Building Expansion Joints manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 1/2 inch Building Expansion Joints manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "1/2 inch",
      "Pneumatic Connections": "JMK Engineering &amp; Developers",
      "7inch": "Silver"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,799"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/505863862/GE/DW/FC/146888318/modular-bridge-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/505863862/GE/DW/FC/146888318/modular-bridge-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_4inch-iron-bridge-expansion-joint",
    "name": "4inch Iron Bridge Expansion Joint",
    "slug": "4inch-iron-bridge-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 4inch Iron Bridge Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 4inch Iron Bridge Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Strip Seal": "50 mm",
      "Highway Bridge": "Neoprene Rubber",
      "Heavy Duty": "IRON",
      "4inch": "Made in India",
      "Yes": "Yes"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476483305/UL/JW/IQ/146888318/img-20241227-wa0035-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476483303/PB/MA/OB/146888318/img-20241227-wa0037-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476483305/UL/JW/IQ/146888318/img-20241227-wa0035-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_10inch-ms-expansion-joint",
    "name": "10inch MS Expansion Joint",
    "slug": "10inch-ms-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,000",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 10inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 10inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Polished",
      "Bridge": "F Type",
      "10 Ton": "12mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,000"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990811/WV/PB/UH/146888318/mild-steel-compression-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991326/OI/ZQ/HK/146888318/mild-steel-compression-seal-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476990811/WV/PB/UH/146888318/mild-steel-compression-seal-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_6inch-ms-expansion-joint",
    "name": "6inch MS Expansion Joint",
    "slug": "6inch-ms-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 1,400",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 6inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 6inch MS Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Bridge": "Mild Steel",
      "6 inches": "50 HRC",
      "EN8": "8mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 1,400"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992639/RZ/GY/SZ/146888318/mild-steel-strip-seal-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992657/TW/WR/QJ/146888318/mild-steel-strip-seal-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476992639/RZ/GY/SZ/146888318/mild-steel-strip-seal-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_3-4-inch-ms-strip-seal-expansion-joint",
    "name": "3/4 inch MS Strip Seal Expansion Joint",
    "slug": "3-4-inch-ms-strip-seal-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 3,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 3/4 inch MS Strip Seal Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 3/4 inch MS Strip Seal Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "35kg/m": "400%",
      "3/4 inch": "Mild Steel",
      "Bridges And Highways": "EN8"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507159856/GG/KG/EJ/146888318/bridge-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507159856/GG/KG/EJ/146888318/bridge-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_5inch-ms-bridge-expansion-joint",
    "name": "5inch MS Bridge Expansion Joint",
    "slug": "5inch-ms-bridge-expansion-joint",
    "category": "joints",
    "categoryLabel": "Expansion Joints",
    "price": "₹ 2,850",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 5inch MS Bridge Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 5inch MS Bridge Expansion Joint manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "MS": "Polished",
      "100c": "High",
      "Construction": "100/hr"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,850"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_20-kg-ms-shuttering-plate",
    "name": "20 Kg MS Shuttering Plate",
    "slug": "20-kg-ms-shuttering-plate",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 60",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 20 Kg MS Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 20 Kg MS Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "6 mm": "20 Kg",
      "1200x600 mm": "Mild Steel",
      "IS 2062": "Plain"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 60"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992280/LM/EN/TS/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_27-kg-iron-shuttering-plate",
    "name": "27 kg Iron Shuttering Plate",
    "slug": "27-kg-iron-shuttering-plate",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 63.50",
    "minOrderQuantity": "27 kg",
    "shortDescription": "Heavy-duty 27 kg Iron Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 27 kg Iron Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "3 mm": "ALL;",
      "IS 2062": "Color Galvanized",
      "Rectangle": "27 kg",
      "Made in India": "Iron"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 63.50"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510968117/ZD/NW/TO/146888318/ms-hunch-shuttering-plates-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510968120/XA/OJ/CK/146888318/ms-hunch-shuttering-plates-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510968122/EB/KS/FP/146888318/ms-hunch-shuttering-plates-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/503055081/OM/TR/UR/146888318/ms-hunch-shuttering-plates-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/510968117/ZD/NW/TO/146888318/ms-hunch-shuttering-plates-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_35-kg-ms-shuttering-plates",
    "name": "35 Kg MS Shuttering Plates",
    "slug": "35-kg-ms-shuttering-plates",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 67",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 35 Kg MS Shuttering Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 35 Kg MS Shuttering Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "6 mm": "35 Kg",
      "IS 2062": "Mild Steel",
      "Plain": "Color Galvanized",
      "Made in India": "TATA"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 67"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284571/LS/MI/UP/146888318/15-kg-ms-scaffolding-shuttering-plates-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507115196/KA/DR/QX/146888318/scaffolding-shuttering-plates-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284552/TR/ST/JU/146888318/15-kg-ms-scaffolding-shuttering-plates-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284564/WJ/ZO/CI/146888318/15-kg-ms-scaffolding-shuttering-plates-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/512284571/LS/MI/UP/146888318/15-kg-ms-scaffolding-shuttering-plates-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_15-kg-ms-scaffolding-shuttering-plates",
    "name": "15 kg MS Scaffolding Shuttering Plates",
    "slug": "15-kg-ms-scaffolding-shuttering-plates",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 63.50",
    "minOrderQuantity": "15 kg",
    "shortDescription": "Heavy-duty 15 kg MS Scaffolding Shuttering Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 15 kg MS Scaffolding Shuttering Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "3 mm": "900x600 mm",
      "IS 2062": "Mild Steel",
      "Mild Steel": "Hot Dipped Galvanized",
      "Square": "15 kg"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 63.50"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506871862/TH/ZI/AZ/146888318/mild-steel-shuttering-plate-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510961843/YB/NL/VV/146888318/mild-steel-shuttering-plate-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510961846/FS/BT/AR/146888318/mild-steel-shuttering-plate-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/506871862/TH/ZI/AZ/146888318/mild-steel-shuttering-plate-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_35-kg-mild-steel-shuttering-plate",
    "name": "35 Kg Mild Steel Shuttering Plate",
    "slug": "35-kg-mild-steel-shuttering-plate",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 63.50",
    "minOrderQuantity": "35 Kg",
    "shortDescription": "Heavy-duty 35 Kg Mild Steel Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 35 Kg Mild Steel Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "2 mm": "35 Kg",
      "1200x600 mm": "IS 1079",
      "Mild Steel": "Plain",
      "Hot Dipped Galvanized": "OFFLINE &amp; ONLINE ORDER"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 63.50"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506852248/EU/OI/NA/146888318/ms-steel-shuttering-plate-1000-x-1250mm-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/506852248/EU/OI/NA/146888318/ms-steel-shuttering-plate-1000-x-1250mm-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_20-kg-ms-shuttering-plate-28",
    "name": "20 Kg MS Shuttering Plate",
    "slug": "20-kg-ms-shuttering-plate-28",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 61",
    "minOrderQuantity": "20 Kg",
    "shortDescription": "Heavy-duty 20 Kg MS Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 20 Kg MS Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "20 Kg": "Hot Dipped Galvanized",
      "Online": "Made in India",
      "JMK Engineering &amp; Developers": "Square"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 61"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992217/SS/KY/PD/146888318/mild-steel-pile-round-shuttering-plate-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992254/DS/DH/KN/146888318/mild-steel-pile-round-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476107648/NI/AA/JO/146888318/1000055647-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105271/IH/SQ/OV/146888318/1000055898-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105269/IS/GM/RK/146888318/1000055902-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476992217/SS/KY/PD/146888318/mild-steel-pile-round-shuttering-plate-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_round-ms-shuttering-plate",
    "name": "Round MS Shuttering Plate",
    "slug": "round-ms-shuttering-plate",
    "category": "shuttering",
    "categoryLabel": "Shuttering Plates & Formwork",
    "price": "₹ 80",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Round MS Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Round MS Shuttering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "1500 mm": "3 mm",
      "Mild Steel": "Painted",
      "Angle Frame": "50 Kg",
      "1800mm(Diameter)": "4mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 80"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_scaffolding-adjustable-prop-jack",
    "name": "Scaffolding Adjustable Prop Jack",
    "slug": "scaffolding-adjustable-prop-jack",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 66",
    "minOrderQuantity": "25 kg",
    "shortDescription": "Heavy-duty Scaffolding Adjustable Prop Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Scaffolding Adjustable Prop Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "High tensile steel": "Painted"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 66"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/482920899/KK/PC/RQ/146888318/scaffolding-adjustable-props-jack-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/1/482920961/FV/WX/IZ/146888318/scaffolding-adjustable-props-jack-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/1/482921070/EV/BL/YH/146888318/scaffolding-adjustable-props-jack-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/1/482920899/KK/PC/RQ/146888318/scaffolding-adjustable-props-jack-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_adjustable-props-scaffolding-jack",
    "name": "Adjustable Props Scaffolding Jack",
    "slug": "adjustable-props-scaffolding-jack",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 60",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Adjustable Props Scaffolding Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Adjustable Props Scaffolding Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Adjustable Prop Jack": "Mild Steel",
      "600 mm": "Galvanized"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 60"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990981/FW/JQ/NE/146888318/scaffolding-adjustable-u-head-jack-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991050/LK/KI/BC/146888318/scaffolding-adjustable-u-head-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991077/ZZ/VD/DQ/146888318/scaffolding-adjustable-u-head-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989082/BK/RX/NM/146888318/scaffolding-adjustable-u-head-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989066/JW/VN/WM/146888318/scaffolding-adjustable-u-head-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476860195/UC/QE/LG/146888318/adjustable-u-head-jack-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105697/DV/LA/YC/146888318/1000055842-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/475942423/SW/ZF/VU/146888318/adjustable-u-head-jack-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476990981/FW/JQ/NE/146888318/scaffolding-adjustable-u-head-jack-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_adjustable-u-head-scaffolding-jack",
    "name": "Adjustable U Head Scaffolding Jack",
    "slug": "adjustable-u-head-scaffolding-jack",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 210",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Adjustable U Head Scaffolding Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Adjustable U Head Scaffolding Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Welded U Head": "Mild Steel",
      "400mm": "U Head"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 210"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507517961/BE/AF/QW/146888318/construction-steel-scaffolding-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284106/YX/SB/TK/146888318/construction-steel-scaffolding-jeck-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284107/VN/OC/NZ/146888318/construction-steel-scaffolding-jeck-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284115/LG/KQ/UE/146888318/construction-steel-scaffolding-jeck-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577871674/JE/VE/AX/146888318/construction-steel-scaffolding-jeck-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577871677/ZU/TD/GY/146888318/construction-steel-scaffolding-jeck-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577871681/NO/BQ/FX/146888318/construction-steel-scaffolding-jeck-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577871684/EK/RG/GZ/146888318/construction-steel-scaffolding-jeck-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577871688/UG/IE/FV/146888318/construction-steel-scaffolding-jeck-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577871691/XW/FJ/XK/146888318/construction-steel-scaffolding-jeck-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/507517961/BE/AF/QW/146888318/construction-steel-scaffolding-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_iron-challi-frame",
    "name": "Iron challi frame",
    "slug": "iron-challi-frame",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 55",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Iron challi frame manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Iron challi frame manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "450 mm",
      "3 mm": "6 ton",
      "Construction": "Hot Dipped Galvanized",
      "48 mm": "200 mm",
      "150x150 mm": "Floor Mounted",
      "Mild steel": "Primer coated, Paint coated",
      "Jindal": "Made in India"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 55"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507520993/DO/BA/DF/146888318/scaffolding-vertical-standards-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/510952387/UJ/UL/QO/146888318/scaffolding-vertical-standards-500x500.png"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/507520993/DO/BA/DF/146888318/scaffolding-vertical-standards-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_vertical-scaffolding-jack",
    "name": "Vertical Scaffolding Jack",
    "slug": "vertical-scaffolding-jack",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 60",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Vertical Scaffolding Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Vertical Scaffolding Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "Hot Dipped Galvanized",
      "Silver": "Made in India"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 60"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991613/QE/LZ/PH/146888318/scaffolding-adjustable-props-jack-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991627/MM/FD/XN/146888318/1000055842-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865806/UN/NO/RO/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865983/IZ/XE/JX/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865986/YN/NV/TX/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865985/KP/GK/UU/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865987/PU/IC/RC/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865960/NK/PP/NU/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865971/SE/ZN/JQ/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865966/DW/VC/IO/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/605865947/BK/AZ/PF/146888318/adjustable-steel-scaffolding-jack-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_adjustable-steel-scaffolding-jack",
    "name": "Adjustable Steel Scaffolding  Jack",
    "slug": "adjustable-steel-scaffolding-jack",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 66",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Adjustable Steel Scaffolding  Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Adjustable Steel Scaffolding  Jack manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Adjustable Prop Jack": "Mild Steel",
      "30 kN": "Galvanized",
      "3m": "Polished"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 66"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_iron-drainage-spouts",
    "name": "Iron Drainage Spouts",
    "slug": "iron-drainage-spouts",
    "category": "drainage",
    "categoryLabel": "Bridge Drainage Spouts",
    "price": "₹ 1,000",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Iron Drainage Spouts manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Iron Drainage Spouts manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Iron": "300 mm",
      "Black": "Cascade",
      "8.5X10X19inch(WXLXH)": "To direct water away from buildings and other structures to prevent water damage and maintain",
      "Galvanized Iron": "7mm",
      "Hot Dip": "Grey"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 1,000"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989955/PV/II/RN/146888318/mild-steel-pop-up-drainage-spout-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476106329/IC/IO/KW/146888318/1000055761-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990013/IU/UQ/ML/146888318/mild-steel-pop-up-drainage-spout-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476989955/PV/II/RN/146888318/mild-steel-pop-up-drainage-spout-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_12mm-ms-drainage-spout",
    "name": "12mm MS Drainage Spout",
    "slug": "12mm-ms-drainage-spout",
    "category": "drainage",
    "categoryLabel": "Bridge Drainage Spouts",
    "price": "₹ 800",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 12mm MS Drainage Spout manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 12mm MS Drainage Spout manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Bath Spout": "Mild Steel",
      "225 mm": "Black",
      "7X7X14inch(LXWXH)": "To direct water away from buildings and other structures to prevent water damage and maintain",
      "EN8": "Grey",
      "Polished": "12mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 800"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989849/XP/AX/HW/146888318/mild-steel-drainage-spout-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989865/YL/UL/PW/146888318/mild-steel-drainage-spout-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989876/QE/JO/GO/146888318/mild-steel-drainage-spout-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476989849/XP/AX/HW/146888318/mild-steel-drainage-spout-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_10mm-mild-steel-drainage-spout",
    "name": "10mm Mild Steel Drainage Spout",
    "slug": "10mm-mild-steel-drainage-spout",
    "category": "drainage",
    "categoryLabel": "Bridge Drainage Spouts",
    "price": "₹ 799",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 10mm Mild Steel Drainage Spout manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 10mm Mild Steel Drainage Spout manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Cascade",
      "Tin Plated": "7.5X7.5X12inch(LXWXH)",
      "Grey": "Polished"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 799"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990163/OY/GU/FK/146888318/mild-steel-water-drainage-spout-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476482440/JO/FL/WI/146888318/img-20241227-wa0017-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476482445/BE/AY/XW/146888318/img-20241227-wa0019-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476482443/YM/IJ/OU/146888318/img-20241227-wa0020-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476990163/OY/GU/FK/146888318/mild-steel-water-drainage-spout-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_14mm-ms-drainage-spout",
    "name": "14mm MS Drainage Spout",
    "slug": "14mm-ms-drainage-spout",
    "category": "drainage",
    "categoryLabel": "Bridge Drainage Spouts",
    "price": "₹ 600",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 14mm MS Drainage Spout manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 14mm MS Drainage Spout manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "To direct water away from buildings and other structures to prevent water damage and maintain",
      "EN8": "Grey",
      "8X8X14inch(LXWXH)": "Polished"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 600"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2026/1/575240119/PK/PK/DH/146888318/8mm-ms-bridges-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/577874337/FF/VU/ZV/146888318/8mm-ms-bridges-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990475/XP/DZ/KU/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990458/ZR/DC/NV/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990443/JU/HG/PK/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990391/TE/FM/PG/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476106334/ON/UB/SF/146888318/1000055781-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476106330/NU/QA/DO/146888318/1000055783-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105869/IB/BG/OQ/146888318/1000055653-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105866/MY/YC/NO/146888318/1000055753-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105861/JK/ZV/WM/146888318/1000055759-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476105856/GD/LL/DC/146888318/1000055757-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2026/1/575240119/PK/PK/DH/146888318/8mm-ms-bridges-drainage-spouts-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_drainage-spouts-for-bridges",
    "name": "Drainage Spouts For Bridges",
    "slug": "drainage-spouts-for-bridges",
    "category": "drainage",
    "categoryLabel": "Bridge Drainage Spouts",
    "price": "₹ 1,400",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Drainage Spouts For Bridges manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Drainage Spouts For Bridges manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "1/2 inch",
      "Hindware": "Nickel Plated",
      "8mm": "Round"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 1,400"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990546/WS/DD/IR/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990595/AI/YB/OC/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990699/UT/ZC/EN/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990794/EH/WS/PC/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476990546/WS/DD/IR/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_5mm-ss-drainage-spouts",
    "name": "5mm SS Drainage Spouts",
    "slug": "5mm-ss-drainage-spouts",
    "category": "drainage",
    "categoryLabel": "Bridge Drainage Spouts",
    "price": "₹ 700",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty 5mm SS Drainage Spouts manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 5mm SS Drainage Spouts manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "Stainless Steel SS 304/316",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "Galvanized Iron",
      "Hot Dip": "To direct water away from buildings and other structures to prevent water damage and maintain",
      "8.5X8.5X19inch(LXWXH)": "Silver"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 700"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_elastomeric-pot-ptfe-bridge-bearings",
    "name": "Elastomeric Pot PTFE Bridge Bearings",
    "slug": "elastomeric-pot-ptfe-bridge-bearings",
    "category": "bearings",
    "categoryLabel": "Bridge & Structural Bearings",
    "price": "₹ 12,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Elastomeric Pot PTFE Bridge Bearings manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Elastomeric Pot PTFE Bridge Bearings manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Guided": "100 Ton",
      "Mild Steel": "Sandhyaflex",
      "80 shore a": "Grey",
      "Pot PTFE": "Polished",
      "Bridge": "15mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 12,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991491/YM/YK/CZ/146888318/elastomeric-bridge-bearing-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476483695/NK/VL/NN/146888318/img-20241227-wa0034-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991516/AR/RH/RB/146888318/elastomeric-bridge-bearing-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476991491/YM/YK/CZ/146888318/elastomeric-bridge-bearing-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_elastomeric-bridge-bearing",
    "name": "Elastomeric Bridge Bearing",
    "slug": "elastomeric-bridge-bearing",
    "category": "bearings",
    "categoryLabel": "Bridge & Structural Bearings",
    "price": "₹ 3,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Elastomeric Bridge Bearing manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Elastomeric Bridge Bearing manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Laminated": "Rectangular",
      "EPDM": "1000 kN",
      "80 Ton": "500 mm",
      "Bridge": "144X1000mm(WXL)",
      "50 mm": "25mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 3,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438217755/YR/BL/XO/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438217754/OK/WL/YV/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438217756/TY/RK/XR/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438217757/JC/VM/OY/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438217759/YJ/DF/ZK/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/7/438217755/YR/BL/XO/146888318/pot-ptfe-bridge-bearings-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_pot-ptfe-bridge-bearings",
    "name": "Pot Ptfe Bridge Bearings",
    "slug": "pot-ptfe-bridge-bearings",
    "category": "bearings",
    "categoryLabel": "Bridge & Structural Bearings",
    "price": "₹ 100",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Pot Ptfe Bridge Bearings manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Pot Ptfe Bridge Bearings manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "20 mm": "Silver",
      "MS": "100/HR",
      "Polished": "5mm"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 100"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991775/EZ/SN/VM/146888318/elastomeric-bridge-rubber-bearing-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476106014/QN/LY/SR/146888318/1000055803-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991824/CG/HQ/TN/146888318/elastomeric-bridge-rubber-bearing-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/12/476991775/EZ/SN/VM/146888318/elastomeric-bridge-rubber-bearing-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_elastomeric-bridge-rubber-bearing",
    "name": "Elastomeric Bridge Rubber Bearing",
    "slug": "elastomeric-bridge-rubber-bearing",
    "category": "bearings",
    "categoryLabel": "Bridge & Structural Bearings",
    "price": "₹ 1,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Elastomeric Bridge Rubber Bearing manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Elastomeric Bridge Rubber Bearing manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Reinforced": "90 mm",
      "Rectangular": "Rubber",
      "96 mm": "1000kg",
      "710 mm": "Bridge",
      "400%": "160X1000mm(WXL)"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 1,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438218769/OF/SP/HF/146888318/elastomeric-bearing-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476464034/XA/CG/NX/146888318/bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476464071/XM/WQ/TM/146888318/bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476464062/BX/FM/UD/146888318/bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476464069/QN/TC/FX/146888318/bridge-bearings-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476464060/WM/QA/HC/146888318/bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2024/7/438218769/OF/SP/HF/146888318/elastomeric-bearing-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_elastomeric-bridge-bearing-46",
    "name": "Elastomeric Bridge Bearing",
    "slug": "elastomeric-bridge-bearing-46",
    "category": "bearings",
    "categoryLabel": "Bridge & Structural Bearings",
    "price": "₹ 2,500",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Elastomeric Bridge Bearing manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Elastomeric Bridge Bearing manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "60 mm": "Rectangular",
      "Rubber": "BRIDGE"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,500"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_mild-steel-centring-plates",
    "name": "Mild Steel Centring Plates",
    "slug": "mild-steel-centring-plates",
    "category": "centering",
    "categoryLabel": "Centering Plates & Sheets",
    "price": "₹ 60",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Mild Steel Centring Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Mild Steel Centring Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "2.5 mm": "27 Kg",
      "1200x600 mm": "Plain",
      "Painted": "Angle Frame",
      "18 kg": "MIG Welded"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 60"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507136787/QF/CS/CD/146888318/mild-steel-centering-sheet-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284979/SF/KJ/TU/146888318/13-kg-mild-steel-centering-sheet-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284983/UT/AM/AD/146888318/13-kg-mild-steel-centering-sheet-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512284984/FF/SM/VU/146888318/13-kg-mild-steel-centering-sheet-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507136787/QF/CS/CD/146888318/mild-steel-centering-sheet-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_13-kg-mild-steel-centering-sheet",
    "name": "13 Kg Mild Steel Centering Sheet",
    "slug": "13-kg-mild-steel-centering-sheet",
    "category": "centering",
    "categoryLabel": "Centering Plates & Sheets",
    "price": "₹ 63.50",
    "minOrderQuantity": "13 Kg",
    "shortDescription": "Heavy-duty 13 Kg Mild Steel Centering Sheet manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 13 Kg Mild Steel Centering Sheet manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "2 mm": "15 Kg",
      "900x600 mm": "Mild Steel",
      "Hot Dipped Galvanized": "Plain",
      "Painted": "Slab"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 63.50"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512285387/EX/GL/SB/146888318/20-kg-steel-centering-plates-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507104354/NA/OS/NC/146888318/steel-centering-plates-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512285379/JR/PM/OG/146888318/20-kg-steel-centering-plates-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512285384/JD/CP/YZ/146888318/20-kg-steel-centering-plates-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/512285387/EX/GL/SB/146888318/20-kg-steel-centering-plates-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_20-kg-steel-centering-plates",
    "name": "20 Kg Steel Centering Plates",
    "slug": "20-kg-steel-centering-plates",
    "category": "centering",
    "categoryLabel": "Centering Plates & Sheets",
    "price": "₹ 63.50",
    "minOrderQuantity": "20 Kg",
    "shortDescription": "Heavy-duty 20 Kg Steel Centering Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 20 Kg Steel Centering Plates manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "20 Kg": "Color Galvanized",
      "On": "Made in India",
      "MS": "JMK Engineering &amp; Developers"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 63.50"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_iron-h-frame-scaffolding-system",
    "name": "Iron H Frame Scaffolding System",
    "slug": "iron-h-frame-scaffolding-system",
    "category": "h-frame",
    "categoryLabel": "H-Frame Scaffolding",
    "price": "₹ 65",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Iron H Frame Scaffolding System manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Iron H Frame Scaffolding System manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Iron": "12Ton",
      "MS": "Made in India",
      "Jmk Engineering": "Pan india"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 65"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507519619/CV/TB/SN/146888318/mild-steel-h-frame-scaffolding-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/507519619/CV/TB/SN/146888318/mild-steel-h-frame-scaffolding-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_mild-steel-h-frame-scaffolding",
    "name": "Mild Steel H Frame Scaffolding",
    "slug": "mild-steel-h-frame-scaffolding",
    "category": "h-frame",
    "categoryLabel": "H-Frame Scaffolding",
    "price": "₹ 1,090",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Mild Steel H Frame Scaffolding manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Mild Steel H Frame Scaffolding manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Yes",
      "6inch": "MS",
      "Made in India": "JMK Engineering &amp; Developers"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 1,090"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507520279/US/FU/XV/146888318/h-frame-scaffolding-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/507520279/US/FU/XV/146888318/h-frame-scaffolding-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_stainless-steel-h-frame-scaffolding",
    "name": "Stainless Steel H Frame Scaffolding",
    "slug": "stainless-steel-h-frame-scaffolding",
    "category": "h-frame",
    "categoryLabel": "H-Frame Scaffolding",
    "price": "₹ 1,090",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Stainless Steel H Frame Scaffolding manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Stainless Steel H Frame Scaffolding manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "100Ton",
      "5inch": "MS",
      "Made in India": "Rectangular"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 1,090"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_mild-steel-scaffolding-walkway-planks",
    "name": "Mild Steel Scaffolding Walkway Planks",
    "slug": "mild-steel-scaffolding-walkway-planks",
    "category": "planks",
    "categoryLabel": "Walkway Planks & Jali",
    "price": "₹ 80",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Mild Steel Scaffolding Walkway Planks manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Mild Steel Scaffolding Walkway Planks manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Hot Dipped Galvanized",
      "On": "JMK Engineering &amp; Developers",
      "Silver": "Rectangle"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 80"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512287021/CV/VO/ET/146888318/scaffold-walkway-plank-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507521925/HH/LW/EZ/146888318/scaffold-walkway-plank-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512287011/GO/JX/CS/146888318/scaffold-walkway-plank-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/5/512287017/XK/JY/JE/146888318/scaffold-walkway-plank-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/512287021/CV/VO/ET/146888318/scaffold-walkway-plank-500x500.jpeg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_scaffold-walkway-plank",
    "name": "Scaffold Walkway Plank",
    "slug": "scaffold-walkway-plank",
    "category": "planks",
    "categoryLabel": "Walkway Planks & Jali",
    "price": "₹ 70",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Scaffold Walkway Plank manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Scaffold Walkway Plank manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Stainless Steel": "Hot Dipped Galvanized",
      "Online": "Made in India",
      "JMK Engineering &amp; Developers": "Plank"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 70"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_ms-channel-sail-100-x-50-mm",
    "name": "Ms Channel Sail 100 X 50 Mm",
    "slug": "ms-channel-sail-100-x-50-mm",
    "category": "channels",
    "categoryLabel": "MS Structural Channels",
    "price": "₹ 54,000",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Ms Channel Sail 100 X 50 Mm manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Ms Channel Sail 100 X 50 Mm manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "6 Meter": "IS 2062",
      "Construction": "Structural, all",
      "Rectangular": "Polished",
      "Silver": "Sail"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 54,000"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506857058/BT/GD/DK/146888318/ms-channel-100-x-50-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/575246234/JE/AX/NH/146888318/6-meter-ms-channel-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2026/1/575247517/LC/NB/EZ/146888318/6-meter-ms-channel-500x500.jpeg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/506857058/BT/GD/DK/146888318/ms-channel-100-x-50-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_6-meter-ms-channel",
    "name": "6 Meter MS Channel",
    "slug": "6-meter-ms-channel",
    "category": "channels",
    "categoryLabel": "MS Structural Channels",
    "price": "₹ 48,000",
    "minOrderQuantity": "6 Meter",
    "shortDescription": "Heavy-duty 6 Meter MS Channel manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade 6 Meter MS Channel manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "6 Meter": "IS 2062",
      "Construction": "Rectangular",
      "Polished": "Silver"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 48,000"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_w-beam-crash-barrier",
    "name": "W Beam Crash Barrier",
    "slug": "w-beam-crash-barrier",
    "category": "barriers",
    "categoryLabel": "Metal Beam Crash Barriers",
    "price": "₹ 71",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty W Beam Crash Barrier manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade W Beam Crash Barrier manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Aluminium": "Construction",
      "Interior": "Anglicized",
      "Polished": "Grey"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 71"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507160016/SK/NM/ZD/146888318/bridge-expansion-joint-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506803950/UR/PG/XU/146888318/w-metal-beam-crash-barrier-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506804223/PG/CZ/RT/146888318/w-metal-beam-crash-barrier-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/4/506803646/VM/SE/DW/146888318/w-metal-beam-crash-barrier-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507160016/SK/NM/ZD/146888318/bridge-expansion-joint-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_w-metal-beam-crash-barrier",
    "name": "W Metal Beam Crash Barrier",
    "slug": "w-metal-beam-crash-barrier",
    "category": "barriers",
    "categoryLabel": "Metal Beam Crash Barriers",
    "price": "₹ 2,600",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty W Metal Beam Crash Barrier manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade W Metal Beam Crash Barrier manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Silver",
      "3X5X1800 mm": "Road Safety"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 2,600"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_mild-steel-centering-plate",
    "name": "Mild Steel Centering Plate",
    "slug": "mild-steel-centering-plate",
    "category": "centering",
    "categoryLabel": "Centering Plates & Sheets",
    "price": "₹ 66",
    "minOrderQuantity": "15 kg",
    "shortDescription": "Heavy-duty Mild Steel Centering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Mild Steel Centering Plate manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Structural": "Painted",
      "Angle Frame": "15 kg"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 66"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507161482/ZL/RO/JG/146888318/kwikstage-scaffolding-system-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507161482/ZL/RO/JG/146888318/kwikstage-scaffolding-system-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_kwikstage-scaffolding-system",
    "name": "Kwikstage Scaffolding System",
    "slug": "kwikstage-scaffolding-system",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Systems & Jacks",
    "price": "₹ 60",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Kwikstage Scaffolding System manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Kwikstage Scaffolding System manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Hot Dipped Galvanized",
      "Construction": "Silver",
      "12x12x12": "JMK Engineering &amp; Developers"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 60"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_scaffolding-prop-sleeve",
    "name": "Scaffolding Prop Sleeve",
    "slug": "scaffolding-prop-sleeve",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Jacks & Props",
    "price": "₹ 140",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Scaffolding Prop Sleeve manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Scaffolding Prop Sleeve manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Mild Steel": "Round",
      "Black": "Construction",
      "Made in India": "JMK Engineering &amp; Developers"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 140"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/5/507518778/UU/QU/DO/146888318/pressed-mild-steel-swivel-coupler-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/5/507518778/UU/QU/DO/146888318/pressed-mild-steel-swivel-coupler-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_pressed-mild-steel-swivel-coupler",
    "name": "Pressed Mild Steel Swivel Coupler",
    "slug": "pressed-mild-steel-swivel-coupler",
    "category": "couplers",
    "categoryLabel": "Scaffolding Couplers & Fittings",
    "price": "₹ 51",
    "minOrderQuantity": "50 Pieces",
    "shortDescription": "Heavy-duty Pressed Mild Steel Swivel Coupler manufactured by JMK Engineering & Developers to IRC, MORTH, and IS standards for bridge and infrastructure projects.",
    "fullDescription": "Heavy-duty industrial grade Pressed Mild Steel Swivel Coupler manufactured by JMK Engineering & Developers to IRC, MORTH, and IS compliance standards. Optimized for bridges, flyovers, commercial infrastructure, and heavy civil construction projects.",
    "weightVariants": [
      "13 Kg",
      "20 Kg",
      "27 Kg",
      "35 Kg",
      "Custom Tonnage"
    ],
    "dimensions": [
      "Standard Industrial Sizes (Customizable on Order)"
    ],
    "materialGrade": "IS 2062 Grade E250 / Fe 410",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Bridge & Flyover Deck Construction",
      "Highway & Expressway Infrastructure",
      "High-Rise Commercial & Residential Formwork",
      "Metro Rail Viaducts & Station Piers",
      "Heavy Industrial Sheds & Civil Projects"
    ],
    "specs": {
      "Building": "40mm/40mm",
      "400 gram": "Round"
    },
    "variants": [
      {
        "name": "Standard Specification",
        "weight": "13 Kg",
        "dimensions": "Standard Industrial Sizes (Customizable on Order)",
        "priceEstimate": "₹ 51"
      },
      {
        "name": "Heavy Duty Reinforced",
        "weight": "Custom Heavy Gauge",
        "dimensions": "Project BOQ Custom",
        "priceEstimate": "Custom Quote"
      }
    ],
    "imageUrls": [
      "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476990186/HW/LP/LH/146888318/galvanized-iron-drainage-spouts-500x500.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg"
    ],
    "featuredImage": "https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 2000",
      "IRC:83",
      "IRC:SP:69",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  }
];


export interface PhotoGalleryItem {
  id: string;
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  moq?: string;
  slug?: string;
}

export const INDIA_MART_GALLERY_PHOTOS: PhotoGalleryItem[] = [
  // 1. Shuttering & Centering
  {
    id: 'gal_1',
    title: '13 Kg Mild Steel Centering Sheets',
    category: 'Shuttering & Centering',
    price: '₹850 - ₹1,050 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg',
    moq: '100 Pcs',
    slug: 'mild-steel-centering-sheets',
  },
  {
    id: 'gal_2',
    title: '20 Kg RCC Slab Shuttering Plates',
    category: 'Shuttering & Centering',
    price: '₹1,450 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg',
    moq: '50 Pcs',
    slug: 'iron-shuttering-plates',
  },
  {
    id: 'gal_3',
    title: '27 kg Iron Shuttering Plate',
    category: 'Shuttering & Centering',
    price: '₹1,950 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507525256/PU/PQ/IM/146888318/steel-shuttering-plate-500x500.jpg',
    moq: '50 Pcs',
    slug: 'iron-shuttering-plates',
  },
  {
    id: 'gal_4',
    title: 'Mild Steel Column Shuttering Plate',
    category: 'Shuttering & Centering',
    price: '₹1,650 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476992283/LI/NG/NU/146888318/mild-steel-column-shuttering-plate-500x500.jpeg',
    moq: '50 Pcs',
    slug: 'iron-shuttering-plates',
  },
  {
    id: 'gal_5',
    title: 'MS Hunch Shuttering Plates & Soldiers',
    category: 'Shuttering & Centering',
    price: '₹3,400 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/510968117/ZD/NW/TO/146888318/ms-hunch-shuttering-plates-500x500.jpg',
    moq: '20 Pcs',
    slug: 'ms-shuttering-soldiers',
  },
  {
    id: 'gal_6',
    title: 'Heavy Stacking Shuttering Plates',
    category: 'Shuttering & Centering',
    price: '₹1,950 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982647/UB/EB/FC/146888318/shuttering-plate-500x500.jpeg',
    moq: '50 Pcs',
    slug: 'iron-shuttering-plates',
  },

  // 2. Scaffolding & Jacks
  {
    id: 'gal_7',
    title: 'Iron H Frame Scaffolding System',
    category: 'Scaffolding Systems',
    price: '₹2,650 / Set',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/506847242/EZ/YV/NW/146888318/iron-h-frame-scaffolding-system-500x500.jpg',
    moq: '50 Sets',
    slug: 'h-frame-scaffolding-system',
  },
  {
    id: 'gal_8',
    title: 'Adjustable Props Scaffolding Jacks',
    category: 'Scaffolding Systems',
    price: '₹1,250 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476992280/LM/EN/TS/146888318/mild-steel-column-shuttering-plate-500x500.jpeg',
    moq: '100 Pcs',
    slug: 'adjustable-steel-props-jacks',
  },
  {
    id: 'gal_9',
    title: 'Vertical Scaffolding Base & U-Head Jack',
    category: 'Scaffolding Systems',
    price: '₹380 - ₹620 / Pc',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476992291/XQ/XM/AQ/146888318/column-shuttering-plate-500x500.jpeg',
    moq: '150 Pcs',
    slug: 'vertical-scaffolding-jacks',
  },

  // 3. Expansion Joints
  {
    id: 'gal_10',
    title: 'Ss Expansion Joints Waterproofing Systems',
    category: 'Expansion Joints',
    price: '₹3,500 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/507026690/CF/QN/RH/146888318/expansion-joint-waterproofing-services-500x500.jpg',
    moq: '2 Units',
    slug: 'stainless-steel-expansion-joints',
  },
  {
    id: 'gal_11',
    title: 'Expansion Joint Treatment & Structural Seal',
    category: 'Expansion Joints',
    price: '₹3,500 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/510965057/JP/JJ/SO/146888318/expansion-joint-treatment-500x500.jpg',
    moq: '2 Units',
    slug: 'stainless-steel-expansion-joints',
  },
  {
    id: 'gal_12',
    title: 'Floor Aluminum & Stainless Joint Profile',
    category: 'Expansion Joints',
    price: '₹3,500 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/506813828/IV/OU/DI/146888318/floor-aluminum-joint-500x500.jpg',
    moq: '2 Units',
    slug: 'stainless-steel-expansion-joints',
  },
  {
    id: 'gal_13',
    title: 'Finger Type Expansion Joint Bridge Assembly',
    category: 'Expansion Joints',
    price: '₹3,500 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/505863257/GB/DG/GQ/146888318/finger-type-expansion-joint-500x500.jpg',
    moq: '2 Units',
    slug: 'stainless-steel-expansion-joints',
  },
  {
    id: 'gal_14',
    title: '20inch MS Expansion Joint with Anchor Bars',
    category: 'Expansion Joints',
    price: '₹2,500 / Meter',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    moq: '12 Mtrs',
    slug: 'strip-seal-ms-expansion-joints',
  },
  {
    id: 'gal_15',
    title: '20inch Heavy Duty Strip Seal Expansion Joint',
    category: 'Expansion Joints',
    price: '₹2,500 / Meter',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg',
    moq: '12 Mtrs',
    slug: 'strip-seal-ms-expansion-joints',
  },
  {
    id: 'gal_16',
    title: '20inch Strip Seal Joint Deck Profile',
    category: 'Expansion Joints',
    price: '₹2,500 / Meter',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212526/RJ/MS/FS/146888318/strip-seal-expansion-joint-500x500.jpg',
    moq: '12 Mtrs',
    slug: 'strip-seal-ms-expansion-joints',
  },
  {
    id: 'gal_17',
    title: 'Strip Seal Highway Expansion Joint',
    category: 'Expansion Joints',
    price: '₹2,400 / Meter',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476482060/WM/KC/MN/146888318/img-20241227-wa0086-500x500.jpg',
    moq: '12 Mtrs',
    slug: 'strip-seal-ms-expansion-joints',
  },
  {
    id: 'gal_18',
    title: '2inch MS Expansion Joint Edge Beam',
    category: 'Expansion Joints',
    price: '₹2,400 / Meter',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2026/1/575236545/GE/DM/ZE/146888318/2inch-ms-expansion-joint-500x500.jpeg',
    moq: '12 Mtrs',
    slug: 'strip-seal-ms-expansion-joints',
  },

  // 4. Drainage Infrastructure
  {
    id: 'gal_19',
    title: 'Mild Steel Bridge Drainage Spout (10mm Wall)',
    category: 'Drainage Infrastructure',
    price: '₹1,150 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476989849/XP/AX/HW/146888318/mild-steel-drainage-spout-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_20',
    title: 'Mild Steel Drainage Spout 150mm Dia',
    category: 'Drainage Infrastructure',
    price: '₹1,650 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476989865/YL/UL/PW/146888318/mild-steel-drainage-spout-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_21',
    title: 'Heavy MS Drainage Spout with Top Grating',
    category: 'Drainage Infrastructure',
    price: '₹1,850 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476989876/QE/JO/GO/146888318/mild-steel-drainage-spout-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_22',
    title: 'Mild Steel Water Drainage Spout Assembly',
    category: 'Drainage Infrastructure',
    price: '₹1,150 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990163/OY/GU/FK/146888318/mild-steel-water-drainage-spout-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_23',
    title: 'Galvanized Iron Hot-Dip Drainage Spouts',
    category: 'Drainage Infrastructure',
    price: '₹2,100 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990475/XP/DZ/KU/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_24',
    title: 'GI Hot Dip Highway Deck Spout',
    category: 'Drainage Infrastructure',
    price: '₹2,100 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990458/ZR/DC/NV/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_25',
    title: 'Galvanized Drainage Spouts Production Batch',
    category: 'Drainage Infrastructure',
    price: '₹2,100 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990443/JU/HG/PK/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_26',
    title: 'GI Anti-Corrosive Flyover Spouts',
    category: 'Drainage Infrastructure',
    price: '₹2,100 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990391/TE/FM/PG/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_27',
    title: 'Hot Dip Galvanized Heavy Spouts Stack',
    category: 'Drainage Infrastructure',
    price: '₹2,100 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990546/WS/DD/IR/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_28',
    title: '8mm MS Bridges Drainage Spout',
    category: 'Drainage Infrastructure',
    price: '₹950 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2026/1/575240119/PK/PK/DH/146888318/8mm-ms-bridges-drainage-spouts-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_29',
    title: '8mm Heavy Duty Bridge Deck Spout',
    category: 'Drainage Infrastructure',
    price: '₹950 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2026/1/577874337/FF/VU/ZV/146888318/8mm-ms-bridges-drainage-spouts-500x500.jpeg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_30',
    title: 'Bridge Drainage Funnel & Hopper Fabrication',
    category: 'Drainage Infrastructure',
    price: '₹1,450 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476482440/JO/FL/WI/146888318/img-20241227-wa0017-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_31',
    title: 'Drainage Spout Factory Workshop Staging',
    category: 'Drainage Infrastructure',
    price: '₹1,450 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476482445/BE/AY/XW/146888318/img-20241227-wa0019-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_32',
    title: 'Finished Bridge Drainage Hoppers Batch',
    category: 'Drainage Infrastructure',
    price: '₹1,450 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476482443/YM/IJ/OU/146888318/img-20241227-wa0020-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_33',
    title: 'Cast Iron Deck Drainage Grates Batch',
    category: 'Drainage Infrastructure',
    price: '₹2,250 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476106334/ON/UB/SF/146888318/1000055781-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_34',
    title: 'MoRTH Certified CI Carriageway Spouts',
    category: 'Drainage Infrastructure',
    price: '₹2,250 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476106330/NU/QA/DO/146888318/1000055783-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_35',
    title: 'Machined Cast Iron Drainage Gratings',
    category: 'Drainage Infrastructure',
    price: '₹2,250 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476105869/IB/BG/OQ/146888318/1000055653-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_36',
    title: 'Heavy Duty Cast Iron Slotted Grates',
    category: 'Drainage Infrastructure',
    price: '₹2,250 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476105866/MY/YC/NO/146888318/1000055753-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_37',
    title: 'Highway Spouts Quality Check Inspection',
    category: 'Drainage Infrastructure',
    price: '₹2,250 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476105861/JK/ZV/WM/146888318/1000055759-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
  {
    id: 'gal_38',
    title: 'Central Works Patna Drainage Dispatch Ready',
    category: 'Drainage Infrastructure',
    price: '₹2,250 / Piece',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476105856/GD/LL/DC/146888318/1000055757-500x500.jpg',
    moq: '25 Pcs',
    slug: 'cast-iron-ms-drainage-spouts',
  },
];

export const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  'ms-shuttering-plates': '27-kg-iron-shuttering-plate',
  'shuttering-plates': '27-kg-iron-shuttering-plate',
  'shuttering-plate': '27-kg-iron-shuttering-plate',
  'steel-shuttering-plate': '27-kg-iron-shuttering-plate',
  'shuttering-soldier': '35-kg-ms-shuttering-plates',
  'ms-shuttering-soldiers': '35-kg-ms-shuttering-plates',
  '13-kg-20-kg-mild-steel-centering-sheets': '13-kg-mild-steel-centering-sheet',
  '13-kg-20-kg-ms-centering-sheets': '13-kg-mild-steel-centering-sheet',
  'centering-plates': 'mild-steel-centring-plates',
  'mild-steel-centering-sheets': '13-kg-mild-steel-centering-sheet',
  'props-jack': 'scaffolding-adjustable-prop-jack',
  'prop-jack': 'scaffolding-adjustable-prop-jack',
  'scaffolding-prop-jack': 'scaffolding-adjustable-prop-jack',
  'h-frame-scaffolding': 'iron-h-frame-scaffolding-system',
  'strips-expansion-joint': 'strip-seal-expansion-joint',
  'bitumen-expansion-joint': '7inch-bitumen-expansion-joint',
  'expansion-joints-with-cover-plate': 'ss-expansion-joints',
  'expansion-joint-with-cover-plate': 'ss-expansion-joints',
  'ptfe-bridge-bearings': 'pot-ptfe-bridge-bearings',
  'pot-bearing': 'pot-ptfe-bridge-bearings',
  'bridge-bearings-with-cover-plate': 'elastomeric-pot-ptfe-bridge-bearings',
  'mild-steel-ms-drainage-spout': '12mm-ms-drainage-spout',
  'ms-drainage-spout': '12mm-ms-drainage-spout',
};

export function findProductBySlug(slug: string): SeedProduct | undefined {
  const directMatch = SEED_PRODUCTS.find((p) => p.slug === slug);
  if (directMatch) return directMatch;
  const targetSlug = PRODUCT_SLUG_ALIASES[slug];
  if (targetSlug) {
    return SEED_PRODUCTS.find((p) => p.slug === targetSlug);
  }
  const lower = slug.toLowerCase();
  return SEED_PRODUCTS.find((p) => p.slug.toLowerCase() === lower);
}

export function getAllProductSlugs(): string[] {
  const baseSlugs = SEED_PRODUCTS.map((p) => p.slug);
  const aliasSlugs = Object.keys(PRODUCT_SLUG_ALIASES);
  return Array.from(new Set([...baseSlugs, ...aliasSlugs]));
}

export interface IndiaMartVideoItem {
  id: string;
  title: string;
  duration: string;
  views: string;
  uploadedTime: string;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  tags: string[];
  productSlug?: string;
  badge?: string;
}

export const INDIA_MART_VIDEOS: IndiaMartVideoItem[] = [
  {
    id: 'vid_1',
    title: 'strip seal expansion Jiont installation|#construction #explore |#trending |#youtubeshorts |@youtube',
    duration: '0:36',
    views: '31 views',
    uploadedTime: '4 years ago',
    category: 'Expansion Joints',
    badge: 'Site Execution',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    description: 'Live field footage of Strip Seal Expansion Joint alignment, rebar tack welding, and elastomeric neoprene gland locking on a major highway bridge deck.',
    tags: ['Strip Seal', 'Expansion Joint', 'Bridge Deck', 'IRC:SP:69', 'MORTH'],
    productSlug: 'strip-seal-expansion-joint'
  },
  {
    id: 'vid_2',
    title: 'ms shutering plate jmk engineering and developer #jmkeng #bridge #construction call 7493916194',
    duration: '0:12',
    views: '59 views',
    uploadedTime: '2 years ago',
    category: 'Shuttering & Centering',
    badge: 'Plant QC Inspection',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982660/HG/JP/XN/146888318/shuttering-plate-500x500.jpeg',
    description: 'Factory floor quality inspection of heavy MS shuttering plates, laser-straight edge alignment, and 35x5mm angle stiffener welding for high-load column formwork.',
    tags: ['MS Shuttering', 'Centering Plates', 'Formwork', 'IS 2062', '27 Kg / 35 Kg'],
    productSlug: '27-kg-iron-shuttering-plate'
  },
  {
    id: 'vid_3',
    title: 'rajrapa site #rajrappa_mandir #jharkhand #trending',
    duration: '0:16',
    views: '43 views',
    uploadedTime: '4 years ago',
    category: 'Site Execution',
    badge: 'Project Landmark',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/506847242/EZ/YV/NW/146888318/iron-h-frame-scaffolding-system-500x500.jpg',
    description: 'Structural scaffolding staging and heavy steel beam erection at the iconic Rajrappa Mandir infrastructure development in Jharkhand.',
    tags: ['Rajrappa Site', 'Jharkhand Project', 'Heavy Civil', 'Erection'],
    productSlug: 'iron-h-frame-scaffolding-system'
  },
  {
    id: 'vid_4',
    title: 'JMK Engineering & Developer | Scaffolding System, Prop Jack, U Head Jack Bridge Engineering Products',
    duration: '0:41',
    views: '14 views',
    uploadedTime: '1 month ago',
    category: 'Scaffolding Systems',
    badge: 'Product Walkthrough',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/1/484334311/XQ/LR/XW/146888318/mild-steel-prop-jack-500x500.jpg',
    description: 'In-depth showcase of adjustable telescopic prop jacks, heavy-duty forged U-Head jacks, stirrup heads, and modular cuplock scaffolding systems.',
    tags: ['Prop Jack', 'U Head Jack', 'Scaffolding', 'IS 1161', 'Bridge Engineering'],
    productSlug: 'scaffolding-adjustable-prop-jack'
  },
  {
    id: 'vid_5',
    title: 'Inside JMK Engineering Factory 🏗️ Bridge Construction Materials Manufacturer #shorts',
    duration: '0:27',
    views: '17 views',
    uploadedTime: '1 month ago',
    category: 'Factory Tour',
    badge: 'Patna Central Works',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476991144/AO/SM/KN/146888318/pot-ptfe-bridge-bearings-500x500.jpg',
    description: 'Inside look at the 45,000 sq.ft Patna Central Works manufacturing heavy POT-PTFE bridge bearings, drainage spouts, and certified infrastructure materials.',
    tags: ['Factory Tour', 'Patna Plant', 'Bridge Materials', 'ISO 9001:2015', 'CNC Machine'],
    productSlug: 'pot-ptfe-bridge-bearings'
  },
  {
    id: 'vid_6',
    title: 'How Heavy-Duty Shuttering Equipment Is Loaded Construction Material Factory #shorts',
    duration: '0:28',
    views: '14 views',
    uploadedTime: '1 month ago',
    category: 'Logistics & Dispatch',
    badge: 'Bulk Dispatch',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982647/UB/EB/FC/146888318/shuttering-plate-500x500.jpeg',
    description: 'Automated overhead crane loading and bundling of heavy shuttering plates and telescopic prop jacks for rapid interstate highway logistics.',
    tags: ['Logistics', 'Bulk Dispatch', 'Truck Staging', 'Overhead Crane', 'Pan-India'],
    productSlug: '35-kg-ms-shuttering-plates'
  },
  {
    id: 'vid_7',
    title: 'JMK Engineering & Developer Bridge Engineering Products Manufacture Expansion Joint, Bridge Bearing',
    duration: '0:54',
    views: '11 views',
    uploadedTime: '1 month ago',
    category: 'Bridge Bearings & Joints',
    badge: 'IRC Compliance',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg',
    description: 'Precision machining and hydraulic testing of IRC:83 compliant POT-PTFE bearings and single/multi-gap strip seal expansion joints.',
    tags: ['Bridge Bearing', 'Expansion Joint', 'IRC:83', 'Elastomeric', 'POT-PTFE'],
    productSlug: 'pot-ptfe-bridge-bearings'
  },
  {
    id: 'vid_8',
    title: 'Inside JMK Engineering Factory Prop Jack,Shuttering Plate &Steel Fabrication #Shorts #JMKEngineering',
    duration: '0:30',
    views: '37 views',
    uploadedTime: '4 weeks ago',
    category: 'Steel Fabrication',
    badge: 'Live Production',
    thumbnailUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg',
    description: 'High-speed automated welding lines and cold press shearing cells for IS 2062 steel shuttering plates and scaffolding jacks.',
    tags: ['Steel Fabrication', 'Welding Line', 'Cold Shearing', 'Telescopic Props'],
    productSlug: 'scaffolding-adjustable-prop-jack'
  }
];



