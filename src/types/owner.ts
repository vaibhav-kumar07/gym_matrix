export interface IOwner {
  id: string;
  name: string;
  nameInitials: string;
  role: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  certifications: string[];
  stats: IOwnerStats;
  recentActivities: IOwnerActivity[];
  upcomingTasks: IOwnerTask[];
}

export interface IOwnerStats {
  revenue: {
    amount: number;
    growth: number;
  };
  members: {
    count: number;
    growth: number;
  };
  staff: {
    count: number;
    type: string;
  };
}

export interface IOwnerActivity {
  id: string;
  action: string;
  time: string;
  icon: string;
  color: string;
}

export interface IOwnerTask {
  id: string;
  task: string;
  date: string;
  priority: "High" | "Medium" | "Low";
  status: "In Progress" | "Pending" | "Not Started" | "Completed";
}

// For API responses
export interface IOwnerResponse {
  success: boolean;
  data?: IOwner;
  error?: string;
}

// For API requests
export interface IUpdateOwnerProfile {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  avatar?: string;
}

// For filtering and pagination
export interface IOwnerQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: keyof IOwner;
  sortOrder?: "asc" | "desc";
}
