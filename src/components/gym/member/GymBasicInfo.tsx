import { Label } from "@/components/common/Label";
import { Badge } from "@/components/ui/badge";
import { IGym } from "@/types/gym";
import { CheckCircle, MapPin, Star } from "lucide-react";
import React from "react";

export default function GymBasicInfo({ gym }: { gym: IGym }) {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <Label size="sm" className=" font-bold text-gray-900">
          {gym?.name}
        </Label>
        <Badge className="text-lg bg-blue-100 text-blue-800 flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
        </Badge>
      </div>

      {/* Address */}
      <section id="overview" className="mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="mr-2" size={18} />
          {gym.address && (
            <Label size="sm" className="text-gray-600">
              {`${gym.address.street}, ${gym.address.city}, ${gym.address.state}, ${gym.address.country}, ${gym.address.postalCode}`}
            </Label>
          )}
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="w-full flex flex-col gap-2">
        <Label size="sm" className="font-bold text-gray-900">
          Facilities
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {gym.gymfeature?.featureIds.map((feature, index) => (
            <div
              key={index}
              className="flex items-center py-1 px-2 border bg-gray-100 rounded-sm"
            >
              <CheckCircle className="text-green-500 mr-2" size={14} />
              <Label size="xs">{feature.name}</Label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
