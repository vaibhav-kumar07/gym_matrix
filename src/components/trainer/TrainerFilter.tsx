"use client";

import ClearFilters from "../common/ClearFilter";
import { useURLParams } from "@/components/hooks/request";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trainerFilters } from "@/lib/trainer";
import { Clock, DollarSign, Flame, GraduationCap, X } from "lucide-react";
import { useState } from "react";

interface TrainersFilterProps {
  filters: {
    level: string;
    availability: string;
    price: string;
    popularity: string;
  };
}

export function TrainersFilter({ filters }: TrainersFilterProps) {
  const { appendSearchParams, removeQueryString } = useURLParams();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilter = (type: string, value: string) => {
    appendSearchParams(type, value);
    if (!activeFilters.includes(value)) {
      setActiveFilters([...activeFilters, value]);
    }
  };

  const removeFilter = (type: string) => {
    removeQueryString(type);
    setActiveFilters(
      activeFilters.filter((f) => f !== filters[type as keyof typeof filters])
    );
  };

  return (
    <div className="sticky top-4 z-20  rounded-md  py-4 mb-2">
      <div className="flex flex-wrap items-center gap-3">
        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Level Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <GraduationCap className="w-4 h-4" />
                Level
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {trainerFilters.levels.map((level) => (
                <DropdownMenuItem
                  key={level.id}
                  onClick={() => handleFilter("level", level.id)}
                  className="gap-2"
                >
                  {level.icon} {level.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Availability Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Clock className="w-4 h-4" />
                Time
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {trainerFilters.availability.map((time) => (
                <DropdownMenuItem
                  key={time.id}
                  onClick={() => handleFilter("availability", time.id)}
                  className="gap-2"
                >
                  {time.icon} {time.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Price Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <DollarSign className="w-4 h-4" />
                Price
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {trainerFilters.priceRange.map((price) => (
                <DropdownMenuItem
                  key={price.id}
                  onClick={() => handleFilter("price", price.id)}
                  className="gap-2"
                >
                  {price.icon} {price.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Popularity Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Flame className="w-4 h-4" />
                Popular
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {trainerFilters.popularity.map((pop) => (
                <DropdownMenuItem
                  key={pop.id}
                  onClick={() => handleFilter("popularity", pop.id)}
                  className="gap-2"
                >
                  {pop.icon} {pop.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Active Filters Display */}
        <div className="flex-1 flex flex-wrap items-center gap-2">
          {Object.entries(filters).map(([type, value]) => {
            if (!value) return null;
            const filterConfig = trainerFilters[
              type as keyof typeof trainerFilters
            ]?.find((f) => f.id === value);
            if (!filterConfig) return null;

            return (
              <Badge
                key={type}
                variant="secondary"
                className="px-3 py-1.5 gap-2 bg-primary/10 text-primary hover:bg-primary/20"
              >
                {filterConfig.icon} {filterConfig.name}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => removeFilter(type)}
                />
              </Badge>
            );
          })}
        </div>

        <ClearFilters title="Clear all" />
      </div>
    </div>
  );
}
