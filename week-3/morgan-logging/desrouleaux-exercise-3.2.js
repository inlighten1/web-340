/*
============================================
; Title:  desrouleaux-assignment-3.2.js
; Author: Lance Desrouleaux
; Date:   30 April 2019
; Description: logging using morgan
;===========================================
*/



var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "A new Personality Builds a new Personal Reality"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});

