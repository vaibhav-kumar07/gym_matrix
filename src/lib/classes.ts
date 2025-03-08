import { FitnessClass, Instructor } from "../lib/types/classes";

export interface IClass {
  id: number;
  name: string;
  trainer: string;
  category: string;
  schedule: string;
  time: string;
  capacity: number;
  enrolled: number;
  status: "active" | "upcoming";
  image: string;
}

const classNames = [
  "Advanced HIIT Training",
  "Morning Yoga Flow",
  "Power Lifting",
  "Spin Cycle",
  "CrossFit Basics",
  "Cardio Burn",
  "Strength Bootcamp",
  "Pilates Core",
  "Zumba Dance Party",
  "Martial Arts Basics",
  "TRX Suspension",
  "Kettlebell Blast",
  "Endurance Running",
  "Functional Training",
  "Mobility & Flexibility",
  "Aqua Aerobics",
  "Boxing Fundamentals",
  "Olympic Weightlifting",
  "Stretch & Recovery",
  "Tabata Intervals",
  "Kickboxing",
  "Gymnastics for Fitness",
  "Rowing Challenge",
  "Core & Abs",
  "Bodyweight Circuit",
  "Circuit Training",
  "Strength Endurance",
  "Power Yoga",
  "Metabolic Conditioning",
  "Full Body Sculpt",
];

const trainers = [
  "Marcus Chen",
  "Emma Wilson",
  "David Brooks",
  "Sarah Miller",
  "Alex Thompson",
  "Daniel Carter",
  "Sophia Adams",
  "Liam Bennett",
  "Isabella White",
  "James Robinson",
  "Olivia Harris",
  "William King",
  "Mia Turner",
  "Benjamin Parker",
  "Charlotte Evans",
];

const categories = [
  "HIIT",
  "Yoga",
  "Strength",
  "Cardio",
  "CrossFit",
  "Martial Arts",
  "Functional",
  "Endurance",
];
const schedules = [
  "Mon, Wed, Fri",
  "Tue, Thu",
  "Mon, Thu",
  "Wed, Fri",
  "Tue, Thu, Sat",
  "Sat, Sun",
  "Daily",
];
const images = [
  "https://public.readdy.ai/ai/img_res/28695ef633c02174b5e61aa4d825dc18.jpg",
  "https://public.readdy.ai/ai/img_res/29ee76651cea295dcb6f4730f9089ebc.jpg",
  "https://public.readdy.ai/ai/img_res/832d31f3d53e0da075337210a37da1c2.jpg",
  "https://public.readdy.ai/ai/img_res/665c873ed6484938f4f0a6798a012499.jpg",
  "https://public.readdy.ai/ai/img_res/f7376d017e03e6d9963a7990b738494c.jpg",
];

/**
 * Generates 30 class entries with 15 "active" and 15 "upcoming".
 */
const classes: IClass[] = Array.from({ length: 30 }, (_, index) => {
  const status = index < 15 ? "active" : "upcoming";
  return {
    id: index + 1,
    name: classNames[index % classNames.length],
    trainer: trainers[index % trainers.length],
    category: categories[index % categories.length],
    schedule: schedules[index % schedules.length],
    time: `${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}:00 ${
      Math.random() > 0.5 ? "AM" : "PM"
    } - ${String(Math.floor(Math.random() * 12) + 2).padStart(2, "0")}:00 ${
      Math.random() > 0.5 ? "AM" : "PM"
    }`,
    capacity: Math.floor(Math.random() * 20) + 10,
    enrolled: Math.floor(Math.random() * 10) + 5,
    status,
    image: images[index % images.length],
  };
});

/**
 * Fetches gym classes with optional filtering by status.
 * @param {("active" | "upcoming")} categoryFilter - (Optional) Filter classes by status.
 * @returns {Promise<IClass[]>} - A promise resolving to the list of classes.
 */
export async function getClasses(
  categoryFilter?: "active" | "upcoming"
): Promise<IClass[]> {
  return categoryFilter
    ? classes.filter(
        (cls) => cls.category.toLowerCase() === categoryFilter.toLowerCase()
      )
    : classes;
}

