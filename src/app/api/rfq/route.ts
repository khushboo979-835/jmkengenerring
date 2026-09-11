import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';
import { connectToDatabase } from '@/lib/mongodb';
import { RFQprovider } from '@/models/RFQ';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      try {
        const mongoRfqs = await RFQprovider.find({}).sort({ createdAt: -1 });
        if (mongoRfqs && mongoRfqs.length > 0) {
          return NextResponse.json({ rfqs: mongoRfqs });
        }
      } catch (dbErr) {
        console.warn('MongoDB query fallback to local store:', dbErr);
      }
    }
    const rfqs = dataStore.getRFQs();
    return NextResponse.json({ rfqs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, companyName, email, phone, city, state, selectedProducts, projectDetails } = body;

    if (!customerName || !email || !phone || !projectDetails) {
      return NextResponse.json(
        { error: 'Name, email, phone, and project details are required.' },
        { status: 400 }
      );
    }

    let savedRFQ: any = null;

    // Save to MongoDB if available
    const conn = await connectToDatabase();
    if (conn) {
      try {
        savedRFQ = await RFQprovider.create({
          customerName,
          companyName: companyName || 'Not Specified',
          email,
          phone,
          city: city || 'Patna HQ Queue',
          state: state || 'Bihar',
          selectedProducts: selectedProducts || [],
          projectDetails,
          status: 'NEW',
        });
      } catch (dbErr) {
        console.warn('MongoDB RFQ create failed, using local store:', dbErr);
      }
    }

    // Also store in dataStore memory/cache
    const localRFQ = dataStore.addRFQ({
      customerName,
      companyName: companyName || 'Not Specified',
      email,
      phone,
      city: city || 'Patna HQ Queue',
      state: state || 'Bihar',
      selectedProducts: selectedProducts || [],
      projectDetails,
    });

    return NextResponse.json({ success: true, rfq: savedRFQ || localRFQ }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
