const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, default: '' }, 
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);