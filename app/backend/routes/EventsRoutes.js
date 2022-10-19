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

router.post("/create", createEvent);

router.post("/remove", removeEvent);

module.exports = router;
