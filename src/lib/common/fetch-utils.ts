"use server";
import Logger from "@/utils/logger";
import { revalidateTag } from "next/cache";
import { getCookieHandler } from "@/actions/cookie";

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
    status: result.status,
    data: result.data,
    statusCode: response.status,
    meta:result.meta,
  };
};

export const get = async (url: string, requestOptions: RequestOptions) => {
  try {
    const requestInput: any = await _getRequestInput(
      "GET",
      null,
      requestOptions
    );
    logger.log(
      "requestInput in FetchUtils for GET url:",
      "debug",
      url,
      requestInput
    );
    const rawResponse = await fetch(url, requestInput);
    return handleResponse(rawResponse);
  } catch (e) {
    logger.log("Error in FetchUtils for GET url:", "error", url, e);
    throw e;
  }
};

export const post = async (
  url: string,
  body: any,
  requestOptions: RequestOptions
) => {
  try {
    const requestInput: any = _getRequestInput("POST", body, requestOptions);
    logger.log(
      "requestInput in FetchUtils for POST url:",
      "debug",
      url,
      body,
      requestInput
    );
    const rawResponse = await fetch(url, requestInput);
    const response = await handleResponse(rawResponse);
    if (requestOptions.cacheTags?.length)
      requestOptions.cacheTags.forEach((tag) => revalidateTag(tag));
    return response;
  } catch (e) {
    logger.log("Error in FetchUtils for POST url:", "error", url, e);
    throw e;
  }
};

export const patch = async (
  url: string,
  body: any,
  requestOptions: RequestOptions
) => {
  try {
    const requestInput: any = _getRequestInput("PATCH", body, requestOptions);
    logger.log(
      "requestInput in FetchUtils for PATCH url:",
      "debug",
      url,
      body,
      requestInput
    );
    const rawResponse = await fetch(url, requestInput);
    const response = await handleResponse(rawResponse);
    if (requestOptions.cacheTags?.length)
      requestOptions.cacheTags.forEach((tag) => revalidateTag(tag));
    return response;
  } catch (e) {
    logger.log("Error in FetchUtils for PATCH url:", "error", url, e);
    throw e;
  }
};

export const put = async (
  url: string,
  body: any,
  requestOptions: RequestOptions
) => {
  try {
    const requestInput: any = _getRequestInput("PUT", body, requestOptions);
    logger.log(
      "requestInput in FetchUtils for PUT url:",
      "debug",
      url,
      body,
      requestInput
    );
    const rawResponse = await fetch(url, requestInput);
    const response = await handleResponse(rawResponse);
    if (requestOptions.cacheTags?.length)
      requestOptions.cacheTags.forEach((tag) => revalidateTag(tag));
    return response;
  } catch (e) {
    logger.log("Error in FetchUtils for PUT url:", "error", url, e);
    throw e;
  }
};

export const deleteData = async (
  url: string,
  requestOptions: RequestOptions,
  body?: any
) => {
  try {
    const requestInput: any = _getRequestInput("DELETE", body, requestOptions);
    logger.log(
      "requestInput in FetchUtils for DELETE url:",
      "debug",
      url,
      requestInput
    );
    const rawResponse = await fetch(url, requestInput);
    const response = await handleResponse(rawResponse);
    if (requestOptions.cacheTags?.length)
      requestOptions.cacheTags.forEach((tag) => revalidateTag(tag));
    return response;
  } catch (e) {
    logger.log("Error in FetchUtils for DELETE url:", "error", url, e);
    throw e;
  }
};

const _getRequestInput = async (
  method: string,
  body: any,
  options: RequestOptions
) => {
  const requestInput: any = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) requestInput.body = JSON.stringify(body);
  if (options.isWithToken) {
    const token = await _getAccessToken();
    console.log("token", token);
    if (!token) throw new Error("Token not found");
    requestInput.headers.Authorization = `Bearer ${token}`;
  }
  if (method !== "GET" && options.cacheTags) {
    requestInput.next = { tags: options.cacheTags };
  } else {
    requestInput.cache = "no-cache";
  }
  return requestInput;
};
export const _getAccessToken = async (): Promise<string> =>
  (await getCookieHandler("token")).value
