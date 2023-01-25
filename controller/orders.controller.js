const Order = require("../model/orders.model");

//Post orders
exports.post = async (req, res) => {
  const order = new Order({ ...req.body });
  try {
    const orderData = await order.save();
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get All orders
exports.get = async (req, res) => {
  try {
    const allOrders = await Order.find({ isActive: true });
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Get order
exports.getById = async (req, res) => {
  try {
    id = req.params.id;
    const getSingleOrder = await Order.findOne({
      _id: id,
      isActive: true,
    });
    if (getSingleOrder) {
      res.status(200).json(getSingleOrder);
    } else {
      res.status(404).json({ message: "Data Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Update orders
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "Failed To update" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Delete orders
exports.delete = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { isActive: false },
      { new: true }
    );
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
