var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(req,res){
  res.status(404);
  res.json({
    error:"Resource not found."

  })
});

app.get("/ok", function(req,res){
  res.status(200);
  res.json({
    message:"page loaded correctly"
  })
})
 app.get("/not-implemented", function( request,response){

  res.status(501);
  res.json({
    error:"Page not implemented."

  })
 });

 http.createServer(app).listen(8080, function(){
  console.log("application Started on port 8080")
 });
