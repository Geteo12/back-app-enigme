"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compteController = require("./controller/compteController");
const accountController = require("./controller/accountController");
let apiRouter = express_1.default.Router();
apiRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
apiRouter.route("/register/").post(compteController.register);
//apiRouter.route("/register/").post(accountController);
apiRouter.route("/login/").post(compteController.login);
//apiRouter.route("/login/").post(accountController);  
apiRouter.route("/monCompte").get(compteController.getUser);
apiRouter.route("/modifUtilisateur").put(compteController.updateUser);
apiRouter.route("/modifMdp").put(compteController.updateMdp);
module.exports = apiRouter;
