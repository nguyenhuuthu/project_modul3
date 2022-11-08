const express =require("express")
const router = express.Router();
const cousreController = require("../controllers/cousre.controller")
// const {renderHomePage} = require("")
// const userController = require("../controllers/users.controller")

router.get("/", cousreController.course)

router.get("/homepage",cousreController.renderHomePage)

router.get("/:id", cousreController.userCourse)

router.post("/:id", cousreController.postCourse)

router.put("/:id", cousreController.putCourse)

router.delete("/:id", cousreController.deleteCourse)


module.exports = router
