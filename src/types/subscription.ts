import { IFeature } from "./feature";

export interface ISubscription {
  _id?: string;
  gymId: string;
  name: string;
  duration: number;
  image: string;
  price: number;
  status?: boolean;
  features: string[] | IFeature[];
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ISubscriptionDurationType {
  Monthly = "monthly",
  Yearly = "yearly",
}

export interface ISubscriptionParams {
  gymId?: string;
  duration?: ISubscriptionDurationType;
  search?: string;
}

export interface ISubsLinkingToProfile {
  gymId: string;
  gymName: string;
  subscriptionId: string;
  subscriptionName: string;
  startDate: string; // ISO date string (e.g., "2025-03-22T00:00:00.000Z")
  endDate: string; // ISO date string
}
