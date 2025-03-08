import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

interface AccountInfoProps {
  memberSince: string;
  totalWorkouts: number;
}

export default function AccountInfo({
  memberSince,
  totalWorkouts,
}: AccountInfoProps) {
  return (
    <Card className="p-4 border rounded-lg mb-20">
      <h3 className="font-semibold mb-4">Account Info</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Member Since</span>
          <span>{new Date(memberSince).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Workouts</span>
          <span>{totalWorkouts}</span>
        </div>
        <Button className="w-full mt-4" size="lg">
          <Settings className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>
    </Card>
  );
}
