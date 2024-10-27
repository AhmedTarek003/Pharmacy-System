const express = require("express");
const connectDB = require("./db/connectDB");
const errorHandler = require("./middlewares/errorHandling");
require("dotenv").config();
const cookieParser = require("cookie-parser");

connectDB();
const app = express();

app.use(express.json());
app.use(cookieParser());

require("./utils/scheduler");

app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/medicines", require("./routes/medicineRoute"));
app.use("/api/v1/invoices", require("./routes/invoicesRoute"));
app.use("/api/v1/suppliers", require("./routes/supplierRoute"));
app.use("/api/v1/notifications", require("./routes/notificationRoute"));
app.use("/api/v1/orders", require("./routes/orderRoute"));

app.use("*", () => {
  throw new Error("Invalid route");
});
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`server is running on port ${PORT}`)
);
process.on("unhandledRejection", (err) => {
  console.log(`unhandled rejection error || ${err.name} : ${err.message}`);
  server.close(() => {
    console.log("shutting down");
    process.exit(1);
  });
});
