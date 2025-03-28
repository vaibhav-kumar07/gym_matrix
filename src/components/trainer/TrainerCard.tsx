import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DayOfWeek, ITrainer } from "@/types/trainer";
import { Star, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface TrainerCardProps {
  trainer: ITrainer;
  // onViewProfile?: (trainerId: string) => void;
}

export const TrainerCard = ({ trainer }: TrainerCardProps) => {
  // Calculate average rating
  const averageRating = trainer.clientReviews.reduce((acc, review) => acc + review.rating, 0) / 
    (trainer.clientReviews.length || 1);

  // Get today's availability
  const today =DayOfWeek.MONDAY
  const todaySchedule = trainer.availability.find(a => a.dayOfWeek == today);
  const availabilityText = todaySchedule?.status === "Available" 
    ? `Available ${todaySchedule.startTime} - ${todaySchedule.endTime}`
    : "Not Available Today";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border rounded-lg">
      <div className="relative h-56px">
    
          <div className="relative h-52 w-full bg-green-300">
        {trainer?.media && trainer?.media.gallery ? (
          <Image
          src={"https://public.readdy.ai/ai/img_res/867d17b926fa03492c1135c6166a3f63.jpg"} // Display first image
          alt={trainer.media.profilePicture}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
            No Image Available
          </div>
        )}
      </div>
        <div className="absolute top-4 right-4">
          <Badge className={`${
            todaySchedule?.status === "Available" ? "bg-green-500" : "bg-gray-500"
          }`}>
            {availabilityText}
          </Badge>
        </div>
      </div>
      <div className="w-full p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{trainer.name}</h3>
            <p className="text-gray-600">{trainer.professionalTitle}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">${trainer.hourlyRateBreakdown?.oneOnOneRate}</p>
            <p className="text-sm text-gray-500">per hour</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-semibold">{averageRating.toFixed(1)}</span>
          <span className="text-gray-500">({trainer.clientReviews.length} reviews)</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">{trainer.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {trainer.specializations.slice(0, 3).map((specialization, index) => (
            <Badge key={index} variant="secondary">
              {specialization}
            </Badge>
          ))}
          {trainer.specializations.length > 3 && (
            <Badge variant="secondary">+{trainer.specializations.length - 3}</Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline">{trainer.yearsOfExperience}+ Years</Badge>
          {trainer.certifications.slice(0, 2).map((cert, index) => (
            <Badge key={index} variant="outline">
              {cert.name}
            </Badge>
          ))}
        </div>

        <Link 
        href={`/trainers/${trainer._id}`}
          className="w-full  flex justify-center bg-black text-white py-2 px-4 text-center rounded-lg"
          // onClick={() => onViewProfile?.(trainer.userId)}
        >
          View Profile
        </Link>
      </div>
    </Card>
  );
};