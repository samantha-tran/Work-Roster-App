const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    start: {
      type: String,
      required: [true],
    },
    end: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
