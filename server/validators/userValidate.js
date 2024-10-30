const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.createUserValidator = [
  check("userName")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("username is required")
    .trim()
    .escape(),
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .trim()
    .isEmail()
    .withMessage("invalid email")
    .normalizeEmail()
    .escape(),
  check("password")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("password is required")
    .trim()
    .escape(),
  validatorHandler,
];
exports.loginValidator = [
  check("email")
    .isString()
    .withMessage("email must be a string")
    .notEmpty()
    .withMessage("email is required")
    .trim()
    .isEmail()
    .withMessage("invalid email")
    .normalizeEmail()
    .escape(),

  check("password")
    .isString()
    .withMessage("email must be a string")
    .notEmpty()
    .withMessage("password is required")
    .trim()
    .escape(),
  validatorHandler,
];
