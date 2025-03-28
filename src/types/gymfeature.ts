import { IFeature } from "./feature";

export interface IGymFeature {
  _id?: string;
  gymId: string;
  featureIds: IFeature[]; // Array of feature IDs
  // features?: IFeature[]; // Populated feature details
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
