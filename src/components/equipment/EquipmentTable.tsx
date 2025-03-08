import { Label } from "@/components/common/Label";
import { ITableMetadata } from "@/components/common/table/Table";
import TableHeader from "@/components/common/table/TableHeader";
import TableRow from "@/components/common/table/TableRow";
import { IEquipment } from "@/lib/equipment";
import { cn } from "@/lib/utils";

interface TableProps {
  equipments: IEquipment[];
  className?: string;
}

const equipmentsMetadata: ITableMetadata[] = [
  {
    columnName: "index",
    headerLabel: "Equipment",
    sortable: false,
    columnClass:
      "w-full md:w-[35%] lg:w-[25%] text-left text-muted-foreground md:pl-4",
    cellClass: "w-full md:w-[35%] lg:w-[25%] text-left md:pl-3",
    type: "widget",
    widgetName: "equipmentDetailWidget",
  },
  // {
  //     columnName: "email",
  //     headerLabel: "Email",
  //     sortable: false,
  //     columnClass:
  //         "w-full md:w-[20%] lg:w-[15%] text-left text-muted-foreground",
  //     cellClass: "w-full md:w-[20%] lg:w-[15%]",
  // },
  {
    columnName: "category",
    headerLabel: "Category",
    sortable: false,
    columnClass: "w-full md:w-[20%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[20%] lg:w-[15%]",
  },
  {
    columnName: "manufacturer",
    headerLabel: "Manufacturer",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
  },
  {
    columnName: "location",
    headerLabel: "Location",
    sortable: false,
    columnClass:
      "w-full md:w-[15%] lg:w-[15%] md:text-left  text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%] md:px-0 md:text-left ",
    // type: "widget",
    // widgetName: "classCapacityWidget",
  },
  {
    columnName: "status",
    headerLabel: "Status",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
  },

  {
    columnName: "lastMaintenance",
    headerLabel: "Last Maintenance",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
    type: "widget",
    widgetName: "editAndDeleteClassWidget",
  },
];

export default function EquipmentTable(props: TableProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-4 md:gap-0  md:overflow-auto",
        props.className
      )}
    >
      <TableHeader
        metadata={equipmentsMetadata}
        className="border-none  rounded-none md:px-0 md:py-1.5 md:gap-0 text-foreground  "
      />
      {props.equipments.length > 0 ? (
        props.equipments.map((profile: IEquipment, index: number) => {
          return (
            <TableRow
              key={profile.id}
              data={profile}
              metadata={equipmentsMetadata}
              className="w-full border-x-0 border-b-0 px-4 py-2 md:py-1 md:px-0"
            />
          );
        })
      ) : (
        <div className="py-2 align-middle mx-auto">
          <Label className="text-gray-500" variant="semibold">
            No Equipments Found
          </Label>
        </div>
      )}
    </div>
  );
}
