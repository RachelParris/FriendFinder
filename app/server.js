// server.js file should require the basic npm packages we've used in class: express, body-parser and path
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRouter = require("./routing/apiRoutes.js");
const htmlRouter = require("./routing/htmlRoutes.js");

let app = express();

let PORT = process.env.PORT || 3000;

// app.use("/assets", express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(apiRouter);
app.use(htmlRouter);


app.listen(PORT, function() {
  console.log(`Server is listening on port: ${PORT}`);
});
