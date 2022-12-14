const express = require("express");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/ErrorMiddleware");
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

connectDB();

app.use(express.json()); // allows us to send raw json
app.use(express.urlencoded({ extended: false })); // allows url encoded form
app.use(errorHandler);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use("/api/events", require("./routes/EventsRoutes"));
app.use("/api/users", require("./routes/UsersRoutes"));
