import { WorkoutLibrary } from "@/components/workout/member/WorkoutLibrary";
import { WorkoutsSkeleton } from "@/components/workout/member/WorkoutSkeleton";
import type { WorkoutFilter } from "@/lib/types/workout";
import { fetchWorkouts } from "@/lib/workout";
import { Suspense } from "react";

interface WorkoutsPageProps {
  searchParams: {
    filter?: WorkoutFilter;
    duration?: string;
    intensity?: string;
    level?: string;
  };
}

export default async function WorkoutsPage({
  searchParams,
}: WorkoutsPageProps) {
  const filter = (searchParams.filter as WorkoutFilter) || "recommended";

  // Fetch workouts with all search params
  const workouts = await fetchWorkouts(filter, searchParams);
  return (
    <Suspense fallback={<WorkoutsSkeleton />}>
      <WorkoutLibrary initialWorkouts={workouts} searchParams={searchParams} />
    </Suspense>
  );
}
