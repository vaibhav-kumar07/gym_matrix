"use strict";
exports.__esModule = true;
var Logo_1 = require("../Logo");
var RenderAuthButton_1 = require("./RenderAuthButton");
var navbar_1 = require("@/lib/navbar");
var link_1 = require("next/link");
var Navbar = function () {
    var navItems = navbar_1.getNavItems();
    return (React.createElement("div", { className: "py-3 px-8 flex items-center w-full sticky top-0 border-b  z-50 backdrop-blur-sm bg-white/50" },
        React.createElement(Logo_1["default"], null),
        React.createElement("nav", { className: "hidden lg:flex items-center gap-6 ml-10" }, navItems.map(function (item, index) { return (React.createElement(link_1["default"], { key: index, href: item.href, className: "text-gray-700 hover:text-black transition-colors font-medium" }, item.label)); })),
        React.createElement("div", { className: "ml-auto" },
            React.createElement(RenderAuthButton_1["default"], { className: "ml-auto" }))));
};
exports["default"] = Navbar;
