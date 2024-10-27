const corn = require("node-cron");
const Medicine = require("../models/Medicine");
const Notification = require("../models/Notification");

corn.schedule("0 0 * * 4", async () => {
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
