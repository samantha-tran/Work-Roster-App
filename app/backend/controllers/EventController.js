// @desc create an event
// @route /api/events/create
// @access public
const createEvent = (req, res) => {
  res.send("create event route");
};

// @desc remove a event
// @route /api/events/remove
// @access public
const removeEvent = (req, res) => {
  console.log(req.body);
  res.send("remove event route");
};

// @desc gets all events
// @route /api/events/all
// @access public
const getAllEvents = (req, res) => {
  res.send("get all events route");
};

// @desc gets all events for a user
// @route /api/events/user
// @access public
const getUserEvents = (req, res) => {
  res.send("get user events route");
};

module.exports = {
  createEvent,
  removeEvent,
  getAllEvents,
  getUserEvents,
};
