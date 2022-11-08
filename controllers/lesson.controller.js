const db = require("../model/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");




module.exports.getLesson = (req, res) =>{
    let total = 0;
    db.execute(`SELECT * FROM cousre_elearning`)
        .then((data) => {
            let [rows, cols] = data;
            console.log(data);
            total = rows.length
            return db.execute(`SELECT * FROM lesson_elearning`)
             .then((index) => {
                let [row, col] = index;
                console.log(row);
                res.render("lesson", {
                    data: rows,
                    index: row,
             })
        })
        .then()
        .catch((err) => console.log(err));
    })
}

module.exports.getID = (req, res) => {
    console.log("getLesson by ID");
    // // db.execute("SELECT * FROM cousre_elearning")
    // // .then((data)=>{
    // //     console.log(data);
    // // })
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