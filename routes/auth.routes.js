const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
// users
router.get("/", authController.getAll);
router.post("/login", authController.login);

module.exports = router;
