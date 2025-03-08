import Logo from "../Logo";
import Button from "@/components/common/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Bell, BellIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaBell } from "react-icons/fa";

export default function OwnerNavbar() {
  return (
    <div className="py-3 px-8 flex items-center w-full sticky top-0 border-b  z-50 backdrop-blur-sm bg-white/50">
      {" "}
      <Logo />
      <div className="flex-1 max-w-2xl mx-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search members, classes, or activities..."
            className="w-full bg-gray-50/50 border-none pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-100 transition-all duration-300"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className=" w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></Search>
        </div>
      </div>
      <div className="flex items-center gap-6 ml-auto">
        <Button variant="ghost" className="!rounded-button relative">
          <FaBell className="fas fa-bell text-gray-700 text-lg"></FaBell>
          <div className="absolute -top-0 -right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        </Button>
        <Link href="/owner/profile" className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Alex Mitchell</p>
            <p className="text-xs text-gray-500">Gym </p>
          </div>
          <Avatar className="h-10 w-10 ring-2 ring-blue-100">
            <AvatarImage src="https://public.readdy.ai/ai/img_res/4bcca3128df72b338c22c1145802bb13.jpg" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
}
