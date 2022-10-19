const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3002;
const HOST = "0.0.0.0";
const MONGODB_URL = "mongodb://mongo:27017";

const app = express();

app.use(express.json()); // allows us to send raw json
app.use(express.urlencoded({ extended: false })); // allows url encoded form

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use("/api/events", require("./routes/EventsRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
