import { Item } from '../../modals/items.modal.js';
import { Category } from '../../modals/category.modal.js';

const createItem = async (req, res) => {
    try {
        const { name, description, category, price, quantity } = req.body;
        if (!name || !category) {
            return res.status(400).json({ message: "Name and Category are required" });
        }

        const newItem = new Item({ name, description, category, price, quantity });
        const savedItem = await newItem.save();

        //? Updating the items in the category
        const updateCategory = await Category.findOne({ name: category });
        if (updateCategory) {
            await Category.findOneAndUpdate(
                { name: category },
                { $push: { items: savedItem._id } },
            );
        } else {
            const newCategory = new Category({ name: category, items: [savedItem._id] });
            await newCategory.save();
        }

        return res.status(201).json({ item: savedItem });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default createItem;