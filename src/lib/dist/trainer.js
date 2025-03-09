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
exports.fetchTrainers = exports.trainerFilters = exports.trainers = void 0;
exports.trainers = [
    {
        id: "tr-002",
        name: "Mike Chen",
        level: "intermediate",
        specialization: "HIIT Training",
        experience: "5+ years",
        availability: "evening",
        popularity: "featured",
        priceRange: "standard",
        hourlyRate: 65,
        rating: 4.7,
        reviews: 98,
        clientCount: 38,
        gym: "Independent",
        certifications: ["ACE CPT", "TRX Certified"],
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
        coverImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
    },
    {
        id: "tr-003",
        name: "Emma Rodriguez",
        level: "beginner",
        specialization: "Yoga & Pilates",
        experience: "3+ years",
        availability: "flexible",
        popularity: "new",
        priceRange: "budget",
        hourlyRate: 45,
        rating: 4.8,
        reviews: 45,
        clientCount: 25,
        gym: "Zen Studio",
        certifications: ["RYT 200", "Pilates Certified"],
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        coverImage: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0"
    },
    {
        id: "tr-001",
        name: "Sarah Johnson",
        level: "expert",
        specialization: "Strength & Conditioning",
        experience: "8+ years",
        availability: "morning",
        popularity: "trending",
        priceRange: "premium",
        hourlyRate: 85,
        rating: 4.9,
        reviews: 156,
        clientCount: 45,
        gym: "Elite Fitness Center",
        certifications: ["NASM CPT", "CrossFit L2"],
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        coverImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
        bio: "Certified strength coach with 8+ years experience helping clients achieve their fitness goals",
        transformations: 120
    },
];
// Filter Options
exports.trainerFilters = {
    levels: [
        { id: "beginner", name: "Beginner Friendly", icon: "🌱" },
        { id: "intermediate", name: "Intermediate", icon: "⭐" },
        { id: "expert", name: "Expert", icon: "🏆" },
    ],
    availability: [
        { id: "morning", name: "Morning", icon: "🌅" },
        { id: "evening", name: "Evening", icon: "🌙" },
        { id: "flexible", name: "Flexible", icon: "📅" },
    ],
    priceRange: [
        { id: "budget", name: "Budget (<$50/hr)", icon: "💰" },
        { id: "standard", name: "Standard ($50-80/hr)", icon: "💰💰" },
        { id: "premium", name: "Premium (>$80/hr)", icon: "💰💰💰" },
    ],
    popularity: [
        { id: "trending", name: "Trending", icon: "🔥" },
        { id: "featured", name: "Featured", icon: "⭐" },
        { id: "new", name: "New Trainers", icon: "✨" },
    ]
};
var delay = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
function fetchTrainers(filters) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredTrainers, uniqueTrainers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent(); // Simulate network delay
                    filteredTrainers = __spreadArrays(exports.trainers);
                    if (filters.level) {
                        filteredTrainers = filteredTrainers.filter(function (trainer) { return trainer.level.toLowerCase() == filters.level.toLowerCase(); });
                    }
                    if (filters.availability) {
                        filteredTrainers = filteredTrainers.filter(function (trainer) {
                            return trainer.availability.toLowerCase() == filters.availability.toLowerCase();
                        });
                    }
                    if (filters.price) {
                        filteredTrainers = filteredTrainers.filter(function (trainer) {
                            return trainer.priceRange.toLowerCase() == filters.price.toLowerCase();
                        });
                    }
                    if (filters.popularity) {
                        filteredTrainers = filteredTrainers.filter(function (trainer) {
                            return trainer.popularity.toLowerCase() == filters.popularity.toLowerCase();
                        });
                    }
                    uniqueTrainers = new Set(filteredTrainers);
                    return [2 /*return*/, Array.from(uniqueTrainers)];
            }
        });
    });
}
exports.fetchTrainers = fetchTrainers;
