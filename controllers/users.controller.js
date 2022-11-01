// users

module.exports.getUsers = (req, res) => {
  res.render("homePage");
};
module.exports.getOne = (req, res) => {
  console.log("home page");
  // res.status(200).json({
  //   message: "alo",
  // });
};

module.exports.getPost = (req, res) => {
  console.log("homepage");
};

module.exports.getPut = (req, res) => {
  console.log("put page");
};

module.exports.getDelete = (req, res) => {
  console.log("delete page");
};
