import { Trainer, TrainerFilter } from "@/lib/types/trainer";

export const trainers = [
  {
    id: "tr-002",
    name: "Mike Chen",
    level: "intermediate",
    specialization: "HIIT Training",
    experience: "5+ years",
    availability: "evening",
    popularity: "featured",
    priceRange: "standard", // standard: $50-80/hr
    hourlyRate: 65,
    rating: 4.7,
    reviews: 98,
    clientCount: 38,
    gym: "Independent",
    certifications: ["ACE CPT", "TRX Certified"],
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
    coverImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
  },
  {
    id: "tr-003",
    name: "Emma Rodriguez",
    level: "beginner",
    specialization: "Yoga & Pilates",
    experience: "3+ years",
    availability: "flexible",
    popularity: "new",
    priceRange: "budget", // budget: <$50/hr
    hourlyRate: 45,
    rating: 4.8,
    reviews: 45,
    clientCount: 25,
    gym: "Zen Studio",
    certifications: ["RYT 200", "Pilates Certified"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    coverImage: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
  },
  {
    id: "tr-001",
    name: "Sarah Johnson",
    level: "expert",
    specialization: "Strength & Conditioning",
    experience: "8+ years",
    availability: "morning",
    popularity: "trending",
    priceRange: "premium",
    hourlyRate: 85,
    rating: 4.9,
    reviews: 156,
    clientCount: 45,
    gym: "Elite Fitness Center",
    certifications: ["NASM CPT", "CrossFit L2"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    coverImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
    bio: "Certified strength coach with 8+ years experience helping clients achieve their fitness goals",
    transformations: 120, // Add this field
  },
];

// Filter Options
export const trainerFilters = {
  levels: [
    { id: "beginner", name: "Beginner Friendly", icon: "🌱" },
    { id: "intermediate", name: "Intermediate", icon: "⭐" },
    { id: "expert", name: "Expert", icon: "🏆" },
  ],
  availability: [
    { id: "morning", name: "Morning", icon: "🌅" },
    { id: "evening", name: "Evening", icon: "🌙" },
    { id: "flexible", name: "Flexible", icon: "📅" },
  ],
  priceRange: [
    { id: "budget", name: "Budget (<$50/hr)", icon: "💰" },
    { id: "standard", name: "Standard ($50-80/hr)", icon: "💰💰" },
    { id: "premium", name: "Premium (>$80/hr)", icon: "💰💰💰" },
  ],
  popularity: [
    { id: "trending", name: "Trending", icon: "🔥" },
    { id: "featured", name: "Featured", icon: "⭐" },
    { id: "new", name: "New Trainers", icon: "✨" },
  ],
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface FetchTrainersOptions {
  filter?: TrainerFilter;
  searchQuery?: string;
  minRating?: number;
  maxPrice?: number;
}

export async function fetchTrainers(filters: {
  level?: string;
  availability?: string;
  price?: string;
  popularity?: string;
}) {
  await delay(1000); // Simulate network delay

  let filteredTrainers = [...trainers] as Trainer[];

  if (filters.level) {
    filteredTrainers = filteredTrainers.filter(
      (trainer) => trainer.level.toLowerCase() == filters.level.toLowerCase()
    );
  }

  if (filters.availability) {
    filteredTrainers = filteredTrainers.filter(
      (trainer) =>
        trainer.availability.toLowerCase() == filters.availability.toLowerCase()
    );
  }

  if (filters.price) {
    filteredTrainers = filteredTrainers.filter(
      (trainer) =>
        trainer.priceRange.toLowerCase() == filters.price.toLowerCase()
    );
  }

  if (filters.popularity) {
    filteredTrainers = filteredTrainers.filter(
      (trainer) =>
        trainer.popularity.toLowerCase() == filters.popularity.toLowerCase()
    );
  }

  const uniqueTrainers = new Set(filteredTrainers);

  return Array.from(uniqueTrainers);
}
