const express = require("express");
const router = express.Router();
// const movieController = require("../controllers/movieController");
const { getItems, addGuitar, getGuitars} = require("./controllers/itemController");


router.get("/items", getItems);

router.post("/items/saveguitar", addGuitar);

router.get("/items/getguitars", getGuitars)
// router.delete("/api/delete/:movieName",deleteMovie);

// router.put("/api/update",updateMovie);



module.exports = router