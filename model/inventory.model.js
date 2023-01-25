const mongoose = require("mongoose");

const inventoryDetails = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  
});

module.exports = mongoose.model("Inventory", inventoryDetails);
