const db =require("../model/db")
const express= require("express");
const router= express.Router();
const homePageController= require("../controllers/homePage.controller")

router.get("/",homePageController.renderHomePage)

module.exports=router