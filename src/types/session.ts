export interface Trainer {
  id: string;
  name: string;
  image: string;
  specialization: string;
}

export interface FitnessSession {
  id: string;
  title: string;
  trainer: Trainer;
  type: "Yoga" | "HIIT" | "Pilates" | "Strength";
  time: string;
  date: string;
  duration: number;
  location: string;
  attendees: number;
  maxAttendees: number;
  status: "upcoming" | "completed" | "cancelled";
  intensity: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  equipment: string[];
  price: number;
  premiumPrice?: number;
  isPremiumOnly: boolean;
  coverImage: string;
}

export type SessionFilter = "all" | "yoga" | "hiit" | "pilates";
