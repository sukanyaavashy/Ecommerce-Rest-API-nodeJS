const User = require("../model/users.model");

//Post users
exports.post = async (req, res) => {
  const user = new User({ ...req.body });
  try {
    const userData = await user.save();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get All users
exports.get = async (req, res) => {
  try {
    const allUsers = await User.find({ isActive: true });
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get user
exports.getById = async (req, res) => {
  try {
    id = req.params.id;
    const getSingleUser = await User.findOne({ _id: id, isActive: true });
    if (getSingleUser) {
      res.status(200).json(getSingleUser);
    } else {
      res.status(404).json({ message: "Data Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update users
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Failed To update" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update users
exports.delete = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: false },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
