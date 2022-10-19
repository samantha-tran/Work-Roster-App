const createEvent = (req, res) => {
  res.send("create event route");
};

const removeEvent = (req, res) => {
  res.send("remove event route");
};

const getAllEvents = (req, res) => {
  res.send("get all events route");
};

const getUserEvents = (req, res) => {
  res.send("get user events route");
};

module.exports = {
  createEvent,
  removeEvent,
  getAllEvents,
  getUserEvents,
};
