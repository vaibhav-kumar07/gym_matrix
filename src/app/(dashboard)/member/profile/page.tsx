import MemberProfile from "@/components/profile/member/MemberProfile";
import MemberProfilePage from "@/components/profile/member/memberMobile/MemberProfilePage";

export default function page() {
  return (
    <>
      <div className="p-6 hidden md:block">
        <MemberProfile />
      </div>
      <div className="md:hidden">
        <MemberProfilePage />
      </div>
    </>
  );
}
