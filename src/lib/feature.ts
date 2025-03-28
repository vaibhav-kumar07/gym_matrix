import { QueryParameters } from "../types/common";
import { IFeatureParams } from "../types/feature";
import * as FetchUtils from "./common/fetch-utils";
import qs from "query-string";

interface Feature {
  title: string;
  description: string;
  icon: string;
  image: string;
  roles: string[]; // Roles that can access this feature
}

const features: Feature[] = [
  {
    title: "Member Management",
    description:
      "Streamline member onboarding and engagement with automated workflows.",
    icon: "fa-users",
    image:
      "https://public.readdy.ai/ai/img_res/056a4d2977b05a4c4eaea7d2fad1d40e.jpg",
    roles: ["owner"],
  },
  {
    title: "Class Scheduling",
    description: "Intelligent class planning and instructor allocation system.",
    icon: "fa-calendar-check",
    image:
      "https://public.readdy.ai/ai/img_res/5249d485f024abc4f4b660ae419ce953.jpg",
    roles: ["owner", "member"],
  },
  {
    title: "Performance Analytics",
    description: "Data-driven insights for business growth and optimization.",
    icon: "fa-chart-line",
    image:
      "https://public.readdy.ai/ai/img_res/27d28b05b8001803f367176c187dfe7d.jpg",
    roles: ["owner"],
  },
  {
    title: "Equipment Management",
    description: "Track maintenance, usage, and lifecycle of gym equipment.",
    icon: "fa-dumbbell",
    image:
      "https://public.readdy.ai/ai/img_res/cfae1dda897cc7ad4955c1998dd8098e.jpg",
    roles: ["owner"],
  },
  {
    title: "Payment Processing",
    description: "Secure and automated billing and subscription management.",
    icon: "fa-credit-card",
    image:
      "https://public.readdy.ai/ai/img_res/2394eccd40cf2116767c8021522e457f.jpg",
    roles: ["owner", "member"],
  },
  {
    title: "Business Reports",
    description: "Generate real-time reports to monitor gym performance.",
    icon: "fa-file-alt",
    image:
      "https://public.readdy.ai/ai/img_res/7c16bb3cd39a0940da6ad53b3d5eb8db.jpg",
    roles: ["owner"],
  },
  {
    title: "Class Booking",
    description: "Easily book workout sessions and reserve training slots.",
    icon: "fa-calendar-check",
    image:
      "https://public.readdy.ai/ai/img_res/5249d485f024abc4f4b660ae419ce953.jpg",
    roles: ["member"],
  },
  {
    title: "Workout Tracking",
    description: "Monitor progress and set fitness goals with real-time data.",
    icon: "fa-chart-line",
    image:
      "https://public.readdy.ai/ai/img_res/27d28b05b8001803f367176c187dfe7d.jpg",
    roles: ["member"],
  },
  {
    title: "Trainer Access",
    description:
      "Connect with certified trainers and get personalized guidance.",
    icon: "fa-user-md",
    image:
      "https://public.readdy.ai/ai/img_res/2394eccd40cf2116767c8021522e457f.jpg",
    roles: ["member"],
  },
  {
    title: "Subscription Management",
    description: "Easily renew, pause, or upgrade your membership plans.",
    icon: "fa-credit-card",
    image:
      "https://public.readdy.ai/ai/img_res/2394eccd40cf2116767c8021522e457f.jpg",
    roles: ["member"],
  },
];
const apiUrl = `${process.env.NEXT_PUBLIC_GYM_URL}`;
const revalidateTag = "features";
// Function to get filtered features based on role
export function getPageFeatures(role: "owner" | "member") {
  return features.filter((feature) => feature.roles.includes(role));
}

export async function getFeatures(params: IFeatureParams) {
  const response = await FetchUtils.get(
    `${apiUrl}/features?${buildQueryString(params)}`,
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [revalidateTag],
    }
  );
  return response;
}

const buildQueryString = (params: IFeatureParams) => {
  const queryParams: QueryParameters = {};
  queryParams["searchText"] = params.searchText;
  // queryParams["sort"] = `${params.sortColumn}:${params.sortOrder} `;
  // queryParams["pagination[pageSize]"] = params?.rowsPerPage?.toString();
  // queryParams["pagination[page]"] = params?.page?.toString();
  // queryParams["filters[priority][$eq]"] = params?.priority;
  //   queryParams["filters[batch_id][$eq]"] = params.batchId?.toString();
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
