import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: '',
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        default: []
    }]
}, {
    timestamps: true
});

export const Category = mongoose.model("Category", categorySchema);