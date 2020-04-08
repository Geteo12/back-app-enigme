var express = require('express');
var router = express.Router();
var userService = require('../services/user.service')

module.exports = app => {
	const user = require("../controllers/user.controller");
  
	
	//router.post("/newUser", user.create);
	
	router.post("/newUser", (req, res, next) =>{
		const body = req.body;
		const user = user.create(body);
		console.log("ON ESt DANS LE POST DE USER ROUTES")
		return res.status(201).json({user : user});
	});
	
  
	app.use("http://localhost:4200", router);
  };