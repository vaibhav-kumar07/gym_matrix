"use strict";
exports.__esModule = true;
exports.WorkoutCard = void 0;
var Button_1 = require("@/components/common/Button");
var Label_1 = require("@/components/common/Label");
var avatar_1 = require("@/components/ui/avatar");
var badge_1 = require("@/components/ui/badge");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
function WorkoutCard(_a) {
    var workout = _a.workout;
    return (React.createElement(card_1.Card, { className: "overflow-hidden border shadow- none rounded-lg hover:shadow-2xl transition-all duration-500" },
        React.createElement("div", { className: "relative h-48" },
            React.createElement("img", { src: workout.coverImage, alt: workout.title, className: "w-full h-full object-cover" }),
            React.createElement("div", { className: "absolute top-4 right-4" },
                React.createElement(badge_1.Badge, { className: "bg-white/90 text-gray-900" },
                    React.createElement(lucide_react_1.Flame, { className: "w-4 h-4 text-orange-500 mr-2" }),
                    workout.calories,
                    " cal"))),
        React.createElement("div", { className: "px-5 py-3 pb-4" },
            React.createElement("div", { className: "flex items-center space-x-4 mb-4" },
                React.createElement(avatar_1.Avatar, { className: "h-8 w-8 ring-2 ring-offset-2 ring-primary/20" },
                    React.createElement(avatar_1.AvatarImage, { src: workout.trainer.image, alt: workout.trainer.name }),
                    React.createElement(avatar_1.AvatarFallback, null, workout.trainer.name
                        .split(" ")
                        .map(function (n) { return n[0]; })
                        .join(""))),
                React.createElement("div", null,
                    React.createElement(Label_1.Label, { size: "sm", className: "font-medium text-gray-900" }, workout.trainer.name),
                    React.createElement("div", { className: "flex items-center text-sm text-gray-500" },
                        React.createElement(lucide_react_1.Star, { className: "w-4 h-4 text-yellow-400 mr-1" }),
                        React.createElement(Label_1.Label, { size: "sm", className: "mx-1" }, workout.trainer.rating),
                        React.createElement("span", { className: "mx-1" }, "\u2022"),
                        React.createElement(Label_1.Label, { size: "sm" },
                            workout.trainer.reviews,
                            " reviews")))),
            React.createElement(Label_1.Label, { size: "lg", className: " font-bold text-gray-900 mb-2" }, workout.title),
            React.createElement("div", { className: "w-full flex items-center gap-4 flex-wrap mb-2" },
                React.createElement("div", { className: "w-fit flex items-center text-gray-600" },
                    React.createElement(lucide_react_1.Clock, { className: "w-4 h-4" }),
                    React.createElement(Label_1.Label, { size: "sm", className: "ml-2" },
                        workout.duration,
                        " min")),
                React.createElement("div", { className: "w-fit flex items-center text-gray-600" },
                    React.createElement(lucide_react_1.Signal, { className: "w-4 h-4" }),
                    React.createElement(Label_1.Label, { size: "sm", className: "ml-2" },
                        workout.intensity,
                        " Intensity")),
                React.createElement("div", { className: "w-fit flex items-center text-gray-600" },
                    React.createElement(lucide_react_1.Layers, { className: "w-4 h-4" }),
                    React.createElement(Label_1.Label, { size: "sm", className: "ml-2" }, workout.level))),
            React.createElement("div", { className: "w-full grid grid-cols-2 gap-4" },
                React.createElement(Button_1["default"], { variant: "outline", className: "!rounded-md" },
                    React.createElement(link_1["default"], { href: "/workouts/" + workout.id }, "Details")),
                React.createElement(Button_1["default"], { className: "!rounded-md bg-primary hover:bg-primary/90" },
                    React.createElement(link_1["default"], { href: "/workouts/" + workout.id + "/start" }, "Start Workout"))))));
}
exports.WorkoutCard = WorkoutCard;
