const router = require("express").Router();
const {
  createInvoiceCtrl,
  getAllInvoicesCtrl,
  getInvoiceCtrl,
} = require("../controllers/invoiceCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const validateObjId = require("../middlewares/validateObjId");
const { createInvoiceValidator } = require("../validators/invoiceValidate");

router.post(
  "/create_invoice",
  verifyToken,
  createInvoiceValidator,
  createInvoiceCtrl
);
router.get("/", verifyToken, getAllInvoicesCtrl);
router.get("/:id", verifyToken, validateObjId, getInvoiceCtrl);

module.exports = router;
