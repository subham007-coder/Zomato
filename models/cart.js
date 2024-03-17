const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  title: String,
  image: String,
  price: Number,
});

module.exports = mongoose.model("Cart", cartSchema);