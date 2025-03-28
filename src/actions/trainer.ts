"use server";

import { TrainerBasicData } from "@/components/trainer/validation/trainer";
import { createTrainer, updateTrainerBasicDetails, updateTrainerCertifications, updateTrainerEducations, updateTrainerLanguages, updateTrainerSpecializations, uploadTrainerMedia } from "@/lib/trainer";
import { apiResponse } from "@/lib/utils";
import { IEducation } from "@/types/trainer";

export async function createTrainerProfileHandler(
  trainerData: TrainerBasicData
): Promise<apiResponse> {
  const response = await createTrainer(trainerData);
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}
export async function updateTrainerBasicHandler(
  trainerData: TrainerBasicData
): Promise<apiResponse> {
const result=await  updateTrainerBasicDetails(trainerData._id, trainerData);
  return {
    status: result.status,
    data: result.data,
    error: result.error,
  };
 

}

export async function updateTrainerCertificationsHandler({
  trainerId,
  certifications,
}): Promise<apiResponse> {
  const response = await updateTrainerCertifications(trainerId, certifications);
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}

export async function updateTrainerSpecializationHandler({
  trainerId,
  specializations,
}): Promise<apiResponse> {
  const response = await updateTrainerSpecializations(trainerId, specializations);
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}


export async function updateTrainerDetailsHandler({
  trainerId,
  education,
  experienceWithDemographics,
  achievements,
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
}): Promise<apiResponse> {
  const response = await updateTrainerEducations({
    trainerId,
    education,
    experienceWithDemographics,
    achievements,
  });
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}

export async function updateTrainerLanguagesHandler({
  trainerId,
  languages, 
})
:Promise<apiResponse> {
  const response = await updateTrainerLanguages(trainerId, languages);
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };
}

export async function updateTrainerMediaHandler({
  trainerId,
  media, 
})
:Promise<apiResponse> {
  const response =await uploadTrainerMedia(trainerId, media)
  return {
    status: response.status,
    data: response.data,
    error: response.error,
  };

}