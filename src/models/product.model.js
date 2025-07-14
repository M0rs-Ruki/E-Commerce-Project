
// image - string
// name - string
// price - number
// description - string
// discount
// bgColor
// panelColor
// textColor


import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    Image: {
        data: Buffer,
        contentType: String
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    discount: { type: Number, default: 0 },
    bgColor: { type: String, default: '#ffffff' },
    panelColor: { type: String, default: '#f0f0f0' },
    textColor: { type: String, default: '#000000' }
})

const Product = mongoose.model('Product', productSchema);
export default Product;