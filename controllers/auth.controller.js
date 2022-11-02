const db = require("../model/db");
const bcrypt = require("bcrypt"); // thư viện mã hóa password
const saltRounds = 10;
// hello dinh thu

let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


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
  let { name, email, password } = req.body;
  console.log(email, password);
  password = bcrypt.hashSync(password, saltRounds);
  let ID = Math.floor(Math.random() * 1000000)
  console.log(ID);
  db.execute("SELECT * FROM user_elearning WHERE email=?", [email])
    .then((data) => {
      console.log(data)
      let [rows] = data;
      // let findEmail = rows[0]
      // console.log(rows.length);
      if (rows.length > 0) {
        return Promise.reject("user already exist");
      } else {
        return db.execute("INSERT INTO user_elearning VALUES (?, ?, ?, ?, ?)", [
          ID,
          name,
          email,
          password,
          null,
        ])
      }
    })
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: "success",
        message: "Create one successfully",
      });
    })
    .catch((err) =>
      res.status(404).json(err)
    );
}


