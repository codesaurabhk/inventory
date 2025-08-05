const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema(
    {
        category:{type:String, required:true},
        subcategory:{type:String, required:true},
        brand:{type:String, required:true},
        description:{type:String, required: true}
    }, {
        timestamps:true
    }
)

const categoryModal = mongoose.model("Category", categorySchema);

module.exports = categoryModal;