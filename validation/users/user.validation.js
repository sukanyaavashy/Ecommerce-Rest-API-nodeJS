const { User } = require("./user.schema");

module.exports = {
  addUserValidation: async (req, res, next) => {
    const value = await User.validate(req.body, { abortEarly: false });
    if (value.error) {
      res.status(400).json({ error: value.error.details });
    } else {
      next();
    }
  },
};
