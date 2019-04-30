
/*
============================================
; Title:  desrouleaux-Assignment1.5.js
; Author: Lance Desrouleaux
; Date:  22 April 2019
; Modified By: Lance Desrouleaux
; Description:Recreate the Module Example using your own URL and query value (name=smith)
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Assignment 1.5"));
console.log('');


//start program


var http = require("http");

function processRequest(req, res) {

var body = "When there is nothing left to burn, you need to set the world on fire.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);


//end program