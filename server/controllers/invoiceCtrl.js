const Invoice = require("../models/Invoice");
const Medicine = require("../models/Medicine");
const validateItemId = require("../utils/validateId");

exports.createInvoiceCtrl = async (req, res) => {
  const { medicines } = req.body;
  let totalAmount = 0;
  try {
    for (const item of medicines) {
      const { medicineId, quantity } = item;
      validateItemId(medicineId);
      const medicine = await Medicine.findById(medicineId);
      if (!medicine)
        return res.status(404).json({ msg: "not found this item" });
      if (medicine.stock < quantity)
        return res.status(400).json({
          msg: `Insufficient stock for ${medicine.medicineName}. Available: ${medicine.stock}, Requested: ${quantity}`,
        });
      totalAmount += medicine.price * quantity;
      medicine.stock -= quantity;
      await medicine.save();
    }

    const invoice = new Invoice({
      medicines,
      totalAmount,
    });
    await invoice.save();
    res.status(201).json({ msg: "invoice created successfully", invoice });
  } catch (error) {
    console.error(error);
    if (error.message === "invalid id") {
      return res.status(400).json({ msg: error.message });
    }
    res.status(500).json({ msg: "error creating invoice" });
  }
};

exports.getAllInvoicesCtrl = async (req, res) => {
  try {
    const invoices = await Invoice.find()
      .populate("medicines.medicineId", ["medicineName", "price"])
      .sort("-createdAt");
    res.status(200).json(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "error creating invoice" });
  }
};
