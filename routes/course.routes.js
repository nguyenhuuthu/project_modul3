const express =require("express")
const cousreController = require("../controllers/cousre.controller")
const router = express.Router()

router.get("/", cousreController.course)

// router.get("/:id", cousreController.userCourse)

// router.post("/:id", cousreController.createCourse)

// router.put("/:id", cousreController.updateCourse)

// router.delete("/", cousreController.deleteCourse)


module.exports = router
