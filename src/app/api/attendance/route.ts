import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';
import { calculateDistanceMeters } from '@/lib/utils';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const branchId = searchParams.get('branchId') || undefined;
    const date = searchParams.get('date') || undefined;

    const attendance = dataStore.getAttendance(branchId, date);
    const workers = dataStore.getWorkers(branchId);

    return NextResponse.json({ attendance, workers });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      workerId,
      workerName,
      trade,
      wageType,
      dailyRate,
      branchId,
      branchName,
      date,
      status,
      checkInTime,
      gpsCoords,
      markedBy,
    } = body;

    if (!workerId || !branchId || !date || !status) {
      return NextResponse.json(
        { error: 'Missing required attendance fields' },
        { status: 400 }
      );
    }

    // Geofence check if GPS coordinates are passed
    let verifiedGpsCoords = undefined;
    if (gpsCoords && gpsCoords.lat && gpsCoords.lng) {
      const branch = dataStore.getBranchById(branchId);
      if (branch) {
        const dist = calculateDistanceMeters(
          gpsCoords.lat,
          gpsCoords.lng,
          branch.locationCoords.lat,
          branch.locationCoords.lng
        );
        verifiedGpsCoords = {
          lat: gpsCoords.lat,
          lng: gpsCoords.lng,
          distanceMeters: dist,
          isWithinGeofence: dist <= branch.locationCoords.radiusMeters,
        };
      }
    }

    const record = dataStore.markAttendance({
      workerId,
      workerName,
      trade: trade || 'Worker',
      wageType: wageType || 'DAILY',
      dailyRate: Number(dailyRate || 650),
      branchId,
      branchName: branchName || 'Site Depot',
      date,
      status,
      checkInTime: checkInTime || new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      verifiedGpsCoords,
      markedBy: markedBy || 'Supervisor',
    });

    return NextResponse.json({ success: true, attendance: record });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
