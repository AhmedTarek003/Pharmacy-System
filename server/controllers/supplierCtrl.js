const Supplier = require("../models/Supplier");

exports.addSupplierCtrl = async (req, res) => {
  const { userName, email, phoneNumber, address } = req.body;
  try {
    const existSupplier = await Supplier.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existSupplier)
      return res.status(400).json({ msg: "supplier already exists" });
    const newSupplier = new Supplier({
      userName,
      email,
      phoneNumber,
      address,
    });
    await newSupplier.save();
    res
      .status(201)
      .json({ msg: "supplier added successfully", supplier: newSupplier });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error adding Supplier" });
  }
};

exports.getAllSuppliersCtrl = async (req, res) => {
  const search = req.query.search || "";
  try {
    const suppliers = await Supplier.find({
      $or: [
        { userName: { $regex: search, $options: "i" } },
        { phoneNumber: { $regex: search, $options: "i" } },
      ],
    });
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error get all Suppliers" });
  }
};

exports.getSupplierCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const supplier = await Supplier.findById(id);
    if (!supplier) return res.status(403).json({ msg: "Supplier not found" });
    res.status(200).json(supplier);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error get Supplier" });
  }
};

exports.updateSupplierCtrl = async (req, res) => {
  const { id } = req.params;
  const { userName, email, phoneNumber, address } = req.body;
  try {
    const supplier = await Supplier.findById(id);
    if (!supplier) return res.status(403).json({ msg: "Supplier not found" });
    const existSupplier = await Supplier.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (
      existSupplier &&
      existSupplier._id.toString() !== supplier._id.toString()
    )
      return res.status(400).json({ msg: "Supplier already exists" });
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      id,
      {
        $set: {
          userName,
          email,
          phoneNumber,
          address,
        },
      },
      { new: true }
    );
    res.status(200).json({
      msg: "supplier updated successfully",
      supplier: updatedSupplier,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error updateing Supplier" });
  }
};

exports.deleteSupplierCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const supplier = await Supplier.findById(id);
    if (!supplier) return res.status(403).json({ msg: "Supplier not found" });
    await Supplier.findByIdAndDelete(id);
    res.status(200).json({ msg: "Supplier deleted successfully", supplier });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error deleteing Supplier" });
  }
};
