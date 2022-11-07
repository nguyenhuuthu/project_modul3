const db = require("../model/db")
const bcrypt = require("bcrypt");
const saltRounds = 10;

let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


module.exports.getAll = (req, res) => {
  let { page_size, page_index } = req.query;
  page_index = Number(page_index || 1); 
  page_size = Number(page_size || 5);
  let total = 0;
  db.execute(`SELECT * FROM user_elearning`)
      .then((data) => {
          let [rows, cols] = data;
          total = rows.length
          return db.execute(
              `SELECT * FROM user_elearning LIMIT ${page_size} OFFSET ${(page_index - 1) * page_size
              }`
          );
      })
      .then((data) => {
          let [rows, cols] = data;
          // console.log(data);
          console.log(total);
          res.render("users", {
              data: rows,
              total,
              page_size,
              page_index,
          });
      })
      .catch((err) => console.log(err));
};

module.exports.getOne = (req, res) => {
  let id = req.params.ID
  db.execute("SELECT * FROM user_elearning WHERE ID = ?", [id])
      .then((data) => {
          let [rows] = data;
          res.render("homePage",{
              data: rows,
          });
      })
      .catch((err) => console.log(err));
};

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

module.exports.getPost = (req, res) => {
  let { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(500).json({
      message: "Invalid email or password"
    })
  }
  if (!strongRegex.test(password)) {
    return res.status(500).json({
      message: " Password is not enough",
    });
  }
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
};

module.exports.getPut = (req, res) => {
  let { id } = req.params;
  let { name, email, password} = req.body;
  db.execute("UPDATE user_elearning SET name=?  WHERE ID = ?",
      [
          name,
          null,
          null,
          id,
      ])
      .then((data) => {
          res.status(200).json({
              message: "Update one successfully",
          });
      })
      .catch((err) => {
          console.log(err);
      })
};

module.exports.getDelete = (req, res) => {
  let { id } = req.params;
  db.execute("DELETE FROM user_elearning WHERE ID = ?", [id])
      .then((data) => {
          console.log(data);
          res.status(200).json({
              message: "Delete one successfully",
          });
      })
      .catch((err) => console.log(err));
};
