import * as FetchUtils from "@/lib/common/fetch-utils";
import Logger from "@/utils/logger";
import { apiResponse } from "./utils";
import { setCookie } from "./common/cookie-utils";

const logger = new Logger("lib/auth");
const apiUrl = `${process.env.NEXT_PUBLIC_URL}/auth`;


export async function registerUser(payload: {
    name: string;
    phone: string;
    password: string;
    role: string
}): Promise<apiResponse> {
    const response = await FetchUtils.post(`${apiUrl}/register`, payload, {
        isWithToken: false,
        isWithCache: false,
    });

    return response;
}

export async function loginUser(payload: {
    phone: string;
    password: string;
}): Promise<apiResponse> {
    const response = await FetchUtils.post(`${apiUrl}/login`, payload, {
        isWithToken: false,
        isWithCache: false,
    });

    return response;
}

export async function authorize(): Promise<{ status: boolean; data?: any; error?: string }> {
    const response = await FetchUtils.get(`${apiUrl}/validate`, {
        isWithToken: true,
        isWithCache: false,
    });
    logger.log("Authorize user response", "debug", response);
    return response;
}
