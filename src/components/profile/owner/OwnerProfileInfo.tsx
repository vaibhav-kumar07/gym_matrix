import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IOwner } from "@/lib/types/owner";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Dumbbell,
  Utensils,
  Briefcase,
  Shield,
  Star,
} from "lucide-react";

interface OwnerProfileInfoProps {
  owner: IOwner;
}

const getCertificationIcon = (cert: string) => {
  const lowerCert = cert.toLowerCase();
  if (lowerCert.includes("trainer") || lowerCert.includes("fitness")) {
    return <Dumbbell className="w-3.5 h-3.5" />;
  }
  if (lowerCert.includes("nutrition")) {
    return <Utensils className="w-3.5 h-3.5" />;
  }
  if (lowerCert.includes("business")) {
    return <Briefcase className="w-3.5 h-3.5" />;
  }
  return <GraduationCap className="w-3.5 h-3.5" />;
};

export default function OwnerProfileInfo({ owner }: OwnerProfileInfoProps) {
  return (
    <Card className="relative w-full h-full p-4 sm:p-5 bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-md border-none  rounded-xl overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-100 rounded-full -ml-10 -mb-10 opacity-50" />

      {/* Profile Header */}
      <div className="relative text-center mb-4 sm:mb-5">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-lg opacity-20" />
          <Avatar className="relative h-24 w-24 sm:h-28 sm:w-28 mx-auto mb-2 sm:mb-3 ring-2 ring-white shadow-md">
            <AvatarImage src={owner.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-lg sm:text-xl">
              {owner.nameInitials}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-sm text-[10px] sm:text-xs"
            >
              <Shield className="w-3 h-3 mr-0.5" />
              Verified
            </Badge>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {owner.name}
        </h2>
        <p className="text-gray-500 mt-1 text-sm">{owner.role}</p>
      </div>

      {/* Contact Information */}
      <div className="relative space-y-2 sm:space-y-3 mb-4 sm:mb-5">
        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-200 shadow-sm hover:shadow">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-sm">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-gray-500">Email</p>
            <p className="text-xs sm:text-sm text-gray-900 font-medium truncate">
              {owner.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-200 shadow-sm hover:shadow">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-sm">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-gray-500">Phone</p>
            <p className="text-xs sm:text-sm text-gray-900 font-medium">
              {owner.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-200 shadow-sm hover:shadow">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-gray-500">Location</p>
            <p className="text-xs sm:text-sm text-gray-900 font-medium truncate">
              {owner.address}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-200 shadow-sm hover:shadow">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-sm">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-gray-500">Member Since</p>
            <p className="text-xs sm:text-sm text-gray-900 font-medium">
              {owner.joinDate}
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-4 sm:my-5" />

      {/* Certifications */}
      <div className="relative space-y-2 sm:space-y-3">
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-amber-500" />
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
            Certifications
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {owner.certifications.map((cert, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={cn(
                "flex items-center gap-1 px-2.5 py-1 rounded-md",
                "bg-white/80 hover:bg-white transition-all duration-200",
                "border border-gray-200",
                "text-gray-700 hover:text-gray-900",
                "text-[10px] sm:text-xs"
              )}
            >
              {getCertificationIcon(cert)}
              <span className="font-medium truncate">{cert}</span>
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
