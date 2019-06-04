const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "exercise 7.2"));
console.log('');

var fruits = require("../desrouleaux-fruits.js");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});
