const db = require("../model/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");



module.exports.userLogin = (req, res) => {
  res.render("login")
}

module.exports.login = (req, res) => {
  // let id =req.signedCookies.user_id
  let { email, password } = req.body;
  console.log(email, password);
  db.execute("SELECT * FROM user_elearning WHERE email=? ", [email])
    .then((data) => {
      let [rows] = data;
      let findEmail = rows[0]
      if (!findEmail) {
        res.status(404).json({
          message: "User is not exist",
        })
      } else {
        let passValid = bcrypt.compareSync(password, findEmail.password);
        if (!passValid) {
          res.status(404).json({
            message: "Wrong password",
          })
        } else {
          res.cookie("user_id", findEmail.ID, { signed: true })
          res.cookie("user", findEmail.user_id, { signed: true })
          res.status(200).json({
            status: "success",
            message: "Login successfully",
          })
        }
      }
    })
}

// module.exports.renderHomePage=(req,res)=>{
//   let id =req.signedCookies.user_id
//   db.execute("SELECT * FROM user_elearning WHERE ID= ?", [id])
//     .then((data) => {
//       let[rows]=data
//       console.log(rows);
//       res.render("homePage",{
//           data:rows
//     })
  
//   })
// }
module.exports.register = (req, res) => {
  res.render("login")
}


