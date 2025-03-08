"use strict";
exports.__esModule = true;
exports.WorkoutsSkeleton = void 0;
function WorkoutsSkeleton() {
    return (React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-8" },
        React.createElement("div", { className: "flex justify-between items-center mb-8" },
            React.createElement("div", { className: "space-y-2" },
                React.createElement("div", { className: "h-8 w-48 bg-gray-200 rounded animate-pulse" }),
                React.createElement("div", { className: "h-4 w-72 bg-gray-200 rounded animate-pulse" })),
            React.createElement("div", { className: "h-10 w-32 bg-gray-200 rounded animate-pulse" })),
        React.createElement("div", { className: "w-full max-w-2xl mx-auto h-12 bg-gray-200 rounded mb-8 animate-pulse" }),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, [1, 2, 3, 4, 5, 6].map(function (i) { return (React.createElement("div", { key: i, className: "bg-white rounded-lg overflow-hidden shadow animate-pulse" },
            React.createElement("div", { className: "h-48 bg-gray-200" }),
            React.createElement("div", { className: "p-6 space-y-4" },
                React.createElement("div", { className: "flex items-center space-x-4" },
                    React.createElement("div", { className: "h-12 w-12 bg-gray-200 rounded-full" }),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement("div", { className: "h-4 w-24 bg-gray-200 rounded" }),
                        React.createElement("div", { className: "h-3 w-32 bg-gray-200 rounded" }))),
                React.createElement("div", { className: "h-6 w-3/4 bg-gray-200 rounded" }),
                React.createElement("div", { className: "space-y-2" },
                    React.createElement("div", { className: "h-4 w-full bg-gray-200 rounded" }),
                    React.createElement("div", { className: "h-4 w-5/6 bg-gray-200 rounded" })),
                React.createElement("div", { className: "flex justify-end space-x-3" },
                    React.createElement("div", { className: "h-9 w-24 bg-gray-200 rounded-full" }),
                    React.createElement("div", { className: "h-9 w-32 bg-gray-200 rounded-full" }))))); }))));
}
exports.WorkoutsSkeleton = WorkoutsSkeleton;
