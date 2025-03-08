import AddNewClassButton from "@/components/classes/AddNewClassButton";
import ClassFilterHeader from "@/components/classes/ClassFilterHeader";
import ClassStatCardList from "@/components/classes/ClassStatCardsList";
import ClassesTable from "@/components/classes/ClassTable";
import PageHeaderWithButton from "@/components/common/PageHeaderWithButton";
import { getClasses } from "@/lib/classes";
// import { getMembers } from "@/lib/member";
import React from "react";

type SearchParams = {
  filter?: "active" | "upcoming";
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const filter = (await searchParams).filter ?? "all";
  const data = await getClasses(filter === "all" ? undefined : filter);

  return (
    <section className="p-6 space-y-5 ">
      <PageHeaderWithButton
        title="Classes "
        description="Manage your fitness classes and schedules"
        action={<AddNewClassButton />}
      />
      <ClassStatCardList />
      <div className="border rounded-lg overflow-hidden mt-2">
        <ClassFilterHeader selectedStatus={filter} />
        <ClassesTable classes={data} />
      </div>
    </section>
  );
}
