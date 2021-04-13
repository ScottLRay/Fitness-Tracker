const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  //name of exercise
  name: {
    type: String,
    required: true,
  },
  //type of exercise
  type: {
    type: String,
    required: true,
  },
  //how much weight
  weight: {
    type: Number,
    required: true,
  },
  //the sets
  sets: {
    type: Number,
    required: true,
  },
  //the reps
  reps: {
    type: Number,
    required: true,
  },
  //duration of exercise
  duration: {
    type: Number,
    required: true,
  },
});

const workout = mongoose.model("workout", ExerciseSchema)

module.exports = workout