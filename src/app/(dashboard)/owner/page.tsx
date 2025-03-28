import ClassTableSmallView from "@/components/dashboard/owner/ClassTableSmallView";
import MemberRecentActivitiesList from "@/components/dashboard/owner/MemberRecentActivityCard";
import MembershipChart from "@/components/dashboard/owner/MemberShipChart";
import OwnerDashboardCardsList from "@/components/dashboard/owner/OwnerDashboardCard";
import { getMyGym } from "@/lib/gym";

// Inside your page component file, e.g., page.tsx
export const dynamic = "force-dynamic";

// import { redirect } from "next/navigation";

export default async function page() {
  const result = await getMyGym();
  // if (result.data == null) {
  // redirect("/owner/gym/new");
  // }
  return (
    <section className="w-full  p-6 overflow-y-auto ">
      <>
        <OwnerDashboardCardsList />
        <div className="w-full grid grid-cols-2 gap-8 mb-8">
          <MembershipChart />
          <MemberRecentActivitiesList />
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <ClassTableSmallView />
          <MemberRecentActivitiesList />
        </div>
      </>
    </section>
  );
}
