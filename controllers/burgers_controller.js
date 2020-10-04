const express = require("express");
// express routing instance
const router = express.Router();
// burger model
const burger = require("../models/burger");

// GET
router.get("/", function (req, res) {
  // call burger model method
  // pass cb function that will ultimately render data
  burger.selectAll(function (data) {
    const handlebarsObj = {
      burgers: data,
    };
    // finally return the data and render it
    res.render("index", handlebarsObj);
  });
});

// POST
router.post("/api/burgers", function (req, res) {
  // call burger model method
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    // respond with the id of the newly created burger
    res.json({ id: result.insertId });
  });
});

// PUT === UPDATE
router.put("/api/burgers/:id", function (req, res) {
  // condition that must require the Primary Key of the burger to update
  let condition = "id = " + req.params.id;
  // call burger models update method, three arguments
  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        console.log("WAIT A MINUTE...");
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// export router
module.exports = router;
