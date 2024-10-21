const router = require("express").Router();
const {
  registerCtrl,
  loginCtrl,
  logoutCtrl,
  getUserCtrl,
} = require("../controllers/authCtrl");
const verifyToken = require("../middlewares/refreshTokenHandler");
const { createUserValidator } = require("../validators/userValidate");

router.post("/register", createUserValidator, registerCtrl);
router.post("/login", loginCtrl);
router.post("/logout", logoutCtrl);
router.get("/getuser", verifyToken, getUserCtrl);

module.exports = router;
