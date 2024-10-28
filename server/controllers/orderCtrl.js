const Medicine = require("../models/Medicine");
const Notification = require("../models/Notification");
const Order = require("../models/Order");
const Supplier = require("../models/Supplier");
const sendMail = require("../utils/sendEmail");
const { ORDER_EMAIL_TEMPLATE } = require("../utils/templates/orderTemplate");
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
    const rows = medicines
      .map(
        (medicine) => `
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">${
        medicine.medicineName
      }</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${
        medicine.quantity
      }</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$${
        medicine.unitPrice
      }</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$${
        medicine.quantity * medicine.unitPrice
      }</td>
    </tr>
  `
      )
      .join("");
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <title>Email to Supplier</title>
    // </head>
    // <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">

    //   <!-- Container -->
    //   <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

    //     <!-- Header -->
    //     <h2 style="text-align: center; color: #4CAF50; margin-bottom: 20px;">Order Request</h2>

    //     <!-- Greeting -->
    //     <p>Dear ${existSupplier.userName},</p>

    //     <!-- Body Content -->
    //     <p>We are pleased to place an order with your company for the following items:</p>

    //     <!-- Order Table -->
    //     <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    //       <thead>
    //         <tr>
    //           <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Item</th>
    //           <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Quantity</th>
    //           <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Unit Price</th>
    //           <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Total</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <!-- Sample Row -->
    //         ${rows}
    //         <!-- Add more rows as needed -->
    //       </tbody>
    //     </table>
    //     <div style="font-weight:semi-bold;">total amount : $${totalAmount}</div>

    //     <!-- Additional Notes -->
    //     <p>If you have any questions or need further clarification, please feel free to reach out. We appreciate your prompt response and look forward to your confirmation of this order.</p>

    //     <!-- Closing -->
    //     <p>Thank you and best regards,</p>
    //     <p><strong>Elshfa Pharmacy</strong></p>
    //     <p>01065861035</p>

    //     <!-- Footer -->
    //     <div style="text-align: center; font-size: 12px; color: #888; margin-top: 20px;">
    //       <p>&copy; ${new Date().getFullYear()} Elshfa Pharmacy. All rights reserved.</p>
    //     </div>
    //   </div>
    // </body>
    // </html>
    // `;
    await sendMail(
      existSupplier.email,
      "Elshfa Pharmacy",
      ORDER_EMAIL_TEMPLATE(existSupplier, rows, totalAmount)
    );
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
  const sort = req.query.sort || "createdAt";
  try {
    const orders = await Order.find().sort(sort);
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error getting all orders" });
  }
};

exports.receiveOrderCtrl = async (req, res) => {
  const { id } = req.params;
  let meds = [];
  try {
    const order = await Order.findById(id);
    if (!order) return res.status(404).json({ msg: "order not found" });
    if (order.status === "received")
      return res.status(200).json({ msg: "you already received this order" });
    for (let item of order.medicines) {
      meds.push(item.medicineName);
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
    order.status = "received";
    await order.save();
    // create notification
    await Notification.create({
      type: "stock",
      message: `you received a new order of medicinens:[${meds}]`,
      relatedOrderId: order._id,
    });
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
