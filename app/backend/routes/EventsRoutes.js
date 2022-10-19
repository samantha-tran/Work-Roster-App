const express = require("express");
const {
  createEvent,
  removeEvent,
  getAllEvents,
  getUserEvents,
} = require("../controllers/EventController");

const router = express.Router();

router.post("/all", getAllEvents);

router.post("/user", getUserEvents);

module.exports = router;
