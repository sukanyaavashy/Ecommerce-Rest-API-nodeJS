const joi = require("joi");

const VendorSchema = {
  Vendor: joi
    .object({
      companyName: joi.string().max(100).required(),
      firstName: joi.string().max(100).required(),
      lastName: joi.string(),
      contactNumber: joi
        .string()
        .pattern(new RegExp("^[0-9]{10}$"))
        .required()
        .trim(),
      email: joi.string().email().required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .trim(),
      address: joi.object({
        street: joi.string().required(),
        city: joi.string().required(),
        state: joi.string().required(),
        country: joi.string().required(),
        pincode: joi.string().required(),
      }),
      // vendorPayment: joi.array().items({
      //   paymentType: joi.string().required(),
      //   status: joi.string().required(),
      //   cards: joi.array().items({
      //     type: joi.string().required(),
      //     lastFourNumbers: joi.number().required(),
      //     expiryMonth: joi.number().required(),
      //     expiryYear: joi.number().required(),
      //     cvvVerified: joi.boolean().required(),
      //   }),
      // }),
    })
    .unknown(true),
};

module.exports = VendorSchema;
