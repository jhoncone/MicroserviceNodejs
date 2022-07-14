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

  const axios = require('axios');
  let alumst =async(req,res)=>{

    try {
  console.log('hol')

  const response = await axios.get(`http://api.open-notify.org/astros.json`);

  res.json({ mensaje: '¡sent!' ,axio:response}) 
  
} catch (error) {
  // In the event of an error, return a 500 error and the error message
  console.error(error);
}

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