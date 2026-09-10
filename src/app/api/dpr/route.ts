import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const branchId = searchParams.get('branchId') || undefined;
    const dprs = dataStore.getDPRs(branchId);
    return NextResponse.json({ dprs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { branchId, branchName, date, weather, labourCount, workAccomplished, materialReceived, machineryDeployed, roadblocks, safetyObservations, submittedBy } = body;

    if (!branchId || !date || !workAccomplished || !submittedBy) {
      return NextResponse.json({ error: 'Missing required DPR fields' }, { status: 400 });
    }

    const newDPR = dataStore.addDPR({
      branchId,
      branchName: branchName || 'Site Location',
      date,
      weather: weather || 'Clear / Sunny',
      labourCount: labourCount || { skilled: 0, unskilled: 0, supervisors: 0, total: 0 },
      workAccomplished,
      materialReceived,
      machineryDeployed,
      roadblocks,
      safetyObservations,
      submittedBy,
    });

    return NextResponse.json({ success: true, dpr: newDPR }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
