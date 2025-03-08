import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CommunitySearch() {
  return (
    <div className="p-4">
      <div className="relative border rounded overflow-hidden">
        <Input
          type="text"
          placeholder="Search community posts..."
          className="w-full pl-10 pr-4 py-2 border-none bg-white shadow-sm"
        />
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
