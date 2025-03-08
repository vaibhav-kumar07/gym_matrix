import CommonButton from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FitnessSession } from "@/lib/types/session";
import { Clock, MapPin, Users, Crown } from "lucide-react";

interface SessionCardProps {
  session: FitnessSession;
  isPremiumMember: boolean;
  // onViewDetails: (session: FitnessSession) => void;
  // onBookSession: (session: FitnessSession) => void;
}

export function SessionCard({
  session,
  isPremiumMember,
}: // onViewDetails,
// onBookSession,
SessionCardProps) {
  return (
    <Card className="overflow-hidden border shadow-none hover:shadow-lg transition-all duration-500 rounded-xl border-box">
      <div className="relative h-42 overflow-hidden">
        <img
          src={session.coverImage}
          alt={session.title}
          className="w-full h-full object-cover"
        />
        {session.isPremiumOnly && (
          <div className="absolute top-3 right-0">
            <Badge className="bg-yellow-500 text-white rounded-r-none rounded-l-lg">
              <Crown className="w-4 h-4 mr-1" />
            </Badge>
          </div>
        )}
      </div>

      <div className="space-y-3 px-4 pt-2 pb-4">
        <div className="flex items-center space-x-4 mb-2">
          <Avatar className="h-8 w-8 ring-2 ring-offset-2 ring-gray-100">
            <AvatarImage
              src={session.trainer.image}
              alt={session.trainer.name}
            />
            <AvatarFallback>
              {session.trainer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <Label size={"sm"} className="font-medium text-gray-900">
              {session.trainer.name}
            </Label>
            <p className="text-sm text-gray-500">
              {session.trainer.specialization}
            </p>
          </div>
        </div>

        <Label size={"lg"} className="font-bold text-gray-900 mb-6">
          {session.title}
        </Label>

        <SessionInfo session={session} />

        <div className="flex items-center justify-between  border-t border-gray-100">
          <PriceDisplay
            price={session.price}
            isPremiumMember={isPremiumMember}
            isPremiumOnly={session.isPremiumOnly}
          />
          <SessionActions
            session={session}
            // onViewDetails={onViewDetails}
            // onBookSession={onBookSession}
          />
        </div>
      </div>
    </Card>
  );
}

function SessionInfo({ session }: { session: FitnessSession }) {
  return (
    <div className="space-y-3 ">
      <div className="flex items-center text-gray-600">
        <Clock className="w-4 h-4" />
        <Label size={"xs"} className="ml-3">
          {session.time} • {session.duration} min
        </Label>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-4 h-4" />
        <Label size={"xs"} className="ml-3">
          {session.location}
        </Label>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-4 h-4" />
        <Label size={"xs"} className="ml-3">
          {session.attendees}/{session.maxAttendees} spots
        </Label>
      </div>
    </div>
  );
}

function PriceDisplay({
  price,
  isPremiumMember,
  isPremiumOnly,
}: {
  price: number;
  isPremiumMember: boolean;
  isPremiumOnly: boolean;
}) {
  return (
    <Label size={"lg"} className=" font-bold text-gray-900">
      {isPremiumMember && isPremiumOnly ? "Free" : `$${price}`}
    </Label>
  );
}

function SessionActions({
  session,
}: // onViewDetails,
// onBookSession,
{
  session: FitnessSession;
  // onViewDetails: (session: FitnessSession) => void;
  // onBookSession: (session: FitnessSession) => void;
}) {
  const isFull = session.attendees >= session.maxAttendees;

  return (
    <div className="space-x-3">
      <CommonButton
        variant="outline"
        className="rounded-md px-3 py-3"
        // size={"sm"}
        // onClick={() => onViewDetails(session)}
      >
        Details
      </CommonButton>
      <CommonButton
        className="rounded-md px-3 py-3"
        size={"sm"}
        // onClick={() => onBookSession(session)}
        disabled={isFull}
      >
        {isFull ? "Full" : "Book Now"}
      </CommonButton>
    </div>
  );
}
