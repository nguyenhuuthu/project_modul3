const mysql = require("mysql2");
let database = mysql.createPool({
  host: "127.0.0.1",
  database: "users_schema",
  user: "root",
  password: "Nonghang301294",
});
module.exports = database.promise();
