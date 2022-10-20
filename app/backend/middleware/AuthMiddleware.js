const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      //getTokenFromHeader
      // Beader Token <- delimited by space

      // get token
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get token from user
      req.user = await User.findById(decoded.id).select("-password"); // exclude password from data returned for user

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorised");
    }
  }

  if (!token) {
    // no token provided
    res.status(401);
    throw new Error("Not Authorised");
  }
});

module.exports = {
  protect,
};
