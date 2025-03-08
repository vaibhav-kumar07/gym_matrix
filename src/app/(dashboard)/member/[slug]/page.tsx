import MobileDashboardView from "@/components/dashboard/member/MobileDashboardView";
import MemberDashboardDesktop from "@/components/dashboard/member/desktop/MemberDesktopView";

export default async function MemberMobileDashboard() {
  return (
    <section className="">
      <div className="hidden md:block">
        <MemberDashboardDesktop />
      </div>
      <div className="block md:hidden">
        <MobileDashboardView />
      </div>
    </section>
  );
}
