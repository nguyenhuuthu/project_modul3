const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
// users
router.get("/", authController.getAll)

router.get("/login", authController.userLogin)

router.get("/register", authController.userLogin)

router.post("/login", authController.login)

router.post("/register", authController.register)

module.exports = router;
