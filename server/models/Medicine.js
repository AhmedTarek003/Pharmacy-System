const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    medicineName: {
      type: String,
      unique: true,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    expireDate: {
      type: Date,
      required: true,
    },
    medicineImage: {
      type: Object,
      url: null,
      publicId: null,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
