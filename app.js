const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const multer  = require('multer')// upload
const upload = multer({ dest: 'uploads/' })
const { requireAuth, notRequireAuth, requireAdmin} = require("./middlewares/middlewares");
//  import router
let userRoutes = require("./routes/users.routes");
let authRoutes = require("./routes/auth.routes");
let courseRoutes = require("./routes/course.routes");
let lessonRoutes = require("./routes/lesson.routes")
let homePageRoutes=require("./routes/homePage.routes")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ".jpg"
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const uploads = multer({ storage: storage })

app.get("/upload", (req, res)=>{
  res.render("")
})

app.post('/upload', uploads.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
})


app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);


app.use(bodyParser.urlencoded({ extended: true })); // form-input (method=post)
app.use(bodyParser.json()); // json (fetch api)
app.use(cors()); // fix cross origin error
app.use(morgan("dev")); // log request on server (for debugging)
app.use(express.static("public")); // hosting static file
app.use(cookieParser("back"));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL ?? "http://127.0.0.1:3000",
    optionsSuccessStatus: 200,
  })
);

// use router
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/course", courseRoutes)
app.use("/lesson", lessonRoutes)
app.use("/homePage", requireAuth,homePageRoutes)


app.get("/", (req, res) => {
  res.redirect("homePage")
  // res.render("homePage")
  // res.redirect("/course/homepage")
});

app.listen(3000, () => {
  console.log("server running on http://127.0.0.1:3000");
});

