import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TrainerNavbarProps {
  name: string;
}

export default function TrainerNavbar({ name }: TrainerNavbarProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/trainers"
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <i className="fas fa-arrow-left text-lg"></i>
          </Link>
          <h1 className="text-xl font-semibold">{name}</h1>
        </div>
        <Button variant="ghost" className="!rounded-button whitespace-nowrap">
          <i className="fas fa-share-alt mr-2"></i>
          Share
        </Button>
      </div>
    </nav>
  );
}