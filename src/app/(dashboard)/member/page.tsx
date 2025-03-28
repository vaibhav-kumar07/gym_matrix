import MobileDashboardView from "@/components/dashboard/member/MobileDashboardView";
import MemberDashboardDesktop from "@/components/dashboard/member/desktop/MemberDesktopView";
import { getMemberProfile } from "@/lib/memberprofile";
import { redirect } from "next/navigation";

// Inside your page component file, e.g., page.tsx
export const dynamic = "force-dynamic";

export default async function MemberMobileDashboard() {
  const result = await getMemberProfile();
  if (result.data == null) redirect("/member/profile");

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
