const mongoose = require("mongoose");
const express = require("express");
const path =require("path")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(require("./routes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
