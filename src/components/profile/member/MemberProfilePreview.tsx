import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IMember } from "@/types/member";
import {
  Upload,
  Mail,
  Phone,
  Cake,
  MapPin,
  Globe,
  CheckCircle,
} from "lucide-react";
import React, { useRef } from "react";

interface Props {
  member: IMember;
  onProfilePictureChange: (file: File) => void;
}

const MemberProfilePreview: React.FC<Props> = ({
  member,
  onProfilePictureChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onProfilePictureChange(event.target.files[0]);
    }
  };

  return (
    <div className="bg-white p-6  border-gray-200">
      {/* Profile Section */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar className="w-32 h-32 ring-4 ring-gray-300 shadow-lg">
            <AvatarImage src={member.profilePicture} alt="Profile" />
            <AvatarFallback className="bg-gray-200 text-gray-600 text-4xl">
              ?
            </AvatarFallback>
          </Avatar>
          <button
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            onClick={handleFileSelect}
          >
            <Upload className="h-5 w-5 text-gray-600" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{member.name}</h2>
            <Badge className="bg-green-500 text-white flex items-center gap-1 px-3">
              <CheckCircle className="h-4 w-4" /> {member.membershipStatus}
            </Badge>
          </div>
          <p className="text-gray-600 capitalize">{member.gender}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-6 grid gap-4">
        <div className="flex items-center gap-3 text-gray-700">
          <Mail className="h-5 w-5 text-blue-600" />
          <span>{member.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Phone className="h-5 w-5 text-green-600" />
          <span>{member.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Cake className="h-5 w-5 text-purple-600" />
          <span>{member.dateOfBirth}</span>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-800">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-600" />
            <span>{member.address.street}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            <span>{member.address.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            <span>{member.address.state}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            <span>{member.address.country}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            <span>{member.address.zipCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfilePreview;
