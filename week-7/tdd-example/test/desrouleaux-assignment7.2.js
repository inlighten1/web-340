const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "exercise 7.2"));
console.log('');




var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});
