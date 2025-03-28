export interface IPersonalBest {
  title: string;
  value: string;
}

export interface IEvent {
  title: string;
  date: string;
  type: string;
  icon: string;
}

export interface IWorkoutPreferences {
  workoutDays: string[];
  favoriteWorkouts: string[];
  fitnessLevel: string;
}

export interface IUserProfile {
  id: string;
  name: string;
  bio: string;
  coverImage: string;
  profileImage: string;
  stats: {
    followersCount: number;
    followingCount: number;
    achievements: number;
  };
  personalBests: IPersonalBest[];
  upcomingEvents: IEvent[];
  preferences: IWorkoutPreferences;
  memberSince: string;
  totalWorkouts: number;
}
