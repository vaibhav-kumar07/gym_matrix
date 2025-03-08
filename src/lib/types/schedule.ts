export interface ITimeSlot {
  time: string;
  period: string;
  available: boolean;
}

export interface ITrainer {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
}

export interface IClassType {
  id: number;
  name: string;
  duration: string;
  intensity: string;
  image: string;
}

export interface IScheduleData {
  timeSlots: ITimeSlot[];
  trainers: ITrainer[];
  classTypes: IClassType[];
}
