import { Card } from "@/components/ui/card";
import { IEvent } from "@/types/profile";
import { Dumbbell } from "lucide-react";
import { FaRunning } from "react-icons/fa";

const iconMap = {
  running: FaRunning,
  dumbbell: Dumbbell,
};

export default function MemberUpcomingEvents({ events }: { events: IEvent[] }) {
  return (
    <Card className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {events.map((event, index) => {
          const Icon = iconMap[event.icon as keyof typeof iconMap] || Dumbbell;
          return (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString()} • {event.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
