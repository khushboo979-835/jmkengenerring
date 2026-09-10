const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createDesignSpecPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontMono = await pdfDoc.embedFont(StandardFonts.CourierBold);

  const width = 1920;
  const height = 1080;

  // Helper colors
  const redPrimary = rgb(0.86, 0.15, 0.15); // #DC2626
  const blackBg = rgb(0.06, 0.09, 0.16); // #0F172A
  const white = rgb(1, 1, 1);
  const neutralDark = rgb(0.1, 0.1, 0.1);
  const neutralGray = rgb(0.4, 0.45, 0.5);
  const lightGrayBg = rgb(0.96, 0.97, 0.98);
  const emeraldGreen = rgb(0.09, 0.64, 0.29);
  const cardBorder = rgb(0.85, 0.88, 0.92);

  // Common Header Drawer Function
  function drawHeader(page, pageNum, pageTitle, subTitle) {
    // Top Bar
    page.drawRectangle({
      x: 0,
      y: height - 60,
      width: width,
      height: 60,
      color: blackBg,
    });

    page.drawText('JMK ENGINEERING & DEVELOPERS - ONSITE ERP SPECIFICATION', {
      x: 60,
      y: height - 38,
      size: 16,
      font: fontBold,
      color: white,
    });

    page.drawText('Patna HQ Live  |  GST Verified: 10BIEPD2766D2ZX  |  TrustSEAL Verified  |  Rating: 3.9 (20)', {
      x: width - 780,
      y: height - 38,
      size: 13,
      font: fontBold,
      color: emeraldGreen,
    });

    // Page Title Section
    page.drawText(pageTitle, {
      x: 60,
      y: height - 120,
      size: 28,
      font: fontBold,
      color: neutralDark,
    });

    page.drawText(subTitle, {
      x: 60,
      y: height - 150,
      size: 15,
      font: fontRegular,
      color: neutralGray,
    });

    // Page Badge
    page.drawRectangle({
      x: width - 260,
      y: height - 145,
      width: 200,
      height: 36,
      color: rgb(0.99, 0.9, 0.9),
      borderColor: redPrimary,
      borderWidth: 1.5,
    });

    page.drawText(`SPEC SHEET 0${pageNum} / 06`, {
      x: width - 238,
      y: height - 132,
      size: 13,
      font: fontBold,
      color: redPrimary,
    });

    // Bottom Footer
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: 45,
      color: lightGrayBg,
      borderColor: cardBorder,
      borderWidth: 1,
    });

    page.drawText('JMK Engineering Platform Specification | 1920x1080 Landscape Specification Format', {
      x: 60,
      y: 18,
      size: 12,
      font: fontRegular,
      color: neutralGray,
    });

    page.drawText('https://jmkengineering.com', {
      x: width - 240,
      y: 18,
      size: 12,
      font: fontMono,
      color: redPrimary,
    });
  }

  // ==========================================
  // PAGE 1: Unified Enterprise Gateway
  // ==========================================
  {
    const page = pdfDoc.addPage([width, height]);
    drawHeader(page, 1, 'PAGE 1: UNIFIED ENTERPRISE GATEWAY', 'SSO Multi-Tenant Login & Role-Based Access Architecture (Smart Login)');

    // Left Mockup Box
    page.drawRectangle({
      x: 60,
      y: 100,
      width: 1050,
      height: 750,
      color: lightGrayBg,
      borderColor: cardBorder,
      borderWidth: 2,
    });

    page.drawText('ROLE SELECTION & MULTI-TENANT ISOLATION DESK', {
      x: 90,
      y: 810,
      size: 18,
      font: fontBold,
      color: redPrimary,
    });

    // Role 1 Card: HQ Super Admin
    page.drawRectangle({
      x: 90,
      y: 500,
      width: 480,
      height: 280,
      color: white,
      borderColor: redPrimary,
      borderWidth: 2,
    });

    page.drawText('Master HQ Global Command (Patna HQ)', {
      x: 115,
      y: 740,
      size: 18,
      font: fontBold,
      color: neutralDark,
    });

    page.drawText('Access Level: SUPER_ADMIN (Omni-Branch Aggregation)', {
      x: 115,
      y: 705,
      size: 13,
      font: fontBold,
      color: redPrimary,
    });

    const hqPoints = [
      '• Aggregates live data across Patna, Delhi, Mumbai & Kolkata',
      '• Authorizes financial vouchers & indents exceeding Rs 50,000',
      '• Exclusive capability to provision new regional branches',
      '• Real-time P&L, workforce muster counts & active machinery'
    ];
    hqPoints.forEach((pt, i) => {
      page.drawText(pt, { x: 115, y: 660 - (i * 28), size: 12, font: fontRegular, color: neutralDark });
    });

    // Role 2 Card: Scoped Branch Admin
    page.drawRectangle({
      x: 600,
      y: 500,
      width: 480,
      height: 280,
      color: white,
      borderColor: cardBorder,
      borderWidth: 2,
    });

    page.drawText('Scoped Site Branch Admin / Ground Ops', {
      x: 625,
      y: 740,
      size: 18,
      font: fontBold,
      color: neutralDark,
    });

    page.drawText('Access Level: BRANCH_ADMIN / STAFF (Scoped Node)', {
      x: 625,
      y: 705,
      size: 13,
      font: fontBold,
      color: neutralGray,
    });

    const branchPoints = [
      '• Restricted strictly to WHERE branch_id = user.branch_id',
      '• Real-time GPS geofenced muster roll (500m radius lock)',
      '• Daily Progress Report (DPR) submission & defect snags',
      '• Local petty cash & stock indents queue below Rs 50k'
    ];
    branchPoints.forEach((pt, i) => {
      page.drawText(pt, { x: 625, y: 660 - (i * 28), size: 12, font: fontRegular, color: neutralDark });
    });

    // Trust & Compliance Box
    page.drawRectangle({
      x: 90,
      y: 130,
      width: 990,
      height: 330,
      color: white,
      borderColor: cardBorder,
      borderWidth: 1.5,
    });

    page.drawText('Security & Trust Safeguards (Pre-Established Backend Architecture):', {
      x: 115,
      y: 420,
      size: 16,
      font: fontBold,
      color: neutralDark,
    });

    const secPoints = [
      '1. Multi-Tenant Guard: Database queries enforce multi-branch tenant isolation per request.',
      '2. JWT Session Continuity: High-security signed tokens contain user role and branch authorization.',
      '3. Anti-Spoof GPS Telemetry: GPS coordinates verified against Haversine radius to prevent muster spoofing.',
      '4. Microcopy Standard: GSTIN 10BIEPD2766D2ZX verified; ISO 9001:2015 compliant data validation.'
    ];
    secPoints.forEach((pt, i) => {
      page.drawText(pt, { x: 115, y: 375 - (i * 40), size: 13, font: fontRegular, color: neutralDark });
    });

    // Right Sidebar Specs
    page.drawRectangle({
      x: 1150,
      y: 100,
      width: 710,
      height: 750,
      color: neutralDark,
    });

    page.drawText('AUTHENTICATION & GATEWAY LOGIC', {
      x: 1180,
      y: 800,
      size: 18,
      font: fontBold,
      color: redPrimary,
    });

    const codeSnippet = [
      '// POST /api/auth/login',
      'const user = await authenticate(email, password);',
      '',
      'if (user.role === "SUPER_ADMIN") {',
      '  // Global Multi-Site View',
      '  return router.push("/dashboard/super-admin");',
      '} else if (user.role === "BRANCH_ADMIN") {',
      '  // Scoped Site View',
      '  return router.push("/dashboard/branch");',
      '} else {',
      '  // Staff Tasks View',
      '  return router.push("/dashboard/employee");',
      '}',
      '',
      '// Global Status Bar Feed:',
      'Workforce: 842/910 Present (92.5%)',
      'Payroll: Rs 4,82,500 Disbursed Today',
      'Pending HQ Approvals: 6 Desks'
    ];
    codeSnippet.forEach((line, i) => {
      page.drawText(line, { x: 1180, y: 740 - (i * 26), size: 13, font: fontMono, color: white });
    });
  }

  // ==========================================
  // PAGE 2: Front-Page Design Specification
  // ==========================================
  {
    const page = pdfDoc.addPage([width, height]);
    drawHeader(page, 2, 'PAGE 2: FRONT-PAGE DESIGN SPECIFICATION', 'Exact Layout as image_37.png with Dynamic 5-Image Background Slider & Role CTAs');

    // Left Mockup Area
    page.drawRectangle({
      x: 60,
      y: 100,
      width: 1100,
      height: 750,
      color: white,
      borderColor: cardBorder,
      borderWidth: 2,
    });

    // Navbar mockup
    page.drawRectangle({ x: 80, y: 760, width: 1060, height: 70, color: white, borderColor: redPrimary, borderWidth: 1.5 });
    page.drawText('JMK Engineering & Developers  |  Services  Projects  Quality  Tenders', { x: 100, y: 790, size: 14, font: fontBold, color: neutralDark });
    page.drawText('[+ Add Branch] (HQ)  |  [Contact Supplier / Request RFQ]', { x: 740, y: 790, size: 13, font: fontBold, color: redPrimary });

    // Slider Hero Card Mockup
    page.drawRectangle({ x: 80, y: 400, width: 1060, height: 340, color: blackBg });
    page.drawText('EST. 2021 | PROPRIETORSHIP FIRM | ISO COMPLIANT OPERATIONS', { x: 320, y: 690, size: 12, font: fontBold, color: lightGrayBg });
    page.drawText('Engineering the Future of Infrastructure & Turnkey Construction', { x: 150, y: 610, size: 24, font: fontBold, color: white });
    page.drawText('[Explore Product Catalog]    [Request Instant Quote / RFQ]', { x: 340, y: 520, size: 14, font: fontBold, color: redPrimary });

    // 5 Shaped Cards Row
    page.drawText('5 DISTINCT GEOMETRIC SHAPED PRODUCT SPEC CARDS (image_37.png exact):', { x: 80, y: 360, size: 14, font: fontBold, color: redPrimary });

    const cards = [
      { title: 'Expansion Joints', sub: 'SS Joint 8.20mm', shape: 'Keystone' },
      { title: 'Shuttering Plate', sub: '20kg / 27mm', shape: 'Teardrop' },
      { title: 'Centering Sheets', sub: 'MS 27kg / 13kg', shape: 'Circle' },
      { title: 'Centerg Plates', sub: 'POT PTFE 10k kN', shape: 'Organic' },
      { title: 'H-Frame Scaffold', sub: 'Props Box 30mm', shape: 'Hexagon' },
    ];
    cards.forEach((c, idx) => {
      const cardX = 80 + (idx * 215);
      page.drawRectangle({ x: cardX, y: 130, width: 200, height: 210, color: lightGrayBg, borderColor: cardBorder, borderWidth: 1.5 });
      page.drawText(`[${c.shape} Shape]`, { x: cardX + 45, y: 305, size: 12, font: fontMono, color: redPrimary });
      page.drawText(c.title, { x: cardX + 20, y: 260, size: 14, font: fontBold, color: neutralDark });
      page.drawText(c.sub, { x: cardX + 20, y: 230, size: 12, font: fontRegular, color: neutralGray });
      page.drawText('PDF  [Download]', { x: cardX + 20, y: 160, size: 12, font: fontBold, color: redPrimary });
    });

    // Right Annotations Sidebar
    page.drawRectangle({ x: 1200, y: 100, width: 660, height: 750, color: lightGrayBg, borderColor: cardBorder, borderWidth: 2 });
    page.drawText('SLIDER & ROLE CTA CALLOUTS', { x: 1230, y: 800, size: 18, font: fontBold, color: redPrimary });

    const sliderNotes = [
      '1. DYNAMIC 5-IMAGE LOOPING SLIDER:',
      '   - Image 1: Heavy Infrastructure Casting (Concrete pier)',
      '   - Image 2: Industrial Site Management Hub (Warehouse)',
      '   - Image 3: GPS + Face ID Biometric Attendance Kiosk',
      '   - Image 4: Material Logistics Hub (Steel racks)',
      '   - Image 5: Multi-Branch Command Room Data Visualization',
      '',
      '2. TRANSITION LOGIC:',
      '   - Automatic cross-fade duration: 1.0s',
      '   - Slide display hold time: 5.0s',
      '   - Smooth GSAP & CSS transform rendering',
      '',
      '3. ROLE-BASED CONDITIONAL CTA:',
      '   - if (user.role === "SUPER_ADMIN") -> [+ Add Branch]',
      '   - if (user.role === "BRANCH_ADMIN") -> [Approvals Desk]',
      '   - Standard Contact Supplier / Request RFQ action'
    ];
    sliderNotes.forEach((line, i) => {
      page.drawText(line, { x: 1230, y: 740 - (i * 24), size: 12, font: fontMono, color: neutralDark });
    });
  }

  // ==========================================
  // PAGE 3: Super Admin HQ Command Hub
  // ==========================================
  {
    const page = pdfDoc.addPage([width, height]);
    drawHeader(page, 3, 'PAGE 3: SUPER ADMIN HQ COMMAND HUB', 'Pan-India Real-Time Multi-Site Telemetry, Budget Allocation & Approvals Matrix');

    // 4 Big KPI Cards
    const kpiCards = [
      { title: 'Total Operational Sites', val: '4 Regional Hubs', sub: 'Patna HQ, Delhi, Mumbai, Kolkata' },
      { title: 'Workforce Present Today', val: '842 / 910 Staff', sub: '92.5% GPS Verified In-Fence' },
      { title: 'Monthly Budget Allocated', val: 'Rs 1.75 Crore', sub: 'Spend: Rs 94.8 Lakhs (54%)' },
      { title: 'Pending HQ Approvals', val: '6 Desks Active', sub: '> Rs 50,000 Authority Tier' },
    ];
    kpiCards.forEach((k, idx) => {
      const kX = 60 + (idx * 455);
      page.drawRectangle({ x: kX, y: 640, width: 440, height: 180, color: white, borderColor: cardBorder, borderWidth: 2 });
      page.drawText(k.title, { x: kX + 25, y: 780, size: 14, font: fontBold, color: neutralGray });
      page.drawText(k.val, { x: kX + 25, y: 730, size: 28, font: fontBold, color: redPrimary });
      page.drawText(k.sub, { x: kX + 25, y: 680, size: 13, font: fontRegular, color: emeraldGreen });
    });

    // 4 Regional Branch Detailed Cards
    const branches = [
      { name: 'Patna Central Works (PAT-HQ)', cap: '312 Workers', prod: '48 MT Today', dpr: 'Live CNC Punch Active' },
      { name: 'Delhi NCR Depot (DEL-NCR)', cap: '198 Workers', prod: '32 MT Staged', dpr: 'Strip Seal Joint Lot' },
      { name: 'Mumbai Logistics Node (BOM-WST)', cap: '174 Workers', prod: '24 MT Deployed', dpr: 'POT-PTFE Proof Test' },
      { name: 'Kolkata Metro Depot (CCU-EST)', cap: '158 Workers', prod: '18 MT Erected', dpr: 'H-Frame Falsework Setup' },
    ];
    branches.forEach((b, idx) => {
      const bX = 60 + (idx * 455);
      page.drawRectangle({ x: bX, y: 140, width: 440, height: 460, color: lightGrayBg, borderColor: cardBorder, borderWidth: 2 });
      page.drawText(b.name, { x: bX + 25, y: 560, size: 16, font: fontBold, color: neutralDark });
      page.drawText(`Workforce: ${b.cap}`, { x: bX + 25, y: 500, size: 14, font: fontRegular, color: neutralDark });
      page.drawText(`Production: ${b.prod}`, { x: bX + 25, y: 450, size: 14, font: fontRegular, color: neutralDark });
      page.drawText(`DPR Status: ${b.dpr}`, { x: bX + 25, y: 400, size: 14, font: fontBold, color: redPrimary });
      page.drawText('GPS Geofence: Active Verified', { x: bX + 25, y: 350, size: 13, font: fontBold, color: emeraldGreen });
      page.drawText('Action: [Deep-Dive Audit]', { x: bX + 25, y: 220, size: 13, font: fontBold, color: redPrimary });
    });
  }

  // ==========================================
  // PAGE 4: Onboarding & Provisioning Modal
  // ==========================================
  {
    const page = pdfDoc.addPage([width, height]);
    drawHeader(page, 4, 'PAGE 4: ONBOARDING & PROVISIONING MODAL', 'Workflow for Deploying New Regional Branches & Geofenced Logistics Nodes');

    // Central Form Mockup
    page.drawRectangle({ x: 260, y: 160, width: 1400, height: 680, color: white, borderColor: redPrimary, borderWidth: 2.5 });
    page.drawText('PROVISION NEW REGIONAL LOGISTICS HUB / SITE', { x: 300, y: 790, size: 22, font: fontBold, color: neutralDark });
    page.drawText('Endpoint: POST /api/branches  |  Role Authority: Super Admin Patna HQ Only', { x: 300, y: 755, size: 14, font: fontMono, color: redPrimary });

    const fields = [
      { label: 'Branch Name', val: 'Ahmedabad Western Corridor Depot' },
      { label: 'Branch Code (3-4 Chars)', val: 'AMD-WST' },
      { label: 'Central GPS Coordinates', val: 'Lat: 23.0225° N, Lng: 72.5714° E' },
      { label: 'Geofence Verification Radius', val: '500 Meters (High Precision Anti-Spoof)' },
      { label: 'Allocated Monthly Budget', val: 'Rs 35,00,000 / Month' },
      { label: 'Assigned Regional Manager', val: 'Er. Amit Trivedi (Senior Structural Engineer)' }
    ];
    fields.forEach((f, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const fX = 300 + (col * 680);
      const fY = 660 - (row * 140);
      page.drawText(f.label, { x: fX, y: fY, size: 14, font: fontBold, color: neutralGray });
      page.drawRectangle({ x: fX, y: fY - 50, width: 620, height: 42, color: lightGrayBg, borderColor: cardBorder, borderWidth: 1.5 });
      page.drawText(f.val, { x: fX + 15, y: fY - 36, size: 14, font: fontBold, color: neutralDark });
    });

    page.drawText('ACTION: [PROVISION & DEPLOY NEW HUB]', { x: 740, y: 210, size: 18, font: fontBold, color: redPrimary });
  }

  // ==========================================
  // PAGE 5: Scoped Branch Workspace & GPS Geofence
  // ==========================================
  {
    const page = pdfDoc.addPage([width, height]);
    drawHeader(page, 5, 'PAGE 5: SCOPED BRANCH WORKSPACE & GPS GEOFENCE', 'Scoped Site Command Desk & Anti-Spoof Live Attendance Radius Architecture');

    // Left Scoped Node Card
    page.drawRectangle({ x: 60, y: 140, width: 1100, height: 700, color: white, borderColor: cardBorder, borderWidth: 2 });
    page.drawText('DELHI NCR LOGISTICS DEPOT (DEL-NCR) - SCOPED VIEW', { x: 90, y: 790, size: 20, font: fontBold, color: redPrimary });
    page.drawText('Incharge: Er. Vikram Sharma  |  Site Address: IMT Manesar Sector 8, Gurgaon', { x: 90, y: 755, size: 14, font: fontRegular, color: neutralGray });

    // GPS Geofence Box
    page.drawRectangle({ x: 90, y: 380, width: 1040, height: 340, color: lightGrayBg, borderColor: cardBorder, borderWidth: 1.5 });
    page.drawText('GPS GEOFENCE LIVE RADIAL RADAR (500M PERIMETER)', { x: 120, y: 680, size: 16, font: fontBold, color: neutralDark });
    page.drawText('Site Center: 28.3642° N, 76.9421° E', { x: 120, y: 640, size: 14, font: fontMono, color: neutralDark });
    page.drawText('Live Worker Status: 198 Workers Inside Fence (94.2%)  |  12 Out of Fence Exceptions', { x: 120, y: 590, size: 14, font: fontBold, color: emeraldGreen });
    page.drawText('Auto-Action: Out-of-fence punch requires Branch Admin OTP / Photo Override', { x: 120, y: 540, size: 13, font: fontRegular, color: redPrimary });

    // Metrics
    page.drawRectangle({ x: 90, y: 170, width: 1040, height: 180, color: white, borderColor: cardBorder, borderWidth: 1.5 });
    page.drawText('Local Shift Output: 32 Metric Tonnes Staged  |  Inventory: 1,420 Centering Sheets', { x: 120, y: 280, size: 15, font: fontBold, color: neutralDark });
    page.drawText('Daily Progress Report (DPR): Submitted & Verified by Site QA/QC', { x: 120, y: 230, size: 14, font: fontRegular, color: neutralDark });

    // Right Scoped Security Callout
    page.drawRectangle({ x: 1200, y: 140, width: 660, height: 700, color: neutralDark });
    page.drawText('SCOPED ARCHITECTURE SECURITY', { x: 1230, y: 780, size: 18, font: fontBold, color: redPrimary });

    const scopedRules = [
      '1. TENANT ENFORCEMENT:',
      '   Every query in the Branch Admin session is bound:',
      '   WHERE branch_id = "br_delhi_hub"',
      '',
      '2. ZERO CROSSOVER:',
      '   Branch managers cannot see competitor depot rates',
      '   or raw material costs from Patna HQ.',
      '',
      '3. HARDWARE GPS TELEMETRY:',
      '   Uses Mobile HTML5 Geolocation + Cell Tower ID',
      '   Maximum acceptable accuracy: +/- 15m radius.'
    ];
    scopedRules.forEach((line, i) => {
      page.drawText(line, { x: 1230, y: 720 - (i * 26), size: 13, font: fontMono, color: white });
    });
  }

  // ==========================================
  // PAGE 6: Digital Muster Roll & RA Billing
  // ==========================================
  {
    const page = pdfDoc.addPage([width, height]);
    drawHeader(page, 6, 'PAGE 6: DIGITAL MUSTER ROLL & RA BILLING', 'Automated Daily Labour Waging, Voucher Queues & Subcon Settlements');

    // Left Muster Table
    page.drawRectangle({ x: 60, y: 140, width: 1050, height: 700, color: white, borderColor: cardBorder, borderWidth: 2 });
    page.drawText('DAILY DIGITAL MUSTER ROLL (842 Active Today)', { x: 90, y: 790, size: 18, font: fontBold, color: redPrimary });

    const workers = [
      { name: 'Ramesh Paswan', trade: 'Senior Fitter', node: 'Patna Central Works', gps: 'Verified Inside (114m)', wage: 'Rs 850 / Day' },
      { name: 'Sunil Yadav', trade: 'Arc Welder', node: 'Delhi NCR Depot', gps: 'Verified Inside (42m)', wage: 'Rs 950 / Day' },
      { name: 'Anil Shinde', trade: 'Rigging Lead', node: 'Mumbai Logistics Hub', gps: 'Verified Inside (88m)', wage: 'Rs 900 / Day' },
      { name: 'Bikram Roy', trade: 'QA Inspector', node: 'Kolkata Metro Node', gps: 'Verified Inside (210m)', wage: 'Rs 1,100 / Day' },
      { name: 'Mukesh Kumar', trade: 'CNC Operator', node: 'Patna Central Works', gps: 'Verified Inside (55m)', wage: 'Rs 950 / Day' }
    ];

    workers.forEach((w, i) => {
      const rowY = 700 - (i * 105);
      page.drawRectangle({ x: 90, y: rowY - 20, width: 990, height: 85, color: lightGrayBg, borderColor: cardBorder, borderWidth: 1 });
      page.drawText(`${w.name} (${w.trade})`, { x: 110, y: rowY + 30, size: 15, font: fontBold, color: neutralDark });
      page.drawText(`Hub: ${w.node}  |  GPS: ${w.gps}`, { x: 110, y: rowY, size: 13, font: fontRegular, color: emeraldGreen });
      page.drawText(`Wage: ${w.wage}`, { x: 880, y: rowY + 15, size: 15, font: fontBold, color: redPrimary });
    });

    // Right Financial Desk
    page.drawRectangle({ x: 1150, y: 140, width: 710, height: 700, color: neutralDark });
    page.drawText('HQ FINANCIAL APPROVAL DESK (Vouchers > Rs 50k)', { x: 1180, y: 790, size: 17, font: fontBold, color: redPrimary });

    const vouchers = [
      { item: 'SAIL Structural Steel Channel Lot', site: 'Delhi Hub', amt: 'Rs 1,45,000' },
      { item: '250 MT Hydraulic Rig Overhaul', site: 'Patna Works', amt: 'Rs 68,000' },
      { item: 'POT-PTFE Bearing Rubber Compound Batch', site: 'Mumbai Hub', amt: 'Rs 2,10,000' },
      { item: 'Hot-Dip Zinc Ingot Raw Supply', site: 'Patna Works', amt: 'Rs 3,25,000' }
    ];

    vouchers.forEach((v, i) => {
      const vY = 700 - (i * 120);
      page.drawRectangle({ x: 1180, y: vY - 20, width: 650, height: 95, color: blackBg, borderColor: cardBorder, borderWidth: 1 });
      page.drawText(v.item, { x: 1200, y: vY + 40, size: 14, font: fontBold, color: white });
      page.drawText(`Origin: ${v.site} • Category: Material / Maintenance`, { x: 1200, y: vY + 15, size: 12, font: fontRegular, color: neutralGray });
      page.drawText(v.amt, { x: 1680, y: vY + 25, size: 16, font: fontBold, color: emeraldGreen });
    });
  }

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, 'JMK_Onsite_ERP_Design_Specification.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`PDF created successfully at: ${outputPath}`);
}

createDesignSpecPdf().catch(console.error);
