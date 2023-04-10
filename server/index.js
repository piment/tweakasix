require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const mysql = require("mysql2");
const cors = require("cors");
const multer  = require('multer')

// setup multer for file upload
var storage = multer.diskStorage(
    {
      destination: function (req, file, cb) {
        cb(null, './stocked')
      },
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )


// const fs = require('fs')
// const path = require('path')

// const fullPath = path.join(__dirname, '/stocked')
// const files = fs.readdirSync(fullPath)

// try { files.forEach( file => console.log(file) ) }
// catch (error) { console.log(error) }


const testFolder = './stocked/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});


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

app.use('/stocked', express.static(__dirname + "./stocked"));
// app.use(express.static((__dirname, "public")));

// route for file upload
app.post("/upload",upload.single('file'),(req, res, next) => {
    // console.log(req.body + " file successfully uploaded !!");
    // const file = req
    // console.log(req)
      // console.log(req + " file successfully uploaded !!");
      res.send(req.file);
   
});

app.get('/stocked', (req, res) => {
  // console.log(files)
  // req('./stocked')
  // res.send(files)
  // res.sendFiles((__dirname, "./stocked"))
  // res.send(res)
})
// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values inserted");
//       }
//     }
//   );
// });

// app.get("/items", (req, res) => {
//   const selectedId = 2
  
//  const sItems =  "SELECT * FROM item;"


//     db.query( sItems,
//       // "SELECT name FROM tasix.guitar AS g INNER JOIN tasix.body AS b ON g.id_body = b.id where b.id = ?", selectedId,
      
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });



const router = require("./router");

app.use(router);


app.listen(port, () => {
  console.log(`server running on ${port}`);
});

module.exports = app