const router = require("express").Router();
const {
  createOrderCtrl,
  getAllOrdersCtrl,
  receiveOrderCtrl,
  getOrderCtrl,
  updateOrderCtrl,
} = require("../controllers/orderCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const validateObjId = require("../middlewares/validateObjId");
const { createOrderValidator } = require("../validators/orderValidate");

router.post(
  "/create_order",
  verifyToken,
  createOrderValidator,
  createOrderCtrl
);
router.get("/", verifyToken, getAllOrdersCtrl);
router.post("/receive_order/:id", verifyToken, validateObjId, receiveOrderCtrl);
router
  .route("/:id")
  .get(verifyToken, validateObjId, getOrderCtrl)
  .put(verifyToken, validateObjId, updateOrderCtrl);

module.exports = router;
