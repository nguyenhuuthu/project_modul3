const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");
// users
router.get("/", userController.getUsers);

//
router.get("/:id", userController.getOne);
// // post one by ID
router.post("/", userController.getPost);

router.put("/:id", userController.getPut);

router.delete("/:id", userController.getDelete);

module.exports = router;
