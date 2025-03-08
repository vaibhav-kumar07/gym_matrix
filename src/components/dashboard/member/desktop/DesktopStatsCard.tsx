import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import {
  Dumbbell,
  Users,
  Flame,
  Zap,
  Trophy,
  Timer,
  Heart,
  TrendingUp,
  Calendar,
  Target,
  Activity,
  Weight,
  Clock,
  Star,
  type LucideIcon,
} from "lucide-react";

const iconMapping: Record<
  string,
  {
    icon: LucideIcon;
    color: string;
    bgColor: string;
  }
> = {
  workout: {
    icon: Dumbbell,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  class: {
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  calorie: {
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  streak: {
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  weight: {
    icon: Weight,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  time: {
    icon: Clock,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  heart: {
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  goal: {
    icon: Target,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  activity: {
    icon: Activity,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  achievement: {
    icon: Trophy,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  rating: {
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  duration: {
    icon: Timer,
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
};

interface MemberStatsCardProps {
  title: string;
  value: string | number;
  change?: string;
}

export function MemberDesktopStatsCard({
  title,
  value,
  change,
}: MemberStatsCardProps) {
  const getIconConfig = (title: string) => {
    const lowercaseTitle = title.toLowerCase();

    const matchingKey = Object.keys(iconMapping).find((key) =>
      lowercaseTitle.includes(key)
    );

    return matchingKey
      ? iconMapping[matchingKey]
      : {
          icon: Activity,
          color: "text-gray-500",
          bgColor: "bg-gray-50",
        };
  };

  // Determine if change is positive, negative, or neutral
  const getTrendInfo = (change?: string) => {
    if (!change) return { color: "text-gray-500", trend: "neutral" };

    if (change.includes("+") || change.toLowerCase().includes("up")) {
      return { color: "text-green-500", trend: "up" };
    }
    if (change.includes("-") || change.toLowerCase().includes("down")) {
      return { color: "text-red-500", trend: "down" };
    }
    return { color: "text-gray-500", trend: "neutral" };
  };

  const iconConfig = getIconConfig(title);
  const { color: trendColor } = getTrendInfo(change);
  const Icon = iconConfig.icon;

  return (
    <Card className="px-6 py-4 hover:shadow-lg transition-all duration-300 group border rounded-lg">
      <div className="flex items-center justify-between ">
        <h3 className="text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <div
          className={`p-2 rounded-full ${iconConfig.bgColor} group-hover:scale-110 transition-transform`}
        >
          <Icon className={`h-6 w-6 ${iconConfig.color}`} />
        </div>
      </div>
      <Label
        // size={"sm"}
        className="text-2xl font-bold group-hover:scale-105 transition-transform"
      >
        {value}
      </Label>
      {change && (
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp className={`h-4 w-4 ${trendColor}`} />
          <Label size={"xs"} className={` ${trendColor}`}>
            {change}
          </Label>
        </div>
      )}
    </Card>
  );
}
