import { ITableMetadata } from "@/components/common/table/Table";
import TableHeader from "@/components/common/table/TableHeader";
import TableRow from "@/components/common/table/TableRow";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface OwnerUpcomingTasksProps {
  tasks: Array<{
    task: string;
    date: string;
    priority: string;
    status: string;
  }>;
}

const tasksMetadata: ITableMetadata[] = [
  {
    columnName: "task",
    headerLabel: "Task",
    sortable: false,
    columnClass: "w-full md:w-[35%] lg:w-[25%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[35%] lg:w-[25%] text-left",
  },
  {
    columnName: "date",
    headerLabel: "Due Date",
    sortable: false,
    columnClass: "w-full md:w-[20%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[20%] lg:w-[15%]",
  },
  {
    columnName: "priority",
    headerLabel: "Priority",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
    // type: "widget",
    // widgetName: "priorityBadge",
  },
  {
    columnName: "status",
    headerLabel: "Status",
    sortable: false,
    columnClass: "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
    cellClass: "w-full md:w-[15%] lg:w-[15%]",
    // type: "widget",
    // widgetName: "statusBadge",
  },
];

export default function OwnerUpcomingTasksTable({
  tasks,
}: OwnerUpcomingTasksProps) {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur-md border-none shadow-lg rounded-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Tasks</h3>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:overflow-auto">
        <TableHeader
          metadata={tasksMetadata}
          className="border-none rounded-none md:px-0 md:py-1.5 md:gap-0 text-foreground"
        />
        {tasks?.length ? (
          tasks.map((task) => (
            <TableRow
              key={task.task}
              data={task}
              metadata={tasksMetadata}
              className="w-full border-x-0 border-b-0 px-4 py-2 md:py-1 md:px-0"
            />
          ))
        ) : (
          <div className="py-2 align-middle mx-auto">
            <p className="text-gray-500">No tasks found</p>
          </div>
        )}
      </div>
    </Card>
  );
}
