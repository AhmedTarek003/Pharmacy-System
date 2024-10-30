const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.addSupplierValidator = [
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
  check("phoneNumber")
    .notEmpty()
    .withMessage("phone number is required")
    .isMobilePhone()
    .withMessage("invalid phone number")
    .trim()
    .escape(),
  check("address")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("address is required")
    .trim()
    .escape(),
  validatorHandler,
];

exports.updateSupplierValidator = [
  check("userName")
    .optional()
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("username is required")
    .trim()
    .escape(),
  check("email")
    .optional()
    .notEmpty()
    .withMessage("email is required")
    .trim()
    .isEmail()
    .withMessage("invalid email")
    .normalizeEmail()
    .escape(),
  check("phoneNumber")
    .optional()
    .notEmpty()
    .withMessage("phone number is required")
    .isMobilePhone()
    .withMessage("invalid phone number")
    .trim()
    .escape(),
  check("address")
    .optional()
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("address is required")
    .trim()
    .escape(),
  validatorHandler,
];
