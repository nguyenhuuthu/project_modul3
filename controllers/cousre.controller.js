const db = require("../model/db")
// const bcrypt = require('bcrypt');
// const _ = require("lodash")
// const { promiseImpl } = require("ejs");
// const saltRounds = 10;
// let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

module.exports.course = (req, res) => {
    console.log("course");
  res.render("course")  
}