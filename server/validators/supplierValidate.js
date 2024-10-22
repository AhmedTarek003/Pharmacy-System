const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.addSupplierValidator = [
  check("userName").notEmpty().withMessage("username is required"),
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email"),
  check("phoneNumber")
    .notEmpty()
    .withMessage("phone number is required")
    .isMobilePhone()
    .withMessage("invalid phone number"),
  check("address").notEmpty().withMessage("address is required"),
  validatorHandler,
];

exports.updateSupplierValidator = [
  check("userName").optional().notEmpty().withMessage("username is required"),
  check("email")
    .optional()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email"),
  check("phoneNumber")
    .optional()
    .notEmpty()
    .withMessage("phone number is required")
    .isMobilePhone()
    .withMessage("invalid phone number"),
  check("address").optional().notEmpty().withMessage("address is required"),
  validatorHandler,
];
