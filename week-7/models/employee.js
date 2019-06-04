/*
============================================
; Title:  employee.js
; Author: Lance Desrouleayx
; Date:   4 June 2019
; Description: File for the Fruit database model
;===========================================
*/




const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type:String,  required: true}
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports= Employee;

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', employeeSchema);
