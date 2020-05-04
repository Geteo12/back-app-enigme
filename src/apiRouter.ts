import express from "express";
const compteController = require("./controller/compteController");
const accountController = require("./controller/accountController");

let apiRouter = express.Router();

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