import { Item } from "../../modals/items.modal.js";

const getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category', 'name');
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default getItems;