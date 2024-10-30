const router = require("express").Router();
const {
  registerCtrl,
  loginCtrl,
  logoutCtrl,
  getUserCtrl,
} = require("../controllers/authCtrl");
const { passLimit } = require("../middlewares/rateLimiterHandler");
const verifyToken = require("../middlewares/refreshTokenHandler");
const {
  createUserValidator,
  loginValidator,
} = require("../validators/userValidate");

router.post("/register", createUserValidator, registerCtrl);
router.post("/login", loginValidator, passLimit, loginCtrl);
router.post("/logout", logoutCtrl);
router.get("/getuser", verifyToken, getUserCtrl);

module.exports = router;
