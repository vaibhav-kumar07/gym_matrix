import "server-only";
import { revalidateTag } from "next/cache";
import { getCookieValue } from "./cookie-utils";
import Logger from "@/utils/logger";

export type RequestOptions = {
    isWithToken: boolean;
    isWithCache?: boolean;
    cacheTags?: string[];
};

const logger = new Logger("lib/common/FetchUtils");

const handleResponse = async (response: Response) => {
    const result = await response.json();
    if (!response.ok) {
        return {
            status: false,
            error: result.error || result.message || "Something went wrong",
            statusCode: response.status,
        };
    }
    return {
        status: true,
        data: result.data,
        statusCode: response.status,
    };
};

const fetchRequest = async (url: string, method: string, body: any, requestOption: RequestOptions) => {
    try {
        const requestInput: any = _getRequestInput(method, body, requestOption);
        logger.log(`Request ${method} to ${url}`, "debug", body, requestInput);

        const response = await fetch(url, requestInput);
        const formattedResponse = await handleResponse(response);

        if (requestOption.cacheTags && requestOption.cacheTags.length > 0) {
            requestOption.cacheTags.forEach((tag) => revalidateTag(tag));
        }

        return formattedResponse;
    } catch (error) {
        logger.log(`Error in FetchUtils for ${method} ${url}`, "error", error);
        return { status: false, error: "Network error or server unreachable", statusCode: 500 };
    }
};

// HTTP Methods
export const get = async (url: string, requestOptions: RequestOptions) => fetchRequest(url, "GET", null, requestOptions);
export const post = async (url: string, body: any, requestOption: RequestOptions) => fetchRequest(url, "POST", body, requestOption);
export const patch = async (url: string, body: any, requestOption: RequestOptions) => fetchRequest(url, "PATCH", body, requestOption);
export const put = async (url: string, body: any, requestOption: RequestOptions) => fetchRequest(url, "PUT", body, requestOption);
export const deleteData = async (url: string, requestOption: RequestOptions, body?: any) => fetchRequest(url, "DELETE", body, requestOption);

// Request Config Helper
const _getRequestInput = (method: string, body: any, options: RequestOptions) => {
    const requestInput: any = { method };

    if (body) requestInput.body = JSON.stringify(body);
    if (options.isWithToken) {
        const token = _getAccessToken();
        if (!token) throw new Error("Token not found");
        requestInput.headers = { Authorization: `Bearer ${token}` };
    }
    if (options.isWithCache) {
        requestInput.next = { tags: options.cacheTags };
    } else {
        requestInput.cache = "no-cache";
    }

    requestInput.headers = {
        "Content-Type": "application/json",
        ...requestInput.headers,
    };

    return requestInput;
};

// Get Token
export const _getAccessToken = async (): Promise<string> => await getCookieValue("token");
