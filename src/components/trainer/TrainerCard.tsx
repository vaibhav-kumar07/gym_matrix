"use client";

import { Label } from "../common/Label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trainer } from "@/lib/types/trainer";
import { Clock, MapPin, Star, Users } from "lucide-react";

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
      {/* Cover Image Section */}
      <div className="relative h-52">
        <img
          src={trainer.coverImage}
          alt={trainer.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Price Badge */}
        <Badge className="absolute top-4 right-4 bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm border-0 px-3 py-1.5">
          ${trainer.hourlyRate}/hr
        </Badge>

        {/* Avatar and Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end gap-3">
          <Avatar className="h-14 w-14 border-2 border-white shadow-xl">
            <AvatarImage
              src={trainer.avatar}
              alt={trainer.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10">
              {trainer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">
              {trainer.name}
            </h3>
            <p className="text-white/90 text-sm">{trainer.specialization}</p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="text-center">
            <div className="flex items-center justify-center text-yellow-500 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold ml-1">{trainer.rating}</span>
            </div>
            <Label size="sm" className="text-gray-500">
              {trainer.reviews} reviews
            </Label>
          </div>
          <div className="text-center border-x">
            <div className="flex items-center justify-center text-primary mb-1">
              <Users className="w-4 h-4" />
              <span className="font-semibold ml-1">{trainer.clientCount}+</span>
            </div>
            <Label size="sm" className="text-gray-500">
              Clients
            </Label>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-primary mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-semibold ml-1">
                {trainer.transformations}+
              </span>
            </div>
            <Label size="sm" className="text-gray-500">
              Results
            </Label>
          </div>
        </div>

        {/* Location & Experience */}
        <div className="flex items-center justify-between text-sm px-1">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            {trainer.gym}
          </div>
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-0"
          >
            {trainer.experience}
          </Badge>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-2">
          {trainer.certifications.slice(0, 2).map((cert) => (
            <Badge
              key={cert}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {cert}
            </Badge>
          ))}
          {trainer.certifications.length > 2 && (
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              +{trainer.certifications.length - 2} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 rounded-full hover:bg-gray-50"
          >
            View Profile
          </Button>
          <Button className="flex-1 rounded-full bg-primary hover:bg-primary/90">
            Book Session
          </Button>
        </div>
      </div>
    </Card>
  );
}
