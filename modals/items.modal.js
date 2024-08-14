import mongoose, { Schema } from "mongoose";

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

export const Item = mongoose.model("Item", itemSchema);