const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "exercise 5.3"));
console.log('');

var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

    response.render("index", {

        message: 'This is a great Pug template example'

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});


