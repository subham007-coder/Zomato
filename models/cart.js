const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  title: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
// module.exports = Cart;
