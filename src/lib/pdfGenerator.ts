import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface WageSlipData {
  employeeName: string;
  employeeId?: string;
  designation?: string;
  branchName?: string;
  month?: string;
  year?: string;
  workingDays?: number;
  presentDays?: number;
  basicPay?: number;
  hra?: number;
  siteAllowance?: number;
  specialAllowance?: number;
  pfDeduction?: number;
  esicDeduction?: number;
  professionalTax?: number;
  netPay?: number;
}

export async function generateWageSlipPdf(data: WageSlipData): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  // Standard A4: 595 x 842 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Color constants
  const redPrimary = rgb(0.86, 0.15, 0.15); // JMK Red #dc2626
  const textDark = rgb(0.1, 0.1, 0.1);
  const textMuted = rgb(0.4, 0.4, 0.4);
  const bgLight = rgb(0.96, 0.96, 0.97);
  const borderLight = rgb(0.85, 0.85, 0.88);
  const greenBadge = rgb(0.08, 0.55, 0.32);

  // Top Accent Bar
  page.drawRectangle({
    x: 0,
    y: height - 8,
    width,
    height: 8,
    color: redPrimary,
  });

  // Header - Company Title & Meta
  let y = height - 45;

  page.drawText('JMK ENGINEERING & DEVELOPERS', {
    x: 40,
    y,
    size: 16,
    font: fontBold,
    color: redPrimary,
  });

  page.drawText('OFFICIAL SALARY & WAGE VOUCHER', {
    x: width - 235,
    y: y + 2,
    size: 10,
    font: fontBold,
    color: textDark,
  });

  y -= 14;
  page.drawText('Heavy Steel Fabrication, Shuttering Plates, Bridge Bearings & Scaffolding Works', {
    x: 40,
    y,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });

  page.drawText('ISO 9001:2015 & RDSO COMPLIANT', {
    x: width - 215,
    y,
    size: 8,
    font: fontBold,
    color: greenBadge,
  });

  y -= 12;
  page.drawText('Reg. Office: Didarganj, Patna, Bihar - 800009 | GSTIN: 10BIEPD2766D2ZX | Ph: +91 74939 16194', {
    x: 40,
    y,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });

  // Divider Line
  y -= 12;
  page.drawLine({
    start: { x: 40, y },
    end: { x: width - 40, y },
    thickness: 1,
    color: borderLight,
  });

  // Pay Slip Month Banner
  y -= 28;
  page.drawRectangle({
    x: 40,
    y: y - 5,
    width: width - 80,
    height: 26,
    color: bgLight,
    borderColor: borderLight,
    borderWidth: 1,
  });

  const monthStr = (data.month || 'NOVEMBER').toUpperCase();
  const yearStr = data.year || '2024';
  page.drawText(`PAY SLIP FOR THE PERIOD: ${monthStr} ${yearStr}`, {
    x: 55,
    y: y + 3,
    size: 9.5,
    font: fontBold,
    color: redPrimary,
  });

  page.drawText('STATUS: VERIFIED & DISBURSED (NEFT)', {
    x: width - 265,
    y: y + 3,
    size: 8.5,
    font: fontBold,
    color: greenBadge,
  });

  // Employee Information Box
  y -= 22;
  const infoBoxHeight = 85;
  page.drawRectangle({
    x: 40,
    y: y - infoBoxHeight,
    width: width - 80,
    height: infoBoxHeight,
    color: rgb(1, 1, 1),
    borderColor: borderLight,
    borderWidth: 1,
  });

  const col1X = 55;
  const col2X = 300;
  let infoY = y - 18;

  const empName = data.employeeName || 'Staff Member';
  const empId = data.employeeId || 'JMK-ENG-PAT-024';
  const designation = data.designation || 'QA/QC Site Inspection Engineer';
  const branchName = data.branchName || 'Patna HQ Works & Heavy Fabrication Plant';

  // Info Row 1
  page.drawText('Employee Name:', { x: col1X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText(empName, { x: col1X + 90, y: infoY, size: 8.5, font: fontBold, color: textDark });

  page.drawText('Employee ID:', { x: col2X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText(empId, { x: col2X + 85, y: infoY, size: 8.5, font: fontBold, color: textDark });

  // Info Row 2
  infoY -= 16;
  page.drawText('Designation:', { x: col1X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText(designation, { x: col1X + 90, y: infoY, size: 8.5, font: fontBold, color: textDark });

  page.drawText('Depot / Works:', { x: col2X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText(branchName.slice(0, 28), { x: col2X + 85, y: infoY, size: 8, font: fontBold, color: textDark });

  // Info Row 3
  infoY -= 16;
  const workingDays = data.workingDays ?? 26;
  const presentDays = data.presentDays ?? 25.5;
  page.drawText('Total Working Days:', { x: col1X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText(`${workingDays} Days`, { x: col1X + 90, y: infoY, size: 8.5, font: fontBold, color: textDark });

  page.drawText('Present (GPS Clocked):', { x: col2X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText(`${presentDays} Days`, { x: col2X + 115, y: infoY, size: 8.5, font: fontBold, color: greenBadge });

  // Info Row 4
  infoY -= 16;
  page.drawText('Bank Account / Mode:', { x: col1X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText('SBI A/c *******4192 (NEFT)', { x: col1X + 95, y: infoY, size: 8, font: fontRegular, color: textDark });

  page.drawText('PF UAN / ESIC Reg:', { x: col2X, y: infoY, size: 8, font: fontRegular, color: textMuted });
  page.drawText('UAN: 101894220194', { x: col2X + 85, y: infoY, size: 8, font: fontRegular, color: textDark });

  y -= (infoBoxHeight + 15);

  // Salary Breakdown Table Header
  const tableTopY = y;
  const colMidX = 300;

  // Header Box
  page.drawRectangle({
    x: 40,
    y: tableTopY - 22,
    width: width - 80,
    height: 22,
    color: bgLight,
    borderColor: borderLight,
    borderWidth: 1,
  });

  page.drawText('EARNINGS / ALLOWANCES', { x: 55, y: tableTopY - 15, size: 8.5, font: fontBold, color: textDark });
  page.drawText('AMOUNT (INR)', { x: 225, y: tableTopY - 15, size: 8.5, font: fontBold, color: textDark });

  page.drawText('DEDUCTIONS & RECOVERIES', { x: 315, y: tableTopY - 15, size: 8.5, font: fontBold, color: textDark });
  page.drawText('AMOUNT (INR)', { x: 480, y: tableTopY - 15, size: 8.5, font: fontBold, color: textDark });

  // Table Body Rows
  const basic = data.basicPay ?? 30000;
  const hra = data.hra ?? 7500;
  const siteAllow = data.siteAllowance ?? 5000;
  const splAllow = data.specialAllowance ?? 2500;
  const totalEarnings = basic + hra + siteAllow + splAllow;

  const pf = data.pfDeduction ?? 2160;
  const esic = data.esicDeduction ?? 340;
  const pt = data.professionalTax ?? 200;
  const tds = 500;
  const totalDeductions = pf + esic + pt + tds;
  const netSalary = data.netPay ?? (totalEarnings - totalDeductions);

  const earningsRows = [
    { label: 'Basic Salary', amount: `Rs. ${basic.toLocaleString('en-IN')}` },
    { label: 'House Rent Allowance (HRA)', amount: `Rs. ${hra.toLocaleString('en-IN')}` },
    { label: 'Site Conveyance & Fuel', amount: `Rs. ${siteAllow.toLocaleString('en-IN')}` },
    { label: 'Special Field Allowance', amount: `Rs. ${splAllow.toLocaleString('en-IN')}` },
  ];

  const deductionsRows = [
    { label: 'Provident Fund (Employee PF)', amount: `Rs. ${pf.toLocaleString('en-IN')}` },
    { label: 'Employee State Insurance (ESIC)', amount: `Rs. ${esic.toLocaleString('en-IN')}` },
    { label: 'Professional Tax (PT Bihar)', amount: `Rs. ${pt.toLocaleString('en-IN')}` },
    { label: 'TDS / Security Withholding', amount: `Rs. ${tds.toLocaleString('en-IN')}` },
  ];

  let rowY = tableTopY - 40;
  for (let i = 0; i < 4; i++) {
    // Earning Row
    page.drawText(earningsRows[i].label, { x: 55, y: rowY, size: 8, font: fontRegular, color: textDark });
    page.drawText(earningsRows[i].amount, { x: 225, y: rowY, size: 8, font: fontBold, color: textDark });

    // Deduction Row
    page.drawText(deductionsRows[i].label, { x: 315, y: rowY, size: 8, font: fontRegular, color: textDark });
    page.drawText(deductionsRows[i].amount, { x: 480, y: rowY, size: 8, font: fontBold, color: textDark });

    rowY -= 20;
  }

  // Totals Row
  page.drawLine({
    start: { x: 40, y: rowY + 6 },
    end: { x: width - 40, y: rowY + 6 },
    thickness: 1,
    color: borderLight,
  });

  page.drawText('GROSS EARNINGS:', { x: 55, y: rowY - 6, size: 8.5, font: fontBold, color: textDark });
  page.drawText(`Rs. ${totalEarnings.toLocaleString('en-IN')}`, { x: 220, y: rowY - 6, size: 9, font: fontBold, color: redPrimary });

  page.drawText('TOTAL DEDUCTIONS:', { x: 315, y: rowY - 6, size: 8.5, font: fontBold, color: textDark });
  page.drawText(`Rs. ${totalDeductions.toLocaleString('en-IN')}`, { x: 475, y: rowY - 6, size: 9, font: fontBold, color: textMuted });

  // Net Pay Callout Box
  y = rowY - 45;
  page.drawRectangle({
    x: 40,
    y: y - 10,
    width: width - 80,
    height: 38,
    color: rgb(0.98, 0.94, 0.94),
    borderColor: redPrimary,
    borderWidth: 1.5,
  });

  page.drawText('NET PAYABLE SALARY (DISBURSED TO BANK):', {
    x: 55,
    y: y + 12,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });

  page.drawText(`INR ${netSalary.toLocaleString('en-IN')}/-`, {
    x: width - 200,
    y: y + 9,
    size: 14,
    font: fontBold,
    color: redPrimary,
  });

  page.drawText('Amount in words: Rupees Forty-One Thousand Eight Hundred Only', {
    x: 55,
    y: y - 2,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });

  // Attendance & Quality Declaration
  y -= 40;
  page.drawText('STATUTORY NOTES & DECLARATION:', { x: 40, y, size: 8.5, font: fontBold, color: textDark });
  y -= 12;
  page.drawText('1. Shift attendance recorded via Geofenced Site GPS Logging & Muster Roll verification.', {
    x: 40,
    y,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 10;
  page.drawText('2. Provident Fund and ESIC statutory contributions deposited in designated government treasury portals.', {
    x: 40,
    y,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 10;
  page.drawText('3. This document is system-generated and verified by the Finance Department of JMK Engineering.', {
    x: 40,
    y,
    size: 7.5,
    font: fontRegular,
    color: textMuted,
  });

  // Signatures / Seal Area
  y -= 60;
  const signY = y;

  // Employee Acknowledgement
  page.drawLine({
    start: { x: 55, y: signY + 25 },
    end: { x: 220, y: signY + 25 },
    thickness: 1,
    color: borderLight,
  });
  page.drawText('Employee Signature / Digital ACK', { x: 60, y: signY + 12, size: 8, font: fontRegular, color: textMuted });
  page.drawText(`Date: 30-11-2024`, { x: 60, y: signY, size: 7.5, font: fontRegular, color: textMuted });

  // Company Digital Stamp
  page.drawRectangle({
    x: 360,
    y: signY - 8,
    width: 180,
    height: 48,
    color: bgLight,
    borderColor: greenBadge,
    borderWidth: 1,
  });
  page.drawText('[ DIGITALLY AUTHORIZED ]', { x: 380, y: signY + 24, size: 8, font: fontBold, color: greenBadge });
  page.drawText('JMK ENGINEERING & DEVELOPERS', { x: 372, y: signY + 12, size: 7, font: fontBold, color: textDark });
  page.drawText('Authorized Signatory - Accounts Div.', { x: 376, y: signY + 2, size: 6.5, font: fontRegular, color: textMuted });

  // Footer
  page.drawText('JMK Engineering & Developers Enterprise Portal • Document Ref: JMK-WS-2024-NOV-991', {
    x: 120,
    y: 20,
    size: 7,
    font: fontRegular,
    color: textMuted,
  });

  return await pdfDoc.save();
}

/**
 * Triggers browser download of generated wage slip PDF
 */
export async function downloadWageSlipPdf(data: WageSlipData, filename = 'JMK_Wage_Slip_November_2024.pdf') {
  const bytes = await generateWageSlipPdf(data);
  const blob = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
