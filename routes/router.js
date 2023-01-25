const express = require("express");
const router = express.Router();
const { addUserValidation } = require("../validation/users/user.validation");
const { addVendorValidation } = require("../validation/vendors/vendor.validation");
const { addOrderValidation } = require("../validation/orders/order.validation");
const { addProductValidation } = require("../validation/products/product.validation");
const { addInventoryValidation } = require("../validation/inventory/inventory.validation");

const vendorsController = require("../controller/vendors.controller");
const usersController = require("../controller/users.controller");
const productsController = require("../controller/products.controller");
const inventoryController = require("../controller/inventory.controller");
const ordersController = require("../controller/orders.controller");

//API to the users
router.post("/user", addUserValidation, usersController.post);
router.get("/users", usersController.get);
router.get("/users/:id", usersController.getById);
router.put("/users/:id", addUserValidation, usersController.update);
router.delete("/users/:id", usersController.delete);

//API to the Vendors
router.post("/vendor", addVendorValidation, vendorsController.post);
router.get("/vendors", vendorsController.get);
router.get("/vendors/:id", vendorsController.getById);
router.put("/vendors/:id", addVendorValidation, vendorsController.update);
router.delete("/vendors/:id", vendorsController.delete);

//API to the Products
router.post("/product", addProductValidation, productsController.post);
router.get("/products", productsController.get);
router.get("/products/:id", productsController.getById);
router.put("/products/:id", addProductValidation, productsController.update);
router.delete("/products/:id", productsController.delete);

//API to the Orders
router.post("/order", addOrderValidation, ordersController.post);
router.get("/orders", ordersController.get);
router.get("/orders/:id", ordersController.getById);
router.put("/orders/:id", addOrderValidation, ordersController.update);
router.delete("/orders/:id", ordersController.delete);

//API to the Inventory
router.post("/inventory", addInventoryValidation, inventoryController.post);
router.get("/inventory", inventoryController.get);
router.get("/inventory/:id", inventoryController.getById);
router.put("/inventory/:id", addInventoryValidation, inventoryController.update);
router.delete("/inventory/:id", inventoryController.delete);

module.exports = router;
