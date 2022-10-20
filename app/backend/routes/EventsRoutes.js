const express = require("express");
const { protect } = require("../middleware/AuthMiddleware");
const {
  createEvent,
  removeEvent,
  getAllEvents,
  getUserEvents,
} = require("../controllers/EventController");

const router = express.Router();

router.get("/all", getAllEvents);

router.route("/user").get(protect, getUserEvents);

router.route("/create").post(protect, createEvent);

router.route("/remove").delete(protect, removeEvent);

module.exports = router;
