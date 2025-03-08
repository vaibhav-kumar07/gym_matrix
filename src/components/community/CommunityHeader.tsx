import { Button } from "@/components/ui/button";
import { Bell, Mail } from "lucide-react";

export default function CommunityHeader() {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 h-16">
        <h1 className="text-lg font-semibold">Community</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="!rounded-button">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="!rounded-button">
            <Mail className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  );
}
