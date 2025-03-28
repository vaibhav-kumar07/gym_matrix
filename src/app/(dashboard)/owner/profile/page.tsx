import OwnerBusinessOverview from "@/components/profile/owner/OwnerBusinessOverview";
import OwnerRecentActivity from "@/components/profile/owner/OwnerRecentActivity";
import OwnerUpcomingTasksTable from "@/components/profile/owner/OwnerUpcomingTaskTable";
import { getOwnerProfile } from "@/lib/owner";
import { IOwnerActivity, IOwnerStats, IOwnerTask } from "@/types/owner";

export default async function OwnerProfilePage() {
  const ownerData = await getOwnerProfile();

  return (
    <div className="col-span-2 space-y-5">
      <OwnerBusinessOverview stats={ownerData.data?.stats as IOwnerStats} />
      <OwnerRecentActivity
        activities={ownerData.data?.recentActivities as IOwnerActivity[]}
      />
      <OwnerUpcomingTasksTable
        tasks={ownerData.data?.upcomingTasks as IOwnerTask[]}
      />
    </div>
  );
}
