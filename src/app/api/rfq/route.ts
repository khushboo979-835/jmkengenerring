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
    const customerName = body.customerName || body.name || 'Valued Client';
    const companyName = body.companyName || 'Not Specified';
    const email = body.email || 'inquiry@jmkengineering.in';
    const phone = body.phone || body.phoneNumber || '';
    const city = body.city || body.location || body.destinationCity || 'Patna HQ Queue';
    const state = body.state || 'Bihar';
    const projectDetails = body.projectDetails || body.message || (body.product ? `Requirement: ${body.product}` : 'Standard RFQ Inquiry');
    const selectedProducts = body.selectedProducts || (body.product ? [{ name: body.product, category: 'Product Inquiry', quantity: body.quantity || 'Standard Lot' }] : []);

    if (!phone && !customerName) {
      return NextResponse.json(
        { error: 'Contact phone number or customer name is required.' },
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
          companyName,
          email,
          phone: phone || '07942556842',
          city,
          state,
          selectedProducts,
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
      companyName,
      email,
      phone: phone || '07942556842',
      city,
      state,
      selectedProducts,
      projectDetails,
    });

    return NextResponse.json({ success: true, rfq: savedRFQ || localRFQ }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
