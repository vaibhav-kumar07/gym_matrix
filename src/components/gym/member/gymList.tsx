import MemberGymCard from "./GymCard";
import { getAllGyms } from "@/lib/gym";
import { IGym } from "@/types/gym";
import React from "react";

export default async function GymList() {
  const result = await getAllGyms();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {result.data.map((gym: IGym, index) => (
        <MemberGymCard key={index} gym={gym} />
      ))}
    </div>
  );
}
