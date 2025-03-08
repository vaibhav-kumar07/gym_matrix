export interface Trainer {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface Workout {
  id: string;
  title: string;
  type: "Strength" | "Cardio" | "Flexibility";
  duration: number;
  intensity: "Low" | "Medium" | "High";
  calories: number;
  equipment: string[];
  trainer: Trainer;
  description: string;
  coverImage: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface WorkoutPreferences {
  goals: string[];
  equipment: boolean;
  outdoorWorkouts: boolean;
  fitnessLevel: string;
  duration: number;
  intensity: number;
}

export type WorkoutFilter =
  | "recommended"
  | "strength"
  | "cardio"
  | "flexibility";
