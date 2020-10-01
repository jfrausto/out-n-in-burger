const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

// CREATE ALL THE ROUTER CODE
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const handlebarsObj = {
      burgers: data,
    };
    console.log("printing handlebars obj...");
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function (result) {
    console.log("we are in post/create router callback function");
    console.log(result);
    // res.json({id: result.insertId});
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);

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

module.exports = router;
