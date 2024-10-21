const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.createUserValidator = [
  check("userName").notEmpty().withMessage("username is required"),
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email"),
  check("password").notEmpty().withMessage("password is required"),
  validatorHandler,
];
