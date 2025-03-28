import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IOwner } from "@/types/owner";
import { TrendingUp, Users, UserCog } from "lucide-react";

interface OwnerBusinessOverviewProps {
  stats: IOwner["stats"];
}

export default function OwnerBusinessOverview({
  stats,
}: OwnerBusinessOverviewProps) {
  const statCards = [
    {
      title: "Total Revenue",
      value: `₹${(stats.revenue.amount / 1000000).toFixed(1)}M`,
      change: `+${stats.revenue.growth}% from last year`,
      icon: TrendingUp,
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100",
    },
    {
      title: "Active Members",
      value: stats.members.count.toLocaleString(),
      change: `+${stats.members.growth}% this month`,
      icon: Users,
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-100",
    },
    {
      title: "Total Staff",
      value: stats.staff.count,
      change: stats.staff.type,
      icon: UserCog,
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-100",
    },
  ];

  return (
    <Card className="p-4 sm:p-6 bg-white/90 backdrop-blur-md border-none  rounded-xl">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
        Business Overview
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {statCards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "p-3 sm:p-4 rounded-lg transition-all duration-200",
              "hover:shadow-md hover:scale-[1.02]",
              "border border-transparent hover:border-opacity-50",
              card.bgColor,
              card.borderColor
            )}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div
                className={cn(
                  "text-sm sm:text-base font-medium",
                  card.textColor
                )}
              >
                {card.title}
              </div>
              <div
                className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-lg",
                  "flex items-center justify-center",
                  card.bgColor,
                  "shadow-sm"
                )}
              >
                <card.icon
                  className={cn("w-4 h-4 sm:w-5 sm:h-5", card.textColor)}
                />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
              {card.value}
            </div>
            <div className={cn("text-xs sm:text-sm", card.textColor)}>
              {card.change}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
