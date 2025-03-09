"use client";

import SkeletonCard from "../common/SkeletonCard";
import ClassStatCard from "./ClassStatCard";
import { useQuery } from "@tanstack/react-query";

const fetchStats = async () => {
  const res = await fetch("http://localhost:3000/owner/bulls/classes/api");
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};

export default function ClassStatCardList() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
    refetchInterval: 10000,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {isLoading
        ? Array(4)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)
        : stats?.map((stat) => (
            <ClassStatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
    </div>
  );
}
