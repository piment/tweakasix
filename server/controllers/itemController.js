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
  const sqlSelect = "SELECT * FROM model_parts;";
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
  const gloss = req.body.gloss

  const sqlInsert =
    // "INSERT INTO model_parts (tablefront, tableback, binding, side, neckwood, fretboard, fretbinding, frets, inlay, nut, metalpieces,pickup_cover,pickup_ring,knobs, texture_path, gloss) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  
   ` INSERT INTO model_parts (part_id, color) 
    VALUES ((SELECT id FROM parts WHERE name = 'tablefront'), '?'),
    ((SELECT id FROM parts WHERE name = 'tablefront'), '?'),
    ((SELECT id FROM parts WHERE name = 'tableback'), '?'),
    ((SELECT id FROM parts WHERE name = 'binding'), '?'),
    ((SELECT id FROM parts WHERE name = 'side'), '?'),
    ((SELECT id FROM parts WHERE name = 'neckwood'), '?'),
    ((SELECT id FROM parts WHERE name = 'fretboard'), '?'),
    ((SELECT id FROM parts WHERE name = 'fretbinding'), '?'),
    ((SELECT id FROM parts WHERE name = 'frets'), '?'),
    ((SELECT id FROM parts WHERE name = 'inlay'), '?'),
    ((SELECT id FROM parts WHERE name = 'nut'), '?'),
    ((SELECT id FROM parts WHERE name = 'metalpieces'), '?'),
    ((SELECT id FROM parts WHERE name = 'pickup_cover'), '?'),
    ((SELECT id FROM parts WHERE name = 'pickup_ring'), '?'),
    ((SELECT id FROM parts WHERE name = 'knobs'), '?'),
    ((SELECT id FROM parts WHERE name = 'gloss'), '?'),
    ((SELECT id FROM parts WHERE name = 'scratch'), '?'),
    ((SELECT id FROM parts WHERE name = 'texture_path'), '?'); `
  
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
       texture_path,
       gloss
    ],
    (err, result) => {}
  );
};

const getGuitars = (req, res) => {
  const sqlSelect = "SELECT * FROM model_parts where color_set_id = 1";
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
