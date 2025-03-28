import InfoRow from "./MemberGymInog";
import { GymDialogButton } from "./gymDialog/GymDialogButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IGym } from "@/types/gym";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

interface MemberGymCardProps {
  gym: IGym;
}

const MemberGymCard: React.FC<MemberGymCardProps> = ({ gym }) => {
  return (
    <Card
      key={gym._id}
      className="rounded-2xl overflow-hidden shadow-md border bg-white flex flex-col"
    >
      {/* Gym Image */}
      <div className="relative h-52 w-full">
        {gym?.media && gym?.media.length > 0 ? (
          <Image
            src={gym.media[0]} // Display first image
            alt={gym.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      {/* Gym Info (Wrapped in a flex container to push button down) */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-grow">
          {/* Title & Status */}
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{gym.name}</h3>
            <Badge className="px-2 py-1 text-xs" variant="secondary">
              {gym.status}
            </Badge>
          </div>

          <InfoRow
            icon={MapPin}
            text={`${gym.address.city}, ${gym.address.state}`}
            className="mt-1 text-gray-500"
          />

          {/* Contact Info */}
          <InfoRow
            icon={Phone}
            text={gym.contactInfo.phoneNumber}
            className="mt-2"
          />
          <InfoRow icon={Mail} text={gym.contactInfo.email} />
          {/* Business Hours */}
          {gym?.businessHours && gym?.businessHours?.timings?.length > 0 && (
            <div className="flex items-center text-gray-500 text-sm mt-2">
              <Clock size={16} className="mr-1" />
              <span>
                {gym.businessHours.timings[0].openTime} -{" "}
                {gym.businessHours.timings[0].closeTime}
              </span>
            </div>
          )}

          {/* Features */}
          <div className="flex flex-wrap gap-2 my-3">
            {gym.gymfeature && gym.gymfeature.featureIds.length > 0
              ? gym.gymfeature.featureIds.slice(0, 3).map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-100 text-gray-800"
                  >
                    {feature.name}
                  </Badge>
                ))
              : null}

            {gym.gymfeature && gym.gymfeature.featureIds.length > 3 && (
              <Badge className="bg-gray-200 text-gray-700 px-2 py-1 text-xs">
                +{gym.gymfeature.featureIds.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* CTA Button - Always at Bottom */}
        {/* <Button className="w-full mt-auto text-white rounded-lg text-sm py-2 font-medium">
          View Details
        </Button> */}
        <GymDialogButton gym={gym} />
      </div>
    </Card>
  );
};

export default MemberGymCard;
