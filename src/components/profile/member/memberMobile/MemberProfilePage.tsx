"use client";

import MemberAccountInfo from "./MemberAccountInfo";
import MemberPersonalBests from "./MemberPersonalBests";
import MemberProfileHeader from "./MemberProfileHeader";
import MemberUpcomingEvents from "./MemberUpcomingEvents";
import MemberWorkoutPreferences from "./MemberWorkoutPrefrences";
import MemeberProfilePageSkeleton from "./MemeberProfilePageSkeleton";
import { getMobileUserProfile } from "@/lib/profile";
import { IUserProfile } from "@/types/profile";
import { useEffect, useState } from "react";

export default function MemberProfilePage() {
  const [profile, setProfile] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMobileUserProfile("1");
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading || !profile) {
    return <MemeberProfilePageSkeleton />;
  }

  return (
    <div className=" max-w-lg mx-auto px-4 py-6 space-y-6">
      <MemberProfileHeader
        coverImage={profile.coverImage}
        profileImage={profile.profileImage}
        name={profile.name}
        bio={profile.bio}
        stats={profile.stats}
      />
      <MemberPersonalBests bests={profile.personalBests} />
      <MemberUpcomingEvents events={profile.upcomingEvents} />
      <MemberWorkoutPreferences preferences={profile.preferences} />
      <MemberAccountInfo
        memberSince={profile.memberSince}
        totalWorkouts={profile.totalWorkouts}
      />
    </div>
  );
}
