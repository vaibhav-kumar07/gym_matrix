"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.fetchWorkouts = exports.mockWorkouts = void 0;
exports.mockWorkouts = [
    {
        id: "1",
        title: "Full Body Power",
        type: "Strength",
        duration: 45,
        intensity: "High",
        calories: 450,
        equipment: ["Dumbbells", "Kettlebell", "Resistance Bands"],
        trainer: {
            id: "t1",
            name: "Marcus Chen",
            image: "https://public.readdy.ai/ai/img_res/35d11c8856bf4739ecd73f4ec9add00a.jpg",
            rating: 4.8,
            reviews: 128
        },
        description: "A comprehensive full-body workout combining compound movements and isolation exercises for maximum strength gains.",
        coverImage: "https://public.readdy.ai/ai/img_res/f850e4d311816458066dd997a7e38ee4.jpg",
        level: "Advanced"
    },
    {
        id: "2",
        title: "Cardio Blast",
        type: "Cardio",
        duration: 30,
        intensity: "High",
        calories: 350,
        equipment: ["Jump Rope", "Timer"],
        trainer: {
            id: "t2",
            name: "Sarah Williams",
            image: "https://public.readdy.ai/ai/img_res/c68ee9a33f43c6e1fd3e8a857e136b44.jpg",
            rating: 4.7,
            reviews: 95
        },
        description: "High-intensity cardio intervals designed to boost endurance and torch calories.",
        coverImage: "https://public.readdy.ai/ai/img_res/a000fe475bbdd2188b123c8fc17747ae.jpg",
        level: "Intermediate"
    },
    {
        id: "3",
        title: "Core & Mobility",
        type: "Flexibility",
        duration: 40,
        intensity: "Medium",
        calories: 250,
        equipment: ["Yoga Mat", "Foam Roller"],
        trainer: {
            id: "t3",
            name: "Emma Rodriguez",
            image: "https://public.readdy.ai/ai/img_res/361e72e96efa599993d0247d78b5c58e.jpg",
            rating: 4.9,
            reviews: 156
        },
        description: "Focus on core strength and mobility through dynamic stretching and controlled movements.",
        coverImage: "https://public.readdy.ai/ai/img_res/4d4184d1afb37201c0341f9e995e553f.jpg",
        level: "Beginner"
    },
];
// Simulate API delay
var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
function fetchWorkouts(filter, searchParams) {
    if (filter === void 0) { filter = "recommended"; }
    return __awaiter(this, void 0, Promise, function () {
        var filteredWorkouts, duration_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Simulate network delay
                return [4 /*yield*/, delay(1000)];
                case 1:
                    // Simulate network delay
                    _a.sent();
                    filteredWorkouts = __spreadArrays(exports.mockWorkouts);
                    // Apply filters
                    if (filter !== "recommended") {
                        filteredWorkouts = exports.mockWorkouts.filter(function (workout) { return workout.type.toLowerCase() === filter.toLowerCase(); });
                    }
                    // Apply additional filters from searchParams if needed
                    if (searchParams) {
                        if (searchParams.intensity) {
                            filteredWorkouts = filteredWorkouts.filter(function (workout) {
                                var _a;
                                return workout.intensity.toLowerCase() === ((_a = searchParams.intensity) === null || _a === void 0 ? void 0 : _a.toLowerCase());
                            });
                        }
                        if (searchParams.duration) {
                            duration_1 = parseInt(searchParams.duration);
                            filteredWorkouts = filteredWorkouts.filter(function (workout) { return workout.duration <= duration_1; });
                        }
                        if (searchParams.level) {
                            filteredWorkouts = filteredWorkouts.filter(function (workout) { var _a; return workout.level.toLowerCase() === ((_a = searchParams.level) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
                        }
                    }
                    return [2 /*return*/, filteredWorkouts];
            }
        });
    });
}
exports.fetchWorkouts = fetchWorkouts;
