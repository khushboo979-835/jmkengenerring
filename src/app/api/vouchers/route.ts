import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const branchId = searchParams.get('branchId') || undefined;
    const vouchers = dataStore.getVouchers(branchId);
    return NextResponse.json({ vouchers });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { branchId, branchName, vendorName, category, amount, billDate, description, invoiceNo, proofImageUrl, createdBy } = body;

    if (!branchId || !vendorName || !category || !amount || !billDate || !description) {
      return NextResponse.json(
        { error: 'Missing required voucher fields' },
        { status: 400 }
      );
    }

    const numAmount = Number(amount);
    const requiresHqApproval = numAmount >= 50000;

    const newVoucher = dataStore.addVoucher({
      branchId,
      branchName: branchName || 'Branch Depot',
      vendorName,
      category,
      amount: numAmount,
      billDate,
      description,
      invoiceNo,
      proofImageUrl,
      status: requiresHqApproval ? 'PENDING_HQ' : 'APPROVED',
      requiresHqApproval,
      createdBy: createdBy || { id: 'usr_unknown', name: 'Branch Accountant' },
    });

    return NextResponse.json({ success: true, voucher: newVoucher }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, approvedBy } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const updated = dataStore.updateVoucherStatus(id, status, approvedBy);
    return NextResponse.json({ success: true, voucher: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
