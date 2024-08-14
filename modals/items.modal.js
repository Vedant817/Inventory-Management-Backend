import mongoose, { Schema } from "mongoose";
import { Category } from "./category.modal.js";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: ''
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        default: null
    },
    quantity: {
        type: Number,
        default: 0
    },
});

itemSchema.pre('findOneAndDelete', async function(next) {
    const item = await this.model.findOne(this.getFilter());
    if(item){
        await Category.findOneAndUpdate(item.category, {
            $pull: { items: item._id }
        });
    }
    next();
})

export const Item = mongoose.model("Item", itemSchema);