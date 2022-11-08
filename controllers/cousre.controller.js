const db = require("../model/db")
const bcrypt = require('bcrypt');
const _ = require("lodash")
const { promiseImpl } = require("ejs");

const saltRounds = 10;
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

module.exports.course = (req, res) => {
    let { page_size, page_index } = req.query;
    page_index = Number(page_index || 1); //neu ton tai no la chinh no, neu k ton tai thi bang 1 (page_index = page_index ? page_index : 1)
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
            console.log(rows[0]);
            // console.log(total);
            res.render("course", {
                data: rows,
                total,
                page_size,
                page_index,
            });
        })
        .catch((err) => console.log(err)); 
    
    }

module.exports.renderHomePage=(req,res)=>{
    let id =req.signedCookies.user_id
    console.log(id);
    db.execute("SELECT * FROM user_elearning WHERE ID= ?", [id])
      .then((data) => {
        let[rows]=data
        console.log(data);
    res.render("course",{
        data:data,
  })    
})
}

module.exports.userCourse = (req, res) => {
    console.log("course by id");
//     let {ID} = req.params
//     console.log(ID);
//     db.execute("SELECT * FROM cousre_elearning")
//     .then((res) => res.join())
//     .then((data)=>{
//         let [rows] = data
// console.log(rows);
//     })
//     .catch((err) => {
//         console.log(err);
    // })
}
module.exports.postCourse = (req, res) => {
    console.log("post course by id");
}
module.exports.putCourse = (req, res) =>{
    console.log("put course by id");
}

module.exports.deleteCourse = (req, res) =>{
    console.log("delete course by id");
}

