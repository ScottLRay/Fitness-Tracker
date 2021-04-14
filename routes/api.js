const router = require("express").Router();

const Workout = require("../models/workout.js");

//get route
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate({});
});

//put route
router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.updated(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//post route
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
