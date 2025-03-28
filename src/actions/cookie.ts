"use server";

import {
  getCookieValue,
  setCookie,
  hasCookie,
  deleteCookie,
} from "@/lib/common/cookie-utils";

interface CookieData {
  key: string;
  value: string;
}

export async function setCookieHandler(key: string, value: string) {
  try {
    await setCookie(key, value);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Failed to set cookie",
    };
  }
}

export async function getCookieHandler(key: string) {
  try {
    const value = await getCookieValue(key);
    return { success: true, value };
  } catch (error) {
    return {
      success: false,
      error: "Failed to get cookie",
    };
  }
}

export async function hasCookieHandler(key: string) {
  try {
    const foundCookie = await hasCookie(key);
    return { success: true, foundCookie };
  } catch (error) {
    return {
      success: false,
      error: "Failed to check if cookie exists",
    };
  }
}

export async function deleteCookieHandler(key: string) {
  try {
    await deleteCookie(key);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Failed to delete cookie",
    };
  }
}
