
import {  getSubscriptionPlans } from "@/lib/subscription";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const gymId = request.nextUrl.searchParams.get("gymId");
    const response = await getSubscriptionPlans({ gymId });
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in GET /api/cookies:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// POST: Login (Set Cookies)
export async function POST(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get("key");
    const value = request.nextUrl.searchParams.get("value");
    if (!key && !value) {
      return NextResponse.json(
        { error: "Cookie key and value  is required" },
        { status: 400 }
      );
    }
    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    return response;
  } catch (error) {
    console.error("Error in POST /api/cookies:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// DELETE: Logout (Clear Cookies)
export async function DELETE(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get("key");
    if (!key) {
      return NextResponse.json(
        { error: "Cookie key is required" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "cookie deleted succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
