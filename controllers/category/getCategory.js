import { Category } from "../../modals/category.modal.js";

const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

export default getCategory;