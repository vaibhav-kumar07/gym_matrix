"use strict";
exports.__esModule = true;
var Button_1 = require("@/components/common/Button");
var request_1 = require("@/components/hooks/request");
var classes_1 = require("@/lib/classes");
var react_1 = require("react");
function MemberFilters(_a) {
    var filters = _a.filters;
    var appendSearchParams = request_1.useURLParams().appendSearchParams;
    return (react_1["default"].createElement("div", { className: "mb-8" },
        react_1["default"].createElement("div", { className: "flex flex-wrap items-center gap-2 mb-4" },
            react_1["default"].createElement(Button_1["default"], { onClick: function () { return appendSearchParams("filter", "all"); }, className: " border shadow-none " + (filters.filter === "all"
                    ? "bg-black  text-white hover:bg-black/80 hover:text-white"
                    : " bg-white text-black hover:bg-black/60 hover:text-white") }, "All Classes"),
            classes_1.classCategories.map(function (category) {
                console.log("category", filters.filter);
                return (react_1["default"].createElement(Button_1["default"], { key: category.id, onClick: function () {
                        return appendSearchParams("filter", category.id.toLowerCase());
                    }, className: " border shadow-none " + (filters.filter === category.id.toLowerCase()
                        ? "bg-black  text-white hover:bg-black/80 hover:text-white"
                        : " bg-white text-black hover:bg-black/60 hover:text-white") },
                    category.icon,
                    " ",
                    category.name));
            })),
        react_1["default"].createElement("div", { className: "flex flex-wrap items-center gap-2" }, classes_1.classLevels.map(function (level) {
            console.log(filters.level, level);
            return (react_1["default"].createElement(Button_1["default"], { key: level, onClick: function () { return appendSearchParams("level", level.toLowerCase()); }, className: " border shadow-none " + (filters.level == level.toLowerCase()
                    ? "bg-black  text-white hover:bg-black/80 hover:text-white"
                    : " bg-white text-black hover:bg-black/60 hover:text-white") }, level));
        }))));
}
exports["default"] = MemberFilters;
