const router = require("express").Router();

const { Workout } = require("../models");

//get route
router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$workouts.duration",
        },
      },
    },
  ])
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//put route
router.put("/workouts/:id", ({ body }, res) => {
  Workout.update(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//post route
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
