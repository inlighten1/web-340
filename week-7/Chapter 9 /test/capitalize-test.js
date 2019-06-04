var  capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;
describe("capitalize", function(){
  it("capitalizes a single word", function(){
    expect(capitalize("express")).to.equal("Express");
    expect(capitalize("cats")).to.equal("Cats");
  });
  it("makes the rest of the string lower case", function(){
    expect(capitalize("javaScript")).to.equal("Javascript");

  });
  it("leaves empty string alone",function(){
    expect(capitalize("")).to.equal("");
  })
});
