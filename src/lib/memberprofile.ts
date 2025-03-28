import { IMember } from "../types/member";
import * as FetchUtils from "@/lib/common/fetch-utils";
import { ISubsLinkingToProfile } from "@/types/subscription";

// import { AnyDataTag } from "@tanstack/react-query";
// import qs from "query-string";

const apiUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}`;
const memberProfiletag = "memberprofile";
export async function getMemberProfile() {
  const response = await FetchUtils.get(`${apiUrl}/members/me`, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [memberProfiletag],
  });
  return response;
}

export async function createMemberProfile(payload: IMember) {
  let body = { ...payload };
  const response = await FetchUtils.post(`${apiUrl}/members`, body, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [memberProfiletag],
  });
  console.log("response", response);
  return response;
}

//write a function linkn member profile to subscribed gym
export async function linkMemberProfileToGym(payload: ISubsLinkingToProfile) {
  let body = { ...payload };
  const response = await FetchUtils.post(`${apiUrl}/members/assigngym`, body, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [memberProfiletag],
  });
  return response;
}
