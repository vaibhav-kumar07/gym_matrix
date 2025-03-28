import { SessionCard } from "./DesktopSessionCard";
import { SessionDetailsDialog } from "./DesktopSessionDialog";
import { SessionFilters } from "./DesktopSessionFilter";
import SessionsSkeleton from "./SessionSkeleton";
import { errorToast, successToast } from "@/components/hooks/use-toast";
import { DesktopFetchSessions, DesktopBookSession } from "@/lib/session";
import { FitnessSession, SessionFilter } from "@/types/session";

// import { useState, useEffect } from "react";

// import { useToast } from "@/hooks/use-toast";
// import { SessionsSkeleton } from "./DesktopSessionSkeleton";

export default function DesktopSessionsPage({
  sessions,
  activeFilter,
}: {
  sessions: FitnessSession[];
  activeFilter: SessionFilter;
}) {
  // const [sessions, setSessions] = useState<FitnessSession[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [selectedSession, setSelectedSession] = useState<FitnessSession | null>(
  //   null
  // );
  // const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  // const [activeFilter, setActiveFilter] = useState<SessionFilter>("all");
  // const [isPremiumMember] = useState(true);

  // useEffect(() => {
  //   loadSessions(activeFilter);
  // }, [activeFilter]);

  // async function loadSessions(filter: SessionFilter) {
  //   try {
  //     setLoading(true);
  //     const data = await DesktopFetchSessions(filter);
  //     setSessions(data);
  //   } catch (error) {
  //     successToast("Failed to load sessions");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function handleBookSession(session: FitnessSession) {
  //   try {
  //     const result = await DesktopBookSession(session.id);
  //     if (result.success) {
  //       successToast("Session booked successfully!");
  //       loadSessions(activeFilter);
  //     } else {
  //       errorToast(result.message);
  //     }
  //   } catch (error) {
  //     errorToast("Failed to book session");
  //   }
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <SessionFilters activeFilter={activeFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                isPremiumMember={true}
                // onViewDetails={(session: FitnessSession) => {
                //   setSelectedSession(session);
                //   setShowDetailsDialog(true);
                // }}
                // onBookSession={handleBookSession}
              />
            ))}
          </div>
        </div>
      </main>

      {/* <SessionDetailsDialog
        session={selectedSession}
        isOpen={showDetailsDialog}
        onClose={() => setShowDetailsDialog(false)}
        onBook={handleBookSession}
      /> */}
    </div>
  );
}
