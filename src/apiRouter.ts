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
    module.exports = apiRouter;