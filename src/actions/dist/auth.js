"use server";
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
exports.handleAuthSuccess = exports.clearCookie = exports.logoutUserHandler = exports.setDeviceIdHandler = exports.loginUserHandler = exports.registerUserHandler = void 0;
var cookie_utils_1 = require("../lib/common/cookie-utils");
var auth_1 = require("@/lib/auth");
function registerUserHandler(payload) {
    return __awaiter(this, void 0, Promise, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, auth_1.registerUser(payload)];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    //   if (result.status) {
                    //     await setCookie("token", result.data.token);
                    //   }
                    //for now ,send a sucess response
                    return [2 /*return*/, {
                            status: true,
                            data: {
                                phone: payload.phone
                            }
                        }];
            }
        });
    });
}
exports.registerUserHandler = registerUserHandler;
function loginUserHandler(payload) {
    return __awaiter(this, void 0, Promise, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, auth_1.loginUser(payload)];
                case 1:
                    result = _a.sent();
                    console.log("result", result.status);
                    //   if (result.status) {
                    //     await setCookie("token", result.data.token);
                    //   }
                    //same in this case also
                    return [2 /*return*/, {
                            status: true,
                            data: {
                                phone: payload.phone
                            }
                        }];
            }
        });
    });
}
exports.loginUserHandler = loginUserHandler;
function setDeviceIdHandler(deviceId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cookie_utils_1.setCookie("deviceid", deviceId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.setDeviceIdHandler = setDeviceIdHandler;
function logoutUserHandler() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cookie_utils_1.setCookie("token", "")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.logoutUserHandler = logoutUserHandler;
function clearCookie(key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cookie_utils_1.deleteCookie(key)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.clearCookie = clearCookie;
function handleAuthSuccess(phone) {
    return __awaiter(this, void 0, Promise, function () {
        var userRole, redirectPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, cookie_utils_1.getCookieValue("role")];
                case 1:
                    userRole = _a.sent();
                    if (!userRole) {
                        return [2 /*return*/, {
                                success: false,
                                error: "No role found",
                                redirect: "/"
                            }];
                    }
                    // Set authentication token
                    return [4 /*yield*/, cookie_utils_1.setCookie("token", "true")];
                case 2:
                    // Set authentication token
                    _a.sent();
                    return [4 /*yield*/, cookie_utils_1.setCookie("phone", phone)];
                case 3:
                    _a.sent();
                    redirectPath = userRole === "owner" ? "/owner/gym" : "/member/gym";
                    return [2 /*return*/, {
                            success: true,
                            redirect: redirectPath
                        }];
                case 4:
                    error_1 = _a.sent();
                    return [2 /*return*/, {
                            success: false,
                            error: "Authentication failed",
                            redirect: "/"
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.handleAuthSuccess = handleAuthSuccess;
