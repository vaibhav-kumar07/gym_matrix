import { WorkoutCard } from "./WorkoutCard";
import { WorkoutFilters } from "./WorkoutFilters";
import PageHeader from "@/components/common/PageHeader";
import PageHeaderWithButton from "@/components/common/PageHeaderWithButton";
import { Button } from "@/components/ui/button";
import type { Workout, WorkoutFilter } from "@/lib/types/workout";
import { Settings } from "lucide-react";

interface WorkoutLibraryProps {
  initialWorkouts: Workout[];
  searchParams: {
    filter?: WorkoutFilter;
    duration?: string;
    intensity?: string;
    goals?: string;
    equipment?: string;
  };
}

export function WorkoutLibrary({
  initialWorkouts,
  searchParams,
}: WorkoutLibraryProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
      <PageHeaderWithButton
        title="Workout Library"
        description="Personalized workouts tailored to your fitness journey"
      />
      <WorkoutFilters currentFilter={searchParams.filter || "recommended"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {initialWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
