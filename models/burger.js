const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (data) {
      cb(data);
    });
  },
  // cols and vals are single non-array values
  insertOne: function (col, val, cb) {
    orm.insertOne("burgers", col, val, function (data) {
      cb(data);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (data) {
      cb(data);
    });
  },
  // update:
};

module.exports = burger;
