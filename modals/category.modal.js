import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        name: String,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
})

export const Category = mongoose.model("Category", categorySchema);