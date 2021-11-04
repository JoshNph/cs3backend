import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        category: {type: String, required: true},
        image: {type: String, required: true},
        brand: {type: String, required: true},
        price: {type: Number, required: true},
        stock: {type: Number, required: true},
        rating: {type: Number, required: true},
        reviewers: {type: Number, required: true},
        sold: {type: Number, default:0},
        isActive: {type: Boolean, default:true}
    }, 
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

export default Product;