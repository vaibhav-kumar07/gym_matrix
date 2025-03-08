import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IUpcomingSession } from "@/lib/types/member";

interface UpcomingSessionsProps {
  sessions: IUpcomingSession[];
}

export default function UpcomingSessions({ sessions }: UpcomingSessionsProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Sessions</h2>
        <Button
          variant="ghost"
          className="text-sm text-blue-500 !rounded-button"
        >
          View All
        </Button>
      </div>

      {sessions.map((session) => (
        <Card key={session.id} className="mb-4 p-4 bg-white rounded-lg border">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={session.trainerImage} />
              <AvatarFallback>{session.trainer[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium">{session.type}</h3>
              <p className="text-sm text-gray-500">{session.trainer}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {session.date}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {session.time}
                </Badge>
              </div>
            </div>
            <Button size="sm" className="!rounded-button">
              Details
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
