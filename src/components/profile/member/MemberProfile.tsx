"use client";

import MemberProfileForm from "./MemberProfileForm";
import MemberProfilePreview from "./MemberProfilePreview";
import { IGender, IMember, IMemberStatus } from "@/types/member";
import React, { useState } from "react";

const MemberProfile: React.FC = () => {
  const [member, setMember] = useState<IMember>({
    name: "Member Name",
    email: "member@example.com",
    phone: "0000000000",
    profilePicture:
      "https://public.readdy.ai/ai/img_res/f17b183de1b42d91440a7bd7e6a82daf.jpg",
    dateOfBirth: "1990-01-15",
    gender: IGender.MALE,
    membershipStatus: IMemberStatus.ACTIVE,
    address: {
      street: "demo street",
      city: "demo city",
      state: "demo state",
      country: "demo country",
      zipCode: "000000",
    },
  });

  // Function to handle profile picture update
  const handleProfilePictureChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setMember((prev) => ({
        ...prev,
        profilePicture: reader.result as string, // Convert file to Base64 URL
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 divide-y">
      <MemberProfilePreview
        member={member}
        onProfilePictureChange={handleProfilePictureChange}
      />
      <MemberProfileForm member={member} setMember={setMember} />
    </div>
  );
};

export default MemberProfile;
