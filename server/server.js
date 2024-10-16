const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();

connectDB();
const app = express();

app.use(express.json());

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
