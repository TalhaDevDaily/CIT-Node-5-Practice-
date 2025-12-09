const express = require("express");
const dbConnect = require("./dbConfig");
const _ = require("./routes");
const app = express();

app.use(express.json());

// Connecting Database from dbConfig
dbConnect();

// Routing
app.use(_);

app.listen("8000", function (req, res) {
  console.log("Server is running 🏃‍♂️");
});
