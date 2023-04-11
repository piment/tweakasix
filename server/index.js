require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const path = require('path')
const cors = require("cors");
const multer  = require('multer')
const fs = require('fs')

// setup multer for file upload
var storage = multer.diskStorage(
    {
      destination: function (req, file, cb) {
        cb(null, './stocked')
      },
        filename: function (req, file, cb ) {
          console.log(file)
            cb( null, Date.now() + path.extname(file.originalname));
        }
    }
);

const upload = multer({ storage: storage } )



app.set('view engine', "ejs")
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
console.log(express.static((__dirname, 'public')))
// route for file upload
app.post("/upload",upload.single('file'),(req, res, next) => {
    // console.log(req.body + " file successfully uploaded !!");
    // const file = req
    // console.log(req)
      // console.log(req + " file successfully uploaded !!");
      res.send(req.file);
   
});

// app.get('/stocked/', (req, res) => {
//   let file = fs.readFileSync((__dirname, "./stocked"))
//   console.log(file)
//   // req('./stocked')
//   res.send(file)
//   // res.sendFiles((__dirname, "./stocked"))
//   // res.send(res)
// })

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
      console.log(file)
      fileInfos.push({
        name: file,
        url: "/stocked/" + file,
        // url: absolutePath,
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