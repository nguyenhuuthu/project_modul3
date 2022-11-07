const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

const {requireAdmin} = require("../middlewares/middlewares")

router.get("/", userController.getAll); // user admin

router.get("/:id", userController.getOne);// user

router.post("/:id", userController.getPost);

router.put("/:id", userController.getPut);

router.delete("/:id", userController.getDelete);

module.exports = router;
