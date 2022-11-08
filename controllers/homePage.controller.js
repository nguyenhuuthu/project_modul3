const db = require("../model/db")

module.exports.renderHomePage = (req, res) => {
  let id = req.signedCookies.user_id
  db.execute("SELECT * FROM user_elearning WHERE ID= ?", [id])
    .then((data) => {
      let [rows] = data
      console.log(rows);
      res.render("homePage", {
        data: rows,
      })
    })
}