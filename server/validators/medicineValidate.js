const { check } = require("express-validator");
const validatorHandler = require("../middlewares/validatorHandler");

exports.addMedicineValidator = [
  check("medicineName").notEmpty().withMessage("medicine name is required"),
  check("company").notEmpty().withMessage("company is required"),
  check("expireDate")
    .notEmpty()
    .withMessage("expire date is required")
    .isISO8601()
    .withMessage("invalid date"),
  check("price").notEmpty().withMessage("price is required"),
  check("stock").notEmpty().withMessage("stock is required"),
  validatorHandler,
];

exports.updateMedicineValidator = [
  check("price").optional().notEmpty().withMessage("price is required"),
  validatorHandler,
];
