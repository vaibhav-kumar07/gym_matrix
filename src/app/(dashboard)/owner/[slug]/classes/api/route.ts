import { generateRandomClassStats } from "@/lib/stats";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await generateRandomClassStats();
  // console.log("data in api routes", data)
  return NextResponse.json(data);
}
