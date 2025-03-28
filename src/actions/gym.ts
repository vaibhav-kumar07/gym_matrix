"use server";

import {
  deleteCookie,
  getCookieValue,
  setCookie,
} from "../lib/common/cookie-utils";
import { loginUser, registerUser } from "@/lib/auth";
import { gymBusinessHours, registerGym } from "@/lib/gym";
import { apiResponse } from "@/lib/utils";
import { IGym, IGymBusinessHour } from "@/types/gym";

const gymTag = "gym";

export async function gymRegisterHandler(payload: IGym): Promise<apiResponse> {
  const result = await registerGym(payload);

  return {
    status: result.status,
    data: result?.data,
    error: result.error,
  };
}

export async function loginUserHandler(payload: {
  phone: string;
  password: string;
}): Promise<apiResponse> {
  const result = await loginUser(payload);
  console.log("result", result.status);
  if (result.status) {
    await setCookie("token", result.data.token);
  }

  return {
    status: result.status,
    data: result?.data,
    error: result.error,
  };
}

export async function setDeviceIdHandler(deviceId: string) {
  await setCookie("deviceid", deviceId);
}

export async function logoutUserHandler() {
  await setCookie("token", "");
}

export async function clearCookie(key: string) {
  await deleteCookie(key);
}

interface AuthResult {
  success: boolean;
  error?: string;
  redirect?: string;
}

export async function handleAuthSuccess(phone: string): Promise<AuthResult> {
  try {
    // Get the user's role from cookie
    const userRole = await getCookieValue("role");
    if (!userRole) {
      return {
        success: false,
        error: "No role found",
        redirect: "/",
      };
    }

    // Set authentication token
    // await setCookie("token", "true");
    await setCookie("phone", phone);

    // Determine redirect path based on role
    const redirectPath = userRole === "owner" ? "/owner/gym" : "/member/gym";

    return {
      success: true,
      redirect: redirectPath,
    };
  } catch (error) {
    return {
      success: false,
      error: "Authentication failed",
      redirect: "/",
    };
  }
}

export async function AddgymBusinessHoursHandler(
  payload: IGymBusinessHour
): Promise<apiResponse> {
  const result = await gymBusinessHours(payload);
  return {
    status: result.status,
    data: result?.data,
    error: result.error,
  };
}
