"use client";

import { useURLParams } from "@/components/hooks/request";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { WorkoutFilter } from "@/types/workout";

interface WorkoutFiltersProps {
  currentFilter: WorkoutFilter;
}

export function WorkoutFilters({ currentFilter }: WorkoutFiltersProps) {
  const { appendSearchParams } = useURLParams();

  return (
    <div className="">
      <Tabs
        value={currentFilter}
        onValueChange={(value) => appendSearchParams("filter", value)}
        className="w-full"
      >
        <TabsList className="w-full max-w-2xl mx-auto bg-gray-100/50 p-1">
          <TabsTrigger value="recommended" className="flex-1 rounded-md">
            Recommended
          </TabsTrigger>
          <TabsTrigger value="strength" className="flex-1 rounded-md">
            Strength
          </TabsTrigger>
          <TabsTrigger value="cardio" className="flex-1 rounded-md">
            Cardio
          </TabsTrigger>
          <TabsTrigger value="flexibility" className="flex-1 rounded-md">
            Flexibility
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
