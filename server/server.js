const express = require("express");
const connectDB = require("./db/connectDB");
const errorHandler = require("./middlewares/errorHandling");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const hpp = require("hpp");
const helmet = require("helmet");
const { rateLimiter } = require("./middlewares/rateLimiterHandler");
// const mongosanitize = require("express-mongo-sanitize");
const cors = require("cors");

connectDB();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.json({ limit: "10kb" }));
// app.use(mongosanitize());
app.use(cookieParser());
app.use(rateLimiter);
app.use(hpp());
app.use(helmet());
require("./utils/scheduler");

app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/medicines", require("./routes/medicineRoute"));
app.use("/api/v1/invoices", require("./routes/invoicesRoute"));
app.use("/api/v1/suppliers", require("./routes/supplierRoute"));
app.use("/api/v1/notifications", require("./routes/notificationRoute"));
app.use("/api/v1/orders", require("./routes/orderRoute"));
app.use("/api/v1/reports", require("./routes/reportRoute"));

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
