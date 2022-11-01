const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { requireUser } = require("./middlewares/middlewares");
//  import router
let userRoutes = require("./routes/users.routes");
let authRoutes = require("./routes/auth.routes");
// view engine
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

// third party
app.use(bodyParser.urlencoded({ extended: true })); // form-input (method=post)
app.use(bodyParser.json()); // json (fetch api)
app.use(cors()); // fix cross origin error
app.use(morgan("dev")); // log request on server (for debugging)
app.use(express.static("public")); // hosting static file
app.use(cookieParser("secret"));

// use router
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("homePage");
});

app.listen(3000, () => {
  console.log("server running on http://127.0.0.1:3000");
});

console.log(123123);