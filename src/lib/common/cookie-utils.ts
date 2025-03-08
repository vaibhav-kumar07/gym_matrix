"use server";
import { cookies } from "next/headers";
import Logger from "@/utils/logger";
const logger = new Logger("lib/common/cookie-utils");

export async function getCookieValue(key: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get(key);
  if (!token) {
    log("Cookie not found with key:", key);
    return "";
  }
  return token.value;
}

export async function setCookie(key: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: key,
    value,
    httpOnly: true,
    path: "/",
  });

  log("Cookie set with key:", key, value);
}

export async function hasCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.has(key);
}

export async function deleteCookie(key: string) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
  log("Cookie deleted with key:", key);
}


function log(msg: string, ...args: any) {
  logger.log(msg, "debug", ...args);
}
