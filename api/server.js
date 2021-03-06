const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const path = require("path");
const server = express();
require("dotenv").config();
// DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION_STRING, (err) => {
  err ? console.log(err.message) : console.log("Connected to DB");
});
server.use(express.json());
// CORS SETTINGS
server.use(cors());
server.use("/auth", require("./routes/auth"));
server.use("/store", require("./routes/store"));
server.use("/devices", require("./routes/devices"));
server.use("/sales", require("./routes/sales"));
server.listen(process.env.PORT || 8002, () => console.log("Server is running"));
