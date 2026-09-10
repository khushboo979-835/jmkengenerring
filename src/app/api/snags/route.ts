import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const branchId = searchParams.get('branchId') || undefined;
    const snags = dataStore.getSnags(branchId);
    return NextResponse.json({ snags });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, location, branchId, branchName, category, priority, reportedBy, assignedTo, photoUrl } = body;

    if (!title || !description || !location || !branchId || !reportedBy) {
      return NextResponse.json({ error: 'Missing required snag fields' }, { status: 400 });
    }

    const newSnag = dataStore.addSnag({
      title,
      description,
      location,
      branchId,
      branchName: branchName || 'Site Location',
      category: category || 'CASTING_DEFECT',
      priority: priority || 'HIGH',
      status: 'OPEN',
      reportedBy,
      assignedTo,
      photoUrl,
    });

    return NextResponse.json({ success: true, snag: newSnag }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, resolutionNotes } = body;

    if (!id || !resolutionNotes) {
      return NextResponse.json({ error: 'Missing id or resolutionNotes' }, { status: 400 });
    }

    const resolved = dataStore.resolveSnag(id, resolutionNotes);
    return NextResponse.json({ success: true, snag: resolved });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
