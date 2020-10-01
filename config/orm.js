// import mysql connection
const connection = require("../config/connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    const query = `SELECT * FROM ${tableInput};`;
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, col, val, cb) {
    // cols = cols.toString();
    const query = `INSERT INTO ${table}(${col}) 
                    VALUES (?)`;
    console.log(query, "inside insertOne orm");
    connection.query(query, val, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    let bit = 0;
    if (objColVals.devoured) {
      bit = 1;
      console.log(bit, "converted from true");
    }
    const query = `UPDATE ${table} 
                    SET devoured = ${bit} 
                    WHERE ${condition};`;
    console.log(query, "from update orm");

    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};

// Export the orm object for the model
module.exports = orm;
