const { Vendor } = require("./vendor.schema");

module.exports = {
  addVendorValidation: async (req, res, next) => {
    const value = await Vendor.validate(req.body, { abortEarly: false });
    if (value.error) {
      res.status(400).json({error: value.error.details});
    } else {
      next();
    }
  },
};
