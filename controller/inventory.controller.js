const Inventory = require("../model/inventory.model");

//Post Inventory
exports.post = async (req, res) => {
  const inventory = new Inventory({ ...req.body });
  try {
    const inventoryData = await inventory.save();
    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get All Inventory
exports.get = async (req, res) => {
  try {
    const allInventories = await Inventory.find({ isActive: true });
    res.status(200).json(allInventories);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get Inventory
exports.getById = async (req, res) => {
  try {
    id = req.params.id;
    const getSingleinventory = await Inventory.findOne({
      _id: id,
      isActive: true,
    });
    if (getSingleinventory) {
      res.status(200).json(getSingleinventory);
    } else {
      res.status(404).json({ message: "Data Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update Inventory
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Failed To update" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Delete Inventory
exports.delete = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: false },
      { new: true }
    );
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
