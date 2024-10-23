const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.createOrderValidator = [
  check("supplier").notEmpty().withMessage("you must choose a supplier"),
  check("medicines")
    .notEmpty()
    .withMessage("you must add a one item at least")
    .isArray(),
  check("medicines.*.medicineName")
    .notEmpty()
    .withMessage("medicine name is required"),
  check("medicines.*.company").notEmpty().withMessage("company is required"),
  check("medicines.*.expireDate")
    .notEmpty()
    .withMessage("expire date is required")
    .isISO8601()
    .withMessage("invalid expire date"),
  check("medicines.*.unitPrice")
    .notEmpty()
    .withMessage("unitPrice is required")
    .isInt()
    .withMessage("unitPrice must be a number"),
  check("medicines.*.quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isInt()
    .withMessage("quantity must be a number"),
  check("totalAmount")
    .notEmpty()
    .withMessage("total amount is required")
    .isInt()
    .withMessage("total amount must be a number"),
  validatorHandler,
];
