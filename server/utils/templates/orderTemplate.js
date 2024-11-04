const moment = require("moment");
exports.ORDER_EMAIL_TEMPLATE = (supplier, rows, totalAmount, expectedDate) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email to Supplier</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">

  <!-- Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

    <!-- Header -->
    <h2 style="text-align: center; color: #4CAF50; margin-bottom: 20px;">Order Request</h2>

    <!-- Greeting -->
    <p>Dear ${supplier.userName},</p>

    <!-- Body Content -->
    <p>We are pleased to place an order with your company for the following items:</p>

    <!-- Order Table -->
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <thead>
        <tr>
          <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Item</th>
          <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Quantity</th>
          <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Unit Price</th>
          <th style="border-bottom: 2px solid #ddd; padding: 8px; text-align: left;">Total</th>
        </tr>
      </thead>
      <tbody>
        <!-- Sample Row -->
      ${rows}
        <!-- Add more rows as needed -->
      </tbody>
    </table>
    <div style="font-weight:semi-bold; color:#2d9596; margin-bottom:5px; margin-top:5px">Expected Date : ${moment(
      expectedDate
    ).format("YYYY-MM-DD")}</div>
    <div style="font-weight:semi-bold; color:#60a5fa;">total amount : $${totalAmount}</div>

    <!-- Additional Notes -->
    <p>If you have any questions or need further clarification, please feel free to reach out. We appreciate your prompt response and look forward to your confirmation of this order.</p>

    <!-- Closing -->
    <p>Thank you and best regards,</p>
    <p><strong>Elshfa Pharmacy</strong></p>
    <p>01065861035</p>

    <!-- Footer -->
    <div style="text-align: center; font-size: 12px; color: #888; margin-top: 20px;">
      <p>&copy; ${new Date().getFullYear()} Elshfa Pharmacy. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
};
