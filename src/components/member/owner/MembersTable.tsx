import { Label } from "@/components/common/Label";
import { ITableMetadata } from "@/components/common/table/Table";
import TableHeader from "@/components/common/table/TableHeader";
import TableRow from "@/components/common/table/TableRow";
import { IMember } from "@/lib/member";
import { cn } from "@/lib/utils";

interface ProfileManagementTableProps {
    profiles: IMember[];
    className?: string;
}

const profilesMetadata: ITableMetadata[] = [
    {
        columnName: "index",
        headerLabel: "Member",
        sortable: false,
        columnClass:
            "w-full md:w-[35%] lg:w-[25%] text-left text-muted-foreground md:pl-4",
        cellClass: "w-full md:w-[35%] lg:w-[25%] text-left md:pl-3",
        type: "widget",
        widgetName: "memberDetailWidget",
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
        columnName: "plan",
        headerLabel: "Plan",
        sortable: false,
        columnClass:
            "w-full md:w-[20%] lg:w-[15%] text-left text-muted-foreground",
        cellClass: "w-full md:w-[20%] lg:w-[15%]",
    },
    {
        columnName: "joinDate",
        headerLabel: "Join Date",
        sortable: false,
        columnClass:
            "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
        cellClass: "w-full md:w-[15%] lg:w-[15%]",
    },
    {
        columnName: "status",
        headerLabel: "Status",
        sortable: false,
        columnClass: "w-full md:w-[15%] lg:w-[15%]   text-muted-foreground",
        cellClass: "w-full md:w-[15%] lg:w-[15%] md:px-0 md:text-center ",
        type: "widget",
        widgetName: "memberTableStatus",
    },
    {
        columnName: "lastVisit",
        headerLabel: "Last Visit",
        sortable: false,
        columnClass:
            "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
        cellClass: "w-full md:w-[15%] lg:w-[15%]",
    },

    {
        columnName: "Actions",
        headerLabel: "Actions",
        sortable: false,
        columnClass:
            "w-full md:w-[15%] lg:w-[15%] text-left text-muted-foreground",
        cellClass: "w-full md:w-[15%] lg:w-[15%]",
        type: "widget",
        widgetName: "editAndDeleteMemberWidget",
    },
];

export default function MembersTable(props: ProfileManagementTableProps) {
    return (
        <div
            className={cn(
                "w-full flex flex-col gap-4 md:gap-0  md:overflow-auto",
                props.className,
            )}
        >
            <TableHeader
                metadata={profilesMetadata}
                className="border-none  rounded-none md:px-0 md:py-1.5 md:gap-0 text-foreground  "
            />
            {props.profiles?.length ? (
                props.profiles.map((profile: IMember, index: number) => {
                    return (
                        <TableRow
                            key={profile.id}
                            data={profile}
                            metadata={profilesMetadata}
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
