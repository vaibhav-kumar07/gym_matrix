import { Workout, WorkoutFilter } from "@/lib/types/workout";

export const mockWorkouts: Workout[] = [
  {
    id: "1",
    title: "Full Body Power",
    type: "Strength",
    duration: 45,
    intensity: "High",
    calories: 450,
    equipment: ["Dumbbells", "Kettlebell", "Resistance Bands"],
    trainer: {
      id: "t1",
      name: "Marcus Chen",
      image:
        "https://public.readdy.ai/ai/img_res/35d11c8856bf4739ecd73f4ec9add00a.jpg",
      rating: 4.8,
      reviews: 128,
    },
    description:
      "A comprehensive full-body workout combining compound movements and isolation exercises for maximum strength gains.",
    coverImage:
      "https://public.readdy.ai/ai/img_res/f850e4d311816458066dd997a7e38ee4.jpg",
    level: "Advanced",
  },
  {
    id: "2",
    title: "Cardio Blast",
    type: "Cardio",
    duration: 30,
    intensity: "High",
    calories: 350,
    equipment: ["Jump Rope", "Timer"],
    trainer: {
      id: "t2",
      name: "Sarah Williams",
      image:
        "https://public.readdy.ai/ai/img_res/c68ee9a33f43c6e1fd3e8a857e136b44.jpg",
      rating: 4.7,
      reviews: 95,
    },
    description:
      "High-intensity cardio intervals designed to boost endurance and torch calories.",
    coverImage:
      "https://public.readdy.ai/ai/img_res/a000fe475bbdd2188b123c8fc17747ae.jpg",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "Core & Mobility",
    type: "Flexibility",
    duration: 40,
    intensity: "Medium",
    calories: 250,
    equipment: ["Yoga Mat", "Foam Roller"],
    trainer: {
      id: "t3",
      name: "Emma Rodriguez",
      image:
        "https://public.readdy.ai/ai/img_res/361e72e96efa599993d0247d78b5c58e.jpg",
      rating: 4.9,
      reviews: 156,
    },
    description:
      "Focus on core strength and mobility through dynamic stretching and controlled movements.",
    coverImage:
      "https://public.readdy.ai/ai/img_res/4d4184d1afb37201c0341f9e995e553f.jpg",
    level: "Beginner",
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchWorkouts(
  filter: WorkoutFilter = "recommended",
  searchParams?: { [key: string]: string }
): Promise<Workout[]> {
  // Simulate network delay
  await delay(1000);

  let filteredWorkouts = [...mockWorkouts];

  // Apply filters
  if (filter !== "recommended") {
    filteredWorkouts = mockWorkouts.filter(
      (workout) => workout.type.toLowerCase() === filter.toLowerCase()
    );
  }

  // Apply additional filters from searchParams if needed
  if (searchParams) {
    if (searchParams.intensity) {
      filteredWorkouts = filteredWorkouts.filter(
        (workout) =>
          workout.intensity.toLowerCase() ===
          searchParams.intensity?.toLowerCase()
      );
    }

    if (searchParams.duration) {
      const duration = parseInt(searchParams.duration);
      filteredWorkouts = filteredWorkouts.filter(
        (workout) => workout.duration <= duration
      );
    }

    if (searchParams.level) {
      filteredWorkouts = filteredWorkouts.filter(
        (workout) =>
          workout.level.toLowerCase() === searchParams.level?.toLowerCase()
      );
    }
  }

  return filteredWorkouts;
}
