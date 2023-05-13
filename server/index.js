require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const path = require("path")
const cors = require("cors");
const multer  = require("multer")
const fs = require("fs")
const jwt = require('jsonwebtoken')

// setup multer for file upload
var storage = multer.diskStorage(
    {
      destination: function (req, file, cb) {
        cb(null, './stocked')
      },
        filename: function (req, file, cb ) {

            cb( null, Date.now() + path.extname(file.originalname));
        }
    }
);

const upload = multer({ storage: storage } )


// app.set('view engine', "ejs")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// app.use(cors());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());

app.use('/stocked', express.static(path.join(__dirname + "/stocked")));
// app.use(express.static((__dirname, "public")));
// route for file upload
app.post("/upload",upload.single('file'),(req, res, next) => {
   
      res.send(req.file.path);
      // res.render(JSON.stringify(req.file.url))
      // (req.file.path)
   
});



const folder = './'
app.get('/stocked/',(req, res) => {
  const directoryPath = "./stocked/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      const absolutePath = path.resolve( folder, file );

      fileInfos.push({
        name: file,
        url: "/stocked/" + file,
        file : file
      });
    });

    res.status(200).send(fileInfos);
  });
})


const router = require("./router");

app.use(router);


app.listen(port, () => {
  console.log(`server running on ${port}`);
});

module.exports = app