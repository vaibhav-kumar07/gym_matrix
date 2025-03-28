import { IDesktopMemberDashboard, IMemberDashboard } from "../types/member";

export interface IMember {
  id: number;
  name: string;
  email: string;
  plan: string;
  joinDate: string;
  status: "active" | "inactive" | "pending"; // Assuming limited status values
  lastVisit: string;
  image: string;
}

interface Member {
  id: number;
  name: string;
  email: string;
  plan: "Premium" | "Standard" | "Basic";
  joinDate: string;
  status: "active" | "inactive" | "pending";
  lastVisit: string;
  image: string;
}

export async function getMembers(
  filterStatus?: "active" | "inactive" | "pending"
): Promise<Member[]> {
  const images = [
    "https://public.readdy.ai/ai/img_res/40593bf2ea7940da39f1597a17dd997e.jpg",
    "https://public.readdy.ai/ai/img_res/d098674f748dba111815683670eeee21.jpg",
    "https://public.readdy.ai/ai/img_res/102b2def19660278a22c527026c21d7c.jpg",
    "https://public.readdy.ai/ai/img_res/b05b8401b442a4c3dc92200b7e2250f5.jpg",
    "https://public.readdy.ai/ai/img_res/d6ce06dff82680e9e064aae597468cd1.jpg",
  ];

  const names = [
    "James Anderson",
    "Sophie Martinez",
    "Ryan Thompson",
    "Emily Chen",
    "Michael Roberts",
    "Olivia Brown",
    "William Carter",
    "Emma Johnson",
    "Liam Smith",
    "Charlotte Davis",
    "Benjamin Wilson",
    "Ava Moore",
    "Noah Taylor",
    "Sophia Lee",
    "Lucas White",
    "Amelia Harris",
    "Mason Clark",
    "Mia Lewis",
    "Elijah Hall",
    "Harper Young",
    "Alexander King",
    "Evelyn Scott",
    "Daniel Adams",
    "Ella Nelson",
    "Matthew Baker",
    "Scarlett Hill",
    "David Green",
    "Abigail Walker",
    "Henry Perez",
    "Lily Campbell",
  ];

  const plans: ("Premium" | "Standard" | "Basic")[] = [
    "Premium",
    "Standard",
    "Basic",
  ];
  const statuses: ("active" | "inactive" | "pending")[] = [
    "active",
    "inactive",
    "pending",
  ];

  const members: Member[] = names.map((name, index) => {
    const status = statuses[index % statuses.length];
    return {
      id: index + 1,
      name,
      email: `${name.toLowerCase().replace(/\s/g, ".")}@email.com`,
      plan: plans[index % plans.length],
      joinDate: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(
        2,
        "0"
      )}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
      status,
      lastVisit:
        status === "pending"
          ? "Not visited"
          : `2025-${String(Math.floor(Math.random() * 2) + 1).padStart(
              2,
              "0"
            )}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
      image: images[index % images.length],
    };
  });

  return filterStatus
    ? members.filter((member) => member.status === filterStatus)
    : members;
}

// Mock data for development
const mockDashboardData: IMemberDashboard = {
  stats: {
    weeklyAttendance: 85,
    streak: 12,
    todaySessions: 2,
    remainingDays: 45,
  },
  upcomingSessions: [
    {
      id: "1",
      type: "HIIT Training",
      trainer: "Emma Wilson",
      time: "10:30 AM",
      date: "Today",
      trainerImage:
        "https://public.readdy.ai/ai/img_res/a5057f22ab079cbf6d94cb218b9178f0.jpg",
    },
    {
      id: "2",
      type: "Strength Training",
      trainer: "Michael Chen",
      time: "2:00 PM",
      date: "Tomorrow",
      trainerImage:
        "https://public.readdy.ai/ai/img_res/d52fbc9b2625a9476573d004c5a2c152.jpg",
    },
    {
      id: "3",
      type: "Yoga Flow",
      trainer: "Sarah Johnson",
      time: "9:00 AM",
      date: "Tomorrow",
      trainerImage:
        "https://public.readdy.ai/ai/img_res/543f60ac10caa40e756cde63ca823436.jpg",
    },
  ],
  member: {
    id: "1",
    name: "James Davidson",
    avatar:
      "https://public.readdy.ai/ai/img_res/543f60ac10caa40e756cde63ca823436.jpg",
    initials: "JD",
  },
};

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMemberDashboard(): Promise<IMemberDashboard> {
  try {
    // Simulate API call delay
    await delay(1000);

    // In development, return mock data
    if (process.env.NODE_ENV === "development") {
      return mockDashboardData;
    }

    // In production, make actual API call
    // const response = await fetch("/api/member/dashboard");
    // if (!response.ok) {
    //   throw new Error("Failed to fetch dashboard data");
    // }
    return mockDashboardData;
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    throw error;
  }
}

// Additional API functions for future use
export async function updateMemberStats(
  stats: Partial<IMemberDashboard["stats"]>
): Promise<IMemberDashboard["stats"]> {
  await delay(500);
  return { ...mockDashboardData.stats, ...stats };
}

export async function getUpcomingSessions(): Promise<
  IMemberDashboard["upcomingSessions"]
> {
  await delay(500);
  return mockDashboardData.upcomingSessions;
}

export async function updateMemberProfile(
  profile: Partial<IMemberDashboard["member"]>
): Promise<IMemberDashboard["member"]> {
  await delay(500);
  return { ...mockDashboardData.member, ...profile };
}

// Mock data for development
const mockDesktopDashboardData: IDesktopMemberDashboard = {
  stats: {
    monthlyProgress: 75,
    weeklyWorkouts: 12,
    caloriesBurned: 8540,
    activeStreak: 15,
    weeklyProgress: 8,
    caloriesProgress: 12,
  },
  nutrition: {
    calories: {
      current: 2100,
      target: 2400,
    },
    protein: {
      current: 120,
      target: 150,
    },
    carbs: {
      current: 250,
      target: 300,
    },
  },
  schedule: [
    {
      id: 1,
      type: "HIIT Training",
      time: "10:00 AM - 11:00 AM",
      duration: "1 hour",
      icon: "running",
    },
    {
      id: 2,
      type: "Strength Training",
      time: "2:00 PM - 3:30 PM",
      duration: "1.5 hours",
      icon: "dumbbell",
    },
    {
      id: 3,
      type: "Evening Yoga",
      time: "5:00 PM - 6:00 PM",
      duration: "1 hour",
      icon: "yoga",
    },
  ],
  member: {
    name: "Christopher",
    avatar:
      "https://public.readdy.ai/ai/img_res/1d209bdef59d737e20dbd4caa77444da.jpg",
    notifications: 3,
  },
};

export async function getDesktopMemberDashboard(): Promise<IDesktopMemberDashboard> {
  try {
    // In development, return mock data
    if (process.env.NODE_ENV === "development") {
      return mockDesktopDashboardData;
    }

    // // In production, make actual API call
    // const response = await fetch("/api/member/dashboard");
    // if (!response.ok) {
    //   throw new Error("Failed to fetch dashboard data");
    // }
    // return await response.json();
  } catch (error) {
    console.error("Error fetching dashboard:", error);
    throw error;
  }
}
