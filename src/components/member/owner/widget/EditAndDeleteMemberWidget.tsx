import DeleteMember from "./DeleteMember";
import EditMemberDetail from "./EditMemberDetail";
import React from "react";

export default function EditAndDeleteMemberWidget() {
    return (
        <section className="flex items-center gap-3">
            <EditMemberDetail />
            <DeleteMember />
        </section>
    );
}
