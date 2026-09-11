import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Product } from '@/models/Product';
import { Branch } from '@/models/Branch';
import { User } from '@/models/User';
import { RFQprovider } from '@/models/RFQ';
import { DPR } from '@/models/DPR';
import { FinancialVoucher } from '@/models/FinancialVoucher';
import { MaterialIndent } from '@/models/MaterialIndent';
import { Attendance } from '@/models/Attendance';
import { Task } from '@/models/Task';
import { Snag } from '@/models/Snag';
import { SEED_PRODUCTS, SEED_BRANCHES } from '@/lib/seedData';
import { dataStore } from '@/lib/dataStore';

export async function GET() {
  return handleSeed();
}

export async function POST() {
  return handleSeed();
}

async function handleSeed() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({
        success: true,
        message: 'Running in built-in memory/dataStore mode. To seed MongoDB directly into Atlas, ensure MONGODB_URI is configured with valid user credentials in .env.local or Vercel.',
        mode: 'dataStore',
        stats: {
          products: SEED_PRODUCTS.length,
          branches: SEED_BRANCHES.length,
          rfqs: dataStore.getRFQs().length,
          users: dataStore.getUsers().length,
          vouchers: dataStore.getVouchers().length,
          indents: dataStore.getIndents().length,
        }
      });
    }

    // 1. Seed Products
    let productsCount = 0;
    for (const p of SEED_PRODUCTS) {
      await Product.findOneAndUpdate(
        { slug: p.slug },
        {
          name: p.name,
          slug: p.slug,
          category: p.category,
          categoryLabel: p.categoryLabel,
          shortDescription: p.shortDescription,
          fullDescription: p.fullDescription,
          weightVariants: p.weightVariants,
          dimensions: p.dimensions,
          materialGrade: p.materialGrade,
          finishType: p.finishType,
          applications: p.applications,
          specs: p.specs,
          variants: p.variants,
          imageUrls: p.imageUrls,
          featuredImage: p.featuredImage,
          complianceStandards: p.complianceStandards,
          isFeatured: p.isFeatured,
          minOrderQuantity: p.minOrderQuantity,
        },
        { upsert: true, new: true }
      );
      productsCount++;
    }

    // 2. Seed Branches
    let branchCount = 0;
    for (const b of SEED_BRANCHES) {
      await Branch.findOneAndUpdate(
        { code: b.code },
        {
          name: b.name,
          city: b.city,
          code: b.code,
          address: b.address,
          locationCoords: b.locationCoords,
          allocatedBudget: b.allocatedBudget,
          currentSpend: b.currentSpend,
          status: b.status,
          activeWorkersCount: b.activeWorkersCount,
          contactNumber: b.contactNumber,
        },
        { upsert: true, new: true }
      );
      branchCount++;
    }

    // 3. Seed Users
    let usersCount = 0;
    for (const u of dataStore.getUsers()) {
      await User.findOneAndUpdate(
        { email: u.email },
        {
          name: u.name,
          email: u.email,
          passwordHash: u.password,
          role: u.role,
          branchId: u.branchId,
          phone: u.phone,
          designation: u.designation,
        },
        { upsert: true, new: true }
      );
      usersCount++;
    }

    // 4. Seed RFQs
    let rfqsCount = 0;
    for (const r of dataStore.getRFQs()) {
      await RFQprovider.findOneAndUpdate(
        { email: r.email, customerName: r.customerName },
        {
          customerName: r.customerName,
          companyName: r.companyName,
          email: r.email,
          phone: r.phone,
          city: r.city,
          state: r.state,
          selectedProducts: r.selectedProducts.map((sp: any) => typeof sp === 'string' ? sp : sp.name),
          projectDetails: r.projectDetails,
          status: 'NEW',
        },
        { upsert: true, new: true }
      );
      rfqsCount++;
    }

    // 5. Seed DPRs
    let dprsCount = 0;
    for (const d of dataStore.getDPRs()) {
      await DPR.findOneAndUpdate(
        { dprNo: d.dprNo },
        {
          dprNo: d.dprNo,
          branchId: d.branchId,
          branchName: d.branchName,
          date: d.date,
          weather: d.weather,
          labourCount: d.labourCount,
          workAccomplished: d.workAccomplished,
          materialReceived: d.materialReceived,
          machineryDeployed: d.machineryDeployed,
          roadblocks: d.roadblocks,
          safetyObservations: d.safetyObservations,
          submittedBy: d.submittedBy,
        },
        { upsert: true, new: true }
      );
      dprsCount++;
    }

    // 6. Seed Financial Vouchers
    let vouchersCount = 0;
    for (const v of dataStore.getVouchers()) {
      await FinancialVoucher.findOneAndUpdate(
        { voucherNo: v.voucherNo },
        {
          voucherNo: v.voucherNo,
          branchId: v.branchId,
          branchName: v.branchName,
          vendorName: v.vendorName,
          category: v.category,
          amount: v.amount,
          billDate: v.billDate,
          description: v.description,
          status: v.status,
          requiresHqApproval: v.requiresHqApproval,
          createdBy: v.createdBy,
        },
        { upsert: true, new: true }
      );
      vouchersCount++;
    }

    // 7. Seed Material Indents
    let indentsCount = 0;
    for (const ind of dataStore.getIndents()) {
      await MaterialIndent.findOneAndUpdate(
        { indentNo: ind.indentNo },
        {
          indentNo: ind.indentNo,
          branchId: ind.branchId,
          branchName: ind.branchName,
          requestedBy: ind.requestedBy,
          items: ind.items,
          purpose: ind.purpose,
          requiredByDate: ind.requiredByDate,
          status: ind.status,
        },
        { upsert: true, new: true }
      );
      indentsCount++;
    }

    // 8. Seed Attendance
    let attendanceCount = 0;
    for (const att of dataStore.getAttendance()) {
      await Attendance.findOneAndUpdate(
        { workerId: att.workerId, date: att.date },
        {
          workerName: att.workerName,
          workerId: att.workerId,
          trade: att.trade,
          wageType: att.wageType,
          dailyRate: att.dailyRate,
          branchId: att.branchId,
          branchName: att.branchName,
          date: att.date,
          status: att.status,
          checkInTime: att.checkInTime,
          markedBy: att.markedBy,
        },
        { upsert: true, new: true }
      );
      attendanceCount++;
    }

    // 9. Seed Tasks
    let tasksCount = 0;
    for (const t of dataStore.getTasks()) {
      await Task.findOneAndUpdate(
        { title: t.title, branchId: t.branchId },
        {
          title: t.title,
          description: t.description,
          branchId: t.branchId,
          branchName: t.branchName,
          assignedTo: (t as any).assignedToName || (t as any).assignedTo || 'Fabrication Incharge',
          deadline: (t as any).dueDate || (t as any).deadline || '2026-10-30',
          priority: t.priority,
          status: t.status,
        },
        { upsert: true, new: true }
      );
      tasksCount++;
    }

    // 10. Seed Snags
    let snagsCount = 0;
    for (const s of dataStore.getSnags()) {
      await Snag.findOneAndUpdate(
        { snagNo: (s as any).snagNumber || (s as any).snagNo },
        {
          snagNo: (s as any).snagNumber || (s as any).snagNo,
          branchId: s.branchId,
          branchName: s.branchName,
          location: s.location,
          severity: (s as any).priority || (s as any).severity || 'MEDIUM',
          description: s.description,
          status: s.status,
          reportedBy: typeof s.reportedBy === 'string' ? { id: 'usr_staff', name: s.reportedBy } : s.reportedBy,
        },
        { upsert: true, new: true }
      );
      snagsCount++;
    }

    return NextResponse.json({
      success: true,
      message: 'MongoDB database collections seeded successfully into Atlas!',
      stats: {
        products: productsCount,
        branches: branchCount,
        users: usersCount,
        rfqs: rfqsCount,
        dprs: dprsCount,
        vouchers: vouchersCount,
        indents: indentsCount,
        attendance: attendanceCount,
        tasks: tasksCount,
        snags: snagsCount,
      }
    });

  } catch (error: any) {
    console.error('Database seeding error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}