import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.redirect(new URL('/', 'https://www.jmkengineering.in'), 301);
}

export async function HEAD(req: NextRequest) {
  return NextResponse.redirect(new URL('/', 'https://www.jmkengineering.in'), 301);
}

export async function POST(req: NextRequest) {
  return NextResponse.redirect(new URL('/', 'https://www.jmkengineering.in'), 301);
}
