const orm = require("../config/orm.js");
// import orm methods

// burger model
const burger = {
  // SELECT * method calls ORM method
  selectAll: function (cb) {
    orm.selectAll("burgers", function (data) {
      cb(data);
    });
  },
  // INSERT INTO method
  // cols and vals are single non-array values
  // burgers are always "not devoured" to start
  insertOne: function (col, val, cb) {
    orm.insertOne("burgers", col, val, function (data) {
      cb(data);
    });
  },
  // UPDATE method
  // pass in on object to hold col:value
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (data) {
      cb(data);
    });
  },
};

module.exports = burger;
