var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var names = [

  "Lance",

  "John",

  "Jacob",

  "Harry"

];


app.get("/", function(request, response) {

    response.render("views", {

        names: names

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});


