import { Item } from "../../modals/items.modal.js";
import { Category } from "../../modals/category.modal.js";

const updateItem = async (req, res) => {
    try {
        const { name } = req.body;
        const { description, category, price, quantity } = req.body;

        const item = await Item.findOne({ name });
        if (!item) {
            return res.status(400).json({ message: "Item not found" });
        }

        const oldCategory = item.category;  //* Store the old category ID

        item.description = description || item.description;
        item.category = category || item.category;
        item.price = price !== undefined ? price : item.price;
        item.quantity = quantity !== undefined ? quantity : item.quantity;

        const updatedItem = await item.save();

        if (oldCategory.toString() !== category.toString()) {
            // Remove the item from the old category
            await Category.findByIdAndUpdate(oldCategory, {
                $pull: { items: item._id }
            });

            // Add the item to the new category
            await Category.findByIdAndUpdate(category, {
                $push: { items: item._id }
            });
        }

        return res.status(200).json(updatedItem);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default updateItem;