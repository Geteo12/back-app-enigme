import express from "express";
const compteController = require("./controller/compteController");

let apiRouter = express.Router();

    apiRouter.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
      });

    apiRouter.route("/register/").post(compteController.register);
    apiRouter.route("/login/").post(compteController.login);
    apiRouter.route("/monCompte").get(compteController.getUser);
    apiRouter.route("/modifUtilisateur").put(compteController.updateUser);
    apiRouter.route("/modifMdp").put(compteController.updateMdp);
    apiRouter.route("/enigme/").get(compteController.getEnigme);
    apiRouter.route("/indice").get(compteController.getIndice);

    module.exports = apiRouter;