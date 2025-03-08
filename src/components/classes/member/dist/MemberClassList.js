"use client";
"use strict";
exports.__esModule = true;
exports.MemberClassList = void 0;
var MemberClassCard_1 = require("./MemberClassCard");
var MemberFilters_1 = require("./MemberFilters");
var PageHeaderWithButton_1 = require("@/components/common/PageHeaderWithButton");
function MemberClassList(_a) {
    var initialClasses = _a.initialClasses, filters = _a.filters, searchParams = _a.searchParams;
    return (React.createElement("div", { className: "container mx-auto px-4" },
        React.createElement("div", { className: "mb-6" },
            React.createElement(PageHeaderWithButton_1["default"], { title: "Fitness Classes", description: "Choose your favorite fitness classes" })),
        React.createElement(MemberFilters_1["default"], { filters: filters }),
        initialClasses.length > 0 ? (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3" }, initialClasses.map(function (classItem) { return (React.createElement(MemberClassCard_1.MemberClassCard, { key: classItem.id, classItem: classItem })); }))) : (React.createElement("div", { className: "flex flex-col items-center justify-center py-12" },
            React.createElement("p", { className: "text-lg font-medium text-gray-900" }, "No classes found"),
            React.createElement("p", { className: "text-sm text-gray-500" }, "Try adjusting your filters")))));
}
exports.MemberClassList = MemberClassList;
