export interface IClass {
    id: number;
    name: string;
    trainer: string;
    category: string;
    schedule: string;
    time: string;
    capacity: number;
    enrolled: number;
    status: "active" | "upcoming";
    image: string;
}

const classNames = [
    "Advanced HIIT Training", "Morning Yoga Flow", "Power Lifting", "Spin Cycle",
    "CrossFit Basics", "Cardio Burn", "Strength Bootcamp", "Pilates Core", "Zumba Dance Party",
    "Martial Arts Basics", "TRX Suspension", "Kettlebell Blast", "Endurance Running",
    "Functional Training", "Mobility & Flexibility", "Aqua Aerobics", "Boxing Fundamentals",
    "Olympic Weightlifting", "Stretch & Recovery", "Tabata Intervals", "Kickboxing",
    "Gymnastics for Fitness", "Rowing Challenge", "Core & Abs", "Bodyweight Circuit",
    "Circuit Training", "Strength Endurance", "Power Yoga", "Metabolic Conditioning",
    "Full Body Sculpt"
];

const trainers = [
    "Marcus Chen", "Emma Wilson", "David Brooks", "Sarah Miller", "Alex Thompson",
    "Daniel Carter", "Sophia Adams", "Liam Bennett", "Isabella White", "James Robinson",
    "Olivia Harris", "William King", "Mia Turner", "Benjamin Parker", "Charlotte Evans"
];

const categories = ["HIIT", "Yoga", "Strength", "Cardio", "CrossFit", "Martial Arts", "Functional", "Endurance"];
const schedules = ["Mon, Wed, Fri", "Tue, Thu", "Mon, Thu", "Wed, Fri", "Tue, Thu, Sat", "Sat, Sun", "Daily"];
const images = [
    "https://public.readdy.ai/ai/img_res/28695ef633c02174b5e61aa4d825dc18.jpg",
    "https://public.readdy.ai/ai/img_res/29ee76651cea295dcb6f4730f9089ebc.jpg",
    "https://public.readdy.ai/ai/img_res/832d31f3d53e0da075337210a37da1c2.jpg",
    "https://public.readdy.ai/ai/img_res/665c873ed6484938f4f0a6798a012499.jpg",
    "https://public.readdy.ai/ai/img_res/f7376d017e03e6d9963a7990b738494c.jpg"
];

/**
 * Generates 30 class entries with 15 "active" and 15 "upcoming".
 */
const classes: IClass[] = Array.from({ length: 30 }, (_, index) => {
    const status = index < 15 ? "active" : "upcoming";
    return {
        id: index + 1,
        name: classNames[index % classNames.length],
        trainer: trainers[index % trainers.length],
        category: categories[index % categories.length],
        schedule: schedules[index % schedules.length],
        time: `${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}:00 ${Math.random() > 0.5 ? "AM" : "PM"} - ${String(Math.floor(Math.random() * 12) + 2).padStart(2, "0")}:00 ${Math.random() > 0.5 ? "AM" : "PM"}`,
        capacity: Math.floor(Math.random() * 20) + 10,
        enrolled: Math.floor(Math.random() * 10) + 5,
        status,
        image: images[index % images.length]
    };
});

/**
 * Fetches gym classes with optional filtering by status.
 * @param {("active" | "upcoming")} categoryFilter - (Optional) Filter classes by status.
 * @returns {Promise<IClass[]>} - A promise resolving to the list of classes.
 */
export async function getClasses(categoryFilter?: "active" | "upcoming"): Promise<IClass[]> {
    return categoryFilter ? classes.filter(cls => cls.category.toLowerCase() === categoryFilter.toLowerCase()) : classes;
}
