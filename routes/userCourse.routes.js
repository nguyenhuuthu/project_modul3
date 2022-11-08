const express = require("express");
const router = express.Router();

const userCourseController = require("../controllers/userCourse.controller");

router.get("/", userCourseController.getUserCourse);

module.exports = router;