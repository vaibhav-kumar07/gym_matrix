export async function getDashboardStats() {
  const generateRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const generateRandomChange = () => {
    const change = generateRandomNumber(-10, 20);
    return change >= 0 ? `+${change}%` : `${change}%`;
  };

  const data = [
    {
      title: "Total Members",
      value: generateRandomNumber(2000, 3000).toString(),
      change: generateRandomChange(),
    },
    {
      title: "Active Classes",
      value: generateRandomNumber(10, 50).toString(),
      change: generateRandomChange(),
    },
    {
      title: "Monthly Revenue",
      value: `₹${generateRandomNumber(200000, 500000).toLocaleString()}`,
      change: generateRandomChange(),
    },
  ];

  return Response.json(data);
}

// lib/stats.ts
export async function getMembershipGrowth() {
  const generateRandomGrowth = () =>
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 300) + 100);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Membership Growth",
        data: generateRandomGrowth(),
      },
    ],
  };

  return data;
}

export async function getRecentActivities() {
  const sampleActivities = [
    {
      name: "Emma Thompson",
      action: "completed a personal training session",
      time: "2 minutes ago",
      image:
        "https://public.readdy.ai/ai/img_res/706b44ce8e5708e00cb3a45a82108619.jpg",
    },
    {
      name: "Michael Chen",
      action: "joined a Yoga class",
      time: "15 minutes ago",
      image:
        "https://public.readdy.ai/ai/img_res/bebb1d6a3ad00ca340bfc090ed03a43a.jpg",
    },
    {
      name: "Sarah Williams",
      action: "renewed membership",
      time: "32 minutes ago",
      image:
        "https://public.readdy.ai/ai/img_res/5dd75c5913308646d639ea6d15dd1486.jpg",
    },
    {
      name: "David Rodriguez",
      action: "booked a HIIT class",
      time: "1 hour ago",
      image:
        "https://public.readdy.ai/ai/img_res/a977f2c56c7c553af7c9817a423a22d7.jpg",
    },
    {
      name: "Lisa Parker",
      action: "checked in",
      time: "2 hours ago",
      image:
        "https://public.readdy.ai/ai/img_res/398e90e7c010a4883e0df7c113998e58.jpg",
    },
  ];

  // Shuffle and return a random subset of activities
  const shuffled = sampleActivities.sort(() => 0.5 - Math.random());
  const selectedActivities = shuffled.slice(
    0,
    Math.floor(Math.random() * 3) + 2
  ); // Get 2-4 activities randomly

  return selectedActivities;
}

const classSchedule = [
  {
    time: "06:00 AM",
    name: "Morning Yoga",
    trainer: "Emma Wilson",
    participants: 12,
  },
  {
    time: "08:00 AM",
    name: "HIIT Training",
    trainer: "Marcus Chen",
    participants: 15,
  },
  {
    time: "10:00 AM",
    name: "Strength & Conditioning",
    trainer: "Sarah Miller",
    participants: 8,
  },
  {
    time: "04:00 PM",
    name: "Spinning Class",
    trainer: "David Brooks",
    participants: 20,
  },
  {
    time: "06:00 PM",
    name: "CrossFit",
    trainer: "Alex Thompson",
    participants: 10,
  },
];

export async function getTodaysClassStats() {
  return classSchedule;
}

// Function to generate random numbers for stats
export const generateRandomMemberStats = async () => [
  {
    title: "Total Members",
    value: (Math.floor(Math.random() * 5000) + 1000).toLocaleString(),
  },
  {
    title: "Active Members",
    value: (Math.floor(Math.random() * 4000) + 500).toLocaleString(),
  },
  {
    title: "New This Month",
    value: (Math.floor(Math.random() * 300) + 50).toLocaleString(),
  },
  {
    title: "Expiring Soon",
    value: (Math.floor(Math.random() * 100) + 10).toLocaleString(),
  },
];
export const generateRandomClassStats = async () => [
  {
    title: "Total Classes",
    value: (Math.floor(Math.random() * 5000) + 1000).toLocaleString(),
  },
  {
    title: "Active Trainers",
    value: (Math.floor(Math.random() * 4000) + 500).toLocaleString(),
  },
  {
    title: "Total Enrollments",
    value: (Math.floor(Math.random() * 300) + 50).toLocaleString(),
  },
  {
    title: "Upcoming Classes",
    value: (Math.floor(Math.random() * 100) + 10).toLocaleString(),
  },
];

export const generateRandomEquipmentStats = async () => [
  {
    title: "Total Equipment",
    value: (Math.floor(Math.random() * 5000) + 1000).toLocaleString(),
  },
  {
    title: "Operational",
    value: (Math.floor(Math.random() * 4000) + 500).toLocaleString(),
  },
  {
    title: "Under Maintenance",
    value: (Math.floor(Math.random() * 300) + 50).toLocaleString(),
  },
  {
    title: "Needs Repair",
    value: (Math.floor(Math.random() * 100) + 10).toLocaleString(),
  },
];
