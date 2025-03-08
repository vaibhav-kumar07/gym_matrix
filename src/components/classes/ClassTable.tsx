import { Label } from "@/components/common/Label";
import { ITableMetadata } from "@/components/common/table/Table";
import TableHeader from "@/components/common/table/TableHeader";
import TableRow from "@/components/common/table/TableRow";
import { IClass } from "@/lib/classes";
import { cn } from "@/lib/utils";

interface TableProps {
  classes: IClass[];
  className?: string;
}

const classesMetadata: ITableMetadata[] = [
  {
    columnName: "index",
    headerLabel: "Class",
    sortable: false,
    columnClass:
      "w-full md:w-[35%] lg:w-[25%] text-left text-muted-foreground md:pl-4",
    cellClass: "w-full md:w-[35%] lg:w-[25%] text-left md:pl-3",
    type: "widget",
    widgetName: "classDetailWidget",
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
    columnName: "schedule",
    headerLabel: "Schedule",
    sortable: false,
    columnClass: "w-full md:w-[20%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[20%] lg:w-[15%]",
  },
  {
    columnName: "time",
    headerLabel: "time",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
  },
  {
    columnName: "capacity",
    headerLabel: "Capacity",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%]   text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%] md:px-0 md:text-center ",
    type: "widget",
    widgetName: "classCapacityWidget",
  },
  {
    columnName: "status",
    headerLabel: "Status",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
  },

  {
    columnName: "Actions",
    headerLabel: "Actions",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
    type: "widget",
    widgetName: "editAndDeleteClassWidget",
  },
];

export default function ClassesTable(props: TableProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-4 md:gap-0  md:overflow-auto",
        props.className
      )}
    >
      <TableHeader
        metadata={classesMetadata}
        className="border-none  rounded-none md:px-0 md:py-1.5 md:gap-0 text-foreground  "
      />
      {props.classes.length > 0 ? (
        props.classes.map((profile: IClass) => {
          return (
            <TableRow
              key={profile.id}
              data={profile}
              metadata={classesMetadata}
              className="w-full border-x-0 border-b-0 px-4 py-2 md:py-1 md:px-0"
            />
          );
        })
      ) : (
        <div className="py-2 align-middle mx-auto">
          <Label className="text-gray-500" variant="semibold">
            No Candidates Found with matching Criteria
          </Label>
        </div>
      )}
    </div>
  );
}
