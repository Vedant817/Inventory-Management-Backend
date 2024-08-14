import { Category } from "../../modals/category.modal.js";

const deleteCategory = async (req, res) => {
    try {
        const { name } = req.params;

        const category = await Category.findOne({name});
        if(!category) {
            return res.status(400).json({message: "Category not found"});
        }

        const deletedCategory = await Category.findOneAndDelete({name});

        return res.status(200).json({message: "Category deleted", deletedCategory});
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

export default deleteCategory;