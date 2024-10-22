const mongoose = require("mongoose");

const validateItemId = (id) => {
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("invalid id");
  }
};

module.exports = validateItemId;
