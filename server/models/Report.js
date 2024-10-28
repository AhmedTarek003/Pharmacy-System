const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    reportType: {
      type: String,
      enum: ["Weekly Revenue", "Orders", "Best Selling Medicines"],
      required: true,
    },
    weekStartDate: {
      type: Date,
      required: true,
    },
    weekEndDate: {
      type: Date,
      required: true,
    },
    weekRevenue: {
      type: Number,
      required: false,
    },
    monthlyRevenue: {
      type: [],
      default: undefined,
    },
    weekCountInvoice: {
      type: Number,
      required: false,
    },
    monthlyCountInvoice: {
      type: [],
      default: undefined,
    },
    weeklyOrdersExports: {
      type: Number,
      required: false,
    },
    monthlyOrdersExports: {
      type: [],
      default: undefined,
    },
    bestSellingMedicines: {
      type: [
        {
          medicineId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Medicine",
          },
          quantitySold: Number,
        },
      ],
      default: undefined,
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
