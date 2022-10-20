const express = require("express");
const {
  registerUser,
  loginUser,
  getDetails,
} = require("../controllers/UserController");
const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/details", protect, getDetails);

module.exports = router;
