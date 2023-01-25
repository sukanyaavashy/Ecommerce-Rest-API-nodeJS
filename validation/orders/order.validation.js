const { Order } = require("./order.schema");

module.exports = {
  addOrderValidation: async (req, res, next) => {
    const value = await Order.validate(req.body, { abortEarly: false });
    if (value.error) {
      res.status(400).json({error: value.error.details});
    } else {
      next();
    }
  },
};
