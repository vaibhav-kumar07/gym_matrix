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

// ENUM: Emergency Contact Relation
export enum IEmergencyRelation {
  PARENT = "parent",
  SPOUSE = "spouse",
  SIBLING = "sibling",
  FRIEND = "friend",
  OTHER = "other",
}

// ENUM: Gender
export enum IGender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

// ENUM: Membership Status
export enum IMemberStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  EXPIRED = "expired",
  CANCELLED = "cancelled",
  SUSPENDED = "suspended",
  PAUSED = "paused",
}
export enum IActiveGymStatus {
  Active = "active",
  Inactive = "inactive",
  Canceled = "canceled",
}

// Active Gym & Subscription Details
export interface IActiveGym {
  gymId: string;
  gymName: string;
  subscriptionId: string;
  subscriptionName: string;
  startDate: Date;
  endDate: Date;
  status?: IActiveGymStatus;
}

// Physical Stats
export interface IPhysicalStats {
  height?: number;
  weight?: number;
  bmi?: number;
  fitnessGoal?: string;
}

// Emergency Contact
export interface IEmergencyContact {
  name: string;
  phone: string;
  relation: IEmergencyRelation; // ENUM USED HERE
}

// Member Profile Schema
export interface IMember {
  userId?: string;
  name: string;
  email: string;
  phone: string;
  profilePicture?: string;
  dateOfBirth?: String;
  gender?: IGender; // ENUM USED HERE
  activeGym?: IActiveGym;
  physicalStats?: IPhysicalStats;
  emergencyContact?: IEmergencyContact;
  membershipStatus: IMemberStatus;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
