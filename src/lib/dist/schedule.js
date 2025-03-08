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
exports.__esModule = true;
exports.getScheduleData = exports.demoScheduleData = void 0;
exports.demoScheduleData = {
    timeSlots: [
        { time: "07:00", period: "AM", available: true },
        { time: "08:30", period: "AM", available: true },
        { time: "10:00", period: "AM", available: false },
        { time: "11:30", period: "AM", available: true },
        { time: "02:00", period: "PM", available: true },
        { time: "03:30", period: "PM", available: true },
        { time: "05:00", period: "PM", available: false },
        { time: "06:30", period: "PM", available: true },
    ],
    trainers: [
        {
            id: 1,
            name: "Sarah Johnson",
            specialty: "Yoga & Pilates",
            rating: 4.9,
            reviews: 127,
            image: "https://public.readdy.ai/ai/img_res/c02556456ce972ff9c0b5d4dbf7acb0e.jpg"
        },
        {
            id: 2,
            name: "David Martinez",
            specialty: "Strength Training",
            rating: 4.8,
            reviews: 98,
            image: "https://public.readdy.ai/ai/img_res/b25c2f58d803425fbf5f9cba9efdb5e9.jpg"
        },
        {
            id: 3,
            name: "Emma Wilson",
            specialty: "HIIT & Cardio",
            rating: 4.9,
            reviews: 156,
            image: "https://public.readdy.ai/ai/img_res/eac8625f2a0a0b75572752b1ed19fc37.jpg"
        },
    ],
    classTypes: [
        {
            id: 1,
            name: "Yoga Flow",
            duration: "60 min",
            intensity: "Medium",
            image: "https://public.readdy.ai/ai/img_res/4543d03727166c7deace3e4c860690bf.jpg"
        },
        {
            id: 2,
            name: "HIIT Circuit",
            duration: "45 min",
            intensity: "High",
            image: "https://public.readdy.ai/ai/img_res/f008f3171f48534338735d038158372e.jpg"
        },
        {
            id: 3,
            name: "Strength Basics",
            duration: "50 min",
            intensity: "Medium",
            image: "https://public.readdy.ai/ai/img_res/659c1029ff296cada6e2107267910eca.jpg"
        },
    ]
};
// API service
function getScheduleData() {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            try {
                // In development, return mock data
                if (process.env.NODE_ENV === "development") {
                    return [2 /*return*/, exports.demoScheduleData];
                }
                // In production, make actual API call
                // const response = await fetch("/api/member/schedule");
                // if (!response.ok) {
                //   throw new Error("Failed to fetch schedule data");
                // }
                return [2 /*return*/, exports.demoScheduleData];
            }
            catch (error) {
                console.error("Error fetching schedule data:", error);
                throw error;
            }
            return [2 /*return*/];
        });
    });
}
exports.getScheduleData = getScheduleData;
