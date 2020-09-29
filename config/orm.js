// import mysql connection
const connection = require("../config/connection.js");

const orm = {
  selectAll: function (tableInput, cb) {},
  insertOne: function (table, col, val, cb) {},
  updateOne: function (table, objColVals, condition, cb) {},
};

// Export the orm object for the model
module.exports = orm;
