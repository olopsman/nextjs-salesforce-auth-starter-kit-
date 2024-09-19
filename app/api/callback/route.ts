import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
    const body = await req.json();
  console.log({ body });

    //store this in the cookie
    return NextResponse.json({ message: 'Operation successful' }, { status: 200 });
}