"use client";

import { cn } from "@/lib/utils";
import { Home, Calendar, Users, User, Bell } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  tab: string;
  path: string;
}

export default function MemberBottomNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("home");

  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      tab: "home",
      path: "/member/gym",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Schedule",
      tab: "schedule",
      path: "/member/gym/schedule",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Community",
      tab: "community",
      path: "/member/gym/community",
    },
    {
      icon: <User className="w-5 h-5" />,
      label: "Profile",
      tab: "profile",
      path: "/member/gym/profile",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      label: "Alerts",
      tab: "alerts",
      path: "/member/alerts",
    },
  ];

  // Update active tab based on current path
  useEffect(() => {
    const currentPath = pathname;
    const currentItem = navItems.find((item) =>
      currentPath.startsWith(item.path)
    );
    if (currentItem) {
      setActiveTab(currentItem.tab);
    }
  }, [pathname]);

  const handleTabChange = (item: NavItem) => {
    setActiveTab(item.tab);
    router.push(item.path);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t">
      <div className="grid grid-cols-5 gap-0">
        {navItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => handleTabChange(item)}
            className={cn(
              "flex flex-col items-center justify-center py-2 transition-colors duration-200",
              activeTab === item.tab
                ? "text-blue-500"
                : "text-gray-500 hover:text-blue-400"
            )}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
