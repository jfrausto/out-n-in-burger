// import mysql connection
const connection = require("../config/connection.js");

// ORM methods directly communicate with MySQL database
let orm = {
  // queries here
  selectAll: function (tableInput, cb) {
    let query = `SELECT * FROM ${tableInput};`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      // finally execute our callbacks cascade
      cb(result);
    });
  },
  insertOne: function (table, col, val, cb) {
    let query = `INSERT INTO ${table}(${col}) 
                    VALUES (?)`;
    connection.query(query, val, function (err, result) {
      if (err) throw err;
      // finally execute our callbacks cascade
      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    // convert true and false to 1 or 0 with 'bit'
    // mysql does not understand updating with BOOLEANs
    let bit = 0;
    if (objColVals.devoured) {
      bit = 1;
    }
    let query = `UPDATE ${table} 
                    SET devoured = ${bit} 
                    WHERE ${condition};`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      // finally execute our callbacks cascade
      cb(result);
    });
  },
};

// Export the orm object for the model
module.exports = orm;
