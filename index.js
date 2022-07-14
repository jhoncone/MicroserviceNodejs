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


  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  let img_sen =function(req,res){
    client.messages
  .create({
     mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+51952815183'
   })
  .then(message => console.log(message.sid));
    res.json({ mensaje: '¡sent!' })  
  }



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
  
  app.get('/img',img_sen);
  app.get('/alums',alumst);