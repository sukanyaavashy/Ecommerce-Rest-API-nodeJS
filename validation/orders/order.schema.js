const joi = require("joi");

const OrderSchema = {
  Order: joi.object({
    userId: joi.string().required(),
    paymentStatus: joi.string().required(),
    status: joi.string().required(),
    amount: joi.number().required(),
    items: joi.array().items({
      itemId: joi.string().required(),
      quantity: joi.number().required(),
      price: joi.number().required(),
      discount: joi.string().required(),
      tax: joi.number().required(),
    }),
    billingAddress: joi.array().items({
      street: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      country: joi.string().required(),
      pincode: joi.string().required(),
    }),
    shippingAddress: joi.array().items({
      street: joi.string().required(),
      city: joi.string().required(),
      state: joi.string().required(),
      country: joi.string().required(),
      pincode: joi.string().required(),
    }),
    trackingNumber: joi.string().required(),
  }),
};

module.exports = OrderSchema;
