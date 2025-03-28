export interface Instructor {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  specialties: string[];
  bio: string;
}

export interface FitnessClass {
  id: string;
  title: string;
  description: string;
  type: string;
  level: string;
  duration: number;
  price: number;
  schedule: string;
  instructor: Instructor;
  coverImage: string;
  capacity: number;
  enrolled: number;
  amenities: string[];
  location: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

//write class filter type
export type ClassFilter =
  | "all"
  | "yoga"
  | "hiit"
  | "dance"
  | "boxing"
  | "pilates"
  | "strength"
  | "meditation"
  | "kickboxing";
