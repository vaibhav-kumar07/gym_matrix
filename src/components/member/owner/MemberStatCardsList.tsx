"use client";

import MemberStatCard from "./MemberStatCard";
import SkeletonCard from "@/components/common/SkeletonCard";
import { useQuery } from "@tanstack/react-query";

const fetchMemberStats = async () => {
  const res = await fetch("http://localhost:3000/owner/bulls/members/api");
  if (!res.ok) throw new Error("Failed to fetch member stats");
  return res.json();
};

export default function MemberStatCardList() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["memberStats"],
    queryFn: fetchMemberStats,
    refetchInterval: 10000,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {isLoading
        ? Array(4)
            .fill(null)
            .map((_, i) => <SkeletonCard key={i} />)
        : stats?.map((stat) => (
            <MemberStatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
    </div>
  );
}
