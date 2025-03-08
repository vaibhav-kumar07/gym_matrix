"use server";
import { loginUser, registerUser } from "@/lib/auth";
import { apiResponse } from "@/lib/utils";
import { deleteCookie, setCookie } from "../lib/common/cookie-utils";


export async function registerUserHandler(payload: {
    name: string;
    phone: string;
    password: string;
    role: string;
    gymId?: string;
}): Promise<apiResponse> {
    const result = await registerUser(payload);
    console.log(result);
    if (result.status) {
        await setCookie("token", result.data.token);
    }
    return result;
}

export async function loginUserHandler(payload: { phone: string; password: string }): Promise<apiResponse> {
    const result = await loginUser(payload);
    console.log("result", result.status);
    if (result.status) {
        await setCookie("token", result.data.token);
    }
    return result;
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

