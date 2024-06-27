const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  listingId: {
    type: Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const CartSchema = new Schema({
  items: [CartItemSchema],
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
