const usersController = require("../controllers/users.controllers");

var express = require("express");

var router = express.Router();

router.post("/register", usersController.register);
//router.post("/login", usersController.login);

module.exports = router;