const nodemailer = require("nodemailer");

const sendMail = async (userEmail, subject, htmlTemplate) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASS_EMAIL_ADDRESS,
      },
    });

    await transporter.sendMail({
      from: {
        name: "Elshfa Pharmacy",
        address: process.env.EMAIL_ADDRESS,
      },
      to: userEmail,
      subject: subject,
      html: htmlTemplate,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (nodemailer)");
  }
};

module.exports = sendMail;
