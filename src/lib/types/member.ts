import { IconName } from "@/components/common/SidebarIcons";

export interface IMemberStats {
  weeklyAttendance: number;
  streak: number;
  todaySessions: number;
  remainingDays: number;
}

export interface IUpcomingSession {
  id: string;
  type: string;
  trainer: string;
  time: string;
  date: string;
  trainerImage: string;
}

export interface IMemberDashboard {
  stats: IMemberStats;
  upcomingSessions: IUpcomingSession[];
  member: {
    id: string;
    name: string;
    avatar: string;
    initials: string;
  };
}

export interface IDesktopMemberStats {
  monthlyProgress: number;
  weeklyWorkouts: number;
  caloriesBurned: number;
  activeStreak: number;
  weeklyProgress: number;
  caloriesProgress: number;
}

export interface IDesktopNutritionData {
  calories: {
    current: number;
    target: number;
  };
  protein: {
    current: number;
    target: number;
  };
  carbs: {
    current: number;
    target: number;
  };
}

export interface IDesktopScheduleItem {
  id: number;
  type: string;
  time: string;
  duration: string;
  icon: string;
}

export interface IDesktopMemberDashboard {
  stats: IDesktopMemberStats;
  nutrition: IDesktopNutritionData;
  schedule: IDesktopScheduleItem[];
  member: {
    name: string;
    avatar: string;
    notifications: number;
  };
}

export interface ISidebarItem {
  icon: IconName;
  label: string;
  tab: string;
  category: string;
  path: string;
}

export interface ISidebarGroup {
  [key: string]: ISidebarItem[];
}
