const categoryModal = require("../Modal/CategoryModal.js")
exports.createCategory = async(req, res) => {
    try {
        const {category, subcategory, brand, description} = req.body;

        const normalizedCategory = String(category || '').trim().toLowerCase();
        const normalizedSubcategory = String(subcategory || '').trim().toLowerCase();
        const normalizedBrand = String(brand || '').trim().toLowerCase();
        const existing = await categoryModal.findOne({
            category:normalizedCategory,
            subcategory: normalizedSubcategory,
            brand:normalizedBrand
    
        });
        if(existing) {
            return res.status(409).json({message:"Category already exists!"})
        }

        const newCategory = new categoryModal({
            category: normalizedCategory,
            subcategory:normalizedSubcategory, 
            brand:normalizedBrand,
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