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


  let alumst =function(req,res){
  console.log('hol')
  res.json({ mensaje: '¡sent!' })  

  /*
  axios(config)
  .then(function (response) {
  response=`Sent`;
  res.send(response);
  })
  .catch(function (error) {
  response=`Failed`;
  res.send(response);
  });
  */
  }
  

  app.get('/alums',alumst);