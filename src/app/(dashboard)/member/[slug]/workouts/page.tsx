import { WorkoutLibrary } from "@/components/workout/member/WorkoutLibrary";
import { WorkoutsSkeleton } from "@/components/workout/member/WorkoutSkeleton";
import type { WorkoutFilter } from "@/lib/types/workout";
import { fetchWorkouts } from "@/lib/workout";
import { Suspense } from "react";

interface WorkoutsPageProps {
  searchParams: Promise<{
    filter?: WorkoutFilter;
    duration?: string;
    intensity?: string;
    goals?: string;
    equipment?: string;
  }>;
}

export default async function WorkoutsPage({
  searchParams,
}: WorkoutsPageProps) {
  const { filter, duration, intensity, goals, equipment } = await searchParams;

  // Fetch workouts with all search params
  const workouts = await fetchWorkouts(filter, {
    duration,
    intensity,
    goals,
    equipment,
  });
  return (
    <Suspense fallback={<WorkoutsSkeleton />}>
      <WorkoutLibrary
        initialWorkouts={workouts}
        searchParams={{ filter, duration, intensity, goals, equipment }}
      />
    </Suspense>
  );
}
