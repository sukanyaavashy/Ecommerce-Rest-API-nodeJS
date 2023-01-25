const mongoose = require("mongoose");

const userDetails = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  billingAddress: [
    {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },
  ],
  shippingAddress: [
    {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },
  ],
  userPayment: [
    {
      paymentType: {
        type: String,
        require: true,
      },
      status: {
        type: String,
        require: true,
      },
      cards: [
        {
          type: {
            type: String,
            required: true,
          },
          lastFourNumbers: {
            type: Number,
            required: true,
          },
          expiryMonth: {
            type: Number,
            required: true,
          },
          expiryYear: {
            type: Number,
            required: true,
          },
          cvvVerified: {
            type: Boolean,
            required: true,
          },
        },
      ],
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userDetails);
