import { z } from "zod";


export enum ITrainerProfileStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending"
}

export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export interface ICertification {
  name: string;
  yearObtained: number;
  expiry?: Date;
  image?: string;
}

export interface IMedia {
  profilePicture: string;
  gallery: string[];
}

export interface ISocialLinks {
  instagram?: string;
  twitter?: string;
}

export interface IContactPreferences {
  email: boolean;
  phone: boolean;
}

export interface IAvailability {
  _id?:string
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  status: IAvailabilityStatus;
}

export enum IAvailabilityStatus {
  AVAILABLE = "Available",
  UNAVAILABLE = "Unavailable"
}


export interface IHourlyRateBreakdown {
  groupSessionRate: number;
  oneOnOneRate: number;
}

export interface IClientReview {
  clientName: string;
  rating: number;
  reviewText: string;
}

export interface IEducation {
  degree: string;
  institution: string;
  yearCompleted: number;
}



export interface IPricingPackage {
  packageName: string;
  price: number;
  duration: string;
}

export interface IDemographicsExperience {
  seniors: boolean;
  kids: boolean;
  disabilities: boolean;
}

export interface ITrainer {
  _id?:string
  userId?: string |string
  name: string;
  professionalTitle: string;
  hourlyRate: number;
  location: string;
  languages: string[];
  yearsOfExperience: number;
  bio: string;
  media: IMedia;
  certifications: ICertification[];
  socialLinks: ISocialLinks;
  contactPreferences: IContactPreferences;
  specializations: string[];
  availability: IAvailability[];
  status: ITrainerProfileStatus;
  hourlyRateBreakdown: IHourlyRateBreakdown;
  achievements: string[];
  clientReviews?: IClientReview[];
  education: IEducation[];
  personalizedTrainingPlans: string[];
  trainerPhilosophy?: string;
  languagesOfferedInClasses: string[];
  pricingPackages: IPricingPackage[];
  experienceWithDemographics: IDemographicsExperience;
 video?:{
  videoUrl: string;
  videoTitle: string;
  videoDescription?: string;
  thumbnailUrl?: string;
 }
  createdAt?: Date;
  updatedAt?: Date;

}

export interface ITrainerParams  {
  gymId?: string;
  specialization?: string;
  experience?: number;
  availability?: string;
  rating?: number;
  isActive?: boolean;
  startDate?: string;
  endDate?: string;
  search?: string;
}

