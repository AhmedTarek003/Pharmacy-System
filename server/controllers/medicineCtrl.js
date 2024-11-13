const Medicine = require("../models/Medicine");
const {
  uploadImageToCloudinary,
  deleteImageFromCloudinary,
} = require("../utils/cloudinary");
const fs = require("fs");

exports.addMedicineCtrl = async (req, res) => {
  const { medicineName, company, expireDate, price, stock } = req.body;
  let medicine;
  let result;
  try {
    medicine = await Medicine.findOne({ medicineName });

    if (expireDate <= new Date().toISOString())
      return res
        .status(400)
        .json({ msg: "the expire date must be in the future" });
    if (medicine) {
      medicine.expireDate = expireDate;
      medicine.price = price;
      medicine.stock = stock;
    } else {
      if (req.file) {
        result = await uploadImageToCloudinary(req.file.path);
      }
      medicine = new Medicine({
        medicineName,
        company,
        expireDate,
        medicineImage: {
          url: result?.secure_url || null,
          publicId: result?.public_id || null,
        },
        price,
        stock,
      });
    }
    await medicine.save();
    res.status(201).json({ msg: "medicine added successfully", medicine });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to add medicine" });
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

exports.getAllMedicinesCtrl = async (req, res) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "-createdAt";
  try {
    const medicines = await Medicine.find({
      medicineName: { $regex: search, $options: "i" },
    }).sort(sort);
    res.status(200).json(medicines);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to get all medicines" });
  }
};

exports.getMedicineCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const medicine = await Medicine.findById(id);
    if (!medicine)
      return res.status(404).json({ msg: "not found this medicine" });
    res.status(200).json(medicine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to get medicine" });
  }
};

exports.updateMedicineCtrl = async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  try {
    const medicine = await Medicine.findById(id);
    if (!medicine)
      return res.status(404).json({ msg: "not found this medicine" });
    if (price) {
      medicine.price = price;
    }
    if (req.file) {
      if (medicine.medicineImage.publicId) {
        await deleteImageFromCloudinary(medicine.medicineImage.publicId);
      }
      let result = await uploadImageToCloudinary(req.file.path);
      medicine.medicineImage = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    }
    await medicine.save();
    res.status(200).json({ msg: "medicine updated successfully", medicine });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to update medicine" });
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

exports.deleteMedicineCtrl = async (req, res) => {
  const { role } = req.user;
  const { id } = req.params;
  try {
    if (role !== "manager")
      return res.status(403).json({ msg: "access denied" });
    const medicine = await Medicine.findById(id);
    if (!medicine)
      return res.status(404).json({ msg: "not found this medicine" });
    if (medicine.medicineImage.publicId) {
      await deleteImageFromCloudinary(medicine.medicineImage.publicId);
    }
    await Medicine.findByIdAndDelete(id);
    res.status(200).json({ msg: "medicine deleted successfully", medicine });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to delete medicine" });
  }
};
