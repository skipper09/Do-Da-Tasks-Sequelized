var express = require("express"),
    methodOverride = require("method-override"),
    bodyParser = require ("body-parser"),
    path = require("path");

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(methodOverride("_method"));

var  exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/tasks_controller.js");

app.use("/", routes);

app.listen(port);





