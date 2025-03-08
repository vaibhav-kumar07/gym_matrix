export interface IEquipment {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  status: "operational" | "maintenance" | "repair needed";
  lastMaintenance: string;
  nextMaintenance: string;
  location: string;
  image: string;
}

const equipmentNames = [
  "Commercial Treadmill T-2000",
  "Olympic Weight Set",
  "Cable Crossover Machine",
  "Spin Bike SB-500",
  "Smith Machine",
  "Leg Press Machine",
  "Rowing Machine RX-100",
  "Elliptical Trainer E-500",
  "Adjustable Bench Press",
  "Lat Pulldown Machine",
  "Seated Leg Curl",
  "Pec Deck Machine",
  "Battle Ropes",
  "Kettlebell Set",
  "Medicine Ball Set",
  "Dumbbell Rack",
  "Barbell Set",
  "Squat Rack",
  "Incline Bench Press",
  "Arm Curl Machine",
  "Tire Flip Station",
  "Suspension Trainer",
  "Air Bike",
  "Assault Treadmill",
  "Vertical Climber",
  "Leg Extension Machine",
  "Power Cage",
  "Functional Trainer",
  "Pull-Up/Dip Station",
  "Chest Fly Machine",
];

const manufacturers = [
  "FitTech Pro",
  "PowerFit",
  "GymTech",
  "CyclePro",
  "Iron Strength",
  "Elite Fitness",
  "Muscle Max",
  "Enduro Gym",
  "Titan Forge",
  "Precision Fitness",
];

const locations = [
  "Cardio Zone",
  "Free Weights Area",
  "Weight Training Zone",
  "Spinning Studio",
  "Functional Training Area",
  "Strength Training Section",
  "HIIT Zone",
];

const statuses: ("operational" | "maintenance" | "repair needed")[] = [
  ...Array(15).fill("operational"),
  ...Array(10).fill("maintenance"),
  ...Array(5).fill("repair needed"),
];

const images = [
  "https://public.readdy.ai/ai/img_res/94ed77320b1bc167237486ec15cf3e0b.jpg",
  "https://public.readdy.ai/ai/img_res/e7ef77d04a2fc70042f002856c621118.jpg",
  "https://public.readdy.ai/ai/img_res/ba6d5fa6dbed0308bcf32dd2b5eeb558.jpg",
  "https://public.readdy.ai/ai/img_res/a7f02c1618b9f1555aec896c59f6053d.jpg",
  "https://public.readdy.ai/ai/img_res/9c6d77b7462630f0b523b351c13954af.jpg",
];

/**
 * Generates 30 equipment entries with randomized details.
 */
const equipmentList: IEquipment[] = Array.from({ length: 30 }, (_, index) => {
  const status = statuses[index];
  const lastMaintenanceDate = new Date(
    2025,
    Math.floor(Math.random() * 2) + 1,
    Math.floor(Math.random() * 28) + 1
  );
  const nextMaintenanceDate = new Date(lastMaintenanceDate);
  nextMaintenanceDate.setMonth(nextMaintenanceDate.getMonth() + 3);

  return {
    id: index + 1,
    name: equipmentNames[index % equipmentNames.length],
    category: index % 2 === 0 ? "Cardio" : "Strength",
    manufacturer: manufacturers[index % manufacturers.length],
    status,
    lastMaintenance: lastMaintenanceDate.toISOString().split("T")[0],
    nextMaintenance: nextMaintenanceDate.toISOString().split("T")[0],
    location: locations[index % locations.length],
    image: images[index % images.length],
  };
});

/**
 * Fetches gym equipment with optional filtering by status.
 * @param {("operational" | "maintenance" | "repair needed")} filterStatus - (Optional) Filter equipment by status.
 * @returns {Promise<IEquipment[]>} - A promise resolving to the list of equipment.
 */
export async function getEquipment(
  filterStatus?: "operational" | "maintenance" | "repair needed"
): Promise<IEquipment[]> {
  return filterStatus
    ? equipmentList.filter((eq) => eq.status === filterStatus)
    : equipmentList;
}
