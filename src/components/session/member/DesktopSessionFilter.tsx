"use client";

import { useURLParams } from "@/components/hooks/request";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SessionFilter } from "@/types/session";

interface SessionFiltersProps {
  activeFilter: SessionFilter;
}

export function SessionFilters({ activeFilter }: SessionFiltersProps) {
  const { appendSearchParams } = useURLParams();
  function handleFilterChange(value: string) {
    const filter = value as SessionFilter;
    appendSearchParams("sessiontype", filter);
  }
  return (
    <div className="mb-4">
      <Tabs
        value={activeFilter}
        onValueChange={(value: string) => handleFilterChange(value)}
        className="w-full"
      >
        <TabsList className="w-full max-w-2xl mx-auto bg-gray-100/50 p-1">
          <TabsTrigger value="all" className="flex-1">
            All Sessions
          </TabsTrigger>
          <TabsTrigger value="yoga" className="flex-1">
            Yoga
          </TabsTrigger>
          <TabsTrigger value="hiit" className="flex-1">
            HIIT
          </TabsTrigger>
          <TabsTrigger value="pilates" className="flex-1">
            Pilates
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
