const corn = require("node-cron");
const Medicine = require("../models/Medicine");
const Notification = require("../models/Notification");
const Report = require("../models/Report");
const Invoice = require("../models/Invoice");
const {
  endOfMonth,
  weekStart,
  weekEnd,
  startOfMonth,
} = require("../utils/date");
const Order = require("../models/Order");

// check expire date of medicine
corn.schedule("59 23 * * 5", async () => {
  const now = new Date();
  const expiryThresholdDate = new Date(now.setDate(now.getDate() + 20)); // تحديد التاريخ بعد 20 يومًا
  const expiringMedicines = await Medicine.find({
    expireDate: { $lte: expiryThresholdDate },
  });
  let meds = [];
  if (expiringMedicines.length > 0) {
    for (let item of expiringMedicines) {
      meds.push(item.medicineName);
    }
    await Notification.create({
      type: "expire",
      message: `Expired Medicines [${meds}] have less than 20 days to expire`,
    });
  }
});

// make a report for revenue
corn.schedule("59 23 * * 5", async () => {
  const weekInvoices = await Invoice.find({
    createdAt: { $gte: weekStart, $lte: weekEnd },
  });
  const weekRevenue = weekInvoices.reduce(
    (acc, order) => acc + order.totalAmount,
    0
  );
  const monthlyRevenue = await Invoice.aggregate([
    {
      $match: { createdAt: { $gte: startOfMonth, $lte: endOfMonth } },
    },
    {
      $group: {
        _id: { $week: "$createdAt" },
        totalRevenue: { $sum: "$totalAmount" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  const monthlyCountInvoice = await Invoice.aggregate([
    {
      $match: { createdAt: { $gte: startOfMonth, $lte: endOfMonth } },
    },
    {
      $group: {
        _id: { $week: "$createdAt" },
        invoice: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  await Report.create({
    reportType: "Weekly Revenue",
    weekStartDate: weekStart,
    weekEndDate: weekEnd,
    weekRevenue,
    monthlyRevenue,
    weekCountInvoice: weekInvoices.length,
    monthlyCountInvoice,
  });
});

// make a report for orders
corn.schedule("59 23 * * 5", async () => {
  const weeklyOrders = await Order.find({
    createdAt: { $gte: weekStart, $lte: weekEnd },
  });
  const weeklyOrdersExports = weeklyOrders.reduce(
    (acc, order) => acc + order.totalAmount,
    0
  );
  const monthlyOrdersExports = await Order.aggregate([
    {
      $match: { createdAt: { $gte: weekStart, $lte: weekEnd } },
    },
    {
      $group: {
        _id: { $week: "$createdAt" },
        totalOrders: { $sum: "$totalAmount" },
      },
    },
    { $sort: { _id: 1 } },
  ]);
  await Report.create({
    reportType: "Orders",
    weekStartDate: weekStart,
    weekEndDate: weekEnd,
    weeklyOrdersExports,
    monthlyOrdersExports,
  });
});

// make a report to get best seller of medicines
corn.schedule("59 23 * * 5", async () => {
  const invoices = await Invoice.find({
    createdAt: { $gte: weekStart, $lte: weekEnd },
  });
  let medicinesObj = {};
  let bestSellingMedicines = [];
  for (let invoice of invoices) {
    for (let item of invoice.medicines) {
      if (medicinesObj[item.medicineId]) {
        medicinesObj[item.medicineId] += item.quantity;
      } else {
        medicinesObj[item.medicineId] = item.quantity;
      }
    }
  }
  for (const [medicineId, quantitySold] of Object.entries(medicinesObj)) {
    bestSellingMedicines.push({ medicineId, quantitySold });
  }
  await Report.create({
    reportType: "Best Selling Medicines",
    weekStartDate: weekStart,
    weekEndDate: weekEnd,
    bestSellingMedicines,
  });
});

//*/5 * * * *
