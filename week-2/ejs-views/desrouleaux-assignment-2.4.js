/*
============================================
; Title:  desrouleaux-assignment-2.4.js
; Author: Lance Desrouleaux
; Date:   30 April 2019
; Description: Recreate the EJS Eiew Example
;===========================================
*/

//start program

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {

   response.render("index", {

       firstName:"Lance",
       lastName:"Desrouleaux",
       address:" 123 main street"

   });

});

http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});


//end Program
