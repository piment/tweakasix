const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;


const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

const register = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        
        db.query(
            "INSERT INTO user (firstname, lastname,email, username, password) VALUES (?,?,?,?,?)",
            [firstname, lastname, email, username, hash],
            (err, result) => {
                console.log(err);
            }
            );
        });
        res.sendStatus(200)
    }
    

const loginGet = (req, res) => {
    if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
}


const isUserAuth = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if(!token) {
        res.send("Token needed")
    } else {
        jwt.verify(token, process.env.JWT_AUTH_SECRET, (err, decoded) => {
            if(err) {
                res.json({auth: false, message: 'Failed authentification'})
            } else {
                req.userId = decoded.id;
                next()
            }
        })
    }
    res.json({ auth: true, message : "Successfully logged in"}) 
}


const loginPost = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
  
            const id = result[0].id
            const token = jwt.sign({id}, process.env.JWT_AUTH_SECRET, {
                expiresIn : 300,
            })



            res.json({auth : true, token: token, result: result})
          } else {
            res.json({ auth : false, message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.json({auth : false, message: "User doesn't exist"})
        // res.send({ message: "User doesn't exist" });
      }
    }
  );
}


const userInfo = (req, res) => {
    const username = req.body.username;
    console.log(req.session.user)
    const sqlGetInfo = `SELECT * FROM user 
        WHERE username = ?`
    db.query(
        sqlGetInfo, username
        , (err, result) => {
            res.send(result);
          });
}


module.exports = {register, loginGet, loginPost, isUserAuth, userInfo}