import { IGymFeature } from "./gymfeature";

export enum IGymType {
  StrengthTraining = "Strength Training",
  Cardio = "Cardio",
  CrossFit = "CrossFit",
  Yoga = "Yoga",
  Pilates = "Pilates",
  Boxing = "Boxing",
  MixedMartialArts = "Mixed Martial Arts",
  FunctionalTraining = "Functional Training",
  GeneralFitness = "General Fitness",
}

export interface IGym {
  _id?: string;
  name: string;
  //   type: IGymType;
  address: IGymAddress;
  contactInfo: {
    phoneNumber: string;
    email: string;
  };
  status: IGymStatus;
  legalInfo?: string;
  media?: string[];
  businessHours?: IGymBusinessHour;
  gymfeature?: IGymFeature;
}

export enum IGymStatus {
  Active = "active",
  InActive = "inactive",
  Suspended = "suspended",
}

export interface IGymAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
export interface IGymBusinessHour {
  _id?: string;
  gymId: string;
  timings: {
    timeSlotId: string;
    openTime: string;
    closeTime: string;
  }[];
  schedules: {
    days: string[];
    timeSlotId: string;
  }[];
  closedDays: string[];
  holidays: {
    date: Date;
    reason: string;
  }[];
}
