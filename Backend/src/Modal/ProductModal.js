const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
        productname: { type: String, required: true },
        

    }
)