import { FitnessSession } from "../types/session";
import { SessionFilter } from "../types/session";

export const mockSessions: FitnessSession[] = [
  {
    id: "1",
    title: "Power Yoga Flow",
    trainer: {
      id: "t1",
      name: "Isabella Rodriguez",
      image:
        "https://public.readdy.ai/ai/img_res/5f3830d4ab1466b9c65c9efffd870881.jpg",
      specialization: "Yoga Specialist",
    },
    type: "Yoga",
    time: "07:30",
    date: "2025-03-05",
    duration: 60,
    location: "Zen Studio A",
    attendees: 12,
    maxAttendees: 20,
    status: "upcoming",
    intensity: "Intermediate",
    description:
      "Dynamic vinyasa flow focusing on strength and flexibility. Perfect for starting your day with energy and mindfulness.",
    equipment: ["Yoga mat", "Blocks", "Strap"],
    price: 25,
    isPremiumOnly: true,
    coverImage:
      "https://public.readdy.ai/ai/img_res/512d70f6c13808b690a6ab31f51c6047.jpg",
  },
  {
    id: "2",
    title: "High-Intensity Circuit",
    trainer: {
      id: "t2",
      name: "Alexander Chen",
      image:
        "https://public.readdy.ai/ai/img_res/428df17cfdf0b25ceb426f80c2a81ad2.jpg",
      specialization: "HIIT Specialist",
    },
    type: "HIIT",
    time: "12:00",
    date: "2025-03-05",
    duration: 45,
    location: "Performance Zone",
    attendees: 15,
    maxAttendees: 15,
    status: "upcoming",
    intensity: "Advanced",
    description:
      "High-energy workout combining strength and cardio exercises in timed intervals. Prepare to push your limits!",
    equipment: ["Dumbbells", "Kettlebell", "Jump rope"],
    price: 30,
    isPremiumOnly: false,
    coverImage:
      "https://public.readdy.ai/ai/img_res/049e05e0351147999d3d5670e96f6f5c.jpg",
  },
  {
    id: "3",
    title: "Core & Stretch",
    trainer: {
      id: "t3",
      name: "Sophie Bennett",
      image:
        "https://public.readdy.ai/ai/img_res/e282d5a9286fd70eb9be9567c47bb513.jpg",
      specialization: "Pilates Specialist",
    },
    type: "Pilates",
    time: "15:30",
    date: "2025-03-05",
    duration: 50,
    location: "Mind & Body Studio",
    attendees: 8,
    maxAttendees: 12,
    status: "upcoming",
    intensity: "Beginner",
    description:
      "Focus on core strength, flexibility, and proper alignment. Perfect for recovery and improving posture.",
    equipment: ["Mat", "Foam roller"],
    price: 25,
    isPremiumOnly: false,
    coverImage:
      "https://public.readdy.ai/ai/img_res/8b011d5e77d1f7787de2251fd1067e65.jpg",
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function DesktopFetchSessions(
  filter: SessionFilter = "all"
): Promise<FitnessSession[]> {
  await delay(1000);

  if (filter === "all") {
    return mockSessions;
  }

  return mockSessions.filter(
    (session) => session.type.toLowerCase() === filter.toLowerCase()
  );
}

export async function DesktopBookSession(
  sessionId: string
): Promise<{ success: boolean; message: string }> {
  await delay(1000);

  const session = mockSessions.find((s) => s.id === sessionId);
  if (!session) {
    throw new Error("Session not found");
  }

  if (session.attendees >= session.maxAttendees) {
    return {
      success: false,
      message: "This session is fully booked.",
    };
  }

  return {
    success: true,
    message: "Session booked successfully!",
  };
}
