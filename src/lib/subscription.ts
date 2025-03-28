import { QueryParameters } from "../types/common";
import {
  ISubscription,
  ISubscriptionDurationType,
  ISubscriptionParams,
} from "../types/subscription";
import * as FetchUtils from "@/lib/common/fetch-utils";
import qs from "query-string";

export const SubscriptionPlans = [
  {
    _id: "",
    gymId: "",
    name: "Basic",
    duration: 1, // Monthly
    image:
      "https://public.readdy.ai/ai/img_res/56ddbd9ab3297bcbad55af1b9a5d05cb.jpg",
    price: 29,
    features: [
      "Access to gym equipment",
      "Basic fitness classes",
      "Locker access",
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "",
    gymId: "",
    name: "Pro",
    image:
      "https://public.readdy.ai/ai/img_res/56ddbd9ab3297bcbad55af1b9a5d05cb.jpg",
    duration: 1, // Monthly
    price: 59,
    features: [
      "All Basic features",
      "Personal trainer",
      "Nutrition planning",
      "Premium classes",
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "",
    gymId: "",
    name: "Basic Annual",
    image:
      "https://public.readdy.ai/ai/img_res/56ddbd9ab3297bcbad55af1b9a5d05cb.jpg",
    duration: 12, // Yearly
    price: 290,
    features: [
      "Access to gym equipment",
      "Basic fitness classes",
      "Locker access",
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "",
    gymId: "",
    name: "Pro Annual",
    duration: 12, // Yearly
    price: 590,
    image:
      "https://public.readdy.ai/ai/img_res/56ddbd9ab3297bcbad55af1b9a5d05cb.jpg",
    features: [
      "All Basic features",
      "Personal trainer",
      "Nutrition planning",
      "Premium classes",
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const apiUrl = `${process.env.NEXT_PUBLIC_GYM_URL}`;
const subscriptiontag = "subscriptions";
export async function getSubscriptionPlans(params: ISubscriptionParams) {
  const response = await FetchUtils.get(
    `${apiUrl}/subscriptions?${buildQueryString(params)}`,
    {
      isWithToken: true,
      isWithCache: true,
      cacheTags: [subscriptiontag],
    }
  );

  // Filter plans based on the active tab (monthly or yearly)
  // const filteredPlans = SubscriptionPlans.filter((plan) =>
  //   activeTab === ISubscriptionDurationType.Monthly
  //     ? plan.duration === 1
  //     : plan.duration === 12
  // );
  // console.log("response ", response);
  return {
    status: response.status,
    data: response.data as ISubscription[],
    error: null,
  };
}

export async function getSubscriptionById(id: string) {
  const response = await FetchUtils.get(`${apiUrl}/subscriptions/${id}`, {
    isWithToken: true,
    isWithCache: true,
    cacheTags: [subscriptiontag],
  });
  console.log("data: " + response);
  return response;
}

export async function createSubscription(payload: ISubscription) {
  const body = { ...payload };
  console.log("body : ", body);
  const response = await FetchUtils.post(`${apiUrl}/subscriptions`, body, {
    isWithToken: true,
    isWithCache: false,
    cacheTags: [subscriptiontag],
  });
  // console.log("Success", response);
  return response;
}

const buildQueryString = (params: ISubscriptionParams) => {
  const queryParams: QueryParameters = {};
  // queryParams["searchText"] = params.searchText;
  // queryParams["sort"] = `${params.sortColumn}:${params.sortOrder} `;
  // queryParams["pagination[pageSize]"] = params?.rowsPerPage?.toString();
  // queryParams["pagination[page]"] = params?.page?.toString();
  queryParams["filters[duration][$eq]"] =
    params?.duration === ISubscriptionDurationType.Monthly ? "1" : "12";
  queryParams["filters[gymId][$eq]"] = params.gymId?.toString();
  // queryParams["filters[status][$eq]"] = params.status?.toString() || "";

  //   let deliveryDateEnd = params.deliveryDateEnd;
  //   if (!deliveryDateEnd) {
  //     deliveryDateEnd = params.deliveryDateStart;
  //   }
  //   if (params.deliveryDateStart) {
  //     queryParams["filters[updated_on][$between]"] =
  //       "dt" + params.deliveryDateStart + "," + deliveryDateEnd;
  //   }

  return qs.stringify(queryParams, {
    arrayFormat: "comma",
    skipNull: true,
    skipEmptyString: true,
    encode: false,
  });
};
