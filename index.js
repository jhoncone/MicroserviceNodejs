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
  let alumst =async(req,res)=>{

    try {
    const response1 = await axios.get(`https://studests.herokuapp.com/apistudents/getstudents`);
    const response2= await axios.get(`https://servnotas.herokuapp.com/apinotas/getnotas`);
   const dat1=response1.data;
   const dat2=response2.data;

 res.send(dat2)
 console.log('hol')
} catch (error) {
  // In the event of an error, return a 500 error and the error message
  console.error(error);
  res.send(error);
}

  }
  
  app.get('/alums',alumst);