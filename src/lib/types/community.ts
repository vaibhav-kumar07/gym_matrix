export interface IUser {
  name: string;
  image: string;
  badge: string;
}

export interface IPost {
  id: number;
  user: IUser;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  time: string;
}

export interface ITrendingTopic {
  id: number;
  name: string;
  posts: number;
}

export interface ICommunityData {
  trendingTopics: ITrendingTopic[];
  posts: IPost[];
}
