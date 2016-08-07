// server.js

// set up ======================================================================
// get all the tools we need
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8080;
var fs           = require('fs');
var path         = require('path');
var http         = require('http');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


var server = http.createServer(app);

server.listen(port);
console.log('The Port is listing on port: ' + port);




// {
//   userName: rearmitage
//   firstName: Rich
//   lastName: Armitage
// }