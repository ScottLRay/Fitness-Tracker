const router = require("express").Router();

const Workout = require("../models/workout.js");

//get route
router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//post routes



module.exports = router