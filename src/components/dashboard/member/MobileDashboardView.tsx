import MemberStats from "./MemberStats";
import MembershipStatus from "./MemberStatus";
import UpcomingSessions from "./UpcomingSessions";
import MemberNavbar from "@/components/navbar/member/MemberNavbar";
import { getMemberDashboard } from "@/lib/member";
import React from "react";

export default async function MobileDashboardView() {
  const data = await getMemberDashboard();
  return (
    <div className="h-full pb-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <MemberNavbar member={data.member} />
      <div className=" px-4 pt-3 relative">
        <MemberStats stats={data.stats} />
        <MembershipStatus stats={data.stats} />
        <UpcomingSessions sessions={data.upcomingSessions} />
      </div>
    </div>
  );
}
