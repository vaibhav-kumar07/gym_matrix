import { IOwner, IOwnerResponse } from "@/lib/types/owner";

export const demoOwnerProfile: IOwner = {
  id: "own_123",
  name: "Alex Mitchell",
  nameInitials: "AM",
  role: "Gym Owner & Fitness Expert",
  avatar:
    "https://public.readdy.ai/ai/img_res/ea2fab7f28be0c5f77701d9cd2dafe37.jpg",
  email: "alex.mitchell@fitnesspro.com",
  phone: "+1 (555) 123-4567",
  address: "123 Fitness Street, CA 94105",
  joinDate: "January 2020",
  certifications: [
    "NASM Certified Trainer",
    "CrossFit Level 2",
    "Nutrition Specialist",
    "Business Management",
  ],
  stats: {
    revenue: {
      amount: 12800000, // 12.8M
      growth: 18,
    },
    members: {
      count: 2547,
      growth: 12,
    },
    staff: {
      count: 32,
      type: "Full-time & Part-time",
    },
  },
  recentActivities: [
    {
      id: "act_1",
      action: "Approved new trainer hire",
      time: "2 hours ago",
      icon: "user-plus",
      color: "text-green-500",
    },
    {
      id: "act_2",
      action: "Reviewed monthly financial report",
      time: "Yesterday at 4:30 PM",
      icon: "chart-line",
      color: "text-blue-500",
    },
    {
      id: "act_3",
      action: "Updated gym policies",
      time: "Yesterday at 2:15 PM",
      icon: "file-alt",
      color: "text-purple-500",
    },
    {
      id: "act_4",
      action: "Ordered new equipment",
      time: "2 days ago",
      icon: "dumbbell",
      color: "text-orange-500",
    },
    {
      id: "act_5",
      action: "Conducted staff meeting",
      time: "2 days ago",
      icon: "users",
      color: "text-indigo-500",
    },
  ],
  upcomingTasks: [
    {
      id: "task_1",
      task: "Annual Equipment Maintenance",
      date: "2025-02-25",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "task_2",
      task: "Staff Performance Review",
      date: "2025-03-01",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: "task_3",
      task: "Member Satisfaction Survey",
      date: "2025-03-05",
      priority: "Medium",
      status: "Not Started",
    },
    {
      id: "task_4",
      task: "Update Marketing Strategy",
      date: "2025-03-10",
      priority: "High",
      status: "In Progress",
    },
  ],
};

export async function getOwnerProfile(): Promise<IOwnerResponse> {
  // In a real application, you would fetch from your API
  // const response = await fetch(`/api/owner/${ownerId}/profile`);
  // const data = await response.json();

  // For demo purposes, we'll simulate an API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return mock data
  return {
    success: true,
    data: demoOwnerProfile,
  };
}

export async function updateOwnerProfile(
  updates: Partial<IOwner>
): Promise<IOwnerResponse> {
  try {
    // In a real application, you would send updates to your API
    // const response = await fetch(`/api/owner/${ownerId}/profile`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(updates)
    // });

    // For demo purposes, we'll simulate an API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return updated mock data
    return {
      success: true,
      data: {
        ...demoOwnerProfile,
        ...updates,
      },
    };
  } catch (error) {
    console.error("Error updating owner profile:", error);
    return {
      success: false,
      error: "Failed to update owner profile",
    };
  }
}

export async function getOwnerStats() {
  try {
    // In a real application, you would fetch from your API
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      success: true,
      data: demoOwnerProfile.stats,
    };
  } catch (error) {
    console.error("Error fetching owner stats:", error);
    return {
      success: false,
      error: "Failed to fetch owner stats",
    };
  }
}

export async function getOwnerRecentActivities() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      success: true,
      data: demoOwnerProfile.recentActivities,
    };
  } catch (error) {
    console.error("Error fetching owner activities:", error);
    return {
      success: false,
      error: "Failed to fetch owner activities",
    };
  }
}

export async function getOwnerUpcomingTasks() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return {
      success: true,
      data: demoOwnerProfile.upcomingTasks,
    };
  } catch (error) {
    console.error("Error fetching owner tasks:", error);
    return {
      success: false,
      error: "Failed to fetch owner tasks",
    };
  }
}
