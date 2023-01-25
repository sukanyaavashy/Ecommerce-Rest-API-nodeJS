const { Inventory } = require("./inventory.schema");

module.exports = {
  addInventoryValidation: async (req, res, next) => {
    const value = await Inventory.validate(req.body, { abortEarly: false });
    if (value.error) {
      res.status(400).json({error: value.error.details});
    } else {
      next();
    }
  },
};