// Mock Instructors
export const instructors: Instructor[] = [
  {
    id: "ins-001",
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200",
    rating: 4.9,
    reviews: 128,
    specialties: ["Yoga", "Pilates", "Meditation"],
    bio: "Certified yoga instructor with 8 years of experience in mindful movement and breathing techniques.",
  },
  {
    id: "ins-002",
    name: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&h=200",
    rating: 4.8,
    reviews: 95,
    specialties: ["HIIT", "Strength Training", "CrossFit"],
    bio: "Former professional athlete turned fitness coach, specializing in high-intensity workouts.",
  },
  {
    id: "ins-003",
    name: "Emma Rodriguez",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200",
    rating: 4.7,
    reviews: 156,
    specialties: ["Zumba", "Dance Fitness", "Cardio"],
    bio: "Professional dancer with a passion for making fitness fun and accessible to everyone.",
  },
  {
    id: "ins-004",
    name: "David Kim",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200",
    rating: 4.9,
    reviews: 112,
    specialties: ["Boxing", "Kickboxing", "MMA"],
    bio: "Professional boxing coach with 10+ years of experience in combat sports.",
  },
];

// Mock Classes
export const MemberClasses: FitnessClass[] = [
  {
    id: "cls-001",
    title: "Morning Flow Yoga",
    description:
      "Start your day with an energizing yoga flow that combines breathing exercises, gentle stretches, and strengthening poses. Perfect for all levels, this class will help you find balance and clarity for the day ahead.",
    type: "yoga",
    level: "Beginner",
    duration: 60,
    price: 25,
    schedule: "Mon, Wed, Fri - 7:00 AM",
    instructor: instructors[0],
    coverImage:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800",
    capacity: 20,
    enrolled: 15,
    amenities: ["Yoga Mats", "Blocks", "Straps", "Meditation Space"],
    location: "Studio A",
  },
  {
    id: "cls-002",
    title: "High Intensity Interval Training",
    description:
      "Push your limits with this high-energy HIIT class. Combining cardio bursts with strength exercises, you'll torch calories and build muscle in this efficient full-body workout.",
    type: "hiit",
    level: "Advanced",
    duration: 45,
    price: 30,
    schedule: "Tue, Thu - 6:30 PM",
    instructor: instructors[1],
    coverImage:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800",
    capacity: 15,
    enrolled: 12,
    amenities: ["Dumbbells", "Kettlebells", "Medicine Balls", "Water Station"],
    location: "Training Zone B",
  },
  {
    id: "cls-003",
    title: "Latin Dance Cardio",
    description:
      "Dance your way to fitness with this fun and energetic Latin-inspired cardio class. Learn basic dance moves while getting a great workout. No dance experience necessary!",
    type: "dance",
    level: "Intermediate",
    duration: 55,
    price: 22,
    schedule: "Mon, Wed - 5:30 PM",
    instructor: instructors[2],
    coverImage:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=800",
    capacity: 25,
    enrolled: 18,
    amenities: ["Dance Floor", "Sound System", "Changing Rooms"],
    location: "Dance Studio",
  },
  {
    id: "cls-004",
    title: "Boxing Fundamentals",
    description:
      "Learn proper boxing techniques while getting an incredible full-body workout. This class focuses on form, footwork, and basic combinations suitable for beginners.",
    type: "boxing",
    level: "Beginner",
    duration: 60,
    price: 28,
    schedule: "Tue, Thu, Sat - 8:00 AM",
    instructor: instructors[3],
    coverImage:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800",
    capacity: 12,
    enrolled: 8,
    amenities: ["Boxing Gloves", "Heavy Bags", "Speed Bags", "Hand Wraps"],
    location: "Boxing Ring",
  },
  {
    id: "cls-005",
    title: "Power Pilates",
    description:
      "Strengthen your core and improve flexibility with this dynamic Pilates class. Using both mat work and reformer exercises, you'll develop long, lean muscles and better posture.",
    type: "pilates",
    level: "Intermediate",
    duration: 50,
    price: 35,
    schedule: "Mon, Fri - 9:00 AM",
    instructor: instructors[0],
    coverImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800",
    capacity: 10,
    enrolled: 7,
    amenities: ["Reformer Machines", "Mats", "Resistance Bands"],
    location: "Pilates Studio",
  },
  {
    id: "cls-006",
    title: "Strength & Conditioning",
    description:
      "Build strength and improve your overall fitness with this comprehensive strength training class. Focus on proper form and progressive overload principles.",
    type: "strength",
    level: "Advanced",
    duration: 75,
    price: 32,
    schedule: "Wed, Sat - 10:00 AM",
    instructor: instructors[1],
    coverImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800",
    capacity: 15,
    enrolled: 11,
    amenities: ["Free Weights", "Squat Racks", "Benches", "Protein Bar"],
    location: "Weight Room",
  },
  {
    id: "cls-007",
    title: "Mindful Meditation",
    description:
      "Find peace and reduce stress with guided meditation sessions. Learn various meditation techniques and breathing exercises for mental clarity and relaxation.",
    type: "meditation",
    level: "Beginner",
    duration: 40,
    price: 20,
    schedule: "Tue, Thu - 7:00 PM",
    instructor: instructors[0],
    coverImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    capacity: 30,
    enrolled: 22,
    amenities: ["Meditation Cushions", "Aromatherapy", "Sound Therapy"],
    location: "Zen Room",
  },
  {
    id: "cls-008",
    title: "Cardio Kickboxing",
    description:
      "Combine martial arts techniques with fast-paced cardio for an intense full-body workout. Perfect for stress relief and improving coordination.",
    type: "kickboxing",
    level: "Intermediate",
    duration: 55,
    price: 27,
    schedule: "Mon, Wed, Fri - 6:00 PM",
    instructor: instructors[3],
    coverImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800",
    capacity: 20,
    enrolled: 16,
    amenities: ["Kick Pads", "Punching Bags", "Boxing Gloves"],
    location: "Combat Zone",
  },
];

