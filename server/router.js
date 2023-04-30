const express = require("express");
const fs = require('fs')
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

router.get("/items", getItems);

router.post("/items/saveguitar", addGuitar);

router.get("/items/getguitars",getGuitars)




module.exports = router