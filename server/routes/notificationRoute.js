const router = require("express").Router();
const {
  getAllNotificationsCtrl,
  getNotificationCtrl,
} = require("../controllers/notificationCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const validateObjId = require("../middlewares/validateObjId");

router.get("/", verifyToken, getAllNotificationsCtrl);
router.get("/:id", verifyToken, validateObjId, getNotificationCtrl);

module.exports = router;
