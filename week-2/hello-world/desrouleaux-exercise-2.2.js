/*
============================================
; Title:  desrouleaux exercise2.2.js
; Author: Lance Desrouleaux
; Date:  30 April 2019
; Modified By: Lance Desrouleaux
; Description:Hello World with Express
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 2.2"));
console.log('');


//Start program

//here I require in express and http
var express = require("express");
var http = require("http")
//set the express module to app
var app = express()

app.use(function(request, response) {
  console.log("in comes a request to: " +request.url);
  response.end("Hello World");

});
//Here I create a server
http.createServer(app).listen(8080);

//end program
