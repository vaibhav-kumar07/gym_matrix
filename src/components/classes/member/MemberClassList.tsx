"use client";

import { MemberClassCard } from "./MemberClassCard";
import MemberFilters from "./MemberFilters";
import PageHeaderWithButton from "@/components/common/PageHeaderWithButton";
import { Input } from "@/components/ui/input";
import { classCategories, classLevels } from "@/lib/classes";
import { FitnessClass } from "@/types/classes";

// import { useState } from "react";

interface ClassesViewProps {
  initialClasses: FitnessClass[];
  filters: {
    filter: string;
    level: string;
  };
  searchParams: {
    search: string;
  };
}

export function MemberClassList({
  initialClasses,
  filters,
  searchParams,
}: ClassesViewProps) {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-6">
        <PageHeaderWithButton
          title="Fitness Classes"
          description="Choose your favorite fitness classes"
          // action={
          //   <Input
          //     placeholder="Search classes..."
          //     className="w-full max-w-[300px]"
          //     defaultValue={searchParams.search}
          //     onChange={(e) => appendSearchParams("search", e.target.value)}
          //   />
          // }
        />
      </div>
      <MemberFilters filters={filters} />

      {/* Class Grid */}
      {initialClasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {initialClasses.map((classItem) => (
            <MemberClassCard
              key={classItem.id}
              classItem={classItem}
              // onViewDetails={() => {
              //   setSelectedClass(classItem);
              //   setIsDetailsOpen(true);
              // }}
              // onBook={() => {
              //   setSelectedClass(classItem);
              //   setIsBookingOpen(true);
              // }}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg font-medium text-gray-900">No classes found</p>
          <p className="text-sm text-gray-500">Try adjusting your filters</p>
        </div>
      )}

      {/* Dialogs */}
      {/* <MemberClassDetailsDialog
        classItem={selectedClass}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onBook={(classItem) => {
          setIsDetailsOpen(false);
          setSelectedClass(classItem);
          setIsBookingOpen(true);
        }}
      />

      <BookingDialog
        classItem={selectedClass}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      /> */}
    </div>
  );
}
