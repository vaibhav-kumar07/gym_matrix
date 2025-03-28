import { TrainerBasicData } from "@/components/trainer/validation/trainer";
import { ILibApiResponse, QueryParameters } from "../types/common";
import { ICertification, IEducation, ITrainer, ITrainerParams, ITrainerProfileStatus } from "../types/trainer";
import * as FetchUtils from "@/lib/common/fetch-utils";
import qs from "query-string";

const apiUrl = `${process.env.NEXT_PUBLIC_AUTH_URL}`;
const trainerTag = "trainers";

export async function getTrainers(
  params: ITrainerParams
): Promise<ILibApiResponse<ITrainer[]>> {
  // console.log("params", params);
  const response = await FetchUtils.get(
    `${apiUrl}/trainers?${buildQueryString(params)}`,
    {
      isWithToken: false,
      isWithCache: true,
      cacheTags: [trainerTag],
    }
  );

  // console.log("response", response);

  return {
    status: response.status,
    data: response.data as ITrainer[],
    meta: response.meta,
    error: response.error,
  };
}

export async function getTrainerById(id: string) {
  const response = await FetchUtils.get(`${apiUrl}/trainers/${id}`, {
    isWithToken: false,
    isWithCache: true,
    cacheTags: [trainerTag],
  });
  return response;
}

export async function createTrainer(payload: Partial<TrainerBasicData>) {
  const response = await FetchUtils.post(`${apiUrl}/trainers`, payload, {
    isWithToken: true,
    isWithCache: false,
    cacheTags: [trainerTag],
  });
  console.log("response", response);
  return response;
}

export async function updateTrainerBasicDetails(id: string, payload: Partial<TrainerBasicData>) {
  const response = await FetchUtils.patch(`${apiUrl}/trainers/${id}`, payload, {
    isWithToken: true,
    isWithCache: false,
    cacheTags: [trainerTag],
  });
  return response;
}

export async function updateTrainerStatus(id: string, status: ITrainerProfileStatus) {
  const response = await FetchUtils.patch(
    `${apiUrl}/trainers/${id}/status`,
    { status },
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [trainerTag],
    }
  );
  return response;
}

export async function deleteTrainer(id: string) {
  const response = await FetchUtils.deleteData(`${apiUrl}/trainers/${id}`, {
    isWithToken: true,
    isWithCache: false,
    cacheTags: [trainerTag],
  });
  return response;
}

export async function uploadTrainerMedia(id: string, formData: FormData) {
  const response = await FetchUtils.post(
    `${apiUrl}/trainers/${id}/media`,
    formData,
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [trainerTag],
    }
  );
  return response;
}

export async function getTrainerAvailability(trainerId: string, date: string) {
  const response = await FetchUtils.get(
    `${apiUrl}/trainers/${trainerId}/availability?date=${date}`,
    {
      isWithToken: true,
      isWithCache: true,
      cacheTags: [trainerTag],
    }
  );
  return response;
}

export async function updateTrainerAvailability(
  trainerId: string,
  availability: ITrainer["availability"]
) {
  const response = await FetchUtils.put(
    `${apiUrl}/trainers/${trainerId}/availability`,
    { availability },
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [trainerTag],
    }
  );
  return response;
}
export async function updateTrainerCertifications(
  trainerId: string, 
  certifications: ICertification[]
) {

    return await FetchUtils.patch(
      `${apiUrl}/trainers/${trainerId}/certifications`,
      { certifications },
      {
        isWithToken: true,
        isWithCache: false,
        cacheTags: [trainerTag],
      }
    );   
}

export async function updateTrainerSpecializations(
  trainerId: string, 
  specializations: string[]
) {

    return await FetchUtils.patch(
      `${apiUrl}/trainers/${trainerId}/specializations`,
      { specializations },
      {
        isWithToken: true,
        isWithCache: false,
        cacheTags: [trainerTag],
      }
    );   
}

export async function updateTrainerEducations({trainerId, education, experienceWithDemographics, achievements
}:{
  trainerId: string, 
  education?: IEducation[],
  experienceWithDemographics?:
    {
      seniors:boolean  ,
      kids: boolean,
      disabilities:boolean
  },
  achievements?:string[]
}) {

    return await FetchUtils.patch(
      `${apiUrl}/trainers/${trainerId}/details`,
      { education, experienceWithDemographics, achievements },
      {
        isWithToken: true,
        isWithCache: false,
        cacheTags: [trainerTag],
      }
    );   
}


export async function updateTrainerLanguages(
  trainerId: string, 
  languages: string[]
) {
  return await FetchUtils.patch(
    `${apiUrl}/trainers/${trainerId}`,
    { languages },
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [trainerTag],
    }
  );   
}

const buildQueryString = (params: ITrainerParams) => {
  const queryParams: QueryParameters = {};
  if (params?.search?.trim()) queryParams["searchText"] = params.search.trim();
  if (params?.specialization)
    queryParams["filters[specializations][$in]"] = params.specialization;
  if (params?.experience)
    queryParams["filters[yearsOfExperience][$gte]"] =
      params.experience.toString();
  if (params?.availability)
    queryParams["filters[availability.dayOfWeek][$eq]"] = params.availability;
  if (params?.isActive !== undefined)
    queryParams["filters[status][$eq]"] = params.isActive
      ? ITrainerProfileStatus.ACTIVE
      : ITrainerProfileStatus.INACTIVE;
  if (params?.gymId) queryParams["filters[userId][$eq]"] = params.gymId;
  if (params?.startDate) {
    const endDate = params.endDate || params.startDate;
    queryParams[
      "filters[createdAt][$between]"
    ] = `dt${params.startDate},${endDate}`;
  }

  return qs.stringify(queryParams, {
    arrayFormat: "comma",
    skipNull: true,
    skipEmptyString: true,
    encode: false,
  });
};

// Additional utility functions
export async function addTrainerCertification(
  trainerId: string,
  certification: ITrainer["certifications"][0]
) {
  const response = await FetchUtils.post(
    `${apiUrl}/trainers/${trainerId}/certifications`,
    certification,
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [trainerTag],
    }
  );
  return response;
}

export async function updateTrainerReviews(
  trainerId: string,
  review: ITrainer["clientReviews"][0]
) {
  const response = await FetchUtils.post(
    `${apiUrl}/trainers/${trainerId}/reviews`,
    review,
    {
      isWithToken: true,
      isWithCache: false,
      cacheTags: [trainerTag],
    }
  );
  return response;
}
