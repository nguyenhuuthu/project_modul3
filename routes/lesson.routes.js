const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lesson.controller")

router.get("/", lessonController.getLesson)// ra trang lesson

router.get("/:id", lessonController.getID)// trang lesson theo id

router.post("/:id", lessonController.postLessonID)


module.exports=router