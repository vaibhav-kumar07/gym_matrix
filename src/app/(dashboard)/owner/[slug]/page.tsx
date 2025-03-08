import ClassTableSmallView from "@/components/dashboard/owner/ClassTableSmallView";
import MemberRecentActivitiesList from "@/components/dashboard/owner/MemberRecentActivityCard";
import MembershipChart from "@/components/dashboard/owner/MemberShipChart";
import OwnerDashboardCardsList from "@/components/dashboard/owner/OwnerDashboardCard";

export default async function page() {
  return (
    <section className="w-full  p-6 overflow-y-auto ">
      <OwnerDashboardCardsList />
      <div className="w-full grid grid-cols-2 gap-8 mb-8">
        <MembershipChart />
        <MemberRecentActivitiesList />
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <ClassTableSmallView />
        <MemberRecentActivitiesList />
      </div>
    </section>
  );
}
