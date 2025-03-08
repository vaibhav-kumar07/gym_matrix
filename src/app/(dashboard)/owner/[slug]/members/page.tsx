import PageHeaderWithButton from "@/components/common/PageHeaderWithButton";
import AddNewMemberButton from "@/components/member/owner/AddNewMemberButton";
import MemberFilterHeader from "@/components/member/owner/MemberFilterHeader";
import ClassStatCardList from "@/components/member/owner/MemberStatCardsList";
import MembersTable from "@/components/member/owner/MembersTable";
import { getMembers } from "@/lib/member";
import React from "react";

type SearchParams = {
  filter?: "active" | "pending" | "all" | "inactive";
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const filter = (await searchParams).filter ?? "all";
  const profilesData = await getMembers(filter === "all" ? undefined : filter);

  return (
    <section className="p-6 space-y-5 ">
      <PageHeaderWithButton
        title="Members"
        description="Manage your gym members and their memberships"
        action={<AddNewMemberButton />}
      />
      <ClassStatCardList />
      <div className="border rounded-lg overflow-hidden mt-2">
        <MemberFilterHeader selectedStatus={filter} />
        <MembersTable profiles={profilesData} />
      </div>
    </section>
  );
}
