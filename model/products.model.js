const mongoose = require("mongoose");

const productDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  discountType: [
    {
      discountType: {
        type: String,
        required: true,
      },
      discountValue: {
        type: String,
        required: true,
      },
    },
  ],
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", productDetails);
