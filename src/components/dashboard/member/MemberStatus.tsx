import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IMemberStats } from "@/lib/types/member";
import { Crown } from "lucide-react";

interface MembershipStatusProps {
  stats: IMemberStats;
}

export default function MembershipStatus({ stats }: MembershipStatusProps) {
  return (
    <Card className="relative mb-6 overflow-hidden bg-white border rounded-lg">
      {/* Content */}
      <div className="relative p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-gray-900" />
              <h3 className="text-base font-medium text-gray-900">
                Premium Member
              </h3>
            </div>
            <p className="text-sm text-gray-500">
              {stats.remainingDays} days remaining
            </p>
          </div>

          <Button
            // variant="ghost"
            className="h-8 px-3 text-sm border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-colors"
          >
            Renew
          </Button>
        </div>

        {/* Progress indicator */}
        <div className="mt-3">
          <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full transition-all duration-500"
              style={{
                width: `${Math.round((stats.remainingDays / 365) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
