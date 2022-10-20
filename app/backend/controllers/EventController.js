const Event = require("../models/EventModel");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

// @desc create an event
// @route POST /api/events/create
// @access public
const createEvent = async (req, res) => {
  const { startTime, endTime, date } = req.body;
  if (!startTime || !endTime || !date) {
    res.status(400);
    throw new Error("Please provide start time, end time and date");
  }

  // get user from jwt token
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found!");
  }
  //Date in YYYY-MM-DDTHH:mm:ss.sssZ format
  //input date type returns a string representing a date in YYYY-MM-DD format, or empty
  const start = date + "T" + startTime + ":00.000Z";
  const end = date + "T" + endTime + ":00.000Z ";
  const event = await Event.create({
    user: req.user.id,
    startTime: start,
    endTime: end,
  });

  res.status(201).json(event);
};

// @desc remove a event
// @route DELETE /api/events/remove
// @access public
const removeEvent = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const event = await Event.findById(req.params.id);
  console.log(req.params.id);

  if (!event) {
    res.status(404);
    throw new Error("Ticket not found");
  }

  await event.remove();

  res.status(200).json({ success: true });
};

// @desc gets all events
// @route GET /api/events/all
// @access public
const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
};

// @desc gets all events for a user
// @route GET /api/events/user
// @access public
const getUserEvents = async (req, res) => {
  // get user using the id in the JWT
  const user = await User.findById(req.user.id);
  console.log(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const events = await Event.find({ user: req.user.id });

  res.status(200).json(events);
};

module.exports = {
  createEvent,
  removeEvent,
  getAllEvents,
  getUserEvents,
};
