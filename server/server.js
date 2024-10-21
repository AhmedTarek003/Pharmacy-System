const express = require("express");
const connectDB = require("./db/connectDB");
const errorHandler = require("./middlewares/errorHandling");
require("dotenv").config();
const cookieparser = require("cookie-parser");
const cookieParser = require("cookie-parser");

connectDB();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/medicines", require("./routes/medicineRoute"));

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
