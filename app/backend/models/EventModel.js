const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true],
    },
    userID: {
      type: Number,
      required: [true],
    },
    startTime: {
      type: Date,
      required: [true],
    },
    endTime: {
      type: Date,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
