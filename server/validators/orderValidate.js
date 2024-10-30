const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.createOrderValidator = [
  check("supplier")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("you must choose a supplier")
    .trim()
    .escape(),
  check("medicines")
    .notEmpty()
    .withMessage("you must add a one item at least")
    .isArray()
    .trim()
    .escape(),
  check("medicines.*.medicineName")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("medicine name is required")
    .trim()
    .escape(),
  check("medicines.*.company")
    .isString()
    .withMessage("name must be a string")
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
    .isInt()
    .withMessage("unitPrice must be a number")
    .notEmpty()
    .withMessage("unitPrice is required")
    .trim()
    .escape(),
  check("medicines.*.quantity")
    .isInt()
    .withMessage("quantity must be a number")
    .notEmpty()
    .withMessage("quantity is required")
    .trim()
    .escape(),
  check("totalAmount")
    .isInt()
    .withMessage("total amount must be a number")
    .notEmpty()
    .withMessage("total amount is required")
    .trim()
    .escape(),
  validatorHandler,
];
