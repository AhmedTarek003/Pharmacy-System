const Notification = require("../models/Notification");

exports.getAllNotificationsCtrl = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to getting all notifications" });
  }
};

exports.getNotificationCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findById(id);
    if (!notification)
      return res.status(404).json({ msg: "notification not found" });
    if (!notification.read) {
      notification.read = true;
      await notification.save();
    }
    res.status(200).json(notification);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to getting notification" });
  }
};
