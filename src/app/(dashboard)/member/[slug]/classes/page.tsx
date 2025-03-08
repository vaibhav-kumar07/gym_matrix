import { MemberClassList } from "@/components/classes/member/MemberClassList";
import { MemberClassSkeleton } from "@/components/classes/member/MemberClassSkeleton";
import { fetchClasses } from "@/lib/classes";
import type { ClassFilter, FitnessClass } from "@/lib/types/classes";

interface ClassesPageProps {
  searchParams: Promise<{
    filter?: ClassFilter;
    search?: string;
    view?: "grid" | "calendar";
    level?: "beginner" | "intermediate" | "advanced";
  }>;
}

export default async function ClassesPage({ searchParams }: ClassesPageProps) {
  const { filter, search, level } = await searchParams;
  //set default values if not provided
  const defaultFilter = filter === undefined ? "all" : filter;
  const defaultLevel = level === undefined || null ? "beginner" : level;
  const classes = await fetchClasses({
    filter: defaultFilter,
    level: defaultLevel,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      {/* <Suspense fallback={<MemberClassSkeleton />}> */}
      <MemberClassList
        initialClasses={classes}
        filters={{ filter: defaultFilter, level: defaultLevel }}
        searchParams={{ search }}
      />
      {/* </Suspense> */}
    </div>
  );
}
