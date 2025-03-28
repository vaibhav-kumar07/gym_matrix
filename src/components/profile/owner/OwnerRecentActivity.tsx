import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { IOwnerActivity } from "@/types/owner";
import {
  UserPlus,
  LineChart,
  FileText,
  Dumbbell,
  Users,
  Bell,
  Settings,
  Calendar,
  CreditCard,
  MessageSquare,
} from "lucide-react";

interface OwnerRecentActivityProps {
  activities: IOwnerActivity[];
}

const getActivityIcon = (iconName: string) => {
  switch (iconName) {
    case "user-plus":
      return <UserPlus className="w-4 h-4" />;
    case "chart-line":
      return <LineChart className="w-4 h-4" />;
    case "file-text":
      return <FileText className="w-4 h-4" />;
    case "dumbbell":
      return <Dumbbell className="w-4 h-4" />;
    case "users":
      return <Users className="w-4 h-4" />;
    case "bell":
      return <Bell className="w-4 h-4" />;
    case "settings":
      return <Settings className="w-4 h-4" />;
    case "calendar":
      return <Calendar className="w-4 h-4" />;
    case "credit-card":
      return <CreditCard className="w-4 h-4" />;
    case "message":
      return <MessageSquare className="w-4 h-4" />;
    default:
      return <Bell className="w-4 h-4" />;
  }
};

const getIconBackground = (color: string) => {
  switch (color) {
    case "text-green-500":
      return "bg-green-200";
    case "text-blue-500":
      return "bg-blue-200";
    case "text-purple-500":
      return "bg-purple-200";
    case "text-orange-500":
      return "bg-orange-200";
    case "text-indigo-500":
      return "bg-indigo-200";
    default:
      return "bg-gray-100";
  }
};

export default function OwnerRecentActivity({
  activities,
}: OwnerRecentActivityProps) {
  return (
    <Card className="p-6  bg-white/90 backdrop-blur-md border-none shadow-lg rounded-xl z-30">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>

      <div className="h-[300px]  space-y-2  overflow-auto z-0 no-scrollbar ">
        {activities.map((activity: IOwnerActivity, index: number) => (
          <div
            key={index}
            className="flex items-center gap-4 px-3 py-2 hover:bg-gray-50 rounded-lg transition-all duration-200 border"
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border",
                getIconBackground(activity.color),
                activity.color
              )}
            >
              {getActivityIcon(activity.icon)}
            </div>
            <div className="flex flex-col ">
              <Label size="sm" className="text-gray-900">
                {activity.action}
              </Label>
              <Label size="xs" className="text-sm text-gray-500">
                {activity.time}
              </Label>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
