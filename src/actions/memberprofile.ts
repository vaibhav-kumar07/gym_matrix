"use server";

import { IMember } from "../types/member";
import {
  createMemberProfile,
  linkMemberProfileToGym,
} from "@/lib/memberprofile";
import { apiResponse } from "@/lib/utils";
import { ISubsLinkingToProfile } from "@/types/subscription";

export async function createMemberProfileHandler(
  memberData: IMember
): Promise<apiResponse> {
  // const response = await fetch("/api/member/profile", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(memberData),
  // });

  // const data = await response.json();
  const response = await createMemberProfile(memberData);
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}

export async function assingGymToMemberProfile(
  payload: ISubsLinkingToProfile
): Promise<apiResponse> {
  const response = await linkMemberProfileToGym(payload);
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}
