import { Category } from "../../modals/category.modal.js";

const createCategory = async (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }
    const newCategory = new Category({ name, description });
    try {
        await newCategory.save();
        return res.status(201).json({ category: newCategory });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default createCategory;