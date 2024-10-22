const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.createInvoiceValidator = [
  check("medicines")
    .notEmpty()
    .withMessage("you must add medicine first")
    .isArray({ min: 1 })
    .withMessage("you must add 1 item at least"),
  validatorHandler,
];
