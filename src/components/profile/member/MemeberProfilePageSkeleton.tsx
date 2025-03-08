import React from "react";

export default function MemeberProfilePageSkeleton() {
  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      {/* Profile Header Skeleton */}
      <div className="space-y-4">
        {/* Cover Image */}
        <div className="w-full h-32 bg-gray-200 rounded-lg animate-pulse" />
        {/* Profile Image */}
        <div className="relative flex justify-center">
          <div className="absolute -top-10 w-24 h-24 bg-gray-200 rounded-full border-4 border-white animate-pulse" />
        </div>
        {/* Name and Bio */}
        <div className="pt-16 space-y-2 text-center">
          <div className="h-6 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-4 w-72 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        {/* Stats */}
        <div className="flex justify-center gap-8 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-1">
              <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* Personal Bests Skeleton */}
      <div className="p-4 bg-white rounded-lg shadow space-y-3">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>

      {/* Upcoming Events Skeleton */}
      <div className="p-4 bg-white rounded-lg shadow space-y-3">
        <div className="h-6 w-36 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>

      {/* Workout Preferences Skeleton */}
      <div className="p-4 bg-white rounded-lg shadow space-y-3">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>

      {/* Account Info Skeleton */}
      <div className="p-4 bg-white rounded-lg shadow space-y-3">
        <div className="h-6 w-28 bg-gray-200 rounded animate-pulse" />
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div key={i} className="h-8 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
