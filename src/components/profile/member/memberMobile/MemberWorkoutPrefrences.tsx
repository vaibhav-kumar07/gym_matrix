import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IWorkoutPreferences } from "@/types/profile";

export default function MemberWorkoutPreferences({
  preferences,
}: {
  preferences: IWorkoutPreferences;
}) {
  return (
    <Card className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Workout Preferences</h3>
      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-600 mb-2">
            Preferred Workout Days
          </div>
          <div className="flex flex-wrap gap-2">
            {preferences.workoutDays.map((day, index) => (
              <Badge key={index} variant="secondary">
                {day}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-2">Favorite Workouts</div>
          <div className="flex flex-wrap gap-2">
            {preferences.favoriteWorkouts.map((workout, index) => (
              <Badge key={index} variant="outline">
                {workout}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-2">Fitness Level</div>
          <Badge className="bg-blue-100 text-blue-700">
            {preferences.fitnessLevel}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
