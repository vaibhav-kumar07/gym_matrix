"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IOwner } from "@/lib/types/owner";

interface OwnerProfileHeaderProps {
  owner: IOwner;
}

export default function OwnerProfileHeader({ owner }: OwnerProfileHeaderProps) {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200/70 h-16 flex items-center px-8 justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
          <i className="fas fa-dumbbell text-white text-xl"></i>
        </div>
        <span className="text-gray-900 font-bold text-xl">FitnessPro</span>
      </div>
      <div className="flex items-center gap-6">
        <Button variant="ghost" className="!rounded-button relative">
          <i className="fas fa-bell text-gray-700 text-lg"></i>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </Button>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{owner.name}</p>
            <p className="text-xs text-gray-500">{owner.role}</p>
          </div>
          <Avatar className="h-10 w-10 ring-2 ring-blue-100">
            <AvatarImage src={owner.avatar} />
            <AvatarFallback>{owner.nameInitials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
