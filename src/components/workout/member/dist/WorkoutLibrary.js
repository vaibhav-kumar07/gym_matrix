"use strict";
exports.__esModule = true;
exports.WorkoutLibrary = void 0;
var WorkoutCard_1 = require("./WorkoutCard");
var WorkoutFilters_1 = require("./WorkoutFilters");
var PageHeaderWithButton_1 = require("@/components/common/PageHeaderWithButton");
function WorkoutLibrary(_a) {
    var initialWorkouts = _a.initialWorkouts, searchParams = _a.searchParams;
    return (React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-8 space-y-4" },
        React.createElement(PageHeaderWithButton_1["default"], { title: "Workout Library", description: "Personalized workouts tailored to your fitness journey" }),
        React.createElement(WorkoutFilters_1.WorkoutFilters, { currentFilter: searchParams.filter || "recommended" }),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, initialWorkouts.map(function (workout) { return (React.createElement(WorkoutCard_1.WorkoutCard, { key: workout.id, workout: workout })); }))));
}
exports.WorkoutLibrary = WorkoutLibrary;
