var express = require("express");

var http = require("http");

var mongoose = require("mongoose");


var logger = require("morgan");


var Employee = require("./employee");

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

// application

var app = express();

app.use(logger("short"));






// model

var employee = new Employee({

    firstName: "Jon",
    lastName: "Carver"

});

// create server

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
