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
  const movieName = req.body;
  console.log(movieName)

  // const movieReview = req.body.movieReview;
  // const sqlInsert =
  // "INSERT INTO movie_reviews (movieName, movieReview) VALUE (?,?);";
  // db.query(sqlInsert, [movieName, movieReview], (err, result) => {
  // });
}
module.exports = {getItems, addGuitar}