const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const User = require("./User.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbFitness", {
  useNewUrlParser: true,
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});