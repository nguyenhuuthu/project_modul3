const db = require("../model/db");
const bcrypt = require("bcrypt"); // thư viện mã hóa password
const saltRounds = 10;
// hello dinh thu
module.exports.getAll = (req, res) => {
  db.execute("SELECT * FROM new_table")
    .then((data) => {
      let [rows] = data;
      console.log(rows);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.userLogin = (req, res) => {
  res.render("login")
}
// module.exports.login = (req, res) => {
//   // console.log(req.body);
//   let { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(500).json({
//       message: "Invalid email or password",
//     });
//   }
//   db.execute("SELECT * FROM new_table WHERE email=?", [email])
//     .then((data) => {
//       console.log(data);
//       let [rows] = data;
//       let find = rows[0];
//       if (!find) {
//         res.status(404).json({
//           message: "user is not exist",
//         });
//       } else {
//         //check password
//         console.log(find.password);
//         let passwordValid = bcrypt.compareSync(password, find.password);
//         if (!passwordValid) {
//           res.status(404).json({
//             message: "Wrong password",
//           });
//         } else {
//           console.log("Hello");
//           // res.cookie("userId", find.id, { signed: true });
//           // res.cookie("role", find.role, { signed: true });

//           console.log("Hello");
//           res.status(200).json({
//             status: "success",
//             message: "Login successfully",
//           });
//           // điều hướng người dùng sang trang "/"
//           // set header
//           // res.redirect // not working after set cookie
//           // res.redirect not working after res.cookie (google)
//         }
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
