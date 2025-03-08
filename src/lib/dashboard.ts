export interface MemberStatsCard {
  title: string;
  value: string;
  change: string;
  icon: string;
}

export interface MemberActivityData {
  day: string;
  calories: number;
  duration: number;
}

export interface MemberUpcomingClass {
  id: string;
  name: string;
  time: string;
  trainer: string;
  type: string;
}

export interface MemberDashboardDesktopData {
  stats: MemberStatsCard[];
  activityData: MemberActivityData[];
  upcomingClasses: MemberUpcomingClass[];
}

// Simulated API data
const dashboardData: MemberDashboardDesktopData = {
  stats: [
    {
      title: "Total Workouts",
      value: "248",
      change: "+12% from last month",
      icon: "dumbbell",
    },
    {
      title: "Active Classes",
      value: "12",
      change: "+3 new this week",
      icon: "users",
    },
    {
      title: "Calories Burned",
      value: "14,280",
      change: "On track for goal",
      icon: "flame",
    },
    {
      title: "Active Streak",
      value: "15 days",
      change: "Personal best!",
      icon: "zap",
    },
  ],
  activityData: [
    { day: "Mon", calories: 2400, duration: 45 },
    { day: "Tue", calories: 1398, duration: 30 },
    { day: "Wed", calories: 3800, duration: 65 },
    { day: "Thu", calories: 2908, duration: 50 },
    { day: "Fri", calories: 4800, duration: 80 },
    { day: "Sat", calories: 3800, duration: 65 },
    { day: "Sun", calories: 4300, duration: 70 },
  ],
  upcomingClasses: [
    {
      id: "1",
      name: "HIIT Training",
      time: "9:00 AM",
      trainer: "Sarah Johnson",
      type: "hiit",
    },
    {
      id: "2",
      name: "Yoga Flow",
      time: "11:00 AM",
      trainer: "Michael Chen",
      type: "yoga",
    },
    {
      id: "3",
      name: "Strength Training",
      time: "2:00 PM",
      trainer: "David Miller",
      type: "strength",
    },
  ],
};

export async function fetchMemberDashboardDesktopData(): Promise<MemberDashboardDesktopData> {
  return dashboardData;
}
