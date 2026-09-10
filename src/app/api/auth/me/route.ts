import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { dataStore } from '@/lib/dataStore';

export async function GET(req: NextRequest) {
  const token =
    req.cookies.get('jmk_auth_token')?.value ||
    req.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const userRecord = dataStore.getUserById(decoded.id);

  return NextResponse.json({
    user: {
      ...decoded,
      designation: userRecord?.designation,
      phone: userRecord?.phone,
    },
  });
}
