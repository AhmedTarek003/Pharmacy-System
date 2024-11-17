const Report = require("../models/Report");

exports.getAllReportsCtrl = async (req, res) => {
  const { type, startDate, endDate } = req.query || "";
  try {
    let reports;
    if (type && type !== "All") {
      reports = await Report.find({ reportType: type });
    } else {
      reports = await Report.find();
    }
    if (startDate && endDate) {
      reports = await Report.find(
        type && type !== "All"
          ? {
              $and: [
                { createdAt: { $gte: startDate, $lte: endDate } },
                { reportType: type },
              ],
            }
          : {
              createdAt: { $gte: startDate, $lte: endDate },
            }
      );
    }

    res.status(200).json(reports);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to getting all reports" });
  }
};

exports.getReportCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findById(id).populate(
      "bestSellingMedicines.medicineId"
    );
    if (!report) return res.status(404).json({ msg: "not found report" });
    res.status(200).json(report);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error to getting report" });
  }
};
