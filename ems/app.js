
const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "exercise 6.3"));
console.log('');

var express = require("express");

var http = require("http");

var path = require("path");


var logger = require("morgan");

var helmet= require("helmet");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

var cookieParser = require("cookie-parser");

var csrf = require("csurf");

// setup csrf protection

var csrfProtection = csrf({cookie: true});

// static resource use
app.use(express.static('./'));



var Employee = require("./models/employee");

var employee = new Employee({

  firstName: "Jon",
  lastName: "Carver"

});

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


app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(helmet.xssFilter());

app.use(logger("short"));




//CSURF Required Dependencies

app.use(bodyParser.urlencoded({

  extended: true

}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

  var token = request.csrfToken();

  response.cookie('XSRF-TOKEN', token);

  response.locals.csrfToken = token;

  next();

});





app.get('/', function(request, response){
response.render("index", {
  title:"Home Page"
  });
});

//Setup route to list page
app.get("/list", function(request, response) {
  Employee.find({}, function(error, employees){
    if(error) throw error;
    response.render("list", {
      title: "List page",
      page: "list",


  });
  });

});



//Setup route to new page
app.get("/new", function(request, response) {

  response.render("new", {
    title: "New employee page",
    page: "new",
    message: "New Employee Page"
  });
});

app.post("/process", function(req, res) {

  if (!req.body.firstName) {
    res.status(400).send('Entries must have a name');
    return;
  }

  // get the request's form data
  const firstName = req.body.firstName;
  console.log(firstName);

  const lastName = req.body.lastName;
  console.log(lastName);

  const title = req.body.title;
  console.log(title);

  // create a employee model
  let employee = new Employee({
    firstName: firstName,
    lastName: lastName,
    title: title

  });

  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + ' saved successfully!');
      res.redirect('/');
    }
  });
});


//setup route to view page

app.get("/view", function(request, response){
response.render("view", {
  title: "View employee page",
  page: "view",

  });
});



http.createServer(app).listen(8070, function(){
  console.log("Application started on port 8070!");
});

