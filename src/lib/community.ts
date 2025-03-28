import { ICommunityData } from "../types/community";

export const demoCommunityData: ICommunityData = {
  trendingTopics: [
    { id: 1, name: "Morning Yoga", posts: 234 },
    { id: 2, name: "HIIT Workout", posts: 186 },
    { id: 3, name: "Healthy Diet", posts: 159 },
    { id: 4, name: "Mental Wellness", posts: 142 },
    { id: 5, name: "Running Tips", posts: 128 },
  ],
  posts: [
    {
      id: 1,
      user: {
        name: "Isabella Chen",
        image:
          "https://public.readdy.ai/ai/img_res/a9edb9e4994e61205b16c8de703a4b04.jpg",
        badge: "Elite Trainer",
      },
      content:
        "Just finished an amazing morning yoga session with my 6 AM group! The energy was incredible 🧘‍♀️✨",
      image:
        "https://public.readdy.ai/ai/img_res/a63fdb4bc85c613afc049d86e3823292.jpg",
      likes: 89,
      comments: 12,
      time: "2h ago",
    },
    {
      id: 1,
      user: {
        name: "Isabella Chen",
        image:
          "https://public.readdy.ai/ai/img_res/a9edb9e4994e61205b16c8de703a4b04.jpg",
        badge: "Elite Trainer",
      },
      content:
        "Just finished an amazing morning yoga session with my 6 AM group! The energy was incredible 🧘‍♀️✨",
      image:
        "https://public.readdy.ai/ai/img_res/a63fdb4bc85c613afc049d86e3823292.jpg",
      likes: 89,
      comments: 12,
      time: "2h ago",
    },
    {
      id: 2,
      user: {
        name: "Marcus Thompson",
        image:
          "https://public.readdy.ai/ai/img_res/a655cd25a839ab69f5cc1d6827d54dda.jpg",
        badge: "Fitness Expert",
      },
      content:
        "Here's my go-to post-workout smoothie recipe! 🥤\nBanana 🍌\nSpinach 🥬\nAlmond milk\nProtein powder\nChia seeds\nTry it out and let me know what you think!",
      likes: 156,
      comments: 28,
      time: "4h ago",
    },
    {
      id: 3,
      user: {
        name: "Sophie Williams",
        image:
          "https://public.readdy.ai/ai/img_res/f37255f4928a35a35d783bf1cbba2a90.jpg",
        badge: "Wellness Coach",
      },
      content:
        "Quick tip: Start your day with 10 minutes of mindful stretching. It can improve your posture, reduce stress, and boost energy levels! 💪",
      image:
        "https://public.readdy.ai/ai/img_res/98e5561e411909c6d9402ee4f7b3b52b.jpg",
      likes: 234,
      comments: 45,
      time: "6h ago",
    },
  ],
};

export async function getCommunityData(): Promise<ICommunityData> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return demoCommunityData;
}
