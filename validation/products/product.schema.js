const joi = require("joi");

const ProductSchema = {
  Product: joi
    .object({
      name: joi.string().max(100).required(),
      image: joi.string(),
      price: joi.number().required(),
      description: joi.string().required(),
      quantity: joi.number().required(),
      brand: joi.string().required(),
      discountType: joi.array().items({
        discountType: joi.string().required(),
        discountValue: joi.string().required(),
      }),
      color: joi.string(),
      size: joi.string(),
    })
    .unknown(true),
};

module.exports = ProductSchema;
