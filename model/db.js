const mysql = require("mysql2");
let database = mysql.createPool({
  host: "localhost",
  database: "users_schema",
  user: "root",
  password: "Huuthu98@",
});
module.exports = database.promise();
