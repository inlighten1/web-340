
const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "exercise 6.3"));
console.log('');

var express = require("express");

var http = require("http");

var path = require("path");


var logger = require("morgan");

var helmet= require("helmet");

const mongoose = require('mongoose');

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(helmet.xssFilter());

app.use(logger("short"));



app.get('/', function(request, response){
response.render("index", {
  title:"Home Page"
  });
});

//Setup route to list page
app.get("/list", function(request, response) {

  response.render("list", {
    title: "List page",
    page: "list"
  });
});


//Setup route to new page
app.get("/new", function(request, response) {

  response.render("new", {
    title: "New employee page",
    page: "new"
  });
});

//setup route to view page

app.get("/view", function(request, response){
response.render("view", {
  title: "View employee page",
  page: "view",

  });
});


// static resource use
app.use(express.static('./'));



var Employee = require("./models/employee");

// mLab connection


var mongoDB = "mongodb+srv://ldesrouleaux:Justbelieve2018!@buwebdev-cluster-1-y9ods.mongodb.net/test";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});


var employee = new Employee({

  firstName: "Jon",
  lastName: "Carver"

});




http.createServer(app).listen(8070, function(){
  console.log("Application started on port 8070!");
});

