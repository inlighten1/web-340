/*
============================================
; Title:  assignment 4.4
; Author: lance Dersrouleaux
; Date:   14 May 2019
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/
const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 2.2"));
console.log('');

var express = require("express");
var http = require("http");

var app = express();

app.get('/',function(req,res){
  res.send('Well you just dont GET it... ')
});

app.post("/", function(req,res){
  res.send("a POST request ");
});

app.put('/', function (req,res){
  res.send('PUTS are so fun ');

});

app.delete('/',function(req,res){
  res.send ("well you just made a DELETE ")
})
app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "Resource not found."
  });
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Page loaded correctly."
  });
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Page not implemented."
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});



