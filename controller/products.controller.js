const Product = require("../model/products.model");

//Post products
exports.post = async (req, res) => {
  const product = new Product({ ...req.body });
  try {
    const productData = await product.save();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get All products
exports.get = async (req, res) => {
  try {
    const allproducts = await Product.find({ isActive: true });
    res.status(200).json(allproducts);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get product
exports.getById = async (req, res) => {
  try {
    id = req.params.id;
    const getSingleproduct = await Product.findOne({ _id: id, isActive: true });
    if (getSingleproduct) {
      res.status(200).json(getSingleproduct);
    } else {
      res.status(404).json({ message: "Data Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update products
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Failed To update" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Delete products
exports.delete = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: false },
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
