const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.at;
  if (accessToken) {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ msg: "invalid token" });
    }
    req.user = decoded;
    next();
  } else {
    const refreshToken = req.cookies.rt;
    if (!refreshToken) {
      return res.status(401).json({ msg: "unauthorized, please login again!" });
    }
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ msg: "invalid token" });
    }
    const newAccessToken = jwt.sign(
      { _id: decoded._id, role: decoded.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.cookie("at", newAccessToken, { maxAge: 60 * 60 * 1000 });
    req.user = decoded;
    next();
  }
};

module.exports = verifyToken;
