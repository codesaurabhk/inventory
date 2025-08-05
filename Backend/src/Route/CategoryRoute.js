const express = require("express")
const {createCategory,getAllCategory} = require("../Controller/CategoryController.js")

const categoryrouter = express.Router();

categoryrouter.post("/create", createCategory);
categoryrouter.get("/get", getAllCategory);

module.exports = categoryrouter;
