const express = require("express");
const {
  createEvent,
  removeEvent,
  getAllEvents,
  getUserEvents,
} = require("../controllers/EventController");

const router = express.Router();

router.get("/all", getAllEvents);

router.get("/user", getUserEvents);

router.post("/create", createEvent);

router.delete("/remove", removeEvent);

module.exports = router;
