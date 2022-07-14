  var path = require("path");
  var flash = require('express-flash-2');
  var express = require("express");
  var app  = express();
  var cookieParser = require('cookie-parser')
  app.use(cookieParser());
  var session = require('express-session');
  app.use(session({secret: "Secret", saveUninitialized: false, resave: false}));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(flash());
  require("dotenv").config();
  let PORT= process.env.PORT;
  app.set('view engine', '.ejs');
  app.listen(PORT);
  console.log("Running at Port"+PORT);

  var config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
    };

  const axios = require('axios');
  let alumst =function(req,res){
/*
    let users = []; // names of users will be stored here
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => {
      users = data.map(user => user.name); // get only the names of the users and store in an array
    })
  */

    let users = [];
    console.log('hol')
    axios(config)
      .then(({ data }) => {
        users = data.map(user => user.name); // get only the names of the users and store in an array
      });
      /*
    .catch(function (error) {
      response=`Failed`;
      res.send(response);
    });
  */
 console.log('hol')
  }
  
  app.get('/alums',alumst);