
/*
============================================
; Title:  desrouleaux exercise1.3.js
; Author: Lance Desrouleaux
; Date:  22 April 2019
; Modified By: Lance Desrouleaux
; Description:Recreate the Module Example using your own URL and query value (name=smith)
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 1.3"));
console.log('');



var url = require("url");


var parsedURL = url.parse("https://www.fake.com/profile?name=Barry");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

