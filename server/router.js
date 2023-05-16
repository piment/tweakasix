const express = require("express");
const fs = require('fs')
const router = express.Router();

// const movieController = require("../controllers/movieController");
const {  addGuitar, getGuitars, fetchGuitar} = require("./controllers/itemController");
const {register, loginGet, loginPost, isUserAuth, userInfo} = require ("./controllers/userController")
const {getItems} = require('./controllers/shopController')
const FilePond = require('react-filepond')
const multer  = require('multer');



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
router.get("/items/fetchguitar",fetchGuitar)


router.post("/register", register)

router.get("/login", loginGet)
router.post("/login", loginPost)
router.get('/isUserAuth', isUserAuth)
router.get('/getUserInfo', userInfo)

module.exports = router