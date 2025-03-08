import { generateRandomMemberStats } from "@/lib/stats";
import { NextResponse } from "next/server";
export async function GET() {
    const data = await generateRandomMemberStats()
    // console.log("data in api routes", data)
    return NextResponse.json(data)
}
