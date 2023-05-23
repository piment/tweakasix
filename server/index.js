require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const path = require("path")
const cors = require("cors");
const multer  = require("multer")
const fs = require("fs")

const session = require("express-session");
// setup multer for file upload



///////// Clean up the temp directory
const temporaryFolder = './stocked/temporary'; // Temporary folder path

const clearTemporaryFolder = () => {
  const files = fs.readdirSync(temporaryFolder);

  files.forEach((file) => {
    const filePath = path.join(temporaryFolder, file);
    const { ctime } = fs.statSync(filePath);
    const currentTime = new Date().getTime();
    const fileAge = currentTime - ctime;

    const timeLimit = (24 * 60 * 60 * 1000);  // 24 hours in milliseconds
// console.log(filePath)
    if (fileAge > timeLimit) {
      fs.unlinkSync(filePath); // Delete the file
    }
  });
};

// Middleware to clear temporary folder
app.use((req, res, next) => {
  clearTemporaryFolder();
  next();
});



app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);



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
// app.post("/upload",uploadTemp.array('file'),(req, res, next) => {
   
//   const file = req.file;
//   console.log(file);

// // console.log(req.file)

//       res.send(req.file);
//       // res.render(JSON.stringify(req.file.url))
//       // (req.file.path)
   
// });


const temporaryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './stocked/temporary');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/[^a-z0-9.\s]/g,'').replace(/[\u00B0-\u036f]/g,'').replace(/\s/g, '').replace(/[\u2018\u2019]/g, ""));
    console.log(this.filename)
  },
});

// Create a multer instance with temporary storage
const upload = multer({ storage: temporaryStorage });

// Handle file upload

app.post('/upload', upload.array('file'), (req, res) => {

const id = req.body.id
  const fileRes = {id, ...req.files[0] }
  res.send(fileRes);

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