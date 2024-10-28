const router = require("express").Router();
const {
  getAllReportsCtrl,
  getReportCtrl,
} = require("../controllers/reportCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const validateObjId = require("../middlewares/validateObjId");

router.get("/", verifyToken, getAllReportsCtrl);
router.get("/:id", verifyToken, validateObjId, getReportCtrl);

module.exports = router;
