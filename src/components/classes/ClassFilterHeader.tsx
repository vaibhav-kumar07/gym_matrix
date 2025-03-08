"use client";

import { useURLParams } from "@/components/hooks/request";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

interface MemberFilterHeaderProps {
  selectedStatus: string;
}

const FILTER_OPTIONS = [
  { label: "All Classes", value: "all" },
  { label: "HIIT", value: "HIIT" },
  { label: "Yoga", value: "yoga" },
  { label: "cardio", value: "cardio" },
  { label: "Endurance", value: "endurance" },
];

export default function ClassFilterHeader({
  selectedStatus,
}: MemberFilterHeaderProps) {
  const { appendSearchParams } = useURLParams();

  function handleClick(name: string) {
    appendSearchParams("filter", name);
  }
  return (
    <div className="flex justify-between items-center py-1 px-2">
      {/* Status Filter Buttons */}
      <div className="flex ">
        {FILTER_OPTIONS.map(({ label, value }) => (
          <Button
            key={value}
            variant={selectedStatus === value ? "default" : "outline"}
            className="rounded-sm border-none h-6 px-3 py-1 text-xs "
            onClick={() => handleClick(value)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="rounded-sm border-none h-6 px-3 py-1 text-xs "
        >
          <Download /> Export
        </Button>
        <Button
          variant="outline"
          className="rounded-sm border-none h-6 px-3 py-1 text-xs "
        >
          <Filter /> Filter
        </Button>
      </div>
    </div>
  );
}
