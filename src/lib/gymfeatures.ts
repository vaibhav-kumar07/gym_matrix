import { QueryParameters } from "../types/common";
import { IFeatureParams } from "../types/feature";
import * as FetchUtils from "./common/fetch-utils";
import qs from "query-string";

const apiUrl = `${process.env.NEXT_PUBLIC_GYM_URL}`;
const revalidateTag = "features";

export async function getGymFeatures(gymId: String) {
  const response = await FetchUtils.get(`${apiUrl}/gymfeatures/${gymId}}`, {
    isWithToken: true,
    isWithCache: false,
    cacheTags: [revalidateTag],
  });
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
