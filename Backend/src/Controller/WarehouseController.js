const Warehouse = require("../Modal/WarehouseModel");

const createWarehouse = async(req , res) =>{
    try {
        const newWarehouse = new Warehouse(req.body);
        await newWarehouse.save();
        res.status(201).json(newWarehouse);
    } catch (err) {
        res.status(400).json({Error : err.message});
    }
};

const getWarehouse = async (req , res)=>{
    try {
        const warehouse = await Warehouse.find();
        res.status(200).json(Warehouse);
    } catch (err) {
        res.status(500).json({Error : err.message});
    }
};

const updateWarehouse = async(req,res)=>{
    try {
        const usedId = req.params.id;
        const updatedWarehouse = await Warehouse.findByIdAndUpdate(usedId,req.body ,{new : true});
        res.status(200).json({message : "updated : "}, updatedWarehouse);
    } catch (err) {
        res.status(400).json({Error : err.message});
    }
};
const deleteWarehouse = async (req,res) =>{
    try {
        const deletewar = await Warehouse.findByIdAndDelete(req.params.id);
        res.status(204).json({message: "Warranty Deleted"}, deletewar);

    } catch (err) {
        res.status(400).json({error : err.message});
    }
}

module.exports = {createWarehouse, getWarehouse, updateWarehouse, deleteWarehouse};