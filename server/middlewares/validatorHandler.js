const { validationResult } = require("express-validator");

const validatorHandler = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ msg: result.array()[0].msg });
  }
  next();
};

module.exports = validatorHandler;
