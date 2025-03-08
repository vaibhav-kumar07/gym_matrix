import DeleteClass from "./DeleteClass";
import EditClassDetail from "./EditClassDetail";
import React from "react";

export default function EditAndDeleteClassWidget() {
    return (
        <section className="flex items-center gap-3">
            <EditClassDetail />
            <DeleteClass />
        </section>
    );
}
