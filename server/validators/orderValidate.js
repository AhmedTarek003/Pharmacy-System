const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.createOrderValidator = [
  check("supplier")
    .isString()
    .withMessage("supplier must be a string")
    .notEmpty()
    .withMessage("you must choose a supplier")
    .trim()
    .escape(),
  check("medicines")
    .notEmpty()
    .withMessage("you must add a one item at least")
    .isArray(),
  check("medicines.*.medicineName")
    .isString()
    .withMessage("medicineName must be a string")
    .notEmpty()
    .withMessage("medicine name is required")
    .trim()
    .escape(),
  check("medicines.*.company")
    .isString()
    .withMessage("company must be a string")
    .notEmpty()
    .withMessage("company is required")
    .trim()
    .escape(),
  check("medicines.*.expireDate")
    .notEmpty()
    .withMessage("expire date is required")
    .isISO8601()
    .withMessage("invalid expire date")
    .trim()
    .escape(),
  check("medicines.*.unitPrice")
    .notEmpty()
    .withMessage("unitPrice is required")
    .isInt()
    .withMessage("unitPrice must be a number")
    .trim()
    .escape(),
  check("medicines.*.quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isInt()
    .withMessage("quantity must be a number")
    .trim()
    .escape(),
  check("expectedDate")
    .notEmpty()
    .withMessage("expected date is required")
    .isISO8601()
    .withMessage("invalid expected date")
    .trim()
    .escape(),
  check("totalAmount")
    .notEmpty()
    .withMessage("total amount is required")
    .isInt()
    .withMessage("total amount must be a number")
    .trim()
    .escape(),
  validatorHandler,
];
