"use client";

import { useURLParams } from "@/components/hooks/request";
import { Input } from "@/components/ui/input";
import { CheckCircle, Medal, Search, Shield } from "lucide-react";

export default function TrainersHero() {
  const { appendSearchParams } = useURLParams();

  return (
    <div className="relative flex flex-col items-center text-center mb-16">
      {/* Stats Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
        <span className="text-sm font-medium text-primary">
          200+ Elite Trainers Available
        </span>
      </div>

      {/* Hero Text */}
      <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
        Find Your Perfect Fitness Mentor
      </h1>
      <p className="text-gray-600 text-xl max-w-3xl leading-relaxed">
        Connect with elite personal trainers who will guide you through your
        fitness journey with expertise and dedication. Transform your life with
        personalized training.
      </p>

      {/* Search Bar */}
      <div className="mt-10 relative w-full max-w-2xl">
        <Input
          type="text"
          placeholder="Search by name, specialization, or location..."
          className="w-full pl-14 pr-20 h-12 text-base bg-white border border-gray-200 focus:border-gray-900 rounded-full"
          onChange={(e) => appendSearchParams("search", e.target.value)}
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm text-gray-500">
          <kbd className="px-2 py-1 bg-gray-100 rounded-md">⌘</kbd>
          <kbd className="px-2 py-1 bg-gray-100 rounded-md">K</kbd>
        </div>
      </div>

      {/* Features */}
      <div className="flex items-center gap-12 mt-8 text-gray-600 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-100">
        <span className="flex items-center gap-2">
          <CheckCircle className="text-primary w-5 h-5" />
          Verified Trainers
        </span>
        <span className="flex items-center gap-2">
          <Shield className="text-primary w-5 h-5" />
          Secure Booking
        </span>
        <span className="flex items-center gap-2">
          <Medal className="text-primary w-5 h-5" />
          Top-Rated Professionals
        </span>
      </div>
    </div>
  );
}
