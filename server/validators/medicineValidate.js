const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.addMedicineValidator = [
  check("medicineName")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("medicine name is required")
    .trim()
    .escape(),
  check("company")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("company is required")
    .trim()
    .escape(),
  check("expireDate")
    .notEmpty()
    .withMessage("expire date is required")
    .isISO8601()
    .withMessage("invalid date")
    .trim()
    .escape(),
  check("price").notEmpty().withMessage("price is required").trim().escape(),
  check("stock").notEmpty().withMessage("stock is required").trim().escape(),
  validatorHandler,
];

exports.updateMedicineValidator = [
  check("price")
    .optional()
    .notEmpty()
    .withMessage("price is required")
    .trim()
    .escape(),
  validatorHandler,
];
