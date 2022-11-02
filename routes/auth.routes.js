const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
// users
router.get("/", authController.getAll);
router.get("/:id", authController.login);
// router.post("/login", authController.login);

module.exports = router;
