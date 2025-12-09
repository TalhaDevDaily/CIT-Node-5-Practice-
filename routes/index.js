const express = require("express");
const { signUp, signIn } = require("../controllers/authController");

const _ = express.Router();

_.get("/", function (req, res) {
  res.send(
    "Oh what a beautiful morning, oh what a beautiful day, I've got this beautiful feeling everything's going my way 🌅"
  );
});

_.post("/signup", signUp);

_.post("/signin", signIn);

// _.get(function (req, res) {
//   res.send("404, the page you are looking for is not found 🔍");
// });

module.exports = _;
