import { IScheduleData } from "@/lib/types/schedule";

export const demoScheduleData: IScheduleData = {
  timeSlots: [
    { time: "07:00", period: "AM", available: true },
    { time: "08:30", period: "AM", available: true },
    { time: "10:00", period: "AM", available: false },
    { time: "11:30", period: "AM", available: true },
    { time: "02:00", period: "PM", available: true },
    { time: "03:30", period: "PM", available: true },
    { time: "05:00", period: "PM", available: false },
    { time: "06:30", period: "PM", available: true },
  ],
  trainers: [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Yoga & Pilates",
      rating: 4.9,
      reviews: 127,
      image:
        "https://public.readdy.ai/ai/img_res/c02556456ce972ff9c0b5d4dbf7acb0e.jpg",
    },
    {
      id: 2,
      name: "David Martinez",
      specialty: "Strength Training",
      rating: 4.8,
      reviews: 98,
      image:
        "https://public.readdy.ai/ai/img_res/b25c2f58d803425fbf5f9cba9efdb5e9.jpg",
    },
    {
      id: 3,
      name: "Emma Wilson",
      specialty: "HIIT & Cardio",
      rating: 4.9,
      reviews: 156,
      image:
        "https://public.readdy.ai/ai/img_res/eac8625f2a0a0b75572752b1ed19fc37.jpg",
    },
  ],
  classTypes: [
    {
      id: 1,
      name: "Yoga Flow",
      duration: "60 min",
      intensity: "Medium",
      image:
        "https://public.readdy.ai/ai/img_res/4543d03727166c7deace3e4c860690bf.jpg",
    },
    {
      id: 2,
      name: "HIIT Circuit",
      duration: "45 min",
      intensity: "High",
      image:
        "https://public.readdy.ai/ai/img_res/f008f3171f48534338735d038158372e.jpg",
    },
    {
      id: 3,
      name: "Strength Basics",
      duration: "50 min",
      intensity: "Medium",
      image:
        "https://public.readdy.ai/ai/img_res/659c1029ff296cada6e2107267910eca.jpg",
    },
  ],
};

// API service
export async function getScheduleData(): Promise<IScheduleData> {
  try {
    // In development, return mock data
    if (process.env.NODE_ENV === "development") {
      return demoScheduleData;
    }

    // In production, make actual API call
    // const response = await fetch("/api/member/schedule");
    // if (!response.ok) {
    //   throw new Error("Failed to fetch schedule data");
    // }
    return demoScheduleData;
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    throw error;
  }
}
