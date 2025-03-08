import { getMembershipGrowth } from "@/lib/stats";
import { NextResponse } from "next/server";
export async function GET() {
    const data = await getMembershipGrowth()
    // console.log("data in api routes", data)
    return NextResponse.json(data)
}
