const rateLimiting = require("express-rate-limit");

exports.rateLimiter = rateLimiting({
  windowMs: 10 * 60 * 1000,
  max: 500,
  message: { msg: "Too many requests, please try again later." },
});

exports.passLimit = rateLimiting({
  windowMs: 30 * 1000,
  max: 5,
  message: {
    msg: "Too many login attempts. Please try again after 30 seconds.",
  },

  skipSuccessfulRequests: true,
});
