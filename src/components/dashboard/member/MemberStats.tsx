import { Label } from "@/components/common/Label";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { IMemberStats } from "@/lib/types/member";
import { Flame } from "lucide-react";

interface MemberStatsProps {
  stats: IMemberStats;
}

export default function MemberStats({ stats }: MemberStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <Card className="p-4 bg-white shadow-sm rounded-lg">
        <div className="text-sm text-gray-500">Weekly Attendance</div>
        <div className="mt-2 flex items-end gap-1">
          <Label className="text-2xl font-semibold">
            {stats.weeklyAttendance}%
          </Label>
        </div>
        <Progress value={stats.weeklyAttendance} className="mt-2" />
      </Card>
      <Card className="p-4 bg-white shadow-sm rounded-lg">
        <div className="text-sm text-gray-500">Workout Streak</div>
        <div className="mt-2 flex items-end gap-1">
          <Label className="text-2xl font-semibold">{stats.streak}</Label>
          <Label className="text-sm text-gray-500 mb-1">days</Label>
        </div>
        <div className="mt-2  flex items-center gap-1">
          <Flame className="w-4 h-4 text-orange-500" />
          <Label size={"sm"} className="text-orange-500">
            Keep it up!
          </Label>
        </div>
      </Card>
    </div>
  );
}
