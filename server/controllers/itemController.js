require("dotenv").config();
const mysql = require("mysql2");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true,
});

const getItems = (req, res) => {
  const sqlSelect = "SELECT * FROM item ;SELECT * FROM variation;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
};

const addGuitar = (req, res) => {
  const tablefront = req.body.tablefront;
  const tableback = req.body.tableback;
  const binding = req.body.binding;
  const side = req.body.side;
  const neckwood = req.body.neckwood;
  const fretboard = req.body.fretboard;
  const fretbinding = req.body.fretbinding;
  const frets = req.body.frets;
  const inlay = req.body.inlay;
  const nut = req.body.nut;
  const metalpieces = req.body.metalpieces;
  const pickup_cover = req.body.pickup_cover;
  const pickup_ring = req.body.pickup_ring;
  const knobs = req.body.knobs;
  const texture_path = req.body.texture_path
  // const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO body_color (tablefront, tableback, binding, side, neckwood, fretboard, fretbinding, frets, inlay, nut, metalpieces,pickup_cover,pickup_ring,knobs, texture_path) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [
      tablefront,
      tableback,
      binding,
      side,
      neckwood,
      fretboard,
      fretbinding,
      frets,
      inlay,
      nut,
      metalpieces,
      pickup_cover,
      pickup_ring,
      knobs,
       texture_path
    ],
    (err, result) => {}
  );
};

const getGuitars = (req, res) => {
  const sqlSelect = "SELECT * FROM body_color";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
};

// const uploadFiles = (req, res) =>{
//   console.log(req.files)
// //  uploadFile = req.files.file
// //   const fileName = req.files.file.name
// //   uploadFile.mv(
// //     `${__dirname}/public/files/${fileName}`,
// //     function (err) {
// //       if (err) {
// //         return res.status(500).send(err)
// //       }
// //       res.json({
// //         file: `public/${req.files.file.name}`,
// //       })
// //     },
// //   )
// }

module.exports = { getItems, addGuitar, getGuitars };
