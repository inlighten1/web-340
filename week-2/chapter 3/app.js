var express = require("express");
var http = require("http");
var logger= require("morgan");
var app = express();

var path =  require("path")

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", function(request, response){
  response.render("index", {
    message: "Hey everyone this is my page"
  });


});




http.createServer(app).listen(3000);
