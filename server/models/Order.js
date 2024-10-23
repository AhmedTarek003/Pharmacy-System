const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    medicines: [
      {
        medicineName: {
          type: String,
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
          default: {
            url: null,
            publicId: null,
          },
          required: true,
        },
        unitPrice: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "received", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
