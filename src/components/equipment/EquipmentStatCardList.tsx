"use client";

import EquipmentStatCard from "./EquipmentStatCard";
import { useEffect, useState } from "react";

export default function EquipmentStatCardList() {
  const [stats, setStats] = useState<{ title: string; value: string }[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/owner/bulls/equipment/api"
        );
        const rawData = await response.json();
        setStats(rawData); // Correctly setting state
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Fetch every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <EquipmentStatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}
