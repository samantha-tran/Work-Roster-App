const express = require("express");
const router = express.Router();

router.post("/all", (req, res) => {
  res.send({ message: "get all events" });
});

router.post("/user", (req, res) => {
  res.send({ message: "get user events" });
});

module.exports = router;
