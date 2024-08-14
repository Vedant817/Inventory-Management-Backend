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

categorySchema.pre('findOneAndDelete', async function(next) {
    const category = await this.model.findOne(this.getFilter());
    if (category && category.items.length > 0) {
        const error = new Error('Cannot delete category with items');
        error.statusCode = 400;
        return next(error);
    }
    next();
});

export const Category = mongoose.model("Category", categorySchema);