
/*
============================================
; Title:  desrouleaux-header-test.js
; Author: Lance Desrouleaux
; Date:  13 February 2019
; Modified By: Lance Desrouleaux
; Description:
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 2.2"));




var url = require("url");


var parsedURL = url.parse("https://www.fake.com/profile?name=Barry");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

