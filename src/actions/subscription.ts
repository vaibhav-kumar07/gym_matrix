"use server";

//write ht esubscription createtion hnalder function that call function from lib and use here to create subscription  and us eth below function fro exaple
import { createSubscription } from "@/lib/subscription";
import { apiResponse } from "@/lib/utils";
import { ISubscription } from "@/types/subscription";

const subscriptionTag = "subscription";

export async function createSubscriptionHandler(
  payload: ISubscription
): Promise<apiResponse> {
  const result = await createSubscription(payload);
  return {
    status: result.status,
    data: result?.data,
    error: result.error,
  };
}
