/*
============================================
; Title:  desrouleaux exercise2.3.js
; Author: Lance Desrouleaux
; Date:  30 April 2019
; Modified By: Lance Desrouleaux
; Description:Hello World with Express
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 2.3"));
console.log('');


var express =require("express");
var http = require("http");
var app = express()

app.get("/", function(request, response){
  response.end("Welcome to the homepage!");

})

app.get("/about",function(request,response){
  response.end("Welcome to the about page!")
})

app.get("/contact", function(request,response){
  response.end("Welcome to the contact page!")

})

app.use(function(request, response){
  response.statusCode = 404;
  response.end("404!");

});

http.createServer(app).listen(8080);
