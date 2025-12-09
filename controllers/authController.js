const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const signUp = async function (req, res) {
  const { username, email, password } = req.body;

  const hashPass = await bcrypt.hash(password, 10);
  const user = new userSchema({
    username,
    email,
    password: hashPass,
  });

  user.save();

  res.send("You have successfully registered! 😎");
};

const signIn = async function (req, res) {
  const { email, password } = req.body;

  const user = await userSchema.findOne({ email });

  if (!user) return res.send("Sorry, a user with this email does not exist ⁉️");

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.send("The password you keyed in, does not match");

  res.send(user);
};

module.exports = { signUp, signIn };
