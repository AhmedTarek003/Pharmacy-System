const router = require("express").Router();
const {
  createInvoiceCtrl,
  getAllInvoicesCtrl,
} = require("../controllers/invoiceCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const { createInvoiceValidator } = require("../validators/invoiceValidate");

router.post(
  "/create_invoice",
  verifyToken,
  createInvoiceValidator,
  createInvoiceCtrl
);
router.get("/", verifyToken, getAllInvoicesCtrl);

module.exports = router;
