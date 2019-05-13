
/*
============================================
; Title:  desrouleaux exercise4.2.js
; Author: Lance Desrouleaux
; Date:  13th May 2019
; Modified By: Lance Desrouleaux
; Description:Create json Api
;===========================================
*/

var express = require("express");

var http = require("http");
var logger = require('morgan')
var app = express();

app.use(logger('dev'));


app.get("/NowShowing/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        title: "batman",

        rating: "pg-13",

        MovieTime: "7:30pm",

        Movie: id

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});
