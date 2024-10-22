const router = require("express").Router();
const {
  addSupplierCtrl,
  getAllSuppliersCtrl,
  getSupplierCtrl,
  updateSupplierCtrl,
  deleteSupplierCtrl,
} = require("../controllers/supplierCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const validateObjId = require("../middlewares/validateObjId");
const {
  addSupplierValidator,
  updateSupplierValidator,
} = require("../validators/supplierValidate");

router
  .route("/")
  .post(verifyToken, addSupplierValidator, addSupplierCtrl)
  .get(verifyToken, getAllSuppliersCtrl);
router
  .route("/:id")
  .get(verifyToken, validateObjId, getSupplierCtrl)
  .put(verifyToken, validateObjId, updateSupplierValidator, updateSupplierCtrl)
  .delete(verifyToken, validateObjId, deleteSupplierCtrl);

module.exports = router;
