require('dotenv').config()
const mysql = require("mysql2");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true
});


const getItems = (req,res) => {
    const sqlSelect = 
    "SELECT * FROM item ;SELECT * FROM variation;"
    db.query(sqlSelect,(err, result) => {
        res.send(result)
    })
}


const addGuitar = (req, res) => {
  const tablefront = req.body.tablefront
  const tableback = req.body.tableback
  const binding = req.body.binding
  const side = req.body.side

  // const movieReview = req.body.movieReview;
  const sqlInsert =
  "INSERT INTO body_color (tablefront, tableback, binding, side) VALUE (?,?,?,?);";
  db.query(sqlInsert, [tablefront, tableback, binding, side], (err, result) => {
  });
}
module.exports = {getItems, addGuitar}