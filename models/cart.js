const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  title: {
    type: Schema.Types.ObjectId,
    ref: "listing"
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;