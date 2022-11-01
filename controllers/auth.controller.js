const db = require("../model/db");
const bcrypt = require("bcrypt"); // thư viện mã hóa password
const saltRounds = 10;
// hello dinh thu
module.exports.getAll = (req, res) => {
  db.execute("SELECT * FROM users_schema")
    .then((data) => {
      let [rows] = data;
      console.log(rows);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports.userLogin = (req, res) => {
  res.render("login")
}

module.exports.login = (req, res) => {
  let {email, password} = req.body;
  db.execute("SELECT * FROM user_elearning WHERE email=?", [email])
  .then((data) => {
    let [rows] = data;
    let findEmail = rows[0]
    if(!findEmail){
      res.status(404).json({
        message: "User is not exist",
      })
    } else {
      let passValid = bcrypt.compareSync(password, findEmail.password);
      if(!passValid){
        res.status(404).json({
          message: "Wrong password",
        })
      } else {
        // res.json({
        //   message: "Login successfully",
        // })
        // console.log("Login successfully");
        // res.cookie("userId", find.id, {signed: true})
        res.render("homePage", {
          status : "success",
          message: "Login successfully",
        })
      }
    }

  })
  // console.log("Login");
}

module.exports.register = (req, res) => {

}

