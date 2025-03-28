import { IUserProfile } from "../types/profile";

export const getUserProfile = () => {
  const userProfile = {
    image: "/userimage1.png",
    name: "User",
  };

  return userProfile;
};

export const demoUserProfile: IUserProfile = {
  id: "1",
  name: "Alex Thompson",
  bio: "Fitness Enthusiast | Marathon Runner",
  coverImage:
    "https://public.readdy.ai/ai/img_res/f8e86e4e194c6db87c69215b34e40fff.jpg",
  profileImage:
    "https://public.readdy.ai/ai/img_res/1a829613fda8cb5cc8874c7592aa57f0.jpg",
  stats: {
    followersCount: 1234,
    followingCount: 567,
    achievements: 48,
  },
  personalBests: [
    { title: "Bench Press", value: "225 lbs" },
    { title: "Deadlift", value: "315 lbs" },
    { title: "5K Run", value: "22:30" },
    { title: "Pull-ups", value: "20 reps" },
  ],
  upcomingEvents: [
    {
      title: "City Marathon",
      date: "2024-06-15",
      type: "Running",
      icon: "running",
    },
    {
      title: "Fitness Workshop",
      date: "2024-06-20",
      type: "Workshop",
      icon: "dumbbell",
    },
  ],
  preferences: {
    workoutDays: ["Mon", "Wed", "Fri", "Sat"],
    favoriteWorkouts: ["Running", "Weight Training", "HIIT", "Yoga"],
    fitnessLevel: "Advanced",
  },
  memberSince: "2023-01-15",
  totalWorkouts: 156,
};

export async function getMobileUserProfile(
  userId: string
): Promise<IUserProfile> {
  // In a real app, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
  return demoUserProfile;
}
