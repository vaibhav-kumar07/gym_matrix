"use client";

import { MemberDesktopActivityChart } from "./DesktopActivityChart";
import { MemberDesktopStatsCard } from "./DesktopStatsCard";
import { MemberDesktopUpcomingClasses } from "./DesktopUpcomingClasses";
import { Button } from "@/components/ui/button";
import { fetchMemberDashboardDesktopData } from "@/lib/dashboard";
import type { MemberDashboardDesktopData } from "@/lib/dashboard";
import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function MemberDashboardDesktop() {
  const [data, setData] = useState<MemberDashboardDesktopData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const dashboardData = await fetchMemberDashboardDesktopData();
        setData(dashboardData);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading || !data) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4" />
          New Workout
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {data.stats.map((stat, index) => (
          <MemberDesktopStatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Upcoming Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MemberDesktopActivityChart data={data.activityData} />
        <MemberDesktopUpcomingClasses classes={data.upcomingClasses} />
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="animate-pulse space-y-6">
        {/* Add skeleton UI here */}
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 h-80 bg-gray-200 rounded" />
          <div className="h-80 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
