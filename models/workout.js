const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise = new Schema({
  //name of exercise
  name: {
    type: String,
  },
  //type of exercise
  type: {},
  //how much weight
  weight: {
    type: Number,
  },
  //the sets
  sets: {
    type: Number,
  },
  //the reps
  reps: {
    type: Number,
  },
  //duration of exercise
  duration: {
    type: Number,
  },
});

