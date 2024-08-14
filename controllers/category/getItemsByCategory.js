import { Category } from "../../modals/category.modal.js";

const getItemsByCategory = async (req, res) => {
    try {
        const { name } = req.params;
        const category = await Category.findOne({name}).populate('items');

        if(!category) {
            return res.status(400).json({message: "Category not found"});
        }

        return res.status(200).json(category.items);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

export default getItemsByCategory;