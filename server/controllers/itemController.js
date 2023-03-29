require('dotenv').config()
const mysql = require("mysql2");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});


const getItems = (req,res) => {
    const sqlSelect = 
    "SELECT * FROM item;"
    db.query(sqlSelect,(err, result) => {
        res.send(result)
    })
}

module.exports = {getItems}