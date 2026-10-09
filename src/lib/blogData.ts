export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Bridge Bearings' | 'Expansion Joints' | 'Formwork & Shuttering' | 'Scaffolding Systems' | 'Highway Infrastructure' | 'PEB Structures';
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  featuredImage: string;
  isFeatured?: boolean;
  tags: string[];
  relatedProductSlug?: string;
  metaTitle: string;
  metaDescription: string;
}

export const SEED_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'bridge-bearings-pot-ptfe-elastomeric-guide-bihar',
    title: 'Complete Guide to POT-PTFE vs Elastomeric Bridge Bearings: IRC:83 Standards & Selection',
    excerpt: 'Explore the key technical differences, load capacities, rotation limits, and IRC:83 compliance standards between POT-PTFE and Elastomeric bridge bearings in civil infrastructure.',
    category: 'Bridge Bearings',
    author: {
      name: 'Er. Ujjwal Kumar',
      role: 'Chief Technical Director, JMK Engineering',
    },
    publishedAt: '2026-09-15T10:00:00Z',
    updatedAt: '2026-10-01T14:30:00Z',
    readTime: '6 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212537/OO/SD/EE/146888318/strip-seal-expansion-joint-500x500.jpg',
    isFeatured: true,
    tags: ['Bridge Bearings', 'POT PTFE', 'IRC:83', 'Infrastructure', 'Patna Fabrication'],
    relatedProductSlug: 'pot-ptfe-bridge-bearings',
    metaTitle: 'POT-PTFE vs Elastomeric Bridge Bearings Guide | JMK Engineering',
    metaDescription: 'Comprehensive technical comparison between POT-PTFE and Elastomeric bridge bearings adhering to IRC:83 Part II and III standards from JMK Engineering Patna.',
    content: `
## Introduction: The Critical Role of Bridge Bearings in Modern Infrastructure

Bridge bearings serve as the vital mechanical interface between the bridge superstructure (deck girders) and the substructure (piers and abutments). They accommodate longitudinal movements caused by thermal expansion, vehicular braking forces, seismic vibrations, and wind loads, while simultaneously transferring vertical gravity loads safely to the foundations.

In bridge engineering across India—specifically for major river crossings, flyovers, and rail-over-bridges (ROBs)—selecting between **POT-PTFE Bearings** and **Elastomeric Rubber Bearings** is a fundamental structural decision dictated by the **Indian Roads Congress (IRC:83)** standards.

---

## 1. What are POT-PTFE Bridge Bearings?

POT-PTFE bearings consist of an elastomeric disc confined within a precision-machined steel cylinder (the "pot"). Under high hydrostatic pressures, the confined elastomer behaves like an incompressible fluid, allowing multi-directional rotation with virtually zero lateral deformation.

A stainless steel sliding plate (mirror polished to Ra ≤ 0.1 µm) slides against a virgin PTFE (Polytetrafluoroethylene) sheet, providing an ultra-low coefficient of friction (typically $\\mu \\leq 0.03$).

### Key Features of POT-PTFE Bearings:
- **Ultra-High Load Capacities:** Capable of handling vertical loads exceeding **10,000 kN (1,000+ Tonnes)** per bearing.
- **Large Rotational Freedom:** Designed for rotations up to **0.03 radians** in any horizontal axis.
- **Types Available:**
  - *Fixed Bearings (PIN/Fixed POT)* – Allows rotation only, restricts translational displacement.
  - *Guided Sliding Bearings* – Permits sliding in one longitudinal or transverse direction while resisting lateral forces.
  - *Free Sliding Bearings* – Multi-directional translation and rotation.

---

## 2. What are Elastomeric Bridge Bearings?

Elastomeric bearings comprise vulcanized layers of high-grade natural rubber or chloroprene (Neoprene) reinforced with embedded internal steel shims. They accommodate longitudinal and transverse movements through elastic shear deformation of the elastomer, and rotation through non-uniform compression.

### Advantages of Elastomeric Bearings:
- **Zero Maintenance:** No moving parts, mechanical pistons, or lubrication required over their lifespan.
- **Cost-Effective:** Up to 40-50% lower initial procurement cost compared to POT-PTFE systems.
- **Vibration Dampening:** Excellent shock absorption properties for railway viaducts and high-speed transit corridors.
- **Ideal Span Range:** Best suited for medium span bridges (15m to 35m) with vertical loads up to 4,000 kN.

---

## 3. POT-PTFE vs Elastomeric: Technical Comparison Matrix

| Parameter | Elastomeric Bearings (IRC:83 Part II) | POT-PTFE Bearings (IRC:83 Part III) |
| :--- | :--- | :--- |
| **Max Vertical Load** | Up to 4,000 kN (400T) | 5,000 kN to 25,000+ kN (2500T+) |
| **Translation Capacity** | Up to $\\pm 50\\text{ mm}$ (shear deformation) | $\\pm 100\\text{ mm}$ to $\\pm 350\\text{ mm}$ (PTFE slide) |
| **Rotational Capacity** | Up to 0.01 radians | Up to 0.035 radians |
| **Design Life** | 20 - 30 Years | 40 - 50 Years (with periodic seal inspection) |
| **Common Applications** | Flyover approaches, RCC Box Girders (15-30m) | Major River Bridges, Cable Stayed Bridges, Steel Trusses |
| **Standard Compliance** | IRC:83 (Part II), MoRTH Section 2000 | IRC:83 (Part III), EN 1337-2, MoRTH Section 2000 |

---

## 4. Manufacturing Quality Assurance at JMK Engineering Patna

At JMK Engineering & Developers (Patna Central Works), every bearing assembly undergoes rigorous QA testing:
1. **Raw Material Certification:** IS 2062 Grade E250 / E350 steel plates and virgin PTFE conforming to ASTM D4894.
2. **Dimension Verification:** CNC milling and boring ensures tolerance within $\\pm 0.1\\text{ mm}$.
3. **Proof Load Testing:** 100% test loading up to 1.5x design load on in-house multi-axis hydraulic test rigs.
4. **Surface Coating:** 3-coat polyurethane epoxy paint or hot-dip galvanization for 25+ years corrosion protection.

---

## Conclusion & Next Steps

When designing heavy civil infrastructure in Eastern India, choosing the right bearing configuration ensures longevity and structural safety. For technical datasheets, CAD drawings, or ex-factory price estimates, contact JMK Engineering's technical estimation desk at **+91 7493916194**.
    `,
  },
  {
    id: 'blog-2',
    slug: 'ms-shuttering-plates-is2062-steel-centering-specifications',
    title: 'Heavy MS Shuttering Plates: IS 2062 Grade Specifications, Thickness & Load Calculations',
    excerpt: 'Detailed engineering guide on selecting 13kg, 20kg, 27kg, and 35kg MS shuttering plates for column, beam, slab, and culvert casting. Learn IS 2062 standards.',
    category: 'Formwork & Shuttering',
    author: {
      name: 'JMK Engineering Quality Desk',
      role: 'Formwork & Fabrication Division',
    },
    publishedAt: '2026-09-20T09:30:00Z',
    updatedAt: '2026-10-02T11:00:00Z',
    readTime: '5 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476982681/BJ/ZU/VV/146888318/mild-steel-centering-plate-500x500.jpg',
    isFeatured: false,
    tags: ['Shuttering Plates', 'Centering Sheets', 'IS 2062', 'Formwork Engineering', 'Concrete Casting'],
    relatedProductSlug: '20-kg-ms-shuttering-plate',
    metaTitle: 'MS Shuttering Plates & Centering Specifications | JMK Engineering',
    metaDescription: 'Complete specifications, weight charts, and load deflection data for IS 2062 Grade MS shuttering plates (13kg to 35kg) manufactured by JMK Engineering Patna.',
    content: `
## Why Steel Shuttering Plates Outperform Plywood & Timber Formwork

In heavy concrete construction, the shuttering system must withstand immense hydrostatic lateral pressure from fresh concrete, dynamic vibration loads, and repeated handling cycles. While conventional ply or timber formwork degrades after 5 to 8 uses, **Mild Steel (MS) Shuttering Plates manufactured from IS 2062 Grade steel** deliver 100+ reusable casting cycles with zero water absorption and zero formwork leakage.

JMK Engineering & Developers manufactures a comprehensive range of standard and heavy-duty centering sheets and shuttering plates at our Patna Central Works.

---

## 1. Standard Size & Weight Matrix of JMK Shuttering Plates

| Plate Dimension (Feet / Inches) | Sheet Thickness | Perimeter Angle Support | Nominal Weight | Recommended Application |
| :--- | :--- | :--- | :--- | :--- |
| **3 ft x 2 ft (900 x 600 mm)** | 2.0 mm (14 Gauge) | $25 \\times 25 \\times 3\\text{ mm}$ | **13 - 15 kg** | Residential Slab Centering, Lightweight Beams |
| **3 ft x 2 ft (900 x 600 mm)** | 2.5 mm (12 Gauge) | $35 \\times 35 \\times 5\\text{ mm}$ | **19 - 21 kg** | Commercial Columns, High-Rise Retaining Walls |
| **4 ft x 2 ft (1200 x 600 mm)** | 3.0 mm (10 Gauge) | $40 \\times 40 \\times 5\\text{ mm}$ | **27 - 28 kg** | Bridge Abutments, Box Culverts, Heavy RCC Walls |
| **5 ft x 3 ft (1500 x 900 mm)** | 4.0 mm (8 Gauge) | $50 \\times 50 \\times 6\\text{ mm}$ | **35 - 40 kg** | Pier Caps, Deep Girders, Heavy Infrastructure |

---

## 2. Engineering Features of JMK Industrial Shuttering Plates

### A. Robotic MIG Welding & Structural Stiffness
Every plate incorporates deep cross-stiffeners welded across the back using continuous CO2/MIG welding. This prevents dishing, bulging, and plate deformation during high-slump concrete vibrator compaction.

### B. Slotted Slot Holes for Rapid Pin-Wedge Assembly
Precision CNC-punched elliptical slots along all 4 perimeter flanges allow rapid alignment using standard taper pins, wedges, and shuttering clamps. This reduces formwork erection time by up to 60%.

### C. Red Oxide Anti-Rust Primer
Immediately following fabrication and degreasing, all plates receive an industrial high-adhesion anti-corrosive primer coating ensuring multi-year rust protection on exposed construction sites.
    `,
  },
  {
    id: 'blog-3',
    slug: 'strip-seal-vs-modular-expansion-joints-bridge-construction',
    title: 'Strip Seal vs Modular Bridge Expansion Joints: Maintenance, Waterproofing & Life Cycle',
    excerpt: 'An in-depth analysis of single-gap strip seal expansion joints vs multi-element modular joints for flyovers, viaducts, and river bridges under IRC:83 & MoRTH guidelines.',
    category: 'Expansion Joints',
    author: {
      name: 'Er. Ujjwal Kumar',
      role: 'Chief Technical Director, JMK Engineering',
    },
    publishedAt: '2026-09-28T11:15:00Z',
    updatedAt: '2026-10-04T16:00:00Z',
    readTime: '7 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/7/438212533/KH/VA/QI/146888318/strip-seal-expansion-joint-500x500.jpg',
    isFeatured: false,
    tags: ['Expansion Joints', 'Strip Seal', 'Bridge Engineering', 'MoRTH Guidelines', 'Waterproofing'],
    relatedProductSlug: 'strip-seal-expansion-joint',
    metaTitle: 'Strip Seal vs Modular Bridge Expansion Joints | JMK Engineering',
    metaDescription: 'Learn when to specify Strip Seal Joints (up to 80mm) vs Modular Multi-Gap Expansion Joints for bridge construction across India. IRC:83 compliant designs.',
    content: `
## Why Bridge Expansion Joints are Vital to Deck Longevity

Bridge decks constantly expand and contract due to ambient temperature shifts, concrete shrinkage, and live load deflections. Without engineered expansion joints, these forces induce severe compressive stresses that cause cracking, spalling, and catastrophic structural failure.

Furthermore, defective expansion joints are the **#1 cause of bridge sub-structure deterioration** because chloride-laden rainwater seeps through the gap, corroding the underlying bridge bearings, pedestals, and pier caps.

---

## 1. Single-Gap Strip Seal Expansion Joints (Movement up to 80 mm)

The **Strip Seal Expansion Joint** is the most widely specified expansion joint for small to medium span bridges (up to 60m spans) across national highways and state expressways.

### System Anatomy:
1. **Edge Beams (Steel Extrusions):** High-strength hot-rolled or machined steel beams with internal bulb-retaining grooves anchored into the deck concrete with 16mm rebar loop anchors.
2. **Elastomeric Seal Profile:** Continuous vulcanized EPDM or synthetic chloroprene membrane that snaps mechanically into the edge beams without adhesives.
3. **Anchor Loops & Transition Strip:** High-early-strength non-shrink epoxy concrete bed to ensure smooth riding transition.

### Advantages:
- **100% Watertight Integrity:** Continuous extrusion leaves zero path for water penetration.
- **Easy Maintenance:** The rubber insert can be replaced in under 2 hours without breaking the deck concrete.
- **Cost Effective:** Highly economical for movements up to $80\\text{ mm}$ ($\\pm 40\\text{ mm}$).
    `,
  },
  {
    id: 'blog-4',
    slug: 'cuplock-scaffolding-vs-h-frame-system-safety-efficiency',
    title: 'Cuplock Scaffolding vs H-Frame Staging: Site Safety, Load Capacity & Assembly Speed',
    excerpt: 'Compare modular Cuplock scaffolding systems with traditional H-frame staging towers. Discover which system delivers higher productivity and safety for multi-story casting.',
    category: 'Scaffolding Systems',
    author: {
      name: 'JMK Engineering Quality Desk',
      role: 'Scaffolding & Heavy Staging Division',
    },
    publishedAt: '2026-10-02T08:00:00Z',
    updatedAt: '2026-10-05T10:00:00Z',
    readTime: '5 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476991573/MU/LO/OE/146888318/scaffolding-adjustable-props-jack-500x500.jpeg',
    isFeatured: false,
    tags: ['Scaffolding Systems', 'Cuplock Scaffolding', 'H-Frame Staging', 'Site Safety', 'Formwork Staging'],
    relatedProductSlug: 'scaffolding-cuplock-system',
    metaTitle: 'Cuplock vs H-Frame Scaffolding Systems | JMK Engineering',
    metaDescription: 'Comparative technical breakdown of Cuplock Scaffolding vs H-Frame systems for heavy construction sites. Load data, assembly rates, and safety standards.',
    content: `
## Modular Scaffolding: The Backbone of Heavy Civil Staging

Whether supporting a 1.5m thick bridge pier cap or providing facade access for a 20-story commercial tower, selecting the proper scaffolding system directly determines labor cost, structural safety, and project completion timelines.

In modern Indian construction, two primary modular systems dominate: **Cuplock Multi-Directional Scaffolding** and **H-Frame Staging Systems**.

---

## 1. The Cuplock System: Features & Strengths

The Cuplock node point consists of a fixed bottom cup and a sliding, locking top cup welded onto vertical standards at regular $500\\text{ mm}$ intervals. Up to **4 horizontal ledgers or diagonal braces** can be locked securely with a single hammer blow.

### Key Benefits:
- **No Loose Fittings:** Eliminates nuts, bolts, and loose couplers that get lost or stolen on job sites.
- **Versatility:** Accommodates curved structures, circular storage tanks, and irregular bridge geometries.
- **High Load Capacity:** Vertical standards manufactured from $48.3\\text{ mm OD} \\times 3.2\\text{ mm}$ high-tensile steel tubes support up to **25 kN per leg** with proper cross-bracing.
    `,
  },
  {
    id: 'blog-5',
    slug: 'morth-compliant-carriageway-drainage-spouts-fabrication',
    title: 'MoRTH Approved MS Drainage Spouts: Bridge Deck Waterproofing & Corrosion Prevention',
    excerpt: 'Comprehensive guide to MoRTH Section 2700 compliant MS Drainage Spouts. Learn about 10mm, 12mm, and 14mm fabrication, grating designs, and galvanization standards.',
    category: 'Highway Infrastructure',
    author: {
      name: 'Er. Ujjwal Kumar',
      role: 'Chief Technical Director, JMK Engineering',
    },
    publishedAt: '2026-10-04T12:00:00Z',
    updatedAt: '2026-10-06T09:00:00Z',
    readTime: '4 min read',
    featuredImage: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476990475/XP/DZ/KU/146888318/galvanized-iron-hot-dip-drainage-spouts-500x500.jpg',
    isFeatured: false,
    tags: ['Drainage Spouts', 'MoRTH Standards', 'Bridge Drainage', 'Corrosion Prevention', 'Patna Works'],
    relatedProductSlug: '12mm-ms-drainage-spout',
    metaTitle: 'MoRTH Approved Bridge Drainage Spouts | JMK Engineering',
    metaDescription: 'Learn MoRTH Section 2700 technical requirements for Mild Steel & Ductile Iron Bridge Deck Drainage Spouts. Heavy fabrication from JMK Engineering.',
    content: `
## The Importance of Efficient Bridge Deck Drainage

Accumulation of stagnant rainwater on bridge carriageways creates severe hydroplaning hazards for motorists and drastically accelerates the penetration of moisture into deck concrete micro-cracks.

Under **MoRTH Specifications for Road and Bridge Works (5th Revision, Section 2700)**, every bridge deck must incorporate heavy-duty drainage spouts spaced at strategic intervals (typically 6m to 10m intervals along kerbs).

---

## 1. Anatomy of a MoRTH Compliant Drainage Spout

1. **Top Inverted Funnel / Grating Frame:** Fabricated from $10\\text{ mm}$ or $12\\text{ mm}$ IS 2062 MS plate with welded anti-clogging debris grating.
2. **Vertical Downspout Pipe:** Seamless or ERW pipe ($100\\text{ mm}$ or $150\\text{ mm}$ NB) extending at least $500\\text{ mm}$ below the soffit of the bridge girder.
3. **Flange Anchors:** Continuous welded anchor perimeter for monolithic bonding into the wearing coat and deck slab.
4. **Protective Coating:** Hot-Dip Galvanized to IS 4759 with a minimum coating thickness of $85\\text{ microns}$ ($610\\text{ g/m}^2$) or 3-coat heavy epoxy.
    `,
  },
  {
    id: 'blog-6',
    slug: 'peb-industrial-structures-warehouse-shed-fabrication-patna',
    title: 'Pre-Engineered Buildings (PEB) & Industrial Steel Sheds: IS 800:2007 Design Standards',
    excerpt: 'Engineering guide on designing and erecting PEB industrial sheds, clear-span factory warehouses, and heavy steel trusses in Bihar with high wind load resistance.',
    category: 'PEB Structures',
    author: {
      name: 'Er. Ujjwal Kumar',
      role: 'Chief Technical Director, JMK Engineering',
    },
    publishedAt: '2026-10-07T10:00:00Z',
    updatedAt: '2026-10-08T15:00:00Z',
    readTime: '5 min read',
    featuredImage: '/images/about/yellow-girder-staging-truss.jpg',
    isFeatured: false,
    tags: ['PEB Structures', 'Industrial Sheds', 'Steel Truss', 'IS 800', 'Patna Fabrication'],
    metaTitle: 'PEB Industrial Structures & Warehouse Shed Fabrication | JMK Engineering',
    metaDescription: 'Expert guide to PEB structural design, clear-span industrial sheds, and heavy steel fabrication in Patna adhering to IS 800:2007 and IS 875 wind standards.',
    content: `
## Why Pre-Engineered Steel Structures Dominate Modern Industrial Construction

In contrast to conventional RCC or on-site welded truss framing, Pre-Engineered Buildings (PEB) utilize factory-fabricated built-up tapered steel sections with high-strength bolted connections. This delivers up to **40% faster project completion** and provides clear unobstructed column-free internal floor spans.

JMK Engineering & Developers provides end-to-end PEB design, fabrication, and site erection across Bihar and Eastern India.

---

## 1. Structural Design Codes & Wind Load Parameters
All JMK PEB structures are modeled and designed adhering to:
- **IS 800:2007:** General Construction in Steel — Code of Practice.
- **IS 875 (Part 3):** Wind Loads on Buildings and Structures (designed for basic wind speeds up to $47 - 50\\text{ m/s}$ in Bihar zones).
- **IS 1893 (Part 1):** Criteria for Earthquake Resistant Design of Structures (Seismic Zone IV/V compliance).
    `,
  },
];

export function getAllBlogs(): BlogPost[] {
  return SEED_BLOGS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return SEED_BLOGS.find((blog) => blog.slug === slug);
}

export function getFeaturedBlogs(): BlogPost[] {
  return SEED_BLOGS.filter((b) => b.isFeatured);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  if (category === 'all' || category === 'All') return SEED_BLOGS;
  return SEED_BLOGS.filter((b) => b.category.toLowerCase() === category.toLowerCase());
}
