export interface IFeatureParams {
  searchText: string;
}
export interface IFeature {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
