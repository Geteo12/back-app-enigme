import express from "express";
const compteController = require("./controller/compteController");

let apiRouter = express.Router();

    apiRouter.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
      });

    apiRouter.route("/register/").post(compteController.register);
    apiRouter.route("/login/").post(compteController.login);

    module.exports = apiRouter;