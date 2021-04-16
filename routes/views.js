const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join("../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join("../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join("../public/stats.html"));
});

module.exports = router;
