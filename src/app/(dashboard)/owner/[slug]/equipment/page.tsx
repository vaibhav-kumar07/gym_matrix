import PageHeaderWithButton from "@/components/common/PageHeaderWithButton";
import AddNewEquipmentButton from "@/components/equipment/AddNewEquipment";
import EquipmentFilterHeader from "@/components/equipment/EquipmentFilterHeader";
import EquipmentStatCardList from "@/components/equipment/EquipmentStatCardList";
import EquipmentTable from "@/components/equipment/EquipmentTable";
import { getEquipment } from "@/lib/equipment";
import React from "react";

type SearchParams = {
  filter?: "all" | "operational" | "maintenance" | "repair needed";
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const filter = (await searchParams).filter ?? "all";
  const equipments = await getEquipment(filter === "all" ? undefined : filter);

  return (
    <section className="p-6 space-y-5 ">
      <PageHeaderWithButton
        title="Equipments "
        description="Manage your fitness equipments"
        action={<AddNewEquipmentButton />}
      />
      <EquipmentStatCardList />
      <div className="border rounded-lg overflow-hidden mt-2">
        <EquipmentFilterHeader selectedStatus={filter} />
        <EquipmentTable equipments={equipments} />
      </div>
    </section>
  );
}
