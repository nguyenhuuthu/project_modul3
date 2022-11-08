// const express = require("express");
// const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/images')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ".jpg"
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const uploads = multer({ storage: storage })

//   module.exports=router