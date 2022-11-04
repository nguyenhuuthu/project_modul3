const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/users.controller")
// users
router.get("/login", authController.userLogin)

router.get("/register", authController.userLogin)

router.post("/login", authController.login)

router.post("/register", authController.register)

module.exports = router;
