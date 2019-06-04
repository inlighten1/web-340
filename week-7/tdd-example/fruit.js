
const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "exercise 7.2"));
console.log('');

function getFruits(str) {

  return str.split(',');

 }

 module.exports = getFruits;
