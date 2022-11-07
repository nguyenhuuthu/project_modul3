const db = require("../model/db")
const bcrypt = require("bcrypt");
const _ = require("lodash")
const { promiseImpl } = require("ejs");
const saltRounds = 10;
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


module.exports.getAll = (req, res) =>{
    // res.render("homPage")
    let { page_size, page_index } = req.query;
    page_index = Number(page_index || 1); 
    page_size = Number(page_size || 5);
    let total = 0;
    db.execute(`SELECT * FROM cousre_elearning`)
        .then((data) => {
            let [rows, cols] = data;
            total = rows.length
            return db.execute(
                `SELECT * FROM cousre_elearning LIMIT ${page_size} OFFSET ${(page_index - 1) * page_size
                }`
            );
        })
        .then((data) => {
            let [rows, cols] = data;
            // console.log(data);
            console.log(total);
            res.render("lesson", {
                data: rows,
                total,
                page_size,
                page_index,
            });
        })
        .catch((err) => console.log(err));
}

module.exports.getID = (req, res) => {
    console.log("getLesson by ID");
    // db.execute("SELECT * FROM cousre_elearning")
    // .then((data)=>{
    //     console.log(data);
    // })
}

module.exports.postLessonID = (req, res) => {
    console.log("postLesson by ID");
}

module.exports.putLessonID = (req, res) => {
    console.log("putLesson by ID");
}

module.exports.deleteLessonID = (req, res) => {
    console.log("deleteLesson by ID");
}