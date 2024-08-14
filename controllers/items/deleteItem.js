import { Item } from "../../modals/items.modal.js";

const deleteItem = async (req, res) => {
    try {
        const { name } = req.params;

        const item = await Item.findOne({ name });
        if(!item) {
            return res.status(400).json({ message: "Item not found" });
        }

        const deletedItem = await Item.findOneAndDelete({name});
        if(!deletedItem) {
            return res.status(500).json({ message: "Item not deleted" });
        }

        return res.status(200).json(deletedItem);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

export default deleteItem;