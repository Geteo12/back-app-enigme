"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compteController = require("./controller/compteController");
let apiRouter = express_1.default.Router();
apiRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
apiRouter.route("/register/").post(compteController.register);
apiRouter.route("/login/").post(compteController.login);
apiRouter.route("/enigme/").get(compteController.getEnigme);
module.exports = apiRouter;
