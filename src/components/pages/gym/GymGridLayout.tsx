import FeaturedGymCard from "../../landingPage/featuredgyms/FEaturedGymCard";
import GymCardNew from "./GymCard";
import { Star, MapPin, Clock, Dumbbell, Users } from "lucide-react";

const gyms = [
    {
        id: 1,
        name: "Luxe Fitness Club",
        category: "luxury",
        rating: 4.9,
        reviews: 1250,
        price: "$199",
        location: "Beverly Hills",
        image: "https://public.readdy.ai/ai/img_res/152a376217a0f962cb47ebf23dcef976.jpg",
        amenities: ["Personal Training", "Spa", "Pool", "Sauna"],
        features: ["24/7 Access", "Towel Service", "Valet Parking"],
    },
    {
        id: 2,
        name: "CrossFit Arena",
        category: "crossfit",
        rating: 4.8,
        reviews: 890,
        price: "$150",
        location: "Downtown",
        image: "https://public.readdy.ai/ai/img_res/f964863f5344caceac23612e3696c611.jpg",
        amenities: ["Group Classes", "Performance Tracking", "Recovery Zone"],
        features: ["Competition Training", "Nutrition Planning"],
    },
    {
        id: 3,
        name: "Zen Wellness Studio",
        category: "yoga",
        rating: 4.9,
        reviews: 760,
        price: "$129",
        location: "West Side",
        image: "https://public.readdy.ai/ai/img_res/a83b89a42607688403f604ddf6047154.jpg",
        amenities: ["Meditation Room", "Tea Lounge", "Garden View"],
        features: ["Expert Instructors", "Mindfulness Programs"],
    },
    {
        id: 4,
        name: "24/7 Fitness Hub",
        category: "24h",
        rating: 4.7,
        reviews: 1100,
        price: "$89",
        location: "Midtown",
        image: "https://public.readdy.ai/ai/img_res/fd8c6ac758f1fba5f6c7f45c5c2327de.jpg",
        amenities: ["Smart Access", "Security", "Locker Rooms"],
        features: ["Always Open", "Virtual Classes"],
    },
    {
        id: 5,
        name: "Elite Boxing Club",
        category: "boxing",
        rating: 4.8,
        reviews: 680,
        price: "$175",
        location: "East Side",
        image: "https://public.readdy.ai/ai/img_res/f4a57b08804b0845eae6304186ff549b.jpg",
        amenities: ["Boxing Ring", "Training Equipment", "Pro Coaches"],
        features: ["Competition Training", "Private Sessions"],
    },
];

const newgyms = [
    {
        image: "https://public.readdy.ai/ai/img_res/152a376217a0f962cb47ebf23dcef976.jpg",
        logo: "fas fa-dumbbell",
        name: "Luxe Fitness Club",
        type: "Luxury Experience",
        location: "Beverly Hills",
        hours: "24/7 Access",
        rating: "4.9",
        reviews: "1.2k+ reviews",
        bgColor: "bg-purple-100",
        price: "$199/month",
        amenities: ["Personal Training", "Spa", "Pool", "Sauna"],
        features: ["24/7 Access", "Towel Service", "Valet Parking"],
    },
    {
        image: "https://public.readdy.ai/ai/img_res/f964863f5344caceac23612e3696c611.jpg",
        logo: "fas fa-bolt",
        name: "CrossFit Arena",
        type: "CrossFit & Performance",
        location: "Downtown",
        hours: "5:00 AM - 10:00 PM",
        rating: "4.8",
        reviews: "890+ reviews",
        bgColor: "bg-blue-100",
        price: "$150/month",
        amenities: ["Group Classes", "Performance Tracking", "Recovery Zone"],
        features: ["Competition Training", "Nutrition Planning"],
    },
    {
        image: "https://public.readdy.ai/ai/img_res/a83b89a42607688403f604ddf6047154.jpg",
        logo: "fas fa-spa",
        name: "Zen Wellness Studio",
        type: "Yoga & Mindfulness",
        location: "West Side",
        hours: "6:00 AM - 9:00 PM",
        rating: "4.9",
        reviews: "760+ reviews",
        bgColor: "bg-green-100",
        price: "$129/month",
        amenities: ["Meditation Room", "Tea Lounge", "Garden View"],
        features: ["Expert Instructors", "Mindfulness Programs"],
    },
    {
        image: "https://public.readdy.ai/ai/img_res/fd8c6ac758f1fba5f6c7f45c5c2327de.jpg",
        logo: "fas fa-clock",
        name: "24/7 Fitness Hub",
        type: "Always Open Gym",
        location: "Midtown",
        hours: "Open 24/7",
        rating: "4.7",
        reviews: "1.1k+ reviews",
        bgColor: "bg-gray-100",
        price: "$89/month",
        amenities: ["Smart Access", "Security", "Locker Rooms"],
        features: ["Always Open", "Virtual Classes"],
    },
    {
        image: "https://public.readdy.ai/ai/img_res/f4a57b08804b0845eae6304186ff549b.jpg",
        logo: "fas fa-boxing-glove",
        name: "Elite Boxing Club",
        type: "Professional Boxing",
        location: "East Side",
        hours: "6:00 AM - 10:00 PM",
        rating: "4.8",
        reviews: "680+ reviews",
        bgColor: "bg-red-100",
        price: "$175/month",
        amenities: ["Boxing Ring", "Training Equipment", "Pro Coaches"],
        features: ["Competition Training", "Private Sessions"],
    },
];

const GymGrid = () => {
    return (
        <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gyms.map((gym) => (
                    <GymCardNew key={gym.id} {...gym} />
                ))}
            </div>
        </div>
    );
};

export default GymGrid;

// const GymCard = ({ gym, isFeatured }: { gym: any; isFeatured: boolean }) => {
//     return (
//         <div
//             className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${
//                 isFeatured ? "col-span-2 row-span-2 h-[400px]" : "h-[200px]"
//             }`}
//         >
//             <img
//                 src={gym.image}
//                 alt={gym.name}
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <h3 className="text-xl font-bold mb-2">{gym.name}</h3>
//                 <p className="text-gray-300 text-sm mb-2">{gym.type}</p>
//                 <div className="flex items-center gap-2">
//                     <Star className="text-yellow-400" />
//                     <span>{gym.rating}</span>
//                     <Users className="ml-4" />
//                     <span>{gym.members} members</span>
//                 </div>
//             </div>
//         </div>
//     );
// };
