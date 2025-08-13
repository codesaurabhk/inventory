const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
    warehouseName: {
        type: String,
        required: true,
    },
    warehouseCode: {
        type: Number,
        required: true,
    },
    warehouseOwner: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("Warehouse", WarehouseSchema); 