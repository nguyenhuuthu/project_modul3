const db = require("../model/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;


let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

module.exports.userLogin = (req, res) => {
  res.render("login")
}

module.exports.login = (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);
  db.execute("SELECT * FROM user_elearning WHERE email=?", [email])
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
          console.log(findEmail)
          console.log("Hello world")
          res.cookie("user_id", findEmail.ID, { signed: true })
          res.json({
            status: "success",
            message: "Login successfully",
          })
        }
      }
    })
}

module.exports.register = (req, res) => {
  
}


