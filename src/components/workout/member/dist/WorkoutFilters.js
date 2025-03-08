"use client";
"use strict";
exports.__esModule = true;
exports.WorkoutFilters = void 0;
var request_1 = require("@/components/hooks/request");
var tabs_1 = require("@/components/ui/tabs");
function WorkoutFilters(_a) {
    var currentFilter = _a.currentFilter;
    var appendSearchParams = request_1.useURLParams().appendSearchParams;
    return (React.createElement("div", { className: "" },
        React.createElement(tabs_1.Tabs, { value: currentFilter, onValueChange: function (value) { return appendSearchParams("filter", value); }, className: "w-full" },
            React.createElement(tabs_1.TabsList, { className: "w-full max-w-2xl mx-auto bg-gray-100/50 p-1" },
                React.createElement(tabs_1.TabsTrigger, { value: "recommended", className: "flex-1 rounded-md" }, "Recommended"),
                React.createElement(tabs_1.TabsTrigger, { value: "strength", className: "flex-1 rounded-md" }, "Strength"),
                React.createElement(tabs_1.TabsTrigger, { value: "cardio", className: "flex-1 rounded-md" }, "Cardio"),
                React.createElement(tabs_1.TabsTrigger, { value: "flexibility", className: "flex-1 rounded-md" }, "Flexibility")))));
}
exports.WorkoutFilters = WorkoutFilters;
