const categoryModal = require("../Modal/CategoryModal.js")
exports.createCategory = async(req, res) => {
    try {
        const {category, subcategory, brand, description} = req.body;

        const existing = await categoryModal.findOne({
            category:req.body.category.trim().toLowerCase(),
            subcategory:req.body.subcategory.trim().toLowerCase(),
            brand:req.body.brand.trim().toLowerCase()
        });
        if(existing) {
            return res.status(409).json({message:"Category already exists!"})
        }

        const newCategory = new categoryModal({
            category:category.trim.toLowerCase(), 
            subcategory:subcategory.trim.toLowerCase(), 
            brand:brand.trim.toLowerCase(), 
            description
        });

        await newCategory.save();
        res.status(201).json({message:"Category created successfully", category: newCategory})
    }
    catch(error) {
        console.error("Error submitting category", error);
        res.status(500).json({message:"Server error", error})
    }
} 

//get all category
exports.getAllCategory = async(req, res) => {
    try {
        const categorys = await categoryModal.find({})
        res.status(200).json(categorys)

    }catch(error) {
        console.error("Error fetching Category ", error);
        res.status(500).json({message:"Server error", error})
    }
}