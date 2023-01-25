const Vendor = require("../model/vendors.model");

//Post vendors
exports.post = async (req, res) => {
  const vendor = new Vendor({ ...req.body });
  try {
    const vendorData = await vendor.save();
    res.status(200).json(vendorData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get All vendors
exports.get = async (req, res) => {
  try {
    const allvendors = await Vendor.find({ isActive: true });
    res.status(200).json(allvendors);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get vendor
exports.getById = async (req, res) => {
  try {
    id = req.params.id;
    const getSingleVendor = await Vendor.findOne({ _id: id, isActive: true });
    if (getSingleVendor) {
      res.status(200).json(getSingleVendor);
    } else {
      res.status(404).json({ message: "Data Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update vendors
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Vendor.findByIdAndUpdate(id, req.body, { new: true });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Failed To update" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Delete vendors
exports.delete = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: false },
      { new: true }
    );
    res.status(200).json(vendor);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
