const express = require("express");
const router = express.Router();
// const movieController = require("../controllers/movieController");
const { getItems, addGuitar, getGuitars} = require("./controllers/itemController");
const FilePond = require('react-filepond')
const multer  = require('multer')

// setup multer for file upload
var storage = multer.diskStorage(
    {
        destination: './stocked',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )
// const pond = FilePond.create( inputElement );
// pond.setOptions({
//   server: "/upload"
// })
router.get("/items", getItems);

router.post("/items/saveguitar", addGuitar);

router.get("/items/getguitars", getGuitars)
// router.delete("/api/delete/:movieName",deleteMovie);

// router.put("/api/update",updateMovie);
// router.post("/upload",  (req, res, next) => {
//   console.log(req+ " file successfully uploaded !!");
//   res.sendStatus(200);
// });
// router.delete("/remove", (req, res) => {
//     // const caca = res.files
//     // console.log(caca)
//  })


module.exports = router