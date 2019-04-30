/*
============================================
; Title:  desrouleaux exercise2.2.js
; Author: Lance Desrouleaux
; Date:  22 April 2019
; Modified By: Lance Desrouleaux
; Description:Prototypes
;===========================================
*/

const header = require('../desrouleaux-header-test.js')

console.log(header.display("Lance", "Desrouleaux", "Excercise 2.2"));
console.log('');



var Person = {

  getAge: function(){
      return this.age
    }

}

var passMe = Object.create(Person, {
  "age": {
    "value": 22

  },
  fullName: "Lance Desrouleaux"
})


console.log(Person.fullName)

console.log(Person.getAge())
