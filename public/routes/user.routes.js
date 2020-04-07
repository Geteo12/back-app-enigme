module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouveau collab
    router.post("localhost:4201/newUser", users.create); //postman
  
    app.use("", router);
  };