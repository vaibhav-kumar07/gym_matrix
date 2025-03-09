export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  gym: string;
  certifications: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: string;
  avatar: string;
  coverImage: string;
  bio: string;
  clientCount: number;
  transformations: number;
  level: string;
  popularity: string;
  priceRange: string;
}

export type TrainerFilter = "all" | "gym" | "independent";
export type TrainerLevel = "beginner" | "intermediate" | "expert";
export type TrainerAvailability = "morning" | "evening" | "flexible";
export type TrainerPriceRange = "budget" | "standard" | "premium";
export type TrainerPopularity = "trending" | "featured" | "new";

export interface TrainerFilters {
  level?: TrainerLevel;
  availability?: TrainerAvailability;
  price?: TrainerPriceRange;
  popularity?: TrainerPopularity;
}
