const express = require("express");
const { createWarehouse, getWarehouse, updateWarehouse, deleteWarehouse } = require("../Controller/WarehouseController");
const Router = express.Router();

Router.post("/create",createWarehouse);
Router.get("/",getWarehouse);
Router.put("/update",updateWarehouse);
Router.delete("/delete",deleteWarehouse);

module.exports = Router;
