import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';
import { signToken } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import { User } from '@/models/User';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    let user = dataStore.getUserByEmail(email);

    if (!user) {
      // Try MongoDB
      const conn = await connectToDatabase();
      if (conn) {
        try {
          const mongoUser = await User.findOne({ email: email.toLowerCase() });
          if (mongoUser && (mongoUser.passwordHash === password || (mongoUser as any).password === password)) {
            user = dataStore.addUser({
              name: mongoUser.name,
              email: mongoUser.email,
              password: password,
              role: mongoUser.role,
              branchId: (mongoUser.branchId as string) || 'br_patna_hq',
              branchName: 'Patna HQ Works',
              designation: mongoUser.designation || 'Staff',
              phone: mongoUser.phone || '+91 74939 16194',
            });
          }
        } catch (dbErr) {
          console.warn('MongoDB login check fallback:', dbErr);
        }
      }
    }

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const authUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      branchId: user.branchId,
      branchName: user.branchName,
    };

    const token = signToken(authUser);

    const response = NextResponse.json({
      success: true,
      user: {
        ...authUser,
        designation: user.designation,
        phone: user.phone,
      },
      token,
    });

    response.cookies.set('jmk_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
