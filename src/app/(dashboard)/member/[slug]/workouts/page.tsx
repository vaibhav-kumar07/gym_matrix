import { WorkoutLibrary } from "@/components/workout/member/WorkoutLibrary";
import { WorkoutsSkeleton } from "@/components/workout/member/WorkoutSkeleton";
import { fetchWorkouts } from "@/lib/workout";
import type { WorkoutFilter } from "@/types/workout";
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

export default async function WorkoutsPage(props: WorkoutsPageProps) {
  const searchParams = await props.searchParams;
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