// Categories for filtering
export const classCategories = [
  { id: "yoga", name: "Yoga", icon: "🧘‍♀️" },
  { id: "hiit", name: "HIIT", icon: "🏃‍♂️" },
  { id: "dance", name: "Dance", icon: "💃" },
  { id: "boxing", name: "Boxing", icon: "🥊" },
  { id: "pilates", name: "Pilates", icon: "🤸‍♀️" },
  { id: "strength", name: "Strength", icon: "💪" },
  { id: "meditation", name: "Meditation", icon: "🧘‍♂️" },
  { id: "kickboxing", name: "Kickboxing", icon: "🥋" },
];

// Levels for filtering
export const classLevels = ["Beginner", "Intermediate", "Advanced"];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
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

interface FetchClassesOptions {
  filter?: ClassFilter;
  searchQuery?: string;
  level?: string;
  duration?: number;
  maxPrice?: number;
}

export async function fetchClasses({
  filter = "all",
  searchQuery,
  level,
  duration,
  maxPrice,
}: FetchClassesOptions = {}): Promise<FitnessClass[]> {
  // Simulate network delay
  await delay(1000);

  let filteredClasses = [...MemberClasses];

  // Apply category filter
  if (filter !== "all") {
    filteredClasses = filteredClasses.filter(
      (c) => c.type.toLowerCase() === filter.toLowerCase()
    );
  }

  // Apply search query filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredClasses = filteredClasses.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.type.toLowerCase().includes(query) ||
        c.instructor.name.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
    );
  }

  // Apply level filter
  if (level) {
    console.log("level", level);
    filteredClasses = filteredClasses.filter(
      (c) => c.level.toLowerCase() === level.toLowerCase()
    );
  }

  // Apply duration filter
  if (duration) {
    filteredClasses = filteredClasses.filter((c) => c.duration <= duration);
  }

  // Apply price filter
  if (maxPrice) {
    filteredClasses = filteredClasses.filter((c) => c.price <= maxPrice);
  }
  console.log("filteredClasses", filteredClasses);
  return filteredClasses;
}

// Helper function to get available class types
export function getClassTypes(): { id: string; name: string; count: number }[] {
  const types = new Map<string, number>();

  MemberClasses.forEach((c) => {
    const count = types.get(c.type) || 0;
    types.set(c.type, count + 1);
  });

  return Array.from(types.entries()).map(([id, count]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    count,
  }));
}

// Helper function to get available levels
export function getClassLevels(): { level: string; count: number }[] {
  const levels = new Map<string, number>();

  MemberClasses.forEach((c) => {
    const count = levels.get(c.level) || 0;
    levels.set(c.level, count + 1);
  });

  return Array.from(levels.entries()).map(([level, count]) => ({
    level,
    count,
  }));
}

// Helper function to get price range
export function getPriceRange() {
  const prices = MemberClasses.map((c) => c.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}
