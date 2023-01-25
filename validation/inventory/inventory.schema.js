const joi = require("joi");

const InventorySchema = {
  Inventory: joi.object({
    productId: joi.string().required(),
    quantity: joi.number().required(),
  }),
};

module.exports = InventorySchema;
