const express = require("express");
const router = express.Router();
// const movieController = require("../controllers/movieController");
const { getItems, addGuitar, getGuitars} = require("./controllers/itemController");
const FilePond = require('react-filepond')

// const pond = FilePond.create( inputElement );
// pond.setOptions({
//   server: "/upload"
// })
router.get("/items", getItems);

router.post("/items/saveguitar", addGuitar);

router.get("/items/getguitars", getGuitars)
// router.delete("/api/delete/:movieName",deleteMovie);

// router.put("/api/update",updateMovie);
router.post("/upload", (req, res) => {
    console.log(req)
  res.json()
})
router.delete("/remove", (req, res) => {
    // const caca = res.files
    // console.log(caca)
 })


module.exports = router