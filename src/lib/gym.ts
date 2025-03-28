import { IGym, IGymBusinessHour } from "../types/gym";
import { apiResponse } from "./utils";
import * as FetchUtils from "@/lib/common/fetch-utils";

const apiUrl = `${process.env.NEXT_PUBLIC_GYM_URL}`;
const gymtag = "gym";

// export async function registerUser(payload: {
//     name: string;
//     phone: string;
//     password: string;
//     role: string
// }): Promise<apiResponse> {
//     const response = await FetchUtils.post(`${apiUrl}/register`, payload, {
//         isWithToken: false,
//         isWithCache: false,
//     });

//     return response;
// }

// export async function loginUser(payload: {
//     phone: string;
//     password: string;
// }): Promise<apiResponse> {
//     const response = await FetchUtils.post(`${apiUrl}/login`, payload, {
//         isWithToken: false,
//         isWithCache: false,
//     });

//     return response;
// }

// export async function authorize(): Promise<{ status: boolean; data?: any; error?: string }> {
//     const response = await FetchUtils.get(`${apiUrl}/validate`, {
//         isWithToken: true,
//         isWithCache: false,
//     });
//     logger.log("Authorize user response", "debug", response);
//     return response;
// }

export async function getMyGym() {
  const response = await FetchUtils.get(`${apiUrl}/gyms/me`, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [gymtag],
  });
  return response;
}

export async function getAllGyms() {
  const response = await FetchUtils.get(`${apiUrl}/gyms`, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [gymtag],
  });
  return response;
}

export async function getGymMyId(id: string): Promise<{
  status: Boolean;
  data: IGym;
  error: string;
}> {
  const response = await FetchUtils.get(`${apiUrl}/gyms/${id}`, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [gymtag],
  });
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}

export async function registerGym(payload: IGym): Promise<apiResponse> {
  let body = { ...payload };
  const response = await FetchUtils.post(`${apiUrl}/gyms`, body, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [gymtag],
  });

  return response;
}

export async function gymBusinessHours(
  payload: IGymBusinessHour
): Promise<apiResponse> {
  let body = { ...payload };
  const response = await FetchUtils.post(`${apiUrl}/gymbusinesshours`, body, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [gymtag],
  });

  return response;
}
