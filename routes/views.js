const router = require("express").Router();
const path = require("path");

router.path("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public.exercise.html"));
});

router.path("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
