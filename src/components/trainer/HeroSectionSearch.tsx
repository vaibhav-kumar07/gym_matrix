'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useURLParams } from "../hooks/request";
import { useState } from "react";

export default function TrainerSearch() {
  const { appendSearchParams, removeSearchParams } = useURLParams();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      appendSearchParams("search", searchQuery.trim());
    } else {
      removeSearchParams("search");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-4 justify-center">
      <Input
        className="max-w-md bg-white/90 text-black border-none"
        placeholder="Search by name, specialization, or location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button 
        className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search Trainers
      </Button>
    </div>
  );
}