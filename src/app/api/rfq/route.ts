import { NextRequest, NextResponse } from 'next/server';
import { dataStore } from '@/lib/dataStore';

export async function GET() {
  try {
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

    const newRFQ = dataStore.addRFQ({
      customerName,
      companyName: companyName || 'Not Specified',
      email,
      phone,
      city: city || 'Patna HQ Queue',
      state: state || 'Bihar',
      selectedProducts: selectedProducts || [],
      projectDetails,
    });

    return NextResponse.json({ success: true, rfq: newRFQ }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
