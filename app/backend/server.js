const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3002;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use("/api/events", require("./routes/EventsRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
