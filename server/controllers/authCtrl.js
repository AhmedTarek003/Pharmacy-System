const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerCtrl = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) return res.status(400).json({ msg: "user already exists" });
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(201).json({
      msg: "user registered successfully",
      user: {
        _id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error registering" });
  }
};

exports.loginCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ msg: "incorrect email or password" });
    // cookies
    const accessToken = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res.cookie("at", accessToken, { maxAge: 60 * 60 * 1000 });
    res.cookie("rt", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    });
    res.status(200).json({
      msg: "you logged successfully",
      user: {
        _id: user._id,
        userName: user.userName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error login" });
  }
};

exports.logoutCtrl = async (req, res) => {
  try {
    res.clearCookie("at");
    res.clearCookie("rt");
    res.status(200).json({ msg: "user logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error logout" });
  }
};

exports.getUserCtrl = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id, {
      password: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    if (!user) return res.status(404).json({ msg: "user not found" });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to get user" });
  }
};
