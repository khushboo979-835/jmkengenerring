import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET() {
  try {
    const branches = dataStore.getBranches();
    return NextResponse.json({ branches });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, city, code, address, locationCoords, allocatedBudget, contactNumber, adminName } = body;

    if (!name || !city || !code || !address || !locationCoords) {
      return NextResponse.json(
        { error: 'Missing required branch fields' },
        { status: 400 }
      );
    }

    const newBranch = dataStore.addBranch({
      name,
      city,
      code: code.toUpperCase(),
      address,
      locationCoords: {
        lat: Number(locationCoords.lat),
        lng: Number(locationCoords.lng),
        radiusMeters: Number(locationCoords.radiusMeters || 500),
      },
      allocatedBudget: Number(allocatedBudget || 0),
      currentSpend: 0,
      status: 'ACTIVE',
      activeWorkersCount: 0,
      contactNumber: contactNumber || '+91 94310 00000',
      adminName: adminName || 'Unassigned',
    });

    return NextResponse.json({ success: true, branch: newBranch }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
