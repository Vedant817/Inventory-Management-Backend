import { Category } from "../../modals/category.modal.js";

const updateCategory = async (req, res) => {
    try {
        const newData = req.body;
        const { name } = req.params;
    
        const category = await Category.findOne({name});
        if(!category) {
            return res.status(400).json({message: "Category not found"});
        }
    
        const updatedCategory = await Category.findOneAndUpdate(
            {name: name},
            {$set: newData},
            {new: true, runValidators: true}
        )
    
        if(!updatedCategory) {
            return res.status(500).json({message: "Category not updated"});
        }
    
        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
};

export default updateCategory;