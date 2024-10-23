const Medicine = require("../models/Medicine");
const Notification = require("../models/Notification");
const Order = require("../models/Order");
const Supplier = require("../models/Supplier");
const validateItemId = require("../utils/validateId");

exports.createOrderCtrl = async (req, res) => {
  const { supplier, medicines, totalAmount } = req.body;
  try {
    validateItemId(supplier);
    const existSupplier = await Supplier.findById(supplier);
    if (!existSupplier)
      return res.status(404).json({ msg: "Supplier not found" });
    for (const item of medicines) {
      if (item.expireDate <= new Date().toISOString()) {
        return res.status(400).json({
          msg: `the expire date of ${item.medicineName} must be in the future`,
        });
      }
    }
    const order = new Order({
      supplier,
      medicines,
      totalAmount,
    });
    await order.save();
    // create Notification
    await Notification.create({
      type: "order",
      message: "you made a new order",
      relatedOrderId: order._id,
    });
    // send email for supplier

    // create a report
    res.status(201).json({ msg: "created order successfully", order });
  } catch (error) {
    console.log(error);
    if (error.message === "invalid id") {
      return res.status(400).json({ msg: error.message });
    }
    res.status(500).json({ msg: "error creating order" });
  }
};

exports.getAllOrdersCtrl = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error getting all orders" });
  }
};

exports.receiveOrderCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ msg: "order not found" });
    for (let item of order.medicines) {
      let medicine = await Medicine.findOne({
        medicineName: item.medicineName,
      });
      if (medicine) {
        medicine.expireDate = item.expireDate;
        medicine.price = item.unitPrice;
        medicine.stock = item.quantity;
      } else {
        medicine = new Medicine({
          medicineName: item.medicineName,
          company: item.company,
          expireDate: item.expireDate,
          price: item.unitPrice,
          stock: item.quantity,
        });
      }
      await medicine.save();
    }
    res.status(200).json({ msg: "you received order successfully", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error recive order" });
  }
};

exports.getOrderCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ msg: "order not found" });
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error get order" });
  }
};

exports.updateOrderCtrl = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ msg: "order not found" });
    order.status = status || "pending";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error updating order" });
  }
};
