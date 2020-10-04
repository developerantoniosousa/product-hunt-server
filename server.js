const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors("*"));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
require("./src/models/Product");

app.use("/api", require("./src/routes"));

app.listen(3001);
