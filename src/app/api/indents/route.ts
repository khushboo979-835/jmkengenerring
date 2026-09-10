import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const branchId = searchParams.get('branchId') || undefined;
    const indents = dataStore.getIndents(branchId);
    return NextResponse.json({ indents });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { branchId, branchName, requestedBy, items, purpose, requiredByDate, notes } = body;

    if (!branchId || !items || !items.length || !purpose || !requiredByDate) {
      return NextResponse.json(
        { error: 'Missing required indent fields' },
        { status: 400 }
      );
    }

    const newIndent = dataStore.addIndent({
      branchId,
      branchName: branchName || 'Branch Depot',
      requestedBy: requestedBy || { id: 'usr_unknown', name: 'Site Incharge', email: 'site@jmkengineering.com' },
      items,
      purpose,
      requiredByDate,
      status: 'PENDING_APPROVAL',
      notes,
    });

    return NextResponse.json({ success: true, indent: newIndent }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, approvedBy, dispatchDetails } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const updated = dataStore.updateIndentStatus(id, status, approvedBy, dispatchDetails);
    return NextResponse.json({ success: true, indent: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
