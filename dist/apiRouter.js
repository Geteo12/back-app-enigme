"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compteController_1 = __importDefault(require("./controller/compteController"));
exports.router = (function () {
    const apiRouter = express_1.default.Router();
    apiRouter.route("/register/").post(compteController_1.default.register);
    apiRouter.route("/login/").post(compteController_1.default.login);
    return apiRouter;
})();
