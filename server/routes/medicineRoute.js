const router = require("express").Router();
const {
  addMedicineCtrl,
  getAllMedicinesCtrl,
  getMedicineCtrl,
  updateMedicineCtrl,
  deleteMedicineCtrl,
} = require("../controllers/medicineCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const uploadImage = require("../middlewares/uploadFile");
const validateObjId = require("../middlewares/validateObjId");
const {
  addMedicineValidator,
  updateMedicineValidator,
} = require("../validators/medicineValidate");

router
  .route("/")
  .post(
    verifyToken,
    uploadImage.single("image"),
    addMedicineValidator,
    addMedicineCtrl
  )
  .get(verifyToken, getAllMedicinesCtrl);
router
  .route("/:id")
  .get(verifyToken, validateObjId, getMedicineCtrl)
  .put(
    verifyToken,
    validateObjId,
    uploadImage.single("image"),
    updateMedicineValidator,
    updateMedicineCtrl
  )
  .delete(verifyToken, validateObjId, deleteMedicineCtrl);

module.exports = router;
