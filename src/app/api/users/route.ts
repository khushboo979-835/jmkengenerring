import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';
import { connectToDatabase } from '@/lib/mongodb';
import { User } from '@/models/User';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role') || undefined;
    const branchId = searchParams.get('branchId') || undefined;

    const users = dataStore.getUsers(role, branchId);
    return NextResponse.json({ users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, role, branchId, branchName, designation, phone } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: 'Name, email, password, and role are required.' },
        { status: 400 }
      );
    }

    // Try MongoDB sync if available
    const conn = await connectToDatabase();
    if (conn) {
      try {
        const existingMongo = await User.findOne({ email: email.toLowerCase() });
        if (!existingMongo) {
          await User.create({
            name,
            email: email.toLowerCase(),
            passwordHash: password,
            role,
            branchId,
            designation: designation || (role === 'BRANCH_ADMIN' ? 'Depot Superintendent' : 'QA/QC Engineer'),
            phone: phone || '+91 74939 16194',
          });
        }
      } catch (dbErr) {
        console.warn('MongoDB user create fallback:', dbErr);
      }
    }

    const newUser = dataStore.addUser({
      name,
      email: email.toLowerCase(),
      password,
      role,
      branchId: branchId || 'br_patna_hq',
      branchName: branchName || 'Patna HQ & Heavy Fabrication Plant',
      designation: designation || (role === 'BRANCH_ADMIN' ? 'Fabrication Plant Supervisor' : 'Senior QA/QC Site Engineer'),
      phone: phone || '+91 74939 16194',
    });

    return NextResponse.json({ success: true, user: newUser }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, email, password, role, branchId, branchName, designation, phone } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    const updates: any = {};
    if (name) updates.name = name;
    if (email) updates.email = email.toLowerCase();
    if (password) updates.password = password;
    if (role) updates.role = role;
    if (branchId) updates.branchId = branchId;
    if (branchName) updates.branchName = branchName;
    if (designation) updates.designation = designation;
    if (phone) updates.phone = phone;

    const conn = await connectToDatabase();
    if (conn) {
      try {
        await User.findByIdAndUpdate(id, { $set: updates });
      } catch (dbErr) {
        console.warn('MongoDB user update fallback:', dbErr);
      }
    }

    const updated = dataStore.updateUser(id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, user: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export const PUT = PATCH;

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    // Protect master super admin from deletion
    if (id === 'usr_hq_super_admin') {
      return NextResponse.json(
        { error: 'Master HQ Super Admin account cannot be deleted.' },
        { status: 403 }
      );
    }

    const conn = await connectToDatabase();
    if (conn) {
      try {
        await User.findByIdAndDelete(id);
      } catch (dbErr) {
        console.warn('MongoDB user delete fallback:', dbErr);
      }
    }

    const success = dataStore.deleteUser(id);
    return NextResponse.json({ success });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
