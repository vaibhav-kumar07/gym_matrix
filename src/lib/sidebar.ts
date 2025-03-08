import { IconName } from "@/components/common/SidebarIcons";

// lib/sidebarLinks.ts
export const desktopSidebarOwner = [
  { name: "Overview", href: "/owner/bull_gym/", icon: "Home" },

  { name: "Classes", href: "/owner/bull_gym/classes", icon: "Classes" },
  { name: "Members", href: "/owner/bull_gym/members", icon: "Users" },
  {
    name: "Equipment",
    href: "/owner/bull_gym/equipment",
    icon: "Dumbbell",
  },
  {
    name: "Analytics",
    href: "/owner/bull_gym/analytics",
    icon: "BarChart",
  },
  { name: "Settings", href: "/owner/bull_gym/settings", icon: "Settings" },
];

export const desktopSidebarLinkMember = [
  {
    icon: "home",
    label: "Dashboard",
    tab: "dashboard",
    category: "Main",
    path: "/member/bull_gym",
  },
  {
    icon: "calendar",
    label: "Schedule",
    tab: "schedule",
    category: "Main",
    path: "/member/bull_gym/schedule",
  },
  {
    icon: "calendar",
    label: "Sessions",
    tab: "sessions",
    category: "Main",
    path: "/member/bull_gym/sessions",
  },
  {
    icon: "dumbbell",
    label: "Workouts",
    tab: "workouts",
    category: "Training",
    path: "/member/bull_gym/workouts",
  },
  {
    icon: "users-class",
    label: "Classes",
    tab: "classes",
    category: "Training",
    path: "/member/bull_gym/classes",
  },
  {
    icon: "user-tie",
    label: "Trainers",
    tab: "trainers",
    category: "Training",
    path: "/member/bull_gym/trainers",
  },
  {
    icon: "credit-card",
    label: "My Plan",
    tab: "membership",
    category: "Membership",
    path: "/member/bull_gym/membership",
  },
  {
    icon: "receipt",
    label: "Billing",
    tab: "billing",
    category: "Membership",
    path: "/member/bull_gym/billing",
  },
  {
    icon: "users",
    label: "Members",
    tab: "community",
    category: "Community",
    path: "/member/bull_gym/community",
  },
  {
    icon: "trophy",
    label: "Challenges",
    tab: "challenges",
    category: "Community",
    path: "/member/bull_gym/challenges",
  },
  {
    icon: "user",
    label: "Profile",
    tab: "profile",
    category: "Account",
    path: "/member/profile",
  },
  {
    icon: "cog",
    label: "Settings",
    tab: "settings",
    category: "Account",
    path: "/member/settings",
  },
];

export function getSidebarLinks(role: "owner" | "member") {
  return role == "owner" ? desktopSidebarOwner : desktopSidebarLinkMember;
}

export interface ISidebarItem {
  icon: IconName;
  label: string;
  tab: string;
  category: string;
  path?: string;
}

export interface ISidebarGroup {
  [key: string]: ISidebarItem[];
}
