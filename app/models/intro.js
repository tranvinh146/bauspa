const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  title: { type: String, default: "none" },
  image: { type: String },
  content: { type: String },
  order: { type: Number },
});

module.exports = mongoose.model("Intro", introSchema);
