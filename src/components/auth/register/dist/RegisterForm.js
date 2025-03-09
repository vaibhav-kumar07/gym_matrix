"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var auth_1 = require("@/actions/auth");
var Button_1 = require("@/components/common/Button");
var GymDropdown_1 = require("@/components/common/GymDropdown");
var Label_1 = require("@/components/common/Label");
var use_toast_1 = require("@/components/hooks/use-toast");
var card_1 = require("@/components/ui/card");
var input_1 = require("@/components/ui/input");
var zod_1 = require("@hookform/resolvers/zod");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_2 = require("react");
var react_hook_form_1 = require("react-hook-form");
var z = require("zod");
// Validation Schema
var registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    gymId: z.string().optional(),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    password: z.string().min(6, "Password must be at least 6 characters")
});
var RegisterForm = function (_a) {
    var role = _a.role;
    var _b = react_2.useTransition(), isPending = _b[0], startTransition = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var router = navigation_1.useRouter();
    var _d = react_hook_form_1.useForm({ resolver: zod_1.zodResolver(registerSchema) }), register = _d.register, handleSubmit = _d.handleSubmit, setValue = _d.setValue, errors = _d.formState.errors;
    function onSubmit(data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setLoading(true);
                startTransition(function () { return __awaiter(_this, void 0, void 0, function () {
                    var registerResult, authResult, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 5, 6, 7]);
                                return [4 /*yield*/, auth_1.registerUserHandler({
                                        name: data.name,
                                        gymId: role !== "owner" ? data.gymId : undefined,
                                        phone: data.phone,
                                        password: data.password,
                                        role: role
                                    })];
                            case 1:
                                registerResult = _a.sent();
                                if (!registerResult.status) return [3 /*break*/, 3];
                                return [4 /*yield*/, auth_1.handleAuthSuccess(registerResult.data.phone)];
                            case 2:
                                authResult = _a.sent();
                                if (authResult.success && authResult.redirect) {
                                    use_toast_1.successToast("Registration Successful!");
                                    router.push(authResult.redirect); // This will redirect to /owner/gym or /member/gym
                                }
                                else {
                                    use_toast_1.errorToast(authResult.error || "Authentication failed!");
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                use_toast_1.errorToast(registerResult.error || "Registration failed!");
                                _a.label = 4;
                            case 4: return [3 /*break*/, 7];
                            case 5:
                                error_1 = _a.sent();
                                use_toast_1.errorToast("An unexpected error occurred");
                                return [3 /*break*/, 7];
                            case 6:
                                setLoading(false);
                                return [7 /*endfinally*/];
                            case 7: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    }
    return (React.createElement(card_1.CardContent, { className: "space-y-0 py-0" },
        React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "flex flex-col gap-6" },
            React.createElement("div", { className: "space-y-1" },
                React.createElement(Label_1.Label, { size: "sm", variant: "semibold" }, "Your Name"),
                React.createElement("div", { className: "relative" },
                    React.createElement(lucide_react_1.User, { className: "absolute left-3 top-3 text-gray-400", size: 16 }),
                    React.createElement(input_1.Input, __assign({ type: "text" }, register("name"), { className: "pl-10 text-[13px] font-medium rounded-md" }))),
                errors.name && (React.createElement("p", { className: "text-red-500 text-xs font-medium" }, errors.name.message))),
            role !== "owner" && (React.createElement("div", { className: "space-y-1" },
                React.createElement(Label_1.Label, { size: "sm", variant: "semibold" }, "Select Gym"),
                React.createElement(GymDropdown_1["default"], { onSelect: function (gymId) { return setValue("gymId", gymId); } }))),
            React.createElement("div", { className: "space-y-1" },
                React.createElement(Label_1.Label, { size: "sm", variant: "semibold" }, "Phone Number"),
                React.createElement("div", { className: "relative" },
                    React.createElement(lucide_react_1.Smartphone, { className: "absolute left-3 top-3 text-gray-400", size: 16 }),
                    React.createElement(input_1.Input, __assign({ type: "text" }, register("phone"), { className: "pl-10 text-[13px] font-medium rounded-md" }))),
                errors.phone && (React.createElement("p", { className: "text-red-500 text-xs font-medium" }, errors.phone.message))),
            React.createElement("div", { className: "space-y-1" },
                React.createElement(Label_1.Label, { size: "sm", variant: "semibold" }, "Password"),
                React.createElement("div", { className: "relative" },
                    React.createElement(lucide_react_1.Lock, { className: "absolute left-3 top-3 text-gray-400", size: 16 }),
                    React.createElement(input_1.Input, __assign({ type: "password" }, register("password"), { className: "pl-10 text-[13px] font-medium rounded-md" }))),
                errors.password && (React.createElement("p", { className: "text-red-500 text-xs font-medium" }, errors.password.message))),
            React.createElement(Button_1["default"], { type: "submit", size: "sm", loading: loading, className: "rounded-md h-9" }, role === "owner" ? "Register Gym" : "Join Gym"))));
};
exports["default"] = RegisterForm;
