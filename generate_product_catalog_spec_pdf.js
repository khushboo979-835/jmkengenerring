const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createProductCatalogSpecPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontMono = await pdfDoc.embedFont(StandardFonts.CourierBold);

  const width = 1920;
  const height = 1080;

  // Strict Palette: Pure White, Deep Black, Primary Safety Red
  const redPrimary = rgb(0.86, 0.15, 0.15); // #DC2626
  const blackBg = rgb(0.04, 0.04, 0.05); // #0A0A0A
  const textBlack = rgb(0.06, 0.09, 0.16); // #0F172A
  const white = rgb(1, 1, 1);
  const grayLight = rgb(0.96, 0.97, 0.98);
  const grayBorder = rgb(0.86, 0.89, 0.93);
  const textMuted = rgb(0.4, 0.45, 0.52);
  const emeraldGreen = rgb(0.09, 0.64, 0.29);
  const amberColor = rgb(0.85, 0.45, 0.05);

  function drawCommonHeader(page, screenNum, screenTitle, screenSub) {
    // Top Bar
    page.drawRectangle({
      x: 0,
      y: height - 60,
      width: width,
      height: 60,
      color: blackBg,
    });

    page.drawText('JMK', {
      x: 60,
      y: height - 38,
      size: 18,
      font: fontBold,
      color: redPrimary,
    });

    page.drawText(' ENGINEERING & DEVELOPERS  |  ENTERPRISE ONSITE ERP & PRODUCT CATALOG SPECIFICATION', {
      x: 105,
      y: height - 38,
      size: 14,
      font: fontBold,
      color: white,
    });

    page.drawText('Patna HQ Central Works  |  GSTIN: 10BIEPD2766D2ZX  |  TrustSEAL Verified  |  Rating: 3.9 (20 Rating)', {
      x: width - 840,
      y: height - 38,
      size: 12,
      font: fontBold,
      color: emeraldGreen,
    });

    // Screen Header Banner
    page.drawRectangle({
      x: 60,
      y: height - 145,
      width: width - 120,
      height: 70,
      color: grayLight,
      borderColor: grayBorder,
      borderWidth: 1.5,
    });

    page.drawText(`SCREEN ${screenNum}: ${screenTitle}`, {
      x: 80,
      y: height - 110,
      size: 20,
      font: fontBold,
      color: textBlack,
    });

    page.drawText(screenSub, {
      x: 80,
      y: height - 132,
      size: 12,
      font: fontRegular,
      color: textMuted,
    });

    page.drawText(`PAGE ${screenNum} OF 5`, {
      x: width - 180,
      y: height - 115,
      size: 12,
      font: fontMono,
      color: redPrimary,
    });
  }

  // ==========================================
  // PAGE 1: SCREEN 1 - MASTER PRODUCT CATALOG & HQ COMMAND DESK
  // ==========================================
  const page1 = pdfDoc.addPage([width, height]);
  drawCommonHeader(
    page1,
    1,
    'MASTER PRODUCT CATALOG & HQ COMMAND DESK (SUPER ADMIN HQ VIEW)',
    'Universal Gateway: Workforce turnout telemetry, MTD financial spend, segmented BOQ & inventory controls with live tonnage metrics.'
  );

  // Top Nav Simulation
  page1.drawRectangle({
    x: 60,
    y: height - 215,
    width: width - 120,
    height: 55,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page1.drawText('JMK Engineering & Developers', {
    x: 80,
    y: height - 195,
    size: 15,
    font: fontBold,
    color: redPrimary,
  });

  page1.drawText('[Master Catalog]   [Branch Network]   [Central Inventory]   [HQ Signoff]', {
    x: 360,
    y: height - 193,
    size: 12,
    font: fontBold,
    color: textBlack,
  });

  page1.drawRectangle({
    x: width - 360,
    y: height - 205,
    width: 280,
    height: 35,
    color: redPrimary,
  });

  page1.drawText('+ Provision New Product / BOQ Line', {
    x: width - 345,
    y: height - 193,
    size: 11,
    font: fontBold,
    color: white,
  });

  // Central KPI Ribbon (3 Cards)
  const kpiData = [
    { label: 'WORKFORCE TURNOUT', val: '842 / 910 Present', sub: '[*] 92.5% Attendance across 4 Regional Sites', color: emeraldGreen },
    { label: 'COMBINED SPEND (MTD)', val: 'Rs. 42.8 Lakhs', sub: '[*] Within Rs. 48.0L Monthly Working Budget Cap', color: redPrimary },
    { label: 'PENDING HQ APPROVALS', val: '14 Items Requiring Signoff', sub: '[*] 3 Critical Subcontractor RA Bills & POs', color: textBlack },
  ];

  kpiData.forEach((kpi, idx) => {
    const cardX = 60 + idx * 610;
    page1.drawRectangle({
      x: cardX,
      y: height - 330,
      width: 580,
      height: 95,
      color: white,
      borderColor: grayBorder,
      borderWidth: 1.5,
    });

    page1.drawText(kpi.label, {
      x: cardX + 25,
      y: height - 260,
      size: 11,
      font: fontBold,
      color: textMuted,
    });

    page1.drawText(kpi.val, {
      x: cardX + 25,
      y: height - 290,
      size: 22,
      font: fontBold,
      color: kpi.color,
    });

    page1.drawText(kpi.sub, {
      x: cardX + 25,
      y: height - 315,
      size: 11,
      font: fontRegular,
      color: textMuted,
    });
  });

  // Segmented Controls Bar
  page1.drawRectangle({
    x: 60,
    y: height - 400,
    width: width - 120,
    height: 50,
    color: grayLight,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page1.drawText('WORKSPACE MODE:  [Pre-Construction (BOQ)]   |   [Live Inventory Matrix]   |   [Global Order Desk]', {
    x: 80,
    y: height - 380,
    size: 13,
    font: fontBold,
    color: textBlack,
  });

  page1.drawText('Catalog Size: 62 Active Industrial Models  |  Direct Mill Test Certified (IS 2062 / IRC:83)', {
    x: width - 680,
    y: height - 380,
    size: 12,
    font: fontMono,
    color: redPrimary,
  });

  // 4 Sample Grid Tiles with Metrics
  const sampleProductsScreen1 = [
    { title: '13 Kg & 20 Kg MS Centering Sheet', cat: 'Shuttering & Centering', total: '14.5 Tons', patna: '6.2 Tons', orders: '3 Dispatches', price: 'Rs. 72 / Kg' },
    { title: '27 kg Iron Shuttering Plate (1200x600)', cat: 'Shuttering Plates', total: '22.0 Tons', patna: '9.8 Tons', orders: '5 Dispatches', price: 'Rs. 2,850 / Pc' },
    { title: 'Adjustable Props Scaffolding Jack', cat: 'Scaffolding & Props', total: '18.4 Tons', patna: '8.0 Tons', orders: '4 Dispatches', price: 'Rs. 1,450 / Pc' },
    { title: 'Strip Seal Bridge Expansion Joint', cat: 'Expansion Joints', total: '12.0 Tons', patna: '5.5 Tons', orders: '2 Dispatches', price: 'Rs. 3,500 / Mtr' },
  ];

  sampleProductsScreen1.forEach((p, idx) => {
    const tileX = 60 + idx * 455;
    const tileY = height - 760;

    page1.drawRectangle({
      x: tileX,
      y: tileY,
      width: 435,
      height: 330,
      color: white,
      borderColor: grayBorder,
      borderWidth: 1.5,
    });

    page1.drawRectangle({
      x: tileX,
      y: tileY + 200,
      width: 435,
      height: 130,
      color: grayLight,
    });

    page1.drawText(p.cat.toUpperCase(), {
      x: tileX + 20,
      y: tileY + 305,
      size: 10,
      font: fontBold,
      color: redPrimary,
    });

    page1.drawText(p.title, {
      x: tileX + 20,
      y: tileY + 175,
      size: 15,
      font: fontBold,
      color: textBlack,
    });

    // Metrics Box
    page1.drawRectangle({
      x: tileX + 20,
      y: tileY + 65,
      width: 395,
      height: 95,
      color: grayLight,
      borderColor: grayBorder,
      borderWidth: 1,
    });

    page1.drawText(`Total Stock: ${p.total}`, {
      x: tileX + 35,
      y: tileY + 135,
      size: 12,
      font: fontBold,
      color: textBlack,
    });

    page1.drawText(`Patna Stock: ${p.patna}`, {
      x: tileX + 35,
      y: tileY + 110,
      size: 12,
      font: fontBold,
      color: redPrimary,
    });

    page1.drawText(`Active Orders: ${p.orders}`, {
      x: tileX + 35,
      y: tileY + 85,
      size: 12,
      font: fontBold,
      color: emeraldGreen,
    });

    page1.drawText(`Base Rate: ${p.price}`, {
      x: tileX + 20,
      y: tileY + 30,
      size: 13,
      font: fontBold,
      color: textBlack,
    });

    page1.drawText('Deep Specs ->', {
      x: tileX + 310,
      y: tileY + 30,
      size: 12,
      font: fontBold,
      color: redPrimary,
    });
  });

  page1.drawText('All products are statically pre-rendered via Next.js SSG for 0% runtime lag and instant Google Indexing.', {
    x: 60,
    y: 40,
    size: 12,
    font: fontMono,
    color: textMuted,
  });

  // ==========================================
  // PAGE 2: SCREEN 2 - INDIVIDUAL PRODUCT DEEP-PAGE MODEL
  // ==========================================
  const page2 = pdfDoc.addPage([width, height]);
  drawCommonHeader(
    page2,
    2,
    'INDIVIDUAL PRODUCT DEEP-PAGE MODEL (e.g., /products/ms-shuttering-plates)',
    'Split-Screen Desktop Layout: Color-accurate visual gallery, verified engineering specifications, turnkey uses, multi-tenant stock & RFQ actions.'
  );

  // Left Column: Visual Gallery (Width: 650)
  page2.drawRectangle({
    x: 60,
    y: height - 680,
    width: 650,
    height: 510,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page2.drawRectangle({
    x: 80,
    y: height - 540,
    width: 610,
    height: 350,
    color: grayLight,
    borderColor: grayBorder,
    borderWidth: 1,
  });

  page2.drawText('[ HIGH-RESOLUTION 4K PRODUCT VISUAL STAGE ]', {
    x: 180,
    y: height - 370,
    size: 14,
    font: fontBold,
    color: textMuted,
  });

  page2.drawText('27 kg / 30 kg Heavy Steel Shuttering Plate Stack', {
    x: 190,
    y: height - 400,
    size: 12,
    font: fontRegular,
    color: textBlack,
  });

  // 3 Mini Thumbnails
  for (let i = 0; i < 3; i++) {
    page2.drawRectangle({
      x: 80 + i * 205,
      y: height - 650,
      width: 190,
      height: 90,
      color: grayLight,
      borderColor: i === 0 ? redPrimary : grayBorder,
      borderWidth: i === 0 ? 2 : 1,
    });
    page2.drawText(`Angle ${i + 1} View`, {
      x: 130 + i * 205,
      y: height - 605,
      size: 11,
      font: fontBold,
      color: textBlack,
    });
  }

  // Credibility Mini Bar
  page2.drawRectangle({
    x: 60,
    y: height - 800,
    width: 650,
    height: 100,
    color: grayLight,
    borderColor: grayBorder,
    borderWidth: 1,
  });

  page2.drawText('GSTIN: 10BIEPD2766D2ZX   |   TrustSEAL Verified   |   Payment Protected', {
    x: 80,
    y: height - 745,
    size: 12,
    font: fontBold,
    color: redPrimary,
  });

  page2.drawText('Direct factory manufacturing at Patna Central Works. Test certificates (MTC) supplied with every batch.', {
    x: 80,
    y: height - 775,
    size: 11,
    font: fontRegular,
    color: textMuted,
  });

  // Right Column: Information & Specs (Width: 1100)
  const rightX = 750;

  // Breadcrumb
  page2.drawText('Home  >  Products  >  Shuttering & Centering  >  MS Shuttering Plates (27kg Fe 410)', {
    x: rightX,
    y: height - 190,
    size: 12,
    font: fontBold,
    color: textMuted,
  });

  // Headline
  page2.drawText('MS Shuttering Plates (27 kg / 30 kg Iron Formwork)', {
    x: rightX,
    y: height - 230,
    size: 26,
    font: fontBold,
    color: textBlack,
  });

  // Price & Badges
  page2.drawText('Price inquiries: Rs. 2,850 / Piece (Ex-Factory Patna)   |   MOQ: 50 Pieces', {
    x: rightX,
    y: height - 265,
    size: 14,
    font: fontBold,
    color: redPrimary,
  });

  // Section 1: Verified Specifications Table
  page2.drawText('SECTION 1: VERIFIED SPECIFICATIONS (CLEAN TABLE LAYOUT)', {
    x: rightX,
    y: height - 310,
    size: 13,
    font: fontBold,
    color: textBlack,
  });

  page2.drawRectangle({
    x: rightX,
    y: height - 425,
    width: 1110,
    height: 100,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  // Table Headers
  page2.drawRectangle({
    x: rightX,
    y: height - 360,
    width: 1110,
    height: 35,
    color: grayLight,
  });

  page2.drawText('MATERIAL STANDARD', { x: rightX + 20, y: height - 345, size: 11, font: fontBold, color: textBlack });
  page2.drawText('GAUGE / THICKNESS', { x: rightX + 300, y: height - 345, size: 11, font: fontBold, color: textBlack });
  page2.drawText('LOAD CAPACITY', { x: rightX + 580, y: height - 345, size: 11, font: fontBold, color: textBlack });
  page2.drawText('STANDARD DIMENSIONS', { x: rightX + 850, y: height - 345, size: 11, font: fontBold, color: textBlack });

  // Table Row
  page2.drawText('IS 2062 Grade E250 / Fe 410 Steel', { x: rightX + 20, y: height - 395, size: 12, font: fontRegular, color: textBlack });
  page2.drawText('3.15 mm Cold Rolled Sheet', { x: rightX + 300, y: height - 395, size: 12, font: fontBold, color: redPrimary });
  page2.drawText('20.0 MT (Proof Tested)', { x: rightX + 580, y: height - 395, size: 12, font: fontBold, color: textBlack });
  page2.drawText('1200 x 600 mm (Custom BOQ)', { x: rightX + 850, y: height - 395, size: 12, font: fontRegular, color: textBlack });

  // Section 2: Turnkey Project Uses
  page2.drawText('SECTION 2: TURNKEY PROJECT USES (CONSTRUCTION CONTEXT)', {
    x: rightX,
    y: height - 460,
    size: 13,
    font: fontBold,
    color: textBlack,
  });

  page2.drawRectangle({
    x: rightX,
    y: height - 565,
    width: 1110,
    height: 90,
    color: grayLight,
    borderColor: grayBorder,
    borderWidth: 1,
  });

  page2.drawText('* M25 / M35 Structural Concrete Casting: Monolithic floor slabs, RCC columns, lift shear walls, and culverts.', {
    x: rightX + 20,
    y: height - 500,
    size: 12,
    font: fontRegular,
    color: textBlack,
  });

  page2.drawText('* Bridge & Flyover Viaducts: Pier cap shuttering, segmental precast falsework, and high-load staging grids.', {
    x: rightX + 20,
    y: height - 535,
    size: 12,
    font: fontRegular,
    color: textBlack,
  });

  // Section 3: Multi-Tenant Stock & Logistics Hubs
  page2.drawText('SECTION 3: MULTI-TENANT STOCK & LOGISTICS HUBS (REAL-TIME NODE INVENTORY)', {
    x: rightX,
    y: height - 595,
    size: 13,
    font: fontBold,
    color: textBlack,
  });

  page2.drawRectangle({
    x: rightX,
    y: height - 760,
    width: 1110,
    height: 150,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  // Table Headers
  page2.drawRectangle({
    x: rightX,
    y: height - 630,
    width: 1110,
    height: 35,
    color: grayLight,
  });

  page2.drawText('REGIONAL NODE', { x: rightX + 20, y: height - 615, size: 11, font: fontBold, color: textBlack });
  page2.drawText('ALLOCATED STOCK', { x: rightX + 320, y: height - 615, size: 11, font: fontBold, color: textBlack });
  page2.drawText('DISPATCH STATUS', { x: rightX + 600, y: height - 615, size: 11, font: fontBold, color: textBlack });
  page2.drawText('LEAD TIME (ETA)', { x: rightX + 880, y: height - 615, size: 11, font: fontBold, color: textBlack });

  const hubs = [
    { name: 'Patna HQ Central Works', stock: '12.8 Tons', status: 'Direct Works Buffer', eta: 'Immediate (0 Days)' },
    { name: 'Delhi NCR Regional Depot', stock: '5.2 Tons', status: 'In Stock', eta: '2 Days Delivery' },
    { name: 'Kolkata Eastern Depot', stock: '7.0 Tons', status: 'In Stock', eta: '4 Days Delivery' },
    { name: 'Mumbai Western Hub', stock: '6.4 Tons', status: 'In Stock', eta: '3 Days Delivery' },
  ];

  hubs.forEach((h, idx) => {
    const rowY = height - 660 - idx * 28;
    page2.drawText(h.name, { x: rightX + 20, y: rowY, size: 11, font: fontBold, color: textBlack });
    page2.drawText(h.stock, { x: rightX + 320, y: rowY, size: 11, font: fontMono, color: redPrimary });
    page2.drawText(h.status, { x: rightX + 600, y: rowY, size: 11, font: fontRegular, color: textBlack });
    page2.drawText(h.eta, { x: rightX + 880, y: rowY, size: 11, font: fontBold, color: emeraldGreen });
  });

  // Action Buttons (Emerald Green + Outlined)
  page2.drawRectangle({
    x: rightX,
    y: height - 830,
    width: 480,
    height: 55,
    color: emeraldGreen,
  });

  page2.drawText('[OK] Request Bulk Pricing / RA Bill Calculation', {
    x: rightX + 50,
    y: height - 795,
    size: 15,
    font: fontBold,
    color: white,
  });

  page2.drawRectangle({
    x: rightX + 520,
    y: height - 830,
    width: 480,
    height: 55,
    color: white,
    borderColor: textBlack,
    borderWidth: 2,
  });

  page2.drawText('[PDF] Download Technical Datasheets', {
    x: rightX + 580,
    y: height - 795,
    size: 15,
    font: fontBold,
    color: textBlack,
  });

  // ==========================================
  // PAGE 3: SCREEN 3 - BRANCH SPECIFIC WORKSPACE & MUSTER ROLL
  // ==========================================
  const page3 = pdfDoc.addPage([width, height]);
  drawCommonHeader(
    page3,
    3,
    'BRANCH SPECIFIC WORKSPACE & LABOUR MUSTER ROLL (PATNA CENTRAL WORKS)',
    'Contextual View: GPS Geofence telemetry, live labour headcounts, local action tiles, and worker-by-worker muster roll logs.'
  );

  // Context Bar
  page3.drawRectangle({
    x: 60,
    y: height - 230,
    width: width - 120,
    height: 65,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page3.drawText('PATNA BRANCH WORKSPACE  |  Didarganj Industrial Area Works', {
    x: 80,
    y: height - 195,
    size: 16,
    font: fontBold,
    color: redPrimary,
  });

  page3.drawText('GPS Geofence: Active Zone (600m Radius Verified)  |  Sync Status: Online (Live)', {
    x: width - 680,
    y: height - 195,
    size: 13,
    font: fontBold,
    color: emeraldGreen,
  });

  // Telemetry Metric Boxes
  const branchMetrics = [
    { label: 'LABOUR STRENGTH', val: '142 Present', sub: '100% FaceID Verified at Kiosk', color: emeraldGreen },
    { label: 'DELAYED TASKS', val: '1 Task', sub: 'Ganga Bridge Pier 4 Bending Delay', color: redPrimary },
    { label: 'LOW MATERIAL ALERTS', val: '2 Items Alert', sub: '27kg MS Shuttering & Neoprene Buffer', color: amberColor },
  ];

  branchMetrics.forEach((m, idx) => {
    const cardX = 60 + idx * 610;
    page3.drawRectangle({
      x: cardX,
      y: height - 345,
      width: 580,
      height: 95,
      color: grayLight,
      borderColor: grayBorder,
      borderWidth: 1.5,
    });

    page3.drawText(m.label, { x: cardX + 25, y: height - 280, size: 11, font: fontBold, color: textMuted });
    page3.drawText(m.val, { x: cardX + 25, y: height - 310, size: 22, font: fontBold, color: m.color });
    page3.drawText(m.sub, { x: cardX + 25, y: height - 332, size: 11, font: fontRegular, color: textBlack });
  });

  // Local Action Tiles (3 Buttons)
  const actionTiles = [
    { title: '[GPS Attendance Kiosk]', desc: 'Launch tablet face biometric verification scanner' },
    { title: '[Material Stock Indent]', desc: 'Request raw steel coils or dispatch finished formwork' },
    { title: '[Submit Daily Progress Report (DPR)]', desc: 'Transmit daily completed tonnage and concrete volumes' },
  ];

  actionTiles.forEach((tile, idx) => {
    const tileX = 60 + idx * 610;
    page3.drawRectangle({
      x: tileX,
      y: height - 460,
      width: 580,
      height: 95,
      color: white,
      borderColor: redPrimary,
      borderWidth: 1.5,
    });

    page3.drawText(tile.title, { x: tileX + 25, y: height - 400, size: 16, font: fontBold, color: redPrimary });
    page3.drawText(tile.desc, { x: tileX + 25, y: height - 435, size: 12, font: fontRegular, color: textBlack });
  });

  // Lower Section: Daily Labour Muster Roll Table
  page3.drawText('LOWER SECTION: DAILY LABOUR MUSTER ROLL (WORKER BIOMETRIC AUDIT LOG)', {
    x: 60,
    y: height - 490,
    size: 14,
    font: fontBold,
    color: textBlack,
  });

  page3.drawRectangle({
    x: 60,
    y: height - 850,
    width: width - 120,
    height: 340,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  // Table Headers
  page3.drawRectangle({
    x: 60,
    y: height - 535,
    width: width - 120,
    height: 45,
    color: grayLight,
  });

  page3.drawText('WORKER ID & NAME', { x: 80, y: height - 510, size: 11, font: fontBold, color: textBlack });
  page3.drawText('TRADE / SKILL CATEGORY', { x: 420, y: height - 510, size: 11, font: fontBold, color: textBlack });
  page3.drawText('ASSIGNED SHIFT', { x: 800, y: height - 510, size: 11, font: fontBold, color: textBlack });
  page3.drawText('GPS & BIOMETRIC STATUS', { x: 1150, y: height - 510, size: 11, font: fontBold, color: textBlack });
  page3.drawText('DAILY WAGE', { x: 1520, y: height - 510, size: 11, font: fontBold, color: textBlack });
  page3.drawText('STATUS', { x: 1720, y: height - 510, size: 11, font: fontBold, color: textBlack });

  const workers = [
    { id: 'EMP-PAT-081', name: 'Rameshwar Mahato', trade: 'Master Shuttering Carpenter', shift: '08:00 - 17:00', bio: 'FaceID Verified (07:54 AM)', wage: 'Rs. 850 / day', status: 'PRESENT' },
    { id: 'EMP-PAT-094', name: 'Dinesh Kumar Sharma', trade: 'Hydraulic Press Operator', shift: '08:00 - 17:00', bio: 'FaceID Verified (07:58 AM)', wage: 'Rs. 950 / day', status: 'PRESENT' },
    { id: 'EMP-PAT-102', name: 'Md. Tariq Anwar', trade: 'Submerged Arc Welder', shift: '08:00 - 17:00', bio: 'FaceID Verified (08:02 AM)', wage: 'Rs. 900 / day', status: 'PRESENT' },
    { id: 'EMP-PAT-118', name: 'Sunil Paswan', trade: 'Scaffolding & Staging Rigger', shift: '08:00 - 17:00', bio: 'FaceID Verified (07:49 AM)', wage: 'Rs. 750 / day', status: 'PRESENT' },
    { id: 'EMP-PAT-125', name: 'Vikash Kumar Roy', trade: 'Formwork QC Inspector', shift: '08:00 - 17:00', bio: 'FaceID Verified (07:52 AM)', wage: 'Rs. 1,100 / day', status: 'PRESENT' },
  ];

  workers.forEach((w, idx) => {
    const rowY = height - 580 - idx * 55;
    page3.drawText(`${w.name} (${w.id})`, { x: 80, y: rowY, size: 12, font: fontBold, color: textBlack });
    page3.drawText(w.trade, { x: 420, y: rowY, size: 12, font: fontRegular, color: textBlack });
    page3.drawText(w.shift, { x: 800, y: rowY, size: 12, font: fontRegular, color: textMuted });
    page3.drawText(w.bio, { x: 1150, y: rowY, size: 12, font: fontMono, color: emeraldGreen });
    page3.drawText(w.wage, { x: 1520, y: rowY, size: 12, font: fontBold, color: textBlack });
    page3.drawText(`[ ${w.status} ]`, { x: 1720, y: rowY, size: 12, font: fontBold, color: emeraldGreen });
  });

  // ==========================================
  // PAGE 4: SCREEN 4 - SUPER ADMIN COMMAND DESK & APPROVALS HUB
  // ==========================================
  const page4 = pdfDoc.addPage([width, height]);
  drawCommonHeader(
    page4,
    4,
    'SUPER ADMIN COMMAND DESK & APPROVALS HUB (HQ SIGNOFF MATRIX)',
    'Executive Governance: Live fleet telemetry, Subcontractor RA bill verification against BOQ, and emergency slide-to-approve triggers.'
  );

  // Top Status Bar
  page4.drawRectangle({
    x: 60,
    y: height - 225,
    width: width - 120,
    height: 60,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page4.drawText('HQ LIVE SYNC STATUS: ACTIVE (SYNCED 1m AGO)  |  CENTRAL FINANCIAL AUTHORIZATION DESK', {
    x: 80,
    y: height - 192,
    size: 15,
    font: fontBold,
    color: redPrimary,
  });

  page4.drawText('Super Admin: Er. Rajesh Kumar Sharma (Director)  |  High-Value Threshold: > Rs. 50,000', {
    x: width - 780,
    y: height - 192,
    size: 12,
    font: fontMono,
    color: textBlack,
  });

  // Fleet Telemetry KPI Ribbon
  const fleetKpis = [
    { label: 'ACTIVE REGIONAL HUBS', val: '4 Sites', sub: 'Patna HQ, Delhi, Mumbai, Kolkata' },
    { label: 'COMBINED TURNOUT', val: '842 / 910 Logged', sub: '92.5% Attendance Verified' },
    { label: 'CONSOLIDATED SPEND', val: 'Rs. 42.8 Lakhs', sub: '51.3% Monthly Working Capital' },
    { label: 'PENDING AUTHORIZATIONS', val: '3 Critical Items', sub: 'Action Required Today' },
  ];

  fleetKpis.forEach((f, idx) => {
    const cardX = 60 + idx * 455;
    page4.drawRectangle({
      x: cardX,
      y: height - 330,
      width: 435,
      height: 85,
      color: grayLight,
      borderColor: grayBorder,
      borderWidth: 1.5,
    });

    page4.drawText(f.label, { x: cardX + 20, y: height - 270, size: 10, font: fontBold, color: textMuted });
    page4.drawText(f.val, { x: cardX + 20, y: height - 295, size: 18, font: fontBold, color: redPrimary });
    page4.drawText(f.sub, { x: cardX + 20, y: height - 315, size: 10, font: fontRegular, color: textBlack });
  });

  // Bottom Section: Multi-Category Sign-Off Matrix Tabs
  page4.drawText('MULTI-CATEGORY SIGN-OFF MATRIX:   [Pending Authorization (3)]   |   [Vendor Bills]   |   [Client RA Bills]', {
    x: 60,
    y: height - 365,
    size: 13,
    font: fontBold,
    color: textBlack,
  });

  // Card 1: RA Bill #04 - Apex Electricals
  page4.drawRectangle({
    x: 60,
    y: height - 820,
    width: 880,
    height: 430,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page4.drawRectangle({
    x: 60,
    y: height - 440,
    width: 880,
    height: 50,
    color: grayLight,
  });

  page4.drawText('RA BILL #04: APEX ELECTRICALS & POWER INFRASTRUCTURE', {
    x: 80,
    y: height - 418,
    size: 14,
    font: fontBold,
    color: redPrimary,
  });

  page4.drawText('CLAIMED: Rs. 1,85,000', {
    x: 700,
    y: height - 418,
    size: 14,
    font: fontBold,
    color: textBlack,
  });

  page4.drawText('Scope: Dedicated 33kV line energization & batching plant transformer synchronization.', {
    x: 80,
    y: height - 470,
    size: 12,
    font: fontRegular,
    color: textBlack,
  });

  page4.drawText('* Verified against BOQ Item 4.12: 100% Quantity Matched (Signed by Er. Amitabh Verma)', {
    x: 80,
    y: height - 510,
    size: 12,
    font: fontBold,
    color: emeraldGreen,
  });

  page4.drawText('* Attachment: Apex_Electricals_Measurement_Book_MB42.pdf (3.4 MB Verified)', {
    x: 80,
    y: height - 550,
    size: 12,
    font: fontMono,
    color: textBlack,
  });

  page4.drawRectangle({
    x: 80,
    y: height - 790,
    width: 320,
    height: 50,
    color: grayLight,
    borderColor: grayBorder,
    borderWidth: 1,
  });

  page4.drawText('[ Reject / Query Bill ]', {
    x: 170,
    y: height - 760,
    size: 13,
    font: fontBold,
    color: textBlack,
  });

  page4.drawRectangle({
    x: 440,
    y: height - 790,
    width: 480,
    height: 50,
    color: emeraldGreen,
  });

  page4.drawText('[OK] Authorize & Disburse Rs. 1,85,000', {
    x: 520,
    y: height - 760,
    size: 14,
    font: fontBold,
    color: white,
  });

  // Card 2: Emergency Diesel Purchase Order (Slide-to-Approve Trigger)
  const card2X = 980;
  page4.drawRectangle({
    x: card2X,
    y: height - 820,
    width: 880,
    height: 430,
    color: white,
    borderColor: grayBorder,
    borderWidth: 1.5,
  });

  page4.drawRectangle({
    x: card2X,
    y: height - 440,
    width: 880,
    height: 50,
    color: grayLight,
  });

  page4.drawText('EMERGENCY PO #D-882: HIGH-SPEED DIESEL PROCUREMENT', {
    x: card2X + 20,
    y: height - 418,
    size: 14,
    font: fontBold,
    color: amberColor,
  });

  page4.drawText('AMOUNT: Rs. 47,250', {
    x: card2X + 700,
    y: height - 418,
    size: 14,
    font: fontBold,
    color: textBlack,
  });

  page4.drawText('Purpose: 500 Litres HSD for Patna 60m3/hr batching plant continuous pour cycle.', {
    x: card2X + 20,
    y: height - 470,
    size: 12,
    font: fontRegular,
    color: textBlack,
  });

  page4.drawText('* Vendor: Indian Oil Corporation Ltd. (Patna Bulk Supply Depot)', {
    x: card2X + 20,
    y: height - 510,
    size: 12,
    font: fontBold,
    color: textBlack,
  });

  page4.drawText('* Attachment: IOCL_Official_Indent_Challan_IOC5519.pdf (1.2 MB)', {
    x: card2X + 20,
    y: height - 550,
    size: 12,
    font: fontMono,
    color: textBlack,
  });

  // Slide-to-Approve Trigger Simulation
  page4.drawRectangle({
    x: card2X + 20,
    y: height - 790,
    width: 840,
    height: 55,
    color: blackBg,
  });

  page4.drawText('>>> SLIDE-TO-APPROVE TRIGGER  |  [ Release Rs. 47,250 via Instant Webhook ] >>>', {
    x: card2X + 130,
    y: height - 757,
    size: 14,
    font: fontBold,
    color: white,
  });

  // ==========================================
  // PAGE 5: MULTI-CATEGORY INDIAMART ENGINEERING DATASHEET MATRIX
  // ==========================================
  const page5 = pdfDoc.addPage([width, height]);
  drawCommonHeader(
    page5,
    5,
    'COMPLETE INDIAMART INDUSTRIAL PRODUCT & SPECIFICATION MATRIX',
    'Full compilation of all 5 Core Product Categories: Shuttering, Scaffolding, Expansion Joints, Bridge Bearings & MS Drainage Spouts.'
  );

  const productMatrix = [
    {
      cat: '1. Shuttering & Centering Plates',
      items: [
        { name: '13 Kg & 20 Kg MS Centering Sheets', dims: '900x600mm / 1200x600mm', grade: 'IS 2062 Grade E250', load: '15.0 MT', uses: 'Slab staging & falsework' },
        { name: 'MS Shuttering Soldiers & Walers', dims: '2000mm to 3500mm height', grade: 'Fe 410 Steel', load: '35.0 MT', uses: 'Pier cap & retaining walls' },
        { name: '27 kg Iron Shuttering Plate', dims: '1200 x 600 mm', grade: 'Fe 410 High Tensile', load: '20.0 MT', uses: 'Column & monolithic slab' },
      ]
    },
    {
      cat: '2. Scaffolding Jack & Props',
      items: [
        { name: 'Adjustable Props Scaffolding Jack', dims: '2.0m - 3.5m / 3.0m - 4.5m', grade: 'IS 1161 ERW Pipe', load: '3.5 MT proof', uses: 'Vertical formwork support' },
        { name: 'Vertical U-Head & Base Jacks', dims: '38mm x 450mm / 650mm', grade: 'Malleable Cast Nut', load: '5.0 MT', uses: 'Cuplock & H-frame leveling' },
        { name: 'Iron H Frame Scaffolding System', dims: '2000 x 1200 mm frames', grade: 'Heavy Steel ERW', load: '25.0 MT grid', uses: 'Flyover heavy shoring' },
      ]
    },
    {
      cat: '3. Expansion Joints',
      items: [
        { name: 'Strip Seal Bridge Expansion Joint', dims: '80mm movement range', grade: 'SS 304 / High Elastomer', load: 'IRC:83 Class AA', uses: 'Highway bridge decks' },
        { name: '7-inch Bitumen Expansion Joint', dims: '180mm x 20mm pad', grade: 'Polymer Modified Bitumen', load: 'MoRTH Sec 2600', uses: 'Expressway pavement joints' },
        { name: 'Cover Plate Expansion Joints', dims: 'Custom carriageway width', grade: 'IS 2062 Grade E350', load: 'Heavy Axle Loads', uses: 'Railway & viaduct bridges' },
      ]
    },
    {
      cat: '4. Bridge Bearings',
      items: [
        { name: 'Elastomeric Bridge Rubber Bearing', dims: '300x400x60mm to 600x800mm', grade: 'Virgin Neoprene 60 IRHD', load: '1500 kN - 4500 kN', uses: 'Pier girder load transfer' },
        { name: 'POT-PTFE Bridge Bearings', dims: 'Multi-directional guided', grade: 'Cast Steel / Pure PTFE', load: '10,000 kN capacity', uses: 'Long-span viaducts' },
      ]
    },
    {
      cat: '5. MS Drainage Spouts',
      items: [
        { name: '12mm & 14mm MS Bridge Drainage Spout', dims: '100mm to 150mm dia bore', grade: 'Hot Dip Galvanized MS', load: 'MoRTH Section 2700', uses: 'Deck rainwater discharge' },
      ]
    }
  ];

  let currentY = height - 190;

  productMatrix.forEach((categoryBlock) => {
    page5.drawText(categoryBlock.cat, {
      x: 60,
      y: currentY,
      size: 14,
      font: fontBold,
      color: redPrimary,
    });
    currentY -= 25;

    page5.drawRectangle({
      x: 60,
      y: currentY - categoryBlock.items.length * 30 - 15,
      width: width - 120,
      height: categoryBlock.items.length * 30 + 35,
      color: white,
      borderColor: grayBorder,
      borderWidth: 1,
    });

    // Row Header
    page5.drawRectangle({
      x: 60,
      y: currentY - 10,
      width: width - 120,
      height: 25,
      color: grayLight,
    });

    page5.drawText('PRODUCT MODEL', { x: 80, y: currentY + 2, size: 9, font: fontBold, color: textBlack });
    page5.drawText('STANDARD DIMENSIONS', { x: 480, y: currentY + 2, size: 9, font: fontBold, color: textBlack });
    page5.drawText('MATERIAL SPECIFICATION', { x: 860, y: currentY + 2, size: 9, font: fontBold, color: textBlack });
    page5.drawText('LOAD RATING', { x: 1260, y: currentY + 2, size: 9, font: fontBold, color: textBlack });
    page5.drawText('PROJECT APPLICATIONS', { x: 1520, y: currentY + 2, size: 9, font: fontBold, color: textBlack });

    currentY -= 20;

    categoryBlock.items.forEach((item) => {
      currentY -= 26;
      page5.drawText(item.name, { x: 80, y: currentY, size: 10, font: fontBold, color: textBlack });
      page5.drawText(item.dims, { x: 480, y: currentY, size: 10, font: fontRegular, color: textBlack });
      page5.drawText(item.grade, { x: 860, y: currentY, size: 10, font: fontMono, color: redPrimary });
      page5.drawText(item.load, { x: 1260, y: currentY, size: 10, font: fontBold, color: textBlack });
      page5.drawText(item.uses, { x: 1520, y: currentY, size: 10, font: fontRegular, color: textMuted });
    });

    currentY -= 35;
  });

  // Save the document
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, 'JMK_Product_Catalog_ERP_Design_Spec.pdf');
  fs.writeFileSync(outputPath, pdfBytes);

  // Also save to public folder so users can download it directly from the site
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicPath = path.join(publicDir, 'JMK_Product_Catalog_ERP_Design_Spec.pdf');
  fs.writeFileSync(publicPath, pdfBytes);

  console.log(`[SUCCESS] High-resolution Landscape PDF successfully generated at: ${outputPath}`);
}

createProductCatalogSpecPdf().catch(console.error);
