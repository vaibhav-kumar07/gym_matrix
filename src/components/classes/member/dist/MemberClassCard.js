"use strict";
exports.__esModule = true;
exports.MemberClassCard = void 0;
var Button_1 = require("@/components/common/Button");
var Label_1 = require("@/components/common/Label");
var avatar_1 = require("@/components/ui/avatar");
var badge_1 = require("@/components/ui/badge");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
function MemberClassCard(_a) {
    var classItem = _a.classItem;
    return (React.createElement(card_1.Card, { className: "overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl" },
        React.createElement("div", { className: "relative h-48" },
            React.createElement("img", { src: classItem.coverImage, alt: classItem.title, className: "w-full h-full object-cover rounded-t-2xl" }),
            React.createElement("div", { className: "absolute top-4 right-4 flex space-x-2" },
                React.createElement(badge_1.Badge, { className: "bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm" },
                    React.createElement(lucide_react_1.Clock, { className: "w-4 h-4 mr-2" }),
                    classItem.duration,
                    " min"),
                React.createElement(badge_1.Badge, { className: "bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm" },
                    "$",
                    classItem.price))),
        React.createElement("div", { className: "p-5" },
            React.createElement("div", { className: "flex items-center space-x-4 mb-4" },
                React.createElement(avatar_1.Avatar, { className: "h-10 w-10 ring-2 ring-offset-2 ring-primary/20 shadow-md " },
                    React.createElement(avatar_1.AvatarImage, { className: "object-cover", src: classItem.instructor.image, alt: classItem.instructor.name }),
                    React.createElement(avatar_1.AvatarFallback, null, classItem.instructor.name
                        .split(" ")
                        .map(function (n) { return n[0]; })
                        .join(""))),
                React.createElement("div", null,
                    React.createElement(Label_1.Label, { size: "sm", variant: "semibold", className: "font-medium text-gray-900" }, classItem.instructor.name),
                    React.createElement("div", { className: "flex items-center text-sm text-gray-500" },
                        React.createElement(lucide_react_1.Star, { className: "w-4 h-4 text-yellow-400 mr-1" }),
                        React.createElement(Label_1.Label, { size: "xs", variant: "semibold" }, classItem.instructor.rating),
                        React.createElement(Label_1.Label, { size: "xs", variant: "semibold", className: "mx-1" }, "\u2022"),
                        React.createElement(Label_1.Label, { size: "xs", variant: "semibold" },
                            classItem.instructor.reviews,
                            " reviews")))),
            React.createElement(Label_1.Label, { size: "lg", variant: "bold", className: "text-gray-900 mb-1" }, classItem.title),
            React.createElement("div", { className: "space-y-2 mb-4 mt-2" },
                React.createElement("div", { className: "flex items-center text-gray-600" },
                    React.createElement(lucide_react_1.Calendar, { className: "w-4 h-4 mr-2" }),
                    React.createElement(Label_1.Label, { size: "xs", variant: "semibold" }, classItem.schedule)),
                React.createElement("div", { className: "flex items-center text-gray-600" },
                    React.createElement(lucide_react_1.Users, { className: "w-4 h-4 mr-2" }),
                    React.createElement(Label_1.Label, { size: "xs", variant: "semibold" },
                        classItem.enrolled,
                        "/",
                        classItem.capacity,
                        " spots")),
                React.createElement(badge_1.Badge, { variant: "secondary", className: "font-medium" }, classItem.level)),
            React.createElement("div", { className: "w-full grid grid-cols-2 gap-2" },
                React.createElement(Button_1["default"], { variant: "outline", className: "rounded-lg hover:bg-gray-50 h-8" }, "Details"),
                React.createElement(Button_1["default"], { className: "rounded-lg bg-primary hover:bg-primary/90 h-8" }, "Book Now")))));
}
exports.MemberClassCard = MemberClassCard;
