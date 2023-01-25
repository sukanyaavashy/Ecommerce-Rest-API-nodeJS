const { Product } = require("./product.schema");

module.exports = {
  addProductValidation: async (req, res, next) => {
    const value = await Product.validate(req.body, { abortEarly: false });
    if (value.error) {
      res.status(400).json({error: value.error.details});
    } else {
      next();
    }
  },
};
