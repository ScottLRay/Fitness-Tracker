const mongoose = require("mongoose");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const User = require("./User.js");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});