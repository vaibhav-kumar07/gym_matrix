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
exports.getDesktopMemberDashboard = exports.updateMemberProfile = exports.getUpcomingSessions = exports.updateMemberStats = exports.getMemberDashboard = exports.getMembers = void 0;
function getMembers(filterStatus) {
    return __awaiter(this, void 0, Promise, function () {
        var images, names, plans, statuses, members;
        return __generator(this, function (_a) {
            images = [
                "https://public.readdy.ai/ai/img_res/40593bf2ea7940da39f1597a17dd997e.jpg",
                "https://public.readdy.ai/ai/img_res/d098674f748dba111815683670eeee21.jpg",
                "https://public.readdy.ai/ai/img_res/102b2def19660278a22c527026c21d7c.jpg",
                "https://public.readdy.ai/ai/img_res/b05b8401b442a4c3dc92200b7e2250f5.jpg",
                "https://public.readdy.ai/ai/img_res/d6ce06dff82680e9e064aae597468cd1.jpg",
            ];
            names = [
                "James Anderson",
                "Sophie Martinez",
                "Ryan Thompson",
                "Emily Chen",
                "Michael Roberts",
                "Olivia Brown",
                "William Carter",
                "Emma Johnson",
                "Liam Smith",
                "Charlotte Davis",
                "Benjamin Wilson",
                "Ava Moore",
                "Noah Taylor",
                "Sophia Lee",
                "Lucas White",
                "Amelia Harris",
                "Mason Clark",
                "Mia Lewis",
                "Elijah Hall",
                "Harper Young",
                "Alexander King",
                "Evelyn Scott",
                "Daniel Adams",
                "Ella Nelson",
                "Matthew Baker",
                "Scarlett Hill",
                "David Green",
                "Abigail Walker",
                "Henry Perez",
                "Lily Campbell",
            ];
            plans = [
                "Premium",
                "Standard",
                "Basic",
            ];
            statuses = [
                "active",
                "inactive",
                "pending",
            ];
            members = names.map(function (name, index) {
                var status = statuses[index % statuses.length];
                return {
                    id: index + 1,
                    name: name,
                    email: name.toLowerCase().replace(/\s/g, ".") + "@email.com",
                    plan: plans[index % plans.length],
                    joinDate: "2024-" + String(Math.floor(Math.random() * 12) + 1).padStart(2, "0") + "-" + String(Math.floor(Math.random() * 28) + 1).padStart(2, "0"),
                    status: status,
                    lastVisit: status === "pending"
                        ? "Not visited"
                        : "2025-" + String(Math.floor(Math.random() * 2) + 1).padStart(2, "0") + "-" + String(Math.floor(Math.random() * 28) + 1).padStart(2, "0"),
                    image: images[index % images.length]
                };
            });
            return [2 /*return*/, filterStatus
                    ? members.filter(function (member) { return member.status === filterStatus; })
                    : members];
        });
    });
}
exports.getMembers = getMembers;
// Mock data for development
var mockDashboardData = {
    stats: {
        weeklyAttendance: 85,
        streak: 12,
        todaySessions: 2,
        remainingDays: 45
    },
    upcomingSessions: [
        {
            id: "1",
            type: "HIIT Training",
            trainer: "Emma Wilson",
            time: "10:30 AM",
            date: "Today",
            trainerImage: "https://public.readdy.ai/ai/img_res/a5057f22ab079cbf6d94cb218b9178f0.jpg"
        },
        {
            id: "2",
            type: "Strength Training",
            trainer: "Michael Chen",
            time: "2:00 PM",
            date: "Tomorrow",
            trainerImage: "https://public.readdy.ai/ai/img_res/d52fbc9b2625a9476573d004c5a2c152.jpg"
        },
        {
            id: "3",
            type: "Yoga Flow",
            trainer: "Sarah Johnson",
            time: "9:00 AM",
            date: "Tomorrow",
            trainerImage: "https://public.readdy.ai/ai/img_res/543f60ac10caa40e756cde63ca823436.jpg"
        },
    ],
    member: {
        id: "1",
        name: "James Davidson",
        avatar: "https://public.readdy.ai/ai/img_res/543f60ac10caa40e756cde63ca823436.jpg",
        initials: "JD"
    }
};
// Simulate API delay
var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
function getMemberDashboard() {
    return __awaiter(this, void 0, Promise, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // Simulate API call delay
                    return [4 /*yield*/, delay(1000)];
                case 1:
                    // Simulate API call delay
                    _a.sent();
                    // In development, return mock data
                    if (process.env.NODE_ENV === "development") {
                        return [2 /*return*/, mockDashboardData];
                    }
                    // In production, make actual API call
                    // const response = await fetch("/api/member/dashboard");
                    // if (!response.ok) {
                    //   throw new Error("Failed to fetch dashboard data");
                    // }
                    return [2 /*return*/, mockDashboardData];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error fetching dashboard:", error_1);
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getMemberDashboard = getMemberDashboard;
// Additional API functions for future use
function updateMemberStats(stats) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(500)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, __assign(__assign({}, mockDashboardData.stats), stats)];
            }
        });
    });
}
exports.updateMemberStats = updateMemberStats;
function getUpcomingSessions() {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(500)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, mockDashboardData.upcomingSessions];
            }
        });
    });
}
exports.getUpcomingSessions = getUpcomingSessions;
function updateMemberProfile(profile) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(500)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, __assign(__assign({}, mockDashboardData.member), profile)];
            }
        });
    });
}
exports.updateMemberProfile = updateMemberProfile;
// Mock data for development
var mockDesktopDashboardData = {
    stats: {
        monthlyProgress: 75,
        weeklyWorkouts: 12,
        caloriesBurned: 8540,
        activeStreak: 15,
        weeklyProgress: 8,
        caloriesProgress: 12
    },
    nutrition: {
        calories: {
            current: 2100,
            target: 2400
        },
        protein: {
            current: 120,
            target: 150
        },
        carbs: {
            current: 250,
            target: 300
        }
    },
    schedule: [
        {
            id: 1,
            type: "HIIT Training",
            time: "10:00 AM - 11:00 AM",
            duration: "1 hour",
            icon: "running"
        },
        {
            id: 2,
            type: "Strength Training",
            time: "2:00 PM - 3:30 PM",
            duration: "1.5 hours",
            icon: "dumbbell"
        },
        {
            id: 3,
            type: "Evening Yoga",
            time: "5:00 PM - 6:00 PM",
            duration: "1 hour",
            icon: "yoga"
        },
    ],
    member: {
        name: "Christopher",
        avatar: "https://public.readdy.ai/ai/img_res/1d209bdef59d737e20dbd4caa77444da.jpg",
        notifications: 3
    }
};
function getDesktopMemberDashboard() {
    return __awaiter(this, void 0, Promise, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    // In development, return mock data
                    if (process.env.NODE_ENV === "development") {
                        return [2 /*return*/, mockDesktopDashboardData];
                    }
                    return [4 /*yield*/, fetch("/api/member/dashboard")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch dashboard data");
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error fetching dashboard:", error_2);
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getDesktopMemberDashboard = getDesktopMemberDashboard;
