const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 7000;
const app = express();

// serve static content from the public directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

// start!
app.listen(PORT, function () {
  // logging server side when our server starts
  console.log("Server listening on: http://localhost:" + PORT);
});
