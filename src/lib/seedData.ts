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
    address: 'Mauza Jhali, Circle Kankarbagh 50b, Ward 55 P.No- 2167078, Jakariyapur, Trinity Global School, Road No. 3, Krishna Niketan Road, Patna - 800007, Bihar',
    locationCoords: {
      lat: 25.5941,
      lng: 85.1376,
      radiusMeters: 600,
    },
    allocatedBudget: 8500000,
    currentSpend: 4250000,
    status: 'ACTIVE',
    activeWorkersCount: 42,
    contactNumber: '+91 7493916194',
    adminName: 'Ujjwal Kumar (CEO)',
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
    contactNumber: '+91 7493916194',
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
    contactNumber: '+91 7493916194',
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
    contactNumber: '+91 7493916194',
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
    "price": "₹ 2,800 - ₹ 3,000 / RMT",
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
      "/images/drive_downloads/folder3_jmk_pic_new/d4164f62-ed93-4c41-b5c4-6415d708a9bc.jfif",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/d4164f62-ed93-4c41-b5c4-6415d708a9bc.jfif",
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
    "price": "₹ 68 / Kg",
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
      "/images/drive_downloads/folder2_jmk/3.png",
      "/images/drive_downloads/folder1_old_pic/47099765-3398-4e50-9053-4d0edab0f694.jfif",
      "/images/drive_downloads/folder2_jmk/19.png"
    ],
    "featuredImage": "/images/drive_downloads/folder2_jmk/3.png",
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
    "price": "₹ 67 / Kg",
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
      "/images/drive_downloads/folder1_old_pic/902b954b-c3b4-44d9-9bcf-5bf5c546f617.jfif",
      "/images/drive_downloads/folder2_jmk/10.png",
      "/images/drive_downloads/folder2_jmk/14.png",
      "/images/drive_downloads/folder2_jmk/16.png"
    ],
    "featuredImage": "/images/drive_downloads/folder1_old_pic/902b954b-c3b4-44d9-9bcf-5bf5c546f617.jfif",
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
    "price": "₹ 80 / Kg",
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
      "/images/drive_downloads/folder2_jmk/1.png",
      "/images/drive_downloads/folder3_jmk_pic_new/4c09960e-6224-448b-b611-b5da04ccec35.jfif",
      "/images/drive_downloads/folder2_jmk/22.png",
      "/images/about/circular-well-formwork.jpg"
    ],
    "featuredImage": "/images/drive_downloads/folder2_jmk/1.png",
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
    "price": "₹ 67 / Kg",
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
      "/images/drive_downloads/folder3_jmk_pic_new/5820fe2d-f907-41e1-9fe8-34d403da6ed5.jfif",
      "/images/drive_downloads/folder2_jmk/17.png"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/5820fe2d-f907-41e1-9fe8-34d403da6ed5.jfif",
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
    "price": "₹ 250 / Piece",
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
      "/images/drive_downloads/folder2_jmk/7.png",
      "/images/drive_downloads/folder1_old_pic/7113aee4-cb95-4941-95dd-720b2416a4cf.jfif",
      "/images/drive_downloads/folder2_jmk/11.png",
      "/images/drive_downloads/folder2_jmk/18.png"
    ],
    "featuredImage": "/images/drive_downloads/folder2_jmk/7.png",
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
    "price": "₹ 68 / Kg",
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
      "/images/drive_downloads/folder3_jmk_pic_new/a0c55ac9-0a5a-4668-96f7-a5caeb89cc47.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/a0c55ac9-0a5a-4668-96f7-a5caeb89cc47.jfif",
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
    "price": "₹ 1,000 / Piece",
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
      "/images/drive_downloads/folder3_jmk_pic_new/591960f4-6489-4401-bd15-bae27a2ade22.jfif",
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476989849/XP/AX/HW/146888318/mild-steel-drainage-spout-500x500.jpg"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/591960f4-6489-4401-bd15-bae27a2ade22.jfif",
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
    "price": "₹ 0.45 / cu.cm",
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
      "/images/drive_downloads/folder3_jmk_pic_new/b6c17132-df14-4773-b3bf-1925e540cc88.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/b6c17132-df14-4773-b3bf-1925e540cc88.jfif",
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
    "price": "₹ 14,500 / Piece",
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
      "/images/drive_downloads/folder3_jmk_pic_new/094872c0-066e-4bad-9547-cd85560830f3.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/094872c0-066e-4bad-9547-cd85560830f3.jfif",
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
    "price": "₹ 1,750 / RMT",
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
      "/images/drive_downloads/folder3_jmk_pic_new/117b9a35-64f3-49fb-87f1-0b9872aa4df7.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/117b9a35-64f3-49fb-87f1-0b9872aa4df7.jfif",
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
    "price": "₹ 75 / Piece",
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
      "/images/drive_downloads/folder1_old_pic/b6660900-b132-47f5-b926-30c939b7c8e8.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder1_old_pic/b6660900-b132-47f5-b926-30c939b7c8e8.jfif",
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
    "id": "prod_scaffolding-cuplock-system",
    "name": "Cuplock Scaffolding System (Verticals & Ledgers)",
    "slug": "scaffolding-cuplock-system",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Systems",
    "price": "₹ 68 / Kg",
    "minOrderQuantity": "1 MT",
    "shortDescription": "Heavy-duty Cuplock Scaffolding System with forged top cups and welded bottom cups for high-load bridge staging, pier formwork, and heavy civil construction.",
    "fullDescription": "JMK Engineering & Developers manufactures premium grade modular Cuplock Scaffolding Systems in compliance with IS 1161 / IS 1239 and MoRTH bridge staging specifications. Constructed with 48.3mm OD high-yield steel tubes (3.2mm/4.0mm wall thickness), hot-dip galvanized or coated in anti-corrosive industrial red oxide. Standard vertical lengths of 1.0m, 1.5m, 2.0m, 2.5m, and 3.0m with cups welded at 500mm intervals. Ledgers available in lengths of 1.0m, 1.2m, 1.5m, 1.8m, 2.0m, and 2.5m featuring forged steel blade ends that lock securely into captive cups.",
    "weightVariants": [
      "1.0m (4.5 Kg)",
      "1.5m (6.8 Kg)",
      "2.0m (9.2 Kg)",
      "2.5m (11.5 Kg)",
      "3.0m (13.8 Kg)",
      "Custom MT Batch"
    ],
    "dimensions": [
      "48.3 mm OD Tube",
      "3.2 mm / 4.0 mm Wall Thickness",
      "Cups Spaced @ 500 mm"
    ],
    "materialGrade": "IS 1161 YST 210 / IS 1239 Medium Class Mild Steel",
    "finishType": "Industrial Red Oxide Primer / Hot-Dip Galvanized",
    "applications": [
      "Bridge & Flyover Deck Staging",
      "Heavy Pier & Pier Cap Formwork Support",
      "Metro Rail Elevated Viaduct Construction",
      "Industrial Shed & High-Rise Building Shuttering",
      "Heavy Concrete Slab Shoring & Casting"
    ],
    "specs": {
      "Tube Diameter": "48.3 mm Outer Diameter",
      "Wall Thickness": "3.2 mm / 4.0 mm (Heavy Duty)",
      "Cup Spacing": "500 mm (0.5m) Centers",
      "Locking Mechanism": "Forged Top Cup & Welded Bottom Cup",
      "Load Capacity": "Up to 7.5 Tonnes per Leg (with diagonal bracing)",
      "Yield Strength": "210 - 310 MPa High Tensile Steel",
      "Standard Lengths": "1.0m, 1.5m, 2.0m, 2.5m, 3.0m",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "Cuplock Vertical Standard (3.0m)",
        "weight": "13.8 Kg",
        "dimensions": "48.3mm OD x 3.2mm x 3000mm",
        "priceEstimate": "₹ 67 / Kg"
      },
      {
        "name": "Cuplock Vertical Standard (2.0m)",
        "weight": "9.2 Kg",
        "dimensions": "48.3mm OD x 3.2mm x 2000mm",
        "priceEstimate": "₹ 67 / Kg"
      },
      {
        "name": "Cuplock Ledger Horizontal (2.0m)",
        "weight": "7.8 Kg",
        "dimensions": "48.3mm OD x 3.2mm x 2000mm",
        "priceEstimate": "₹ 64 / Kg"
      },
      {
        "name": "Cuplock Ledger Horizontal (1.5m)",
        "weight": "5.8 Kg",
        "dimensions": "48.3mm OD x 3.2mm x 1500mm",
        "priceEstimate": "₹ 64 / Kg"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder2_jmk/4.png",
      "/images/drive_downloads/folder2_jmk/154b737f-7b2f-40a4-85ff-b934b4d19736.jfif",
      "/images/drive_downloads/folder1_old_pic/6e2568c8-02c5-404b-8da8-cf1d1dd72be7.jfif",
      "/images/drive_downloads/folder2_jmk/4ba08a82-9cb0-45f8-b86e-53873207aee2.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder2_jmk/4.png",
    "complianceStandards": [
      "IS 1161",
      "IS 1239",
      "MoRTH Section 1500",
      "ISO 9001:2015",
      "IRC:87"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_cc-cribs-staging-tower",
    "name": "CC Cribs Heavy Duty Staging Tower & C-Cribs",
    "slug": "cc-cribs-staging-tower",
    "category": "scaffolding",
    "categoryLabel": "Scaffolding Systems",
    "price": "₹ 68 / Kg",
    "minOrderQuantity": "5 Sets",
    "shortDescription": "Heavy-duty modular CC Cribs (C-Cribs) staging frames for high-load bridge girder support, pier cap shoring, and heavy structural falsework.",
    "fullDescription": "JMK Engineering & Developers fabricates heavy-duty CC Cribs (C-Cribs) designed specifically for ultra high-load bridge girder erection, aqueduct shoring, and metro rail falsework. Built with heavy structural angle sections and tubular struts in standard base footprint of 1200mm x 1200mm and modular heights of 1000mm, 1500mm, and 2000mm. Each tower withstands concentrated vertical loads of up to 40 tonnes when stacked and cross-braced, making it the preferred staging solution for mega infrastructure projects.",
    "weightVariants": [
      "Base Frame 1200x1200mm (38 Kg)",
      "Intermediate Frame (42 Kg)",
      "Top Frame with Jack Spigot (45 Kg)",
      "Custom Tonnage Batch"
    ],
    "dimensions": [
      "1200 mm x 1200 mm Base",
      "Heights: 1.0m, 1.5m, 2.0m Modular",
      "Heavy Channel / Angle Construction"
    ],
    "materialGrade": "IS 2062 Grade E250 Mild Steel",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Coating",
    "applications": [
      "Bridge Girder Erection & Falsework",
      "Heavy Pier Cap & Viaduct Casting Support",
      "Metro Rail Elevated Track Staging",
      "Hydroelectric Dam & Aqueduct Shoring",
      "Industrial Heavy Machinery Foundation Support"
    ],
    "specs": {
      "Frame Dimensions": "1200 mm x 1200 mm Base Footprint",
      "Modular Heights": "1000 mm, 1500 mm, 2000 mm",
      "Main Structural Members": "ISMC 75/100 Channel & 50x50x5 Angle",
      "Safe Working Load": "Up to 40 Tonnes per Stacked Tower",
      "Connection Method": "Spigot Pin & High-Tensile Grade 8.8 Bolts",
      "Finish": "Dipped Anti-Rust Primer / Red Oxide",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "CC Crib Frame Unit (1200x1200x1500mm)",
        "weight": "42 Kg",
        "dimensions": "1200 x 1200 x 1500 mm",
        "priceEstimate": "₹ 68 / Kg"
      },
      {
        "name": "CC Crib Base Tower (1200x1200x1000mm)",
        "weight": "38 Kg",
        "dimensions": "1200 x 1200 x 1000 mm",
        "priceEstimate": "₹ 68 / Kg"
      },
      {
        "name": "CC Crib Heavy Deck Unit (1200x1200x2000mm)",
        "weight": "52 Kg",
        "dimensions": "1200 x 1200 x 2000 mm",
        "priceEstimate": "₹ 68 / Kg"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder2_jmk/2.png",
      "/images/drive_downloads/folder2_jmk/5.png",
      "/images/drive_downloads/folder2_jmk/6.png",
      "/images/drive_downloads/folder2_jmk/8.png",
      "/images/drive_downloads/folder2_jmk/9.png",
      "/images/drive_downloads/folder2_jmk/12.png",
      "/images/drive_downloads/folder2_jmk/29.png",
      "/images/drive_downloads/folder2_jmk/30.png"
    ],
    "featuredImage": "/images/drive_downloads/folder2_jmk/2.png",
    "complianceStandards": [
      "IS 2062",
      "IS 800",
      "MoRTH Section 1500",
      "IRC:87",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_acro-span-centering",
    "name": "Heavy Duty Acro Span Telescopic Centering Span (15ft / 18ft)",
    "slug": "acro-span-centering",
    "category": "shuttering",
    "categoryLabel": "Shuttering & Centering",
    "price": "₹ 80 / Kg",
    "minOrderQuantity": "10 Sets",
    "shortDescription": "Heavy-duty telescopic Acro Spans (centering spans) for self-supporting slab formwork, bridge deck casting, and beam soffits without intermediate propping.",
    "fullDescription": "JMK Engineering & Developers manufactures precision telescopic Acro Spans (also known as Centering Spans) fabricated from high-yield structural steel. Designed to eliminate dense under-propping during slab casting, bridging spans from 2.4 meters up to 4.5 meters (15ft) and 5.5 meters (18ft). Features outer lattice girder box with inner slide-out telescopic unit locked via high-tensile wedge pins and adjustment bolts for zero mid-span deflection under wet concrete loading.",
    "weightVariants": [
      "Standard 2.4m - 4.2m (32 Kg)",
      "Extended 3.0m - 4.8m (40 Kg)",
      "Heavy 3.6m - 5.5m (48 Kg)",
      "Custom MT Batch"
    ],
    "dimensions": [
      "Open Length: 15ft (4.5m) / 18ft (5.5m)",
      "Closed Length: 8ft (2.4m)",
      "Camber Angle: Zero-Sag Engineered"
    ],
    "materialGrade": "IS 2062 Grade E250 / IS 1161 Steel",
    "finishType": "Industrial Red Oxide Primer Coating",
    "applications": [
      "RCC Slab & Floor Centering without Under-Props",
      "Bridge Deck & Culvert Soffit Casting",
      "Commercial High-Rise Slab Formwork",
      "Long-Span Industrial Roofing Centering",
      "Precast Yard Staging & Moulding"
    ],
    "specs": {
      "Span Range": "2.40 m to 4.50 m (15 ft) / 5.50 m (18 ft)",
      "Lattice Members": "Heavy Structural Angles & T-Sections",
      "Adjustment Type": "Telescopic Slide with Hardened Wedge Pins",
      "Load Capacity": "Up to 2.8 Tonnes UDL at Maximum Extension",
      "Deflection Rating": "Exceeds IS 14687 deflection limits (< Span/500)",
      "Finish": "Dipped Red Oxide Primer",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "Acro Span Regular (2.4m - 4.2m / 15ft)",
        "weight": "34 Kg",
        "dimensions": "2400mm Closed, 4200mm Extended",
        "priceEstimate": "₹ 80 / Kg"
      },
      {
        "name": "Acro Span Extended (3.0m - 5.5m / 18ft)",
        "weight": "46 Kg",
        "dimensions": "3000mm Closed, 5500mm Extended",
        "priceEstimate": "₹ 80 / Kg"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder3_jmk_pic_new/7236dc6c-a06b-4d87-9e0d-898cd51e96bb.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/7236dc6c-a06b-4d87-9e0d-898cd51e96bb.jfif",
    "complianceStandards": [
      "IS 2062",
      "IS 14687",
      "MoRTH Section 1500",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_crash-barrier-mould",
    "name": "Heavy Bridge Crash Barrier Steel Mould (3m Length)",
    "slug": "crash-barrier-mould",
    "category": "barriers",
    "categoryLabel": "Highway & Barriers",
    "price": "₹ 80 / Kg",
    "minOrderQuantity": "1 Set (3m)",
    "shortDescription": "Heavy-duty IS 2062 steel formwork moulds for in-situ casting of MoRTH/IRC compliant concrete crash barriers and parapet walls on bridges and highways.",
    "fullDescription": "JMK Engineering & Developers manufactures precision-engineered steel Crash Barrier Moulds designed for in-situ casting of high-containment reinforced concrete crash barriers (parapets) along bridges, flyovers, and expressways. Fabricated with 4mm to 6mm thick IS 2062 skin plates stiffened by heavy vertical and horizontal channel soldiers. Available in 3-meter modular lengths with quick-lock turnbuckles and tie rod brackets, ensuring laser-straight alignment, smooth concrete surface finish, and over 100 repetition cycles.",
    "weightVariants": [
      "3.0m Standard Section (280 Kg)",
      "3.0m Heavy Stiffened Section (340 Kg)",
      "Custom Project Profiling"
    ],
    "dimensions": [
      "Length: 3000 mm (3.0m)",
      "Height: 850 mm - 1100 mm MoRTH Profile",
      "Skin Plate: 4mm - 6mm IS 2062"
    ],
    "materialGrade": "IS 2062 Grade E250 Mild Steel",
    "finishType": "Industrial Red Oxide / Anti-Corrosion Primer",
    "applications": [
      "Highway & Expressway Parapet Wall Casting",
      "Bridge & Flyover Concrete Crash Barrier Construction",
      "Metro Rail Viaduct Parapet Formwork",
      "River Bridge Safety Wall Moulding",
      "Precast Crash Barrier Yard Production"
    ],
    "specs": {
      "Modular Length": "3000 mm (3.0 Meter) per segment",
      "MoRTH Height Profile": "850 mm / 1000 mm / 1100 mm",
      "Skin Plate Thickness": "4.0 mm / 5.0 mm / 6.0 mm IS 2062 Plate",
      "Stiffeners": "ISMC 75 Channel & 50x50x6 Angle Ribs",
      "Locking System": "Turnbuckle Jack Brackets & Heavy Tie Rod Sleeves",
      "Repetition Life": "100+ Pouring Cycles",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "Crash Barrier Mould 3m (850mm Height MoRTH Profile)",
        "weight": "280 Kg",
        "dimensions": "3000 x 850 mm Profile",
        "priceEstimate": "₹ 80 / Kg"
      },
      {
        "name": "Crash Barrier Mould 3m (1100mm Heavy High-Containment Profile)",
        "weight": "340 Kg",
        "dimensions": "3000 x 1100 mm Profile",
        "priceEstimate": "₹ 80 / Kg"
      },
      {
        "name": "Bridge Parapet Mould Panel (Custom Radius / Transition)",
        "weight": "Custom Kg",
        "dimensions": "Project BOQ Specified",
        "priceEstimate": "₹ 80 / Kg"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder3_jmk_pic_new/714babbb-df90-427e-bd1c-fe8adce2c4d7.jfif",
      "/images/drive_downloads/folder2_jmk/20.png",
      "/images/drive_downloads/folder2_jmk/21.png",
      "/images/drive_downloads/folder2_jmk/24.png",
      "/images/drive_downloads/folder2_jmk/25.png",
      "/images/drive_downloads/folder2_jmk/26.png",
      "/images/drive_downloads/folder2_jmk/27.png",
      "/images/drive_downloads/folder2_jmk/28.png"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/714babbb-df90-427e-bd1c-fe8adce2c4d7.jfif",
    "complianceStandards": [
      "IRC:5",
      "MoRTH Section 800 / 1500",
      "IS 2062",
      "ISO 9001:2015"
    ],
    "isFeatured": true
  },
  {
    "id": "prod_haunch-plate-shuttering",
    "name": "MS Haunch Plate & Formwork Angle Bracket System",
    "slug": "haunch-plate-shuttering",
    "category": "shuttering",
    "categoryLabel": "Shuttering & Centering",
    "price": "₹ 68 / Kg",
    "minOrderQuantity": "25 Pcs",
    "shortDescription": "Precision fabricated MS Haunch Plates (Hunch Plates) and structural angle brackets for bridge girder soffit transitions, culvert haunches, and beam-column junction formwork.",
    "fullDescription": "JMK Engineering & Developers fabricates heavy MS Haunch Plates (Hunch Plates) and structural angle brackets for smooth chamfered concrete transitions in bridge box girders, I-girders, culverts, and heavy pier cap haunches. Manufactured from IS 2062 structural grade steel with stiffened gusset plates, ensuring precise angles without grout leakage or deflection under hydraulic concrete pressure.",
    "weightVariants": [
      "Standard Haunch 45° (12 Kg)",
      "Heavy Girder Haunch (18 Kg)",
      "Custom Angular Gusset (24 Kg)",
      "Custom MT Batch"
    ],
    "dimensions": [
      "Angle: 45° / 60° Custom Haunch Chamfer",
      "Thickness: 3.0mm to 6.0mm IS 2062",
      "Lengths: 600mm, 900mm, 1200mm"
    ],
    "materialGrade": "IS 2062 Grade E250 Mild Steel",
    "finishType": "Industrial Red Oxide Primer Coating",
    "applications": [
      "Bridge Box Girder & I-Girder Haunch Transitions",
      "Culvert Corner Haunches & Pier Cap Fillets",
      "Retaining Wall & Abutment Beam Junctions",
      "Heavy Column-to-Beam Soffit Formwork Support",
      "Industrial Sump & Tank Wall Chamfers"
    ],
    "specs": {
      "Material": "IS 2062 Structural Mild Steel",
      "Angle Precision": "CNC Sheared & Press-Braked ±0.5°",
      "Stiffener Ribs": "Welded MS Gusset Plates @ 300mm centers",
      "Standard Lengths": "600 mm, 900 mm, 1200 mm, 1250 mm",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "MS Haunch Plate 1250mm (45° Chamfer)",
        "weight": "16 Kg",
        "dimensions": "1250 x 200 x 200 mm (45°)",
        "priceEstimate": "₹ 68 / Kg"
      },
      {
        "name": "Formwork Angle Bracket Heavy Stiffened",
        "weight": "8 Kg",
        "dimensions": "300 x 300 x 50 mm",
        "priceEstimate": "₹ 68 / Kg"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder2_jmk/13.png",
      "/images/drive_downloads/folder2_jmk/15.png",
      "/images/drive_downloads/folder2_jmk/23.png"
    ],
    "featuredImage": "/images/drive_downloads/folder2_jmk/13.png",
    "complianceStandards": [
      "IS 2062",
      "MoRTH Section 1500",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_tie-rod-wing-nut",
    "name": "Formwork Tie Rod & Wing Nut Fastener System (3m)",
    "slug": "tie-rod-wing-nut",
    "category": "shuttering",
    "categoryLabel": "Shuttering & Centering",
    "price": "Tie Rod ₹120/pc, Wing Nut ₹55/pc",
    "minOrderQuantity": "100 Sets",
    "shortDescription": "High-tensile cold-rolled threaded Tie Rods and heavy ductile iron Wing Nuts for securing column formwork, wall shuttering, and bridge pier moulds.",
    "fullDescription": "JMK Engineering & Developers supplies high-tensile cold-rolled Dywidag-profile Tie Rods (16mm / 20mm Dia) and matching heavy ductile cast iron 2-wing and 3-wing Nuts for heavy concrete formwork clamping. Engineered to withstand high bursting lateral pressures during high-slump concrete pours in bridge piers, shear walls, retaining walls, and heavy foundations. Available in continuous 3-meter lengths or cut-to-size with water stoppers and PVC sleeves.",
    "weightVariants": [
      "Tie Rod 16mm x 3m (4.5 Kg)",
      "Heavy Wing Nut 90mm Plate (0.65 Kg)",
      "Wing Nut 120mm Heavy (0.95 Kg)"
    ],
    "dimensions": [
      "Tie Rod Dia: 16 mm / 20 mm",
      "Length: 3000 mm (3.0m)",
      "Wing Nut Flange: 90mm / 100mm / 120mm"
    ],
    "materialGrade": "High Tensile Q235 / 45# Steel Tie Rod + Ductile Iron SG400 Wing Nut",
    "finishType": "Electro-Galvanized / Self-Color Oiled",
    "applications": [
      "Bridge Pier & Abutment Wall Formwork Clamping",
      "High-Rise Shear Wall & Core Wall Shuttering",
      "Column Box Formwork Lateral Tension Locking",
      "Water Tank & Culvert Formwork Fastening",
      "Heavy Concrete Retaining Wall Casting"
    ],
    "specs": {
      "Tie Rod Diameter": "16 mm Continuous Cold-Rolled Thread (15/17mm)",
      "Breaking Load": "Exceeds 180 kN (18 Tonnes Tensile Capacity)",
      "Wing Nut Type": "Heavy Ductile Iron (SG 500/7) with 90mm/100mm Base Flange",
      "Thread Pitch": "10 mm Dywidag Compatible Rapid Pitch",
      "Standard Length": "3.0 Meter (3000 mm)",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "High-Tensile 16mm Tie Rod (3.0m Length)",
        "weight": "4.5 Kg",
        "dimensions": "16mm Dia x 3000mm Length",
        "priceEstimate": "₹ 120 / Pc"
      },
      {
        "name": "Ductile Iron Double Wing Nut (90mm Base)",
        "weight": "0.65 Kg",
        "dimensions": "90mm Flange Dia, 16mm Thread",
        "priceEstimate": "₹ 55 / Pc"
      },
      {
        "name": "Complete Shuttering Clamping Set (Tie Rod + 2 Wing Nuts)",
        "weight": "5.8 Kg",
        "dimensions": "16mm x 3m + 2 Nuts",
        "priceEstimate": "₹ 230 / Set"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder3_jmk_pic_new/a642f288-db66-4186-8ee5-da1acffff2bf.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/a642f288-db66-4186-8ee5-da1acffff2bf.jfif",
    "complianceStandards": [
      "IS 2062",
      "BS EN 12812",
      "ISO 9001:2015"
    ],
    "isFeatured": false
  },
  {
    "id": "prod_road-sign-board",
    "name": "Road & Highway Retro-Reflective Sign Board (Type IV / XI)",
    "slug": "road-sign-board",
    "category": "barriers",
    "categoryLabel": "Highway & Barriers",
    "price": "Market Best Rate",
    "minOrderQuantity": "5 Boards",
    "shortDescription": "MoRTH and IRC:67 compliant retro-reflective traffic, regulatory, warning, and overhead gantry direction sign boards for highways and expressways.",
    "fullDescription": "JMK Engineering & Developers manufactures IRC:67 and MoRTH Section 800 compliant highway retro-reflective signage boards. Fabricated on 3mm/4mm thick aluminum composite panels (ACP) or high-grade galvanized iron (GI) backing with Class B / Type IV High-Intensity Micro-Prismatic (HIP) or Type XI Diamond Grade retro-reflective sheeting. Supported by hot-dip galvanized ISMC channel and pipe posts for complete weather resistance and long service life on national highways and expressways.",
    "weightVariants": [
      "Standard Cautionary Sign 900mm (8 Kg)",
      "Regulatory Circular Sign 600mm (6 Kg)",
      "Overhead Direction Gantry Board (Custom Tonnage)"
    ],
    "dimensions": [
      "Standard Shapes: Triangular (900mm), Circular (600mm), Octagonal (Stop)",
      "Direction Boards: 1200x900mm, 2400x1200mm, Overhead Custom"
    ],
    "materialGrade": "Aluminum Composite Panel (ACP 3mm/4mm) / Hot Dip Galvanized Sheet + 3M HIP/Diamond Sheeting",
    "finishType": "Class B / Type IV / Type XI High-Intensity Retro-Reflective Sheeting",
    "applications": [
      "National Highways & State Highway Corridors",
      "Expressway Gantry & Cantilever Signage",
      "Bridge & Flyover Entry/Exit Warning Signs",
      "Construction Zone Safety & Diversion Boards",
      "City Municipal Traffic Regulatory Signs"
    ],
    "specs": {
      "Compliance Standard": "IRC:67-2012 & MoRTH Section 800 Specifications",
      "Sheeting Grade": "Type IV High-Intensity Micro-Prismatic (HIP) / Type XI Diamond Grade",
      "Backing Material": "3.0mm / 4.0mm High-Grade ACP or 1.5mm Galvanized Steel Sheet",
      "Mounting Hardware": "Hot-Dip Galvanized Back Channels, U-Clamps & Fasteners",
      "Reflectivity Warranty": "7 to 10 Years Outdoor Warranty",
      "Manufacturer": "JMK Engineering & Developers, Patna Works"
    },
    "variants": [
      {
        "name": "Mandatory / Cautionary Sign Board (Standard Size)",
        "weight": "7 Kg",
        "dimensions": "600mm / 900mm Diameter / Triangle",
        "priceEstimate": "Market Best Rate"
      },
      {
        "name": "Overhead Highway Direction Sign Board (ACP + HIP Sheeting)",
        "weight": "Project Custom",
        "dimensions": "2400 x 1200 mm or Custom BOQ",
        "priceEstimate": "Market Best Rate"
      }
    ],
    "imageUrls": [
      "/images/drive_downloads/folder3_jmk_pic_new/931c5c74-2db3-4fee-aa97-93235096c114.jfif"
    ],
    "featuredImage": "/images/drive_downloads/folder3_jmk_pic_new/931c5c74-2db3-4fee-aa97-93235096c114.jfif",
    "complianceStandards": [
      "IRC:67",
      "MoRTH Section 800",
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
  {
    "id": "gal_d1_cuplock_vert",
    "title": "Cuplock Vertical Scaffolding Member (1m, 2m, 3m)",
    "category": "Scaffolding Systems",
    "price": "₹64 / Kg",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/6e2568c8-02c5-404b-8da8-cf1d1dd72be7.jfif",
    "moq": "1 MT",
    "slug": "scaffolding-cuplock-system"
  },
  {
    "id": "gal_d1_shuttering_900",
    "title": "MS Shuttering Plate (1250 x 900 mm)",
    "category": "Shuttering & Centering",
    "price": "₹67 / Kg",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/902b954b-c3b4-44d9-9bcf-5bf5c546f617.jfif",
    "moq": "50 Pcs",
    "slug": "27-kg-iron-shuttering-plate"
  },
  {
    "id": "gal_d1_u_jack_300",
    "title": "U Jack Heavy Duty Support Base (300 mm)",
    "category": "Scaffolding Systems",
    "price": "₹250 / Pc",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/7113aee4-cb95-4941-95dd-720b2416a4cf.jfif",
    "moq": "100 Pcs",
    "slug": "adjustable-u-head-scaffolding-jack"
  },
  {
    "id": "gal_d1_shuttering_600",
    "title": "MS Shuttering Plate (1250 x 600 mm)",
    "category": "Shuttering & Centering",
    "price": "₹67 / Kg",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/47099765-3398-4e50-9053-4d0edab0f694.jfif",
    "moq": "50 Pcs",
    "slug": "20-kg-ms-shuttering-plate"
  },
  {
    "id": "gal_d1_coupler_clamp",
    "title": "Scaffolding Right Angle Clamp & Coupler (40x50, 50x50)",
    "category": "Scaffolding Systems",
    "price": "₹75 / Pc",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/b6660900-b132-47f5-b926-30c939b7c8e8.jfif",
    "moq": "200 Pcs",
    "slug": "pressed-mild-steel-swivel-coupler"
  },
  {
    "id": "gal_d1_infra_1",
    "title": "Heavy Girder Launching & Highway Overpass Site",
    "category": "Heavy Infrastructure",
    "price": "Plant & Site Execution",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/Gemini_Generated_Image_l9fowfl9fowfl9fo.png",
    "moq": "Project Scope",
    "slug": "scaffolding-cuplock-system"
  },
  {
    "id": "gal_d1_infra_2",
    "title": "Multi-Span Bridge Pier & Staging Assembly",
    "category": "Heavy Infrastructure",
    "price": "Plant & Site Execution",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/Gemini_Generated_Image_pbwilkpbwilkpbwi.png",
    "moq": "Project Scope",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d1_infra_3",
    "title": "Elevated Expressway Deck Formwork Staging",
    "category": "Heavy Infrastructure",
    "price": "Plant & Site Execution",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/Gemini_Generated_Image_q1e79rq1e79rq1e7.png",
    "moq": "Project Scope",
    "slug": "acro-span-centering"
  },
  {
    "id": "gal_d1_infra_4",
    "title": "High-Load Steel Girder & Viaduct Engineering",
    "category": "Heavy Infrastructure",
    "price": "Plant & Site Execution",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/Gemini_Generated_Image_se0q2xse0q2xse0q.png",
    "moq": "Project Scope",
    "slug": "pot-ptfe-bridge-bearings"
  },
  {
    "id": "gal_d1_infra_5",
    "title": "Patna Central Fabrication Plant Logistics Yard",
    "category": "Heavy Infrastructure",
    "price": "Plant & Site Execution",
    "imageUrl": "/images/drive_downloads/folder1_old_pic/Gemini_Generated_Image_u487u1u487u1u487.png",
    "moq": "Project Scope",
    "slug": "strip-seal-expansion-joint"
  },
  {
    "id": "gal_d2_circ_shuttering_1",
    "title": "Circular Shuttering Plate & Column Mould",
    "category": "Shuttering & Centering",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/1.png",
    "moq": "1 Set",
    "slug": "round-ms-shuttering-plate"
  },
  {
    "id": "gal_d2_cc_cribs_2",
    "title": "CC Cribs Heavy Duty Staging Frame (1200x1200mm)",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/2.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_ms_shuttering_3",
    "title": "MS Shuttering Plate (1250 x 600 mm Heavy Stiffened)",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/3.png",
    "moq": "50 Pcs",
    "slug": "20-kg-ms-shuttering-plate"
  },
  {
    "id": "gal_d2_cuplock_set_4",
    "title": "Cuplock Scaffolding System (Complete Verticals & Ledgers)",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/4.png",
    "moq": "2 MT",
    "slug": "scaffolding-cuplock-system"
  },
  {
    "id": "gal_d2_cuplock_ledger_4ba",
    "title": "Cuplock Ledger Horizontal Tubes (1m, 1.5m, 2m)",
    "category": "Scaffolding Systems",
    "price": "₹64 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/4ba08a82-9cb0-45f8-b86e-53873207aee2.jfif",
    "moq": "1 MT",
    "slug": "scaffolding-cuplock-system"
  },
  {
    "id": "gal_d2_c_crib_5",
    "title": "Heavy C-Crib Staging Frame Unit",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/5.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_c_crib_6",
    "title": "C-Crib Modular High-Load Tower Staging",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/6.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_u_jack_7",
    "title": "Adjustable U Jack Head (Forged Nut & Thread)",
    "category": "Scaffolding Systems",
    "price": "₹250 / Pc",
    "imageUrl": "/images/drive_downloads/folder2_jmk/7.png",
    "moq": "100 Pcs",
    "slug": "adjustable-u-head-scaffolding-jack"
  },
  {
    "id": "gal_d2_c_crib_8",
    "title": "C-Crib Bridge Pier Staging Unit",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/8.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_c_crib_9",
    "title": "C-Crib Heavy Duty Support Tower",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/9.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_shuttering_10",
    "title": "MS Shuttering Plate Panel (IS 2062 Grade)",
    "category": "Shuttering & Centering",
    "price": "₹66 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/10.png",
    "moq": "50 Pcs",
    "slug": "27-kg-iron-shuttering-plate"
  },
  {
    "id": "gal_d2_u_jack_11",
    "title": "Solid Thread Adjustable U Head Jack",
    "category": "Scaffolding Systems",
    "price": "₹250 / Pc",
    "imageUrl": "/images/drive_downloads/folder2_jmk/11.png",
    "moq": "100 Pcs",
    "slug": "adjustable-u-head-scaffolding-jack"
  },
  {
    "id": "gal_d2_cc_crib_12",
    "title": "CC Cribs Staging Tower Unit",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/12.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_haunch_13",
    "title": "MS Haunch Plate / Hunch Gusset Formwork",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/13.png",
    "moq": "25 Pcs",
    "slug": "haunch-plate-shuttering"
  },
  {
    "id": "gal_d2_shuttering_14",
    "title": "MS Shuttering Plate (Laser Straight Edges)",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/14.png",
    "moq": "50 Pcs",
    "slug": "27-kg-iron-shuttering-plate"
  },
  {
    "id": "gal_d2_angle_bracket_15",
    "title": "Structural Angle Bracket for Formwork",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/15.png",
    "moq": "50 Pcs",
    "slug": "haunch-plate-shuttering"
  },
  {
    "id": "gal_d2_shuttering_16",
    "title": "Heavy Duty MS Shuttering Plate Section",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/16.png",
    "moq": "50 Pcs",
    "slug": "27-kg-iron-shuttering-plate"
  },
  {
    "id": "gal_d2_prop_ujack_17",
    "title": "Prop U Jack Adjustable Support System",
    "category": "Scaffolding Systems",
    "price": "₹67 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/17.png",
    "moq": "50 Pcs",
    "slug": "scaffolding-adjustable-prop-jack"
  },
  {
    "id": "gal_d2_back_jack_18",
    "title": "Heavy Duty Back Jack / Base Jack (38mm)",
    "category": "Scaffolding Systems",
    "price": "₹250 / Pc",
    "imageUrl": "/images/drive_downloads/folder2_jmk/18.png",
    "moq": "100 Pcs",
    "slug": "adjustable-u-head-scaffolding-jack"
  },
  {
    "id": "gal_d2_shuttering_19",
    "title": "MS Shuttering Plate (1250 x 600 mm Standard)",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/19.png",
    "moq": "50 Pcs",
    "slug": "20-kg-ms-shuttering-plate"
  },
  {
    "id": "gal_d2_crash_barrier_20",
    "title": "Crash Barrier Mould (Bridge Steel Formwork)",
    "category": "Highway & Barriers",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/20.png",
    "moq": "1 Set (3m)",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_crash_barrier_21",
    "title": "Crash Barrier Steel Mould Section",
    "category": "Highway & Barriers",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/21.png",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_circ_shuttering_22",
    "title": "Circular Shuttering Plate for Bridge Pier",
    "category": "Shuttering & Centering",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/22.png",
    "moq": "1 Set",
    "slug": "round-ms-shuttering-plate"
  },
  {
    "id": "gal_d2_haunch_23",
    "title": "Haunch Plate / Girder Gusset Formwork",
    "category": "Shuttering & Centering",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/23.png",
    "moq": "25 Pcs",
    "slug": "haunch-plate-shuttering"
  },
  {
    "id": "gal_d2_crash_barrier_24",
    "title": "Parapet Crash Barrier Mould Panel",
    "category": "Highway & Barriers",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/24.png",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_crash_barrier_25",
    "title": "High-Strength Concrete Crash Barrier Mould",
    "category": "Highway & Barriers",
    "price": "₹70 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/25.png",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_crash_barrier_26",
    "title": "Bridge Crash Barrier Steel Mould Unit",
    "category": "Highway & Barriers",
    "price": "₹70 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/26.png",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_crash_barrier_27",
    "title": "Custom Crash Barrier Moulding Segment",
    "category": "Highway & Barriers",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/27.png",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_crash_barrier_28",
    "title": "Highway Parapet Crash Barrier Mould Panel",
    "category": "Highway & Barriers",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/28.png",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d2_cc_crib_29",
    "title": "CC Crib Modular Staging Tower Frame",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/29.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_cc_crib_30",
    "title": "Heavy Duty CC Crib Staging Unit",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/30.png",
    "moq": "10 Sets",
    "slug": "cc-cribs-staging-tower"
  },
  {
    "id": "gal_d2_cuplock_prem_154",
    "title": "Premium Scaffolding Cuplock System (Vertical & Ledger)",
    "category": "Scaffolding Systems",
    "price": "Vertical ₹67/Kg, Ledger ₹64/Kg",
    "imageUrl": "/images/drive_downloads/folder2_jmk/154b737f-7b2f-40a4-85ff-b934b4d19736.jfif",
    "moq": "2 MT",
    "slug": "scaffolding-cuplock-system"
  },
  {
    "id": "gal_d3_ptfe_bearing",
    "title": "POT-PTFE Bridge Bearing (Class 100T to 2000T)",
    "category": "Expansion Joints & Bearings",
    "price": "₹14,500 / Piece",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/094872c0-066e-4bad-9547-cd85560830f3.jfif",
    "moq": "2 Pieces",
    "slug": "pot-ptfe-bridge-bearings"
  },
  {
    "id": "gal_d3_w_beam_barrier",
    "title": "W-Beam Metal Crash Barrier (MoRTH Certified, 3m)",
    "category": "Highway & Barriers",
    "price": "₹1,750 / RMT",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/117b9a35-64f3-49fb-87f1-0b9872aa4df7.jfif",
    "moq": "100 RMT",
    "slug": "w-beam-crash-barrier"
  },
  {
    "id": "gal_d3_round_shuttering",
    "title": "Round Shuttering Plate & Pier Column Formwork",
    "category": "Shuttering & Centering",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/4c09960e-6224-448b-b611-b5da04ccec35.jfif",
    "moq": "1 Set",
    "slug": "round-ms-shuttering-plate"
  },
  {
    "id": "gal_d3_prop_jack",
    "title": "Adjustable Prop Jack (Heavy Duty Telescopic 2x2m, 2x3m)",
    "category": "Scaffolding Systems",
    "price": "₹67 / Kg",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/5820fe2d-f907-41e1-9fe8-34d403da6ed5.jfif",
    "moq": "100 Pcs",
    "slug": "scaffolding-adjustable-prop-jack"
  },
  {
    "id": "gal_d3_drainage_spout",
    "title": "Heavy Bridge Drainage Spout (100mm-150mm Dia, 2m)",
    "category": "Drainage Infrastructure",
    "price": "₹1,000 / Piece",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/591960f4-6489-4401-bd15-bae27a2ade22.jfif",
    "moq": "25 Pcs",
    "slug": "12mm-ms-drainage-spout"
  },
  {
    "id": "gal_d3_crash_mould_3m",
    "title": "Heavy Bridge Crash Barrier Mould (3m Length)",
    "category": "Highway & Barriers",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/714babbb-df90-427e-bd1c-fe8adce2c4d7.jfif",
    "moq": "1 Set",
    "slug": "crash-barrier-mould"
  },
  {
    "id": "gal_d3_acro_span",
    "title": "Heavy Duty Acro Span / Telescopic Centering Span (15ft)",
    "category": "Shuttering & Centering",
    "price": "₹80 / Kg",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/7236dc6c-a06b-4d87-9e0d-898cd51e96bb.jfif",
    "moq": "25 Sets",
    "slug": "acro-span-centering"
  },
  {
    "id": "gal_d3_sign_board",
    "title": "Road & Highway Sign Board (Retro-Reflective Type IV/XI)",
    "category": "Highway & Barriers",
    "price": "Market Best Rate",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/931c5c74-2db3-4fee-aa97-93235096c114.jfif",
    "moq": "5 Boards",
    "slug": "road-sign-board"
  },
  {
    "id": "gal_d3_ms_chali",
    "title": "MS Chali Steel Component / Scaffolding Walkway Platform (2m)",
    "category": "Scaffolding Systems",
    "price": "₹68 / Kg",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/a0c55ac9-0a5a-4668-96f7-a5caeb89cc47.jfif",
    "moq": "50 Pcs",
    "slug": "iron-challi-frame"
  },
  {
    "id": "gal_d3_tie_rod_wing_nut",
    "title": "Formwork Tie Rod (₹120/pc) & Wing Nut (₹55/pc) System (3m)",
    "category": "Shuttering & Centering",
    "price": "Tie Rod ₹120/pc, Wing Nut ₹55/pc",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/a642f288-db66-4186-8ee5-da1acffff2bf.jfif",
    "moq": "200 Sets",
    "slug": "tie-rod-wing-nut"
  },
  {
    "id": "gal_d3_elastomeric_pad",
    "title": "Elastomeric Bearing Pad (IRC:83 Part II Certified)",
    "category": "Expansion Joints & Bearings",
    "price": "₹0.45 / cu.cm",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/b6c17132-df14-4773-b3bf-1925e540cc88.jfif",
    "moq": "4 Pieces",
    "slug": "elastomeric-bridge-bearing"
  },
  {
    "id": "gal_d3_expansion_joint",
    "title": "Strip Seal Bridge Expansion Joint (3m Profile)",
    "category": "Expansion Joints & Bearings",
    "price": "₹2,800 - ₹3,000 / RMT",
    "imageUrl": "/images/drive_downloads/folder3_jmk_pic_new/d4164f62-ed93-4c41-b5c4-6415d708a9bc.jfif",
    "moq": "12 RMT",
    "slug": "strip-seal-expansion-joint"
  },
  {
    "id": "gal_mixer",
    "title": "Heavy Duty Concrete Mixer Machine (10/7 CFT)",
    "category": "Shuttering & Centering",
    "price": "₹75,000 - ₹1,20,000 / Unit",
    "imageUrl": "/images/about/concrete-mixer-machine.png",
    "moq": "1 Unit",
    "slug": "27-kg-iron-shuttering-plate"
  },
  {
    "id": "gal_well_formwork",
    "title": "Circular Well Steining & Pier Formwork Mould",
    "category": "Shuttering & Centering",
    "price": "₹75 / Kg",
    "imageUrl": "/images/about/circular-well-formwork.jpg",
    "moq": "1 Set",
    "slug": "round-ms-shuttering-plate"
  },
  {
    "id": "gal_staging_truss",
    "title": "Heavy Girder Staging Truss Blocks & Frame Units",
    "category": "Scaffolding Systems",
    "price": "₹82 / Kg",
    "imageUrl": "/images/about/yellow-girder-staging-truss.jpg",
    "moq": "10 Sets",
    "slug": "scaffolding-cuplock-system"
  },
  {
    "id": "gal_box_truss",
    "title": "Heavy Structural Steel Box Trusses & Girders",
    "category": "Shuttering & Centering",
    "price": "₹85 / Kg",
    "imageUrl": "/images/about/purple-steel-truss-box.jpg",
    "moq": "5 MT",
    "slug": "27-kg-iron-shuttering-plate"
  },
  {
    "id": "gal_exp_14",
    "title": "20inch Heavy Duty Strip Seal Expansion Joint",
    "category": "Expansion Joints & Bearings",
    "price": "₹2,500 / Meter",
    "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg",
    "moq": "12 Mtrs",
    "slug": "strip-seal-expansion-joint"
  },
  {
    "id": "gal_gi_spouts_23",
    "title": "Galvanized Iron Hot-Dip Drainage Spouts",
    "category": "Drainage Infrastructure",
    "price": "₹2,100 / Piece",
    "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2024/12/476990475/XP/DZ/KU/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg",
    "moq": "25 Pcs",
    "slug": "12mm-ms-drainage-spout"
  },
  {
    "id": "gal_ci_spouts_33",
    "title": "Cast Iron Deck Drainage Grates Batch",
    "category": "Drainage Infrastructure",
    "price": "₹2,250 / Piece",
    "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2024/12/476106334/ON/UB/SF/146888318/1000055781-500x500.jpg",
    "moq": "25 Pcs",
    "slug": "12mm-ms-drainage-spout"
  }
];

export const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  "ms-shuttering-plates": "27-kg-iron-shuttering-plate",
  "shuttering-plates": "27-kg-iron-shuttering-plate",
  "shuttering-plate": "27-kg-iron-shuttering-plate",
  "steel-shuttering-plate": "27-kg-iron-shuttering-plate",
  "shuttering-soldier": "35-kg-ms-shuttering-plates",
  "ms-shuttering-soldiers": "35-kg-ms-shuttering-plates",
  "13-kg-20-kg-mild-steel-centering-sheets": "13-kg-mild-steel-centering-sheet",
  "13-kg-20-kg-ms-centering-sheets": "13-kg-mild-steel-centering-sheet",
  "centering-plates": "mild-steel-centring-plates",
  "mild-steel-centering-sheets": "13-kg-mild-steel-centering-sheet",
  "props-jack": "scaffolding-adjustable-prop-jack",
  "prop-jack": "scaffolding-adjustable-prop-jack",
  "scaffolding-prop-jack": "scaffolding-adjustable-prop-jack",
  "h-frame-scaffolding": "iron-h-frame-scaffolding-system",
  "strips-expansion-joint": "strip-seal-expansion-joint",
  "bitumen-expansion-joint": "7inch-bitumen-expansion-joint",
  "expansion-joints-with-cover-plate": "ss-expansion-joints",
  "expansion-joint-with-cover-plate": "ss-expansion-joints",
  "ptfe-bridge-bearings": "pot-ptfe-bridge-bearings",
  "pot-bearing": "pot-ptfe-bridge-bearings",
  "bridge-bearings-with-cover-plate": "elastomeric-pot-ptfe-bridge-bearings",
  "mild-steel-ms-drainage-spout": "12mm-ms-drainage-spout",
  "ms-drainage-spout": "12mm-ms-drainage-spout",
  "cuplock-scaffolding": "scaffolding-cuplock-system",
  "cuplock-vertical": "scaffolding-cuplock-system",
  "cuplock-ledger": "scaffolding-cuplock-system",
  "cc-cribs": "cc-cribs-staging-tower",
  "c-cribs": "cc-cribs-staging-tower",
  "acro-span": "acro-span-centering",
  "acro-spans": "acro-span-centering",
  "centering-span": "acro-span-centering",
  "crash-barrier-moulds": "crash-barrier-mould",
  "crash-barrier-shuttering": "crash-barrier-mould",
  "haunch-plate": "haunch-plate-shuttering",
  "haunch-plates": "haunch-plate-shuttering",
  "tie-rod": "tie-rod-wing-nut",
  "wing-nut": "tie-rod-wing-nut",
  "road-signs": "road-sign-board",
  "sign-board": "road-sign-board",
  "traffic-sign-board": "road-sign-board"
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



