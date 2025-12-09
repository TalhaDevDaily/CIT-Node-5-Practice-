const mongoose = require("mongoose");

const dbConnect = async function () {
  await mongoose
    .connect(
      "mongodb+srv://shortner:shortner@cluster1st.obvkoyj.mongodb.net/Agents?appName=Cluster1st"
    )
    .then(function () {
      console.log("Database is Connected 📔");
    });
};

module.exports = dbConnect;
